// Gives every news article without an image the publisher's own preview picture (its og:image / twitter:image,
// the picture shown when the link is shared). The picture is linked from the publisher's server, not copied.
// Run: node scripts/fill-images.mjs   then   npm run build
// Articles still listed as "none" (stories published without a photo) need a freely licensed picture added by hand.
import fs from "node:fs";

const FILE = new URL("../heroes.js", import.meta.url);
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";

const decode = s => /&amp;/.test(s) ? decode(s.replace(/&amp;/g, "&"))
  : s.replace(/&#x2F;/gi, "/").replace(/&#47;/g, "/").replace(/&quot;/g, '"');
// All preview pictures a page names, best first (some sites fill one of these tags with the page's own address).
const metaImages = (html, base) => {
  const tags = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => m[0]);
  return ["og:image", "og:image:secure_url", "twitter:image", "twitter:image:src"].flatMap(key => {
    const tag = tags.find(t => new RegExp(`(?:property|name)\\s*=\\s*["']${key}["']`, "i").test(t));
    const content = tag && (tag.match(/content\s*=\s*"([^"]+)"/i) || tag.match(/content\s*=\s*'([^']+)'/i) || [])[1];
    try { return content?.trim() ? [new URL(decode(content.trim()), base).href] : []; } catch { return []; }
  });
};

const viaFetch = async url => {
  try {
    const res = await fetch(url, { headers: { "user-agent": UA, accept: "text/html" }, redirect: "follow", signal: AbortSignal.timeout(20000) });
    if (res.ok) return metaImages(await res.text(), res.url);
  } catch { }
  return [];
};
// Sites that block plain requests often still serve the page to a real browser (same browsers as scripts/build.mjs).
let browser;
const viaChrome = async url => {
  if (!browser) {
    const chrome = [process.env.CHROME_PATH,
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
      "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/usr/bin/google-chrome", "/usr/bin/chromium"].find(p => p && fs.existsSync(p));
    if (!chrome) return [];
    const { default: puppeteer } = await import("puppeteer-core");
    browser = await puppeteer.launch({ executablePath: chrome, headless: true });
  }
  const page = await browser.newPage();
  try {
    await page.setUserAgent(UA);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  } catch { }
  try { return metaImages(await page.content(), url); } catch { return []; } finally { await page.close(); }
};

// Skips generic site logos and "no picture" images, which are not a picture of the story.
const usable = src => !/logo|default_image|default-image|placeholder|fallback|favicon/i.test(src.split("?")[0].split("/").pop());
const imageWorks = async src => {
  try {
    const res = await fetch(src, { headers: { "user-agent": UA }, signal: AbortSignal.timeout(20000) });
    return res.ok && /^image\//.test(res.headers.get("content-type") || "");
  } catch { return false; }
};
const pick = async list => { for (const src of new Set(list)) if (usable(src) && await imageWorks(src)) return src; };

const lines = fs.readFileSync(FILE, "utf8").split("\n");
let added = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!/type: "article"/.test(line) || /\bimage:/.test(line)) continue;
  const url = (line.match(/url: "([^"]+)"/) || [])[1];
  if (!url) continue;
  const src = await pick(await viaFetch(url)) || await pick(await viaChrome(url));
  if (src) {
    lines[i] = line.replace(/url: "[^"]+"/, m => `${m}, image: "${src.replace(/"/g, "%22")}"`);
    added++;
    console.log("ok  ", url, "\n     ", src);
  } else console.log("none", url);
}
await browser?.close();
fs.writeFileSync(FILE, lines.join("\n"));
console.log(`\nAdded ${added} images.`);

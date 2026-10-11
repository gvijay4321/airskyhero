// Gives every news article without an image the publisher's own preview picture (its og:image / twitter:image,
// the picture shown when the link is shared). The picture is linked from the publisher's server, not copied.
// Also gives each fun fact (facts.js) and act of kindness (kindness.js) a preview picture from one of its sources.
// Run: node scripts/fill-images.mjs   then   npm run build   (add --standins to also replace stand-in news pictures)
// Entries still listed as "none" (stories published without a photo) need a freely licensed picture added by hand.
// Look at the new pictures afterwards: a source's preview picture is sometimes a poor fit, so swap those by hand.
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
const usable = src => !/logo|default_image|default-image|placeholder|fallback|favicon|share-image|social-share|og-default/i
  .test(src.split("?")[0].split("/").pop());
const imageWorks = async src => {
  try {
    const res = await fetch(src, { headers: { "user-agent": UA }, signal: AbortSignal.timeout(20000) });
    return res.ok && /^image\//.test(res.headers.get("content-type") || "");
  } catch { return false; }
};
// Pictures already on the site are skipped, so no picture appears twice (a site's stock picture would otherwise repeat).
const used = new Set(["heroes.js", "facts.js", "kindness.js"].flatMap(name =>
  [...fs.readFileSync(new URL("../" + name, import.meta.url), "utf8").matchAll(/image: "([^"]+)"/g)].map(m => m[1])));
const pick = async list => {
  for (const src of new Set(list)) if (usable(src) && !used.has(attr(src)) && await imageWorks(src)) { used.add(attr(src)); return src; }
};
const findImage = async url => await pick(await viaFetch(url)) || await pick(await viaChrome(url));
const site = url => new URL(url).hostname.replace(/^www\./, "");
const attr = s => s.replace(/"/g, "%22");
let added = 0;

// News articles in heroes.js (one per line). With --standins, also swaps the stand-in pictures saved in images/news/
// for the publisher's own; a story whose publisher has no picture keeps its stand-in.
const standins = process.argv.includes("--standins");
const lines = fs.readFileSync(FILE, "utf8").split("\n");
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const standin = standins && /image: "images\/news\//.test(line);
  if (!/type: "article"/.test(line) || (/\bimage:/.test(line) && !standin)) continue;
  const url = (line.match(/url: "([^"]+)"/) || [])[1];
  if (!url) continue;
  const src = await findImage(url);
  if (src) {
    lines[i] = line.replace(/, image: "[^"]*"(, imageCredit: "[^"]*")?/, "")
      .replace(/url: "[^"]+"/, m => `${m}, image: "${attr(src)}"`);
    added++;
    console.log("ok  ", url, "\n     ", src);
  } else console.log("none", url);
}
fs.writeFileSync(FILE, lines.join("\n"));

// Fun facts and acts of kindness: the first preview picture found among each entry's sources, credited to that site.
for (const name of ["facts.js", "kindness.js"]) {
  const file = new URL("../" + name, import.meta.url);
  let text = fs.readFileSync(file, "utf8");
  for (const entry of text.match(/\{ id: "[^"]+"[\s\S]*?sources: \[[\s\S]*?\]/g) || []) {
    if (/\bimage:/.test(entry)) continue;
    const id = entry.match(/id: "([^"]+)"/)[1];
    let found;
    for (const url of entry.match(/sources: \[([\s\S]*)\]/)[1].match(/https?:[^"]+/g) || []) {
      const src = await findImage(url);
      if (src) { found = { src, url }; break; }
    }
    if (!found) { console.log("none", name, id); continue; }
    const fields = `image: "${attr(found.src)}", imageCredit: "${site(found.url)}", imageCreditUrl: "${attr(found.url)}",`;
    text = text.replace(entry, entry.replace(/\n(\s*)sources:/, (m, indent) => `\n${indent}${fields}\n${indent}sources:`));
    added++;
    console.log("ok  ", name, id, "\n     ", found.src);
  }
  fs.writeFileSync(file, text);
}
await browser?.close();
console.log(`\nAdded ${added} images.`);

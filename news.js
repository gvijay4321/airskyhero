// AirSkyHero shared helpers: hero page addresses, news & video cards and share buttons.
// Used in the browser (home page and hero pages) and by scripts/build.mjs to write the hero pages.

const SITE = "https://airskyhero.com";

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Hero page addresses: airskyhero.com/<slug>/ ---------- */
// slug comes from the name ("Robert Piché" -> "robert-piche") unless the hero sets slug: "...".
const heroSlug = h => h.slug || h.name.normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const heroPath = h => `/${heroSlug(h)}/`;
const heroUrl = h => SITE + heroPath(h);
const shareImage = h => `${SITE}/share/${heroSlug(h)}.jpg`;

/* ---------- News: video and article cards, plus live search links ---------- */
const youtubeId = url => (url.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/) || [])[1];
const newsDate = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
// Drops later items that report the same story as one already kept: most of the words in the shorter
// headline appear in the other (e.g. two outlets on the same award), or the link is the same.
const titleWords = t => new Set((t || "").toLowerCase().replace(/['’]s/g, "").match(/[a-z0-9]{3,}/g) || []);
const sameStory = (a, b) => {
  if (a.url === b.url) return true;
  const x = titleWords(a.title), y = titleWords(b.title);
  const shared = [...x].filter(w => y.has(w)).length;
  return Math.min(x.size, y.size) >= 4 && shared >= 0.8 * Math.min(x.size, y.size);
};
const uniqueStories = list => list.reduce((kept, n) => (kept.some(k => sameStory(k, n)) ? kept : [...kept, n]), []);
const ext = (url, html) => `<a href="${esc(url)}" target="_blank" rel="noopener">${html}</a>`;
// Outlet name sits under the picture, so it shows if the picture is missing or fails to load.
const thumb = (src, label) => `<span class="n-fallback">${esc(label)}</span>` +
  (src ? `<img src="${esc(src)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : "");
const cardText = n => `<div class="n-text">
  <span class="n-src">${esc(n.outlet || "")}${n.date ? " · " + (n.when || newsDate(n.date)) : ""}</span>
  ${n.title ? `<span class="n-title">${esc(n.title)}</span>` : ""}${n.hero ? `<span class="n-src">${esc(n.hero)}</span>` : ""}
  ${n.imageCredit ? `<span class="n-credit">Photo: ${esc(n.imageCredit)}</span>` : ""}</div>`;

const videoCard = v => `
  <div class="n-card">
    <div class="n-thumb">${thumb(`https://i.ytimg.com/vi/${youtubeId(v.url)}/hqdefault.jpg`, v.outlet || "Video")}
      <button data-yt="${youtubeId(v.url)}" aria-label="Play video: ${esc(v.title || v.outlet)}"></button></div>
    ${cardText(v)}
  </div>`;
const articleCard = a => `
  <a class="n-card" href="${esc(a.url)}" target="_blank" rel="noopener">
    <div class="n-thumb">${thumb(a.image && !/^https?:/.test(a.image) ? "/" + a.image.replace(/^\//, "") : a.image, a.outlet)}</div>
    ${cardText({ ...a, title: a.title || `Read the ${a.outlet} report ↗` })}
  </a>`;
// A swipeable row of cards; arrow buttons scroll it a page at a time on devices with a mouse.
const grid = cards => `<div class="n-rail">
  <div class="n-grid">${cards.join("")}</div>
  ${cards.length > 1 ? `<button class="n-nav n-prev" type="button" data-rail="-1" aria-label="Previous" disabled>‹</button>
  <button class="n-nav n-next" type="button" data-rail="1" aria-label="Next">›</button>` : ""}
</div>`;
const splitNews = h => {
  const items = h.news || [];
  const videos = items.filter(n => n.type === "video" && youtubeId(n.url));
  return { videos, articles: items.filter(n => !videos.includes(n)) };
};

function newsHtml(h) {
  const { videos, articles } = splitNews(h);
  const q = encodeURIComponent(h.newsQuery || `${h.name.replace(/"[^"]*"\s*/g, "")} ${h.flight}`);
  return `
    <h3 id="d-news-h">News &amp; videos</h3>
    ${videos.length ? `<h4>Videos · ${videos.length}</h4>${grid(videos.map(videoCard))}` : ""}
    ${articles.length ? `<h4>Articles · ${articles.length}</h4>${grid(articles.map(articleCard))}` : ""}
    <div class="news-search">
      ${ext(`https://news.google.com/search?q=${q}`, "Latest news ↗")}
      ${ext(`https://www.youtube.com/results?search_query=${q}&sp=CAI%253D`, "Latest videos ↗")}
    </div>`;
}

// A hero's name inside a sentence: "Passengers of …" becomes "passengers of …".
const inSentence = name => /^Passengers/.test(name) ? name[0].toLowerCase() + name.slice(1) : name;

/* ---------- Who helped: everyone on the hero's flight, from helpers.js ---------- */
// People without a free photo get a small icon for what they did, worked out from their role.
const ROLE_ICONS = {
  medic: '<path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" fill="currentColor" stroke="none"/>',
  atc: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="14" width="4.5" height="6.5" rx="1.5"/><rect x="17" y="14" width="4.5" height="6.5" rx="1.5"/>',
  rescue: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5"/>',
  pilot: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" stroke="none"/>',
  crew: '<circle cx="12" cy="10" r="3.6"/><path d="M7.6 6.6c1.6-2.3 7.2-2.3 8.8 0v1.2H7.6z" fill="currentColor"/><path d="M5 21.5c.4-4 3.3-6.5 7-6.5s6.6 2.5 7 6.5"/><path d="M9.5 18h5"/>',
  official: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  passenger: '<path d="M7 2.5h3l1.6 10H18a2 2 0 0 1 2 2V16h-9.4a2 2 0 0 1-2-1.7z"/><path d="M12.5 16 11 21.5M17 16l1 5.5M9 21.5h11"/>'
};
const roleKind = role => {
  const r = role.toLowerCase();
  if (/doctor|nurse|dentist|paramedic|\bdr\b/.test(r)) return "medic";
  if (/controller|tracon|approach/.test(r)) return "atc";
  if (/diver|helicopter|ferry|rescue|bystander|police/.test(r)) return "rescue";
  if (/captain|officer|pilot|engineer|airman|off-duty crew/.test(r)) return "pilot";
  if (/attendant|steward|purser|cabin|crew/.test(r)) return "crew";
  if (/director|manager/.test(r)) return "official";
  return "passenger";
};
const roleIcon = role => { const k = roleKind(role);
  return `<span class="h-icon h-${k}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ROLE_ICONS[k]}</svg></span>`; };

// helpers: the HELPERS list (flight name -> people); heroes: HEROES, used to link people who have their own page.
// The hero whose page this is is left out of their own list.
// What each person did is written out on one page per flight only (the flight's first hero in heroes.js), so no
// two pages repeat it. Other heroes from that flight, and short: true (the home page), list names and roles with
// a link to that page.
function helpersHtml(h, helpers, heroes, { short = false } = {}) {
  const people = (helpers?.[h.flight] || []).filter(p => p.heroId !== h.id);
  if (!people.length) return "";
  const page = id => { const o = (heroes || []).find(x => x.id === id); return o ? heroPath(o) : null; };
  const owner = (heroes || []).find(o => o.flight === h.flight) || h;
  if (short || owner !== h) {
    return `
    <h3 class="helpers-h">Who helped</h3>
    <p class="helpers-note">Besides ${esc(inSentence(h.name))}, ${people.length === 1 ? "one person" : `${people.length} people`} helped on ${esc(h.flight)}. What each of them did, with sources, is on <a href="${heroPath(owner)}#who-helped">${esc(owner.name)}'s page</a>.</p>
    <ul class="helpers-short">${people.map(p => {
      const link = p.heroId && page(p.heroId);
      return `<li>${link ? `<a href="${link}">${esc(p.name)}</a>` : esc(p.name)} <span class="h-role">${esc(p.role)}</span></li>`;
    }).join("")}</ul>`;
  }
  return `
    <h3 class="helpers-h" id="who-helped">Who helped</h3>
    <ul class="helpers">${people.map(p => {
      const link = p.heroId && page(p.heroId);
      const name = link ? `<a href="${link}">${esc(p.name)}</a>` : esc(p.name);
      const pic = p.photo ? `<img class="h-${roleKind(p.role)}" src="/${esc(p.photo.src)}" alt="" loading="lazy" width="56" height="56">` : roleIcon(p.role);
      const credit = p.photo ? `<span class="h-credit">Photo: <a href="${esc(p.photo.page)}" target="_blank" rel="noopener">${esc(p.photo.credit)}</a></span>` : "";
      const sources = (p.sources || []).length ? `<span class="h-src">Sources: ${p.sources.map((u, i) =>
        `<a href="${esc(u)}" target="_blank" rel="noopener" title="${esc(u.replace(/^https?:\/\/(www\.)?/, "").split("/")[0])}">${i + 1}</a>`).join(" ")}</span>` : "";
      return `
      <li class="${pic ? "has-pic" : ""}">${pic}<div><b>${name}</b> <span class="h-role">${esc(p.role)}</span><span class="h-did">${esc(p.did)}</span>${sources}${credit}</div></li>`;
    }).join("")}
    </ul>`;
}

/* ---------- Developing story note ---------- */
// Worded for each hero, so heroes from the same recent flight do not share an identical paragraph.
const developingText = h =>
  `${h.flight} on ${h.date} is still under investigation, so details of what ${inSentence(h.name)} did may change as more is confirmed.`;

/* ---------- Share buttons ---------- */
function shareHtml(h) {
  const url = heroUrl(h);
  const text = `${h.name}: ${h.flight}, ${h.year}. A hero of the sky on AirSkyHero`;
  const u = encodeURIComponent(url), t = encodeURIComponent(text);
  const link = (cls, href, label) => `<a class="sh ${cls}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
  return `<div class="share" data-url="${esc(url)}" data-text="${esc(text)}">
    <span class="share-label">Share</span>
    ${link("sh-wa", `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "WhatsApp")}
    ${link("sh-x", `https://x.com/intent/post?text=${t}&url=${u}`, "X")}
    ${link("sh-fb", `https://www.facebook.com/sharer/sharer.php?u=${u}`, "Facebook")}
    ${link("sh-in", `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, "LinkedIn")}
    <button class="sh sh-copy" type="button" data-copy>Copy link</button>
    <button class="sh sh-more" type="button" data-native>More…</button>
  </div>`;
}

/* ---------- Browser behaviour (one listener handles every page) ---------- */
if (typeof document !== "undefined") {
  // Phones with a share sheet get a "More…" button that opens it (see .can-share in site.css).
  if (navigator.share) document.documentElement.classList.add("can-share");

  // Card rows: arrows scroll by one screenful, and grey out at either end.
  const syncRail = rail => {
    const g = rail.querySelector(".n-grid"), [prev, next] = rail.querySelectorAll(".n-nav");
    if (!prev) return;
    prev.disabled = g.scrollLeft < 4;
    next.disabled = g.scrollLeft + g.clientWidth > g.scrollWidth - 4;
  };
  document.addEventListener("scroll", e => {
    if (e.target.classList && e.target.classList.contains("n-grid")) syncRail(e.target.parentElement);
  }, true);
  const syncAll = () => document.querySelectorAll(".n-rail").forEach(syncRail);
  addEventListener("resize", syncAll);
  new MutationObserver(syncAll).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", syncAll);

  document.addEventListener("click", e => {
    const nav = e.target.closest("[data-rail]");
    if (nav) {
      const g = nav.parentElement.querySelector(".n-grid");
      g.scrollBy({ left: Math.sign(+nav.dataset.rail) * g.clientWidth * 0.9, behavior: "smooth" });
      return;
    }
    // Swap a video card's play button for the YouTube player.
    const yt = e.target.closest("[data-yt]");
    if (yt) {
      yt.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${yt.dataset.yt}?autoplay=1" title="${esc(yt.getAttribute("aria-label"))}"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      return;
    }
    const box = e.target.closest(".share");
    if (!box) return;
    if (e.target.closest("[data-copy]")) {
      const b = e.target.closest("[data-copy]");
      navigator.clipboard.writeText(box.dataset.url).then(() => {
        b.textContent = "Link copied ✓";
        setTimeout(() => { b.textContent = "Copy link"; }, 2000);
      }, () => prompt("Copy this link:", box.dataset.url));
    } else if (e.target.closest("[data-native]")) {
      navigator.share({ title: document.title, text: box.dataset.text, url: box.dataset.url }).catch(() => {});
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { SITE, esc, youtubeId, heroSlug, heroPath, heroUrl, shareImage, newsDate, uniqueStories, splitNews, videoCard, articleCard, grid, newsHtml, helpersHtml, developingText, shareHtml };
}

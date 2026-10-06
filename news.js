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
const ext = (url, html) => `<a href="${esc(url)}" target="_blank" rel="noopener">${html}</a>`;
// Outlet name sits under the picture, so it shows if the picture is missing or fails to load.
const thumb = (src, label) => `<span class="n-fallback">${esc(label)}</span>` +
  (src ? `<img src="${esc(src)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : "");
const cardText = n => `<div class="n-text">
  <span class="n-src">${esc(n.outlet || "")}${n.date ? " · " + newsDate(n.date) : ""}</span>
  ${n.title ? `<span class="n-title">${esc(n.title)}</span>` : ""}
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

/* ---------- Who helped: optional list of the people behind a group story ---------- */
const helpersHtml = h => !h.helpers ? "" : `
    <h3 class="helpers-h">Who helped</h3>
    <ul class="helpers">${h.helpers.map(p => `
      <li><b>${esc(p.name)}</b> <span class="h-role">${esc(p.role)}</span><span class="h-did">${esc(p.did)}</span></li>`).join("")}
    </ul>`;

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
  module.exports = { SITE, esc, heroSlug, heroPath, heroUrl, shareImage, newsDate, splitNews, videoCard, articleCard, grid, newsHtml, helpersHtml, shareHtml };
}

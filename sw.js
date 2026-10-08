// AirSkyHero service worker: makes the site installable and usable offline.
// Pages and hero data are fetched fresh when online (so updates show right away)
// and fall back to the cached copy when offline.
const CACHE = "airskyhero-v9";
const SHELL = ["./", "index.html", "site.css", "theme.js", "news.js", "heroes.js", "helpers.js", "manifest.webmanifest", "icon.svg", "icon-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (/goatcounter\.com|zgo\.at/.test(new URL(e.request.url).hostname)) return; // visit counter: never cache
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok || res.type === "opaque") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || (e.request.mode === "navigate" ? caches.match("index.html") : undefined)))
  );
});

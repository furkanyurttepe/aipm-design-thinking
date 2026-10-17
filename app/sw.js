// Caches the whole app on first visit so it works offline at the venue.
// Bump VERSION whenever any app file changes.
const VERSION = "card-session-v8";
const SUITS = ["spade", "heart", "diamond", "club"];
const RANKS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const FILES = [
  "./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "assets/fonts/caveat-latin.woff2", "assets/fonts/caveat-latin-ext.woff2",
  "assets/cards/joker_red.png", "assets/cards/back-red.png",
  ...SUITS.flatMap(s => RANKS.map(r => `assets/cards/${s}_${r}.png`))
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  // The page itself: network first, so updates arrive at once; cached copy
  // when offline.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(res => { caches.open(VERSION).then(c => c.put("index.html", res.clone())); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  // Everything else (images, font, icons): cache first.
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});

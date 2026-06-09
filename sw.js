const CACHE_NAME = "bhupendra-v2";
const RUNTIME_CACHE = "bhupendra-runtime";

// App Shell (core files)
const FILES = [
  "/",
  "/index.html",
  "/games.html",
  "/games/tictactoe.html",
  "/useful_link.html",
  "/gaukhanekatha.html",
  "/currentaffairs.html",
  "/manifest.json",

  "/css/about-us.css",
  "/css/style.css",
  "/css/main.css",
  "/css/gaukhanekatha.css",
  "/css/game.css",
  "/css/footer.css",
  "/css/usefullinks.css",
  "/css/navbar.css",

  "/scripts/gaukhanekatha.js",
  "/Data/JavaScript/gaukhanekatha.js",
  "/Data/Gaukhanekatha/data.json",

  "/favicon/favicon-32x32.png",
  "/favicon/favicon-16x16.png",
  "/favicon/android-icon-192x192.png",
  "/favicon/android-icon-512x512.png"
];


// =========================
// INSTALL EVENT
// =========================
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app shell...");
      return cache.addAll(FILES);
    })
  );
});


// =========================
// ACTIVATE EVENT (CLEAN OLD CACHE)
// =========================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== RUNTIME_CACHE) {
            console.log("Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});


// =========================
// FETCH EVENT (SMART STRATEGY)
// =========================
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // 1. NAVIGATION (HTML pages)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match("/index.html");
      })
    );
    return;
  }

  // 2. STATIC CACHE-FIRST STRATEGY
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          // Save new files to runtime cache
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Optional offline fallback for images/files
          if (request.destination === "image") {
            return caches.match("/favicon/android-icon-192x192.png");
          }
        });
    })
  );
});

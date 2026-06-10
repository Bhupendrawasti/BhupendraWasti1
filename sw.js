const CACHE_NAME = "bhupendra-v3";
const RUNTIME_CACHE = "bhupendra-runtime";

// Core files to cache during installation
const FILES = [
  "/",
  "/index.html",
  "/offline.html",

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

  "/favicon/favicon-16x16.png",
  "/favicon/favicon-32x32.png",
  "/favicon/android-icon-192x192.png",
  "/favicon/android-icon-512x512.png",
  "/favicon/web-app-manifest-192x192.png",
  "/favicon/web-app-manifest-512x512.png"
];


// ===========================
// INSTALL
// ===========================
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES))
  );
});


// ===========================
// ACTIVATE
// ===========================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (
            key !== CACHE_NAME &&
            key !== RUNTIME_CACHE
          ) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});


// ===========================
// FETCH
// ===========================
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // HTML pages
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return caches.match("/offline.html");
        })
    );
    return;
  }

  // Static assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {

      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {

          // Cache successful requests
          if (
            request.method === "GET" &&
            networkResponse.status === 200
          ) {
            const responseClone =
              networkResponse.clone();

            caches.open(RUNTIME_CACHE)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }

          return networkResponse;
        })
        .catch(() => {

          // Offline image fallback
          if (request.destination === "image") {
            return caches.match(
              "/favicon/android-icon-192x192.png"
            );
          }

        });

    })
  );
});

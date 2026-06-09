const CACHE_NAME = "bhupendra-v1";

const FILES = [
  "/",
  "/index.html",
  "/useful_link.html",
  "/gaukhanekatha.html",
  "/currentaffairs.html",

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
  "/Data/Gaukhanekatha/data.json"
];

self.addEventListener("install",(e)=>{
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(FILES))
  );
});

self.addEventListener("fetch",(e)=>{
  e.respondWith(
    caches.match(e.request)
      .then(res=>res || fetch(e.request))
  );
});

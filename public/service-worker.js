const CACHE = "cannes-crm-v1";
const PRECACHE = [
  "/crm",
  "/index.html",
  "/manifest.webmanifest",
  "/icons/crm-180.png",
  "/icons/crm-192.png",
  "/icons/crm-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

function shouldCache(url) {
  return (
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/src/") ||
    url.pathname === "/crm" ||
    url.pathname === "/index.html" ||
    url.pathname === "/manifest.webmanifest" ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css")
  );
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    if (!url.pathname.startsWith("/crm")) return;
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          caches.open(CACHE).then((cache) => {
            cache.put("/crm", response.clone());
            cache.put("/index.html", response.clone());
          });
          return response;
        })
        .catch(() => caches.match("/crm").then((cached) => cached || caches.match("/index.html")))
    );
    return;
  }

  if (!shouldCache(url)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetched = fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});

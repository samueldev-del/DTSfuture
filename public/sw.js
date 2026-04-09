const STATIC_CACHE = "dtsfuture-static-v1";
const PAGE_CACHE = "dtsfuture-pages-v1";
const PRECACHE_URLS = [
  "/favicon.ico",
  "/icon.svg",
  "/manifest.webmanifest",
  "/pwa/apple-touch-icon.png",
  "/pwa/icon-192.png",
  "/pwa/icon-512.png",
  "/fr",
  "/en",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => ![STATIC_CACHE, PAGE_CACHE].includes(cacheName))
          .map((cacheName) => caches.delete(cacheName)),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  if (["style", "script", "image", "font"].includes(request.destination)) {
    event.respondWith(handleStaticRequest(request));
  }
});

async function handleNavigationRequest(request) {
  const cache = await caches.open(PAGE_CACHE);

  try {
    const response = await fetch(request);

    if (response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    const fallbackPath = new URL(request.url).pathname.startsWith("/en") ? "/en" : "/fr";
    return caches.match(fallbackPath);
  }
}

async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  const networkResponsePromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => cachedResponse);

  return cachedResponse || networkResponsePromise;
}
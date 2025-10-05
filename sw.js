// Contenuto per il file sw.js
const CACHE_NAME = 'radio-cache-v1';
const urlsToCache = [
  '/',
  '/app-rtm',
  'https://grandinettirita-creator.github.io/rtm-pwa-files/manifest.json',
  // Aggiungere qui eventuali risorse importanti come loghi o fogli di stile
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
});
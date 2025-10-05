// Contenuto corretto e completo per il file sw.js
const CACHE_NAME = 'radio-cache-v1';
const urlsToCache = [
  '/',
  '/app-rtm',
  'https://grandinettirita-creator.github.io/rtm-pwa-files/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Aggiungiamo le risorse alla cache per la modalità offline
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
});


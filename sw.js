
const CACHE_NAME = 'radio-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/192.png',
  '/512.png',
  '/1024.png',
  '/sw.js'
];

// Installazione: memorizza tutti i file nella cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch: intercetta le richieste e usa la cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Risponde con la risorsa in cache se trovata
        if (response) {
          return response;
        }
        // Altrimenti, fa una richiesta di rete
        return fetch(event.request);
      })
  );
});




const CACHE_NAME = 'joust-cache-v1';
const urlsToCache = [
  '/Joust/',
  '/Joust/index.html',
  '/Joust/styles/main.css',
  '/Joust/styles/board.css',
  '/Joust/js/main.js',
  '/Joust/js/game.js',
  '/Joust/js/knight.js',
  '/Joust/js/board.js',
  '/Joust/images/icon-192x192.png',
  '/Joust/images/icon-512x512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Resposta a requisições de rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna o arquivo do cache se ele existir
        if (response) {
          return response;
        }
        // Caso contrário, faz a requisição à rede
        return fetch(event.request);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
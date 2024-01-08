const cacheName = 'Calculadora de Índice de Massa Corpórea';
const filesToCache = [
  './',
  './index.html',
  './css/button.css',
  './css/form.css',
  './css/modal.css',
  './css/style.css',
  './css/reset.css',
  './js/form.js',
  './js/modal.js',
  './js/service_worker.js',
  './js/calculate_imc.js',
];
// inicializando a service worker e fazendo o dowload do conteudo da aplicação

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache)),
  );
});
// disponibilizando o conteudo quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

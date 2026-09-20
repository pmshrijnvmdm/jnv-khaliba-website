// Minimal service worker — required for the browser to consider this an installable PWA.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through: always fetch fresh from network (Firebase data must always be live).
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

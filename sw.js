importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-3'
var cacheList=[
  'https://861621821.github.io/PWA/PWA/index.html',
  'https://861621821.github.io/PWA/PWA/main.css',
  'https://861621821.github.io/PWA/PWA/1.png'
]
self.addEventListener('install',e =>{
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})
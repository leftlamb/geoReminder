var shellCache = 'shell';
var shellFiles = [
    '/',
    'index.html',
    'static/css',
    'icoc.png'
]

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(shellCache)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(shellFiles);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
});
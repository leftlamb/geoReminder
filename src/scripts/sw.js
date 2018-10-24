var dataCacheName = 'pointsData';
var shellCache = 'shell';

var shellFiles = [
    '/',
]

window.self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(shellCache)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(shellFiles);
        })
    );
});


window.self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
});
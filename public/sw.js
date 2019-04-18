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

// Add to homescreen prompt
let deferredPrompt;

const addAppDialog = document.getElementById('addDialog');
const btnAdd = document.getElementById('addButton');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  addAppDialog.style.display = 'flex';
});

btnAdd.addEventListener('click', (e) => {
  addAppDialog.style.display = 'none'; // hide our user interface that shows our A2HS button
  deferredPrompt.prompt(); // Show the prompt
  deferredPrompt.userChoice // Wait for the user to respond to the prompt
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});


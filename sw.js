// Service Worker for Blender Shortcuts App
const CACHE_NAME = 'blender-shortcuts-v2.0.0';
const CACHE_VERSION = '2.0.0';

// Assets to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/themes.css',
  '/css/responsive.css',
  '/js/config.js',
  '/js/translations.js',
  '/js/shortcuts-data.js',
  '/js/ui.js',
  '/js/search.js',
  '/js/export.js',
  '/js/main.js',
  '/manifest.json'
];

// Optional assets (loaded as needed)
const OPTIONAL_ASSETS = [
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/icon-maskable-192.png',
  '/assets/icons/icon-maskable-512.png'
];

// Runtime cache patterns
const RUNTIME_CACHE_PATTERNS = [
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/,
  /^https:\/\/cdnjs\.cloudflare\.com/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker version', CACHE_VERSION);
  
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        
        // Cache essential static assets
        console.log('[SW] Caching static assets');
        await cache.addAll(STATIC_ASSETS);
        
        // Try to cache optional assets (don't fail if unavailable)
        console.log('[SW] Attempting to cache optional assets');
        for (const asset of OPTIONAL_ASSETS) {
          try {
            await cache.add(asset);
          } catch (error) {
            console.warn('[SW] Failed to cache optional asset:', asset);
          }
        }
        
        console.log('[SW] Installation complete');
        
        // Skip waiting to activate immediately
        self.skipWaiting();
      } catch (error) {
        console.error('[SW] Installation failed:', error);
      }
    })()
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker version', CACHE_VERSION);
  
  event.waitUntil(
    (async () => {
      try {
        // Clean up old caches
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => 
          name.startsWith('blender-shortcuts-') && name !== CACHE_NAME
        );
        
        if (oldCaches.length > 0) {
          console.log('[SW] Cleaning up old caches:', oldCaches);
          await Promise.all(oldCaches.map(name => caches.delete(name)));
        }
        
        // Take control of all clients immediately
        await self.clients.claim();
        
        console.log('[SW] Activation complete');
        
        // Notify clients about the update
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_ACTIVATED',
            version: CACHE_VERSION
          });
        });
      } catch (error) {
        console.error('[SW] Activation failed:', error);
      }
    })()
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First (for static assets)
    if (isStaticAsset(request)) {
      return await cacheFirst(request);
    }
    
    // Strategy 2: Network First (for HTML and dynamic content)
    if (isHTMLRequest(request)) {
      return await networkFirst(request);
    }
    
    // Strategy 3: Stale While Revalidate (for external resources)
    if (isExternalResource(request)) {
      return await staleWhileRevalidate(request);
    }
    
    // Default: Network with cache fallback
    return await networkWithCacheFallback(request);
    
  } catch (error) {
    console.error('[SW] Fetch failed:', error);
    
    // Return offline fallback for HTML requests
    if (isHTMLRequest(request)) {
      return await getOfflineFallback();
    }
    
    // For other requests, return a basic response
    return new Response('Service Unavailable', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Cache First strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network First strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const networkResponsePromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(CACHE_NAME);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  }).catch(() => {
    // Silently fail network requests in background
  });
  
  return cachedResponse || networkResponsePromise;
}

// Network with cache fallback
async function networkWithCacheFallback(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Get offline fallback page
async function getOfflineFallback() {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match('/index.html');
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Create a basic offline response
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Offline - Blender Shortcuts</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          font-family: Arial, sans-serif; 
          text-align: center; 
          padding: 50px; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .offline-container {
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; margin-bottom: 30px; }
        button {
          background: #3498db;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover { background: #2980b9; transform: translateY(-2px); }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <h1>📱 Offline Modus</h1>
        <p>Die Blender Shortcuts App ist offline verfügbar!</p>
        <p>Ihre zuletzt besuchten Shortcuts sind weiterhin zugänglich.</p>
        <button onclick="window.location.reload()">🔄 Erneut versuchen</button>
      </div>
    </body>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache'
    }
  });
}

// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/);
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  const accept = request.headers.get('Accept') || '';
  return accept.includes('text/html') || url.pathname.endsWith('.html') || url.pathname === '/';
}

function isExternalResource(request) {
  const url = new URL(request.url);
  return RUNTIME_CACHE_PATTERNS.some(pattern => pattern.test(url.href));
}

// Handle background sync (for future features)
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-shortcuts') {
    event.waitUntil(syncShortcuts());
  }
});

async function syncShortcuts() {
  try {
    // Placeholder for future sync functionality
    console.log('[SW] Syncing shortcuts data');
    
    // Could sync user preferences, custom shortcuts, etc.
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        timestamp: Date.now()
      });
    });
  } catch (error) {
    console.error('[SW] Sync failed:', error);
  }
}

// Handle push notifications (for future features)
self.addEventListener('push', (event) => {
  console.log('[SW] Push received:', event.data?.text());
  
  const options = {
    body: event.data?.text() || 'New Blender shortcuts available!',
    icon: '/assets/icons/icon-192.png',
    badge: '/assets/icons/icon-72.png',
    tag: 'blender-shortcuts',
    requireInteraction: false,
    actions: [
      {
        action: 'view',
        title: 'View Shortcuts',
        icon: '/assets/icons/icon-72.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Blender Shortcuts', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      self.clients.openWindow('/')
    );
  }
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: CACHE_VERSION,
      cacheName: CACHE_NAME
    });
  }
  
  if (event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(clearAllCaches());
  }
});

async function clearAllCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('[SW] All caches cleared');
  } catch (error) {
    console.error('[SW] Failed to clear caches:', error);
  }
}

// Handle periodic background sync (for browsers that support it)
self.addEventListener('periodicsync', (event) => {
  console.log('[SW] Periodic sync:', event.tag);
  
  if (event.tag === 'update-shortcuts') {
    event.waitUntil(updateShortcutsData());
  }
});

async function updateShortcutsData() {
  try {
    // Placeholder for checking for shortcuts updates
    console.log('[SW] Checking for shortcuts updates');
    
    // In a real implementation, you might:
    // 1. Fetch latest shortcuts from an API
    // 2. Compare versions
    // 3. Update cache if newer version available
    // 4. Notify user of updates
    
  } catch (error) {
    console.error('[SW] Update check failed:', error);
  }
}

// Log service worker lifecycle
console.log('[SW] Service Worker script loaded');

// Export for testing (if in a module environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CACHE_NAME,
    CACHE_VERSION,
    STATIC_ASSETS
  };
}
//var cacheNameStatic = 'myPieStatic-v1.0';
//var cacheNameDynamic = 'myPieDynamic-v1.0';

//var urlsToCache = [
//    '/',
//    '/home/about',
//    '/home/contact',
//    '/manifest.json',
//    '/fallback.json',
//    '/lib/bootstrap/dist/css/bootstrap.css',
//    '/lib/bootstrap/dist/css/bootstrap.css.map',
//    '/css/site.css',
//    '/images/carousel1.jpg',
//    '/images/carousel2.jpg',
//    '/images/carousel3.jpg',
//    '/images/fetch-dog.jpg',
//    '/images/IphoneSplash.png',
//    '/lib/jquery/dist/jquery.js',
//    '/lib/bootstrap/dist/js/bootstrap.js',
//    '/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
//    '/favicon.ico'
//];

//self.addEventListener('install', function (e) {
//    console.log('[ServiceWorker] Install');
//    e.waitUntil(
//        caches.open(cacheNameStatic).then(function (cache) {
//            console.log('[ServiceWorker] Caching app shell');
//            return cache.addAll(urlsToCache).then(function () {
//                self.skipWaiting();
//            });
//        })
//    );
//});

////self.addEventListener('activate', function (e) {
////    console.log('[ServiceWorker] Activate');
////    e.waitUntil(
////        caches.keys().then(function (keyList) {
////            return Promise.all(keyList.map(function (key) {
////                if (key !== cacheNameStatic) {
////                    console.log('[ServiceWorker] Removing old cache', key);
////                    return caches.delete(key);
////                }
////            }));
////        })
////    );
////    return self.clients.claim();
////});

////self.addEventListener('fetch', function (e) {
////    console.log('[ServiceWorker] Fetch', e.request.url);
////    e.respondWith(
////        caches.match(e.request).then(function (response) {
////            return response || fetch(e.request);
////        })
////    );
////});


//self.addEventListener(`fetch`, event => {
//    const req = event.request;

//    const url = new URL(req.url);

//    if (url.origin === location.origin) {
//        event.respondWith(cachFirst(req));
//    } else {
//        event.respondWith(networkFirst(req));
//    }

//});

//async function cachFirst(req) {
//    const cachesResponse = await caches.match(req);
//    return cachesResponse || fetch(req);
//}

//async function networkFirst(req) {
//    const cache = await caches.open(cacheNameDynamic);

//    try {
//        const res = await fetch(req);
//        cache.put(req, res.clone());
//        return res;

//    } catch (error) {
//        const cachedResponse = await cache.match(req);
//        return cachedResponse || await caches.match(`./fallback.json`);
//    }
//}
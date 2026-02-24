'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/apple-app-site-association": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "e513e200058661bc02416037db78576f",
"assets/AssetManifest.bin.json": "83c67c3176b4227e949ebb69671535f8",
"assets/assets/data/quotes_en.json": "bc3e6e012c9c6f5211fd73010f13bbac",
"assets/assets/fonts/DIN2014Bold.otf": "df2bf1de895cd9841f612deef5556a41",
"assets/assets/fonts/DIN2014Demi.otf": "a847635ef4e6e0516fd7dd6b1a369a4e",
"assets/assets/fonts/DIN2014ExtraBold.otf": "122599a7e685ca42f1aabc416850c18e",
"assets/assets/fonts/DIN2014Regular.otf": "945d39aeb9c874822dde0932570e704e",
"assets/assets/icons/247LTD.svg": "ec87a593d84aa35299e3767a18791c7d",
"assets/assets/icons/coffeecup.svg": "dc789f5f0c6440a044fa3437567f690e",
"assets/assets/icons/coke_bottle.svg": "c0537bda38341899dac2dae4a4d4a4e7",
"assets/assets/icons/Endure_Logo.svg": "2d0a639b802909fa075002e6129bebac",
"assets/assets/icons/gear-icon.svg": "16d6eff8f879f20dc76a26fa735cc76f",
"assets/assets/icons/hamburger.svg": "ac8b8b3272d9b3d88e5b46f8509d9587",
"assets/assets/icons/instagram.svg": "7e4fd36bdc2ee318b08ae3599b8c78db",
"assets/assets/icons/linkedin.svg": "02e08964e2096d89e96079d91bc7a086",
"assets/assets/icons/share.svg": "1c8d39b6914dc9b4ab70d53a1b5c3bca",
"assets/assets/icons/triangle.svg": "7e4779edc1f93d0d11a174c4ca967b52",
"assets/assets/icons/www.svg": "3de8ff991c30a42548fb8efd4f7bb1ee",
"assets/assets/icons/x-logo.svg": "86fe7725bc3a3e439b5f99603f593597",
"assets/FontManifest.json": "f07871b083b0201560ddec1d213b3f73",
"assets/fonts/MaterialIcons-Regular.otf": "2b35bc832b279bd1ae39cd2f2ce6224b",
"assets/NOTICES": "68bbf19a9e0b334e664fa0d9c73f85ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"CNAME": "12b0e40e7acc6bb9d3b9370d55bc3a42",
"favicon.png": "9d0cf019440b7918aa3e0f195e451101",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f246a98e9919f1b1e2372f80ea7f5282",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa365caef999c050a1de005b28c52a79",
"/": "fa365caef999c050a1de005b28c52a79",
"main.dart.js": "e4f397ab9b6b096bb30f4efc6308b739",
"manifest.json": "1787413f9cf062a61db98ab676f4d268",
"splash/img/branding-1x.png": "33e43231afb185970f8657aae0f2cd89",
"splash/img/branding-2x.png": "a63fdaf6b12f407befd6527bd1d63f2f",
"splash/img/branding-3x.png": "87e6adfd6f16539cf0fc0b8c6afda276",
"splash/img/branding-4x.png": "42a11dd02f4f030760dc86da71f668d6",
"splash/img/branding-dark-1x.png": "33e43231afb185970f8657aae0f2cd89",
"splash/img/branding-dark-2x.png": "a63fdaf6b12f407befd6527bd1d63f2f",
"splash/img/branding-dark-3x.png": "87e6adfd6f16539cf0fc0b8c6afda276",
"splash/img/branding-dark-4x.png": "42a11dd02f4f030760dc86da71f668d6",
"splash/img/dark-1x.png": "33e43231afb185970f8657aae0f2cd89",
"splash/img/dark-2x.png": "a63fdaf6b12f407befd6527bd1d63f2f",
"splash/img/dark-3x.png": "87e6adfd6f16539cf0fc0b8c6afda276",
"splash/img/dark-4x.png": "42a11dd02f4f030760dc86da71f668d6",
"splash/img/light-1x.png": "33e43231afb185970f8657aae0f2cd89",
"splash/img/light-2x.png": "a63fdaf6b12f407befd6527bd1d63f2f",
"splash/img/light-3x.png": "87e6adfd6f16539cf0fc0b8c6afda276",
"splash/img/light-4x.png": "42a11dd02f4f030760dc86da71f668d6",
"version.json": "145c4a349cf70ca30ba57904d024bc69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

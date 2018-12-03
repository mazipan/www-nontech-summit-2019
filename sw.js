importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4aa5555ab183fe0f14f0.js",
    "revision": "a93b6276bd2140de5bf9ee6bf8c610cc"
  },
  {
    "url": "/_nuxt/55c63e080eb2419e3858.js",
    "revision": "c2c4c0b01f9bf562bc818368e9e6446e"
  },
  {
    "url": "/_nuxt/69542ef038c2ff93638c.js",
    "revision": "3b4f49c80c5677b760b4fdaa8556721a"
  },
  {
    "url": "/_nuxt/752a1c38f9207e34067d.js",
    "revision": "fa55d8e2e052c91128047fb0d9842bf4"
  },
  {
    "url": "/_nuxt/784c9048d00299723b06.js",
    "revision": "3acf2dd9e703508c0bbd7e43d635c137"
  },
  {
    "url": "/_nuxt/7b5b1ff280e8cdd1266d.js",
    "revision": "e1742392504ae588cbbbd9571040d5f6"
  },
  {
    "url": "/_nuxt/7d4ce9bfb2c8ea5a2bcf.js",
    "revision": "e91b9f97a4f5bb39c5ab92c00fb6fb78"
  },
  {
    "url": "/_nuxt/961a467694d5c4fb2be1.js",
    "revision": "fa4188e9e782fd8f01b84d5f14995936"
  },
  {
    "url": "/_nuxt/9cf74537af6b3c2c56ae.js",
    "revision": "db2caee0891a3115008f559e8382984d"
  },
  {
    "url": "/_nuxt/a90a2111fc299575e580.js",
    "revision": "3bfc89c16f5af31c5e0792eb4cba6905"
  },
  {
    "url": "/_nuxt/ae92e7330ffe43242641.js",
    "revision": "88c208c6cf7b68ccc044adf52ab176ba"
  },
  {
    "url": "/_nuxt/be1e40023db918ee78de.js",
    "revision": "9546a93c0ffca9b73421b576031a66ba"
  },
  {
    "url": "/_nuxt/dad4778fee9e9662671a.js",
    "revision": "90bb853a796bae3569fe33388fb34509"
  },
  {
    "url": "/_nuxt/fd8a0c018f1a2e240225.js",
    "revision": "b9656fc069038bfd77a269e266fac3ed"
  }
], {
  "cacheId": "smesummit.id",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

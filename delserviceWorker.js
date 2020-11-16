const staticProject ="project-site-v1"
const assets=[
    "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/card.png",
  "/images/tosala2.png",
  "/images/water-drop.png",
  "/images/liquor.png",
  "/images/coffee.jpg",
  "/images/first-rate.png",
  "/images/aulda.png",
  "/images/dav.png",
  "/images/self.png",
  "/images/music.png",
]

self.addEventListener('install', installEvent=>{
    installEvent.waitUntil(
        caches.open(staticProject).then(cache=>{
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', fetchEvent=>{
    fetchEvent.respondwith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
})
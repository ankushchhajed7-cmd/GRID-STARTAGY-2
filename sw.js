/* GRID 2 service worker — v1.0.0
   App shell: network-first (naya build turant milega), offline pe cache.
   Firebase data: hamesha network (kabhi cache nahi). */
const CACHE='grid2-v1.0.0';
const SHELL=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.hostname.includes('firebasedatabase.app')||url.hostname.includes('firebaseio.com')) return; // live data: no cache
  e.respondWith(
    fetch(req).then(res=>{
      if(res&&res.ok&&(url.origin===location.origin||url.hostname.includes('fonts.g'))){
        const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));
      }
      return res;
    }).catch(()=>caches.match(req).then(r=>r||(req.mode==='navigate'?caches.match('./index.html'):undefined)))
  );
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window'}).then(cs=>{
    for(const c of cs){ if('focus' in c) return c.focus(); }
    return self.clients.openWindow('./');
  }));
});

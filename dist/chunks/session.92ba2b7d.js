let r=[],f=u=>{let e,t=[],l={lc:0,value:u,set(n){l.value=n,l.notify()},get(){return l.lc||l.listen(()=>{})(),l.value},notify(n){e=t;let s=!r.length;for(let i=0;i<e.length;i++)r.push(e[i],l.value,n);if(s){for(let i=0;i<r.length;i+=3)r[i](r[i+1],r[i+2]);r.length=0}},listen(n){return t===e&&(t=t.slice()),l.lc=t.push(n),()=>{t===e&&(t=t.slice());let s=t.indexOf(n);~s&&(t.splice(s,1),l.lc--)}},subscribe(n){let s=l.listen(n);return n(l.value),s},off(){}};return l},a=(u={})=>{let e=f(u);return e.setKey=function(t,l){typeof l>"u"?t in e.value&&(e.value={...e.value},delete e.value[t],e.notify(t)):e.value[t]!==l&&(e.value={...e.value,[t]:l},e.notify(t))},e};const o=a({headerTransparent:!0,headerForceSolid:!1});export{o as s};

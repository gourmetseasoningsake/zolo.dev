let t=[],v=(r,n)=>{let s,l=[],i={lc:0,l:n||0,value:r,set(u){i.value=u,i.notify()},get(){return i.lc||i.listen(()=>{})(),i.value},notify(u){s=l;let f=!t.length;for(let e=0;e<s.length;e+=2)t.push(s[e],i.value,u,s[e+1]);if(f){for(let e=0;e<t.length;e+=4){let o=!1;for(let a=e+7;a<t.length;a+=4)if(t[a]<t[e+3]){o=!0;break}o?t.push(t[e],t[e+1],t[e+2],t[e+3]):t[e](t[e+1],t[e+2])}t.length=0}},listen(u,f){return l===s&&(l=l.slice()),i.lc=l.push(u,f||i.l)/2,()=>{l===s&&(l=l.slice());let e=l.indexOf(u);~e&&(l.splice(e,2),i.lc--,i.lc||i.off())}},subscribe(u,f){let e=i.listen(u,f);return u(i.value),e},off(){}};return i},c=(r={})=>{let n=v(r);return n.setKey=function(s,l){typeof l>"u"?s in n.value&&(n.value={...n.value},delete n.value[s],n.notify(s)):n.value[s]!==l&&(n.value={...n.value,[s]:l},n.notify(s))},n};const p={sentinelHeader:!0,stateNavApp:null},h=c(p);export{v as a,c as m,h as s};
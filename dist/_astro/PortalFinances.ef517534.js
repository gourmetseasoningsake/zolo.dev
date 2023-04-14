import{m as x,a as V}from"./session.4de64880.js";import{_ as Z}from"./_plugin-vue_export-helper.c27b6911.js";import{u as k}from"./index.c02d682e.js";import{d as j,o as ee,c as te,t as ne}from"./runtime-core.esm-bundler.40fa80ba.js";const re=0,se=1,A=10;let G=(e,n,t,r)=>(e.events=e.events||{},e.events[t+A]||(e.events[t+A]=r(l=>{e.events[t].reduceRight((a,g)=>(g(a),a),{shared:{},...l})})),e.events[t]=e.events[t]||[],e.events[t].push(n),()=>{let l=e.events[t],a=l.indexOf(n);l.splice(a,1),l.length||(delete e.events[t],e.events[t+A](),delete e.events[t+A])}),ie=(e,n)=>G(e,n,re,t=>{let r=e.listen;return e.listen=l=>(!e.lc&&!e.starting&&(e.starting=!0,t(),delete e.starting),r(l)),()=>{e.listen=r}}),oe=(e,n)=>G(e,n,se,t=>{let r=e.off;return e.off=()=>{t(),r()},()=>{e.off=r}}),ae=()=>({events:{},emit(e,...n){let t=this.events[e]||[];for(let r=0,l=t.length;r<l;r++)t[r](...n)},on(e,n){return this.events[e]?.push(n)||(this.events[e]=[n]),()=>{this.events[e]=this.events[e]?.filter(t=>n!==t)}}});const le=({cache:e=new Map,fetcher:n,...t}={})=>{const r=ae();let l=!0;K("focus",()=>{l=!0,r.emit($)}),K("blur",()=>l=!1),K("online",()=>r.emit(z));const a=new Map,g=new Map,O=new Set,U=new Map;let M={};const y=async([s,w],f,i,v)=>{var m;U.set(f,s);const o=()=>U.get(f)===s,c=u=>{o()&&(f.set(u),r.emit(B,s,u))},d=(u,h)=>{o()&&f.setKey(u,h)};if(!l)return;const{dedupeTime:p=4e3,fetcher:_}={...i,...M},T=H();if(!v){R().then(()=>{const h=e.get(s);f.value.data!==h&&c(h?{data:h,loading:!1}:b)}),await R();const u=g.get(s);if(u&&u+p>T)return}if(!O.has(s)){g.set(s,T),O.add(s),d("loading",!0);try{const u=await _(...w);e.set(s,u),c({data:u,loading:!1}),g.set(s,H())}catch(u){(m=i.onError)==null||m.call(i,u),d("error",u),d("loading",!1)}finally{O.delete(s)}}},J=(s,{fetcher:w=n,...f}={})=>{const i=x({loading:!0}),v={...t,...f,fetcher:w};let m,o,c,d,p,_=[];ie(i,()=>{const h=!m;[p,m]=ue(s),d=p.subscribe(E=>{if(E){const[S,P]=E;i.key=S,y([S,P],i,v),o=S,c=P}else i.key=o=c=void 0});const F=p.get();F?([o,c]=F,h&&T()):R().then(()=>i.set(b));const{refetchInterval:N=0,refetchOnFocus:W,refetchOnReconnect:X}=v,C=()=>{o&&y([o,c],i,v)};N>0&&a.set(s,setInterval(C,N)),W&&_.push(r.on($,C)),X&&_.push(r.on(z,C)),_.push(r.on(Y,(E,S)=>{o&&q(o,E)&&(S===void 0?(e.delete(o),g.delete(o)):e.set(o,S),i.setKey("data",S))}),r.on(D,E=>{o&&q(o,E)&&y([o,c],i,v,!0)}),r.on(B,(E,S)=>{E===o&&i.value!==S&&i.set(S)}))});const T=()=>{o&&c&&y([o,c],i,v)},u=i.listen;return i.listen=h=>(T(),u(h)),oe(i,()=>{m?.(),_.forEach(F=>F()),_=[],d?.();const h=a.get(s);h&&clearInterval(h)}),i},I=s=>{r.emit(D,s)},L=(s,w)=>{r.emit(Y,s,w)};function Q(s){const w=async i=>{var v,m;const o=(v=M.fetcher)!=null?v:s,c=[];try{f.set({error:void 0,loading:!0,data:void 0,mutate:w});const d=await o({data:i,invalidate:p=>{c.push(p)},getCacheUpdater:(p,_=!0)=>[T=>{L(p,T),_&&c.push(p)},e.get(p)]});return f.setKey("data",d),d}catch(d){(m=t?.onError)==null||m.call(t,d),f.setKey("error",d)}finally{f.setKey("loading",!1),I(c)}},f=x({mutate:w,loading:!1});return f}return[J,Q,{__unsafeOverruleSettings:s=>{console.warn("You should only use __unsafeOverruleSettings in test environment"),M=s},invalidateKeys:I,mutateCache:L}]},ue=e=>{if(typeof e=="string")return[V([e,[e]]),()=>{}];let n=V(null),t=[];const r=()=>{t.some(a=>a==null)?n.set(null):n.set([t.join(""),t])},l=[];for(let a=0;a<e.length;a++){const g=e[a];if(typeof g=="string"){t.push(g);continue}l.push(g.subscribe(O=>{t[a]=O,r()}))}return r(),[n,()=>l.forEach(a=>a())]},$=1,z=2,D=3,Y=4,B=5,K=(e,n)=>{typeof window>"u"||addEventListener(e,n)},q=(e,n)=>Array.isArray(n)?n.includes(e):typeof n=="function"?n(e):e===n,H=()=>new Date().getTime(),R=()=>new Promise(e=>e()),b=Object.freeze({loading:!0});function ce({baseUrl:e,...n}){return le({fetcher:(...t)=>fetch([e,...t].join(""),n).then(r=>r.json())})}const[fe,we]=ce({baseUrl:"https://zolosake-api.pages.dev"}),de=fe(["/github/user"]),he=j({setup(){return{user:k(de)}},computed:{test(){return this.user.loading?"Lade Finanzen":this.user.error?"Error":(console.log(this.user.data),"true dummy")}}});function pe(e,n,t,r,l,a){return ee(),te("div",null,ne(e.test),1)}const Ee=Z(he,[["render",pe]]);export{Ee as default};

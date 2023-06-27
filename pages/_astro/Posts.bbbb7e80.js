import{C as M,S as N,D as L}from"./Content.9fb6b5d2.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{d as b,o as n,g as E,w as u,r as A,n as w,h as T,c as a,a as o,e as c,F as S,f as k,t as C,b as D,i as x,j as I,k as f,m as z}from"./runtime-core.esm-bundler.52646ad2.js";import{w as p,a as r}from"./runtime-dom.esm-bundler.48b26bd3.js";const K=b({props:{is:{type:String,required:!0},as:{type:String},mb:{type:Boolean,default:!1}},computed:{appearance(){return this.as||this.is},classes(){return{"font-extrabold text-4xl sm:text-6xl":this.appearance==="h1","font-medium italic text-2xl sm:text-3xl":this.appearance==="h2","font-medium italic":this.appearance==="h3","mb-8":this.mb&&this.appearance==="h1","mb-2":this.mb&&this.appearance==="h2","mb-1":this.mb&&this.appearance==="h3"}}}});function V(e,t,i,l,v,$){return n(),E(T(`${e.is}`),{class:w(["font-mono",e.classes])},{default:u(()=>[A(e.$slots,"default")]),_:3},8,["class"])}const G=h(K,[["render",V]]),j=b({props:{focus:{type:Boolean,default:!1}},computed:{classes(){return{focus:this.focus}},tabindex(){return this.focus?"0":void 0}}}),H=["tabindex"],O={class:"inline-block max-w-2xl"};function R(e,t,i,l,v,$){return n(),a("p",{class:w(["mb-2 last:mb-0 font-mono font-thin",e.classes]),tabindex:e.tabindex},[o("span",O,[A(e.$slots,"default")])],10,H)}const Q=h(j,[["render",R]]),J=b({props:{href:{type:String,required:!0},title:{type:String,required:!1},target:{type:String,required:!1},rel:{type:String,required:!1},currentPath:{type:Boolean,required:!1}},computed:{ariaCurrent(){return this.currentPath&&"page"},classes(){return{underline:this.ariaCurrent}}}}),U=["href","title","target","rel","aria-current"];function W(e,t,i,l,v,$){return n(),a("a",{class:w(["touch-manipulation font-light text-action-fg focus:underline underline-offset-8 decoration-2",e.classes]),href:e.href,title:e.title,target:e.target,rel:e.rel,"aria-current":e.ariaCurrent},[A(e.$slots,"default")],10,U)}const X=h(J,[["render",W]]),Y=b({components:{Link:X},props:{title:{type:String,required:!0},items:{type:Array,default(){return[]}}}}),Z=["title"],ee={class:"inline sm:table-cell italic font-extrabold sm:pr-2"},te={class:"inline sm:table-cell sm:w-full font-thin"},se={key:1};function oe(e,t,i,l,v,$){const y=c("Link");return e.items.length?(n(),a("dl",{key:0,title:e.title,class:"sm:table max-w-2xl pb-0.5 text-xs leading-relaxed"},[(n(!0),a(S,null,k(e.items,(s,d)=>(n(),a("div",{key:d,class:"contents sm:table-row"},[o("dt",ee,C(s.key+" "),1),o("dd",te,[s.value.href?(n(),E(y,{key:s.value.href,href:s.value.href,title:s.value.title,target:s.value.target,rel:s.value.rel},{default:u(()=>[D(C(s.value.text+" "),1)]),_:2},1032,["href","title","target","rel"])):(n(),a("span",se,C(s.value+" "),1))])]))),128))],8,Z)):x("",!0)}const ne=h(Y,[["render",oe]]),re=b({props:{sourceSet:{type:Array,required:!0}},data(){return{loaded:!1,placeholderSrc:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},mounted(){new IntersectionObserver(([t],i)=>{if(t?.isIntersecting){let l=new Image;l.onload=()=>{this.$el.srcset=l.srcset,this.loaded=!0},l.sizes=this.$el.sizes,l.srcset=this.dataSrcset,i.disconnect()}},{root:null,rootMargin:"50px",threshold:0}).observe(this.$el)},computed:{classes(){return{"opacity-0":!this.loaded,"opacity-100":this.loaded}},dataSrcset(){return this.sourceSet.join(",")}}}),ie=["src"];function le(e,t,i,l,v,$){return n(),a("img",{class:w(["transition-opacity duration-500",e.classes]),src:e.placeholderSrc},null,10,ie)}const _=h(re,[["render",le]]);function ae(){return String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,"")}const de=b({inheritAttrs:!1,components:{Image:_},props:{title:{type:String,required:!0},items:{type:Array,required:!0}},setup(){const e=I(null),t=I(null);return{dialog:e,list:t}},data(){return{uid:"dialog-"+ae(),active:!1,itemEnlarged:{i:0,...this.items[0]},dialogControls:null,dialogControlFocused:1}},computed:{classesDialog(){return this.active?"fixed z-50 inset-0 overflow-auto overscroll-none scrollbar-hidden":"hidden invisible"}},mounted(){this.dialogControls=this.dialog.querySelectorAll('button[tabindex="-1"]')},methods:{openDialog(){this.active=!0,this.$nextTick(()=>{this.dialog&&(this.dialog.focus(),this.dialog.tabIndex=0),this.dialogControls[this.dialogControlFocused].focus()}),document.scrollingElement&&document.scrollingElement.classList.add("scrollbar-hidden")},closeDialog(){this.list.querySelector('[role="button"][aria-pressed="true"]').focus(),this.dialog.tabIndex=-1,this.dialogControlFocused=1,this.active=!1,document.scrollingElement?.classList.remove("scrollbar-hidden")},setItemEnlarged(e){this.itemEnlarged={i:e,...this.items[e]}},setNextItemEnlarged(e){let t=(e+1)%this.items.length;this.itemEnlarged={i:t,...this.items[t]}},setPrevItemEnlarged(e){const t=this.items.length;let i=(e+t-1)%t;this.itemEnlarged={i,...this.items[i]}},focusNextDialogControl(e){if(this.dialogControls){let t=(e+1)%this.dialogControls.length;this.dialogControls[t].focus(),this.dialogControlFocused=t}},focusPrevDialogControl(e){if(this.dialogControls){const t=this.dialogControls.length;let i=(e+t-1)%t;this.dialogControls[i].focus(),this.dialogControlFocused=i}}}}),ue=["title"],ce=["aria-controls","aria-pressed","onTouchstart","onFocusin"],pe=["id","aria-hidden"],ge={class:"relative h-screen-px"},me=o("div",{class:"absolute z-0 inset-0 h-full bg-system-bg opacity-90"},null,-1),fe={class:"sticky top-0 h-screen overflow-auto"},he={class:"grid-media h-full"},be={class:"area-footer p-8"},ve={role:"list",class:"flex justify-center"},$e=o("span",{"aria-hidden":"true"},"←",-1),ye=[$e],Ee=o("span",{"aria-hidden":"true"},"→",-1),we=[Ee],Ce={class:"ml-4"},Se=o("span",{"aria-hidden":"true"},"ESC",-1),De=[Se];function Ae(e,t,i,l,v,$){const y=c("Image");return n(),a(S,null,[o("ul",z({role:"list",ref:"list",class:"flex flex-wrap -mx-4 -my-3",title:e.title},e.$attrs),[(n(!0),a(S,null,k(e.items,(s,d)=>(n(),a("li",{class:"relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%]",key:d},[o("div",{tabindex:"0",role:"button",class:"block absolute inset-0 p-4 touch-manipulation","aria-controls":e.uid,"aria-pressed":e.active&&d===e.itemEnlarged.i,onTouchstart:g=>e.setItemEnlarged(d),onClick:t[0]||(t[0]=(...g)=>e.openDialog&&e.openDialog(...g)),onFocusin:g=>e.setItemEnlarged(d),onKeydown:t[1]||(t[1]=p(r((...g)=>e.openDialog&&e.openDialog(...g),["exact"]),["enter"]))},[f(y,{class:w(["block w-full h-full focus",s.classes]),width:s.width,height:s.height,sourceSet:s.sourceSet,alt:s.alt,sizes:`
            (min-width: 1024px) calc(33.33vw - (32px * 4 / 3)),
            (min-width: 640px) calc(50vw - (32px * 3 / 2)),
            calc(100vw - (32px * 2))`},null,8,["class","width","height","sourceSet","alt"])],40,ce)]))),128))],16,ue),o("aside",{tabindex:"-1",class:w(["backdrop-blur-md",e.classesDialog]),ref:"dialog",id:e.uid,"aria-hidden":!e.active,onKeydown:[t[13]||(t[13]=p(r((...s)=>e.closeDialog&&e.closeDialog(...s),["prevent","exact"]),["esc"])),t[14]||(t[14]=p(r((...s)=>e.closeDialog&&e.closeDialog(...s),["prevent"]),["tab"])),t[15]||(t[15]=p(r(s=>e.focusPrevDialogControl(e.dialogControlFocused),["prevent","exact"]),["left"])),t[16]||(t[16]=p(r(s=>e.focusNextDialogControl(e.dialogControlFocused),["prevent","exact"]),["right"]))]},[o("div",ge,[me,o("div",fe,[o("div",he,[e.itemEnlarged?(n(),E(y,{class:"area-main block w-full h-full object-contain rounded-md",sourceSet:e.itemEnlarged.sourceSet,alt:e.itemEnlarged.alt,key:e.itemEnlarged.i,sizes:"calc(100vw - (88px * 2))",onClick:t[2]||(t[2]=s=>e.setPrevItemEnlarged(e.itemEnlarged.i)),onMouseup:t[3]||(t[3]=r(s=>e.setNextItemEnlarged(e.itemEnlarged.i),["prevent","exact"]))},null,8,["sourceSet","alt"])):x("",!0),o("div",be,[o("ul",ve,[o("li",null,[o("button",{tabindex:"-1",type:"button","aria-label":"Rückwärts",title:"Rückwärts",class:"px-3 py-1 border-y-2 border-r border-l-2 border-action-fg rounded-tl-md rounded-bl-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg touch-manipulation",onTouchstart:t[4]||(t[4]=r(s=>e.setPrevItemEnlarged(e.itemEnlarged.i),["prevent"])),onMouseup:t[5]||(t[5]=r(s=>e.setPrevItemEnlarged(e.itemEnlarged.i),["prevent","exact"])),onKeydown:t[6]||(t[6]=p(r(s=>e.setPrevItemEnlarged(e.itemEnlarged.i),["prevent","exact"]),["enter"]))},ye,32)]),o("li",null,[o("button",{tabindex:"-1",type:"button","aria-label":"Vorwärts",title:"Vorwärts",class:"px-3 py-1 border-y-2 border-r-2 border-l border-action-fg rounded-tr-md rounded-br-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg touch-manipulation",onTouchstart:t[7]||(t[7]=r(s=>e.setNextItemEnlarged(e.itemEnlarged.i),["prevent"])),onMouseup:t[8]||(t[8]=r(s=>e.setNextItemEnlarged(e.itemEnlarged.i),["prevent","exact"])),onKeydown:t[9]||(t[9]=p(r(s=>e.setNextItemEnlarged(e.itemEnlarged.i),["prevent","exact"]),["enter"]))},we,32)]),o("li",Ce,[o("button",{tabindex:"-1",type:"button","aria-label":"Schliessen",title:"Schliessen",class:"px-2 py-1 border-2 border-action-fg rounded-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg",onTouchstart:t[10]||(t[10]=r((...s)=>e.closeDialog&&e.closeDialog(...s),["prevent"])),onMouseup:t[11]||(t[11]=r((...s)=>e.closeDialog&&e.closeDialog(...s),["prevent","exact"])),onKeydown:t[12]||(t[12]=p(r((...s)=>e.closeDialog&&e.closeDialog(...s),["prevent","exact"]),["enter"]))},De,32)])])])])])])],42,pe)],64)}const ke=h(de,[["render",Ae]]),xe=b({components:{Content:M,MediaGallery:ke,Section:N,Division:L,Heading:G,Paragraph:Q,DataList:ne,Image:_},props:{items:{type:Array,default(){return[]}}}});function Ie(e,t,i,l,v,$){const y=c("Heading"),s=c("Paragraph"),d=c("Division"),g=c("MediaGallery"),P=c("DataList"),F=c("Section"),q=c("Content");return n(),E(q,null,{default:u(()=>[(n(!0),a(S,null,k(e.items,(m,B)=>(n(),E(F,{key:B,"divide-between":""},{default:u(()=>[f(d,{px:"",my:""},{default:u(()=>[f(y,{is:"h2",mb:""},{default:u(()=>[D(C(m.title),1)]),_:2},1024),f(s,null,{default:u(()=>[D(C(m.description),1)]),_:2},1024)]),_:2},1024),f(d,{px:"",my:""},{default:u(()=>[m.media?.length?(n(),E(g,{key:0,title:m.title+" Galerie",items:m.media},null,8,["title","items"])):x("",!0)]),_:2},1024),f(d,{px:"",my:""},{default:u(()=>[f(P,{title:m.title+" Meta",items:m.meta},null,8,["title","items"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}const Be=h(xe,[["render",Ie]]);export{Be as default};

import{s as r}from"./session.gQbCuShR.js";import{_ as o}from"./_plugin-vue_export-helper.x3n3nnut.js";import{d as s,o as n,c as i}from"./runtime-core.esm-bundler.OJhPVcFL.js";const c=s({props:{sessionKey:{type:String,required:!0},root:{type:String},rootMargin:{type:String,default(){return"10px"}},threshold:{type:Array,default(){return[1]}}},mounted(){new IntersectionObserver(([e])=>{e&&r.setKey(this.sessionKey,e.isIntersecting)},{root:this.rootElement,rootMargin:this.rootMargin,threshold:this.threshold}).observe(this.$el)},computed:{rootElement(){return this.root?document.querySelector(this.root):null}}}),a={class:"_sentinel"};function l(t,e,p,d,u,h){return n(),i("div",a)}const y=o(c,[["render",l]]);export{y as default};

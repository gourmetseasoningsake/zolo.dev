import{s as r}from"./session.a8cce74e.js";import{_ as o}from"./_plugin-vue_export-helper.c27b6911.js";import{d as s,c as n,o as i}from"./runtime-core.esm-bundler.52646ad2.js";const c=s({props:{sessionKey:{type:String,required:!0},root:{type:String},rootMargin:{type:String,default(){return"10px"}},threshold:{type:Array,default(){return[1]}}},mounted(){new IntersectionObserver(([e])=>{e&&r.setKey(this.sessionKey,e.isIntersecting)},{root:this.rootElement,rootMargin:this.rootMargin,threshold:this.threshold}).observe(this.$el)},computed:{rootElement(){return this.root?document.querySelector(this.root):null}}}),a={class:"_sentinel"};function l(t,e,p,d,u,h){return i(),n("div",a)}const y=o(c,[["render",l]]);export{y as default};

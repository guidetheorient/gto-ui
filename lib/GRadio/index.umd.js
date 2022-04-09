var y=Object.defineProperty,C=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var f=(e,l,n)=>l in e?y(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,b=(e,l)=>{for(var n in l||(l={}))k.call(l,n)&&f(e,n,l[n]);if(m)for(var n of m(l))z.call(l,n)&&f(e,n,l[n]);return e},V=(e,l)=>C(e,G(l));(function(e,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l(require("vue")):typeof define=="function"&&define.amd?define(["vue"],l):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=l(e.Vue))})(this,function(e){"use strict";const l=Symbol("radioGroupContextKey");var n="";const h=["disabled","checked"],u=Object.assign({name:"GRadio"},{props:{modelValue:{},label:{},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(a,{emit:i}){const o=a,t="g-radio",d=e.inject(l,null),c=e.computed(()=>!!d),s=e.computed(()=>c.value?d.modelValue.value:o.modelValue),r=e.computed(()=>c.value?d.disabled.value:o.disabled);function x(_){c.value?d.updateModelValue(o.label):(i("update:modelValue",o.label),e.nextTick(()=>{i("change",o.label)}))}return(_,R)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([t,{"is-disabled":e.unref(r),"is-checked":e.unref(s)===a.label}])},[e.createElementVNode("span",{class:e.normalizeClass([t+"__input-wrapper"])},[e.createElementVNode("span",{class:e.normalizeClass([t+"__input-border"])},null,2),e.createElementVNode("span",{class:e.normalizeClass([t+"__input-circle"])},null,2),e.createElementVNode("input",{type:"radio",class:e.normalizeClass([t+"__input"]),disabled:e.unref(r),checked:e.unref(s)===a.label,onChange:x},null,42,h)],2),e.createElementVNode("span",{class:e.normalizeClass([t+"__label"])},[e.renderSlot(_.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(a.label),1)])],2)],2))}});var B="";const p=Object.assign({name:"GRadioGroup"},{props:{modelValue:{required:!0},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(a,{emit:i}){const o=a,t="g-radio-group";function d(s){i("update:modelValue",s),e.nextTick(()=>{i("change",s)})}const c=V(b({},e.toRefs(o)),{updateModelValue:d});return e.provide(l,c),(s,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([t])},[e.renderSlot(s.$slots,"default")],2))}});var g={install(a){a.component(u.name,u),a.component(p.name,p)}};return g});
var ee=Object.defineProperty,te=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var N=(e,n,a)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,w=(e,n)=>{for(var a in n||(n={}))oe.call(n,a)&&N(e,a,n[a]);if($)for(var a of $(n))le.call(n,a)&&N(e,a,n[a]);return e},G=(e,n)=>te(e,ne(n));(function(e,n){typeof exports=="object"&&typeof module!="undefined"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=n(e.Vue))})(this,function(e){"use strict";var n=typeof global=="object"&&global&&global.Object===Object&&global,a=n,z=typeof self=="object"&&self&&self.Object===Object&&self,B=a||z||Function("return this")(),E=B,P=E.Symbol,m=P,g=Object.prototype,L=g.hasOwnProperty,M=g.toString,p=m?m.toStringTag:void 0;function q(t){var c=L.call(t,p),o=t[p];try{t[p]=void 0;var l=!0}catch{}var r=M.call(t);return l&&(c?t[p]=o:delete t[p]),r}var D=Object.prototype,I=D.toString;function K(t){return I.call(t)}var R="[object Null]",v="[object Undefined]",h=m?m.toStringTag:void 0;function A(t){return t==null?t===void 0?v:R:h&&h in Object(t)?q(t):K(t)}function F(t){return t!=null&&typeof t=="object"}var H="[object Number]";function y(t){return typeof t=="number"||F(t)&&A(t)==H}const x=Symbol("checkboxGroupContextKey"),U=Object.prototype.toString,k=t=>U.call(t)==="[object Number]";var re="";const V=t=>["px","em","rem"].some(c=>String(t).endsWith(c)),W=Object.assign({name:"GIcon"},{props:{size:{type:[String,Number],validator:t=>k(t)||V(t)},color:{type:String}},setup(t){const c=t,o=e.computed(()=>{let l={};const{size:r,color:u}=c;return r&&(l.fontSize=V(r)?r:k(r)?r+"px":""),u&&(l.color=u),l});return(l,r)=>(e.openBlock(),e.createElementBlock("i",{class:"g-icon",style:e.normalizeStyle(e.unref(o))},[e.renderSlot(l.$slots,"default")],4))}}),J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Q=[e.createElementVNode("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5L207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",fill:"currentColor"},null,-1)];var X=e.defineComponent({name:"CheckOutlined",render:function(c,o){return e.openBlock(),e.createElementBlock("svg",J,Q)}}),se="";const Y=["disabled"],j=Object.assign({name:"GCheckbox"},{props:{modelValue:{type:Boolean},label:{},value:{},disabled:{type:Boolean}},emits:["update:modelValue","change"],setup(t,{emit:c}){const o=t,l="g-checkbox",r=e.inject(x,null),u=e.computed(()=>o.modelValue),s=e.computed(()=>!!r),i=e.computed(()=>{var d;return s.value?(d=r.modelValue.value)==null?void 0:d.includes(o.value):!!u.value}),_=e.computed(()=>{var d,b;if(s.value){const{modelValue:C,min:O,max:T}=r;if(y(O.value)&&((d=C.value)==null?void 0:d.length)<=O.value)return i.value;if(y(T.value)&&((b=C.value)==null?void 0:b.length)>=T.value)return!i.value}return o.disabled});function f(d){s.value?r.updateModelValue(o.value):(c("update:modelValue",!o.modelValue),e.nextTick(()=>{c("change",!o.modelValue)}))}return(d,b)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([l,{"is-disabled":e.unref(_),"is-checked":e.unref(i)}])},[e.createElementVNode("span",{class:e.normalizeClass([l+"__input-wrapper"])},[e.createElementVNode("span",{class:e.normalizeClass([l+"__input-border"])},[e.createVNode(W,{class:e.normalizeClass([l+"__icon"])},{default:e.withCtx(()=>[e.createVNode(e.unref(X))]),_:1},8,["class"])],2),e.createElementVNode("input",{type:"checkbox",class:e.normalizeClass([l+"__input"]),disabled:e.unref(_),onChange:f},null,42,Y)],2),e.createElementVNode("span",{class:e.normalizeClass([l+"__label"])},[e.renderSlot(d.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.label||t.value),1)])],2)],2))}});var de="";const S=Object.assign({name:"GCheckboxGroup"},{props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean},min:{type:Number},max:{type:Number}},emits:["update:modelValue","change"],setup(t,{emit:c}){const o=t,l="g-checkbox-group";function r(s){let i=o.modelValue;if(o.modelValue.includes(s)){let _=o.modelValue.findIndex(f=>f===s);i.splice(_,1)}else i.push(s);c("update:modelValue",i),e.nextTick(()=>{c("change",i)})}const u=G(w({},e.toRefs(o)),{updateModelValue:r});return e.provide(x,u),(s,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l])},[e.renderSlot(s.$slots,"default")],2))}});var Z={install(t){t.component(j.name,j),t.component(S.name,S)}};return Z});
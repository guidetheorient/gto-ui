import{_ as h,n as y,W as A,X as H,s as r,u as t,o as s,c as o,a as l,x as n,t as u,g,Z as x,F,e as I,r as B,d as v,z as f}from"./app.f029d317.js";const L={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"description"},S=y({setup(_){const a=A(),e=H(),i=r(()=>e.value.heroImage||m.value||c.value||k.value),m=r(()=>e.value.heroText!==null),$=r(()=>e.value.heroText||a.value.title),c=r(()=>e.value.tagline!==null),p=r(()=>e.value.tagline||a.value.description),k=r(()=>e.value.actionLink&&e.value.actionText),T=r(()=>e.value.altActionLink&&e.value.altActionText);return(d,Y)=>t(i)?(s(),o("header",L,[d.$frontmatter.heroImage?(s(),o("figure",C,[l("img",{class:"image",src:d.$withBase(d.$frontmatter.heroImage),alt:d.$frontmatter.heroAlt},null,8,N)])):n("",!0),t(m)?(s(),o("h1",b,u(t($)),1)):n("",!0),t(c)?(s(),o("p",w,u(t(p)),1)):n("",!0),t(k)?(s(),g(x,{key:3,item:{link:t(e).actionLink,text:t(e).actionText},class:"action"},null,8,["item"])):n("",!0),t(T)?(s(),g(x,{key:4,item:{link:t(e).altActionLink,text:t(e).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var V=h(S,[["__scopeId","data-v-4aeb51c6"]]);const D={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},R={class:"features"},W={key:0,class:"title"},X={key:1,class:"details"},Z=y({setup(_){const a=H(),e=r(()=>a.value.features&&a.value.features.length>0),i=r(()=>a.value.features?a.value.features:[]);return(m,$)=>t(e)?(s(),o("div",D,[l("div",z,[l("div",E,[l("div",R,[(s(!0),o(F,null,I(t(i),(c,p)=>(s(),o("section",{key:p,class:"feature"},[c.title?(s(),o("h2",W,u(c.title),1)):n("",!0),c.details?(s(),o("p",X,u(c.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var j=h(Z,[["__scopeId","data-v-793c2722"]]);const q={},G={key:0,class:"footer"},J={class:"container"},K={class:"text"};function M(_,a){return _.$frontmatter.footer?(s(),o("footer",G,[l("div",J,[l("p",K,u(_.$frontmatter.footer),1)])])):n("",!0)}var O=h(q,[["render",M],["__scopeId","data-v-41020908"]]);const P={class:"home","aria-labelledby":"main-title"},Q={class:"home-content"},U=y({setup(_){return(a,e)=>{const i=B("Content");return s(),o("main",P,[v(V),f(a.$slots,"hero",{},void 0,!0),v(j),l("div",Q,[v(i)]),f(a.$slots,"features",{},void 0,!0),v(O),f(a.$slots,"footer",{},void 0,!0)])}}});var te=h(U,[["__scopeId","data-v-cc1f894c"]]);export{te as default};

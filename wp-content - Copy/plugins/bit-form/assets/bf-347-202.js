var g=Object.defineProperty;var n=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(o,s,t)=>s in o?g(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,c=(o,s)=>{for(var t in s||(s={}))j.call(s,t)&&p(o,t,s[t]);if(n)for(var t of n(s))b.call(s,t)&&p(o,t,s[t]);return o};import{r as a,aB as k,p as v,o as _,j as e,S as I}from"./main-398.js";import{b as S}from"./bf-273-70.js";import{W as h}from"./bf-62-120.js";/* empty css          */import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";const E=a.lazy(()=>k(()=>import("./bf-386-173.js"),["./bf-386-173.js","./main-398.js","./main-398.css","./bf-989-109.js","./bf-354-65.js","./bf-491-73.js","./bf-5-382.css","./bf-487-381.css","./bf-500-108.js","./bf-139-389.css"],import.meta.url));function R({formFields:o,setIntegration:s,integrations:t,allIntegURL:d}){const u=v(),{id:r,formID:x}=_(),[i,f]=a.useState(c({},t[r])),[l,m]=a.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(I,{snack:l,setSnackbar:m}),e.jsx("div",{className:"mt-3",children:e.jsx(E,{formID:x,formFields:o,webHooks:i,setWebHooks:f,setSnackbar:m})}),e.jsx(h,{edit:!0,saveConfig:()=>S(t,s,d,i,u,r,1)}),e.jsx("br",{})]})}export{R as default};
var j=Object.defineProperty;var i=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(a,s,e)=>s in a?j(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,p=(a,s)=>{for(var e in s||(s={}))I.call(s,e)&&m(a,e,s[e]);if(i)for(var e of i(s))b.call(s,e)&&m(a,e,s[e]);return a};import{p as E,o as v,r as c,j as t,S as N,_ as d}from"./main-398.js";import{I as S}from"./bf-48-299.js";import{s as C}from"./bf-378-329.js";import{h as w}from"./bf-599-351.js";import{E as y}from"./bf-112-352.js";import"./bf-235-102.js";import"./bf-491-73.js";import"./bf-273-70.js";import"./bf-404-116.js";import"./bf-305-112.js";function B({formFields:a,setIntegration:s,integrations:e,allIntegURL:l}){const h=E(),{id:n,formID:x}=v(),[r,o]=c.useState(p({},e[n])),[f,g]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(N,{snack:f,setSnackbar:g}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>w(u,r,o),name:"name",value:r.name,type:"text",placeholder:d("Integration Name...")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(y,{formID:x,formFields:a,enchargeConf:r,setEnchargeConf:o}),t.jsx(S,{edit:!0,saveConfig:()=>C(e,s,l,r,h,n,1),disabled:r.listId===""||r.field_map.length<1}),t.jsx("br",{})]})}export{B as default};

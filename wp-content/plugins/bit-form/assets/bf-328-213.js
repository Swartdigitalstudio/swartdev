var v=Object.defineProperty;var c=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(a,t,s)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,u=(a,t)=>{for(var s in t||(t={}))N.call(t,s)&&l(a,s,t[s]);if(c)for(var s of c(t))C.call(t,s)&&l(a,s,t[s]);return a};import{p as w,o as y,r as i,j as o,S as G,_ as h}from"./main-398.js";import{b as _}from"./bf-273-70.js";import{I as k}from"./bf-48-299.js";import{h as f}from"./bf-750-359.js";import{G as E}from"./bf-872-360.js";import"./bf-989-109.js";import"./bf-404-116.js";/* empty css          */import"./bf-242-302.js";import"./bf-305-112.js";function H({formFields:a,setIntegration:t,integrations:s,allIntegURL:x}){var g;const j=w(),{id:m,formID:L}=y(),[e,n]=i.useState(u({},s[m])),[d,I]=i.useState(!1),[b,p]=i.useState({show:!1}),S=!(e.mainAction==="2"&&e.addTagToUser!=="");return o.jsxs("div",{style:{width:900},children:[o.jsx(G,{snack:b,setSnackbar:p}),o.jsxs("div",{className:"flx mt-3",children:[o.jsx("b",{className:"wdt-200 d-in-b",children:h("Integration Name:")}),o.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,e,n),name:"name",value:e.name,type:"text",placeholder:h("Integration Name...")})]}),o.jsx("br",{}),o.jsx(E,{formFields:a,handleInput:r=>f(r,e,n),groundhoggConf:e,setGroundhoggConf:n,isLoading:d,setIsLoading:I,setSnackbar:p}),o.jsx(k,{edit:!0,saveConfig:()=>_(s,t,x,e,j,m,1),disabled:(e.mainAction==="2"?S:!(((g=e.field_map)==null?void 0:g.length)>=2))||d}),o.jsx("br",{})]})}export{H as default};

var S=Object.defineProperty;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(t,s,e)=>s in t?S(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,g=(t,s)=>{for(var e in s||(s={}))v.call(s,e)&&f(t,e,s[e]);if(u)for(var e of u(s))N.call(s,e)&&f(t,e,s[e]);return t};import{p as w,o as y,r as d,j as n,S as C,_ as l}from"./main-398.js";import{b as M}from"./bf-273-70.js";import{I as H}from"./bf-48-299.js";import{h,c as _}from"./bf-28-315.js";import{Z as E}from"./bf-56-316.js";import"./bf-404-116.js";import"./bf-305-112.js";function z({formFields:t,setIntegration:s,integrations:e,allIntegURL:x}){const b=w(),{id:p,formID:r}=y(),[a,i]=d.useState(g({},e[p])),[j,c]=d.useState(!1),[I,o]=d.useState({show:!1}),k=()=>{if(!_(a)){o({show:!0,msg:l("Please map mandatory fields")});return}M(e,s,x,a,b,p,1)};return n.jsxs("div",{style:{width:900},children:[n.jsx(C,{snack:I,setSnackbar:o}),n.jsxs("div",{className:"flx mt-3",children:[n.jsx("b",{className:"wdt-100 d-in-b",children:l("Integration Name:")}),n.jsx("input",{className:"btcd-paper-inp w-7",onChange:m=>h(m,r,a,i),name:"name",value:a.name,type:"text",placeholder:l("Integration Name...")})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(E,{formID:r,formFields:t,handleInput:m=>h(m,r,a,i,c,o),marketingHubConf:a,setMarketingHubConf:i,isLoading:j,setisLoading:c,setSnackbar:o}),n.jsx(H,{edit:!0,saveConfig:k,disabled:a.list===""||a.table===""||a.field_map.length<1})]})}export{z as default};

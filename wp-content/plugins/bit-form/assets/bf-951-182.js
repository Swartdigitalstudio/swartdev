var S=Object.defineProperty;var l=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,f=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&u(s,t,e[t]);if(l)for(var t of l(e))C.call(e,t)&&u(s,t,e[t]);return s};import{o as k,p as w,r as c,j as a,S as y,_ as h}from"./main-398.js";import{b as E}from"./bf-273-70.js";import{I as L}from"./bf-48-299.js";import{h as x,c as P}from"./bf-24-317.js";import{Z as R}from"./bf-232-318.js";import"./bf-989-109.js";import"./bf-288-71.js";import"./bf-404-116.js";import"./bf-305-112.js";function G({formFields:s,setIntegration:e,integrations:t,allIntegURL:j}){const{id:m,formID:p}=k(),g=w(),[o,n]=c.useState(f({},t[m])),[I,d]=c.useState(!1),[b,r]=c.useState({show:!1}),v=()=>{P(o,r)&&E(t,e,j,o,g,m,1)};return a.jsxs("div",{style:{width:900},children:[a.jsx(y,{snack:b,setSnackbar:r}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-150 d-in-b",children:h("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>x(i,o,n),name:"name",value:o.name,type:"text",placeholder:h("Integration Name...")})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(R,{formID:p,formFields:s,handleInput:i=>x(i,o,n,p,d,r),projectsConf:o,setProjectsConf:n,isLoading:I,setisLoading:d,setSnackbar:r}),a.jsx(L,{edit:!0,saveConfig:v,disabled:o.portalId===""||o.event===""})]})}export{G as default};

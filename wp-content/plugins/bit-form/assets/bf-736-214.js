var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&c(t,s,e[s]);if(x)for(var s of x(e))v.call(e,s)&&c(t,s,e[s]);return t};import{p as N,o as C,r as i,j as a,S as w,_ as f}from"./main-398.js";import{I as y}from"./bf-48-299.js";import{s as F}from"./bf-378-329.js";import{h as u,i as k}from"./bf-663-361.js";import{S as E}from"./bf-742-362.js";import"./bf-989-109.js";import"./bf-273-70.js";import"./bf-404-116.js";import"./bf-305-112.js";function G({formFields:t,setIntegration:e,integrations:s,allIntegURL:h}){const g=N(),{id:m,formID:L}=C(),[n,o]=i.useState(l({},s[m])),[j,d]=i.useState(!1),[S,p]=i.useState({show:!1});return a.jsxs("div",{style:{width:900},children:[a.jsx(w,{snack:S,setSnackbar:p}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>u(r,n,o),name:"name",value:n.name,type:"text",placeholder:f("Integration Name...")})]}),a.jsx("br",{}),a.jsx(E,{formFields:t,handleInput:r=>u(r,n,o,d),sendFoxConf:n,setSendFoxConf:o,isLoading:j,setIsLoading:d,setSnackbar:p}),a.jsx(y,{edit:!0,saveConfig:()=>F(s,e,h,n,g,m,1),disabled:k(n)}),a.jsx("br",{})]})}export{G as default};
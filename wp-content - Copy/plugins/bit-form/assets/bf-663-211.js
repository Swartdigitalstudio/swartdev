var I=Object.defineProperty;var c=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var d=(a,s,e)=>s in a?I(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,p=(a,s)=>{for(var e in s||(s={}))S.call(s,e)&&d(a,e,s[e]);if(c)for(var e of c(s))N.call(s,e)&&d(a,e,s[e]);return a};import{p as C,o as D,r,j as t,S as w,_ as l}from"./main-398.js";import{b as y}from"./bf-273-70.js";import{I as O}from"./bf-48-299.js";import{h as k}from"./bf-620-355.js";import{O as E}from"./bf-630-356.js";import"./bf-989-109.js";function z({allIntegURL:a,formFields:s,integrations:e,setIntegration:f}){const x=C(),{id:o,formID:u}=D(),[n,i]=r.useState(p({},e[o])),[m,h]=r.useState(!1),[j,g]=r.useState({show:!1}),v=()=>{y(e,f,a,n,x,o,1)};return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:j,setSnackbar:g}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-150 d-in-b mr-2",children:l("Integration Name:")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:b=>k(b,n,i),name:"name",value:n.name,type:"text",placeholder:l("Integration Name...")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(E,{formID:u,formFields:s,oneDriveConf:n,setOneDriveConf:i,isLoading:m,setIsLoading:h}),t.jsx(O,{edit:!0,saveConfig:v,disabled:!n.actions.attachments||!n.folder,isLoading:m}),t.jsx("br",{})]})}export{z as default};

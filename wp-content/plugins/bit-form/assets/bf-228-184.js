var S=Object.defineProperty;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(a,t,e)=>t in a?S(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,f=(a,t)=>{for(var e in t||(t={}))k.call(t,e)&&l(a,e,t[e]);if(h)for(var e of h(t))v.call(t,e)&&l(a,e,t[e]);return a};import{p as w,o as N,r as m,j as s,S as C,_ as u}from"./main-398.js";import{b as y}from"./bf-273-70.js";import{I as _}from"./bf-48-299.js";import{h as x}from"./bf-324-321.js";import{Z as E}from"./bf-546-322.js";import"./bf-989-109.js";import"./bf-13-114.js";import"./bf-288-71.js";import"./bf-242-302.js";import"./bf-404-116.js";import"./bf-305-112.js";function G({formFields:a,setIntegration:t,integrations:e,allIntegURL:g}){const j=w(),{id:p,formID:d}=N(),[o,r]=m.useState(f({},e[p])),[b,c]=m.useState(!1),[I,n]=m.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(C,{snack:I,setSnackbar:n}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-150 d-in-b",children:u("Integration Name:")}),s.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>x(i,o,r),name:"name",value:o.name,type:"text",placeholder:u("Integration Name...")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(E,{formID:d,formFields:a,handleInput:i=>x(i,o,r,d,c,n),sheetConf:o,setSheetConf:r,isLoading:b,setisLoading:c,setSnackbar:n}),s.jsx(_,{edit:!0,saveConfig:()=>y(e,t,g,o,j,p,1),disabled:o.workbook===""||o.worksheet===""||o.field_map.length<1}),s.jsx("br",{})]})}export{G as default};

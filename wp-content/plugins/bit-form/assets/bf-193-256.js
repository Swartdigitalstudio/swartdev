import{p as j,o as I,r as o,j as t,S as v}from"./main-398.js";/* empty css          */import{S as w}from"./bf-62-120.js";import{b as Z}from"./bf-273-70.js";import{I as N}from"./bf-48-299.js";import{N as b}from"./bf-521-368.js";import k from"./bf-250-235.js";import{s as y,r as P}from"./bf-624-323.js";import{Z as E}from"./bf-441-324.js";import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-989-109.js";import"./bf-529-76.js";import"./bf-887-104.js";import"./bf-404-116.js";function U({formFields:g,setIntegration:d,integrations:h,allIntegURL:S}){const l=j(),{formID:a}=I(),[m,r]=o.useState(!1),[s,p]=o.useState(1),[x,i]=o.useState({show:!1}),[e,n]=o.useState({name:"Zoho Sign API",type:"Zoho Sign",clientId:"",clientSecret:""});o.useEffect(()=>{window.opener&&y("zohoSign")},[]);const u=c=>{var f;c===2&&((f=e==null?void 0:e.default)!=null&&f.templates||P(a,e,n,r,i)),p(c)};return t.jsxs("div",{children:[t.jsx(v,{snack:x,setSnackbar:i}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(w,{step:3,active:s})}),t.jsx(k,{formID:a,signConf:e,setSignConf:n,step:s,setstep:p,isLoading:m,setisLoading:r,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(E,{formID:a,formFields:g,signConf:e,setSignConf:n,isLoading:m,setisLoading:r,setSnackbar:i}),t.jsx(b,{nextPageHandler:()=>u(3),disabled:e.template===""})]}),t.jsx(N,{step:s,saveConfig:()=>Z(h,d,S,e,l)})]})}export{U as default};
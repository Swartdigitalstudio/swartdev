import{p as j,o as S,r as o,j as t,S as M}from"./main-398.js";/* empty css          */import{S as v}from"./bf-62-120.js";import{s as I,b}from"./bf-273-70.js";import{I as w}from"./bf-48-299.js";import{N as Z}from"./bf-521-368.js";import y from"./bf-449-230.js";import{Z as N}from"./bf-423-314.js";import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-944-313.js";import"./bf-989-109.js";import"./bf-887-104.js";import"./bf-404-116.js";function K({formFields:n,setIntegration:m,integrations:c,allIntegURL:p}){const l=j(),{formID:f}=S(),[h,x]=o.useState(!1),[s,a]=o.useState(1),[d,i]=o.useState({show:!1}),[e,r]=o.useState({name:"Zoho Mail API",type:"Zoho Mail",clientId:"",clientSecret:"",actions:{},to:"",cc:"",bcc:"",subject:"",body:""});o.useEffect(()=>{window.opener&&I("zohoMail")},[]);const u=g=>{a(g)};return t.jsxs("div",{children:[t.jsx(M,{snack:d,setSnackbar:i}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(v,{step:3,active:s})}),t.jsx(y,{formID:f,mailConf:e,setMailConf:r,step:s,setstep:a,isLoading:h,setisLoading:x,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(N,{formFields:n,mailConf:e,setMailConf:r}),t.jsx(Z,{nextPageHandler:()=>u(3)})]}),t.jsx(w,{step:s,saveConfig:()=>b(c,m,p,e,l)})]})}export{K as default};

import{p as u,o as v,r as s,j as t,S as k}from"./main-398.js";/* empty css          */import{S as j}from"./bf-62-120.js";import{s as S,b as D}from"./bf-273-70.js";import{I as w}from"./bf-48-299.js";import{N as I}from"./bf-521-368.js";import W from"./bf-42-236.js";import{Z}from"./bf-619-326.js";import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-966-325.js";import"./bf-989-109.js";import"./bf-242-302.js";function q({formFields:c,setIntegration:d,integrations:f,allIntegURL:l}){const h=u(),{formID:i}=v(),[a,n]=s.useState(!1),[o,m]=s.useState(1),[x,r]=s.useState({show:!1}),[e,p]=s.useState({name:"Zoho WorkDrive API",type:"Zoho WorkDrive",clientId:"",clientSecret:"",team:"",folder:"",folderMap:[],actions:{}});s.useEffect(()=>{window.opener&&S("zohoWorkDrive")},[]);const g=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.team!==""&&e.folder!==""&&m(3)};return t.jsxs("div",{children:[t.jsx(k,{snack:x,setSnackbar:r}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(j,{step:3,active:o})}),t.jsx(W,{formID:i,workDriveConf:e,setWorkDriveConf:p,step:o,setstep:m,isLoading:a,setisLoading:n,setSnackbar:r}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[t.jsx(Z,{formID:i,formFields:c,workDriveConf:e,setWorkDriveConf:p,isLoading:a,setisLoading:n,setSnackbar:r}),t.jsx(I,{nextPageHandler:()=>g(),disabled:e.team===""||e.folder===""})]}),t.jsx(w,{step:o,saveConfig:()=>D(f,d,l,e,h)})]})}export{q as default};

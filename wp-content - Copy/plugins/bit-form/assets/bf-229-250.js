import{p as S,o as w,r,j as t,S as I,_ as f}from"./main-398.js";/* empty css          */import{S as D}from"./bf-62-120.js";import{s as b,b as _}from"./bf-273-70.js";import{I as P}from"./bf-48-299.js";import{N as Z}from"./bf-521-368.js";import y from"./bf-510-229.js";import{h as N,c as v,b as z}from"./bf-381-311.js";import{Z as C}from"./bf-174-312.js";import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-989-109.js";import"./bf-404-116.js";import"./bf-305-112.js";function V({formFields:l,setIntegration:h,integrations:g,allIntegURL:u}){const x=S(),{formID:i}=w(),[d,n]=r.useState(!1),[a,p]=r.useState(1),[k,s]=r.useState({show:!1}),[e,m]=r.useState({name:"Zoho Desk API",type:"Zoho Desk",clientId:"",clientSecret:"",orgId:"",department:"",field_map:[{formField:"",zohoFormField:""}],actions:{}});r.useEffect(()=>{window.opener&&b("zohoDesk")},[]);const j=o=>{var c;if(o===3){if(!v(e)){s({show:!0,msg:f("Please map mandatory fields")});return}if(!((c=e.actions)!=null&&c.ticket_owner)){s({show:!0,msg:f("Please select a ticket owner")});return}e.department!==""&&e.table!==""&&e.field_map.length>0&&p(o)}else p(o),o===2&&!e.department&&z(i,e,m,n,s)};return t.jsxs("div",{children:[t.jsx(I,{snack:k,setSnackbar:s}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(D,{step:3,active:a})}),t.jsx(y,{formID:i,deskConf:e,setDeskConf:m,step:a,setstep:p,isLoading:d,setisLoading:n,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"100%"},children:[t.jsx(C,{formID:i,formFields:l,handleInput:o=>N(o,e,m,i,n,s),deskConf:e,setDeskConf:m,isLoading:d,setisLoading:n,setSnackbar:s}),t.jsx(Z,{nextPageHandler:()=>j(3),disabled:e.department===""||e.table===""||e.field_map.length<1})]}),t.jsx(P,{step:a,saveConfig:()=>_(g,h,u,e,x)})]})}export{V as default};

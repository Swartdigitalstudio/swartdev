var E=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(l,t,a)=>t in l?E(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,d=(l,t)=>{for(var a in t||(t={}))S.call(t,a)&&y(l,a,t[a]);if(N)for(var a of N(t))I.call(t,a)&&y(l,a,t[a]);return l};import{u as L,r as z,j as e,_ as s,C as b,$}from"./main-398.js";import{t as A}from"./bf-336-288.js";import{T as B}from"./bf-62-120.js";import{A as P}from"./bf-916-367.js";import{N as U}from"./bf-521-368.js";import{e as _,d as D}from"./bf-673-303.js";/* empty css          */import"./bf-138-72.js";import"./bf-273-70.js";import"./bf-491-73.js";import"./bf-354-65.js";function X({formID:l,biginConf:t,setBiginConf:a,step:i,setstep:g,isLoading:w,setisLoading:m,setSnackbar:h,redirectLocation:k,isInfo:r}){const p=L($),{siteURL:R}=p,[x,T]=z.useState(!1),[c,u]=z.useState({dataCenter:"",clientId:"",clientSecret:""}),C=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g(2),D(l,t,a,m,h)},n=o=>{const j=d({},t),v=d({},c);v[o.target.name]="",j[o.target.name]=o.target.value,u(v),a(j)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:A.zohoBigin.title,youTubeLink:A.zohoBigin.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:s("Integration Name..."),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Data Center:")})}),e.jsxs("select",{onChange:n,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:s("--Select a data center--")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:c.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:")})}),e.jsx(b,{value:R,className:"field-key-cpy w-6 ml-0",readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:")})}),e.jsx(b,{value:k||`${p.zohoRedirectURL}`,className:"field-key-cpy w-6 ml-0",readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[s("To get Client ID and SECRET , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:s("Zoho API Console")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client id:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientId",value:t.clientId,type:"text",placeholder:s("Client id..."),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client secret:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("Client secret..."),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(P,{isAuthorized:x,isLoading:w,handleAuthorize:()=>_(t,a,u,T,m,h)}),e.jsx("br",{}),e.jsx(U,{nextPageHandler:()=>C(),disabled:!x})]})]})]})}export{X as default};

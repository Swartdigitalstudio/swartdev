import{p as I,o as S,r as a,a as j,j as t,S as C}from"./main-398.js";/* empty css          */import{S as w}from"./bf-62-120.js";import{I as M}from"./bf-48-299.js";import{s as v}from"./bf-378-329.js";import{N as k}from"./bf-521-368.js";import N from"./bf-294-219.js";import{s as P,h as y,c as F,d as b}from"./bf-135-330.js";import{M as E}from"./bf-113-331.js";import"./bf-138-72.js";import"./bf-273-70.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-989-109.js";import"./bf-404-116.js";import"./bf-305-112.js";function W({formFields:l,setIntegration:c,integrations:f,allIntegURL:h}){const u=I(),{formID:r}=S(),[p,n]=a.useState(!1),[i,d]=a.useState(1),[g,s]=a.useState({show:!1});j();const[e,m]=a.useState({name:"Mail Chimp API",type:"Mail Chimp",clientId:"",clientSecret:"",listId:"",listName:"",tags:"",field_map:[{formField:"",mailChimpField:""}],address_field:[],actions:{}});a.useEffect(()=>{window.opener&&P("mailChimp")},[]);const x=()=>{var o;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(o=e.actions)!=null&&o.address&&!F(e)){s({show:!0,msg:"Please map address required fields to continue."});return}if(!b(e)){s({show:!0,msg:"Please map fields to continue."});return}e.listId!==""&&d(3)};return t.jsxs("div",{children:[t.jsx(C,{snack:g,setSnackbar:s}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(w,{step:3,active:i})}),t.jsx(N,{formID:r,sheetConf:e,setSheetConf:m,step:i,setstep:d,isLoading:p,setisLoading:n,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"100%"},children:[t.jsx(E,{formID:r,formFields:l,handleInput:o=>y(o,e,m,r,n,s),sheetConf:e,setSheetConf:m,isLoading:p,setisLoading:n,setSnackbar:s}),t.jsx(k,{nextPageHandler:()=>x(),disabled:!e.listId||e.field_map.length<1})]}),t.jsx(M,{step:i,saveConfig:()=>v(f,c,h,e,u)})]})}export{W as default};
import{p as I,o as j,r as a,a as w,j as t,S as k,B as N,q as v,_ as G}from"./main-398.js";/* empty css          */import{B as _}from"./bf-354-65.js";import{S as y}from"./bf-62-120.js";import{a as B,G as C,s as R}from"./bf-320-327.js";import{I as b}from"./bf-48-299.js";import E from"./bf-958-218.js";import{h as F,d as P}from"./bf-455-328.js";import"./bf-491-73.js";import"./bf-138-72.js";import"./bf-273-70.js";import"./bf-336-288.js";import"./bf-404-116.js";import"./bf-305-112.js";import"./bf-916-367.js";import"./bf-521-368.js";function X({formFields:c,setIntegration:l,integrations:d,allIntegURL:h}){const g=I(),{formID:i}=j(),[m,r]=a.useState(!1),[s,p]=a.useState(1),{css:f}=w(),[u,o]=a.useState({show:!1}),[e,n]=a.useState({name:"Google Sheet API",type:"Google Sheet",clientId:"",clientSecret:"",spreadsheetId:"",worksheetName:"",field_map:[{formField:"",googleSheetField:""}],header:"ROWS",headerRow:"A1",actions:{}});a.useEffect(()=>{window.opener&&B("googleSheet")},[]);const S=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!P(e)){o({show:!0,msg:"Please map fields to continue."});return}e.spreadsheetId!==""&&e.worksheetName!==""&&e.field_map.length>0&&p(3)};return t.jsxs("div",{children:[t.jsx(k,{snack:u,setSnackbar:o}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(y,{step:3,active:s})}),t.jsx(E,{formID:i,sheetConf:e,setSheetConf:n,step:s,setstep:p,setSnackbar:o,isLoading:m,setisLoading:r}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(C,{formID:i,formFields:c,handleInput:x=>F(x,e,n,i,r,o),sheetConf:e,setSheetConf:n,isLoading:m,setisLoading:r,setSnackbar:o}),t.jsxs(N,{onClick:()=>S(),disabled:!e.spreadsheetId||!e.worksheetName||e.field_map.length<1,className:f(v.ftRight),children:[G("Next"),t.jsx(_,{className:"ml-1 rev-icn"})]})]}),t.jsx(b,{step:s,saveConfig:()=>R(d,l,h,e,g)})]})}export{X as default};

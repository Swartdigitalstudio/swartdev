import{p as B,a as y,o as b,r as i,j as t,S as v,_ as d}from"./main-398.js";/* empty css          */import{S as _}from"./bf-62-120.js";import{b as w}from"./bf-273-70.js";import{I as k}from"./bf-48-299.js";import{N}from"./bf-521-368.js";import P from"./bf-892-222.js";import{c as C}from"./bf-975-343.js";import{S as E}from"./bf-576-344.js";import"./bf-138-72.js";import"./bf-336-288.js";import"./bf-491-73.js";import"./bf-354-65.js";import"./bf-916-367.js";import"./bf-989-109.js";import"./bf-404-116.js";import"./bf-305-112.js";function V({formFields:c,setIntegration:u,integrations:f,allIntegURL:g}){const x=B();y();const{formID:r}=b(),[a,o]=i.useState(!1),[s,m]=i.useState(1),[S,n]=i.useState({show:!1}),[h,l]=i.useState({templateId:"",RedirectionUrl:""}),[e,p]=i.useState({name:"SendinBlue API",type:"SendinBlue",lists:[],api_key:"",field_map:[{formField:"",sendinBlueField:""}],actions:{}}),j=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(e.templateId===""||e.redirectionUrl===""){l({templateId:e.templateId?"":d("Template name cann't be empty"),redirectionUrl:e.redirectionUrl?"":d("Redirection url name cann't be empty")});return}if(!C(e)){n({show:!0,msg:"Please map all required fields to continue."});return}e.name!==""&&e.field_map.length>0&&m(3)}};return t.jsxs("div",{children:[t.jsx(v,{snack:S,setSnackbar:n}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(_,{step:3,active:s})}),t.jsx(P,{formID:r,sendinBlueConf:e,setSendinBlueConf:p,step:s,setstep:m,isLoading:a,setisLoading:o,setSnackbar:n}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,minHeight:s===2&&"900px"},children:[t.jsx(E,{formID:r,formFields:c,sendinBlueConf:e,setSendinBlueConf:p,isLoading:a,setisLoading:o,setSnackbar:n,error:h,setError:l}),t.jsx(N,{nextPageHandler:()=>j(3),disabled:e.field_map.length<1})]}),t.jsx(k,{step:s,saveConfig:()=>w(f,u,g,e,x)})]})}export{V as default};
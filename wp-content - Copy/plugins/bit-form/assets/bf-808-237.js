var v=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(t,s,a)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,l=(t,s)=>{for(var a in s||(s={}))P.call(s,a)&&f(t,a,s[a]);if(j)for(var a of j(s))S.call(s,a)&&f(t,a,s[a]);return t};import{r as m,j as e,_ as i,L as w,aF as E,c as L}from"./main-398.js";import{t as k}from"./bf-336-288.js";import{T}from"./bf-62-120.js";import{A as F}from"./bf-916-367.js";import{N as B}from"./bf-521-368.js";import{r as K}from"./bf-599-351.js";/* empty css          */import"./bf-138-72.js";import"./bf-273-70.js";import"./bf-491-73.js";import"./bf-354-65.js";function U({enchargeConf:t,setEnchargeConf:s,step:a,setstep:b,setSnackbar:x,isInfo:c}){const[d,A]=m.useState(!1),[p,g]=m.useState({name:"",api_key:""}),[N,_]=m.useState(!1),[h,u]=m.useState(!1),z=()=>{const r=l({},t);if(!r.name||!r.api_key){g({name:r.name?"":i("Integration name cann't be empty"),api_key:r.api_key?"":i("API Key cann't be empty")});return}u("auth");const o={api_key:r.api_key};L(o,"bitforms_encharge_authorize").then(n=>{n!=null&&n.success&&(A(!0),x({show:!0,msg:i("Authorized Successfully")})),_(!0),u(!1)})},y=r=>{const o=l({},t),n=l({},p);n[r.target.name]="",o[r.target.name]=r.target.value,g(n),s(o)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b(2),K(t,s,u,x)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:k.encharge.title,youTubeLink:k.encharge.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:t.name,type:"text",placeholder:i("Integration Name..."),disabled:c}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.name}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("API Key:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_key",value:t.api_key,type:"text",placeholder:i("API key"),disabled:c}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.api_key}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get API , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:"https://app.encharge.io/account/info",target:"_blank",rel:"noreferrer",children:i("Encharge API Console")})]}),h==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(w,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),N&&!d&&!h&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:" mr-2",style:{fontSize:30,marginTop:-5},children:e.jsx(E,{size:"15"})}),"Sorry, API key is invalid"]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(F,{isAuthorized:d,isLoading:h,handleAuthorize:()=>z()}),e.jsx("br",{}),e.jsx(B,{nextPageHandler:()=>I(),disabled:!d})]})]})]})}export{U as default};
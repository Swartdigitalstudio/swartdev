import{o as w,p as C,e as F,u as h,a as S,j as e,cw as k,N as B,b,_ as i,ae as E,bM as A,$ as M,h as c,l as x}from"./main-398.js";import{B as P}from"./bf-354-65.js";import{S as _}from"./bf-404-116.js";import{T as H}from"./bf-887-104.js";import"./bf-491-73.js";function O(){var u;const{formType:r,formID:n,id:s}=w(),j=C(),[l,m]=F(E),o=h(A),{css:d}=S(),$=h(M),{isPro:p}=$,g=a=>{const t=c(l);t[s].title=a.target.value,m(t)},v=a=>{const t=c(l);t[s].sub=a.target.value,m(t)},y=a=>{m(t=>x(t,f=>{f[s].body=a}))},T=a=>{const t=c(l);t[s].sub+=a.target.value,m(t)},N=()=>{const a=x(l,t=>{t.push({updateTem:1})});m(a),j(`/form/settings/${r}/${n}/email-templates`)};return l.length<1?e.jsx(k,{to:`/form/settings/edit/${n}/email-templates`,replace:!0}):e.jsxs("div",{style:{width:900},children:[e.jsxs(B,{to:`/form/settings/${r}/${n}/email-templates`,className:`${d(b.btn)} btcd-btn-o-gray`,children:[e.jsx(P,{className:"mr-1"}),i("Back")]}),e.jsx("button",{id:"secondary-update-btn",onClick:N,className:`${d(b.btn)} blue f-right`,type:"button",children:i("Update Template")}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{style:{width:102},children:i("Template Name:")}),e.jsx("input",{onChange:g,type:"text",className:"btcd-paper-inp w-9",placeholder:"Name",value:l[s].title})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{style:{width:100},children:i("Subject:")}),e.jsx("input",{onChange:v,type:"text",className:"btcd-paper-inp w-7",placeholder:i("Email Subject Here"),value:l[s].sub}),e.jsxs("select",{onChange:T,className:"btcd-paper-inp ml-2",style:{width:150},children:[e.jsx("option",{value:"",children:i("Add field")}),e.jsx("optgroup",{label:"Form Fields",children:o!==null&&o.map(a=>!a.type.match(/^(file-up|recaptcha)$/)&&e.jsx("option",{value:`\${${a.key}}`,children:a.name},a.key))}),e.jsx("optgroup",{label:`General Smart Codes ${p?"":"(PRO)"}`,children:p&&((u=_)==null?void 0:u.map(a=>e.jsx("option",{value:`\${${a.name}}`,children:a.label},`ff-rm-${a.name}`)))})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("div",{children:e.jsx("b",{children:i("Body:")})}),e.jsx("label",{htmlFor:`t-m-e-${s}-${n}`,className:"mt-2 w-10",children:e.jsx(H,{id:`mail-tem-${n}`,formFields:o,value:l[s].body,onChangeHandler:y,width:"100%"})})]})]})}export{O as default};
var L=Object.defineProperty,P=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(c,t,n)=>t in c?L(c,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[t]=n,f=(c,t)=>{for(var n in t||(t={}))V.call(t,n)&&R(c,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&R(c,n,t[n]);return c},_=(c,t)=>P(c,$(t));import{P as z,u as H,a as U,j as e,M,_ as r,B as F,l as x,aa as T,bM as A,r as Y,aX as X}from"./main-398.js";import{T as k}from"./bf-887-104.js";import{C as I}from"./bf-288-71.js";import{C as S}from"./bf-235-102.js";const W=`<p style="margin: '0in 0in 12pt'; font-family: 'Courier New', 'monospace'; fontsize: '8pt';"><span style="font-size: 12pt;"><strong>Hellow&nbsp;</strong>{customer_name}</span></p>
<p style="margin: '0in 0in 12pt'; font-family: 'Courier New', 'monospace'; fontsize: '8pt';"><strong><span style="font-size: 12pt;">To reset your password for {site_url},please Click the link below:</span></strong><a style="background: linear-gradient(145deg, #0069ff, #097fe6) !important; text-decoration: none !important; font-weight: 500; margin-top: 35px; color: #fff; text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px;margin-left:40%" href="{reset_password_url}">Reset Password</a></p>`,Z=`<p>Hellow {customer_name}</p>
<p>Please click on the button to complete the verification processs for {email}</p>
<p><a style="background: linear-gradient(145deg, #0069ff, #097fe6) !important; text-decoration: none !important; font-weight: 500; margin-top: 10px; color: #fff; text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px; margin-left: 35%;" title="VERIFY EMAIL ADDRESS" href="{activation_url}" target="_blank" rel="noopener">VERIFY EMAIL ADDRESS</a></p>`,D=`<h2 style="text-align:center">Please Confirm Your Submission !</h2>
<p><a style="background: linear-gradient(145deg, #0069ff, #097fe6) !important; text-decoration: none !important; font-weight: 500; margin-top: 10px; color: #fff; text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px; margin-left: 35%;" title="CONFIRM" href="{entry_confirmation_url}" target="_blank" rel="noopener">CONFIRM</a></p>`;function ee({dataConf:c,setDataConf:t,type:n,showMdl:C,setshowMdl:m,tamplate:b="",title:d}){const v=z(T),j=H(A),{css:s}=U(),l=n?c[n]:c,g=l!=null&&l.body?l==null?void 0:l.body:b,N=p=>{t(i=>x(i,a=>{const o=n?a[n]:a;o.body=p})),v(i=>_(f({},i),{unsaved:!0}))},y=()=>{setTimeout(()=>{t(p=>x(p,i=>{const a=n?i[n]:i;a.body=b,a.sub="Email Subject"})),m(!1)})},w=p=>{t(i=>x(i,a=>{const{name:o,value:u}=p.target,h=n?a[n]:a;h[o]=u})),v(i=>_(f({},i),{unsaved:!0}))};return e.jsx(M,{md:!0,show:C,setModal:m,title:d,style:{overflow:"auto"},children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{style:{width:100},children:"Subject:"}),e.jsx("input",{onChange:w,name:"sub",type:"text",className:"btcd-paper-inp w-9",placeholder:"Email Subject Here",value:l==null?void 0:l.sub})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:r("Body:")}),e.jsx("label",{htmlFor:`mail-tem-${l==null?void 0:l.formID}`,className:"mt-2 w-10",children:e.jsx(k,{id:`mail-tem-${l==null?void 0:l.formID}`,formFields:j,value:g,onChangeHandler:N,width:"100%"})})]}),e.jsxs("div",{className:"mt-2 f-right flx mb-3",children:[e.jsx(F,{variant:"danger-outline",className:s({mr:5}),onClick:y,children:r("Cancel")}),e.jsxs(F,{onClick:()=>m(!1),children:[r("Save")," "]})]})]})})}function se({dataConf:c,setDataConf:t,showMdl:n,setCustomRedirectMdl:C,pages:m,title:b,type:d=""}){var N,y,w,p;const v=z(T),j=H(A),s=d?c[d]:c,l=i=>{const{name:a,value:o}=i.target;t(u=>x(u,h=>{const B=d?h[d]:h;B[a]=o})),v(u=>_(f({},u),{unsaved:!0}))},g=(i,a)=>{t(o=>x(o,u=>{const h=d?u[d]:u;h[a]=i})),v(o=>_(f({},o),{unsaved:!0}))};return Y.useEffect(()=>{c!=null&&c.custom_redirect||t(i=>x(i,a=>{const o=d?a[d]:a;o.custom_redirect=0}))},[]),e.jsx("div",{children:e.jsx(M,{md:!0,show:n,setModal:C,title:b,style:{minHeight:600},className:"o-a",children:e.jsx(X,{autoHide:!0,children:e.jsxs("div",{className:"mr-2 mb-3",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx(I,{radio:!0,name:"custom_redirect",onChange:l,checked:((N=s==null?void 0:s.custom_redirect)==null?void 0:N.toString())==="0",title:e.jsx("small",{className:"txt-dp",children:e.jsx("b",{children:"Messgae"})}),value:0}),e.jsx(I,{radio:!0,name:"custom_redirect",onChange:l,checked:((y=s==null?void 0:s.custom_redirect)==null?void 0:y.toString())==="1",title:e.jsx("small",{className:"txt-dp",children:e.jsx("b",{children:"Redirect Page"})}),value:1})]}),((w=s==null?void 0:s.custom_redirect)==null?void 0:w.toString())==="1"&&e.jsxs("div",{className:"mt-3 ml-2",children:[e.jsxs("div",{className:"flx ",children:[e.jsxs("div",{className:"w-5 ",children:[e.jsxs("div",{className:"f-m fw-500 ml-1",children:[r("Success redirect Page:"),e.jsx(S,{icnSize:14,className:"ml-1",children:e.jsxs("div",{className:"txt-body",children:["This page will show when the verification is successful.",e.jsx("br",{})]})})]}),e.jsxs("select",{className:"btcd-paper-inp mt-1",name:"succ_url",value:s==null?void 0:s.succ_url,onChange:l,children:[e.jsx("option",{value:"",children:r("Custom Link")}),m&&m.map((i,a)=>e.jsx("option",{value:i.url,children:i.title},`r-url-${a+22}`))]})]}),e.jsxs("div",{className:"w-5 ml-2",children:[e.jsx("div",{className:"f-m fw-500",children:"Link"}),e.jsx("input",{placeholder:"success page link",onChange:l,name:"succ_url",className:"btcd-paper-inp mt-1",type:"text",value:s==null?void 0:s.succ_url})]})]}),e.jsxs("div",{className:"flx mt-3",children:[e.jsxs("div",{className:"w-5 ",children:[e.jsxs("div",{className:"f-m fw-500",children:[r("Redirect page (already activated):"),e.jsx(S,{icnSize:14,className:"ml-1",children:e.jsxs("div",{className:"txt-body",children:["This page will show if the account had already been activated."," ",e.jsx("br",{})]})})]}),e.jsxs("select",{className:"btcd-paper-inp mt-1",name:"already_activated_url",value:s==null?void 0:s.already_activated_url,onChange:l,children:[e.jsx("option",{value:"",children:r("Custom Link")}),m&&m.map((i,a)=>e.jsx("option",{value:i.url,children:i.title},`r-url-${a+22}`))]})]}),e.jsxs("div",{className:"w-5 ml-2",children:[e.jsx("div",{className:"f-m fw-500",children:"Link"}),e.jsx("input",{placeholder:"already  activated page link",onChange:l,name:"already_activated_url",className:"btcd-paper-inp mt-1",type:"text",value:s==null?void 0:s.already_activated_url})]})]}),e.jsxs("div",{className:"flx mt-3",children:[e.jsxs("div",{className:"w-5 ",children:[e.jsxs("div",{className:"f-m fw-500",children:[r("Invalid redirect page:"),e.jsx(S,{icnSize:14,className:"ml-1",children:e.jsxs("div",{className:"txt-body",children:["This page will show if the account activation fails or if the activation URL is invalid."," "," ",e.jsx("br",{})]})})]}),e.jsxs("select",{className:"btcd-paper-inp mt-1",name:"invalid_key_url",value:s==null?void 0:s.invalid_key_url,onChange:l,children:[e.jsx("option",{value:"",children:r("Custom Link")}),m&&m.map((i,a)=>e.jsx("option",{value:i.url,children:i.title},`r-url-${a+22}`))]})]}),e.jsxs("div",{className:"w-5 ml-2",children:[e.jsx("div",{className:"f-m fw-500",children:"Link"}),e.jsx("input",{placeholder:"invalid page link",onChange:l,name:"invalid_key_url",className:"btcd-paper-inp mt-1",type:"text",value:s==null?void 0:s.invalid_key_url})]})]})]}),((p=s==null?void 0:s.custom_redirect)==null?void 0:p.toString())==="0"&&e.jsxs("div",{className:"ml-2",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{children:r("Activation success")}),e.jsx("label",{htmlFor:"mail-tem-acti_succ_msg",className:"mt-2",children:e.jsx(k,{id:"acti_succ_msg",formFields:j,value:s==null?void 0:s.acti_succ_msg,onChangeHandler:i=>g(i,"acti_succ_msg"),height:"5px"})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{children:r("Already activated account")}),e.jsx("label",{htmlFor:"already_activated_msg",className:"mt-2",children:e.jsx(k,{id:"already_activated_msg",formFields:j,value:s==null?void 0:s.already_activated_msg,onChangeHandler:i=>g(i,"already_activated_msg"),height:"5px"})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{children:r("Invalid activation key")}),e.jsx("label",{htmlFor:"invalid_key_msg",className:"mt-2",children:e.jsx(k,{id:"invalid_key_msg",formFields:j,value:s==null?void 0:s.invalid_key_msg,onChangeHandler:i=>g(i,"invalid_key_msg"),height:"5px"})})]}),e.jsx("br",{})]})]})})})})}export{ee as E,se as R,Z as a,D as d,W as f};

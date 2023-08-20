import{u as S,r as D,j as e,k as G,_ as s,i as z,bM as H,h as R,l as L}from"./main-398.js";import{u as n}from"./bf-989-109.js";/* empty css          */import{M as Z}from"./bf-529-76.js";import{T as F}from"./bf-887-104.js";import{h as J,r as q,a as B}from"./bf-624-323.js";function g({formID:d,formFields:c,signConf:a,setSignConf:p,isLoading:o,setisLoading:u,setSnackbar:h}){var N,_,b,y,w,$,A,I,M,P;const E=S(H),[m,v]=D.useState({show:!1});a.template&&((_=(N=a==null?void 0:a.default)==null?void 0:N.templateDetails)!=null&&_[a==null?void 0:a.template])&&(!(a!=null&&a.templateActions)||a.templateActions.length!==(($=(w=(y=(b=a==null?void 0:a.default)==null?void 0:b.templateDetails)==null?void 0:y[a==null?void 0:a.template])==null?void 0:w.actions)==null?void 0:$.length))&&(a.templateActions=a.default.templateDetails[a.template].actions.map(t=>({action_id:t.action_id,action_type:t.action_type,language:t.language,private_notes:t.private_notes,recipient_countrycode:t.recipient_countrycode,recipient_email:t.recipient_email,recipient_name:t.recipient_name,recipient_phonenumber:t.recipient_phonenumber,in_person_name:t.in_person_name||"",in_person_email:t.in_person_email||"",role:t.role,verify_recipient:t.verify_recipient,verification_type:t.verification_type||""})),a.notes=a.default.templateDetails[a.template].notes||"");const i=(t,r,l)=>{p(V=>{const x=R(V);return t==="notes"?x.notes=l:x.templateActions[t][r]=l,x})},O=t=>{p(r=>L(r,l=>{l.notes=t}))},k=t=>{p(r=>{const l=R(r);return l.templateActions[m.indx].private_notes+=t,l})},T=t=>{v({show:"private_notes",indx:t})},j=()=>{v({show:!1})};return e.jsxs(e.Fragment,{children:[o&&e.jsx(G,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-100",children:s("Templates:")}),e.jsxs("select",{className:"btcd-paper-inp w-4",onChange:t=>J(t,a,p,d,u,h),name:"template",value:a.template,children:[e.jsx("option",{value:"",children:s("Select Template")}),((A=a==null?void 0:a.default)==null?void 0:A.templates)&&Object.values(a.default.templates).map(t=>e.jsx("option",{value:t.templateId,children:t.templateName},t.templateId))]}),e.jsx("button",{onClick:()=>q(d,a,p,u,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh Sign Templates")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-100",children:s("Recipients:")}),e.jsx("button",{onClick:()=>B(d,a,p,u,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh Template Details")}'`},type:"button",disabled:o,children:"↻"}),(I=a==null?void 0:a.templateActions)==null?void 0:I.map((t,r)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flx mt-2",children:[e.jsx("input",{type:"text",value:r+1,readOnly:!0,className:"btcd-paper-inp mr-1",style:{width:40}}),e.jsx("input",{className:"btcd-paper-inp w-3",type:"text",value:t.role,readOnly:!0})]}),t.action_type==="INPERSONSIGN"&&e.jsxs("div",{className:"flx mt-2",style:{marginLeft:45},children:[e.jsx("input",{type:"text",value:"Signer",readOnly:!0,className:"btcd-paper-inp mr-1 mt-4 w-1"}),e.jsxs("div",{className:"mr-2 w-4",children:[e.jsx("div",{className:"mb-1",children:s("In Person Email (Optional)")}),e.jsx(n,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:t.in_person_email,options:c.map(l=>({label:l.name,value:`\${${l.key}}`})),onChange:l=>i(r,"in_person_email",l),placeholder:s("In Person Email"),singleSelect:!0,customValue:!0})]}),e.jsxs("div",{className:"mr-2 w-4",children:[e.jsx("div",{className:"mb-1",children:s("In Person Name")}),e.jsx(n,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:t.in_person_name,options:c.map(l=>({label:l.name,value:`\${${l.key}}`})),onChange:l=>i(r,"in_person_name",l),placeholder:s("In Person Name"),singleSelect:!0,customValue:!0})]})]}),e.jsxs("div",{className:"flx mt-2",style:{marginLeft:45},children:[t.action_type==="INPERSONSIGN"&&e.jsx("input",{type:"text",value:"Host",readOnly:!0,className:"btcd-paper-inp mr-1 mt-4 w-1"}),e.jsxs("div",{className:"mr-2 w-3",children:[e.jsx("div",{className:"mb-1",children:s("Recipient Email")}),e.jsx(n,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:t.recipient_email,options:c.map(l=>({label:l.name,value:`\${${l.key}}`})),onChange:l=>i(r,"recipient_email",l),placeholder:s("Recipient Email"),singleSelect:!0,customValue:!0})]}),e.jsxs("div",{className:"mr-2 w-3",children:[e.jsx("div",{className:"mb-1",children:s("Recipient Name")}),e.jsx(n,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:t.recipient_name,options:c.map(l=>({label:l.name,value:`\${${l.key}}`})),onChange:l=>i(r,"recipient_name",l),placeholder:s("Recipient Email"),singleSelect:!0,customValue:!0})]}),e.jsxs("div",{className:"mr-2 w-1",children:[e.jsx("div",{className:"mb-1",children:s("Language")}),e.jsxs("select",{onChange:l=>i(r,"language",l.target.value),className:"btcd-paper-inp",value:t.language,children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"fr",children:"French"}),e.jsx("option",{value:"de",children:"German"}),e.jsx("option",{value:"it",children:"Italian"}),e.jsx("option",{value:"ja",children:"Japanese"}),e.jsx("option",{value:"pl",children:"Polish"}),e.jsx("option",{value:"pt",children:"Portuguese"}),e.jsx("option",{value:"ru",children:"Russian"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"sv",children:"Swedish"})]})]}),e.jsxs("div",{className:"mr-1 w-2",children:[e.jsx("div",{className:"mb-1",children:s("Role")}),e.jsx("input",{type:"text",value:t.action_type,readOnly:!0,className:"btcd-paper-inp"})]}),e.jsx("button",{onClick:()=>T(r),className:"icn-btn mr-1 mt-3 tooltip",style:{"--tooltip-txt":`'${s("Private Note")}'`},"aria-label":"Private Message",type:"button",children:e.jsx(Z,{size:"21"})})]})]},t.role)),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:s("Leave a Note:")}),e.jsx(F,{id:"body-content",formFields:E,value:a.notes,onChangeHandler:O})]}),e.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:m.show==="private_notes",close:j,action:j,title:s("Private Note"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:t=>k(t.target.value),children:[e.jsx("option",{value:"",children:s("Field")}),c.map(t=>t.type!=="file-up"&&e.jsx("option",{value:`\${${t.key}}`,children:t.name},`ff-zhcrm-${t.key}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:t=>i(m.indx,"private_notes",t.target.value),value:(P=(M=a.templateActions)==null?void 0:M[m.indx])==null?void 0:P.private_notes})]})]})}export{g as Z};

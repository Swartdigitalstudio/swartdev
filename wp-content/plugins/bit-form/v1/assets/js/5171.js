"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[5171],{8940:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(73305),i=n(4637);function a(e){var t=e.step,n=e.saveConfig,a=e.edit,l=e.disabled;return a?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l,children:(0,s.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},55171:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var s=n(59496),i=(n(46850),n(87230)),a=n(33290),l=n(73305),r=n(65194),c=n(14663),o=n(53132),m=n(8940),d=n(75534),p=n(12051),u=n(84041),f=n(4637);const x=function(e){var t=e.formFields,n=e.setIntegration,x=e.integrations,h=e.allIntegURL,b=(0,i.k6)(),v=(0,i.UO)().formID,_=(0,s.useState)(!1),j=_[0],g=_[1],N=(0,s.useState)(1),y=N[0],w=N[1],S=(0,s.useState)({show:!1}),C=S[0],k=S[1],I=(0,s.useState)({name:"Zoho Sign API",type:"Zoho Sign",clientId:"",clientSecret:""}),Z=I[0],P=I[1];return(0,s.useEffect)((function(){window.opener&&(0,p.WK)("zohoSign")}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)(r.Z,{snack:C,setSnackbar:k}),(0,f.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,f.jsx)(c.Z,{step:3,active:y})}),(0,f.jsx)(d.default,{formID:v,signConf:Z,setSignConf:P,step:y,setstep:w,isLoading:j,setisLoading:g,setSnackbar:k}),(0,f.jsxs)("div",{className:"btcd-stp-page",style:{width:2===y&&900,height:2===y&&"100%"},children:[(0,f.jsx)(u.Z,{formID:v,formFields:t,signConf:Z,setSignConf:P,isLoading:j,setisLoading:g,setSnackbar:k}),(0,f.jsxs)("button",{onClick:function(){return function(e){var t;2===e&&(null!=Z&&null!=(t=Z.default)&&t.templates||(0,p.Zo)(v,Z,P,g,k)),w(e)}(3)},disabled:""===Z.template,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,l.__)("Next","bitform"),(0,f.jsx)(a.Z,{className:"ml-1 rev-icn"})]})]}),(0,f.jsx)(m.Z,{step:y,saveConfig:function(){return(0,o.Mm)(x,n,h,Z,b)}})]})}},84041:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(14103),i=n(59496),a=n(19753),l=(n(46850),n(44084)),r=n(84448),c=n(93820),o=n(33591),m=n(73305),d=n(67860),p=n(83524),u=n(85012),f=n(12051),x=n(4637);function h(e){var t,n,h,b,v,_,j,g,N,y,w=e.formID,S=e.formFields,C=e.signConf,k=e.setSignConf,I=e.isLoading,Z=e.setisLoading,P=e.setSnackbar,R=(0,l.sJ)(r.uJ),L=(0,i.useState)({show:!1}),O=L[0],A=L[1];!C.template||null==C||null==(t=C.default)||null==(n=t.templateDetails)||!n[null==C?void 0:C.template]||null!=C&&C.templateActions&&C.templateActions.length===(null==C||null==(h=C.default)||null==(b=h.templateDetails)||null==(v=b[null==C?void 0:C.template])||null==(_=v.actions)?void 0:_.length)||(C.templateActions=C.default.templateDetails[C.template].actions.map((function(e){return{action_id:e.action_id,action_type:e.action_type,language:e.language,private_notes:e.private_notes,recipient_countrycode:e.recipient_countrycode,recipient_email:e.recipient_email,recipient_name:e.recipient_name,recipient_phonenumber:e.recipient_phonenumber,in_person_name:e.in_person_name||"",in_person_email:e.in_person_email||"",role:e.role,verify_recipient:e.verify_recipient,verification_type:e.verification_type||""}})),C.notes=C.default.templateDetails[C.template].notes||"");var F=function(e,t,n){k((function(s){var i=(0,o.p$)(s);return"notes"===e?i.notes=n:i.templateActions[e][t]=n,i}))},D=function(){A({show:!1})};return(0,x.jsxs)(x.Fragment,{children:[I&&(0,x.jsx)(d.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,x.jsxs)("div",{className:"flx",children:[(0,x.jsx)("b",{className:"wdt-100",children:(0,m.__)("Templates:","bitform")}),(0,x.jsxs)("select",{className:"btcd-paper-inp w-4",onChange:function(e){return(0,f.Rx)(e,C,k,w,Z,P)},name:"template",value:C.template,children:[(0,x.jsx)("option",{value:"",children:(0,m.__)("Select Template","bitform")}),(null==C||null==(j=C.default)?void 0:j.templates)&&Object.values(C.default.templates).map((function(e){return(0,x.jsx)("option",{value:e.templateId,children:e.templateName},e.templateId)}))]}),(0,x.jsx)("button",{onClick:function(){return(0,f.Zo)(w,C,k,Z,P)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,m.__)("Refresh Sign Templates","bitform")+"'"},type:"button",disabled:I,children:"↻"})]}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("b",{className:"wdt-100",children:(0,m.__)("Recipients:","bitform")}),(0,x.jsx)("button",{onClick:function(){return(0,f.V9)(w,C,k,Z,P)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,m.__)("Refresh Template Details","bitform")+"'"},type:"button",disabled:I,children:"↻"}),null==C||null==(g=C.templateActions)?void 0:g.map((function(e,t){return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"flx mt-2",children:[(0,x.jsx)("input",{type:"text",value:t+1,readOnly:!0,className:"btcd-paper-inp mr-1",style:{width:40}}),(0,x.jsx)("input",{className:"btcd-paper-inp w-3",type:"text",value:e.role,readOnly:!0})]}),"INPERSONSIGN"===e.action_type&&(0,x.jsxs)("div",{className:"flx mt-2",style:{marginLeft:45},children:[(0,x.jsx)("input",{type:"text",value:"Signer",readOnly:!0,className:"btcd-paper-inp mr-1 mt-4 w-1"}),(0,x.jsxs)("div",{className:"mr-2 w-4",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("In Person Email (Optional)","bitform")}),(0,x.jsx)(a.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:e.in_person_email,options:S.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),onChange:function(e){return F(t,"in_person_email",e)},placeholder:(0,m.__)("In Person Email","bitform"),singleSelect:!0,customValue:!0})]}),(0,x.jsxs)("div",{className:"mr-2 w-4",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("In Person Name","bitform")}),(0,x.jsx)(a.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:e.in_person_name,options:S.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),onChange:function(e){return F(t,"in_person_name",e)},placeholder:(0,m.__)("In Person Name","bitform"),singleSelect:!0,customValue:!0})]})]}),(0,x.jsxs)("div",{className:"flx mt-2",style:{marginLeft:45},children:["INPERSONSIGN"===e.action_type&&(0,x.jsx)("input",{type:"text",value:"Host",readOnly:!0,className:"btcd-paper-inp mr-1 mt-4 w-1"}),(0,x.jsxs)("div",{className:"mr-2 w-3",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("Recipient Email","bitform")}),(0,x.jsx)(a.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:e.recipient_email,options:S.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),onChange:function(e){return F(t,"recipient_email",e)},placeholder:(0,m.__)("Recipient Email","bitform"),singleSelect:!0,customValue:!0})]}),(0,x.jsxs)("div",{className:"mr-2 w-3",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("Recipient Name","bitform")}),(0,x.jsx)(a.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:e.recipient_name,options:S.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),onChange:function(e){return F(t,"recipient_name",e)},placeholder:(0,m.__)("Recipient Email","bitform"),singleSelect:!0,customValue:!0})]}),(0,x.jsxs)("div",{className:"mr-2 w-1",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("Language","bitform")}),(0,x.jsxs)("select",{onChange:function(e){return F(t,"language",e.target.value)},className:"btcd-paper-inp",value:e.language,children:[(0,x.jsx)("option",{value:"en",children:"English"}),(0,x.jsx)("option",{value:"fr",children:"French"}),(0,x.jsx)("option",{value:"de",children:"German"}),(0,x.jsx)("option",{value:"it",children:"Italian"}),(0,x.jsx)("option",{value:"ja",children:"Japanese"}),(0,x.jsx)("option",{value:"pl",children:"Polish"}),(0,x.jsx)("option",{value:"pt",children:"Portuguese"}),(0,x.jsx)("option",{value:"ru",children:"Russian"}),(0,x.jsx)("option",{value:"es",children:"Spanish"}),(0,x.jsx)("option",{value:"sv",children:"Swedish"})]})]}),(0,x.jsxs)("div",{className:"mr-1 w-2",children:[(0,x.jsx)("div",{className:"mb-1",children:(0,m.__)("Role","bitform")}),(0,x.jsx)("input",{type:"text",value:e.action_type,readOnly:!0,className:"btcd-paper-inp"})]}),(0,x.jsx)("button",{onClick:function(){A({show:"private_notes",indx:t})},className:"icn-btn mr-1 mt-3 tooltip",style:{"--tooltip-txt":"'"+(0,m.__)("Private Note","bitform")+"'"},"aria-label":"Private Message",type:"button",children:(0,x.jsx)(c.Z,{size:"21"})})]})]},e.role)})),(0,x.jsxs)("div",{className:"mt-5",children:[(0,x.jsx)("b",{className:"wdt-100",children:(0,m.__)("Leave a Note:","bitform")}),(0,x.jsx)(u.Z,{id:"body-content",formFields:R,value:C.notes,onChangeHandler:function(e){k((function(t){return(0,s.ZP)(t,(function(t){t.notes=e}))}))}})]}),(0,x.jsxs)(p.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:"private_notes"===O.show,close:D,action:D,title:(0,m.__)("Private Note","bitform"),children:[(0,x.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),(0,x.jsxs)("select",{className:"btcd-paper-inp w-5",onChange:function(e){return t=e.target.value,void k((function(e){var n=(0,o.p$)(e);return n.templateActions[O.indx].private_notes+=t,n}));var t},children:[(0,x.jsx)("option",{value:"",children:(0,m.__)("Field","bitform")}),S.map((function(e){return"file-up"!==e.type&&(0,x.jsx)("option",{value:"${"+e.key+"}",children:e.name},"ff-zhcrm-"+e.key)}))]}),(0,x.jsx)("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:function(e){return F(O.indx,"private_notes",e.target.value)},value:null==(N=C.templateActions)||null==(y=N[O.indx])?void 0:y.private_notes})]})]})}},14663:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(59496),i=n(4637);const a=function(e){var t=e.step,n=e.active,a=e.className;return(0,i.jsx)("div",{className:"d-in-b "+a,children:(0,i.jsxs)("div",{className:"flx flx-center",children:[Array(n).fill(0).map((function(e,t){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),n-1!==t&&(0,i.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-n!==0&&(0,i.jsx)("div",{className:"btcd-stp-line"}),Array(t-n).fill(0).map((function(e,a){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:a+n+1}),t-n-1!==a&&(0,i.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(a+23))}))]})})}}}]);
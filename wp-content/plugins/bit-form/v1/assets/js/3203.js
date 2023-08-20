"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3203],{13203:(e,s,t)=>{t.r(s),t.d(s,{default:()=>V});var n=t(665),i=t(59496),r=t(87230),a=t(44084),l=t(17607),c=t(14103),d=t(73305),o=t(84448),u=t(44246),m=t(14866),f=t(37029),p=function(e,s,t,n,i,r){r((function(i){return(0,c.ZP)(i,(function(i){i[e][s][n][t.target.name]=t.target.value}))}))},h=t(4637);function x(e){var s=e.i,t=e.type,i=e.formFields,r=e.field,a=e.dataConf,l=e.setDataConf,c=e.customFields,o={login:{propName:"login_map",fldName:"loginField"},reset:{propName:"reset_map",fldName:"resetField"},forgot:{propName:"forgot_map",fldName:"forgotField"}}[t],u=o.propName,m=o.fldName,x=!!c.find((function(e){return e.key===r[m]&&e.required}));return(0,h.jsx)("div",{className:"flx mt-2 mr-1",children:(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("select",{className:"btcd-paper-inp w-5 mr-2",name:"formField",value:r.formField||"",onChange:function(e){return p(t,u,e,s,a,l)},children:[(0,h.jsx)("option",{value:"",children:(0,d.__)("Select Field","bitform")}),(0,h.jsxs)(h.Fragment,{children:[i.map((function(e){return"file-up33"!==e.type&&(0,h.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})),(0,h.jsx)("option",{value:"custom",children:(0,d.__)("Custom...","bitform")})]})]}),"custom"===r.formField&&(0,h.jsx)(f.Z,{onChange:function(e){return function(e,s){var i=(0,n.Z)({},a);i[t][u][s].customValue=e.target.value,l(i)}(e,s)},label:(0,d.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:r.customValue,placeholder:(0,d.__)("Custom Value","bitform")}),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("select",{className:"btcd-paper-inp w-5",name:m,value:r[m]||"",onChange:function(e){return p(t,u,e,s,a,l)},disabled:x,children:[(0,h.jsx)("option",{value:"",children:(0,d.__)("Select Field","bitform")}),null==c?void 0:c.map((function(e){return(0,h.jsx)("option",{value:e.key,children:""+e.name},e.key+"-1")}))]})})]})})}const v=function(e){var s,t,n,r,a,l=e.fields,d=e.dataConf,o=e.setDataConf,u=e.pages,f=e.type,p=e.status,v=[{key:"user_login",name:"User Name or Email",required:!0},{key:"password",name:"Password",required:!0},{key:"remember",name:"Remember Me",required:!0}],j=function(e){o((function(s){return(0,c.ZP)(s,(function(s){var t=e.target,n=t.name,i=t.value;s[f][n]=i}))}))};return(0,i.useEffect)((function(){var e=(0,c.ZP)(d,(function(e){var s,t,n;null!=(s=e[f])&&null!=(t=s.login_map)&&null!=(n=t[0])&&n.loginField||(e[f].login_map=v.filter((function(e){return e.required})).map((function(e){return{formField:"",loginField:e.key,required:e.required}})))}));o(e)}),[]),(0,h.jsxs)("div",{style:{width:800,opacity:0===p&&.6},children:[(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-3 mb-1",children:(0,h.jsx)("b",{children:"Login Fields Mapping"})}),(0,h.jsx)("div",{className:"btcd-hr"}),(0,h.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Form Fields","bitform")})}),(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Login Fields","bitform")})})]})]})}),null==(s=d[f])||null==(t=s.login_map)?void 0:t.map((function(e,s){return(0,h.jsx)(x,{i:s,type:"login",field:e,formFields:l,dataConf:d,setDataConf:o,customFields:v},"analytics-m-"+(s+9))})),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5 ",children:[(0,h.jsx)("div",{className:"f-m",children:(0,m.__)("Redirect Page:","bitform")}),(0,h.jsxs)("select",{className:"btcd-paper-inp mt-1",value:null==(n=d[f])?void 0:n.redirect_url,onChange:function(e){o((function(s){return(0,c.ZP)(s,(function(s){s[f].redirect_url=e.target.value}))}))},children:[(0,h.jsx)("option",{value:"",children:(0,m.__)("Custom Link","bitform")}),u&&u.map((function(e,s){return(0,h.jsx)("option",{value:e.url,children:e.title},"r-url-"+(s+22))}))]})]}),(0,h.jsxs)("div",{className:"w-5 ml-2",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:"Link:"}),(0,h.jsx)("input",{onChange:j,name:"redirect_url",className:"btcd-paper-inp mt-1",type:"text",value:null==(r=d[f])?void 0:r.redirect_url})]})]}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"f-m",children:"Login Success Message "}),(0,h.jsx)("input",{onChange:j,name:"succ_msg",className:"btcd-paper-inp mt-1 w-5",type:"text",value:null==(a=d[f])?void 0:a.succ_msg})]})};var j=t(33123),g=t(10779),_=t(61473),b=t(63838);const N=function(e){var s,t,n,r,a,l=e.fields,d=e.dataConf,o=e.setDataConf,u=e.pages,f=e.type,p=e.status,v=(0,i.useState)(!1),N=v[0],y=v[1],w=[{key:"login",name:"Username or Email Address",required:!0}];(0,i.useEffect)((function(){var e=(0,c.ZP)(d,(function(e){var s,t,n;null!=(s=e[f])&&null!=(t=s.forgot_map)&&null!=(n=t[0])&&n.forgotField||(e[f].forgot_map=w.filter((function(e){return e.required})).map((function(e){return{formField:"",forgotField:e.key,required:e.required}})))}));o(e)}),[]);var C=function(e){o((function(s){return(0,c.ZP)(s,(function(s){var t=e.target,n=t.name,i=t.value;s[f][n]=i}))}))};return(0,h.jsxs)("div",{style:{width:800,opacity:0===p&&.6},children:[(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-3 mb-1",children:(0,h.jsx)("b",{children:"Forget Password Fields Mapping"})}),(0,h.jsx)("div",{className:"btcd-hr"}),(0,h.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Form Fields","bitform")})}),(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Forgot Password Fields","bitform")})})]})]})}),null==(s=d[f])||null==(t=s.forgot_map)?void 0:t.map((function(e,s){return(0,h.jsx)(x,{i:s,type:"forgot",field:e,formFields:l,dataConf:d,setDataConf:o,customFields:w},"analytics-m-"+(s+9))})),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5 ",children:[(0,h.jsxs)("div",{className:"f-m fw-500",children:[(0,m.__)("Redirect Page:","bitform"),(0,h.jsx)(b.Z,{width:250,icnSize:17,className:"ml-1 mt-4 p-0",children:(0,h.jsxs)("div",{className:"txt-body",children:["This redirect page will be redirected to the reset form when the email is verified.",(0,h.jsx)("br",{})]})})]}),(0,h.jsxs)("select",{className:"btcd-paper-inp mt-1",value:null==(n=d[f])?void 0:n.redirect_url,onChange:function(e){return function(e){o((function(s){return(0,c.ZP)(s,(function(s){s[f].redirect_url=e.target.value}))}))}(e)},children:[(0,h.jsx)("option",{value:"",children:(0,m.__)("Custom Link","bitform")}),u&&u.map((function(e,s){return(0,h.jsx)("option",{value:e.url,children:e.title},"r-url-"+(s+22))}))]})]}),(0,h.jsxs)("div",{className:"w-5 ml-2 mt-5 fw-500",children:[(0,h.jsxs)("div",{className:"f-m",children:["Link"," ",(0,h.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,h.jsx)("input",{onChange:C,name:"redirect_url",className:"btcd-paper-inp mt-1",type:"text",value:null==(r=d[f])?void 0:r.redirect_url})]})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx w-5  mt-4",children:[(0,h.jsx)("span",{role:"button",tabIndex:"-1",className:"cp",onClick:function(){return y(!0)},onKeyPress:function(){return y(!0)},children:(0,h.jsx)(_.Z,{size:21})}),(0,h.jsx)("div",{className:"f-m ml-1",children:(0,m.__)("Password reset email template","bitform")})]}),(0,h.jsx)(g.Z,{dataConf:d,setDataConf:o,type:f,showMdl:N,setshowMdl:y,tamplate:j.gT,title:"Password reset email template"}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"w-5",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,m.__)("Success Message:","bitform")}),(0,h.jsx)("input",{className:"btcd-paper-inp mt-1",onChange:function(e){return C(e)},name:"succ_msg",value:null==(a=d[f])?void 0:a.succ_msg,type:"text",placeholder:(0,m.__)("Success Message","bitform")})]})]})};const y=function(e){var s,t,n,r,a,l=e.fields,d=e.dataConf,o=e.setDataConf,u=e.type,f=e.pages,p=e.status,v=[{key:"new_password",name:"New Password",required:!0},{key:"conf_password",name:"Confirm Password",required:!0}],j=function(e){o((function(s){return(0,c.ZP)(s,(function(s){var t=e.target,n=t.name,i=t.value;s[u][n]=i}))}))};return(0,i.useEffect)((function(){o((function(e){return(0,c.ZP)(e,(function(e){var s,t,n;null!=(s=e[u])&&null!=(t=s.reset_map)&&null!=(n=t[0])&&n.resetField||(e[u].reset_map=v.filter((function(e){return e.required})).map((function(e){return{formField:"",resetField:e.key,required:e.required}})))}))}))}),[]),(0,h.jsxs)("div",{style:{width:800,opacity:0===p&&.6},children:[(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-3 mb-1",children:(0,h.jsx)("b",{children:"Login Fields Mapping"})}),(0,h.jsx)("div",{className:"btcd-hr"}),(0,h.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Form Fields","bitform")})}),(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,m.__)("Reset Password Fields","bitform")})})]})]})}),null==(s=d[u])||null==(t=s.reset_map)?void 0:t.map((function(e,s){return(0,h.jsx)(x,{i:s,type:"reset",field:e,formFields:l,dataConf:d,setDataConf:o,customFields:v},"analytics-m-"+(s+9))})),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5 ",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,m.__)("Redirect Page:","bitform")}),(0,h.jsxs)("select",{className:"btcd-paper-inp mt-1",value:null==(n=d[u])?void 0:n.redirect_url,onChange:function(e){return function(e){o((function(s){return(0,c.ZP)(s,(function(s){s[u].redirect_url=e.target.value}))}))}(e)},children:[(0,h.jsx)("option",{value:"",children:(0,m.__)("Custom Link","bitform")}),f&&f.map((function(e,s){return(0,h.jsx)("option",{value:e.url,children:e.title},"r-url-"+(s+22))}))]})]}),(0,h.jsxs)("div",{className:"w-5 ml-2",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:"Link:"}),(0,h.jsx)("input",{onChange:j,name:"redirect_url",className:"btcd-paper-inp mt-1",type:"text",value:null==(r=d[u])?void 0:r.redirect_url})]})]}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"flx integ-fld-wrp",children:(0,h.jsxs)("div",{className:"w-5",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,m.__)("Success Message:","bitform")}),(0,h.jsx)("input",{className:"btcd-paper-inp mt-1",onChange:function(e){return j(e)},name:"succ_msg",value:null==(a=d[u])?void 0:a.succ_msg,type:"text",placeholder:(0,m.__)("Success Message","bitform")})]})}),(0,h.jsx)("br",{})]})};t(46850);var w=t(65194),C=t(94557),F=t(33591),k=function(e,s,t,n,i){i((function(n){return(0,c.ZP)(n,(function(n){n[e][s].splice(t,0,{})}))}))},Z=function(e,s,t,n,i){i((function(n){return(0,c.ZP)(n,(function(n){n[e][s].length>1&&n[e][s].splice(t,1)}))}))},P=function(e,s,t,i,r,a,l,d){var o=(0,n.Z)({},r),u=null==l?void 0:l.find((function(e){return e.key===t.target.value}));"user_email"!==o[e][s][i].userField||"email"===(null==u?void 0:u.typ)?a((function(n){return(0,c.ZP)(n,(function(n){n[e][s][i][t.target.name]=t.target.value}))})):d({show:!0,msg:"should be selected email field.."})},S=function(e,s,t){return!((e[s]?e[s].filter((function(e){return!e.formField&&e[t]&&e.required})):[]).length>0)};function q(e){var s=e.i,t=e.type,n=e.formFields,i=e.field,r=e.userConf,a=e.setUserConf,l=e.customFields,c=e.setSnackbar,o=e.fieldType,u=e.authType,m={user:{propName:"user_map",fldName:"userField"},meta:{propName:"meta_map",fldName:"metaField"}}[t],p=m.propName,x=m.fldName,v=!!l.find((function(e){return e.key===i[x]&&e.required}));return(0,h.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:function(e){return P(u,p,e,s,r,a,n,c)},children:[(0,h.jsx)("option",{value:"",children:(0,d.__)("Select Field","bitform")}),(0,h.jsxs)(h.Fragment,{children:["file"===o?n.map((function(e){return"file-up"===e.type&&(0,h.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})):null==n?void 0:n.map((function(e){return"file-up"!==e.type&&(0,h.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})),"file"!==o&&(0,h.jsx)("option",{value:"custom",children:(0,d.__)("Custom...","bitform")})]})]}),"custom"===i.formField&&(0,h.jsx)(f.Z,{onChange:function(e){return function(e,s){var t=(0,F.p$)(r);t[u][p][s].customValue=e.target.value,a(t)}(e,s)},label:(0,d.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:i.customValue,placeholder:(0,d.__)("Custom Value","bitform")}),(0,h.jsx)(h.Fragment,{children:"meta"!==t?(0,h.jsxs)("select",{className:"btcd-paper-inp",name:x,value:i[x]||"",onChange:function(e){return P(u,p,e,s,r,a,n,c)},disabled:v,children:[(0,h.jsx)("option",{children:(0,d.__)("Select Field","bitform")}),null==l?void 0:l.map((function(e){return(0,h.jsx)("option",{value:e.key,children:""+e.name},e.key+"-1")}))]}):(0,h.jsx)("input",{className:"btcd-paper-inp",name:x,value:i[x]||"",onChange:function(e){return P(u,p,e,s,r,a,n,c)},type:"text"})})]}),!v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{onClick:function(){return k(u,p,s,r,a)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,h.jsx)("button",{onClick:function(){return Z(u,p,s,r,a)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,h.jsx)(C.Z,{})})]})]})}function M(e){var s,t,n=e.formFields,r=e.userConf,a=e.setUserConf,l=e.type,c=(0,i.useState)([]),o=c[0];c[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-3 mb-1",children:(0,h.jsx)("b",{children:(0,d.__)("User Meta Field Mappping","bitform")})}),(0,h.jsx)("div",{className:"btcd-hr"}),(0,h.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,d.__)("Meta Value","bitform")})}),(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,d.__)("Meta Key","bitform")})})]})]}),null==(s=r[l])||null==(t=s.meta_map)?void 0:t.map((function(e,s){return(0,h.jsx)(q,{i:s,type:"meta",field:e,formFields:n,userConf:r,setUserConf:a,customFields:o,fieldType:"meta",authType:"register"},"analytics-m-"+(s+9))})),(0,h.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,h.jsx)("button",{onClick:function(){var e;return k(l,"meta_map",null==r||null==(e=r.meta_map)?void 0:e.length,r,a)},className:"icn-btn sh-sm",type:"button",children:"+"})})]})})}var D=[{key:"user_email",name:"Email",required:!0},{key:"user_login",name:"Username"},{key:"nickname",name:"Nickname"},{key:"display_name",name:"Display Name"},{key:"first_name",name:"First Name"},{key:"last_name",name:"Last Name"},{key:"user_pass",name:"Password"},{key:"user_url",name:"Website"},{key:"description",name:"Biographical Info"}],U=t(2598),R=t(6277);function E(e){var s,t,n,r,a,l,o,u,m,f,p,x,v=e.formFields,j=e.userConf,N=e.setUserConf,y=e.pages,C=e.roles,F=e.type,Z=(0,i.useState)({show:!1}),P=Z[0],S=Z[1],M=(0,i.useState)(!1),E=M[0],L=M[1],A=(0,i.useState)(!1),I=A[0],z=A[1],T=function(e){N((function(s){return(0,c.ZP)(s,(function(s){var t=e.target,n=t.name,i=t.value;s[F][n]=i}))}))},V=function(e){N((function(s){return(0,c.ZP)(s,(function(s){var t=e.target,n=t.name;t.checked?s[F][n]=!0:delete s[F][n]}))}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w.Z,{snack:P,setSnackbar:S}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-3 mb-1",children:(0,h.jsx)("b",{children:(0,d.__)("Field Mappping","bitform")})}),(0,h.jsx)("div",{className:"btcd-hr"}),(0,h.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,d.__)("Form Fields","bitform")})}),(0,h.jsx)("div",{className:"txt-dp",children:(0,h.jsx)("b",{children:(0,d.__)("User Fields","bitform")})})]})]}),null==(s=j[F])||null==(t=s.user_map)?void 0:t.map((function(e,s){return(0,h.jsx)(q,{i:s,type:"user",field:e,formFields:v,userConf:j,setUserConf:N,customFields:D,setSnackbar:S,fieldType:"all",authType:"register"},"analytics-m-"+(s+9))})),(0,h.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,h.jsx)("button",{onClick:function(){var e,s;return k(F,"user_map",null==(e=j[F])||null==(s=e.user_map)?void 0:s.length,j,N)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(0,h.jsxs)("div",{className:"flx",children:[(0,h.jsxs)("div",{className:"w-5 mt-5 flx",children:[(0,h.jsx)(U.Z,{name:"user_notify",onChange:V,title:(0,d.__)("User Email Notification","bitform"),checked:!(null==(n=j[F])||!n.user_notify),value:!1}),(0,h.jsx)(b.Z,{width:250,icnSize:17,className:"ml-1",children:(0,h.jsxs)("div",{className:"txt-body",children:["When this option is enabled, a welcome email will be sent from WordPress after registration.",(0,h.jsx)("br",{})]})})]}),(0,h.jsxs)("div",{className:"w-5 mt-5 flx",children:[(0,h.jsx)(U.Z,{name:"admin_notify",onChange:V,title:(0,d.__)("Admin Email Notification","bitform"),checked:!(null==(r=j[F])||!r.admin_notify),value:!1}),(0,h.jsx)(b.Z,{width:250,icnSize:17,className:"ml-1",children:(0,h.jsxs)("div",{className:"txt-body",children:["If this option is enabled, e-mail will be sent from WordPress to admin.",(0,h.jsx)("br",{})]})})]})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5 ",children:[(0,h.jsx)("div",{className:"f-m",children:(0,d.__)("Redirect Page:","bitform")}),(0,h.jsxs)("select",{className:"btcd-paper-inp mt-1",value:null==(a=j[F])?void 0:a.redirect_url,onChange:function(e){N((function(s){return(0,c.ZP)(s,(function(s){var t=e.target.value;s[F].redirect_url=t}))}))},children:[(0,h.jsx)("option",{value:"",children:(0,d.__)("Custom Link","bitform")}),y&&y.map((function(e,s){return(0,h.jsx)("option",{value:e.url,children:e.title},"r-url-"+(s+22))}))]})]}),(0,h.jsxs)("div",{className:"w-5 ml-2",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:"Link"}),(0,h.jsx)("input",{onChange:T,name:"redirect_url",className:"btcd-paper-inp mt-1",type:"text",value:null==(l=j[F])?void 0:l.redirect_url})]})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5 ",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,d.__)("WP User Role","bitform")}),(0,h.jsxs)("select",{name:"user_role",onChange:T,value:null==(o=j[F])?void 0:o.user_role,className:"btcd-paper-inp mt-1",children:[(0,h.jsx)("option",{disabled:!0,selected:!0,children:"Select User Role"}),C.map((function(e,s){return(0,h.jsx)("option",{value:null==e?void 0:e.key,children:null==e?void 0:e.name},"acf-"+2*s)}))]})]}),(0,h.jsxs)("div",{className:"w-5 ml-2",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,d.__)("Success Messages","bitform")}),(0,h.jsx)("input",{className:"btcd-paper-inp mt-1",onChange:function(e){return T(e)},name:"succ_msg",value:null==(u=j[F])?void 0:u.succ_msg,type:"text",placeholder:(0,d.__)("Success Message","bitform")})]})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,h.jsxs)("div",{className:"w-5",children:[(0,h.jsx)("div",{className:"f-m fw-500",children:(0,d.__)("User Approval  Method:","bitform")}),(0,h.jsxs)("select",{className:"btcd-paper-inp mt-1",name:"activation",value:null==(m=j[F])?void 0:m.activation,onChange:T,children:[(0,h.jsx)("option",{disabled:!0,selected:!0,value:"",children:(0,d.__)("select approval method","bitform")}),(0,h.jsx)("option",{value:"auto_approve",children:"Auto Approve"}),(0,h.jsx)("option",{value:"admin_review",children:"Require Admin Review"}),(0,h.jsx)("option",{value:"email_verify",children:"Require Email Activation"})]})]}),"auto_approve"===(null==(f=j[F])?void 0:f.activation)&&(0,h.jsxs)("div",{className:"w-5 ml-2 flx",children:[(0,h.jsx)(U.Z,{name:"auto_login",onChange:V,title:(0,d.__)("Auto Login After Registration","bitform"),checked:!(null==(p=j[F])||!p.auto_login),value:!1}),(0,h.jsx)(b.Z,{width:250,icnSize:17,className:"ml-1",children:(0,h.jsxs)("div",{className:"txt-body",children:["if checked Auto Login, the user login automatically after registration.",(0,h.jsx)("br",{})]})})]}),(0,h.jsx)(g.Z,{dataConf:j,setDataConf:N,type:F,showMdl:E,setshowMdl:L,title:"Customize  Activation Email template"})]}),"email_verify"===(null==(x=j[F])?void 0:x.activation)&&(0,h.jsxs)("div",{className:"flx  integ-fld-wrp",children:[(0,h.jsx)("div",{className:"w-5 mt-4",children:(0,h.jsxs)("button",{type:"button",className:"btn",onClick:function(){return L(!0)},children:[(0,h.jsx)(_.Z,{size:18})," ",(0,d.__)("Customize Email template")]})}),(0,h.jsxs)("div",{className:"ml-2 mt-4",children:[(0,h.jsxs)("button",{type:"button",className:"btn",onClick:function(){return z(!0)},children:[(0,h.jsx)(_.Z,{size:18})," ",(0,d.__)("Edit verification messages","bitform")]}),(0,h.jsx)(R.Z,{dataConf:j,setDataConf:N,showMdl:I,setCustomRedirectMdl:z,pages:y,type:F,title:"Edit verification messages"})]})]})]})]})}var L=t(77111);function A(e){var s=e.formFields,t=e.dataConf,n=e.setDataConf,a=e.pages,l=e.type,d=e.status,o=(0,r.UO)().formID,u=(0,i.useState)({show:!1}),m=u[0],f=u[1],p=(0,i.useState)([]),x=p[0],v=p[1];return(0,i.useEffect)((function(){(0,L.Z)({},"bitforms_get_wp_roles").then((function(e){null!=e&&e.success&&void 0!==e&&v(Object.values(null==e?void 0:e.data))}));var e=(0,c.ZP)(t,(function(e){var s,t,n;null!=(s=e[l])&&null!=(t=s.user_map)&&null!=(n=t[0])&&n.userField||(e[l].user_map=D.filter((function(e){return e.required})).map((function(e){return{formField:"",userField:e.key,required:e.required}})))}));n(e)}),[]),(0,h.jsxs)("div",{style:{width:900,opacity:0===d&&.6},children:[(0,h.jsx)(w.Z,{snack:m,setSnackbar:f}),(0,h.jsx)("div",{children:(0,h.jsx)(E,{formFields:s,formID:o,userConf:t,setUserConf:n,pages:a,roles:x,type:l})}),(0,h.jsxs)("div",{children:[(0,h.jsx)(M,{formFields:s,formID:o,userConf:t,setUserConf:n,type:l}),(0,h.jsx)("br",{})]}),(0,h.jsxs)("p",{className:"p-1 f-m",children:[(0,h.jsx)("strong",{children:"Note"})," ",": If the Username and Password fields are blank then the user will take the value of the email field as the field and the password will be auto-generated."]})]})}var I=t(73239),z=t(48487),T=t(67860);function V(){var e=(0,a.sJ)(o.hi).isPro,s=(0,i.useState)(!1),t=s[0],m=s[1],f=(0,i.useState)(!1),p=f[0],x=f[1],g=(0,a.sJ)(o.uJ),_=(0,i.useState)("register"),b=_[0],C=_[1],F=(0,r.UO)().formID,k=(0,i.useState)({register:{user_map:[{}],succ_msg:"Registration successfully done.",meta_map:[{}],sub:"Activate Your Account",body:j.Lh,acti_succ_msg:"Your account has been activated successfully.&nbsp;You can now login.",already_activated_msg:"Your account is already activated!",invalid_key_msg:"Sorry! Your URL Is Invalid!!"},login:{login_map:[{}],succ_msg:"You have been successfully logged in."},forgot:{forgot_map:[{}],succ_msg:"We have e-mailed your password reset link!",sub:"Email Subject",body:j.gT},reset:{reset_map:[{}],succ_msg:"Your password has been reset!."}}),Z=k[0],P=k[1],q=(0,i.useState)([]),M=q[0],D=q[1],U=(0,i.useState)(0),R=U[0],E=U[1],V=(0,i.useState)({show:!1}),W=V[0],Y=V[1];(0,i.useEffect)((function(){x(!0),(0,L.Z)({formID:F},"bitforms_get_auth_set").then((function(e){var s,t,i,r,a,l=(0,n.Z)({},Z);null==e||!e.success||null!=e&&null!=(s=e.data)&&s.errors||(l[null==(t=e.data[0])?void 0:t.integration_name]=JSON.parse(null==(i=e.data[0])?void 0:i.integration_details),P(l),C(null==(r=e.data[0])?void 0:r.integration_name),E(Number(null==(a=e.data[0])?void 0:a.status)));x(!1)})),(0,L.Z)({},"bitforms_get_all_wp_pages").then((function(e){void 0!==e&&e.success&&D(null==e?void 0:e.data)}))}),[]);var O=function(e){var s=e.target,t=s.name,i=s.value;C(i);var r=(0,n.Z)({},Z);r[t]=i,P(r)};return(0,h.jsxs)("div",{className:"pos-rel",children:[(0,h.jsx)(w.Z,{snack:W,setSnackbar:Y}),(0,h.jsx)("h2",{className:"",children:(0,d.__)("WP Authentication","bitform")}),!e&&(0,h.jsx)("div",{className:"pro-blur flx",style:{height:"111%",left:-53,width:"104%"},children:(0,h.jsxs)("div",{className:"pro",children:[(0,d.__)("Available On","bitform"),(0,h.jsx)("a",{href:"https://www.bitapps.pro/bit-form",target:"_blank",rel:"noreferrer",children:(0,h.jsx)("span",{className:"txt-pro",children:(0,d.__)("Premium","bitform")})})]})}),p?(0,h.jsx)(T.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:70,transform:"scale(0.7)"}}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsxs)("label",{htmlFor:"status",children:[(0,h.jsx)("b",{children:(0,d.__)("","bitform")}),(0,h.jsx)(u.Z,{radio:!0,name:"type",onChange:O,checked:"register"===b,title:(0,h.jsx)("small",{className:"txt-dp",children:(0,h.jsx)("b",{children:"Registration"})}),value:"register"}),(0,h.jsx)(u.Z,{radio:!0,name:"type",onChange:O,checked:"login"===b,title:(0,h.jsx)("small",{className:"txt-dp",children:(0,h.jsx)("b",{children:"Log In"})}),value:"login"}),(0,h.jsx)(u.Z,{radio:!0,name:"type",onChange:O,checked:"forgot"===b,title:(0,h.jsx)("small",{className:"txt-dp",children:(0,h.jsx)("b",{children:"Forgot Password"})}),value:"forgot"}),(0,h.jsx)(u.Z,{radio:!0,name:"type",onChange:O,checked:"reset"===b,title:(0,h.jsx)("small",{className:"txt-dp",children:(0,h.jsx)("b",{children:"Reset Password"})}),value:"reset"})]})}),(0,h.jsxs)("div",{className:"mt-2 ml-1 flx",children:[(0,h.jsx)("label",{htmlFor:"status",children:(0,h.jsx)("b",{children:(0,d.__)("Enable","bitform")})}),(0,h.jsx)(z.Z,{action:function(e){e.target.checked?E(1):E(0)},checked:1===R,className:"ml-4 flx"})]}),function(){switch(b){case"login":return(0,h.jsx)(v,{fields:g,dataConf:Z,setDataConf:P,pages:M,type:b,status:R});case"forgot":return(0,h.jsx)(N,{fields:g,dataConf:Z,setDataConf:P,pages:M,type:b,status:R});case"reset":return(0,h.jsx)(y,{fields:g,dataConf:Z,setDataConf:P,pages:M,type:b,status:R});case"register":return(0,h.jsx)(A,{formFields:g,dataConf:Z,setDataConf:P,pages:M,type:b,status:R})}}(),(0,h.jsxs)("button",{type:"button",id:"secondary-update-btn",onClick:function(e){e.preventDefault(),m(!0);var s=(0,c.ZP)(Z,(function(e){Object.keys(e).forEach((function(s){return b!==s&&delete e[s]})),e.formId=F,e.type=b,e.status=R}));if(function(){var e,s,t=!0;return"register"!==b||S(Z[b],"user_map","userField")||(Y({show:!0,msg:"Please mapped required fields."}),t=!1),"register"!==b||null!=(e=Z[b])&&e.user_role||(Y({show:!0,msg:"User Role field is required."}),t=!1),"forgot"!==b||S(Z[b],"forgot_map","forgotField")||(Y({show:!0,msg:"Please mapped required fields."}),t=!1),"forgot"!==b||null!=(s=Z[b])&&s.redirect_url||(Y({show:!0,msg:"redirect page link is required."}),t=!1),"reset"!==b||S(Z[b],"reset_map","resetField")||(Y({show:!0,msg:"Please mapped required fields."}),t=!1),"login"!==b||S(Z[b],"login_map","loginField")||(Y({show:!0,msg:"Please mapped required fields."}),t=!1),t}()){var t=(0,L.Z)(s,"bitforms_save_auth_settings").then((function(e){void 0!==e&&e.success&&m(!1)}));l.ZP.promise(t,{success:(0,d.__)("Saved successfully.","bitform"),loading:(0,d.__)("Saving...","bitform"),error:(0,d.__)("Something went wrong, Try again.","bitform")})}else m(!1)},className:"btn btcd-btn-lg blue flx",disabled:t,children:[(0,d.__)("Save ","bitform"),t&&(0,h.jsx)(I.Z,{size:20,clr:"#fff",className:"ml-2"})]}),(0,h.jsx)("div",{children:"register"!==b&&(0,h.jsxs)("p",{className:"p-1 f-m",children:[(0,h.jsx)("strong",{children:"Note : "})," ","When the login, forgot password or reset password any of these feature enabled in the form, the entries will not be saved in the WP database."]})})]})]})}}}]);
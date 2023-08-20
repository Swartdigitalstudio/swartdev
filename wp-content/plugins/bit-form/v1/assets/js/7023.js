"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7023],{87023:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var n=s(51163),i=s(59496),r=(s(45486),s(83442)),a=s(51108),l=s(75995),c=s(9419),d=s(66801),o=s(82183),m=s(8312),b=s(2631),f=s(4637);const x=function(e){var t=e.formFields,s=e.setIntegration,x=e.integrations,p=e.allIntegURL,h=(0,r.k6)(),u=(0,r.UO)().flowID,v=(0,i.useState)(!1),j=v[0],_=v[1],g=(0,i.useState)(1),N=g[0],k=g[1],S=(0,i.useState)({show:!1}),w=S[0],I=S[1],y=(0,i.useState)({name:"OneDrive",type:"OneDrive",clientId:"",clientSecret:"",field_map:[{formField:"",OneDriveFormField:""}],folder:"",folderMap:[],foldersList:[],actions:{}}),C=y[0],D=y[1];return(0,i.useEffect)((function(){window.opener&&(0,d.WK)("oneDrive")}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)(l.Z,{snack:w,setSnackbar:I}),(0,f.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,f.jsx)(c.Z,{step:3,active:N})}),(0,f.jsx)(m.default,{flowID:u,oneDriveConf:C,setOneDriveConf:D,step:N,setStep:k,isLoading:j,setIsLoading:_,setSnackbar:I}),(0,f.jsxs)("div",{className:"btcd-stp-page",style:(0,n.Z)({},2===N&&{width:900,height:"100%",overflow:"visible"}),children:[(0,f.jsx)(b.Z,{flowID:u,formFields:t,oneDriveConf:C,setOneDriveConf:D,isLoading:j,setIsLoading:_,setSnackbar:I}),(0,f.jsxs)("button",{onClick:function(){return k(3)},disabled:!C.actions.attachments||!C.folder,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,a.__)("Next","bitform")," ",(0,f.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,f.jsx)(o.Z,{step:N,saveConfig:function(){(0,d.Mm)(x,s,p,C,h)}})]})}},8312:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var n=s(51163),i=s(59496),r=s(48291),a=s(90794),l=s(51108),c=s(2248),d=s(69137),o=s(56391),m=s(4637);function b(e){var t=e.flowID,s=e.oneDriveConf,b=e.setOneDriveConf,f=e.step,x=e.setStep,p=e.isLoading,h=e.setIsLoading,u=e.setSnackbar,v=e.redirectLocation,j=e.isInfo,_=(0,i.useState)(!1),g=_[0],N=_[1],k=(0,i.useState)({clientId:"",clientSecret:""}),S=k[0],w=k[1],I=(0,r.sJ)(a.hi),y=I.siteURL,C=function(e){var t=(0,n.Z)({},s),i=(0,n.Z)({},S);i[e.target.name]="",t[e.target.name]=e.target.value,w(i),b(t)};return(0,m.jsxs)("div",{className:"btcd-stp-page",style:(0,n.Z)({},{width:1===f&&900},{height:1===f&&"100%"}),children:[(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("b",{children:(0,l.__)("Integration Name:","bitform")})}),(0,m.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:C,name:"name",value:s.name,type:"text",placeholder:(0,l.__)("Integration Name...","bitform"),disabled:j}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("b",{children:(0,l.__)("Homepage URL:","bitform")})}),(0,m.jsx)(d.Z,{value:y,className:"field-key-cpy w-6 ml-0",readOnly:j,setSnackbar:u}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("b",{children:(0,l.__)("Authorized Redirect URIs:","bitform")})}),(0,m.jsx)(d.Z,{value:v||""+I.oneDriveRedirectURL,className:"field-key-cpy w-6 ml-0",readOnly:j}),(0,m.jsxs)("small",{className:"d-blk mt-3",children:[(0,l.__)("To Get Client Id & Secret, Please Visit","bitform")," ",(0,m.jsx)("a",{className:"btcd-link",href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noreferrer",children:(0,l.__)("Azure Portal","bitform")})]}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("b",{children:(0,l.__)("OneDrive Client Id:","bitform")})}),(0,m.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:C,name:"clientId",value:s.clientId,type:"text",placeholder:(0,l.__)("Client Id...","bitform"),disabled:j}),(0,m.jsx)("div",{style:{color:"red"},children:S.clientId}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("b",{children:(0,l.__)("OneDrive Client Secret:","bitform")})}),(0,m.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:C,name:"clientSecret",value:s.clientSecret,type:"text",placeholder:(0,l.__)("Client Secret...","bitform"),disabled:j}),(0,m.jsx)("div",{style:{color:"red"},children:S.clientSecret}),!j&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("button",{onClick:function(){return(0,o.P_)(s,b,N,h,w)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:g,children:[g?(0,l.__)("Authorized ✔","bitform"):(0,l.__)("Authorize","bitform"),p&&(0,m.jsx)(c.Z,{size:"20",clr:"#022217",className:"ml-2"})]}),(0,m.jsx)("br",{}),(0,m.jsxs)("button",{onClick:function(){(0,o.kY)(t,s,b,h,u),x(2),document.querySelector(".btcd-s-wrp").scrollTop=0},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!g,children:[(0,l.__)("Next","bitform"),(0,m.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}},9419:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(59496),i=s(4637);const r=function(e){var t=e.step,s=e.active,r=e.className;return(0,i.jsx)("div",{className:"d-in-b "+r,children:(0,i.jsxs)("div",{className:"flx flx-center",children:[Array(s).fill(0).map((function(e,t){return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),s-1!==t&&(0,i.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-s!==0&&(0,i.jsx)("div",{className:"btcd-stp-line"}),Array(t-s).fill(0).map((function(e,r){return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:r+s+1}),t-s-1!==r&&(0,i.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(r+23))}))]})})}}}]);
"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7521],{37521:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(51163),r=a(59496),i=a(51108),n=a(2248),l=a(46457),d=a(72208),o=a(4637);function m(e){var t=e.rapidmailConf,a=e.setRapidmailConf,m=e.step,c=e.setstep,u=e.isLoading,f=e.setIsLoading,p=e.setSnackbar,b=e.isInfo,_=(0,r.useState)(!1),h=_[0],g=_[1],v=(0,r.useState)({username:"",password:""}),x=v[0],w=v[1],j=function(e){var r=(0,s.Z)({},t),i=(0,s.Z)({},x);i[e.target.name]="",r[e.target.name]=e.target.value,w(i),a(r)};return(0,o.jsxs)("div",{className:"btcd-stp-page",style:(0,s.Z)({},{width:1===m&&900},{height:1===m&&"100%"}),children:[(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,i.__)("Integration Name:","bitform")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:null==t?void 0:t.name,type:"text",placeholder:(0,i.__)("Integration Name...","bitform"),disabled:b}),(0,o.jsxs)("small",{className:"d-blk mt-5",children:[(0,i.__)("To get Username and Password , Please Visit","bitform")," ",(0,o.jsx)("a",{className:"btcd-link",href:"https://my.rapidmail.com/api/v3/userlist.html#/",target:"_blank",rel:"noreferrer",children:(0,i.__)("Create API User","bitform")})]}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,i.__)("User Name:","bitform")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"username",value:null==t?void 0:t.username,type:"text",placeholder:(0,i.__)("User name...","bitform"),disabled:b}),(0,o.jsx)("div",{style:{color:"red"},children:x.username}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,i.__)("Password:","bitform")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"password",value:null==t?void 0:t.password,type:"text",placeholder:(0,i.__)("Password...","bitform"),disabled:b}),(0,o.jsx)("div",{style:{color:"red"},children:x.password}),!b&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{onClick:function(){return(0,d.P_)(t,a,w,g,f,p)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:h||u,children:[h?(0,i.__)("Authorized ✔","bitform"):(0,i.__)("Authorize","bitform"),u&&(0,o.jsx)(n.Z,{size:"20",clr:"#022217",className:"ml-2"})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("button",{onClick:function(){(null==t||!t.default)&&(0,d.YG)(t,a,f,p),c(2),document.querySelector(".btcd-s-wrp").scrollTop=0},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!h,children:[(0,i.__)("Next","bitform"),(0,o.jsx)(l.Z,{className:"ml-1 rev-icn"})]})]})]})}},72208:(e,t,a)=>{a.d(t,{P_:()=>c,Pd:()=>m,Rx:()=>l,YG:()=>d,gn:()=>o});var s=a(51163),r=a(65752),i=a(51108),n=a(55873),l=function(e,t,a,r,i,n,l,d){var o=(0,s.Z)({},t),m=e.target.name;""!==e.target.value?o[m]=e.target.value:delete o[m],a((0,s.Z)({},o))},d=function(e,t,a,l){a(!0);var d={username:e.username,password:e.password},o=(0,n.Z)(d,"bitforms_rapidmail_get_all_recipients").then((function(r){if(r&&r.success){var i=(0,s.Z)({},e);return i.default||(i.default={}),r.data.recipientlists&&(i.default.recipientlists=r.data.recipientlists),t((0,s.Z)({},i)),a(!1),"Recipientlist refreshed successfully"}return a(!1),"Recipientlist refresh failed. please try again"}));r.ZP.promise(o,{success:function(e){return e},error:(0,i.__)("Error Occurred","bitform"),loading:(0,i.__)("Loading Recipientslist...")})},o=function(e){var t=null==e?void 0:e.recipientsFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",rapidmailFormField:e.key}})):[{formField:"",rapidmailFormField:""}]},m=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField||!e.rapidmailFormField||"custom"===!e.formField&&!e.customValue})):[]).length>0)},c=function(e,t,a,r,l,d){if(e.username&&e.password){a({}),l(!0);var o={username:e.username,password:e.password};(0,n.Z)(o,"bitforms_rapidmail_authorization").then((function(e){return e})).then((function(a){if(a&&a.success){var n=(0,s.Z)({},e);n.tokenDetails=a.data,t(n),r(!0),d({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else a&&a.data&&a.data.data||!a.success&&"string"===typeof a.data?d({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(a.data.data||a.data)+". "+(0,i.__)("please try again","bitform")}):d({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});l(!1)}))}else a({username:e.username?"":(0,i.__)("Username can't be empty","bitform"),password:e.password?"":(0,i.__)("Password can't be empty","bitform")})}}}]);
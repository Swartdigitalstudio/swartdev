"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[968,4278],{52665:(e,t,a)=>{a.d(t,{FP:()=>c,Mm:()=>l,P_:()=>o,T5:()=>m,WK:()=>r,mG:()=>f,wX:()=>u});var i=a(72564),n=a(66399),s=a(12102),l=function(e,t,a,n,s,l,r){var o=[].concat(e);if(r)o[l]=(0,i.Z)({},e[l],n),o.push({editItegration:!0}),t([].concat(o)),s.push(a);else{var d=[].concat(o);d.push(n),d.push({newItegration:!0}),t(d),s.push(a)}},r=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,s,l,r,o,c,m){if(s.dataCenter&&s.clientId&&s.clientSecret){c(!0);var u="https://accounts.zoho."+s.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+s.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(u,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var a={},r=!1,u=localStorage.getItem("__bitforms_"+e);if(u&&(r=!0,a=JSON.parse(u),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&r){var _=(0,i.Z)({},s);_.accountServer=a["accounts-server"],d(t,a,_,l,o,c,m)}else{var h=a.error?"Cause: "+a.error:"";m({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+h+". "+(0,n.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:s.dataCenter?"":(0,n.__)("Data center cann't be empty","bitform"),clientId:s.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:s.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,l,r,o,d){var c=(0,i.Z)({},t);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,s.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,i.Z)({},a);t.tokenDetails=e.data,l(t),r(!0),d({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):d({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,a,n,s){var l=(0,i.Z)({},t);s?n?l.relatedlists[s-1].upload_field_map.splice(e,0,{}):l.relatedlists[s-1].field_map.splice(e,0,{}):n?l.upload_field_map.splice(e,0,{}):l.field_map.splice(e,0,{}),a((0,i.Z)({},l))},m=function(e,t,a,n,s){var l=(0,i.Z)({},t);s?n?l.relatedlists[s-1].upload_field_map.length>1&&l.relatedlists[s-1].upload_field_map.splice(e,1):l.relatedlists[s-1].field_map.length>1&&l.relatedlists[s-1].field_map.splice(e,1):n?l.upload_field_map.length>1&&l.upload_field_map.splice(e,1):l.field_map.length>1&&l.field_map.splice(e,1),a((0,i.Z)({},l))},u=function(e,t,a,n,s,l){var r=(0,i.Z)({},a);l?s?r.relatedlists[l-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[l-1].field_map[t][e.target.name]=e.target.value:s?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(l?r.relatedlists[l-1].field_map[t].customValue="":r.field_map[t].customValue=""),n((0,i.Z)({},r))},f=function(e,t,a,n,s){var l=(0,i.Z)({},a);s?l.relatedlists[s-1].field_map[t].customValue=e.target.value:l.field_map[t].customValue=e.target.value,n((0,i.Z)({},l))}},7020:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(66399),n=a(4637);function s(e){var t=e.step,a=e.saveConfig,s=e.edit,l=e.disabled;return s?(0,n.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,n.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l,children:(0,i.__)("Update","bitform")})}):(0,n.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,n.jsx)("h2",{className:"ml-3",children:(0,i.__)("Successfully Integrated","bitform")}),(0,n.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,i.__)("Finish & Save ","bitform")," ✔"]})]})}},30968:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var i=a(72564),n=a(59496),s=(a(69306),a(83442)),l=a(94965),r=a(66399),o=a(15643),d=a(77029),c=a(52665),m=a(23921),u=a(94278),f=a(7020),p=a(90869),_=a(4637);const h=function(e){var t=e.formFields,a=e.setIntegration,h=e.integrations,b=e.allIntegURL,v=(0,s.k6)(),g=(0,n.useState)(!1),x=g[0],j=g[1],w=(0,n.useState)(1),N=w[0],y=w[1],C=(0,n.useState)({show:!1}),k=C[0],S=C[1],Z=(0,n.useState)({name:"Twilio",type:"Twilio",sid:"",token:"",from_num:"",field_map:[{formField:"",twilioField:"To"},{formField:"",twilioField:"Body"}],twilioFields:[{key:"To",label:"To",required:!0},{key:"Body",label:"Message Body",required:!0}]}),I=Z[0],F=Z[1];return document.querySelector(".btcd-s-wrp").scrollTop=0,(0,_.jsxs)("div",{children:[(0,_.jsx)(o.Z,{snack:k,setSnackbar:S}),(0,_.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,_.jsx)(d.Z,{step:3,active:N})}),(0,_.jsx)(u.default,{twilioConf:I,setTwilioConf:F,step:N,setstep:y,isLoading:x,setIsLoading:j,setSnackbar:S}),(0,_.jsxs)("div",{className:"btcd-stp-page",style:(0,i.Z)({},2===N&&{width:900,height:"auto",overflow:"visible"}),children:[(0,_.jsx)(p.Z,{formFields:t,handleInput:function(e){return(0,m.Rx)(e,I,F,j,S)},twilioConf:I,setTwilioConf:F,isLoading:x,setIsLoading:j,setSnackbar:S}),(0,_.jsxs)("button",{onClick:function(){return e=3,void((0,m.Pd)(I)?I.field_map.length>0&&y(e):l.ZP.error("Please map mandatory fields"));var e},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,r.__)("Next","bit-integrations"),"  ",(0,_.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,_.jsx)(f.Z,{step:N,saveConfig:function(){return j(!0),void(0,c.Mm)(h,a,b,I,v)}})]})}},94278:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var i=a(72564),n=a(59496),s=a(13536),l=a(66399),r=a(65105),o=(a(25983),a(23921)),d=a(4637);function c(e){var t=e.twilioConf,a=e.setTwilioConf,c=e.step,m=e.setstep,u=e.isLoading,f=e.setIsLoading,p=e.setSnackbar,_=e.isInfo,h=(0,n.useState)(!1),b=h[0],v=h[1],g=(0,n.useState)({username:"",password:""}),x=g[0],j=g[1],w=function(e){var n=(0,i.Z)({},t),s=(0,i.Z)({},x);s[e.target.name]="",n[e.target.name]=e.target.value,j(s),a(n)};return(0,d.jsxs)("div",{className:"btcd-stp-page",style:(0,i.Z)({},{width:1===c&&900},{height:1===c&&"auto"}),children:[(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,l.__)("Integration Name:")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:w,name:"name",value:t.name,type:"text",placeholder:(0,l.__)("Integration Name..."),disabled:_}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,l.__)("Account SID:")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:w,name:"sid",value:t.sid,type:"text",placeholder:(0,l.__)("Account SID..."),disabled:_}),(0,d.jsx)("div",{style:{color:"red"},children:x.sid}),(0,d.jsxs)("small",{className:"d-blk mt-5",children:[(0,l.__)("To get Account SID and Auth Token , Please Visit")," ",(0,d.jsx)("a",{className:"btcd-link",href:"https://console.twilio.com/",target:"_blank",rel:"noreferrer",children:(0,l.__)("Twilio Console")})]}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,l.__)("Auth Token:")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:w,name:"token",value:t.token,type:"text",placeholder:(0,l.__)("Auth Token..."),disabled:_}),(0,d.jsx)("div",{style:{color:"red"},children:x.token}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("b",{children:(0,l.__)("From:")})}),(0,d.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:w,name:"from_num",value:t.from_num,type:"text",placeholder:(0,l.__)("Phone Number..."),disabled:_}),(0,d.jsx)("div",{style:{color:"red"},children:x.from_num}),!_&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("button",{onClick:function(){return(0,o.P_)(t,a,j,v,f,p)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:b||u,children:[b?(0,l.__)("Authorized ✔"):(0,l.__)("Authorize"),u&&(0,d.jsx)(r.Z,{size:"20",clr:"#022217",className:"ml-2"})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("button",{onClick:function(){m(2),document.querySelector(".btcd-s-wrp").scrollTop=0},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!b,children:[(0,l.__)("Next"),(0,d.jsx)(s.Z,{className:"ml-1 rev-icn"})]})]})]})}},23921:(e,t,a)=>{a.d(t,{P_:()=>o,Pd:()=>r,Rx:()=>l});var i=a(72564),n=(a(94965),a(66399)),s=a(12102),l=function(e,t,a,n,s,l,r,o){var d=(0,i.Z)({},t),c=e.target.name;""!==e.target.value?d[c]=e.target.value:delete d[c],a((0,i.Z)({},d))},r=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField||!e.twilioField||"custom"===!e.formField&&!e.customValue})):[]).length>0)},o=function(e,t,a,l,r,o){if(e.sid&&e.token&&e.from_num){a({}),r(!0);var d={sid:e.sid,token:e.token,from_num:e.from_num};(0,s.Z)(d,"bitforms_twilio_authorization").then((function(e){return e})).then((function(a){if(a&&a.success){var s=(0,i.Z)({},e);s.tokenDetails=a.data,t(s),l(!0),o({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else a&&a.data&&a.data.data||!a.success&&"string"===typeof a.data?o({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(a.data.data||a.data)+". "+(0,n.__)("please try again","bitform")}):o({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});r(!1)}))}else a({sid:e.sid?"":(0,n.__)("Account SID can't be empty","bitform"),token:e.token?"":(0,n.__)("Auth Token can't be empty","bitform"),from_num:e.from_num?"":(0,n.__)("Phone number can't be empty","bitform")})}},90869:(e,t,a)=>{a.d(t,{Z:()=>f});a(59496);var i=a(66399),n=a(48291),s=a(84048),l=a(72564),r=function(e,t,a,i){var n=(0,l.Z)({},a);n.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(n.field_map[t].customValue=""),i((0,l.Z)({},n))},o=function(e,t,a,i){var n=(0,l.Z)({},a);n.field_map[t].customValue=e.target.value,i((0,l.Z)({},n))},d=a(80027),c=a(20859),m=a(4637);function u(e){var t=e.i,a=e.formFields,l=e.field,u=e.twilioConf,f=e.setTwilioConf,p=(0,n.sJ)(c.hi).isPro;return(0,m.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,m.jsx)("div",{className:"pos-rel flx",children:(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return r(e,t,u,f)},children:[(0,m.jsx)("option",{value:"",children:(0,i.__)("Select Field","bit-integrations")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:null==a?void 0:a.map((function(e){return(0,m.jsx)("option",{value:e.key,children:e.name},"ff-rm-"+e.key)}))}),(0,m.jsx)("option",{value:"custom",children:(0,i.__)("Custom...","bit-integrations")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(p?"":"(PRO)"),children:p&&(null==d.C?void 0:d.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===l.formField&&(0,m.jsx)(s.Z,{onChange:function(e){return o(e,t,u,f)},label:(0,i.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,i.__)("Custom Value","bit-integrations")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",disabled:!0,name:"twilioField",value:l.twilioField,onChange:function(e){return r(e,t,u,f)},children:[(0,m.jsx)("option",{value:"",children:(0,i.__)("Select Field","bit-integrations")}),null==u?void 0:u.twilioFields.map((function(e){var t=e.key,a=e.label;return(0,m.jsx)("option",{value:t,children:a},t)}))]})]})})})}function f(e){var t=e.formFields,a=(e.handleInput,e.twilioConf),n=e.setTwilioConf,s=(e.isLoading,e.setIsLoading,e.setSnackbar);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"mt-5",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,i.__)("Field Map","bit-integrations")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,i.__)("Form Fields","bit-integrations")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,i.__)("Twilio Fields","bit-integrations")})})]}),null==a?void 0:a.field_map.map((function(e,i){return(0,m.jsx)(u,{i,field:e,twilioConf:a,formFields:t,setTwilioConf:n,setSnackbar:s},"rp-m-"+(i+9))})),(0,m.jsx)("br",{})]})}},25983:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(4637);function n(e){var t=e.note;return(0,i.jsxs)("div",{className:"note",children:[(0,i.jsx)("h4",{className:"mt-0",children:"Note"}),(0,i.jsx)("div",{className:"note-text",dangerouslySetInnerHTML:{__html:t}})]})}},77029:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(59496),n=a(4637);const s=function(e){var t=e.step,a=e.active,s=e.className;return(0,n.jsx)("div",{className:"d-in-b "+s,children:(0,n.jsxs)("div",{className:"flx flx-center",children:[Array(a).fill(0).map((function(e,t){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),a-1!==t&&(0,n.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-a!==0&&(0,n.jsx)("div",{className:"btcd-stp-line"}),Array(t-a).fill(0).map((function(e,s){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:s+a+1}),t-a-1!==s&&(0,n.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(s+23))}))]})})}}}]);
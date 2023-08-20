"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7432],{66801:(e,t,a)=>{a.d(t,{FP:()=>c,Mm:()=>r,P_:()=>o,T5:()=>u,WK:()=>s,mG:()=>f,wX:()=>m});var i=a(51163),n=a(51108),l=a(55873),r=function(e,t,a,n,l,r,s){var o=[].concat(e);if(s)o[r]=(0,i.Z)({},e[r],n),o.push({editItegration:!0}),t([].concat(o)),l.push(a);else{var d=[].concat(o);d.push(n),d.push({newItegration:!0}),t(d),l.push(a)}},s=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,l,r,s,o,c,u){if(l.dataCenter&&l.clientId&&l.clientSecret){c(!0);var m="https://accounts.zoho."+l.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+l.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var a={},s=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(s=!0,a=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&s){var _=(0,i.Z)({},l);_.accountServer=a["accounts-server"],d(t,a,_,r,o,c,u)}else{var h=a.error?"Cause: "+a.error:"";u({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+h+". "+(0,n.__)("please try again","bitform")}),c(!1)}}}),500)}else s({dataCenter:l.dataCenter?"":(0,n.__)("Data center cann't be empty","bitform"),clientId:l.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:l.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,r,s,o,d){var c=(0,i.Z)({},t);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,l.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,i.Z)({},a);t.tokenDetails=e.data,r(t),s(!0),d({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):d({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,a,n,l){var r=(0,i.Z)({},t);l?n?r.relatedlists[l-1].upload_field_map.splice(e,0,{}):r.relatedlists[l-1].field_map.splice(e,0,{}):n?r.upload_field_map.splice(e,0,{}):r.field_map.splice(e,0,{}),a((0,i.Z)({},r))},u=function(e,t,a,n,l){var r=(0,i.Z)({},t);l?n?r.relatedlists[l-1].upload_field_map.length>1&&r.relatedlists[l-1].upload_field_map.splice(e,1):r.relatedlists[l-1].field_map.length>1&&r.relatedlists[l-1].field_map.splice(e,1):n?r.upload_field_map.length>1&&r.upload_field_map.splice(e,1):r.field_map.length>1&&r.field_map.splice(e,1),a((0,i.Z)({},r))},m=function(e,t,a,n,l,r){var s=(0,i.Z)({},a);r?l?s.relatedlists[r-1].upload_field_map[t][e.target.name]=e.target.value:s.relatedlists[r-1].field_map[t][e.target.name]=e.target.value:l?s.upload_field_map[t][e.target.name]=e.target.value:s.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(r?s.relatedlists[r-1].field_map[t].customValue="":s.field_map[t].customValue=""),n((0,i.Z)({},s))},f=function(e,t,a,n,l){var r=(0,i.Z)({},a);l?r.relatedlists[l-1].field_map[t].customValue=e.target.value:r.field_map[t].customValue=e.target.value,n((0,i.Z)({},r))}},82183:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(51108),n=a(4637);function l(e){var t=e.step,a=e.saveConfig,l=e.edit,r=e.disabled;return l?(0,n.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,n.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,i.__)("Update","bitform")})}):(0,n.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,n.jsx)("h2",{className:"ml-3",children:(0,i.__)("Successfully Integrated","bitform")}),(0,n.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,i.__)("Finish & Save ","bitform")," ✔"]})]})}},67432:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var i=a(51163),n=a(59496),l=a(83442),r=a(51108),s=a(75995),o=a(66801),d=a(82183),c=a(5389),u=a(20578),m=a(4637);const f=function(e){var t=e.formFields,a=e.setIntegration,f=e.integrations,p=e.allIntegURL,_=(0,l.k6)(),h=(0,l.UO)(),b=h.id,g=h.formID,v=(0,n.useState)((0,i.Z)({},f[b])),x=v[0],w=v[1],j=(0,n.useState)(!1),C=j[0],y=j[1],I=(0,n.useState)({show:!1}),S=I[0],Z=I[1];return(0,m.jsxs)("div",{style:{width:900},children:[(0,m.jsx)(s.Z,{snack:S,setSnackbar:Z}),(0,m.jsxs)("div",{className:"flx mt-3",children:[(0,m.jsx)("b",{className:"wdt-200 d-in-b",children:(0,r.__)("Integration Name:","bit-integrations")}),(0,m.jsx)("input",{className:"btcd-paper-inp w-5",onChange:function(e){return handleInput(e,x,w)},name:"name",value:x.name,type:"text",placeholder:(0,r.__)("Integration Name...","bit-integrations")})]}),(0,m.jsx)("br",{}),(0,m.jsx)(u.Z,{formID:g,formFields:t,handleInput:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return handleInput(e,x,w,y,Z)})),twilioConf:x,setTwilioConf:w,isLoading:C,setIsLoading:y,setSnackbar:Z}),(0,m.jsx)(d.Z,{edit:!0,saveConfig:function(){(0,c.Pd)(x)?(0,o.Mm)(f,a,p,x,_,b,1):Z({show:!0,msg:(0,r.__)("Please map mandatory fields","bit-integrations")})}}),(0,m.jsx)("br",{})]})}},5389:(e,t,a)=>{a.d(t,{P_:()=>o,Pd:()=>s,Rx:()=>r});var i=a(51163),n=(a(65752),a(51108)),l=a(55873),r=function(e,t,a,n,l,r,s,o){var d=(0,i.Z)({},t),c=e.target.name;""!==e.target.value?d[c]=e.target.value:delete d[c],a((0,i.Z)({},d))},s=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField||!e.twilioField||"custom"===!e.formField&&!e.customValue})):[]).length>0)},o=function(e,t,a,r,s,o){if(e.sid&&e.token&&e.from_num){a({}),s(!0);var d={sid:e.sid,token:e.token,from_num:e.from_num};(0,l.Z)(d,"bitforms_twilio_authorization").then((function(e){return e})).then((function(a){if(a&&a.success){var l=(0,i.Z)({},e);l.tokenDetails=a.data,t(l),r(!0),o({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else a&&a.data&&a.data.data||!a.success&&"string"===typeof a.data?o({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(a.data.data||a.data)+". "+(0,n.__)("please try again","bitform")}):o({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});s(!1)}))}else a({sid:e.sid?"":(0,n.__)("Account SID can't be empty","bitform"),token:e.token?"":(0,n.__)("Auth Token can't be empty","bitform"),from_num:e.from_num?"":(0,n.__)("Phone number can't be empty","bitform")})}},20578:(e,t,a)=>{a.d(t,{Z:()=>f});a(59496);var i=a(51108),n=a(48291),l=a(67587),r=a(51163),s=function(e,t,a,i){var n=(0,r.Z)({},a);n.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(n.field_map[t].customValue=""),i((0,r.Z)({},n))},o=function(e,t,a,i){var n=(0,r.Z)({},a);n.field_map[t].customValue=e.target.value,i((0,r.Z)({},n))},d=a(43502),c=a(90794),u=a(4637);function m(e){var t=e.i,a=e.formFields,r=e.field,m=e.twilioConf,f=e.setTwilioConf,p=(0,n.sJ)(c.hi).isPro;return(0,u.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,u.jsx)("div",{className:"pos-rel flx",children:(0,u.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,u.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:function(e){return s(e,t,m,f)},children:[(0,u.jsx)("option",{value:"",children:(0,i.__)("Select Field","bit-integrations")}),(0,u.jsx)("optgroup",{label:"Form Fields",children:null==a?void 0:a.map((function(e){return(0,u.jsx)("option",{value:e.key,children:e.name},"ff-rm-"+e.key)}))}),(0,u.jsx)("option",{value:"custom",children:(0,i.__)("Custom...","bit-integrations")}),(0,u.jsx)("optgroup",{label:"General Smart Codes "+(p?"":"(PRO)"),children:p&&(null==d.C?void 0:d.C.map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===r.formField&&(0,u.jsx)(l.Z,{onChange:function(e){return o(e,t,m,f)},label:(0,i.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:(0,i.__)("Custom Value","bit-integrations")}),(0,u.jsxs)("select",{className:"btcd-paper-inp",disabled:!0,name:"twilioField",value:r.twilioField,onChange:function(e){return s(e,t,m,f)},children:[(0,u.jsx)("option",{value:"",children:(0,i.__)("Select Field","bit-integrations")}),null==m?void 0:m.twilioFields.map((function(e){var t=e.key,a=e.label;return(0,u.jsx)("option",{value:t,children:a},t)}))]})]})})})}function f(e){var t=e.formFields,a=(e.handleInput,e.twilioConf),n=e.setTwilioConf,l=(e.isLoading,e.setIsLoading,e.setSnackbar);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)("b",{className:"wdt-100",children:(0,i.__)("Field Map","bit-integrations")})}),(0,u.jsx)("div",{className:"btcd-hr mt-1"}),(0,u.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,i.__)("Form Fields","bit-integrations")})}),(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,i.__)("Twilio Fields","bit-integrations")})})]}),null==a?void 0:a.field_map.map((function(e,i){return(0,u.jsx)(m,{i,field:e,twilioConf:a,formFields:t,setTwilioConf:n,setSnackbar:l},"rp-m-"+(i+9))})),(0,u.jsx)("br",{})]})}}}]);
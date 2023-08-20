"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[5355],{22788:(e,t,a)=>{a.d(t,{FP:()=>c,Mm:()=>s,P_:()=>o,T5:()=>u,WK:()=>r,mG:()=>m,wX:()=>f});var l=a(60795),i=a(88226),n=a(97719),s=function(e,t,a,i,n,s,r){var o=[].concat(e);if(r)o[s]=(0,l.Z)({},e[s],i),o.push({editItegration:!0}),t([].concat(o)),n.push(a);else{var d=[].concat(o);d.push(i),d.push({newItegration:!0}),t(d),n.push(a)}},r=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,n,s,r,o,c,u){if(n.dataCenter&&n.clientId&&n.clientSecret){c(!0);var f="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),m=window.open(f,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(m.closed){clearInterval(p);var a={},r=!1,f=localStorage.getItem("__bitforms_"+e);if(f&&(r=!0,a=JSON.parse(f),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&r){var _=(0,l.Z)({},n);_.accountServer=a["accounts-server"],d(t,a,_,s,o,c,u)}else{var h=a.error?"Cause: "+a.error:"";u({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+h+". "+(0,i.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:n.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,s,r,o,d){var c=(0,l.Z)({},t);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,n.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,l.Z)({},a);t.tokenDetails=e.data,s(t),r(!0),d({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):d({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,a,i,n){var s=(0,l.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.splice(e,0,{}):s.relatedlists[n-1].field_map.splice(e,0,{}):i?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),a((0,l.Z)({},s))},u=function(e,t,a,i,n){var s=(0,l.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.length>1&&s.relatedlists[n-1].upload_field_map.splice(e,1):s.relatedlists[n-1].field_map.length>1&&s.relatedlists[n-1].field_map.splice(e,1):i?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),a((0,l.Z)({},s))},f=function(e,t,a,i,n,s){var r=(0,l.Z)({},a);s?n?r.relatedlists[s-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[s-1].field_map[t][e.target.name]=e.target.value:n?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s?r.relatedlists[s-1].field_map[t].customValue="":r.field_map[t].customValue=""),i((0,l.Z)({},r))},m=function(e,t,a,i,n){var s=(0,l.Z)({},a);n?s.relatedlists[n-1].field_map[t].customValue=e.target.value:s.field_map[t].customValue=e.target.value,i((0,l.Z)({},s))}},52904:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(88226),i=a(4637);function n(e){var t=e.step,a=e.saveConfig,n=e.edit,s=e.disabled;return n?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:s,children:(0,l.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,l.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,l.__)("Finish & Save ","bitform")," ✔"]})]})}},2160:(e,t,a)=>{a.d(t,{Pd:()=>d,Rx:()=>o,XE:()=>s,eE:()=>r});var l=a(60795),i=a(88226),n=a(97719),s=function(e,t,a,s,r){s(!0),(0,n.Z)({},"bitforms_refresh_news_letter").then((function(e){if(e&&e.success){var n=(0,l.Z)({},t);n.default||(n.default={}),e.data.newsletterList&&(n.default.newsletterList=e.data.newsletterList),r({show:!0,msg:(0,i.__)("Newsletter list refreshed","bitform")}),a((0,l.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:""+(0,i.__)("Newsletter list refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):r({show:!0,msg:(0,i.__)("Newsletter list refresh failed. please try again","bitform")});s(!1)})).catch((function(){return s(!1)}))},r=function(e,t,a,s){(0,n.Z)({},"bitforms_mail_poet_list_headers").then((function(n){if(n&&n.success){var r=(0,l.Z)({},e);if(n.data.mailPoetFields){r.default.fields=n.data.mailPoetFields;var o=r.default.fields;r.field_map=Object.values(o).filter((function(e){return e.required})).map((function(e){return{formField:"",mailPoetField:e.id,required:!0}})),s({show:!0,msg:(0,i.__)("Mailpoet fields refreshed","bitform")})}else s({show:!0,msg:(0,i.__)("No Mailpoet fields found. Try changing the header row number or try again","bitform")});n.data.tokenDetails&&(r.tokenDetails=n.data.tokenDetails),t((0,l.Z)({},r))}else s({show:!0,msg:(0,i.__)("Mailpoet fields refresh failed. please try again","bitform")});a(!1)})).catch((function(){return a(!1)}))},o=function(e,t,a){var i=(0,l.Z)({},t);i.name=e.target.value,a((0,l.Z)({},i))},d=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField&&e.mailPoetField&&e.required})):[]).length>0)}},35339:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(60795),i=a(83428),n=a(88226),s=a(16740),r=a(22788),o=a(2160),d=a(48291),c=a(28566),u=a(52052),f=a(30400),m=a(22139),p=a(4637);function _(e){var t,a,i,s=e.i,r=e.formFields,o=e.field,_=e.mailPoetConf,h=e.setMailPoetConf,b=o.required,v=(null==_||null==(t=_.default)?void 0:t.fields)&&Object.values(null==_||null==(a=_.default)?void 0:a.fields).filter((function(e){return""===e.required})),g=(0,d.sJ)(c.hi).isPro,x=function(e,t){var a=(0,l.Z)({},_);a.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a.field_map[t].customValue=""),h(a)};return(0,p.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,p.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,p.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:o.formField||"",onChange:function(e){return x(e,s)},children:[(0,p.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),(0,p.jsx)("optgroup",{label:"Form Fields",children:r.map((function(e){return"file-up"!==e.type&&(0,p.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,p.jsx)("option",{value:"custom",children:(0,n.__)("Custom...","bitform")}),(0,p.jsx)("optgroup",{label:"General Smart Codes "+(g?"":"(PRO)"),children:g&&(null==f.C?void 0:f.C.map((function(e){return(0,p.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===o.formField&&(0,p.jsx)(m.Z,{onChange:function(e){return function(e,t){var a=(0,l.Z)({},_);a.field_map[t].customValue=e.target.value,h(a)}(e,s)},label:(0,n.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:o.customValue,placeholder:(0,n.__)("Custom Value","bitform")}),(0,p.jsxs)("select",{className:"btcd-paper-inp",name:"mailPoetField",value:o.mailPoetField,onChange:function(e){return x(e,s)},disabled:b,children:[(0,p.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),b?(null==_||null==(i=_.default)?void 0:i.fields)&&Object.values(_.default.fields).map((function(e){return(0,p.jsx)("option",{value:e.id,children:e.name},e.id+"-1")})):v&&v.map((function(e){return(0,p.jsx)("option",{value:e.id,children:e.name},e.id+"-1")}))]})]}),!b&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{onClick:function(){return function(e){var t=(0,l.Z)({},_);t.field_map.splice(e,0,{}),h(t)}(s)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,p.jsx)("button",{onClick:function(){return function(e){var t=(0,l.Z)({},_);t.field_map.length>1&&t.field_map.splice(e,1),h(t)}(s)},className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:(0,p.jsx)(u.Z,{})})]})]})}function h(e){var t,a=e.formID,d=e.formFields,c=e.mailPoetConf,u=e.setMailPoetConf,f=e.isLoading,m=e.setisLoading,h=e.setSnackbar,b=function(e){var t=(0,l.Z)({},c);e?(t.lists=e?e.split(","):[],(0,o.eE)(t,u,m,h)):delete t.lists,u((0,l.Z)({},t))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("br",{}),(0,p.jsxs)("div",{className:"flx",children:[(0,p.jsx)("b",{className:"wdt-200 d-in-b",children:(0,n.__)("List: ","bitform")}),(0,p.jsx)(i.Z,{defaultValue:null==c?void 0:c.lists,className:"btcd-paper-drpdwn w-6",options:(null==c||null==(t=c.default)?void 0:t.newsletterList)&&Object.keys(c.default.newsletterList).map((function(e){return{label:c.default.newsletterList[e].newsletterName,value:c.default.newsletterList[e].newsletterId}})),onChange:function(e){return b(e)}}),(0,p.jsx)("button",{onClick:function(){return b(a)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh MailPoet List","bitform")+"'"},type:"button",disabled:f,children:"↻"})]}),f&&(0,p.jsx)(s.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==c?void 0:c.lists)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"mt-4",children:(0,p.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Fields","bitform")})}),(0,p.jsx)("div",{className:"btcd-hr mt-1"}),(0,p.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,n.__)("MailPoet Fields","bitform")})})]}),c.field_map.map((function(e,t){return(0,p.jsx)(_,{i:t,field:e,mailPoetConf:c,formFields:d,setMailPoetConf:u},"mailpoet-m-"+(t+9))})),(0,p.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,p.jsx)("button",{onClick:function(){return(0,r.FP)(c.field_map.length,c,u)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]})]})}}}]);
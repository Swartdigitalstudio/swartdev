"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3281],{66801:(e,t,n)=>{n.d(t,{FP:()=>c,Mm:()=>a,P_:()=>o,T5:()=>u,WK:()=>r,mG:()=>f,wX:()=>m});var i=n(51163),l=n(51108),s=n(55873),a=function(e,t,n,l,s,a,r){var o=[].concat(e);if(r)o[a]=(0,i.Z)({},e[a],l),o.push({editItegration:!0}),t([].concat(o)),s.push(n);else{var d=[].concat(o);d.push(l),d.push({newItegration:!0}),t(d),s.push(n)}},r=function(e){var t={},n=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");n&&n.forEach((function(e){var n=e.split("=");n[1]&&(t[n[0]]=n[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,n,s,a,r,o,c,u){if(s.dataCenter&&s.clientId&&s.clientSecret){c(!0);var m="https://accounts.zoho."+s.dataCenter+"/oauth/v2/auth?scope="+n+"&response_type=code&client_id="+s.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var n={},r=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(r=!0,n=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),n.code&&!n.error&&n&&r){var b=(0,i.Z)({},s);b.accountServer=n["accounts-server"],d(t,n,b,a,o,c,u)}else{var h=n.error?"Cause: "+n.error:"";u({show:!0,msg:(0,l.__)("Authorization failed","bitform")+" "+h+". "+(0,l.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:s.dataCenter?"":(0,l.__)("Data center cann't be empty","bitform"),clientId:s.clientId?"":(0,l.__)("Client ID cann't be empty","bitform"),clientSecret:s.clientSecret?"":(0,l.__)("Secret key cann't be empty","bitform")})},d=function(e,t,n,a,r,o,d){var c=(0,i.Z)({},t);c.dataCenter=n.dataCenter,c.clientId=n.clientId,c.clientSecret=n.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,s.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,i.Z)({},n);t.tokenDetails=e.data,a(t),r(!0),d({show:!0,msg:(0,l.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,l.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):d({show:!0,msg:(0,l.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,n,l,s){var a=(0,i.Z)({},t);s?l?a.relatedlists[s-1].upload_field_map.splice(e,0,{}):a.relatedlists[s-1].field_map.splice(e,0,{}):l?a.upload_field_map.splice(e,0,{}):a.field_map.splice(e,0,{}),n((0,i.Z)({},a))},u=function(e,t,n,l,s){var a=(0,i.Z)({},t);s?l?a.relatedlists[s-1].upload_field_map.length>1&&a.relatedlists[s-1].upload_field_map.splice(e,1):a.relatedlists[s-1].field_map.length>1&&a.relatedlists[s-1].field_map.splice(e,1):l?a.upload_field_map.length>1&&a.upload_field_map.splice(e,1):a.field_map.length>1&&a.field_map.splice(e,1),n((0,i.Z)({},a))},m=function(e,t,n,l,s,a){var r=(0,i.Z)({},n);a?s?r.relatedlists[a-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[a-1].field_map[t][e.target.name]=e.target.value:s?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a?r.relatedlists[a-1].field_map[t].customValue="":r.field_map[t].customValue=""),l((0,i.Z)({},r))},f=function(e,t,n,l,s){var a=(0,i.Z)({},n);s?a.relatedlists[s-1].field_map[t].customValue=e.target.value:a.field_map[t].customValue=e.target.value,l((0,i.Z)({},a))}},82183:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(51108),l=n(4637);function s(e){var t=e.step,n=e.saveConfig,s=e.edit,a=e.disabled;return s?(0,l.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,l.jsx)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:a,children:(0,i.__)("Update","bitform")})}):(0,l.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,l.jsx)("h2",{className:"ml-3",children:(0,i.__)("Successfully Integrated","bitform")}),(0,l.jsxs)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,i.__)("Finish & Save ","bitform")," ✔"]})]})}},49701:(e,t,n)=>{n.d(t,{GF:()=>o,Kv:()=>m,P_:()=>d,Rx:()=>r,TN:()=>u,gn:()=>c,pK:()=>f});var i=n(51163),l=n(65752),s=n(55873),a=(n(32198),n(51108)),r=function(e,t,n,l,s,a){var r=(0,i.Z)({},t),d=e.target.name;""!==e.target.value?r[d]=e.target.value:delete r[d],"2"===r.mainAction&&o(r,n,l,s),n((0,i.Z)({},r))},o=function(e,t,n,r){n(!0);var o={access_token:e.access_token};(0,s.Z)(o,"bitforms_sendfox_fetch_all_list").then((function(s){if(s&&s.success){var r=(0,i.Z)({},e);return r.default||(r.default={}),s.data&&(r.default.allLists=s.data.data),t((0,i.Z)({},r)),n(!1),void l.ZP.success((0,a.__)("Lists fetched successfully","bit-integrations"))}n(!1),l.ZP.error((0,a.__)("Lists fetch failed. please try again","bit-integrations"))})).catch((function(){return n(!1)}))},d=function(e,t,n,r,o,d){if(e.access_token){n({}),o(!0);var c={access_token:e.access_token};(0,s.Z)(c,"bitforms_sendFox_authorize").then((function(n){if(n&&n.success){var s=(0,i.Z)({},e);return t(s),r(!0),o(!1),void l.ZP.success((0,a.__)("Authorized successfully","bit-integrations"))}o(!1),l.ZP.error((0,a.__)("Authorized failed","bit-integrations"))}))}else n({access_token:e.access_token?"":(0,a.__)("Access Token can't be empty","bit-integrations")})},c=function(e){var t=null==e?void 0:e.contactFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxFormField:e.key}})):[{formField:"",sendFoxFormField:""}]},u=function(e){var t=null==e?void 0:e.listFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxListFormField:e.key}})):[{formField:"",sendFoxListFormField:""}]},m=function(e){var t=null==e?void 0:e.unsubscribeFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxUnsubscribeFormField:e.key}})):[{formField:"",sendFoxUnsubscribeFormField:""}]},f=function(e){return"1"===e.mainAction?!function(e){return!((null!=e&&e.field_map_list?e.field_map_list.filter((function(t){var n,i,l;return!t.formField&&t.sendFoxListFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(l=i[e.listId])?void 0:l.required.indexOf(t.sendFoxListFormField))})):[]).length>0)}(e):"2"===e.mainAction?!function(e){return(!e.field_map||!e.field_map.find((function(e){return!e.formField||!e.sendFoxFormField})))&&!((null!=e&&e.field_map?e.field_map.filter((function(t){var n,i,l;return!t.formField&&t.sendFoxFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(l=i[e.listId])?void 0:l.required.indexOf(t.sendFoxFormField))})):[]).length>0)}(e)||void 0===e.listId||""===e.listId:!function(e){return!((null!=e&&e.field_map_unsubscribe?e.field_map_unsubscribe.filter((function(t){var n,i,l;return!t.formField&&t.sendFoxUnsubscribeFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(l=i[e.listId])?void 0:l.required.indexOf(t.sendFoxUnsubscribeFormField))})):[]).length>0)}(e)}},9664:(e,t,n)=>{n.d(t,{Z:()=>S});var i=n(51163),l=n(83428),s=n(51108),a=n(99996),r=n(66801),o=n(49701),d=n(48291),c=n(59496),u=n(67587),m=function(e,t,n){var l=(0,i.Z)({},t);l.field_map.splice(e,0,{}),n((0,i.Z)({},l))},f=function(e,t,n){var l=(0,i.Z)({},t);l.field_map.length>1&&l.field_map.splice(e,1),n((0,i.Z)({},l))},p=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s.field_map[t].customValue=""),l((0,i.Z)({},s))},b=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map[t].customValue=e.target.value,l((0,i.Z)({},s))},h=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map_list[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s.field_map_list[t].customValue=""),l((0,i.Z)({},s))},_=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map_list[t].customValue=e.target.value,l((0,i.Z)({},s))},x=function(e,t,n){var l=(0,i.Z)({},t);l.field_map_list.splice(e,0,{}),n((0,i.Z)({},l))},v=function(e,t,n){var l=(0,i.Z)({},t);l.field_map_list.length>1&&l.field_map_list.splice(e,1),n((0,i.Z)({},l))},F=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map_unsubscribe[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s.field_map_unsubscribe[t].customValue=""),l((0,i.Z)({},s))},g=function(e,t,n,l){var s=(0,i.Z)({},n);s.field_map_unsubscribe[t].customValue=e.target.value,l((0,i.Z)({},s))},j=n(43502),C=n(90794),y=n(4637);function N(e){var t=e.i,n=e.formFields,l=e.field,a=e.sendFoxConf,r=e.setSendFoxConf;(0,c.useEffect)((function(){var e;if(1===(null==a||null==(e=a.field_map)?void 0:e.length)&&""===l.sendFoxFormField){var t=(0,i.Z)({},a),n=(0,o.gn)(t);t.field_map=n,r(t)}}));var h=(null==a?void 0:a.contactFields.filter((function(e){return!0===e.required})))||[],_=(null==a?void 0:a.contactFields.filter((function(e){return!1===e.required})))||[],x=(0,d.sJ)(C.hi).isPro;return(0,y.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,y.jsxs)("div",{className:"pos-rel flx",children:[(0,y.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,y.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return p(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),(0,y.jsx)("optgroup",{label:"Form Fields",children:n.map((function(e){return"file-up"!==e.type&&(0,y.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,y.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bit-integrations")}),(0,y.jsx)("optgroup",{label:"General Smart Codes "+(x?"":"(PRO)"),children:x&&(null==j.C?void 0:j.C.map((function(e){return(0,y.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===l.formField&&(0,y.jsx)(u.Z,{onChange:function(e){return b(e,t,a,r)},label:(0,s.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,s.__)("Custom Value","bit-integrations")}),(0,y.jsxs)("select",{className:"btcd-paper-inp",disabled:t<h.length,name:"sendFoxFormField",value:t<h.length?h[t].key||"":l.sendFoxFormField||"",onChange:function(e){return p(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),t<h.length?(0,y.jsx)("option",{value:h[t].key,children:h[t].label},h[t].key):_.map((function(e){var t=e.key,n=e.label;return(0,y.jsx)("option",{value:t,children:n},t)}))]})]}),t>=h.length&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{onClick:function(){return m(t,a,r)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,y.jsx)("button",{onClick:function(){return f(t,a,r)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,y.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Z(e){var t=e.i,n=e.formFields,l=e.field,a=e.sendFoxConf,r=e.setSendFoxConf;(0,c.useEffect)((function(){var e;if(1===(null==a||null==(e=a.field_map_list)?void 0:e.length)&&""===l.sendFoxListFormField){var t=(0,i.Z)({},a),n=(0,o.TN)(t);t.field_map_list=n,r(t)}}));var m=(null==a?void 0:a.listFields.filter((function(e){return!0===e.required})))||[],f=(null==a?void 0:a.listFields.filter((function(e){return!1===e.required})))||[],p=(0,d.sJ)(C.hi).isPro;return(0,y.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,y.jsxs)("div",{className:"pos-rel flx",children:[(0,y.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,y.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return h(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),(0,y.jsx)("optgroup",{label:"Form Fields",children:n.map((function(e){return"file-up"!==e.type&&(0,y.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,y.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bit-integrations")}),(0,y.jsx)("optgroup",{label:"General Smart Codes "+(p?"":"(PRO)"),children:p&&(null==j.C?void 0:j.C.map((function(e){return(0,y.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===l.formField&&(0,y.jsx)(u.Z,{onChange:function(e){return _(e,t,a,r)},label:(0,s.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,s.__)("Custom Value","bit-integrations")}),(0,y.jsxs)("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"sendFoxListFormField",value:t<m.length?m[t].key||"":l.sendFoxListFormField||"",onChange:function(e){return h(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),t<m.length?(0,y.jsx)("option",{value:m[t].key,children:m[t].label},m[t].key):f.map((function(e){var t=e.key,n=e.label;return(0,y.jsx)("option",{value:t,children:n},t)}))]})]}),t>=m.length&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{onClick:function(){return x(t,a,r)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,y.jsx)("button",{onClick:function(){return v(t,a,r)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,y.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function k(e){var t=e.i,n=e.formFields,l=e.field,a=e.sendFoxConf,r=e.setSendFoxConf;(0,c.useEffect)((function(){var e;if(1===(null==a||null==(e=a.field_map_unsubscribe)?void 0:e.length)&&""===l.sendFoxUnsubscribeFormField){var t=(0,i.Z)({},a),n=(0,o.Kv)(t);t.field_map_unsubscribe=n,r(t)}}));var m=(null==a?void 0:a.unsubscribeFields.filter((function(e){return!0===e.required})))||[],f=(null==a?void 0:a.unsubscribeFields.filter((function(e){return!1===e.required})))||[],p=(0,d.sJ)(C.hi).isPro;return(0,y.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,y.jsxs)("div",{className:"pos-rel flx",children:[(0,y.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,y.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return F(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),(0,y.jsx)("optgroup",{label:"Form Fields",children:n.map((function(e){return"file-up"!==e.type&&(0,y.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,y.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bit-integrations")}),(0,y.jsx)("optgroup",{label:"General Smart Codes "+(p?"":"(PRO)"),children:p&&(null==j.C?void 0:j.C.map((function(e){return(0,y.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===l.formField&&(0,y.jsx)(u.Z,{onChange:function(e){return g(e,t,a,r)},label:(0,s.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,s.__)("Custom Value","bit-integrations")}),(0,y.jsxs)("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"sendFoxUnsubscribeFormField",value:t<m.length?m[t].key||"":l.sendFoxUnsubscribeFormField||"",onChange:function(e){return F(e,t,a,r)},children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Field","bit-integrations")}),t<m.length?(0,y.jsx)("option",{value:m[t].key,children:m[t].label},m[t].key):f.map((function(e){var t=e.key,n=e.label;return(0,y.jsx)("option",{value:t,children:n},t)}))]})]}),t>=m.length&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{onClick:function(){return x(t,a,r)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,y.jsx)("button",{onClick:function(){return v(t,a,r)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,y.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function S(e){var t,n=e.formFields,d=e.handleInput,c=e.sendFoxConf,u=e.setSendFoxConf,m=e.isLoading,f=e.setIsLoading,p=e.setSnackbar,b=((null==c||null==(t=c.default)?void 0:t.allLists)||[]).map((function(e){var t=e.id;return{label:e.name,value:""+t}}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)("b",{className:"wdt-200 d-in-b",children:(0,s.__)("Actions:","bit-integrations")}),(0,y.jsxs)("select",{onChange:d,name:"mainAction",value:c.mainAction,className:"btcd-paper-inp w-5",children:[(0,y.jsx)("option",{value:"",children:(0,s.__)("Select Actions","bit-integrations")}),c.allActions&&c.allActions.map((function(e){var t=e.key,n=e.label;return(0,y.jsx)("option",{value:t,children:n},t)}))]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),m&&(0,y.jsx)(a.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),"1"===c.mainAction&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"mt-5",children:(0,y.jsx)("b",{className:"wdt-100",children:(0,s.__)("Field Map","bit-integrations")})}),(0,y.jsx)("div",{className:"btcd-hr mt-1"}),(0,y.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("Form Fields","bit-integrations")})}),(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("SendFox List Fields","bit-integrations")})})]}),null==c?void 0:c.field_map_list.map((function(e,t){return(0,y.jsx)(Z,{i:t,field:e,sendFoxConf:c,formFields:n,setSendFoxConf:u,setSnackbar:p},"rp-m-"+(t+9))}))]}),"2"===c.mainAction&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"d-flx",children:[(0,y.jsx)("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:(0,s.__)("All List:","bit-integrations")}),(0,y.jsx)(l.Z,{options:b,className:"btcd-paper-drpdwn w-5",defaultValue:c.listId,onChange:function(e){return function(e){var t=(0,i.Z)({},c);t.listId=e||"",u((0,i.Z)({},t))}(e)},customValue:!0}),(0,y.jsx)("button",{onClick:function(){return(0,o.GF)(c,u,f,p)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh SendFox List","bit-integrations")+"'",height:"35px"},type:"button",disabled:m,children:"↻"})]}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"mt-5",children:(0,y.jsx)("b",{className:"wdt-100",children:(0,s.__)("Field Map","bit-integrations")})}),(0,y.jsx)("div",{className:"btcd-hr mt-1"}),(0,y.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("Form Fields","bit-integrations")})}),(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("SendFox Fields","bit-integrations")})})]}),(null==c?void 0:c.listId)&&(null==c?void 0:c.field_map.map((function(e,t){return(0,y.jsx)(N,{i:t,field:e,sendFoxConf:c,formFields:n,setSendFoxConf:u,setSnackbar:p},"rp-m-"+(t+9))}))),(0,y.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,y.jsx)("button",{onClick:function(){return(0,r.FP)(c.field_map.length,c,u,!1)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),"3"===c.mainAction&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"mt-5",children:(0,y.jsx)("b",{className:"wdt-100",children:(0,s.__)("Field Map","bit-integrations")})}),(0,y.jsx)("div",{className:"btcd-hr mt-1"}),(0,y.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("Form Fields","bit-integrations")})}),(0,y.jsx)("div",{className:"txt-dp",children:(0,y.jsx)("b",{children:(0,s.__)("SendFox Unsubscribe Fields","bit-integrations")})})]}),null==c?void 0:c.field_map_unsubscribe.map((function(e,t){return(0,y.jsx)(k,{i:t,field:e,sendFoxConf:c,formFields:n,setSendFoxConf:u,setSnackbar:p},"rp-m-"+(t+9))}))]}),(0,y.jsx)("br",{})]})}}}]);
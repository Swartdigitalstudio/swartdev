"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[2015],{84584:(e,t,i)=>{i.d(t,{FP:()=>d,Mm:()=>r,P_:()=>o,T5:()=>u,WK:()=>s,mG:()=>f,wX:()=>m});var l=i(72564),a=i(99484),n=i(44947),r=function(e,t,i,a,n,r,s){var o=[].concat(e);if(s)o[r]=(0,l.Z)({},e[r],a),o.push({editItegration:!0}),t([].concat(o)),n.push(i);else{var c=[].concat(o);c.push(a),c.push({newItegration:!0}),t(c),n.push(i)}},s=function(e){var t={},i=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");i&&i.forEach((function(e){var i=e.split("=");i[1]&&(t[i[0]]=i[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,i,n,r,s,o,d,u){if(n.dataCenter&&n.clientId&&n.clientSecret){d(!0);var m="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+i+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var i={},s=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(s=!0,i=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),i.code&&!i.error&&i&&s){var _=(0,l.Z)({},n);_.accountServer=i["accounts-server"],c(t,i,_,r,o,d,u)}else{var b=i.error?"Cause: "+i.error:"";u({show:!0,msg:(0,a.__)("Authorization failed","bitform")+" "+b+". "+(0,a.__)("please try again","bitform")}),d(!1)}}}),500)}else s({dataCenter:n.dataCenter?"":(0,a.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,a.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,a.__)("Secret key cann't be empty","bitform")})},c=function(e,t,i,r,s,o,c){var d=(0,l.Z)({},t);d.dataCenter=i.dataCenter,d.clientId=i.clientId,d.clientSecret=i.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,n.Z)(d,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,l.Z)({},i);t.tokenDetails=e.data,r(t),s(!0),c({show:!0,msg:(0,a.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?c({show:!0,msg:""+(0,a.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,a.__)("please try again","bitform")}):c({show:!0,msg:(0,a.__)("Authorization failed. please try again","bitform")});o(!1)}))},d=function(e,t,i,a,n){var r=(0,l.Z)({},t);n?a?r.relatedlists[n-1].upload_field_map.splice(e,0,{}):r.relatedlists[n-1].field_map.splice(e,0,{}):a?r.upload_field_map.splice(e,0,{}):r.field_map.splice(e,0,{}),i((0,l.Z)({},r))},u=function(e,t,i,a,n){var r=(0,l.Z)({},t);n?a?r.relatedlists[n-1].upload_field_map.length>1&&r.relatedlists[n-1].upload_field_map.splice(e,1):r.relatedlists[n-1].field_map.length>1&&r.relatedlists[n-1].field_map.splice(e,1):a?r.upload_field_map.length>1&&r.upload_field_map.splice(e,1):r.field_map.length>1&&r.field_map.splice(e,1),i((0,l.Z)({},r))},m=function(e,t,i,a,n,r){var s=(0,l.Z)({},i);r?n?s.relatedlists[r-1].upload_field_map[t][e.target.name]=e.target.value:s.relatedlists[r-1].field_map[t][e.target.name]=e.target.value:n?s.upload_field_map[t][e.target.name]=e.target.value:s.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(r?s.relatedlists[r-1].field_map[t].customValue="":s.field_map[t].customValue=""),a((0,l.Z)({},s))},f=function(e,t,i,a,n){var r=(0,l.Z)({},i);n?r.relatedlists[n-1].field_map[t].customValue=e.target.value:r.field_map[t].customValue=e.target.value,a((0,l.Z)({},r))}},19470:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(99484),a=i(4637);function n(e){var t=e.step,i=e.saveConfig,n=e.edit,r=e.disabled;return n?(0,a.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,a.jsx)("button",{onClick:i,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,l.__)("Update","bitform")})}):(0,a.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,a.jsx)("h2",{className:"ml-3",children:(0,l.__)("Successfully Integrated","bitform")}),(0,a.jsxs)("button",{onClick:i,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,l.__)("Finish & Save ","bitform")," ✔"]})]})}},99271:(e,t,i)=>{i.d(t,{Fb:()=>u,Pd:()=>c,Rx:()=>s,gn:()=>o,tl:()=>d});var l=i(72564),a=i(19697),n=i(99484),r=i(44947),s=function(e,t,i){var a=(0,l.Z)({},t),n=e.target.name;""!==e.target.value?a[n]=e.target.value:delete a[n],i((0,l.Z)({},a))},o=function(e){var t=null==e?void 0:e.mailerLiteFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",mailerLiteFormField:e.key}})):[{formField:"",mailerLiteFormField:""}]},c=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField||!e.mailerLiteFormField||"custom"===!e.formField&&!e.customValue})):[]).length>0)},d=function(e,t,i,s,o,c){if(e.auth_token){i({}),o(!0);var d={auth_token:e.auth_token};(0,r.Z)(d,"bitforms_mailerlite_refresh_fields").then((function(i){if(i&&i.success){var r=(0,l.Z)({},e);return i.data&&(r.mailerLiteFields=i.data),t(r),void("authorization"===c?(o(!1),s(!0),a.ZP.success((0,n.__)("Authorized successfully","bitform"))):(o(!1),a.ZP.success((0,n.__)("Fields refresh successfully","bitform"))))}"authorization"===c?(o(!1),s(!1),a.ZP.error((0,n.__)(i.data,"bitform")),a.ZP.error((0,n.__)("Authorized Failed","bitform"))):(o(!1),a.ZP.error((0,n.__)("Fields refresh failed","bitform")))}))}else i({auth_token:e.auth_token?"":(0,n.__)("Api Key can't be empty","bitform")})},u=function(e,t,i){i(!0);var s={auth_token:e.auth_token};(0,r.Z)(s,"bitforms_mailerlite_fetch_all_groups").then((function(r){if(r&&r.success){var s=(0,l.Z)({},e);return r.data&&(s.groups=r.data),t(s),i(!1),void a.ZP.success((0,n.__)("Group fetch successfully","bitform"))}i(!1),a.ZP.error((0,n.__)("Group fetch failed","bitform"))}))}},84960:(e,t,i)=>{i.d(t,{Z:()=>y});var l=i(99484),a=i(40493),n=i(72564),r=function(e,t,i){var l=(0,n.Z)({},t);l.field_map.splice(e,0,{}),i((0,n.Z)({},l))},s=function(e,t,i){var l=(0,n.Z)({},t);l.field_map.length>1&&l.field_map.splice(e,1),i((0,n.Z)({},l))},o=function(e,t,i,l){var a=(0,n.Z)({},i);a.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a.field_map[t].customValue=""),l((0,n.Z)({},a))},c=function(e,t,i,l){var a=(0,n.Z)({},i);a.field_map[t].customValue=e.target.value,l((0,n.Z)({},a))},d=i(57287),u=i(46649),m=i(85385),f=i(8309),p=i(99271),_=i(4637);function b(e){var t,i=e.i,a=e.formFields,b=e.field,h=e.mailerLiteConf,v=e.setMailerLiteConf;if(1===(null==h||null==(t=h.field_map)?void 0:t.length)&&""===b.mailerLiteFormField){var g=(0,n.Z)({},h),x=(0,p.gn)(g);g.field_map=x,v(g)}var j=(null==h?void 0:h.mailerLiteFields.filter((function(e){return!0===e.required})))||[],y=(null==h?void 0:h.mailerLiteFields.filter((function(e){return!1===e.required})))||[],C=(0,d.sJ)(f.hi).isPro;return(0,_.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,_.jsxs)("div",{className:"pos-rel flx",children:[(0,_.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,_.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:b.formField||"",onChange:function(e){return o(e,i,h,v)},children:[(0,_.jsx)("option",{value:"",children:(0,l.__)("Select Field","bit-form")}),(0,_.jsx)("optgroup",{label:"Form Fields",children:null==a?void 0:a.map((function(e){return(0,_.jsx)("option",{value:e.key,children:e.name},"ff-rm-"+e.key)}))}),(0,_.jsx)("option",{value:"custom",children:(0,l.__)("Custom...","bit-form")}),(0,_.jsx)("optgroup",{label:"General Smart Codes "+(C?"":"(PRO)"),children:C&&(null==m.C?void 0:m.C.map((function(e){return(0,_.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===b.formField&&(0,_.jsx)(u.Z,{onChange:function(e){return c(e,i,h,v)},label:(0,l.__)("Custom Value","bit-form"),className:"mr-2",type:"text",value:b.customValue,placeholder:(0,l.__)("Custom Value","bit-form")}),(0,_.jsxs)("select",{className:"btcd-paper-inp",disabled:i<j.length,name:"mailerLiteFormField",value:i<j?j[i].label||"":b.mailerLiteFormField||"",onChange:function(e){return o(e,i,h,v)},children:[(0,_.jsx)("option",{value:"",children:(0,l.__)("Select Field","bit-form")}),i<j.length?(0,_.jsx)("option",{value:j[i].key,children:j[i].label},j[i].key):y.map((function(e){var t=e.key,i=e.label;return(0,_.jsx)("option",{value:t,children:i},t)}))]})]}),i>=j.length&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{onClick:function(){return r(i,h,v)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,_.jsx)("button",{onClick:function(){return s(i,h,v)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,_.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}var h=i(59496),v=i(52080),g=i(46249),x=i(3454);i(32586);function j(e){var t,i,r,s=e.mailerLiteConf,o=e.setMailerLiteConf,c=(e.formFields,(0,h.useState)({show:!1,action:function(){}})),d=c[0],u=c[1],m=(0,h.useState)(!1),f=m[0],b=m[1],j=function(e,t){var i=(0,n.Z)({},s);"group"===t&&((0,p.Fb)(s,o,b),e.target.checked?i.actions.group=!0:delete i.actions.group,u({show:t})),"mailer_lite_type"===t&&(e.target.checked?i.actions.mailer_lite_type=!0:delete i.actions.mailer_lite_type,u({show:t})),"update"===t&&(e.target.checked?i.actions.update=!0:delete i.actions.update),"double_opt_in"===t&&(e.target.checked?i.actions.double_opt_in=!0:delete i.actions.double_opt_in),o((0,n.Z)({},i))},y=function(){u({show:!1})},C=function(e,t){var i=(0,n.Z)({},s);"group_ids"===t&&e.length?(i.actions.group=!0,i.actions.update=!0):"group_ids"===t&&e.length<1&&delete i.actions.group,"mailer_lite_type"===t&&e.length?i.actions.mailer_lite_type=!0:"mailer_lite_type"===t&&e.length<1&&delete i.actions.mailer_lite_type,i[t]=e,o((0,n.Z)({},i))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"pos-rel d-flx w-8",children:[(0,_.jsx)(x.Z,{checked:(null==s?void 0:s.group_ids.length)||!1,onChange:function(e){return j(e,"group")},className:"wdt-200 mt-4 mr-2",value:"group",title:(0,l.__)("Groups","bitform"),subTitle:(0,l.__)("Add Groups","bitform")}),(0,_.jsx)(x.Z,{checked:(null==s?void 0:s.mailer_lite_type)||!1,onChange:function(e){return j(e,"mailer_lite_type")},className:"wdt-200 mt-4 mr-2",value:"type",title:(0,l.__)("Type","bitform"),subTitle:(0,l.__)("Add Type","bitform")}),(0,_.jsx)(x.Z,{checked:(null==(t=s.actions)?void 0:t.double_opt_in)||!1,onChange:function(e){return j(e,"double_opt_in")},className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:(0,l.__)("Double Opt-in","bitform"),subTitle:(0,l.__)("Add Double Opt-in","bitform")}),(0,_.jsx)(x.Z,{checked:(null==(i=s.actions)?void 0:i.update)||!1,isInfo:null==s?void 0:s.group_ids.length,onChange:function(e){return j(e,"update")},className:"wdt-200 mt-4 mr-2",value:"user_share",title:(0,l.__)("Update Subscriber","bitform"),subTitle:(0,l.__)("Update Responses with MailerLite exist Subscriber?","bitform")})]}),(0,_.jsxs)(g.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,l.__)("Ok","bitform"),show:"group"===d.show,close:y,action:y,title:(0,l.__)("Groups","bitform"),children:[(0,_.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),f?(0,_.jsx)(a.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,_.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,_.jsx)(v.Z,{className:"msl-wrp-options",defaultValue:null==s?void 0:s.group_ids,options:null==s||null==(r=s.groups)?void 0:r.map((function(e){return{label:e.name,value:e.group_id}})),onChange:function(e){return C(e,"group_ids")},customValue:!0}),(0,_.jsx)("button",{onClick:function(){return(0,p.Fb)(s,o,b)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":(0,l.__)("Refresh Groups","bitform")+"'"},type:"button",disabled:f,children:"↻"})]})]}),(0,_.jsxs)(g.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,l.__)("Ok","bitform"),show:"mailer_lite_type"===d.show,close:y,action:y,title:(0,l.__)("Type","bitform"),children:[(0,_.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),f?(0,_.jsx)(a.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,_.jsx)("div",{className:"flx flx-between mt-2",children:(0,_.jsx)(v.Z,{className:"msl-wrp-options",defaultValue:null==s?void 0:s.mailer_lite_type,options:[{label:"Active",value:"active"},{label:"Unsubscribed",value:"unsubscribed"},{label:"Bounced",value:"bounced"},{label:"Spam Complaints",value:"junk"},{label:"Unconfirmed",value:"unconfirmed"}].map((function(e){return{label:e.label,value:e.value}})),onChange:function(e){return C(e,"mailer_lite_type")},customValue:!0,singleSelect:!0})})]})]})}function y(e){var t=e.formFields,i=e.mailerLiteConf,n=e.setMailerLiteConf,s=e.isLoading,o=e.setIsLoading,c=e.setSnackbar,d=(0,h.useState)(!1),u=(d[0],d[1]),m=(0,h.useState)({name:"",auth_token:""}),f=(m[0],m[1]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("br",{}),(0,_.jsx)("div",{className:"mt-5",children:(0,_.jsxs)("b",{className:"wdt-100",children:[(0,l.__)("Field Map","bitform"),(0,_.jsx)("button",{onClick:function(){return(0,p.tl)(i,n,f,u,o,"refreshFields")},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Fields"'},type:"button",disabled:s,children:"↻"})]})}),(0,_.jsx)("br",{}),s&&(0,_.jsx)(a.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,_.jsx)("div",{className:"btcd-hr mt-1"}),(0,_.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,_.jsx)("div",{className:"txt-dp",children:(0,_.jsx)("b",{children:(0,l.__)("Form Fields","bitform")})}),(0,_.jsx)("div",{className:"txt-dp",children:(0,_.jsx)("b",{children:(0,l.__)("MailerLite Fields","bitform")})})]}),null==i?void 0:i.field_map.map((function(e,l){return(0,_.jsx)(b,{i:l,field:e,mailerLiteConf:i,formFields:t,setMailerLiteConf:n,setSnackbar:c},"rp-m-"+(l+9))})),(0,_.jsx)("div",{className:"txt-center btcbi-field-map-button mt-2",children:(0,_.jsx)("button",{onClick:function(){return r(i.field_map.length,i,n,!1)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{}),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"mt-4",children:(0,_.jsx)("b",{className:"wdt-100",children:(0,l.__)("Actions","bitform")})}),(0,_.jsx)("div",{className:"btcd-hr mt-1"}),(0,_.jsx)(j,{mailerLiteConf:i,setMailerLiteConf:n,formFields:t})]})]})}}}]);
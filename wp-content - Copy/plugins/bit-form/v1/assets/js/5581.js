"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[5581],{59320:(e,t,a)=>{a.d(t,{OC:()=>r,Pd:()=>d,Rx:()=>o,aZ:()=>l});var i=a(72564),n=a(66399),s=a(12102),l=function(e,t,a,l){a(!0),(0,s.Z)({},"bitforms_autonami_lists_and_tags").then((function(s){if(s&&s.success){var r=(0,i.Z)({},e);r.default||(r.default={}),s.data.autonamiList&&(r.default.autonamiList=s.data.autonamiList),s.data.autonamiTags&&(r.default.autonamiTags=s.data.autonamiTags),l({show:!0,msg:(0,n.__)("Autonami lists and tags refreshed","bitform")}),t((0,i.Z)({},r))}else s&&s.data&&s.data.data||!s.success&&"string"===typeof s.data?l({show:!0,msg:""+(0,n.__)("Autonami lists and tags refresh failed Cause:","bitform")+(s.data.data||s.data)+". "+(0,n.__)("please try again","bitform")}):l({show:!0,msg:(0,n.__)("Autonami lists and tags refresh failed. please try again","bitform")});a(!1)})).catch((function(){return a(!1)}))},r=function(e,t,a,l,r){void 0===r&&(r=!1),(0,s.Z)({},"bitforms_autonami_fields").then((function(s){if(s&&s.success){var o=(0,i.Z)({},e);if(o.default||(o.default={}),s.data.autonamiFields){if(o.default.fields=s.data.autonamiFields,!r){var d=o.default.fields;o.field_map=Object.values(d).filter((function(e){return e.required})).map((function(e){return{formField:"",autonamiField:e.key,required:!0}}))}l({show:!0,msg:(0,n.__)("Autonami fields refreshed","bitform")})}else l({show:!0,msg:(0,n.__)("No Autonami fields found. Try changing the header row number or try again","bitform")});t((0,i.Z)({},o))}else l({show:!0,msg:(0,n.__)("Autonami fields refresh failed. please try again","bitform")});a(!1)})).catch((function(){return a(!1)}))},o=function(e,t,a){var n=(0,i.Z)({},t);n.name=e.target.value,a((0,i.Z)({},n))},d=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField&&e.autonamiField&&e.required})):[]).length>0)}},4630:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(72564),n=a(83428),s=a(66399),l=a(82166),r=a(52665),o=a(26414),d=a(4637);function u(e){var t,a=e.autonamiConf,n=e.setAutonamiConf;e.formFields;return(0,d.jsx)("div",{className:"pos-rel d-flx w-8",children:(0,d.jsx)(o.Z,{checked:(null==(t=a.actions)?void 0:t.skip_if_exists)||!1,onChange:function(e){return function(e,t){var s=(0,i.Z)({},a);"exists"===t&&(e.target.checked?s.actions.skip_if_exists=!0:delete s.actions.skip_if_exists),n((0,i.Z)({},s))}(e,"exists")},className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:(0,s.__)("Skip exist Contact","bitform"),subTitle:(0,s.__)("Skip if contact already exist in Autonami","bitform")})})}var c=a(59320),m=a(48291),f=a(20859),p=a(53189),_=a(80027),h=a(84048);function b(e){var t,a,n,l=e.i,r=e.formFields,o=e.field,u=e.autonamiConf,c=e.setAutonamiConf,b=o.required,g=(null==u||null==(t=u.default)?void 0:t.fields)&&Object.values(null==u||null==(a=u.default)?void 0:a.fields).filter((function(e){return!e.required})),v=(0,m.sJ)(f.hi).isPro,x=function(e,t){var a=(0,i.Z)({},u);a.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a.field_map[t].customValue=""),c(a)};return(0,d.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,d.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,d.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:o.formField||"",onChange:function(e){return x(e,l)},children:[(0,d.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(0,d.jsx)("optgroup",{label:"Form Fields",children:r.map((function(e){return"file-up"!==e.type&&(0,d.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,d.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bitform")}),(0,d.jsx)("optgroup",{label:"General Smart Codes "+(v?"":"(PRO)"),children:v&&(null==_.C?void 0:_.C.map((function(e){return(0,d.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===o.formField&&(0,d.jsx)(h.Z,{onChange:function(e){return function(e,t){var a=(0,i.Z)({},u);a.field_map[t].customValue=e.target.value,c(a)}(e,l)},label:(0,s.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:o.customValue,placeholder:(0,s.__)("Custom Value","bitform")}),(0,d.jsxs)("select",{className:"btcd-paper-inp",name:"autonamiField",value:o.autonamiField,onChange:function(e){return x(e,l)},disabled:b,children:[(0,d.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),b?(null==u||null==(n=u.default)?void 0:n.fields)&&Object.values(u.default.fields).map((function(e){return(0,d.jsx)("option",{value:e.key,children:e.label},e.key+"-1")})):g&&g.map((function(e){return(0,d.jsx)("option",{value:e.key,children:e.label},e.key+"-1")}))]})]}),!b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:function(){return function(e){var t=(0,i.Z)({},u);t.field_map.splice(e,0,{}),c(t)}(l)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,d.jsx)("button",{onClick:function(){return function(e){var t=(0,i.Z)({},u);t.field_map.length>1&&t.field_map.splice(e,1),c(t)}(l)},className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:(0,d.jsx)(p.Z,{})})]})]})}function g(e){e.formID;var t,a,o=e.formFields,m=e.autonamiConf,f=e.setAutonamiConf,p=e.isLoading,_=e.setIsLoading,h=e.setSnackbar;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"flx",children:[(0,d.jsx)("b",{className:"wdt-200 d-in-b",children:(0,s.__)("Autonami Lists:","bitform")}),(0,d.jsx)(n.Z,{defaultValue:null==m?void 0:m.lists,className:"btcd-paper-drpdwn w-5",options:(null==m||null==(t=m.default)?void 0:t.autonamiList)&&Object.keys(m.default.autonamiList).map((function(e){return{label:m.default.autonamiList[e].title,value:m.default.autonamiList[e].id.toString()}})),onChange:function(e){return function(e){var t=(0,i.Z)({},m);t.lists=e?e.split(","):[],f((0,i.Z)({},t))}(e)}}),(0,d.jsx)("button",{onClick:function(){return(0,c.aZ)(m,f,_,h)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh Autonami Lists And Tags","bitform")+"'"},type:"button",disabled:p,children:"↻"})]}),(0,d.jsxs)("div",{className:"flx mt-5",children:[(0,d.jsx)("b",{className:"wdt-200 d-in-b",children:(0,s.__)("Autonami Tags: ","bitform")}),(0,d.jsx)(n.Z,{defaultValue:null==m?void 0:m.tags,className:"btcd-paper-drpdwn w-5",options:(null==m||null==(a=m.default)?void 0:a.autonamiTags)&&Object.keys(m.default.autonamiTags).map((function(e){return{label:m.default.autonamiTags[e].title,value:m.default.autonamiTags[e].id.toString()}})),onChange:function(e){return function(e){var t=(0,i.Z)({},m);t.tags=e?e.split(","):[],f((0,i.Z)({},t))}(e)}})]}),p&&(0,d.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,d.jsxs)("div",{className:"mt-4",children:[(0,d.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")}),(0,d.jsx)("button",{onClick:function(){return(0,c.OC)(m,f,_,h,!0)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh Autonami Fields","bitform")+"'"},type:"button",disabled:p,children:"↻"})]}),(0,d.jsx)("div",{className:"btcd-hr mt-1"}),(0,d.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,d.jsx)("div",{className:"txt-dp",children:(0,d.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,d.jsx)("div",{className:"txt-dp",children:(0,d.jsx)("b",{children:(0,s.__)("Autonami Fields","bitform")})})]}),m.field_map.map((function(e,t){return(0,d.jsx)(b,{i:t,field:e,autonamiConf:m,formFields:o,setAutonamiConf:f},"autonami-m-"+(t+9))})),(0,d.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,d.jsx)("button",{onClick:function(){return(0,r.FP)(m.field_map.length,m,f)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"mt-4",children:(0,d.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,d.jsx)("div",{className:"btcd-hr mt-1"}),(0,d.jsx)(u,{autonamiConf:m,setAutonamiConf:f,setIsLoading:_,setSnackbar:h})]})}},52665:(e,t,a)=>{a.d(t,{FP:()=>u,Mm:()=>l,P_:()=>o,T5:()=>c,WK:()=>r,mG:()=>f,wX:()=>m});var i=a(72564),n=a(66399),s=a(12102),l=function(e,t,a,n,s,l,r){var o=[].concat(e);if(r)o[l]=(0,i.Z)({},e[l],n),o.push({editItegration:!0}),t([].concat(o)),s.push(a);else{var d=[].concat(o);d.push(n),d.push({newItegration:!0}),t(d),s.push(a)}},r=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,s,l,r,o,u,c){if(s.dataCenter&&s.clientId&&s.clientSecret){u(!0);var m="https://accounts.zoho."+s.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+s.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var a={},r=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(r=!0,a=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&r){var _=(0,i.Z)({},s);_.accountServer=a["accounts-server"],d(t,a,_,l,o,u,c)}else{var h=a.error?"Cause: "+a.error:"";c({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+h+". "+(0,n.__)("please try again","bitform")}),u(!1)}}}),500)}else r({dataCenter:s.dataCenter?"":(0,n.__)("Data center cann't be empty","bitform"),clientId:s.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:s.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,l,r,o,d){var u=(0,i.Z)({},t);u.dataCenter=a.dataCenter,u.clientId=a.clientId,u.clientSecret=a.clientSecret,u.redirectURI=bits.zohoRedirectURL,(0,s.Z)(u,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,i.Z)({},a);t.tokenDetails=e.data,l(t),r(!0),d({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):d({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});o(!1)}))},u=function(e,t,a,n,s){var l=(0,i.Z)({},t);s?n?l.relatedlists[s-1].upload_field_map.splice(e,0,{}):l.relatedlists[s-1].field_map.splice(e,0,{}):n?l.upload_field_map.splice(e,0,{}):l.field_map.splice(e,0,{}),a((0,i.Z)({},l))},c=function(e,t,a,n,s){var l=(0,i.Z)({},t);s?n?l.relatedlists[s-1].upload_field_map.length>1&&l.relatedlists[s-1].upload_field_map.splice(e,1):l.relatedlists[s-1].field_map.length>1&&l.relatedlists[s-1].field_map.splice(e,1):n?l.upload_field_map.length>1&&l.upload_field_map.splice(e,1):l.field_map.length>1&&l.field_map.splice(e,1),a((0,i.Z)({},l))},m=function(e,t,a,n,s,l){var r=(0,i.Z)({},a);l?s?r.relatedlists[l-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[l-1].field_map[t][e.target.name]=e.target.value:s?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(l?r.relatedlists[l-1].field_map[t].customValue="":r.field_map[t].customValue=""),n((0,i.Z)({},r))},f=function(e,t,a,n,s){var l=(0,i.Z)({},a);s?l.relatedlists[s-1].field_map[t].customValue=e.target.value:l.field_map[t].customValue=e.target.value,n((0,i.Z)({},l))}},7020:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(66399),n=a(4637);function s(e){var t=e.step,a=e.saveConfig,s=e.edit,l=e.disabled;return s?(0,n.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,n.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l,children:(0,i.__)("Update","bitform")})}):(0,n.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,n.jsx)("h2",{className:"ml-3",children:(0,i.__)("Successfully Integrated","bitform")}),(0,n.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,i.__)("Finish & Save ","bitform")," ✔"]})]})}}}]);
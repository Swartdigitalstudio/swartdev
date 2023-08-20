"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[8598],{67558:(e,t,n)=>{n.d(t,{C8:()=>m,P_:()=>u,Pd:()=>c,Rx:()=>s,gn:()=>o,hr:()=>d});var a=n(72564),i=n(94965),l=n(2850),r=(n(74641),n(57852)),s=function(e,t,n){var i=(0,a.Z)({},t),l=e.target.name;""!==e.target.value?i[l]=e.target.value:delete i[l],n((0,a.Z)({},i))},o=function(e){var t=null==e?void 0:e.contactsFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",GroundhoggMapField:e.key}})):[{formField:"",GroundhoggMapField:""}]},c=function(e){return(!e.field_map||!e.field_map.find((function(e){return!e.formField||!e.GroundhoggMapField})))&&!((e.field_map?e.field_map.filter((function(e){return!e.formField&&!e.GroundhoggMapField})):[]).length>0)},d=function(e){return(!e.field_map_meta||!e.field_map_meta.find((function(e){return!e.formField||!e.GroundhoggMetaMapField})))&&!((e.field_map_meta?e.field_map_meta.filter((function(e){return!e.formField&&!e.GroundhoggMetaMapField})):[]).length>0)},u=function(e,t,n,s,o,c){if(e.public_key)if(e.token)if(e.domainName){n({}),o(!0);var d={public_key:e.public_key,token:e.token,domainName:e.domainName};(0,l.Z)(d,"bitforms_groundhogg_authorization_and_fetch_contacts").then((function(n){if(n&&n.success){var l=(0,a.Z)({},e);return t(l),s(!0),o(!1),void i.ZP.success((0,r.__)("Authorization Successful","bit-integrations"))}o(!1),i.ZP.error((0,r.__)("Authorization Failed","bit-integrations"))}))}else n({domainName:e.domainName?"":(0,r.__)("Domain Name can't be empty","bit-integrations")});else n({token:e.token?"":(0,r.__)("token can't be empty","bit-integrations")});else n({public_key:e.public_key?"":(0,r.__)("Public Key can't be empty","bit-integrations")})},m=function(e,t,n,s,o){s(!0);var c={public_key:t.public_key,token:t.token,domainName:t.domainName};(0,l.Z)(c,"bitforms_groundhogg_fetch_all_tags").then((function(e){if(e&&e.success){var l=(0,a.Z)({},t);return l.default||(l.default={}),e.data.tags&&(l.default.tags=e.data.tags),n((0,a.Z)({},l)),s(!1),void i.ZP.success((0,r.__)("Groundhogg all tag fetched successfully","bit-integrations"))}s(!1),i.ZP.error((0,r.__)("Failed to fetch groundhoggtag","bit-integrations"))})).catch((function(){return s(!1)}))}},76413:(e,t,n)=>{n.d(t,{Z:()=>G});var a=n(72564),i=n(59496),l=n(83428),r=n(57852),s=n(34172),o=n(55668),c=n(33273),d=n(69369),u=n(45427),m=(n(24141),n(67558)),f=n(75138),g=n(4637);function h(e){var t,n,d,h=e.groundhoggConf,p=e.setGroundhoggConf,b=e.formFields,_=(0,i.useState)(!1),v=_[0],x=_[1],j=(0,i.useState)({show:!1,action:function(){}}),C=j[0],y=j[1],N=function(){y({show:!1})},F=[{type:"group",title:"Groundhogg Tags",childs:((null==h||null==(t=h.default)?void 0:t.tags)||[]).map((function(e){var t=e.tag_name;return{label:t,value:"ground-"+t}}))},{type:"group",title:"Form Fields",childs:b.map((function(e){return{label:e.lbl,value:e.key}}))},{type:"group",title:"Special Tags",childs:null==s.C?void 0:s.C.map((function(e){return{label:e.label,value:e.name}}))}];return(0,g.jsxs)("div",{className:"pos-rel d-flx w-8",children:[(0,g.jsx)(f.Z,{action:function(){y({show:"tag"})},children:(0,g.jsx)(c.Z,{checked:(null==h||null==(n=h.actions)?void 0:n.tags)||!1,onChange:function(e){return function(e,t){var n,i=(0,a.Z)({},h);"tag"===t&&(null!=(n=e.target)&&n.checked?i.actions.tags=!0:delete i.actions.tags),p((0,a.Z)({},i))}(e,"tag")},className:"wdt-200 mt-4 mr-2",value:"tags",title:(0,r.__)("Add Tags","bit-integrations"),subTitle:(0,r.__)("Add Contact Tag","bit-integrations")})}),(0,g.jsxs)(u.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,r.__)("Ok","bit-integrations"),show:"tag"===C.show,close:N,action:N,title:(0,r.__)("Tags","bit-integrations"),children:[(0,g.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),(0,g.jsx)("div",{className:"mt-2",children:(0,r.__)("Select tag","bit-integrations")}),v?(0,g.jsx)(o.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,g.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,g.jsx)(l.Z,{options:F,className:"msl-wrp-options",defaultValue:null==(d=h.actions)?void 0:d.tags,onChange:function(e){return function(e){var t=(0,a.Z)({},h);e?t.actions.tags=e:delete t.actions.tags,p((0,a.Z)({},t))}(e)},customValue:!0}),(0,g.jsx)("button",{onClick:function(){return(0,m.C8)(null,h,p,x,null)},className:"icn-btn sh-sm ml-2 mr-4 tooltip",style:{"--tooltip-txt":"'"+(0,r.__)("Refresh Groundhogg Tags","bit-integrations")+"'"},type:"button",disabled:v,children:"↻"})]})]})]})}var p=n(48291),b=n(73111),_=function(e,t,n){var i=(0,a.Z)({},t);i.field_map.splice(e,0,{}),n((0,a.Z)({},i))},v=function(e,t,n){var i=(0,a.Z)({},t);i.field_map.length>1&&i.field_map.splice(e,1),n((0,a.Z)({},i))},x=function(e,t,n){var i=(0,a.Z)({},t);i.field_map_meta.splice(e,0,{}),n((0,a.Z)({},i))},j=function(e,t,n){var i=(0,a.Z)({},t);i.field_map_meta.length>1&&i.field_map_meta.splice(e,1),n((0,a.Z)({},i))},C=function(e,t,n,i){var l=(0,a.Z)({},n);l.field_map[t][e.target.name]=e.target.value,i((0,a.Z)({},l))},y=function(e,t,n,i){var l=(0,a.Z)({},n);l.field_map_meta[t][e.target.name]=e.target.value,i((0,a.Z)({},l))},N=function(e,t,n,i){var l=(0,a.Z)({},n);l.field_map[t].customValue=e.target.value,i((0,a.Z)({},l))},F=function(e,t,n,i){var l=(0,a.Z)({},n);l.field_map_meta[t].customMetaFormValue=e.target.value,i((0,a.Z)({},l))},Z=function(e,t,n,i){var l=(0,a.Z)({},n);l.field_map_meta[t].customMetaGroundValue=e.target.value,i((0,a.Z)({},l))},k=n(8022);function w(e){var t=e.i,n=e.formFields,l=e.field,o=e.groundhoggConf,c=e.setGroundhoggConf;(0,i.useEffect)((function(){var e;if(1===(null==o||null==(e=o.field_map)?void 0:e.length)&&""===l.GroundhoggMapField){var t=(0,a.Z)({},o),n=(0,m.gn)(t);t.field_map=n,c(t)}}),[]);var d=(null==o?void 0:o.contactsFields.filter((function(e){return!0===e.required})))||[],u=(null==o?void 0:o.contactsFields.filter((function(e){return!1===e.required})))||[],f=(0,p.sJ)(k.hi).isPro;return(0,g.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,g.jsxs)("div",{className:"pos-rel flx",children:[(0,g.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,g.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return C(e,t,o,c)},children:[(0,g.jsx)("option",{value:"",children:(0,r.__)("Select Field","bit-integrations")}),(0,g.jsx)("optgroup",{label:"Form Fields",children:n.map((function(e){return"file-up"!==e.type&&(0,g.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,g.jsx)("option",{value:"custom",children:(0,r.__)("Custom...","bit-integrations")}),(0,g.jsx)("optgroup",{label:"General Smart Codes "+(f?"":"(PRO)"),children:f&&(null==s.C?void 0:s.C.map((function(e){return(0,g.jsx)("option",{value:e.name,children:e.label},"ff-gh-"+e.name)})))})]}),"custom"===l.formField&&(0,g.jsx)(b.Z,{onChange:function(e){return N(e,t,o,c)},label:(0,r.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,r.__)("Custom Value","bit-integrations")}),(0,g.jsxs)("select",{className:"btcd-paper-inp",disabled:t<d.length,name:"GroundhoggMapField",value:t<d.length?d[t].key||"":l.GroundhoggMapField||"",onChange:function(e){return C(e,t,o,c)},children:[(0,g.jsx)("option",{value:"",children:(0,r.__)("Select Field","bit-integrations")}),t<d.length?(0,g.jsx)("option",{value:d[t].key,children:d[t].label},d[t].key+t):u.map((function(e){var t=e.key,n=e.label;return(0,g.jsx)("option",{value:t,children:n},t)}))]})]}),t>=d.length&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{onClick:function(){return _(t,o,c)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,g.jsx)("button",{onClick:function(){return v(t,o,c)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,g.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function M(e){var t=e.i,n=e.formFields,l=e.field,o=e.groundhoggConf,c=e.setGroundhoggConf;(0,i.useEffect)((function(){var e;if(1===(null==o||null==(e=o.field_map_meta)?void 0:e.length)&&""===l.GroundhoggMetaMapField){var t=(0,a.Z)({},o),n=(0,m.gn)(t);t.field_map_meta=n,c(t)}}),[]);var d=(null==o?void 0:o.contactMetaFields.filter((function(e){return!0===e.required})))||[],u=(null==o?void 0:o.contactMetaFields.filter((function(e){return!1===e.required})))||[],f=(0,p.sJ)(k.hi).isPro;return(0,g.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,g.jsxs)("div",{className:"pos-rel flx",children:[(0,g.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,g.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return y(e,t,o,c)},children:[(0,g.jsx)("option",{value:"",children:(0,r.__)("Select Field","bit-integrations")}),(0,g.jsx)("optgroup",{label:"Form Fields",children:n.map((function(e){return"file-up"!==e.type&&(0,g.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,g.jsx)("option",{value:"custom",children:(0,r.__)("Custom...","bit-integrations")}),(0,g.jsx)("optgroup",{label:"General Smart Codes "+(f?"":"(PRO)"),children:f&&(null==s.C?void 0:s.C.map((function(e){return(0,g.jsx)("option",{value:e.name,children:e.label},"ff-gh-"+e.name)})))})]}),"custom"===l.formField&&(0,g.jsx)(b.Z,{onChange:function(e){return F(e,t,o,c)},label:(0,r.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customMetaFormValue,placeholder:(0,r.__)("Custom Value","bit-integrations")}),(0,g.jsxs)("select",{className:"btcd-paper-inp",disabled:t<d.length,name:"GroundhoggMetaMapField",value:t<d.length?d[t].key||"":l.GroundhoggMetaMapField||"",onChange:function(e){return y(e,t,o,c)},children:[(0,g.jsx)("option",{value:"",children:(0,r.__)("Select Field","bit-integrations")}),t<d.length?(0,g.jsx)("option",{value:d[t].key,children:d[t].label},d[t].key):u.map((function(e){var t=e.key,n=e.label;return(0,g.jsx)("option",{value:t,children:n},t)})),(0,g.jsx)("option",{value:"custom",children:(0,r.__)("Custom...","bit-integrations")})]}),"custom"===l.GroundhoggMetaMapField&&(0,g.jsx)(b.Z,{onChange:function(e){return Z(e,t,o,c)},label:(0,r.__)("Custom Groundhogg Value","bit-integrations"),className:"mr-2",type:"text",value:l.customMetaGroundValue,placeholder:(0,r.__)("Custom Groundhogg Value","bit-integrations")})]}),t>=d.length&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{onClick:function(){return x(t,o,c,!1)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,g.jsx)("button",{onClick:function(){return j(t,o,c)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,g.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function G(e){var t,n=e.formFields,i=e.handleInput,u=e.groundhoggConf,f=e.setGroundhoggConf,p=e.isLoading,b=e.setIsLoading,_=e.setSnackbar,v=[{type:"group",title:"Groundhogg Tags",childs:((null==u||null==(t=u.default)?void 0:t.tags)||[]).map((function(e){var t=e.tag_name;return{label:t,value:"ground-"+t}}))},{type:"group",title:"Form Fields",childs:n.map((function(e){return{label:e.lbl,value:e.key}}))},{type:"group",title:"Special Tags",childs:null==s.C?void 0:s.C.map((function(e){return{label:e.label,value:e.name}}))}],j=n.filter((function(e){return"email"===e.typ})).map((function(e){return{label:e.lbl,value:e.key}}));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsx)("b",{className:"wdt-200 d-in-b",children:(0,r.__)("Actions:","bit-integrations")}),(0,g.jsxs)("select",{onChange:i,name:"mainAction",value:u.mainAction,className:"btcd-paper-inp w-5",children:[(0,g.jsx)("option",{value:"",children:(0,r.__)("Select Actions","bit-integrations")}),u.allActions&&u.allActions.map((function(e){var t=e.key,n=e.label;return(0,g.jsx)("option",{value:t,children:n},t)}))]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"2"===u.mainAction&&(0,g.jsxs)("div",{className:"d-flx",children:[(0,g.jsx)("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:(0,r.__)("Email:","bit-integrations")}),(0,g.jsx)(l.Z,{options:j.map((function(e){return{label:e.label,value:e.value}})),className:"btcd-paper-drpdwn w-5",defaultValue:u.emailAddress,onChange:function(e){return function(e){var t=(0,a.Z)({},u);t.emailAddress=e||"",f((0,a.Z)({},t))}(e)}})]}),p&&(0,g.jsx)(o.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,g.jsx)("br",{}),"1"===u.mainAction&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsx)("b",{className:"wdt-100",children:(0,r.__)("Field Map","bit-integrations")})}),(0,g.jsx)("div",{className:"btcd-hr mt-1"}),(0,g.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,g.jsx)("div",{className:"txt-dp",children:(0,g.jsx)("b",{children:(0,r.__)("Form Fields","bit-integrations")})}),(0,g.jsx)("div",{className:"txt-dp",children:(0,g.jsx)("b",{children:(0,r.__)("Groundhogg Fields","bit-integrations")})})]}),null==u?void 0:u.field_map.map((function(e,t){return(0,g.jsx)(w,{i:t,field:e,groundhoggConf:u,formFields:n,setGroundhoggConf:f,setSnackbar:_},"rp-m-"+(t+9))})),(0,g.jsx)("div",{className:"txt-center mt-2",style:{marginRight:85},children:(0,g.jsx)("button",{onClick:function(){return(0,d.FP)(u.field_map.length,u,f,!1)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,g.jsx)(c.Z,{checked:(null==u?void 0:u.showMeta)||!1,onChange:function(e){return function(e,t){var n,i=(0,a.Z)({},u);"showMeta"===t&&(null!=(n=e.target)&&n.checked?i.showMeta=!0:delete i.showMeta),f((0,a.Z)({},i))}(e,"showMeta")},className:"wdt-200 mt-4 mr-2",value:"showMeta",title:(0,r.__)("Add Meta field","bit-integrations")})]}),(0,g.jsx)("br",{}),"1"===u.mainAction&&u.showMeta&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,g.jsx)("div",{className:"txt-dp",children:(0,g.jsx)("b",{children:(0,r.__)("Form Fields","bit-integrations")})}),(0,g.jsx)("div",{className:"txt-dp",children:(0,g.jsx)("b",{children:(0,r.__)("Groundhogg Meta Fields","bit-integrations")})})]}),null==u?void 0:u.field_map_meta.map((function(e,t){return(0,g.jsx)(M,{i:t,field:e,groundhoggConf:u,formFields:n,setGroundhoggConf:f,setSnackbar:_},"rp-m-"+(t+9))}))]}),"1"===u.mainAction&&u.showMeta&&(0,g.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,g.jsx)("button",{onClick:function(){return x(u.field_map_meta.length,u,f,!1)},className:"icn-btn sh-sm",type:"button",children:"+"})}),"2"===u.mainAction&&(0,g.jsxs)("div",{className:"d-flx",children:[(0,g.jsx)("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:(0,r.__)("All Tags:","bit-integrations")}),(0,g.jsx)(l.Z,{options:v,className:"btcd-paper-drpdwn w-5",defaultValue:u.addTagToUser,onChange:function(e){return function(e){var t=(0,a.Z)({},u);t.addTagToUser=e||"",f((0,a.Z)({},t))}(e)},customValue:!0}),(0,g.jsx)("button",{onClick:function(){return(0,m.C8)(null,u,f,b,null)},className:"icn-btn sh-sm ml-2 mr-2 mt-1 tooltip",style:{"--tooltip-txt":"'"+(0,r.__)("Refresh Groundhogg Tags","bit-integrations")+"'",height:"35px"},type:"button",disabled:p,children:"↻"})]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"1"===u.mainAction&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)("b",{className:"wdt-100",children:(0,r.__)("Actions","bit-integrations")})}),(0,g.jsx)("div",{className:"btcd-hr mt-1"}),(0,g.jsx)(h,{groundhoggConf:u,setGroundhoggConf:f,formFields:n})]})]})}},69369:(e,t,n)=>{n.d(t,{FP:()=>d,Mm:()=>r,P_:()=>o,T5:()=>u,WK:()=>s,mG:()=>f,wX:()=>m});var a=n(72564),i=n(57852),l=n(2850),r=function(e,t,n,i,l,r,s){var o=[].concat(e);if(s)o[r]=(0,a.Z)({},e[r],i),o.push({editItegration:!0}),t([].concat(o)),l.push(n);else{var c=[].concat(o);c.push(i),c.push({newItegration:!0}),t(c),l.push(n)}},s=function(e){var t={},n=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");n&&n.forEach((function(e){var n=e.split("=");n[1]&&(t[n[0]]=n[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,n,l,r,s,o,d,u){if(l.dataCenter&&l.clientId&&l.clientSecret){d(!0);var m="https://accounts.zoho."+l.dataCenter+"/oauth/v2/auth?scope="+n+"&response_type=code&client_id="+l.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),g=setInterval((function(){if(f.closed){clearInterval(g);var n={},s=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(s=!0,n=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),n.code&&!n.error&&n&&s){var h=(0,a.Z)({},l);h.accountServer=n["accounts-server"],c(t,n,h,r,o,d,u)}else{var p=n.error?"Cause: "+n.error:"";u({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+p+". "+(0,i.__)("please try again","bitform")}),d(!1)}}}),500)}else s({dataCenter:l.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:l.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:l.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},c=function(e,t,n,r,s,o,c){var d=(0,a.Z)({},t);d.dataCenter=n.dataCenter,d.clientId=n.clientId,d.clientSecret=n.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,l.Z)(d,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,a.Z)({},n);t.tokenDetails=e.data,r(t),s(!0),c({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?c({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):c({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});o(!1)}))},d=function(e,t,n,i,l){var r=(0,a.Z)({},t);l?i?r.relatedlists[l-1].upload_field_map.splice(e,0,{}):r.relatedlists[l-1].field_map.splice(e,0,{}):i?r.upload_field_map.splice(e,0,{}):r.field_map.splice(e,0,{}),n((0,a.Z)({},r))},u=function(e,t,n,i,l){var r=(0,a.Z)({},t);l?i?r.relatedlists[l-1].upload_field_map.length>1&&r.relatedlists[l-1].upload_field_map.splice(e,1):r.relatedlists[l-1].field_map.length>1&&r.relatedlists[l-1].field_map.splice(e,1):i?r.upload_field_map.length>1&&r.upload_field_map.splice(e,1):r.field_map.length>1&&r.field_map.splice(e,1),n((0,a.Z)({},r))},m=function(e,t,n,i,l,r){var s=(0,a.Z)({},n);r?l?s.relatedlists[r-1].upload_field_map[t][e.target.name]=e.target.value:s.relatedlists[r-1].field_map[t][e.target.name]=e.target.value:l?s.upload_field_map[t][e.target.name]=e.target.value:s.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(r?s.relatedlists[r-1].field_map[t].customValue="":s.field_map[t].customValue=""),i((0,a.Z)({},s))},f=function(e,t,n,i,l){var r=(0,a.Z)({},n);l?r.relatedlists[l-1].field_map[t].customValue=e.target.value:r.field_map[t].customValue=e.target.value,i((0,a.Z)({},r))}},82780:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(57852),i=n(4637);function l(e){var t=e.step,n=e.saveConfig,l=e.edit,r=e.disabled;return l?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,a.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:n,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},75138:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(83786),i=n(4637);function l(e){var t=e.action,n=e.children;return(0,i.jsxs)("div",{className:"action-btn-wrapper",children:[(0,i.jsx)("div",{className:"action-btn",tabIndex:"0",role:"button",onClick:t,onKeyPress:t,children:(0,i.jsx)(a.Z,{})}),n]})}}}]);
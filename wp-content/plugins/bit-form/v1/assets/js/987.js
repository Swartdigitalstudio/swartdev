"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[987],{82183:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(51108),s=i(4637);function l(e){var t=e.step,i=e.saveConfig,l=e.edit,n=e.disabled;return l?(0,s.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,s.jsx)("button",{onClick:i,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n,children:(0,a.__)("Update","bitform")})}):(0,s.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,s.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,s.jsxs)("button",{onClick:i,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},43540:(e,t,i)=>{i.d(t,{D2:()=>c,FP:()=>l,LX:()=>o,Mm:()=>s,T5:()=>n,Ye:()=>u,mG:()=>r,wX:()=>d});var a=i(51163),s=function(e,t,i,s,l,n,d){var r=[].concat(e);if(d)r[n]=(0,a.Z)({},e[n],s),r.push({editItegration:!0}),t([].concat(r)),l.push(i);else{var c=[].concat(r);c.push(s),c.push({newItegration:!0}),t(c),l.push(i)}},l=function(e,t,i,s,l){var n=(0,a.Z)({},t);l?s?n.relatedlists[l-1].upload_field_map.splice(e,0,{}):n.relatedlists[l-1].field_map.splice(e,0,{}):s?n.upload_field_map.splice(e,0,{}):n.field_map.splice(e,0,{}),i((0,a.Z)({},n))},n=function(e,t,i,s,l){var n=(0,a.Z)({},t);l?s?n.relatedlists[l-1].upload_field_map.length>1&&n.relatedlists[l-1].upload_field_map.splice(e,1):n.relatedlists[l-1].field_map.length>1&&n.relatedlists[l-1].field_map.splice(e,1):s?n.upload_field_map.length>1&&n.upload_field_map.splice(e,1):n.field_map.length>1&&n.field_map.splice(e,1),i((0,a.Z)({},n))},d=function(e,t,i,s,l,n){var d=(0,a.Z)({},i);n?l?d.relatedlists[n-1].upload_field_map[t][e.target.name]=e.target.value:d.relatedlists[n-1].field_map[t][e.target.name]=e.target.value:l?d.upload_field_map[t][e.target.name]=e.target.value:d.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(n?d.relatedlists[n-1].field_map[t].customValue="":d.field_map[t].customValue=""),s((0,a.Z)({},d))},r=function(e,t,i,s,l){var n=(0,a.Z)({},i);l?n.relatedlists[l-1].field_map[t].customValue=e.target.value:n.field_map[t].customValue=e.target.value,s((0,a.Z)({},n))},c=function(e,t,i,s,l,n){var d=(0,a.Z)({},i);d.address_field[t][e.target.name]=e.target.value,s((0,a.Z)({},d))},o=function(e,t,i){var s=(0,a.Z)({},t);s.address_field||(s.address_field=[]),s.address_field.push({}),i((0,a.Z)({},s))},u=function(e,t,i){var s=(0,a.Z)({},t);s.address_field&&s.address_field.length>1&&s.address_field.splice(e,1),i((0,a.Z)({},s))}},65804:(e,t,i)=>{i.d(t,{Lx:()=>h,Pd:()=>_,Rx:()=>d,TF:()=>u,WK:()=>f,a7:()=>r,qC:()=>o});var a=i(51163),s=i(55873),l=i(32198),n=i(51108),d=function(e,t,i,s,l,n,d,r,o){var u=(0,a.Z)({},t);if(d){var m=(0,a.Z)({},r);m[e.target.name]="",o((0,a.Z)({},m))}if(u[e.target.name]=e.target.value,"listId"===e.target.name)u=c(u,s,i,l,n);i((0,a.Z)({},u))},r=function(e){return!((null!=e&&e.address_field?e.address_field.filter((function(e){return!e.formField&&e.mailChimpAddressField&&e.required})):[]).length>0)},c=function(e,t,i,a,s){var n,d,r=(0,l.p$)(e);return r.field_map=[{formField:"",mailChimpField:""}],null!=r&&null!=(n=r.default)&&null!=(d=n.fields)&&d[e.listId]||(u(t,r,i,a,s),m(t,r,i,a,s)),r},o=function(e,t,i,l,d){l(!0);var r={formID:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(r,"bitforms_mChimp_refresh_audience").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);s.default||(s.default={}),e.data.audiencelist&&(s.default.audiencelist=e.data.audiencelist),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),d({show:!0,msg:(0,n.__)("Audience list refreshed","bitform")}),i((0,a.Z)({},s))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:(0,n.g)((0,n.__)("Audience list refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):d({show:!0,msg:(0,n.__)("Audience list failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},u=function(e,t,i,l,d){l(!0);var r={formID:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,listId:t.listId};(0,s.Z)(r,"bitforms_mChimp_refresh_tags").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);e.data.audienceTags&&(s.default.audienceTags=e.data.audienceTags),d({show:!0,msg:(0,n.__)("Audience tags refreshed","bitform")}),i((0,a.Z)({},s))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:(0,n.g)((0,n.__)("Audience tags refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):d({show:!0,msg:(0,n.__)("Audience tags failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},m=function(e,t,i,l,d){var r=t.listId;if(r){l(!0);var c={formID:e,listId:r,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(c,"bitforms_mChimp_refresh_fields").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);e.data.audienceField&&(s.default.fields||(s.default.fields={}),s.default.fields[r]=e.data.audienceField),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),d({show:!0,msg:(0,n.__)("Fields refreshed","bitform")}),i((0,a.Z)({},s))}else d({show:!0,msg:(0,n.__)("Fields refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))}},f=function(e){var t={},i=window.location.href.replace(""+window.opener.location.href,"").split("&");i&&i.forEach((function(e){var i=e.split("=");i[1]&&(t[i[0]]=i[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},h=function(e,t,i,s,l,d,r,c){if(i.clientId&&i.clientSecret){r(!0);var o="https://login.mailchimp.com/oauth2/authorize?client_id="+i.clientId+"&redirect_uri="+encodeURIComponent(window.location.href)+"&response_type=code",u=window.open(o,e,"width=400,height=609,toolbar=off"),m=setInterval((function(){if(u.closed){clearInterval(m);var l={},o=!1,f=localStorage.getItem("__bitforms_"+e);if(f&&(o=!0,l=JSON.parse(f),localStorage.removeItem("__bitforms_"+e),l.code.search("#"))){var h=l.code.split("#")[0];l.code=h}if(l.code&&!l.error&&l&&o){var _=(0,a.Z)({},i);_.accountServer=l["accounts-server"],p(t,l,_,s,d,r,c)}else{var b=l.error?"Cause: "+l.error:"";c({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+b+". "+(0,n.__)("please try again","bitform")}),r(!1)}}}),500)}else l({clientId:i.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:i.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},p=function(e,t,i,l,d,r,c){var o=(0,a.Z)({},t);o.clientId=i.clientId,o.clientSecret=i.clientSecret,o.redirectURI=window.location.href,(0,s.Z)(o,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,a.Z)({},i);t.tokenDetails=e.data,l(t),d(!0),c({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?c({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):c({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});r(!1)}))},_=function(e){return!((e.field_map?e.field_map.filter((function(e){return!e.formField&&!e.mailChimpField})):[]).length>0)}},27702:(e,t,i)=>{i.d(t,{Z:()=>v});var a=i(51163),s=i(83428),l=i(51108),n=i(99996),d=i(43540),r=i(65037),c=i(4637);function o(e){var t=e.i,i=e.formFields,a=e.field,s=e.sheetConf,n=e.setSheetConf,o=e.addressField,u=a.required,m=o.filter((function(e){return!e.required}));return(0,c.jsxs)("div",{className:"flx flx-around mt-2 mr-1",children:[(0,c.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:function(e){return(0,d.D2)(e,t,s,n)},children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),i.map((function(e){return"file-up"!==e.type&&(0,c.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))]}),(0,c.jsxs)("select",{className:"btcd-paper-inp",name:"mailChimpAddressField",value:a.mailChimpAddressField||"",onChange:function(e){return(0,d.D2)(e,t,s,n,o)},disabled:u,children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),u?Object.values(o).map((function(e,t){return(0,c.jsx)("option",{value:e.tag,children:e.name},"add-"+2*t)})):Object.values(m).map((function(e,t){return(0,c.jsx)("option",{value:e.tag,children:e.name},"add-"+2*t)}))]}),!u&&(0,c.jsx)("button",{onClick:function(){return(0,d.Ye)(t,s,n)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,c.jsx)(r.Z,{})})]})}var u=i(24386);function m(e){var t,i,s,n=e.sheetConf,d=e.setSheetConf,r=(e.formFields,e.address),o=function(e,t){var i=(0,a.Z)({},n);"update"===t&&(e.target.checked?i.actions.update=!0:delete i.actions.update),"double_opt_in"===t&&(e.target.checked?i.actions.double_opt_in=!0:delete i.actions.double_opt_in),"address"===t&&(e.target.checked?(i.actions.address=!0,i.address_field=r.filter((function(e){return e.required})).map((function(e){return{formField:"",mailChimpAddressField:e.tag,required:!0}}))):(delete i.actions.address,i.address_field="")),d((0,a.Z)({},i))};return(0,c.jsxs)("div",{className:"pos-rel d-flx w-8",children:[(0,c.jsx)(u.Z,{checked:(null==(t=n.actions)?void 0:t.address)||!1,onChange:function(e){return o(e,"address")},className:"wdt-200 mt-4 mr-2",value:"address",title:(0,l.__)("Add Address Field","bitform"),subTitle:(0,l.__)("Add Address Field","bitform")}),(0,c.jsx)(u.Z,{checked:(null==(i=n.actions)?void 0:i.double_opt_in)||!1,onChange:function(e){return o(e,"double_opt_in")},className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:(0,l.__)("Double Opt-in","bitform"),subTitle:(0,l.__)("Add Double Opt-in","bitform")}),(0,c.jsx)(u.Z,{checked:(null==(s=n.actions)?void 0:s.update)||!1,onChange:function(e){return o(e,"update")},className:"wdt-200 mt-4 mr-2",value:"user_share",title:(0,l.__)("Update Mail Chimp","bitform"),subTitle:(0,l.__)("Update Responses with MailChimp exist Aduience?","bitform")})]})}var f=i(65804),h=i(48291),p=i(90794),_=i(43502),b=i(67587);function g(e){var t,i,a=e.i,s=e.formFields,n=e.field,o=e.sheetConf,u=e.setSheetConf,m=(0,h.sJ)(p.hi).isPro;return(0,c.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,c.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,c.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:function(e){return(0,d.wX)(e,a,o,u)},children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),(0,c.jsx)("optgroup",{label:"Form Fields",children:s.map((function(e){return"file-up"!==e.type&&(0,c.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,c.jsx)("option",{value:"custom",children:(0,l.__)("Custom...","bitform")}),(0,c.jsx)("optgroup",{label:"General Smart Codes "+(m?"":"(PRO)"),children:m&&(null==_.C?void 0:_.C.map((function(e){return(0,c.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===n.formField&&(0,c.jsx)(b.Z,{onChange:function(e){return(0,d.mG)(e,a,o,u)},label:(0,l.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:n.customValue,placeholder:(0,l.__)("Custom Value","bitform")}),(0,c.jsxs)("select",{className:"btcd-paper-inp",name:"mailChimpField",value:n.mailChimpField||"",onChange:function(e){return(0,d.wX)(e,a,o,u)},children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),(null==(t=o.default)||null==(i=t.fields)?void 0:i[o.listId])&&Object.values(o.default.fields[o.listId]).map((function(e,t){return(0,c.jsx)("option",{value:e.tag,children:e.name},"mchimp-"+2*t)}))]})]}),(0,c.jsx)("button",{onClick:function(){return(0,d.FP)(a,o,u)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,c.jsx)("button",{onClick:function(){return(0,d.T5)(a,o,u)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,c.jsx)(r.Z,{})})]})}function v(e){var t,i,r,u,h,p,_=e.formID,b=e.formFields,v=e.handleInput,x=e.sheetConf,j=e.setSheetConf,C=e.isLoading,F=e.setisLoading,y=e.setSnackbar,N=(e.a,[{tag:"addr1",name:"Address 1",required:!0},{tag:"addr2",name:"Address 2",required:!1},{tag:"city",name:"City",required:!0},{tag:"zip",name:"Zip",required:!0},{tag:"state",name:"State",required:!0},{tag:"country",name:"Country",required:!1}]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("b",{className:"wdt-150 d-in-b",children:(0,l.__)("Audience List:","bitform")}),(0,c.jsxs)("select",{onChange:v,name:"listId",value:x.listId,className:"btcd-paper-inp w-6",children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Audience List","bitform")}),(null==x||null==(t=x.default)?void 0:t.audiencelist)&&Object.keys(x.default.audiencelist).map((function(e){return(0,c.jsx)("option",{value:x.default.audiencelist[e].listId,children:x.default.audiencelist[e].listName},e)}))]}),(0,c.jsx)("button",{onClick:function(){return(0,f.qC)(_,x,j,F,y)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Audience list"'},type:"button",disabled:C,children:"↻"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"d-flx",children:[(0,c.jsx)("b",{style:{marginTop:"15px"},className:"wdt-150 d-in-b",children:(0,l.__)("Tags: ","bitform")}),(0,c.jsx)(s.Z,{defaultValue:null==x?void 0:x.tags,className:"btcd-paper-drpdwn w-6",options:(null==x||null==(i=x.default)?void 0:i.audienceTags)&&Object.keys(x.default.audienceTags).map((function(e){return{label:x.default.audienceTags[e].tagName,value:x.default.audienceTags[e].tagName}})),onChange:function(e){return function(e){var t=(0,a.Z)({},x);e?t.tags=e?e.split(","):[]:delete t.tags,j((0,a.Z)({},t))}(e)}}),(0,c.jsx)("button",{onClick:function(){return(0,f.TF)(_,x,j,F,y)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,l.__)("Refresh MailChimp Tags","bitform")+"'"},type:"button",disabled:C,children:"↻"})]}),C&&(0,c.jsx)(n.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(r=x.default)||null==(u=r.fields)?void 0:u[x.listId])&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,l.__)("Map Fields","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,l.__)("Form Fields","bitform")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,l.__)("Mail Chimp Fields","bitform")})})]}),x.field_map.map((function(e,t){return(0,c.jsx)(g,{i:t,field:e,sheetConf:x,formFields:b,setSheetConf:j},"sheet-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,c.jsx)("button",{onClick:function(){return(0,d.FP)(x.field_map.length,x,j)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(null==(h=x.actions)?void 0:h.address)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,l.__)("Address Field Map","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,l.__)("Form Address Fields","bitform")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,l.__)("Mail Chimp Address Fields","bitform")})})]}),null==x||null==(p=x.address_field)?void 0:p.map((function(e,t){return(0,c.jsx)(o,{i:t,field:e,sheetConf:x,formFields:b,setSheetConf:j,addressField:N},"sheet-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,c.jsx)("button",{onClick:function(){return(0,d.LX)(x.address_field.length,x,j)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),x.listId&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,l.__)("Actions","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsx)(m,{sheetConf:x,setSheetConf:j,formFields:b,address:N})]})]})}}}]);
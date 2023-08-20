"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[648],{52665:(e,t,a)=>{a.d(t,{FP:()=>c,Mm:()=>s,P_:()=>o,T5:()=>m,WK:()=>r,mG:()=>u,wX:()=>f});var i=a(72564),l=a(66399),n=a(12102),s=function(e,t,a,l,n,s,r){var o=[].concat(e);if(r)o[s]=(0,i.Z)({},e[s],l),o.push({editItegration:!0}),t([].concat(o)),n.push(a);else{var d=[].concat(o);d.push(l),d.push({newItegration:!0}),t(d),n.push(a)}},r=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,n,s,r,o,c,m){if(n.dataCenter&&n.clientId&&n.clientSecret){c(!0);var f="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),u=window.open(f,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(u.closed){clearInterval(p);var a={},r=!1,f=localStorage.getItem("__bitforms_"+e);if(f&&(r=!0,a=JSON.parse(f),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&r){var _=(0,i.Z)({},n);_.accountServer=a["accounts-server"],d(t,a,_,s,o,c,m)}else{var h=a.error?"Cause: "+a.error:"";m({show:!0,msg:(0,l.__)("Authorization failed","bitform")+" "+h+". "+(0,l.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:n.dataCenter?"":(0,l.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,l.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,l.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,s,r,o,d){var c=(0,i.Z)({},t);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,n.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,i.Z)({},a);t.tokenDetails=e.data,s(t),r(!0),d({show:!0,msg:(0,l.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,l.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):d({show:!0,msg:(0,l.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,a,l,n){var s=(0,i.Z)({},t);n?l?s.relatedlists[n-1].upload_field_map.splice(e,0,{}):s.relatedlists[n-1].field_map.splice(e,0,{}):l?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),a((0,i.Z)({},s))},m=function(e,t,a,l,n){var s=(0,i.Z)({},t);n?l?s.relatedlists[n-1].upload_field_map.length>1&&s.relatedlists[n-1].upload_field_map.splice(e,1):s.relatedlists[n-1].field_map.length>1&&s.relatedlists[n-1].field_map.splice(e,1):l?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),a((0,i.Z)({},s))},f=function(e,t,a,l,n,s){var r=(0,i.Z)({},a);s?n?r.relatedlists[s-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[s-1].field_map[t][e.target.name]=e.target.value:n?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s?r.relatedlists[s-1].field_map[t].customValue="":r.field_map[t].customValue=""),l((0,i.Z)({},r))},u=function(e,t,a,l,n){var s=(0,i.Z)({},a);n?s.relatedlists[n-1].field_map[t].customValue=e.target.value:s.field_map[t].customValue=e.target.value,l((0,i.Z)({},s))}},7020:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(66399),l=a(4637);function n(e){var t=e.step,a=e.saveConfig,n=e.edit,s=e.disabled;return n?(0,l.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,l.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:s,children:(0,i.__)("Update","bitform")})}):(0,l.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,l.jsx)("h2",{className:"ml-3",children:(0,i.__)("Successfully Integrated","bitform")}),(0,l.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,i.__)("Finish & Save ","bitform")," ✔"]})]})}},6651:(e,t,a)=>{a.d(t,{Pd:()=>c,Pg:()=>d,Rx:()=>s,aS:()=>o});var i=a(72564),l=a(66399),n=a(12102),s=function(e,t,a,l,n,s){var o=(0,i.Z)({},a);if(o[e.target.name]=e.target.value,"list"===e.target.name)o=r(o,t,l,n,s);l((0,i.Z)({},o))},r=function(e,t,a,l,n){var s,r,o=(0,i.Z)({},e);return o.field_map=[{formField:"",zohoFormField:"Contact Email"}],null!=o&&null!=(s=o.default)&&null!=(r=s.fields)&&r[o.list]||d(t,o,a,l,n),o},o=function(e,t,a,s,r){s(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(o,"bitforms_zcampaigns_refresh_lists").then((function(e){if(e&&e.success){var n=(0,i.Z)({},t);e.data.lists&&(n.default=(0,i.Z)({},n.default,{lists:e.data.lists})),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),r({show:!0,msg:(0,l.__)("Lists refreshed","bitform")}),a((0,i.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:""+(0,l.__)("Lists refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):r({show:!0,msg:(0,l.__)("Lists refresh failed. please try again","bitform")});s(!1)})).catch((function(){return s(!1)}))},d=function(e,t,a,s,r){var o=t.list;if(o){s(!0);var d={formID:e,list:o,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(d,"bitforms_zcampaigns_refresh_contact_fields").then((function(e){if(e&&e.success){var n=(0,i.Z)({},t);e.data.fields?(n.default.fields||(n.default.fields={}),n.default.fields[o]=e.data,e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),r({show:!0,msg:(0,l.__)("Contact Fields refreshed","bitform")})):r({show:!0,msg:(0,l.__)("Zoho didn't provide fields names for this list","bitform")}),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),a((0,i.Z)({},n))}else r({show:!0,msg:(0,l.__)("Contact Fields refresh failed. please try again","bitform")});s(!1)})).catch((function(){return s(!1)}))}},c=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(t){var a,i,l;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(a=e.default)||null==(i=a.fields)||null==(l=i[e.list])?void 0:l.required.indexOf(t.zohoFormField))})):[]).length>0)}},14703:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(66399),l=a(82166),n=a(6651),s=a(72564),r=a(48291),o=a(20859),d=a(53189),c=a(80027),m=a(84048),f=a(4637),u=function(e,t,a){var i=(0,s.Z)({},t);i.field_map.splice(e,0,{}),a(i)};function p(e){var t,a,l,n,p=e.i,_=e.formFields,h=e.field,b=e.campaignsConf,g=e.setCampaignsConf,v=""===h.zohoFormField||-1===(null==(t=b.default.fields[b.list].required)?void 0:t.indexOf(h.zohoFormField)),x=(0,r.sJ)(o.hi).isPro,C=function(e,t){var a=(0,s.Z)({},b);a.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a.field_map[t].customValue=""),g(a)};return(0,f.jsxs)("div",{className:"flx flx-around mt-2 "+(v&&"mr-1"),children:[(0,f.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:h.formField||"",onChange:function(e){return C(e,p)},children:[(0,f.jsx)("option",{value:"",children:(0,i.__)("Select Field","bitform")}),(0,f.jsx)("optgroup",{label:"Form Fields",children:_.map((function(e){return"file-up"!==e.type&&(0,f.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,f.jsx)("option",{value:"custom",children:(0,i.__)("Custom...","bitform")}),(0,f.jsx)("optgroup",{label:"General Smart Codes "+(x?"":"(PRO)"),children:x&&(null==c.C?void 0:c.C.map((function(e){return(0,f.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===h.formField&&(0,f.jsx)(m.Z,{onChange:function(e){return function(e,t){var a=(0,s.Z)({},b);a.field_map[t].customValue=e.target.value,g(a)}(e,p)},label:(0,i.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:h.customValue,placeholder:(0,i.__)("Custom Value","bitform")}),(0,f.jsxs)("select",{className:"btcd-paper-inp",name:"zohoFormField",value:h.zohoFormField||"",disabled:!v,onChange:function(e){return C(e,p)},children:[(0,f.jsx)("option",{value:"",children:(0,i.__)("Select Field","bitform")}),v?(null==b||null==(a=b.default)||null==(l=a.fields)||null==(n=l[b.list])?void 0:n.fields)&&b.default.fields[b.list].fields.map((function(e){return"Contact Email"!==e&&(0,f.jsx)("option",{value:e,children:e},e+"-1")})):(0,f.jsx)("option",{value:"Contact Email",children:(0,i.__)("Contact Email","bitform")},"contact_email")]}),(0,f.jsx)("button",{onClick:function(){return u(p,b,g)},className:"icn-btn sh-sm ml-2 "+(!v&&"mr-8"),type:"button",children:"+"}),v&&(0,f.jsx)("button",{onClick:function(){return function(e){var t=(0,s.Z)({},b);t.field_map.length>1&&t.field_map.splice(e,1),g(t)}(p)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,f.jsx)(d.Z,{})})]})}function _(e){var t,a,s,r=e.formID,o=e.formFields,d=e.handleInput,c=e.campaignsConf,m=e.setCampaignsConf,_=e.isLoading,h=e.setisLoading,b=e.setSnackbar;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("br",{}),(0,f.jsx)("b",{className:"wdt-100 d-in-b",children:(0,i.__)("List:","bitform")}),(0,f.jsxs)("select",{onChange:function(e){return d(e)},name:"list",value:c.list,className:"btcd-paper-inp w-7",children:[(0,f.jsx)("option",{value:"",children:(0,i.__)("Select List","bitform")}),(null==c||null==(t=c.default)?void 0:t.lists)&&Object.values(c.default.lists).map((function(e){return(0,f.jsx)("option",{value:e.listkey,children:e.listname},e.listkey)}))]}),(0,f.jsx)("button",{onClick:function(){return(0,n.aS)(r,c,m,h,b)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,i.__)("Refresh Campaigns Lists","bitform")+"'"},type:"button",disabled:_,children:"↻"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),_&&(0,f.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),c.list&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"mt-4",children:[(0,f.jsx)("b",{className:"wdt-100",children:(0,i.__)("Map Fields","bitform")}),(0,f.jsx)("button",{onClick:function(){return(0,n.Pg)(r,c,m,h,b)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,i.__)("Refresh Campaigns Contact Fields","bitform")+"'"},type:"button",disabled:_,children:"↻"})]}),(0,f.jsx)("div",{className:"btcd-hr mt-1"}),(null==(a=c.default)||null==(s=a.fields)?void 0:s[c.list])&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,f.jsx)("div",{className:"txt-dp",children:(0,f.jsx)("b",{children:(0,i.__)("Form Fields","bitform")})}),(0,f.jsx)("div",{className:"txt-dp",children:(0,f.jsx)("b",{children:(0,i.__)("Zoho Fields","bitform")})})]}),c.field_map.map((function(e,t){return(0,f.jsx)(p,{i:t,field:e,campaignsConf:c,formFields:o,setCampaignsConf:m},"campaigns-m-"+(t+9))})),(0,f.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,f.jsx)("button",{onClick:function(){return u(c.field_map.length,c,m)},className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}}}]);
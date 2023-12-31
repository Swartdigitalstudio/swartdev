"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[4042],{34629:(e,t,a)=>{a.d(t,{P_:()=>d,Rx:()=>o,hQ:()=>l});var r=a(72564),i=a(19697),n=a(44947),s=a(99484),o=function(e,t,a,i,n,s,o,l){var d=(0,r.Z)({},t),c=e.target.name;""!==e.target.value?d[c]=e.target.value:delete d[c],a((0,r.Z)({},d))},l=function(e,t,a){var o;void 0===e&&(e=null);var l={formID:e,id:null!=(o=t.id)?o:null,apiKey:t.apiKey,apiSecret:t.apiSecret,tokenDetails:t.tokenDetails},d=(0,n.Z)(l,"bitforms_dropbox_get_all_folders").then((function(e){if(e&&e.success){var i=(0,r.Z)({},t);return e.data.dropboxFoldersList&&(i.foldersList=e.data.dropboxFoldersList,i.tokenDetails=e.data.tokenDetails),a(i),"Dropbox Folders List refreshed successfully"}return"Dropbox Folders List refresh failed. please try again"}));i.ZP.promise(d,{success:function(e){return e},error:(0,s.__)("Error Occurred","bitform"),loading:(0,s.__)("Loading Dropbox Folders List...","bitform")})},d=function(e,t,a,o){if(e.accessCode&&e.apiKey&&e.apiSecret){o(!0);var l={apiKey:e.apiKey,apiSecret:e.apiSecret,accessCode:e.accessCode};(0,n.Z)(l,"bitforms_dropbox_authorization").then((function(n){if(n&&n.success){var l=(0,r.Z)({},e);l.tokenDetails=n.data,t(l),a(!0),i.ZP.success((0,s.__)("Authorized Successfully","bitform"))}else n&&n.data&&n.data.data||!n.success&&"string"===typeof n.data?i.ZP.error(""+(0,s.__)("Authorization failed Cause: ","bitform")+(n.data.data||n.data)+". "+(0,s.__)("please try again","bitform")):i.ZP.error((0,s.__)("Authorization failed. please try again","bitform"));o(!1)}))}else i.ZP.error((0,s.__)("Dropbox ApiKey, ApiSecret & Access Code can't be empty","bitform"))}},67159:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(99484),i=a(72564),n=a(3454),s=a(4637);function o(e){var t,a=e.dropboxConf,o=e.setDropboxConf;return(0,s.jsx)("div",{className:"pos-rel d-flx w-8",children:(0,s.jsx)(n.Z,{checked:(null==(t=a.actions)?void 0:t.delete_from_wp)||!1,onChange:function(e){return function(e,t){var r=(0,i.Z)({},a);"deleteFile"===t&&(e.target.checked?r.actions.delete_from_wp=!0:delete r.actions.delete_from_wp),o((0,i.Z)({},r))}(e,"deleteFile")},className:"mt-4 mr-2",value:"delete_from_wp",title:(0,r.__)("Delete File From Wordpress","bitform"),subTitle:(0,r.__)("Delete file from Wordpress after upload in Dropbox","bitform")})})}var l=a(34629),d=a(7257),c=function(e,t,a){var r=(0,i.Z)({},t);r.field_map.splice(e,0,{}),a((0,i.Z)({},r))},f=function(e,t,a){var r=(0,i.Z)({},t);r.field_map.length>1&&r.field_map.splice(e,1),a((0,i.Z)({},r))};function m(e){var t=e.i,a=e.formFields,n=e.field,o=e.dropboxConf,l=e.setDropboxConf,m=function(e,t){var a=(0,i.Z)({},o);a.field_map[t][e.target.name]=e.target.value,l((0,i.Z)({},a))};return(0,s.jsx)("div",{className:"flx mt-2 mr-1",children:(0,s.jsxs)("div",{className:"pos-rel flx",children:[(0,s.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,s.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:function(e){return m(e,t)},children:[(0,s.jsx)("option",{value:"",children:(0,r.__)("Select Field","bitform")}),null==a?void 0:a.filter((function(e){return"file-up"===e.type})).map((function(e){return(0,s.jsx)("option",{value:e.key,children:e.name},"ff-rm-"+e.key)}))]}),(0,s.jsxs)("select",{className:"btcd-paper-inp",name:"dropboxFormField",value:n.dropboxFormField,onChange:function(e){return m(e,t)},children:[(0,s.jsx)("option",{value:"",children:(0,r.__)("Select Folder","bitform")}),(0,d.L1)(o.foldersList,"lower_path","ASC").map((function(e){e.name;var t=e.lower_path;return(0,s.jsx)("option",{value:t,children:t.substring(1).split("/").map((function(e){return e.replace("/",">")})).join(" > ")},t)}))]})]}),(0,s.jsx)("button",{onClick:function(){return c(t,o,l)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,s.jsx)("button",{onClick:function(){return f(t,o,l)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,s.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})})}function p(e){var t=e.formID,a=e.formFields,i=e.dropboxConf,n=e.setDropboxConf;e.isLoading,e.setIsLoading;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)("b",{className:"wdt-100",children:(0,r.__)("Field Map","bitform")}),(0,s.jsx)("button",{onClick:function(){return(0,l.hQ)(t,i,n)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,r.__)("Fetch All Dropbox Folders","bitform")+"'"},type:"button",children:"↻"})]}),(0,s.jsx)("div",{className:"btcd-hr mt-1"}),(0,s.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,s.jsx)("div",{className:"txt-dp",children:(0,s.jsx)("b",{children:(0,r.__)("File Input","bitform")})}),(0,s.jsx)("div",{className:"txt-dp",children:(0,s.jsx)("b",{children:(0,r.__)("Dropbox Folder","bitform")})})]}),null==i?void 0:i.field_map.map((function(e,t){return(0,s.jsx)(m,{i:t,field:e,formFields:a,dropboxConf:i,setDropboxConf:n},"rp-m-"+(t+9))})),(0,s.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,s.jsx)("button",{onClick:function(){return c(i.field_map.length,i,n,!1)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("b",{className:"wdt-100",children:(0,r.__)("Actions","bitform")})}),(0,s.jsx)("div",{className:"btcd-hr mt-1"}),(0,s.jsx)(o,{dropboxConf:i,setDropboxConf:n})]})}},24042:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(72564),i=a(59496),n=a(83442),s=a(99484),o=a(24364),l=a(84584),d=a(19470),c=a(34629),f=a(67159),m=a(4637);const p=function(e){var t=e.allIntegURL,a=e.formFields,p=e.integrations,u=e.setIntegration,_=(0,n.k6)(),b=(0,n.UO)(),h=b.id,x=b.formID,v=(0,i.useState)((0,r.Z)({},p[h])),g=v[0],j=v[1],C=(0,i.useState)(!1),y=C[0],Z=C[1],w=(0,i.useState)({show:!1}),N=w[0],F=w[1];return(0,m.jsxs)("div",{style:{width:900},children:[(0,m.jsx)(o.Z,{snack:N,setSnackbar:F}),(0,m.jsxs)("div",{className:"flx mt-3",children:[(0,m.jsx)("b",{className:"wdt-200 d-in-b",children:(0,s.__)("Integration Name:","bitform")}),(0,m.jsx)("input",{className:"btcd-paper-inp w-5",onChange:function(e){return(0,c.Rx)(e,g,j)},name:"name",value:g.name,type:"text",placeholder:(0,s.__)("Integration Name...","bitform")})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(f.Z,{formID:x,formFields:a,dropboxConf:g,setDropboxConf:j,isLoading:y,setIsLoading:Z}),(0,m.jsx)(d.Z,{edit:!0,saveConfig:function(){(0,l.Mm)(p,u,t,g,_,h,1)},disabled:g.field_map.length<1,isLoading:y}),(0,m.jsx)("br",{})]})}},84584:(e,t,a)=>{a.d(t,{FP:()=>c,Mm:()=>s,P_:()=>l,T5:()=>f,WK:()=>o,mG:()=>p,wX:()=>m});var r=a(72564),i=a(99484),n=a(44947),s=function(e,t,a,i,n,s,o){var l=[].concat(e);if(o)l[s]=(0,r.Z)({},e[s],i),l.push({editItegration:!0}),t([].concat(l)),n.push(a);else{var d=[].concat(l);d.push(i),d.push({newItegration:!0}),t(d),n.push(a)}},o=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},l=function(e,t,a,n,s,o,l,c,f){if(n.dataCenter&&n.clientId&&n.clientSecret){c(!0);var m="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),p=window.open(m,e,"width=400,height=609,toolbar=off"),u=setInterval((function(){if(p.closed){clearInterval(u);var a={},o=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(o=!0,a=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&o){var _=(0,r.Z)({},n);_.accountServer=a["accounts-server"],d(t,a,_,s,l,c,f)}else{var b=a.error?"Cause: "+a.error:"";f({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+b+". "+(0,i.__)("please try again","bitform")}),c(!1)}}}),500)}else o({dataCenter:n.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},d=function(e,t,a,s,o,l,d){var c=(0,r.Z)({},t);c.dataCenter=a.dataCenter,c.clientId=a.clientId,c.clientSecret=a.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,n.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,r.Z)({},a);t.tokenDetails=e.data,s(t),o(!0),d({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):d({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});l(!1)}))},c=function(e,t,a,i,n){var s=(0,r.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.splice(e,0,{}):s.relatedlists[n-1].field_map.splice(e,0,{}):i?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),a((0,r.Z)({},s))},f=function(e,t,a,i,n){var s=(0,r.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.length>1&&s.relatedlists[n-1].upload_field_map.splice(e,1):s.relatedlists[n-1].field_map.length>1&&s.relatedlists[n-1].field_map.splice(e,1):i?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),a((0,r.Z)({},s))},m=function(e,t,a,i,n,s){var o=(0,r.Z)({},a);s?n?o.relatedlists[s-1].upload_field_map[t][e.target.name]=e.target.value:o.relatedlists[s-1].field_map[t][e.target.name]=e.target.value:n?o.upload_field_map[t][e.target.name]=e.target.value:o.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s?o.relatedlists[s-1].field_map[t].customValue="":o.field_map[t].customValue=""),i((0,r.Z)({},o))},p=function(e,t,a,i,n){var s=(0,r.Z)({},a);n?s.relatedlists[n-1].field_map[t].customValue=e.target.value:s.field_map[t].customValue=e.target.value,i((0,r.Z)({},s))}},19470:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(99484),i=a(4637);function n(e){var t=e.step,a=e.saveConfig,n=e.edit,s=e.disabled;return n?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:s,children:(0,r.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,r.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,r.__)("Finish & Save ","bitform")," ✔"]})]})}}}]);
"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[1460,26],{84584:(e,t,a)=>{a.d(t,{FP:()=>d,Mm:()=>l,P_:()=>c,T5:()=>m,WK:()=>i,mG:()=>f,wX:()=>u});var s=a(72564),n=a(99484),r=a(44947),l=function(e,t,a,n,r,l,i){var c=[].concat(e);if(i)c[l]=(0,s.Z)({},e[l],n),c.push({editItegration:!0}),t([].concat(c)),r.push(a);else{var o=[].concat(c);o.push(n),o.push({newItegration:!0}),t(o),r.push(a)}},i=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},c=function(e,t,a,r,l,i,c,d,m){if(r.dataCenter&&r.clientId&&r.clientSecret){d(!0);var u="https://accounts.zoho."+r.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+r.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(u,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var a={},i=!1,u=localStorage.getItem("__bitforms_"+e);if(u&&(i=!0,a=JSON.parse(u),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&i){var h=(0,s.Z)({},r);h.accountServer=a["accounts-server"],o(t,a,h,l,c,d,m)}else{var _=a.error?"Cause: "+a.error:"";m({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+_+". "+(0,n.__)("please try again","bitform")}),d(!1)}}}),500)}else i({dataCenter:r.dataCenter?"":(0,n.__)("Data center cann't be empty","bitform"),clientId:r.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:r.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},o=function(e,t,a,l,i,c,o){var d=(0,s.Z)({},t);d.dataCenter=a.dataCenter,d.clientId=a.clientId,d.clientSecret=a.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,r.Z)(d,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,s.Z)({},a);t.tokenDetails=e.data,l(t),i(!0),o({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):o({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});c(!1)}))},d=function(e,t,a,n,r){var l=(0,s.Z)({},t);r?n?l.relatedlists[r-1].upload_field_map.splice(e,0,{}):l.relatedlists[r-1].field_map.splice(e,0,{}):n?l.upload_field_map.splice(e,0,{}):l.field_map.splice(e,0,{}),a((0,s.Z)({},l))},m=function(e,t,a,n,r){var l=(0,s.Z)({},t);r?n?l.relatedlists[r-1].upload_field_map.length>1&&l.relatedlists[r-1].upload_field_map.splice(e,1):l.relatedlists[r-1].field_map.length>1&&l.relatedlists[r-1].field_map.splice(e,1):n?l.upload_field_map.length>1&&l.upload_field_map.splice(e,1):l.field_map.length>1&&l.field_map.splice(e,1),a((0,s.Z)({},l))},u=function(e,t,a,n,r,l){var i=(0,s.Z)({},a);l?r?i.relatedlists[l-1].upload_field_map[t][e.target.name]=e.target.value:i.relatedlists[l-1].field_map[t][e.target.name]=e.target.value:r?i.upload_field_map[t][e.target.name]=e.target.value:i.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(l?i.relatedlists[l-1].field_map[t].customValue="":i.field_map[t].customValue=""),n((0,s.Z)({},i))},f=function(e,t,a,n,r){var l=(0,s.Z)({},a);r?l.relatedlists[r-1].field_map[t].customValue=e.target.value:l.field_map[t].customValue=e.target.value,n((0,s.Z)({},l))}},70026:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(72564),n=a(59496),r=a(52080),l=a(53455),i=a(69637),c=a(83997),o=a(44947),d=a(99484),m=a(85446),u=a(94796),f=a(4637);function p(e){e.formID;var t,a=e.formFields,p=e.webHooks,h=e.setWebHooks,_=(e.step,e.setstep),b=e.setSnackbar,v=e.create,g=e.isInfo,x=function(e){return null==e?void 0:e.match(/(\?|&)([^=]+)=([^&]+|)/gi)},j=(0,n.useState)(!1),N=j[0],w=j[1],k=(0,n.useRef)(null),y=function(e){w(!0),(0,o.Z)({hookDetails:e},"bitforms_test_webhook").then((function(e){if(e&&e.success)k.current.innerHTML="<pre>"+function(e){try{return JSON.stringify(e,null,2)}catch(t){return e}}(e.data.response)+"</pre>",b({show:!0,msg:(0,d.__)(e.data.msg)}),w(!1);else if(e&&e.data){var t="string"===typeof e.data?e.data:"Unknown error";b({show:!0,msg:t+". "+(0,d.__)("please try again","bitform")}),w(!1)}else b({show:!0,msg:(0,d.__)("Webhook tests failed. please try again","bitform")}),w(!1)}))},C=function(e,t,a){var n=(0,s.Z)({},p);""!==t?n.url="key"===e?n.url.replace(a,""+a.charAt(0)+t+"="+a.split("=")[1]):n.url.replace(a,a.split("=")[0]+"="+t):null===a.match(/\?/g)?n.url=n.url.replace(a,""):n.url=n.url.replace(a+"&","?"),h(n)},Z=function(e){var t=(0,s.Z)({},p);t[e.target.name]=e.target.value,h((0,s.Z)({},t))};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{style:(0,s.Z)({},{width:g&&900}),children:[(0,f.jsx)("div",{className:"flx ",children:(0,f.jsxs)("div",{className:"w-7 mr-2 mb-4",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Integration name","bitform")}),(0,f.jsx)("input",{name:"name",onChange:function(e){return Z(e)},className:"btcd-paper-inp mt-1",type:"text",value:p.name,disabled:g})]})}),(0,f.jsxs)("div",{className:"flx",children:[(0,f.jsxs)("div",{className:"w-7 mr-2",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Link:","bitform")}),(0,f.jsx)("input",{name:"url",onChange:function(e){return Z(e)},className:"btcd-paper-inp mt-1",type:"text",value:p.url,disabled:g}),(null==p?void 0:p.apiConsole)&&(0,f.jsxs)("small",{className:"d-blk mt-2",children:[(0,d.__)("To got Webhook , Please Visit","bitform")," ",(0,f.jsx)("a",{className:"btcd-link",href:p.apiConsole,target:"_blank",rel:"noreferrer",children:(0,d.__)(p.type+" Dashboard","bitform")})]})]}),(0,f.jsxs)("div",{className:"w-3",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Method:","bitform")}),(0,f.jsx)("select",{name:"method",onChange:function(e){return Z(e)},defaultValue:p.method,className:"btcd-paper-inp mt-1",disabled:g,children:["GET","POST","PUT","PATCH","OPTION","DELETE","TRACE","CONNECT"].map((function(e,t){return(0,f.jsx)("option",{value:e,children:e},"method-"+2*t)}))})]})]}),!g&&(0,f.jsxs)(u.Z,{onClick:function(){return y(p)},className:"btn btcd-btn-o-blue",disabled:N,children:[(0,d.__)("Test Webhook","bitform"),N&&(0,f.jsx)(m.Z,{size:14,clr:"#022217",className:"ml-2"})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"wh-resp-box",children:[(0,f.jsx)("div",{className:"f-m wh-resp-box-title",children:(0,d.__)("Response:","bitform")}),(0,f.jsx)("div",{className:"wh-resp-box-content",ref:k,children:"Test Webhook to see the response."})]}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Add Url Parameter: (optional)","bitform")}),(0,f.jsx)("div",{className:"btcd-param-t-wrp mt-1",children:(0,f.jsxs)("div",{className:"btcd-param-t",children:[(0,f.jsxs)("div",{className:"tr",children:[(0,f.jsx)("div",{className:"td",children:(0,d.__)("Key","bitform")}),(0,f.jsx)("div",{className:"td",children:(0,d.__)("Value","bitform")})]}),null!==x(p.url)&&(null==(t=x(p.url))?void 0:t.map((function(e,t){return(0,f.jsxs)("div",{className:"tr",children:[(0,f.jsx)("div",{className:"td",children:(0,f.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(t){return C("key",t.target.value,e)},type:"text",value:e.split("=")[0].substr(1),disabled:g})}),(0,f.jsx)("div",{className:"td",children:(0,f.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(t){return C("val",t.target.value,e)},type:"text",value:e.split("=")[1],disabled:g})}),!g&&(0,f.jsxs)("div",{className:"flx p-atn",children:[(0,f.jsx)(u.Z,{onClick:function(){return function(e){var t=(0,s.Z)({},p);t.url=t.url.replace(e,""),h(t)}(e)},icn:!0,children:(0,f.jsx)(c.Z,{size:16})}),(0,f.jsx)(r.Z,{options:a.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:function(t){return function(e,t){var a=(0,s.Z)({},p),n=t.split("=");n[1]=e,a.url=a.url.replace(t,n.join("=")),h(a)}(t,e)},defaultValue:e.split("=")[1]})]})]},"fu-1"+3*t)}))),!g&&(0,f.jsx)(u.Z,{onClick:function(){return function(){var e=(0,s.Z)({},p);null!==e.url.match(/\?/g)?e.url+="&key=value":e.url+="?key=value",h(e)}()},className:"add-pram",icn:!0,children:(0,f.jsx)(i.Z,{size:"14",className:"icn-rotate-45"})})]})}),v&&(0,f.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void _(2)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",children:[(0,d.__)("Next","bitform"),(0,f.jsx)(l.Z,{className:"ml-1 rev-icn"})]})]})})}},41264:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(99484),n=a(4637);function r(e){e.step;var t=e.saveConfig,a=e.edit,r=e.disabled;return a?(0,n.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,n.jsx)("button",{onClick:t,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,s.__)("Save","bitform")})}):(0,n.jsxs)("div",{className:"txt-center",style:{marginLeft:210},children:[(0,n.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,n.jsxs)("button",{onClick:t,className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform"),"✔"]})]})}},92110:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(72564),n=a(59496),r=a(83442),l=a(24364),i=a(84584),c=a(70026),o=a(41264),d=a(4637);const m=function(e){var t=e.formFields,a=e.setIntegration,m=e.integrations,u=e.allIntegURL,f=(0,r.k6)(),p=(0,r.UO)(),h=p.id,_=p.formID,b=(0,n.useState)((0,s.Z)({},m[h])),v=b[0],g=b[1],x=(0,n.useState)({show:!1}),j=x[0],N=x[1];return(0,d.jsxs)("div",{style:{width:900},children:[(0,d.jsx)(l.Z,{snack:j,setSnackbar:N}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)(c.default,{formID:_,formFields:t,webHooks:v,setWebHooks:g,setSnackbar:N})}),(0,d.jsx)(o.Z,{edit:!0,saveConfig:function(){return(0,i.Mm)(m,a,u,v,f,h,1)}}),(0,d.jsx)("br",{})]})}}}]);
"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[8190],{66801:(e,t,a)=>{a.d(t,{FP:()=>d,Mm:()=>o,P_:()=>i,T5:()=>u,WK:()=>l,mG:()=>m,wX:()=>h});var s=a(51163),r=a(51108),n=a(55873),o=function(e,t,a,r,n,o,l){var i=[].concat(e);if(l)i[o]=(0,s.Z)({},e[o],r),i.push({editItegration:!0}),t([].concat(i)),n.push(a);else{var c=[].concat(i);c.push(r),c.push({newItegration:!0}),t(c),n.push(a)}},l=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},i=function(e,t,a,n,o,l,i,d,u){if(n.dataCenter&&n.clientId&&n.clientSecret){d(!0);var h="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),m=window.open(h,e,"width=400,height=609,toolbar=off"),f=setInterval((function(){if(m.closed){clearInterval(f);var a={},l=!1,h=localStorage.getItem("__bitforms_"+e);if(h&&(l=!0,a=JSON.parse(h),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&l){var b=(0,s.Z)({},n);b.accountServer=a["accounts-server"],c(t,a,b,o,i,d,u)}else{var p=a.error?"Cause: "+a.error:"";u({show:!0,msg:(0,r.__)("Authorization failed","bitform")+" "+p+". "+(0,r.__)("please try again","bitform")}),d(!1)}}}),500)}else l({dataCenter:n.dataCenter?"":(0,r.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,r.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,r.__)("Secret key cann't be empty","bitform")})},c=function(e,t,a,o,l,i,c){var d=(0,s.Z)({},t);d.dataCenter=a.dataCenter,d.clientId=a.clientId,d.clientSecret=a.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,n.Z)(d,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,s.Z)({},a);t.tokenDetails=e.data,o(t),l(!0),c({show:!0,msg:(0,r.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?c({show:!0,msg:""+(0,r.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,r.__)("please try again","bitform")}):c({show:!0,msg:(0,r.__)("Authorization failed. please try again","bitform")});i(!1)}))},d=function(e,t,a,r,n){var o=(0,s.Z)({},t);n?r?o.relatedlists[n-1].upload_field_map.splice(e,0,{}):o.relatedlists[n-1].field_map.splice(e,0,{}):r?o.upload_field_map.splice(e,0,{}):o.field_map.splice(e,0,{}),a((0,s.Z)({},o))},u=function(e,t,a,r,n){var o=(0,s.Z)({},t);n?r?o.relatedlists[n-1].upload_field_map.length>1&&o.relatedlists[n-1].upload_field_map.splice(e,1):o.relatedlists[n-1].field_map.length>1&&o.relatedlists[n-1].field_map.splice(e,1):r?o.upload_field_map.length>1&&o.upload_field_map.splice(e,1):o.field_map.length>1&&o.field_map.splice(e,1),a((0,s.Z)({},o))},h=function(e,t,a,r,n,o){var l=(0,s.Z)({},a);o?n?l.relatedlists[o-1].upload_field_map[t][e.target.name]=e.target.value:l.relatedlists[o-1].field_map[t][e.target.name]=e.target.value:n?l.upload_field_map[t][e.target.name]=e.target.value:l.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(o?l.relatedlists[o-1].field_map[t].customValue="":l.field_map[t].customValue=""),r((0,s.Z)({},l))},m=function(e,t,a,r,n){var o=(0,s.Z)({},a);n?o.relatedlists[n-1].field_map[t].customValue=e.target.value:o.field_map[t].customValue=e.target.value,r((0,s.Z)({},o))}},82183:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(51108),r=a(4637);function n(e){var t=e.step,a=e.saveConfig,n=e.edit,o=e.disabled;return n?(0,r.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,r.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o,children:(0,s.__)("Update","bitform")})}):(0,r.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,r.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,r.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},44855:(e,t,a)=>{a.d(t,{Co:()=>d,Rx:()=>o,h4:()=>c,kS:()=>u});var s=a(51163),r=a(51108),n=a(55873),o=function(e,t,a,r,n,o,c,d,u){var h=(0,s.Z)({},t);if(c){var m=(0,s.Z)({},d);m[e.target.name]="",u((0,s.Z)({},m))}switch(h[e.target.name]=e.target.value,e.target.name){case"workbook":h=l(h,r,a,n,o);break;case"worksheet":h=i(h,r,a,n,o)}a((0,s.Z)({},h))},l=function(e,t,a,r,n){var o,l,i,c,h=(0,s.Z)({},e);if(h.worksheet="",h.field_map=[{formField:"",zohoFormField:""}],null!=h&&null!=(o=h.default)&&null!=(l=o.worksheets)&&l[e.workbook]){if(1===Object.keys(null==h||null==(i=h.default)||null==(c=i.worksheets)?void 0:c[e.workbook]).length){var m,f,b,p,k;h.worksheet=null==h||null==(m=h.default)||null==(f=m.worksheets)?void 0:f[e.workbook][0].viewName,null!=h&&null!=(b=h.default)&&null!=(p=b.worksheets)&&null!=(k=p.headers)&&k[h.worksheet]||u(t,h,a,r,n)}}else d(t,h,a,r,n);return h},i=function(e,t,a,r,n){var o,l,i,c=(0,s.Z)({},e);return c.field_map=[{formField:"",zohoFormField:""}],null!=c&&null!=(o=c.default)&&null!=(l=o.worksheets)&&null!=(i=l.headers)&&i[e.worksheet]||u(t,c,a,r,n),c},c=function(e,t,a,o,l){o(!0);var i={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(i,"bitforms_zsheet_refresh_workbooks").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);n.default||(n.default={}),e.data.workbooks&&(n.default.workbooks=e.data.workbooks),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,r.__)("Workbooks refreshed","bitform")}),a((0,s.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?l({show:!0,msg:(0,r.g)((0,r.__)("Workbooks refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):l({show:!0,msg:(0,r.__)("Workbooks refresh failed. please try again","bitform")});o(!1)})).catch((function(){return o(!1)}))},d=function(e,t,a,o,l){var i=t.workbook;if(i){o(!0);var c={formID:e,workbook:i,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(c,"bitforms_zsheet_refresh_worksheets").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);e.data.worksheets&&(n.default.worksheets||(n.default.worksheets={}),n.default.worksheets[i]=e.data.worksheets),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,r.__)("Worksheets refreshed","bitform")}),a((0,s.Z)({},n))}else l({show:!0,msg:(0,r.__)("Worksheets refresh failed. please try again","bitform")});o(!1)})).catch((function(){return o(!1)}))}},u=function(e,t,a,o,l){var i=t.workbook,c=t.worksheet,d=t.headerRow;if(c){o(!0);var u={formID:e,workbook:i,worksheet:c,headerRow:d,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(u,"bitforms_zsheet_refresh_worksheet_headers").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);e.data.worksheet_headers.length>0?(n.default.worksheets.headers||(n.default.worksheets.headers={}),n.default.worksheets.headers[c]||(n.default.worksheets.headers[c]={}),n.default.worksheets.headers[c][d]=e.data.worksheet_headers,e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,r.__)("Worksheet Headers refreshed","bitform")})):l({show:!0,msg:(0,r.__)("No Worksheet headers found. Try changing the header row number or try again","bitform")}),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),a((0,s.Z)({},n))}else l({show:!0,msg:(0,r.__)("Worksheet Headers refresh failed. please try again","bitform")});o(!1)})).catch((function(){return o(!1)}))}}},11406:(e,t,a)=>{a.d(t,{Z:()=>j});var s=a(51108),r=a(99996),n=a(66801),o=a(51163),l=a(59496),i=a(83428),c=a(17145),d=a(24386),u=a(46965),h=a(81444),m=a(4637);function f(e){var t,a,r,n,f,b,p,k,_,w,v,x,j,g,C,Z=e.sheetConf,N=e.setSheetConf,y=e.formFields,S=(0,l.useState)(!1),F=S[0],I=S[1],R=(0,l.useState)({show:!1}),D=R[0],W=R[1],z=function(e,t){var a=(0,o.Z)({},Z);a.actions.update[t]=e,N((0,o.Z)({},a))},M=function(){var e=[{title:"Form Fields",type:"group",childs:[]}];return e[0].childs=y.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),e};return(0,l.useEffect)((function(){var e,t;if(!F&&(null==(e=Z.actions)||null==(t=e.update)||!t.criteria)){var a=(0,o.Z)({},Z);delete a.actions.update,N((0,o.Z)({},a))}}),[F]),(0,m.jsxs)("div",{className:"pos-rel",children:[(0,m.jsxs)("div",{className:"d-flx flx-wrp",children:[(null==(t=Z.default)||null==(a=t.worksheets)||null==(r=a.headers)||null==(n=r[Z.worksheet])?void 0:n[Z.headerRow])&&(0,m.jsx)(h.Z,{action:function(){var e;if(null==(e=Z.actions)||!e.update){var t=(0,o.Z)({},Z);t.actions.update={insert:!0,criteria:"",firstMatch:!1},N((0,o.Z)({},t))}I(!0)},children:(0,m.jsx)(d.Z,{onChange:function(e){return function(e,t){var a,s=(0,o.Z)({},Z);"update"===t&&(!e.target.checked||null!=s&&null!=(a=s.actions)&&a.update?delete s.actions.update:(s.actions.update={insert:!0,criteria:"",firstMatch:!1},I(!0))),N((0,o.Z)({},s))}(e,"update")},checked:"update"in(null==Z?void 0:Z.actions),className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:(0,s.__)("Update Row","bitform"),subTitle:(0,s.__)("Control how the row gets updated.","bitform")})}),(0,m.jsx)(d.Z,{onChange:function(){var e=(0,o.Z)({},Z);e.actions.share||(e.actions.share=[{email:"",field:"",access:"view",accessLabel:"Read Only"},{email:"",field:"",access:"view_and_comment",accessLabel:"Read/Comment"},{email:"",field:"",access:"edit",accessLabel:"Read/Edit"},{email:"",field:"",access:"share",accessLabel:"Co-Owner"},{email:"",field:"",access:"remove_share",accessLabel:"Remove Share"}]),N((0,o.Z)({},e)),W({show:"share"})},checked:(null==Z||null==(f=Z.actions)||null==(b=f.share)?void 0:b.find((function(e){return e.email})))||!1,className:"wdt-200 mt-4 mr-2",value:"user_share",title:(0,s.__)("Share Workbook","bitform"),subTitle:(0,s.__)("Share workbook with users pushed to Zoho Sheet.","bitform")})]}),(0,m.jsx)(u.Z,{md:!0,show:F,setModal:I,title:(0,s.__)("Update Row","bitform"),children:(0,m.jsx)("div",{className:"o-a",children:(null==Z||null==(p=Z.actions)?void 0:p.update)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("small",{children:(0,s.__)("Enter the criteria to update rows. Please use the below format.","bitform")}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsxs)("small",{children:["Example: ",'("Month"="March" or "Month"="April") and "Amount">30']}),(0,m.jsx)("br",{}),(0,m.jsx)("small",{children:"Here Month and Amount are Zoho Sheet's worksheet header name"})," ",(0,m.jsx)("span",{className:"icn-btn ml-2 tooltip",style:{"--tooltip-txt":'"Supported Relational Operators: =, !=, <, >, <=, >=, contains"',fontSize:15},children:(0,m.jsx)("span",{className:"btcd-icn icn-information-outline"})}),(0,m.jsx)("textarea",{name:"",rows:"5",className:"btcd-paper-inp mt-1",onChange:function(e){return z(e.target.value,"criteria")},value:null==(k=Z.actions)||null==(_=k.update)?void 0:_.criteria})]}),(0,m.jsx)("div",{className:"font-w-m mt-3",children:(0,s.__)("Update Preferance","bitform")}),(0,m.jsx)("small",{children:(0,s.__)("update row for first match only?","bitform")}),(0,m.jsxs)("div",{children:[(0,m.jsx)(c.Z,{onChange:function(){return z(!0,"firstMatch")},radio:!0,checked:null==(w=Z.actions.update)?void 0:w.firstMatch,name:"firstMatch",title:(0,s.__)("Yes","bitform")}),(0,m.jsx)(c.Z,{onChange:function(){return z(!1,"firstMatch")},radio:!0,checked:!(null!=(v=Z.actions.update)&&v.firstMatch),name:"firstMatch",title:(0,s.__)("No","bitform")})]}),(0,m.jsx)("small",{children:(0,s.__)("insert new row if the above criteria doesn't met?","bitform")}),(0,m.jsxs)("div",{children:[(0,m.jsx)(c.Z,{onChange:function(){return z(!0,"insert")},radio:!0,checked:null==(x=Z.actions.update)?void 0:x.insert,name:"up-row",title:(0,s.__)("Yes","bitform")}),(0,m.jsx)(c.Z,{onChange:function(){return z(!1,"insert")},radio:!0,checked:!(null!=(j=Z.actions.update)&&j.insert),name:"up-row",title:(0,s.__)("No","bitform")})]})]})})}),(0,m.jsx)(u.Z,{md:!0,show:"share"===D.show,setModal:function(){return W({show:!1})},title:(0,s.__)("Share Settings","bitform"),children:(0,m.jsx)("div",{className:"o-a",style:{height:"95%"},children:(null==Z||null==(g=Z.actions)||null==(C=g.share)?void 0:C.length)>0&&Z.actions.share.map((function(e,t){return(0,m.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,m.jsx)(i.Z,{className:"btcd-paper-drpdwn w-7 mr-2",placeholder:"Input Email Address(s)",defaultValue:e.email,onChange:function(e){return function(e,t,a){var s,r=(0,o.Z)({},Z);null!=(s=r.actions)&&s.share||(r.actions.share=[]),r.actions.share[e][t]=a,N((0,o.Z)({},r))}(t,"email",e)},options:M(),customValue:!0}),(0,m.jsx)("input",{className:"btcd-paper-inp w-3",type:"text",value:e.accessLabel,readOnly:!0})]},e.accessLabel)}))})})]})}var b=a(44855),p=a(48291),k=a(90794),_=a(65037),w=a(43502),v=a(67587);function x(e){var t,a,r,o=e.i,l=e.formFields,i=e.field,c=e.sheetConf,d=e.setSheetConf,u=(0,p.sJ)(k.hi).isPro;return(0,m.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:function(e){return(0,n.wX)(e,o,c,d)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:l.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,m.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bitform")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(u?"":"(PRO)"),children:u&&(null==w.C?void 0:w.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===i.formField&&(0,m.jsx)(v.Z,{onChange:function(e){return(0,n.mG)(e,o,c,d)},label:(0,s.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:i.customValue,placeholder:(0,s.__)("Custom Value","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",name:"zohoFormField",value:i.zohoFormField||"",onChange:function(e){return(0,n.wX)(e,o,c,d)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(null==(t=c.default.worksheets)||null==(a=t.headers)||null==(r=a[c.worksheet])?void 0:r[c.headerRow])&&Object.values(c.default.worksheets.headers[c.worksheet][c.headerRow]).map((function(e){return(0,m.jsx)("option",{value:e,children:e},e+"-1")}))]})]}),(0,m.jsx)("button",{onClick:function(){return(0,n.FP)(o,c,d)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,m.jsx)("button",{onClick:function(){return(0,n.T5)(o,c,d)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,m.jsx)(_.Z,{})})]})}function j(e){var t,a,o,l,i,c,d,u=e.formID,h=e.formFields,p=e.handleInput,k=e.sheetConf,_=e.setSheetConf,w=e.isLoading,v=e.setisLoading,j=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-150 d-in-b",children:(0,s.__)("Workbook:","bitform")}),(0,m.jsxs)("select",{onChange:p,name:"workbook",value:k.workbook,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Workbook","bitform")}),(null==k||null==(t=k.default)?void 0:t.workbooks)&&Object.keys(k.default.workbooks).map((function(e){return(0,m.jsx)("option",{value:k.default.workbooks[e].workbookId,children:k.default.workbooks[e].workbookName},e)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,b.h4)(u,k,_,v,j)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Workbooks"'},type:"button",disabled:w,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-150 d-in-b",children:"Worksheet:"}),(0,m.jsxs)("select",{onChange:p,name:"worksheet",value:k.worksheet,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Worksheet","bitform")}),(null==k||null==(a=k.default)||null==(o=a.worksheets)?void 0:o[k.workbook])&&k.default.worksheets[k.workbook].map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,b.Co)(u,k,_,v,j)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:w,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-150 d-in-b",children:(0,s.__)("Header Row:","bitform")}),(0,m.jsx)("input",{type:"number",min:"1",className:"btcd-paper-inp w-4",placeholder:"Header Row",onChange:p,value:k.headerRow,name:"headerRow"}),(0,m.jsx)("button",{onClick:function(){return(0,b.kS)(u,k,_,v,j)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:w,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("small",{className:"mt-3 d-blk",style:{marginLeft:155,lineHeight:1.8},children:(0,s.__)("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bitform")}),(0,m.jsx)("br",{}),w&&(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(l=k.default)||null==(i=l.worksheets)||null==(c=i.headers)||null==(d=c[k.worksheet])?void 0:d[k.headerRow])&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),k.field_map.map((function(e,t){return(0,m.jsx)(x,{i:t,field:e,sheetConf:k,formFields:h,setSheetConf:_},"sheet-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,n.FP)(k.field_map.length,k,_)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),k.workbook&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{sheetConf:k,setSheetConf:_,formFields:h})]})]})}},17145:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(4637);const r=function(e){var t=e.className,a=e.disabled,r=e.checked,n=e.onChange,o=e.radio,l=e.name,i=e.title,c=e.value,d=e.sqr;return(0,s.jsxs)("label",{className:"btcd-ck-wrp "+t,children:[i,(0,s.jsx)("input",{type:o?"radio":"checkbox",checked:r,onChange:n,name:l,value:c,disabled:a}),(0,s.jsx)("span",{className:"btcd-mrk "+(!d&&"br-50")+" "+(o?"rdo":"ck")})]})}},81444:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(97633),r=a(4637);function n(e){var t=e.action,a=e.children;return(0,r.jsxs)("div",{className:"action-btn-wrapper",children:[(0,r.jsx)("div",{className:"action-btn",tabIndex:"0",role:"button",onClick:t,onKeyPress:t,children:(0,r.jsx)(s.Z,{})}),a]})}}}]);
"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[6417],{52665:(e,t,l)=>{l.d(t,{FP:()=>c,Mm:()=>n,P_:()=>o,T5:()=>u,WK:()=>r,mG:()=>f,wX:()=>m});var a=l(72564),i=l(66399),s=l(12102),n=function(e,t,l,i,s,n,r){var o=[].concat(e);if(r)o[n]=(0,a.Z)({},e[n],i),o.push({editItegration:!0}),t([].concat(o)),s.push(l);else{var d=[].concat(o);d.push(i),d.push({newItegration:!0}),t(d),s.push(l)}},r=function(e){var t={},l=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");l&&l.forEach((function(e){var l=e.split("=");l[1]&&(t[l[0]]=l[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,l,s,n,r,o,c,u){if(s.dataCenter&&s.clientId&&s.clientSecret){c(!0);var m="https://accounts.zoho."+s.dataCenter+"/oauth/v2/auth?scope="+l+"&response_type=code&client_id="+s.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(f.closed){clearInterval(p);var l={},r=!1,m=localStorage.getItem("__bitforms_"+e);if(m&&(r=!0,l=JSON.parse(m),localStorage.removeItem("__bitforms_"+e)),l.code&&!l.error&&l&&r){var h=(0,a.Z)({},s);h.accountServer=l["accounts-server"],d(t,l,h,n,o,c,u)}else{var b=l.error?"Cause: "+l.error:"";u({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+b+". "+(0,i.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:s.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:s.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:s.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},d=function(e,t,l,n,r,o,d){var c=(0,a.Z)({},t);c.dataCenter=l.dataCenter,c.clientId=l.clientId,c.clientSecret=l.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,s.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,a.Z)({},l);t.tokenDetails=e.data,n(t),r(!0),d({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):d({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});o(!1)}))},c=function(e,t,l,i,s){var n=(0,a.Z)({},t);s?i?n.relatedlists[s-1].upload_field_map.splice(e,0,{}):n.relatedlists[s-1].field_map.splice(e,0,{}):i?n.upload_field_map.splice(e,0,{}):n.field_map.splice(e,0,{}),l((0,a.Z)({},n))},u=function(e,t,l,i,s){var n=(0,a.Z)({},t);s?i?n.relatedlists[s-1].upload_field_map.length>1&&n.relatedlists[s-1].upload_field_map.splice(e,1):n.relatedlists[s-1].field_map.length>1&&n.relatedlists[s-1].field_map.splice(e,1):i?n.upload_field_map.length>1&&n.upload_field_map.splice(e,1):n.field_map.length>1&&n.field_map.splice(e,1),l((0,a.Z)({},n))},m=function(e,t,l,i,s,n){var r=(0,a.Z)({},l);n?s?r.relatedlists[n-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[n-1].field_map[t][e.target.name]=e.target.value:s?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(n?r.relatedlists[n-1].field_map[t].customValue="":r.field_map[t].customValue=""),i((0,a.Z)({},r))},f=function(e,t,l,i,s){var n=(0,a.Z)({},l);s?n.relatedlists[s-1].field_map[t].customValue=e.target.value:n.field_map[t].customValue=e.target.value,i((0,a.Z)({},n))}},7020:(e,t,l)=>{l.d(t,{Z:()=>s});var a=l(66399),i=l(4637);function s(e){var t=e.step,l=e.saveConfig,s=e.edit,n=e.disabled;return s?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n,children:(0,a.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},8969:(e,t,l)=>{l.d(t,{$8:()=>u,Ck:()=>r,G7:()=>c,Pd:()=>p,Rx:()=>n,vF:()=>d});var a=l(72564),i=l(66399),s=l(12102),n=function(e,t,l,i,s,n,r,d,c,u){var m=(0,a.Z)({},l);if(0===t){if(d){var f=(0,a.Z)({},c);f[e.target.name]="",u((0,a.Z)({},f))}m[e.target.name]=e.target.value}else m.relatedlists[t-1][e.target.name]=e.target.value;if("module"===e.target.name)m=o(t,m,s,i,n,r);i((0,a.Z)({},m))},r=function(e,t,l,a,i,s,n){var r,o;e&&((null==l||null==(r=l.default)||null==(o=r.relatedlists)||!o[l.module])&&u(i,l,a,s,n));t(e)},o=function(e,t,l,i,s,n){var r,o,d=(0,a.Z)({},t),c=0===e?d.module:d.relatedlists[e-1].module;return 0===e?(d.actions={},d.field_map=[{formField:"",zohoFormField:""}],d.upload_field_map=[{formField:"",zohoFormField:""}],e&&(d.relatedlists[e-1]={})):(d.relatedlists[e-1].field_map=[{formField:"",zohoFormField:""}],d.relatedlists[e-1].upload_field_map=[{formField:"",zohoFormField:""}],d.relatedlists[e-1].actions={}),null!=(r=d.default)&&null!=(o=r.moduleData)&&o[c]?0===e?(d.field_map=f(e,d),Object.keys(d.default.moduleData[c].fileUploadFields).length>0&&(d.upload_field_map=f(e,d,!0))):(d.relatedlists[e-1].field_map=f(e,d),Object.keys(d.default.moduleData[c].fileUploadFields).length>0&&(d.relatedlists[e-1].upload_field_map=f(e,d,!0))):m(e,l,d,i,s,n),d},d=function(e,t,l,n,r){n(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(o,"bitforms_zrecruit_refresh_modules").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);s.default||(s.default={}),e.data.modules&&(s.default.modules=e.data.modules),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},s)),r({show:!0,msg:(0,i.__)("Modules refreshed","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,i.g)((0,i.__)("Modules refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,i.__)("Modules refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))},c=function(e,t,l,n,r){n(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(o,"bitforms_zrecruit_refresh_notetypes").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);s.default||(s.default={}),e.data.noteTypes&&(s.default.noteTypes=e.data.noteTypes),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},s)),r({show:!0,msg:(0,i.__)("Note Types refreshed","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,i.g)((0,i.__)("Note Types refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,i.__)("Note Types refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))},u=function(e,t,l,n,r){if(t.module){n(!0);var o={formID:e,module:t.module,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(o,"bitforms_zrecruit_refresh_related_lists").then((function(e){var s;if(e&&e.success){var o=(0,a.Z)({},t);e.data.related_modules&&(o.default.relatedlists||(o.default.relatedlists={}),o.default.relatedlists[o.module]=e.data.related_modules),e.data.tokenDetails&&(o.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},o)),r({show:!0,msg:(0,i.__)("RelatedLists refreshed","bitform")})}else null!=e&&null!=(s=e.data)&&s.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,i.g)((0,i.__)("RelatedLists refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,i.__)("RelatedLists refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))}},m=function(e,t,l,n,r,o){var d=0===e?l.module:l.relatedlists[e-1].module;if(d){r(!0);var c={formID:t,module:d,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};(0,s.Z)(c,"bitforms_zrecruit_get_fields").then((function(t){if(t&&t.success){var s=(0,a.Z)({},l);t.data.fieldDetails&&(s.default.moduleData||(s.default.moduleData={}),s.default.moduleData[d]=t.data.fieldDetails,0===e?(s.field_map=f(e,s),Object.keys(s.default.moduleData[d].fileUploadFields).length>0&&(s.upload_field_map=f(e,s,!0))):(s.relatedlists[e-1].field_map=f(e,s),Object.keys(s.default.moduleData[d].fileUploadFields).length>0&&(s.relatedlists[e-1].upload_field_map=f(e,s,!0)))),t.data.tokenDetails&&(s.tokenDetails=t.data.tokenDetails),n((0,a.Z)({},s))}else o({show:!0,msg:(0,i.__)("Fields refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))}},f=function(e,t,l){var a,i,s=0===e?t.module:t.relatedlists[e-1].module;return l?t.default.moduleData[s].requiredFileUploadFields.length>0?null==(i=t.default.moduleData[s].requiredFileUploadFields)?void 0:i.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]:t.default.moduleData[s].required.length>0?null==(a=t.default.moduleData[s].required)?void 0:a.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]},p=function(e){var t=null!=e&&e.field_map?e.field_map.filter((function(t){var l,a,i;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.moduleData)||null==(i=a[e.module])?void 0:i.required.indexOf(t.zohoFormField))})):[],l=null!=e&&e.upload_field_map?e.upload_field_map.filter((function(t){var l,a,i;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.moduleData)||null==(i=a[e.module])?void 0:i.requiredFileUploadFields.indexOf(t.zohoFormField))})):[],a=e.relatedlists.map((function(e){return e.field_map.filter((function(e){return!e.formField&&e.zohoFormField}))})),i=e.relatedlists.map((function(e){return e.upload_field_map.filter((function(e){return!e.formField&&e.zohoFormField}))}));return!(t.length>0||l.length>0||a.some((function(e){return e.length}))||i.some((function(e){return e.length})))}},67127:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(72564),i=l(88381),s=l(66399),n=l(59496),r=l(82166),o=l(52665),d=l(85934),c=l(26414),u=l(8969),m=l(4637);function f(e){var t,l,i,o,f,p,h,b,_,x,v,j,g,F,y,C,w,N,k=e.tab,D=e.formID,Z=e.formFields,I=e.recruitConf,R=e.setRecruitConf,S=e.setSnackbar,O=(0,n.useState)(!1),z=O[0],T=O[1],U=(0,n.useState)(!1),L=U[0],M=U[1],A=(0,n.useState)(!1),q=A[0],P=A[1],V=function(e,t){var l=(0,a.Z)({},I);0===k?("approval"===t&&(e.target.checked?l.actions.approval=!0:delete l.actions.approval),"workflow"===t&&(e.target.checked?l.actions.workflow=!0:delete l.actions.workflow),"upsert"===t&&(e.target.checked?l.actions.upsert=!0:delete l.actions.upsert),"recordOwner"===t&&(""!==e?l.actions.recordOwner=e:delete l.actions.recordOwner)):("approval"===t&&(e.target.checked?l.relatedlists[k-1].actions.approval=!0:delete l.relatedlists[k-1].actions.approval),"workflow"===t&&(e.target.checked?l.relatedlists[k-1].actions.workflow=!0:delete l.relatedlists[k-1].actions.workflow),"recordOwner"===t&&(""!==e?l.relatedlists[k-1].actions.recordOwner=e:delete l.relatedlists[k-1].actions.recordOwner)),R((0,a.Z)({},l))},G=function(e,t){var l=(0,a.Z)({},I);l.actions.note||(l.actions.note={}),"field"===e?(l.actions.note.content||(l.actions.note.content=""),l.actions.note.content+=t):t?l.actions.note[e]=t:delete l.actions.note[e],R((0,a.Z)({},l))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"d-flx flx-wrp",children:["Notes"!==(null==I||null==(t=I.relatedlists)||null==(l=t[k-1])?void 0:l.module)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{onChange:function(e){return V(e,"workflow")},checked:0===k?"workflow"in I.actions:"workflow"in(null==(i=I.relatedlists)||null==(o=i[k-1])?void 0:o.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:(0,s.__)("Workflow","bitform"),subTitle:(0,s.__)("Trigger workflows in Zoho Recruit.","bitform")}),(0,m.jsx)(c.Z,{onChange:function(e){return V(e,"approval")},checked:0===k?"approval"in I.actions:"approval"in(null==(f=I.relatedlists)||null==(p=f[k-1])?void 0:p.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:(0,s.__)("Approval","bitform"),subTitle:(0,s.__)("Send entries to approval list in Zoho Recruit","bitform")}),0===k&&!["Calls","Events","Tasks"].includes(I.module)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{onChange:function(e){return V(e,"upsert")},checked:"upsert"in I.actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:(0,s.__)("Upsert Record","bitform"),subTitle:(0,s.__)("A record gets updated if the email already exists, else a new record will be created.","bitform")}),(0,m.jsx)(c.Z,{onChange:function(){I.default.noteTypes||(0,u.G7)(D,I,R,P,S),M(!0)},checked:"note"in I.actions&&"type"in(null==(h=I.actions)?void 0:h.note),className:"wdt-200 mt-4 mr-2",value:"notes",title:(0,s.__)("Add a Note","bitform"),subTitle:(0,s.__)("Add a note from bitform to pushed to Zoho Recruit.","bitform")})]})]}),(0,m.jsx)(c.Z,{onChange:function(){return T(!0)},checked:0===k?"recordOwner"in I.actions:"recordOwner"in(null==(b=I.relatedlists)||null==(_=b[k-1])?void 0:_.actions),className:"wdt-200 mt-4 mr-2",value:"recordOwner",title:(0,s.__)("Record Owner","bitform"),subTitle:(0,s.__)("Set owner of current record","bitform")})]}),(0,m.jsxs)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:z,close:function(){return T(!1)},action:function(){return T(!1)},title:(0,s.__)("Record Owner","bitform"),children:[(0,m.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),(0,m.jsx)("div",{className:"mt-2",children:(0,s.__)("Owner ID","bitform")}),(0,m.jsx)("div",{className:"flx flx-between",children:(0,m.jsx)("input",{onChange:function(e){return V(e.target.value,"recordOwner")},className:"btcd-paper-inp mt-2",type:"number",min:"0",value:0===k?(null==I||null==(x=I.actions)?void 0:x.recordOwner)||"":(null==(v=I.relatedlists)||null==(j=v[k-1])||null==(g=j.actions)?void 0:g.recordOwner)||"",placeholder:(0,s.__)("Enter Owner ID","bitform")})})]}),0===k&&(0,m.jsxs)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:L,close:function(){return M(!1)},action:function(){return M(!1)},title:(0,s.__)("Notes","bitform"),children:[(0,m.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),q?(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flx",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp",onChange:function(e){return G("type",e.target.value)},value:(null==(F=I.actions)||null==(y=F.note)?void 0:y.type)||"",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Note Type","bitform")}),(null==I||null==(C=I.default)?void 0:C.noteTypes)&&Object.values(I.default.noteTypes).map((function(e){return(0,m.jsx)("option",{value:e.noteTypeId+"__"+e.noteTypeName,children:e.noteTypeName},e.noteTypeId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,u.G7)(D,I,R,P,S)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Note Types"'},type:"button",disabled:q,children:"↻"})]}),(0,m.jsx)("div",{className:"mt-2 mb-1",children:(0,s.__)("Note Content","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp w-5",onChange:function(e){return G("field",e.target.value)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Field","bitform")}),Z.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:"${"+e.key+"}",children:e.name},"ff-zhcrm-"+e.key)}))]}),(0,m.jsx)("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:function(e){return G("content",e.target.value)},value:(null==(w=I.actions)||null==(N=w.note)?void 0:N.content)||""})]})]})]})}var p=l(48291),h=l(20859),b=l(53189),_=l(80027),x=l(84048);function v(e){var t,l,a,i,n,r,d,c,u,f,v,j,g,F=e.i,y=e.uploadFields,C=e.formFields,w=e.field,N=e.recruitConf,k=e.setRecruitConf,D=e.tab,Z=0===D?N.module:null==(t=N.relatedlists)||null==(l=t[D-1])?void 0:l.module;y?d=""===w.zohoFormField||-1===(null==(c=N.default.moduleData)||null==(u=c[Z])||null==(f=u.requiredFileUploadFields)?void 0:f.indexOf(w.zohoFormField)):d=""===w.zohoFormField||-1===(null==(v=N.default.moduleData)||null==(j=v[Z])||null==(g=j.required)?void 0:g.indexOf(w.zohoFormField));var I=(0,p.sJ)(h.hi).isPro;return(0,m.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:w.formField||"",onChange:function(e){return(0,o.wX)(e,F,N,k,y,D)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:y?C.map((function(e){return"file-up"===e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})):C.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),!y&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bitform")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(I?"":"(PRO)"),children:I&&(null==_.C?void 0:_.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]})]}),"custom"===w.formField&&(0,m.jsx)(x.Z,{onChange:function(e){return(0,o.mG)(e,F,N,k,D)},label:(0,s.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:w.customValue,placeholder:(0,s.__)("Custom Value","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",disabled:!d,name:"zohoFormField",value:w.zohoFormField||"",onChange:function(e){return(0,o.wX)(e,F,N,k,y,D)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),y?(null==(a=N.default.moduleData)||null==(i=a[Z])?void 0:i.fileUploadFields)&&Object.keys(N.default.moduleData[Z].fileUploadFields).map((function(e){return d?"false"===N.default.moduleData[Z].fileUploadFields[e].required&&(0,m.jsx)("option",{value:e,children:N.default.moduleData[Z].fileUploadFields[e].display_label},e):(0,m.jsx)("option",{value:e,children:N.default.moduleData[Z].fileUploadFields[e].display_label},e)})):(null==(n=N.default.moduleData)||null==(r=n[Z])?void 0:r.fields)&&Object.keys(N.default.moduleData[Z].fields).map((function(e){return d?"false"===N.default.moduleData[Z].fields[e].required&&(0,m.jsx)("option",{value:e,children:N.default.moduleData[Z].fields[e].display_label},e):(0,m.jsx)("option",{value:e,children:N.default.moduleData[Z].fields[e].display_label},e)}))]})]}),(0,m.jsx)("button",{onClick:function(){return(0,o.FP)(F,N,k,y,D)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),d&&(0,m.jsx)("button",{onClick:function(){return(0,o.T5)(F,N,k,y,D)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,m.jsx)(b.Z,{})})]})}function j(e){var t,l,a,i,d,c,p=e.tab,h=e.settab,b=e.formID,_=e.formFields,x=e.recruitConf,j=e.setRecruitConf,g=e.isLoading,F=e.setSnackbar;return(0,n.useEffect)((function(){(0,u.Ck)(0,h)}),[]),(0,m.jsxs)(m.Fragment,{children:[g&&(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(t=x.default)||null==(l=t.moduleData)||null==(a=l[x.module])?void 0:a.fields)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),x.field_map.map((function(e,t){return(0,m.jsx)(v,{i:t,field:e,recruitConf:x,formFields:_,setRecruitConf:j,tab:p,setSnackbar:F},"recruit-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,o.FP)(x.field_map.length,x,j,!1,p)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==Object.keys(null==(i=x.default)||null==(d=i.moduleData)||null==(c=d[x.module])?void 0:c.fileUploadFields).length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Attachments","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),x.upload_field_map.map((function(e,t){return(0,m.jsx)(v,{uploadFields:1,i:t,field:e,recruitConf:x,formFields:_,setRecruitConf:j,tab:p,setSnackbar:F},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,o.FP)(x.upload_field_map.length,x,j,!0,p)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{tab:p,formID:b,formFields:_,recruitConf:x,setRecruitConf:j,setSnackbar:F})]})]})}function g(e){var t,l,a,i,d,c,p,h,b,_,x,j=e.indx,g=e.tab,F=e.settab,y=e.formID,C=e.formFields,w=e.recruitConf,N=e.setRecruitConf,k=e.handleInput,D=e.isLoading,Z=e.setisLoading,I=e.setSnackbar;return(0,n.useEffect)((function(){(0,u.Ck)(j+1,F,w,N,y,Z,I)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:"Related List:"}),(0,m.jsxs)("select",{onChange:k,name:"module",value:null==w||null==(t=w.relatedlists)||null==(l=t[g-1])?void 0:l.module,className:"btcd-paper-inp w-7",disabled:!w.module,children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Related Module","bitform")}),(null==w||null==(a=w.default.relatedlists)?void 0:a[w.module])&&Object.values(w.default.relatedlists[w.module]).map((function(e){return(0,m.jsx)("option",{value:e.aMod,children:e.pl},e.aMod)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,u.$8)(y,w,N,Z,I)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Related Lists"'},type:"button",disabled:D,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),D&&(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(i=w.default)||null==(d=i.moduleData)||null==(c=d[null==(p=w.relatedlists)||null==(h=p[g-1])?void 0:h.module])?void 0:c.fields)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),w.relatedlists[g-1].field_map.map((function(e,t){return(0,m.jsx)(v,{i:t,field:e,recruitConf:w,formFields:C,setRecruitConf:N,tab:g},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,o.FP)(w.relatedlists[g-1].field_map.length,w,N,!1,g)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==Object.keys(null==(b=w.default)||null==(_=b.moduleData)||null==(x=_[w.relatedlists[g-1].module])?void 0:x.fileUploadFields).length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Attachments","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),w.relatedlists[g-1].upload_field_map.map((function(e,t){return(0,m.jsx)(v,{uploadFields:1,i:t,field:e,recruitConf:w,formFields:C,setRecruitConf:N,tab:g},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,o.FP)(w.relatedlists[g-1].upload_field_map.length,w,N,!0,g)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{recruitConf:w,setRecruitConf:N,tab:g})]})]})}var F=l(4477);function y(e){var t=e.tab,l=e.settab,n=e.formID,r=e.formFields,o=e.handleInput,d=e.recruitConf,c=e.setRecruitConf,f=e.isLoading,p=e.setisLoading,h=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:"Module:"}),(0,m.jsxs)("select",{onChange:o,name:"module",value:d.module,className:"btcd-paper-inp w-7",disabled:1===t,children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Module","bitform")}),d.default&&d.default.modules&&Object.keys(d.default.modules).map((function(e){return(0,m.jsx)("option",{value:e,children:d.default.modules[e].pl},e)}))]}),0===t&&(0,m.jsx)("button",{onClick:function(){return(0,u.vF)(n,d,c,p,h)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Modules"'},type:"button",disabled:f,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsxs)(i.mQ,{selectedTabClassName:"s-t-l-active",children:[(0,m.jsxs)(i.td,{className:"flx mt-2 mb-0",children:[(0,m.jsx)(i.OK,{className:"btcd-s-tab-link",children:(0,s.__)("New Record","bitform")}),(null==d?void 0:d.relatedlists)&&d.relatedlists.map((function(e,t){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.OK,{className:"btcd-s-tab-link",children:[(0,s.__)("Related List #","bitform"),t+1]},"rel-"+(t+64)),(0,m.jsx)("button",{onClick:function(){return function(e){var t=(0,a.Z)({},d);t.relatedlists.splice(e,1),t.relatedlists.length||l(0),c((0,a.Z)({},t))}(t)},className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:(0,m.jsx)(F.Z,{size:"14"})})]})})),d.relatedlists.length<3&&(0,m.jsx)("button",{onClick:function(){var e=(0,a.Z)({},d);e.relatedlists.length<3&&e.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),c((0,a.Z)({},e))},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Add More Related List"'},type:"button",children:"+"})]}),(0,m.jsx)("div",{className:"btcd-hr"}),(0,m.jsx)(i.x4,{children:(0,m.jsx)(j,{tab:t,settab:l,formID:n,formFields:r,recruitConf:d,setRecruitConf:c,isLoading:f,setSnackbar:h})}),(null==d?void 0:d.relatedlists)&&d.relatedlists.map((function(e,a){return(0,m.jsx)(i.x4,{children:(0,m.jsx)(g,{indx:a,tab:t,settab:l,formID:n,formFields:r,recruitConf:d,setRecruitConf:c,handleInput:o,isLoading:f,setisLoading:p,setSnackbar:h})},"rlt-"+(a+89))}))]})]})}}}]);
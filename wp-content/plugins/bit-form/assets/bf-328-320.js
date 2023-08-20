var C=Object.defineProperty;var B=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var G=(a,d,r)=>d in a?C(a,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[d]=r,k=(a,d)=>{for(var r in d||(d={}))ee.call(d,r)&&G(a,r,d[r]);if(B)for(var r of B(d))se.call(d,r)&&G(a,r,d[r]);return a};import{r as Z,j as e,T as D,_ as n,i as H,k as S,u as le,w as ae,$ as te,aF as de}from"./main-398.js";import{T as ne,a as ie,b as J,c as K}from"./bf-511-68.js";import{h as Q,c as oe,d as z,e as me}from"./bf-273-70.js";import{r as X,a as Y,b as ce,d as he}from"./bf-428-319.js";import{S as xe}from"./bf-404-116.js";import{M as re}from"./bf-305-112.js";function A({tab:a,formID:d,formFields:r,recruitConf:l,setRecruitConf:t,setSnackbar:s}){var v,O,T,_,M,$,R,g,F,i,E,I,q,L,V,f,P,W;const[c,m]=Z.useState(!1),[j,b]=Z.useState(!1),[u,N]=Z.useState(!1),h=(o,y)=>{const x=k({},l);a===0?(y==="approval"&&(o.target.checked?x.actions.approval=!0:delete x.actions.approval),y==="workflow"&&(o.target.checked?x.actions.workflow=!0:delete x.actions.workflow),y==="upsert"&&(o.target.checked?x.actions.upsert=!0:delete x.actions.upsert),y==="recordOwner"&&(o!==""?x.actions.recordOwner=o:delete x.actions.recordOwner)):(y==="approval"&&(o.target.checked?x.relatedlists[a-1].actions.approval=!0:delete x.relatedlists[a-1].actions.approval),y==="workflow"&&(o.target.checked?x.relatedlists[a-1].actions.workflow=!0:delete x.relatedlists[a-1].actions.workflow),y==="recordOwner"&&(o!==""?x.relatedlists[a-1].actions.recordOwner=o:delete x.relatedlists[a-1].actions.recordOwner)),t(k({},x))},p=()=>{l.default.noteTypes||X(d,l,t,N,s),b(!0)},w=(o,y)=>{const x=k({},l);x.actions.note||(x.actions.note={}),o==="field"?(x.actions.note.content||(x.actions.note.content=""),x.actions.note.content+=y):y?x.actions.note[o]=y:delete x.actions.note[o],t(k({},x))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[((O=(v=l==null?void 0:l.relatedlists)==null?void 0:v[a-1])==null?void 0:O.module)!=="Notes"&&e.jsxs(e.Fragment,{children:[e.jsx(D,{onChange:o=>h(o,"workflow"),checked:a===0?"workflow"in l.actions:"workflow"in((_=(T=l.relatedlists)==null?void 0:T[a-1])==null?void 0:_.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:n("Workflow"),subTitle:n("Trigger workflows in Zoho Recruit.")}),e.jsx(D,{onChange:o=>h(o,"approval"),checked:a===0?"approval"in l.actions:"approval"in(($=(M=l.relatedlists)==null?void 0:M[a-1])==null?void 0:$.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:n("Approval"),subTitle:n("Send entries to approval list in Zoho Recruit")}),a===0&&!["Calls","Events","Tasks"].includes(l.module)&&e.jsxs(e.Fragment,{children:[e.jsx(D,{onChange:o=>h(o,"upsert"),checked:"upsert"in l.actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:n("Upsert Record"),subTitle:n("A record gets updated if the email already exists, else a new record will be created.")}),e.jsx(D,{onChange:p,checked:"note"in l.actions&&"type"in((R=l.actions)==null?void 0:R.note),className:"wdt-200 mt-4 mr-2",value:"notes",title:n("Add a Note"),subTitle:n("Add a note from bitform to pushed to Zoho Recruit.")})]})]}),e.jsx(D,{onChange:()=>m(!0),checked:a===0?"recordOwner"in l.actions:"recordOwner"in((F=(g=l.relatedlists)==null?void 0:g[a-1])==null?void 0:F.actions),className:"wdt-200 mt-4 mr-2",value:"recordOwner",title:n("Record Owner"),subTitle:n("Set owner of current record")})]}),e.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:c,close:()=>m(!1),action:()=>m(!1),title:n("Record Owner"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:n("Owner ID")}),e.jsx("div",{className:"flx flx-between",children:e.jsx("input",{onChange:o=>h(o.target.value,"recordOwner"),className:"btcd-paper-inp mt-2",type:"number",min:"0",value:a===0?((i=l==null?void 0:l.actions)==null?void 0:i.recordOwner)||"":((q=(I=(E=l.relatedlists)==null?void 0:E[a-1])==null?void 0:I.actions)==null?void 0:q.recordOwner)||"",placeholder:n("Enter Owner ID")})})]}),a===0&&e.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:j,close:()=>b(!1),action:()=>b(!1),title:n("Notes"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),u?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx",children:[e.jsxs("select",{className:"btcd-paper-inp",onChange:o=>w("type",o.target.value),value:((V=(L=l.actions)==null?void 0:L.note)==null?void 0:V.type)||"",children:[e.jsx("option",{value:"",children:n("Select Note Type")}),((f=l==null?void 0:l.default)==null?void 0:f.noteTypes)&&Object.values(l.default.noteTypes).map(o=>e.jsx("option",{value:`${o.noteTypeId}__${o.noteTypeName}`,children:o.noteTypeName},o.noteTypeId))]}),e.jsx("button",{onClick:()=>X(d,l,t,N,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Note Types"'},type:"button",disabled:u,children:"↻"})]}),e.jsx("div",{className:"mt-2 mb-1",children:n("Note Content")}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:o=>w("field",o.target.value),children:[e.jsx("option",{value:"",children:n("Field")}),r.map(o=>o.type!=="file-up"&&e.jsx("option",{value:`\${${o.key}}`,children:o.name},`ff-zhcrm-${o.key}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:o=>w("content",o.target.value),value:((W=(P=l.actions)==null?void 0:P.note)==null?void 0:W.content)||""})]})]})]})}function U({i:a,uploadFields:d,formFields:r,field:l,recruitConf:t,setRecruitConf:s,tab:c}){var N,h,p,w,v,O,T,_,M,$,R,g,F;const m=c===0?t.module:(h=(N=t.relatedlists)==null?void 0:N[c-1])==null?void 0:h.module;let j;d?j=l.zohoFormField===""||((v=(w=(p=t.default.moduleData)==null?void 0:p[m])==null?void 0:w.requiredFileUploadFields)==null?void 0:v.indexOf(l.zohoFormField))===-1:j=l.zohoFormField===""||((_=(T=(O=t.default.moduleData)==null?void 0:O[m])==null?void 0:T.required)==null?void 0:_.indexOf(l.zohoFormField))===-1;const b=le(te),{isPro:u}=b;return e.jsxs("div",{className:"flx mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:i=>Q(i,a,t,s,d,c),children:[e.jsx("option",{value:"",children:n("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:d?r.map(i=>i.type==="file-up"&&e.jsx("option",{value:i.key,children:i.name},`ff-zhcrm-${i.key}`)):r.map(i=>i.type!=="file-up"&&e.jsx("option",{value:i.key,children:i.name},`ff-zhcrm-${i.key}`))}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"custom",children:n("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((M=xe)==null?void 0:M.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]})]}),l.formField==="custom"&&e.jsx(re,{onChange:i=>oe(i,a,t,s,c),label:n("Custom Value"),className:"mr-2",type:"text",value:l.customValue,placeholder:n("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!j,name:"zohoFormField",value:l.zohoFormField||"",onChange:i=>Q(i,a,t,s,d,c),children:[e.jsx("option",{value:"",children:n("Select Field")}),d?((R=($=t.default.moduleData)==null?void 0:$[m])==null?void 0:R.fileUploadFields)&&Object.keys(t.default.moduleData[m].fileUploadFields).map(i=>j?t.default.moduleData[m].fileUploadFields[i].required==="false"&&e.jsx("option",{value:i,children:t.default.moduleData[m].fileUploadFields[i].display_label},i):e.jsx("option",{value:i,children:t.default.moduleData[m].fileUploadFields[i].display_label},i)):((F=(g=t.default.moduleData)==null?void 0:g[m])==null?void 0:F.fields)&&Object.keys(t.default.moduleData[m].fields).map(i=>j?t.default.moduleData[m].fields[i].required==="false"&&e.jsx("option",{value:i,children:t.default.moduleData[m].fields[i].display_label},i):e.jsx("option",{value:i,children:t.default.moduleData[m].fields[i].display_label},i))]})]}),e.jsx("button",{onClick:()=>z(a,t,s,d,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),j&&e.jsx("button",{onClick:()=>me(a,t,s,d,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(ae,{})})]})}function pe({tab:a,settab:d,formID:r,formFields:l,recruitConf:t,setRecruitConf:s,isLoading:c,setSnackbar:m}){var j,b,u,N,h,p;return Z.useEffect(()=>{Y(0,d)},[]),e.jsxs(e.Fragment,{children:[c&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((u=(b=(j=t.default)==null?void 0:j.moduleData)==null?void 0:b[t.module])==null?void 0:u.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Fields")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Zoho Fields")})})]}),t.field_map.map((w,v)=>e.jsx(U,{i:v,field:w,recruitConf:t,formFields:l,setRecruitConf:s,tab:a,setSnackbar:m},`recruit-m-${v+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>z(t.field_map.length,t,s,!1,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((p=(h=(N=t.default)==null?void 0:N.moduleData)==null?void 0:h[t.module])==null?void 0:p.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Attachments")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Zoho Fields")})})]}),t.upload_field_map.map((w,v)=>e.jsx(U,{uploadFields:1,i:v,field:w,recruitConf:t,formFields:l,setRecruitConf:s,tab:a,setSnackbar:m},`crm-m-${v+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>z(t.upload_field_map.length,t,s,!0,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(A,{tab:a,formID:r,formFields:l,recruitConf:t,setRecruitConf:s,setSnackbar:m})]})]})}function je({indx:a,tab:d,settab:r,formID:l,formFields:t,recruitConf:s,setRecruitConf:c,handleInput:m,isLoading:j,setisLoading:b,setSnackbar:u}){var N,h,p,w,v,O,T,_,M,$,R;return Z.useEffect(()=>{Y(a+1,r,s,c,l,b,u)},[]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:"Related List:"}),e.jsxs("select",{onChange:m,name:"module",value:(h=(N=s==null?void 0:s.relatedlists)==null?void 0:N[d-1])==null?void 0:h.module,className:"btcd-paper-inp w-7",disabled:!s.module,children:[e.jsx("option",{value:"",children:n("Select Related Module")}),((p=s==null?void 0:s.default.relatedlists)==null?void 0:p[s.module])&&Object.values(s.default.relatedlists[s.module]).map(g=>e.jsx("option",{value:g.aMod,children:g.pl},g.aMod))]}),e.jsx("button",{onClick:()=>ce(l,s,c,b,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Related Lists"'},type:"button",disabled:j,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),j&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((_=(T=(w=s.default)==null?void 0:w.moduleData)==null?void 0:T[(O=(v=s.relatedlists)==null?void 0:v[d-1])==null?void 0:O.module])==null?void 0:_.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Fields")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Zoho Fields")})})]}),s.relatedlists[d-1].field_map.map((g,F)=>e.jsx(U,{i:F,field:g,recruitConf:s,formFields:t,setRecruitConf:c,tab:d},`crm-m-${F+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>z(s.relatedlists[d-1].field_map.length,s,c,!1,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((R=($=(M=s.default)==null?void 0:M.moduleData)==null?void 0:$[s.relatedlists[d-1].module])==null?void 0:R.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Map Attachments")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Zoho Fields")})})]}),s.relatedlists[d-1].upload_field_map.map((g,F)=>e.jsx(U,{uploadFields:1,i:F,field:g,recruitConf:s,formFields:t,setRecruitConf:c,tab:d},`crm-m-${F+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>z(s.relatedlists[d-1].upload_field_map.length,s,c,!0,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(A,{recruitConf:s,setRecruitConf:c,tab:d})]})]})}function ye({tab:a,settab:d,formID:r,formFields:l,handleInput:t,recruitConf:s,setRecruitConf:c,isLoading:m,setisLoading:j,setSnackbar:b}){const u=()=>{const h=k({},s);h.relatedlists.length<3&&h.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),c(k({},h))},N=h=>{const p=k({},s);p.relatedlists.splice(h,1),p.relatedlists.length||d(0),c(k({},p))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:"Module:"}),e.jsxs("select",{onChange:t,name:"module",value:s.module,className:"btcd-paper-inp w-7",disabled:a===1,children:[e.jsx("option",{value:"",children:n("Select Module")}),s.default&&s.default.modules&&Object.keys(s.default.modules).map(h=>e.jsx("option",{value:h,children:s.default.modules[h].pl},h))]}),a===0&&e.jsx("button",{onClick:()=>he(r,s,c,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Modules"'},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsxs(ne,{selectedTabClassName:"s-t-l-active",children:[e.jsxs(ie,{className:"flx mt-2 mb-0",children:[e.jsx(J,{className:"btcd-s-tab-link",children:n("New Record")}),(s==null?void 0:s.relatedlists)&&s.relatedlists.map((h,p)=>e.jsxs(e.Fragment,{children:[e.jsxs(J,{className:"btcd-s-tab-link",children:[n("Related List #"),p+1]},`rel-${p+64}`),e.jsx("button",{onClick:()=>N(p),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:e.jsx(de,{size:"14"})})]})),s.relatedlists.length<3&&e.jsx("button",{onClick:u,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Add More Related List"'},type:"button",children:"+"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(K,{children:e.jsx(pe,{tab:a,settab:d,formID:r,formFields:l,recruitConf:s,setRecruitConf:c,isLoading:m,setSnackbar:b})}),(s==null?void 0:s.relatedlists)&&s.relatedlists.map((h,p)=>e.jsx(K,{children:e.jsx(je,{indx:p,tab:a,settab:d,formID:r,formFields:l,recruitConf:s,setRecruitConf:c,handleInput:t,isLoading:m,setisLoading:j,setSnackbar:b})},`rlt-${p+89}`))]})]})}export{ye as Z};

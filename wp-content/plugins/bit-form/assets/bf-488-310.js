var pe=Object.defineProperty;var se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var le=(s,n,u)=>n in s?pe(s,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[n]=u,k=(s,n)=>{for(var u in n||(n={}))je.call(n,u)&&le(s,u,n[u]);if(se)for(var u of se(n))me.call(n,u)&&le(s,u,n[u]);return s};import{j as e,r as Q,T as O,_ as a,i as D,k as X,M as ge,di as te,w as we,aF as ve}from"./main-398.js";import{T as ye,a as Ne,b as ie,c as ae}from"./bf-511-68.js";import{h as de,c as be,d as f,e as Fe}from"./bf-273-70.js";import{u as re}from"./bf-989-109.js";import{C}from"./bf-288-71.js";import{T as Re}from"./bf-242-302.js";import{r as ne,a as _e,b as ce,d as ue,e as he,f as ke,g as Me}from"./bf-284-309.js";import{S as Te}from"./bf-404-116.js";import{M as Oe}from"./bf-305-112.js";function oe({size:s}){return e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"svg-icn",children:[e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}function xe({crmConf:s,setCrmConf:n,formFields:u,tab:i,formID:d,setSnackbar:t}){var U,$,Z,L,q,z,B,A,S,c,P,Y,H,I,J,K,F;const[x,m]=Q.useState(!1),[h,g]=Q.useState(!1),[v,y]=Q.useState({show:!1,action:()=>{}}),w=(l,o)=>{var M,R;const r=k({},s);if(i===0){if(o==="attachment"&&(l!==""?r.actions.attachment=l:delete r.actions.attachment),o==="approval"&&(l.target.checked?r.actions.approval=!0:delete r.actions.approval),o==="workflow"&&(l.target.checked?r.actions.workflow=!0:delete r.actions.workflow),o==="blueprint"&&(l.target.checked?r.actions.blueprint=!0:delete r.actions.blueprint),o==="gclid"&&(l.target.checked?r.actions.gclid=!0:delete r.actions.gclid),o==="assignment_rules"&&(l!==""?r.actions.assignment_rules=l:delete r.actions.assignment_rules),o==="tag_rec"&&(l!==""?r.actions.tag_rec=l:delete r.actions.tag_rec),o==="rec_owner"&&(l!==""?r.actions.rec_owner=l:delete r.actions.rec_owner),o==="upsert")if(l.target.checked){const E=(M=r.default.layouts[r.module][r.layout].unique)==null?void 0:M.map((W,G)=>({i:G,name:W}));r.actions.upsert={overwrite:!0,crmField:E}}else delete r.actions.upsert}else if(o==="attachment"&&(l!==""?r.relatedlists[i-1].actions.attachment=l:delete r.relatedlists[i-1].actions.attachment),o==="approval"&&(l.target.checked?r.relatedlists[i-1].actions.approval=!0:delete r.relatedlists[i-1].actions.approval),o==="workflow"&&(l.target.checked?r.relatedlists[i-1].actions.workflow=!0:delete r.relatedlists[i-1].actions.workflow),o==="blueprint"&&(l.target.checked?r.relatedlists[i-1].actions.blueprint=!0:delete r.relatedlists[i-1].actions.blueprint),o==="gclid"&&(l.target.checked?r.relatedlists[i-1].actions.gclid=!0:delete r.relatedlists[i-1].actions.gclid),o==="assignment_rules"&&(l!==""?r.relatedlists[i-1].actions.assignment_rules=l:delete r.relatedlists[i-1].actions.assignment_rules),o==="tag_rec"&&(l!==""?r.relatedlists[i-1].actions.tag_rec=l:delete r.relatedlists[i-1].actions.tag_rec),o==="rec_owner"&&(l!==""?r.relatedlists[i-1].actions.rec_owner=l:delete r.relatedlists[i-1].actions.rec_owner),o==="upsert")if(l.target.checked){const E=(R=r.default.layouts[r.relatedlists[i-1].module][r.relatedlists[i-1].layout].unique)==null?void 0:R.map((W,G)=>({i:G,name:W}));r.relatedlists[i-1].actions.upsert={overwrite:!0,crmField:E}}else delete r.relatedlists[i-1].actions.upsert;n(k({},r))},p=()=>{y({show:!1})},j=i===0?s.module:s.relatedlists[i-1].module,T=()=>{var o,r;const l=[{title:"Zoho CRM Tags",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return(o=s.default.tags)!=null&&o[j]&&(l[0].childs=Object.values((r=s.default.tags)==null?void 0:r[j]).map(M=>({label:M,value:M}))),l[1].childs=u.map(M=>({label:M.name,value:`\${${M.key}}`})),l},N=(l,o)=>{const r=k({},s);i===0?(o==="list"&&(r.actions.upsert.crmField=l),o==="overwrite"&&(r.actions.upsert.overwrite=l)):(o==="list"&&(r.relatedlists[i-1].actions.upsert.crmField=l),o==="overwrite"&&(r.relatedlists[i-1].actions.upsert.overwrite=l)),n(k({},r))},b=()=>{var l;(l=s.default)!=null&&l.crmOwner||ce(d,s,n,g,t),y({show:"rec_owner"})},_=()=>{var l,o;(o=(l=s==null?void 0:s.default)==null?void 0:l.assignmentRules)!=null&&o[j]||ne(i,s,n,g,t),y({show:"assignment_rules"})},V=()=>{var l,o,r,M;if(i&&!((l=s.relatedlists[i-1].actions.upsert)!=null&&l.crmField)){const R=k({},s),E=(o=R.default.layouts[R.relatedlists[i-1].module][R.relatedlists[i-1].layout].unique)==null?void 0:o.map((W,G)=>({i:G,name:W}));R.relatedlists[i-1].actions.upsert={overwrite:!0,crmField:E},n(R)}else if(!((r=s.actions.upsert)!=null&&r.crmField)){const R=k({},s),E=(M=R.default.layouts[R.module][R.layout].unique)==null?void 0:M.map((W,G)=>({i:G,name:W}));R.actions.upsert={overwrite:!0,crmField:E},n(k({},R))}m(!0)};return e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[e.jsx(O,{onChange:l=>w(l,"workflow"),checked:i===0?"workflow"in s.actions:"workflow"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow"),subTitle:a("Trigger CRM workflows")}),e.jsx(O,{onChange:()=>y({show:"attachment"}),checked:i===0?"attachment"in s.actions:"attachment"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment"),subTitle:a("Add attachments or signatures from BitForm to CRM.")}),e.jsx(O,{onChange:l=>w(l,"approval"),checked:i===0?"approval"in s.actions:"approval"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval"),subTitle:a("Send entries to CRM approval list.")}),e.jsx(O,{onChange:l=>w(l,"blueprint"),checked:i===0?"blueprint"in s.actions:"blueprint"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Blueprint",title:a("Blueprint"),subTitle:a("Trigger CRM Blueprint")}),e.jsx(O,{onChange:l=>w(l,"gclid"),checked:i===0?"gclid"in s.actions:"gclid"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Capture_GCLID",title:a("Capture GCLID"),subTitle:a("Sends the click details of AdWords Ads to Zoho CRM.")}),e.jsx(Re,{action:V,children:e.jsx(O,{onChange:l=>w(l,"upsert"),checked:i===0?"upsert"in s.actions:"upsert"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:a("Upsert Records"),subTitle:a("The record is updated if it already exists else it is inserted as a new record.")})}),e.jsx(O,{onChange:_,checked:i===0?"assignment_rules"in s.actions:"assignment_rules"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Assignment_Rule",title:a("Assignment Rules"),subTitle:a("Trigger Assignment Rules in Zoho CRM.")}),e.jsx(O,{onChange:()=>y({show:"tag_rec"}),checked:i===0?"tag_rec"in s.actions:"tag_rec"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Tag_Records",title:a("Tag Records"),subTitle:a("Add a tag to records pushed to Zoho CRM.")}),e.jsx(O,{onChange:b,checked:i===0?"rec_owner"in s.actions:"rec_owner"in s.relatedlists[i-1].actions,className:"wdt-200 mt-4 mr-2",value:"Record_Owner",title:a("Record Owner"),subTitle:a("Add a owner to records pushed to Zoho CRM.")})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok"),show:v.show==="attachment",close:p,action:p,title:a("Select Attachment"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields")}),e.jsx(re,{defaultValue:i===0?s.actions.attachment:s.relatedlists[i-1].actions.attachment,className:"mt-2 w-9",onChange:l=>w(l,"attachment"),options:u.filter(l=>l.type==="file-up").map(l=>({label:l.name,value:l.key}))})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok"),show:v.show==="assignment_rules",close:p,action:p,title:a("Assignment Rules"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Assignment Rules")}),h?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:i===0?s.actions.assignment_rules:s.relatedlists[i-1].actions.assignment_rules,className:"btcd-paper-inp",onChange:l=>w(l.target.value,"assignment_rules"),children:[e.jsx("option",{value:"",children:a("Select Assignment Rule")}),(($=(U=s==null?void 0:s.default)==null?void 0:U.assignmentRules)==null?void 0:$[j])&&Object.keys(s.default.assignmentRules[j]).map(l=>e.jsx("option",{value:s.default.assignmentRules[j][l],children:l},l))]}),e.jsx("button",{onClick:()=>ne(i,s,n,g,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Assignment Rules")}'`},type:"button",disabled:h,children:"↻"})]})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok"),show:v.show==="tag_rec",close:p,action:p,title:a("Tag Records"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:a("Add a tag to records pushed to Zoho CRM")}),e.jsx("div",{className:"mt-2",children:a("Tag Name")}),h?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(re,{className:"msl-wrp-options",defaultValue:i===0?s.actions.tag_rec:s.relatedlists[i-1].actions.tag_rec,options:T(),onChange:l=>w(l,"tag_rec"),customValue:!0}),e.jsx("button",{onClick:()=>_e(i,d,s,n,g,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${a("Refresh CRM Tags")}'`},type:"button",disabled:h,children:"↻"})]})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok"),show:v.show==="rec_owner",close:p,action:p,title:a("Record Owner"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Owner Name")}),h?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:i===0?s.actions.rec_owner:s.relatedlists[i-1].actions.rec_owner,className:"btcd-paper-inp",onChange:l=>w(l.target.value,"rec_owner"),children:[e.jsx("option",{value:"",children:a("Select Owner")}),((Z=s.default)==null?void 0:Z.crmOwner)&&((L=Object.values(s.default.crmOwner))==null?void 0:L.map(l=>e.jsx("option",{value:l.id,children:l.full_name},l.id)))]}),e.jsx("button",{onClick:()=>ce(d,s,n,g,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Owners")}'`},type:"button",disabled:h,children:"↻"})]})]}),e.jsx(ge,{md:!0,show:x,setModal:m,title:a("Upsert Record"),children:e.jsx("div",{className:"o-a",children:i===0?((q=s==null?void 0:s.actions)==null?void 0:q.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion")}),e.jsx(te.ReactSortable,{list:(z=s.actions.upsert)==null?void 0:z.crmField,setList:l=>N(l,"list"),children:(A=(B=s.actions.upsert)==null?void 0:B.crmField)==null?void 0:A.map(l=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"mr-2",children:e.jsx(oe,{})}),l.name]},`cf-${l.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Bit Form while upserting a record?")}),e.jsxs("div",{children:[e.jsx(C,{onChange:()=>N(!0,"overwrite"),radio:!0,checked:(S=s.actions.upsert)==null?void 0:S.overwrite,name:"up-rec",title:a("Yes")}),e.jsx(C,{onChange:()=>N(!1,"overwrite"),radio:!0,checked:!((c=s.actions.upsert)!=null&&c.overwrite),name:"up-rec",title:a("No")})]})]}):((Y=(P=s==null?void 0:s.relatedlists[i-1])==null?void 0:P.actions)==null?void 0:Y.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion")}),e.jsx(te.ReactSortable,{list:(H=s.relatedlists[i-1].actions.upsert)==null?void 0:H.crmField,setList:l=>N(l,"list"),children:(J=(I=s.relatedlists[i-1].actions.upsert)==null?void 0:I.crmField)==null?void 0:J.map(l=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"mr-2",children:e.jsx(oe,{size:"30"})}),l.name]},`cf-${l.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Bit Form while upserting a record?")}),e.jsxs("div",{children:[e.jsx(C,{onChange:()=>N(!0,"overwrite"),radio:!0,checked:(K=s.relatedlists[i-1].actions.upsert)==null?void 0:K.overwrite,name:"up-rec",title:a("Yes")}),e.jsx(C,{onChange:()=>N(!1,"overwrite"),radio:!0,checked:!((F=s.relatedlists[i-1].actions.upsert)!=null&&F.overwrite),name:"up-rec",title:a("No")})]})]})})})]})}function ee({i:s,formFields:n,uploadFields:u,field:i,crmConf:d,setCrmConf:t,tab:x}){var v,y,w,p,j,T,N,b,_,V,U,$,Z,L,q,z,B,A,S;const m=x===0?d.module:(y=(v=d.relatedlists)==null?void 0:v[x-1])==null?void 0:y.module,h=x===0?d.layout:(p=(w=d.relatedlists)==null?void 0:w[x-1])==null?void 0:p.layout;let g;return u?g=i.zohoFormField===""||((b=(N=(T=(j=d.default.layouts)==null?void 0:j[m])==null?void 0:T[h])==null?void 0:N.requiredFileUploadFields)==null?void 0:b.indexOf(i.zohoFormField))===-1:g=i.zohoFormField===""||(($=(U=(V=(_=d.default.layouts)==null?void 0:_[m])==null?void 0:V[h])==null?void 0:U.required)==null?void 0:$.indexOf(i.zohoFormField))===-1,e.jsxs("div",{className:"flx mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:c=>de(c,s,d,t,u,x),children:[e.jsx("option",{value:"",children:a("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:u?n.map(c=>c.type==="file-up"&&e.jsx("option",{value:c.key,children:c.name},`ff-zhcrm-${c.key}`)):n.map(c=>c.type!=="file-up"&&e.jsx("option",{value:c.key,children:c.name},`ff-zhcrm-${c.key}`))}),!u&&e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"custom",children:a("Custom...")}),e.jsx("optgroup",{label:"General Smart Codes",children:(Z=Te)==null?void 0:Z.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))})]})]}),i.formField==="custom"&&e.jsx(Oe,{onChange:c=>be(c,s,d,t,x),label:a("Custom Value"),className:"mr-2",type:"text",value:i.customValue,placeholder:a("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!g,name:"zohoFormField",value:i.zohoFormField||"",onChange:c=>de(c,s,d,t,u,x),children:[e.jsx("option",{value:"",children:a("Select Field")}),u?((z=(q=(L=d.default.layouts)==null?void 0:L[m])==null?void 0:q[h])==null?void 0:z.fileUploadFields)&&Object.keys(d.default.layouts[m][h].fileUploadFields).filter(c=>c.required!==!0).map(c=>g?!d.default.layouts[m][h].fileUploadFields[c].required&&e.jsx("option",{value:c,children:d.default.layouts[m][h].fileUploadFields[c].display_label},c):e.jsx("option",{value:c,children:d.default.layouts[m][h].fileUploadFields[c].display_label},c)):((S=(A=(B=d.default.layouts)==null?void 0:B[m])==null?void 0:A[h])==null?void 0:S.fields)&&Object.keys(d.default.layouts[m][h].fields).filter(c=>c.required!==!0).map(c=>g?!d.default.layouts[m][h].fields[c].required&&e.jsx("option",{value:c,children:d.default.layouts[m][h].fields[c].display_label},c):e.jsx("option",{value:c,children:d.default.layouts[m][h].fields[c].display_label},c))]})]}),g&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>f(s,d,t,u,x),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Fe(s,d,t,u,x),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(we,{})})]})]})}function Ue({tab:s,settab:n,formID:u,formFields:i,crmConf:d,setCrmConf:t,handleInput:x,isLoading:m,setisLoading:h,setSnackbar:g}){var v,y,w,p,j,T,N;return Q.useEffect(()=>{ue(0,n)},[]),e.jsxs(e.Fragment,{children:[m&&e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Layout:")}),e.jsxs("select",{onChange:x,name:"layout",value:d.layout,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:a("Select Layout")}),((y=(v=d==null?void 0:d.default)==null?void 0:v.layouts)==null?void 0:y[d.module])&&Object.keys(d.default.layouts[d.module]).map(b=>e.jsx("option",{value:b,children:b},b))]}),e.jsx("button",{onClick:()=>he(s,u,d,t,h,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Layouts")}'`},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((T=(j=(p=(w=d.default)==null?void 0:w.layouts)==null?void 0:p[d.module])==null?void 0:j[d.layout])==null?void 0:T.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),d.field_map.map((b,_)=>e.jsx(ee,{i:_,field:b,crmConf:d,formFields:i,setCrmConf:t,tab:s,setSnackbar:g},`crm-m-${_+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>f(d.field_map.length,d,t,!1,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((N=d.default.layouts[d.module][d.layout])==null?void 0:N.fileUploadFields).length!==0&&e.jsxs("div",{className:"pos-rel",children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map File Upload Fields")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),d.upload_field_map.map((b,_)=>e.jsx(ee,{i:_,uploadFields:!0,field:b,crmConf:d,formFields:i,setCrmConf:t,tab:s,setSnackbar:g},`crm-m-${_+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>f(d.upload_field_map.length,d,t,!0,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(xe,{formID:u,formFields:i,crmConf:d,setCrmConf:t,tab:s,setSnackbar:g})]})]})}function $e({indx:s,tab:n,settab:u,formID:i,formFields:d,crmConf:t,setCrmConf:x,handleInput:m,isLoading:h,setisLoading:g,setSnackbar:v}){var y,w,p,j,T,N,b,_,V,U,$,Z,L,q,z,B,A,S,c,P,Y,H,I,J,K;return Q.useEffect(()=>{ue(s+1,u,i,t,x,g,v)},[]),e.jsxs(e.Fragment,{children:[h&&e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"pos-rel",children:[e.jsx("b",{className:"wdt-100 d-in-b",children:a("Related List:")}),e.jsxs("select",{onChange:m,name:"module",value:(w=(y=t==null?void 0:t.relatedlists)==null?void 0:y[n-1])==null?void 0:w.module,className:"btcd-paper-inp w-7",disabled:!t.module,children:[e.jsx("option",{value:"",children:a("Select Related Module")}),((j=(p=t==null?void 0:t.default)==null?void 0:p.relatedlists)==null?void 0:j[t.module])&&Object.values(t.default.relatedlists[t.module]).map(F=>e.jsx("option",{value:F.module,children:F.name},F.module))]}),e.jsx("button",{onClick:()=>ke(i,t,x,g,v),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Related Lists")}'`},type:"button",disabled:h,children:"↻"}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Layout:")}),e.jsxs("select",{onChange:m,name:"layout",value:(N=(T=t==null?void 0:t.relatedlists)==null?void 0:T[n-1])==null?void 0:N.layout,className:"btcd-paper-inp w-7",disabled:!((_=(b=t==null?void 0:t.relatedlists)==null?void 0:b[n-1])!=null&&_.module),children:[e.jsx("option",{value:"",children:a("Select Layout")}),((Z=(V=t==null?void 0:t.default)==null?void 0:V.layouts)==null?void 0:Z[($=(U=t.relatedlists)==null?void 0:U[n-1])==null?void 0:$.module])&&Object.keys(t.default.layouts[t.relatedlists[n-1].module]).map(F=>e.jsx("option",{value:F,children:F},F))]}),e.jsx("button",{onClick:()=>he(n,i,t,x,g,v),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Layouts"'},type:"button",disabled:h,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((P=(c=(B=(L=t.default)==null?void 0:L.layouts)==null?void 0:B[(z=(q=t==null?void 0:t.relatedlists)==null?void 0:q[n-1])==null?void 0:z.module])==null?void 0:c[(S=(A=t==null?void 0:t.relatedlists)==null?void 0:A[n-1])==null?void 0:S.layout])==null?void 0:P.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),(I=(H=(Y=t.relatedlists)==null?void 0:Y[n-1])==null?void 0:H.field_map)==null?void 0:I.map((F,l)=>e.jsx(ee,{i:l,field:F,crmConf:t,formFields:d,setCrmConf:x,tab:n,setSnackbar:v},`crm-m-${l+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>f(t.relatedlists[n-1].field_map.length,t,x,!1,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),((K=(J=t.default)==null?void 0:J.layouts[t.relatedlists[n-1].module])==null?void 0:K[t.relatedlists[n-1].layout])&&Object.keys(t.default.layouts[t.relatedlists[n-1].module][t.relatedlists[n-1].layout].fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("File Upload Field Map")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),t.relatedlists[n-1].upload_field_map.map((F,l)=>e.jsx(ee,{i:l,uploadFields:1,field:F,crmConf:t,formFields:d,setCrmConf:x,tab:n,setSnackbar:v},`crm-m-${l+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>f(t.relatedlists[n-1].upload_field_map.length,t,x,!0,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(xe,{formFields:d,crmConf:t,setCrmConf:x,tab:n,formID:i,setSnackbar:v})]})]})}function Ge({tab:s,settab:n,formID:u,formFields:i,handleInput:d,crmConf:t,setCrmConf:x,isLoading:m,setisLoading:h,setSnackbar:g}){var w;const v=()=>{if(t.relatedlists.length<3){const p=k({},t);p.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],layout:"",module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),x(k({},p))}},y=p=>{const j=k({},t);j.relatedlists.splice(p,1),j.relatedlists.length||n(0),x(k({},j))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Module:")}),e.jsxs("select",{onChange:d,name:"module",value:t.module,className:"btcd-paper-inp w-7",disabled:s,children:[e.jsx("option",{value:"",children:a("Select Module")}),((w=t==null?void 0:t.default)==null?void 0:w.modules)&&Object.keys(t.default.modules).map(p=>e.jsx("option",{value:p,children:t.default.modules[p].plural_label},p))]}),s===0&&e.jsx("button",{onClick:()=>Me(u,t,x,h,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Modules")}'`},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs(ye,{selectedTabClassName:"s-t-l-active",children:[e.jsxs(Ne,{className:"flx mt-2 mb-0",children:[e.jsx(ie,{className:"btcd-s-tab-link",children:a("New Record")}),(t==null?void 0:t.relatedlists)&&t.relatedlists.map((p,j)=>e.jsxs(e.Fragment,{children:[e.jsxs(ie,{className:"btcd-s-tab-link",children:[a("Related List #"),j+1]},`t-${j*3}`),e.jsx("button",{onClick:()=>y(j),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:e.jsx(ve,{size:"14"})})]})),t.relatedlists.length<3&&e.jsx("button",{onClick:v,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Add More Related List")}'`},type:"button",children:"+"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(ae,{children:e.jsx(Ue,{tab:s,settab:n,formID:u,formFields:i,crmConf:t,setCrmConf:x,handleInput:d,isLoading:m,setisLoading:h,setSnackbar:g})}),(t==null?void 0:t.relatedlists)&&t.relatedlists.map((p,j)=>e.jsx(ae,{children:e.jsx($e,{indx:j,tab:s,settab:n,formID:u,formFields:i,crmConf:t,setCrmConf:x,handleInput:d,isLoading:m,setisLoading:h,setSnackbar:g})},`p-${j+2.4}`))]})}),e.jsx("br",{})]})}export{Ge as Z};

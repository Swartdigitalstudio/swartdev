var pe=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var R=(l,r,o)=>r in l?pe(l,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[r]=o,F=(l,r)=>{for(var o in r||(r={}))ge.call(r,o)&&R(l,o,r[o]);if(q)for(var o of q(r))ue.call(r,o)&&R(l,o,r[o]);return l},T=(l,r)=>he(l,me(r));import{o as fe,P as xe,j as e,a as be,e as je,r as L,h as Oe,_ as h,I as N,q as m,E as Se,w as we,B as ye,aF as ve,M as Ce,l as u,aM as f,bg as Le,bh as Ne,a3 as $e}from"./main-398.js";import{F as n}from"./bf-612-139.js";import{C as ke}from"./bf-288-71.js";import{b as j}from"./bf-233-100.js";import{F as Fe,a as Me,b as c,S as Pe,A as _e,c as Ie,H as Ae,R as Be,E as H,d as De}from"./bf-417-87.js";import{F as Ee}from"./bf-315-292.js";import{F as qe}from"./bf-778-293.js";import{O as Re}from"./bf-491-294.js";import{P as Te}from"./bf-432-295.js";import{U as He}from"./bf-344-297.js";import{E as ze}from"./bf-910-296.js";import{S as M}from"./bf-760-79.js";import"./bf-782-101.js";import"./bf-491-73.js";import"./bf-235-102.js";/* empty css          */import"./bf-827-74.js";import"./bf-314-99.js";import"./bf-940-163.js";import"./bf-887-104.js";import"./bf-404-116.js";import"./bf-20-138.js";import"./bf-354-65.js";import"./bf-989-109.js";import"./bf-640-289.js";import"./bf-952-107.js";import"./bf-864-106.js";import"./bf-788-137.js";import"./bf-138-72.js";import"./bf-864-103.js";function wt(){const{fieldKey:l}=fe(),r=xe(Ne);if(!l)return e.jsx(e.Fragment,{children:"No field exist with this field key"});const{css:o}=be(),[p,g]=je($e),[_,I]=L.useState(!1),[K,A]=L.useState(!1),[v,U]=L.useState(0),s=Oe(p[l]),x=s.adminLbl||"",V=()=>{I(!0)},{optionsList:O}=s,G=O.length,{selectedOptImage:J,selectedOptClearable:Q,searchClearable:W,optionIcon:B,showSearchPh:$,searchPlaceholder:X,multipleSelect:C,allowCustomOption:Y,closeOnSelect:Z,activeList:k,showChip:ee,maxHeight:Ke}=s.config,{mn:w,mx:y}=s,S=(t,i)=>{s.config[i]=t;const a=u(p,d=>{d[l]=s});g(a),f({event:`${P[i]} ${t?"On":"Off"}: ${s.lbl||x||l}`,type:`${i}_change`,state:{fields:a,fldKey:l}})},te=(t,i)=>{s.config[i]=t,s.config.showChip=t,s.config.closeOnSelect=!t;const a=u(p,d=>{d[l]=s});g(a),f({event:`${P[i]} ${t?"On":"Off"}: ${s.lbl||x||l}`,type:`${i}_change`,state:{fields:a,fldKey:l}})},se=t=>{t.target.checked?(s.config.searchPlaceholder="Search Options...",s.config.showSearchPh=!0):(s.config.searchPlaceholder="",s.config.showSearchPh=!1);const i=t.target.checked?"Show":"Hide",a=u(p,d=>{d[l]=s});g(a),f({event:`${i} Search Placeholder: ${s.lbl||x||l}`,type:`${i.toLowerCase()}_placeholder`,state:{fields:a,fldKey:l}})};function ie(t){s.config.searchPlaceholder=t.target.value;const i=u(p,a=>{a[l]=s});g(i),f({event:`Search Placeholder updated: ${s.lbl||x||l}`,type:"change_placeholder",state:{fields:i,fldKey:l}})}const le=({target:t},i)=>{s.config.activeList=i;const a=u(p,d=>{const b=s.optionsList[i][Object.keys(s.optionsList[i])[0]].find(re=>re.check);s.config.defaultValue=b?b.val||b.lbl:"",d[l]=s});g(a),f({event:`Change Active List: ${s.lbl||x||l}`,type:"change_active_list",state:{fields:a,fldKey:l}})},ae=t=>{const i=u(p,a=>{if(a[l].optionsList[v][Object.keys(s.optionsList[v])[0]]=t,v===k){const d=t.find(b=>b.check);a[l].config.defaultValue=d?d.val||d.lbl:""}});g(i),f({event:`Modify Option List: ${s.lbl||x||l}`,type:"modify_options_list",state:{fields:i,fldKey:l}})},oe=()=>{if(!N){r(F({show:!0},Le.optionList));return}let t=`List-${Object.keys(O).length+1}`;for(;D(t);)t=`${t}1`;s.optionsList=[...O,{[t]:[{lbl:"Option 1"},{lbl:"Option 2"},{lbl:"Option 3"}]}];const i=u(p,a=>{a[l]=s});g(i),f({event:`Add New List: ${s.lbl||x||l}`,type:"add_new_list",state:{fields:i,fldKey:l}})},D=t=>{const i=O.length;for(let a=0;a<i;a+=1)if(Object.keys(O[a])[0]===t)return!0;return!1},ne=t=>{s.optionsList.splice(t,1);const i=u(p,a=>{a[l]=s});g(i),f({event:`Remove List: ${s.lbl||x||l}`,type:"remove_list",state:{fields:i,fldKey:l}})},ce=(t,i)=>{const{target:a}=t;if(D(a.value))t.preventDefault(),A(i);else{s.optionsList[i]={[a.value]:s.optionsList[i][a.defaultValue]};const d=u(p,b=>{b[l]=s});g(d),f({event:`List Name Change: ${s.lbl||x||l}`,type:"list_name_change",state:{fields:d,fldKey:l}}),A(!1)}};function E(t,i){const a=isNaN(i)?"":Number(i);if(a>=0){!s.err.mn&&t==="mn"&&(s.err.mn={show:!0}),!s.err.mx&&t==="mx"&&(s.err.mx={show:!0}),t==="mx"&&w&&a<w&&w?(s.mn=a,s.err.mn.dflt=`Minimum ${a} Option Required`):t==="mn"&&a>y&&y&&(s.mx=a,s.err.mx.dflt=`Maximum ${a} Option can select.`),t==="mn"?s.err.mn.dflt=`Minimum ${a} Option Required`:t==="mx"&&(s.err.mx.dflt=`Maximum ${a} Option can select.`),s[t]=a;const d=u(p,b=>{b[l]=s});g(d),f({event:`${P[t]} '${String(a||"Off").replace("true","On")}': ${s.lbl||l}`,type:`${t}_changed`,state:{fields:d,fldKey:l}})}}const de=t=>{if(!N)return;t.target.checked?s.valid.disableOnMax=!0:delete s.valid.disableOnMax;const i=u(p,a=>{a[l]=s});g(i),f({event:`Disable on max selected ${t.target.checked?"on":"off"}: ${s.lbl||x||l}`,type:"set_disable_on_max",state:{fields:i,fldKey:l}})};return window.selectedFieldData=s,e.jsxs(e.Fragment,{children:[e.jsx(Fe,{title:"Field Settings",subtitle:s.typ,fieldKey:l}),e.jsx(Me,{}),e.jsx(c,{}),e.jsx(Pe,{}),e.jsx(c,{}),e.jsx(_e,{}),e.jsx(c,{}),e.jsx(Ie,{}),e.jsx(c,{}),e.jsx(Te,{}),e.jsx(c,{}),e.jsx(Ae,{}),e.jsx(c,{}),e.jsx(Be,{}),e.jsx(c,{}),e.jsx(qe,{}),e.jsx(c,{}),e.jsx(Ee,{}),e.jsx(c,{}),e.jsx(M,T(F({id:"srch-plchldr-stng",title:h("Search Placeholder"),className:o(n.fieldSection,n.hover_tip),switching:!0,tip:"By disabling this option, the field search placeholder will be remove",tipProps:{width:250,icnSize:17},toggleAction:se,toggleChecked:$,open:$},N&&{disable:!$}),{isPro:!0,proProperty:"searchPlaceholder",children:e.jsx("div",{className:o(n.placeholder),children:e.jsx("input",{"data-testid":"srch-plchldr-stng-inp","aria-label":"Placeholer for Country Search",placeholder:"Type Placeholder here...",className:o(n.input),type:"text",value:X,onChange:ie})})})),e.jsx(c,{}),e.jsx(j,{id:"shw-slctd-img-stng",className:o(n.fieldSection,n.hover_tip,n.singleOption),title:h("Show Selected Option Image"),action:t=>S(t.target.checked,"selectedOptImage"),isChecked:J,tip:"By disabling this option, the field show selected option image will be hidden",isPro:!0,proProperty:"selectedOptImage"}),e.jsx(c,{}),e.jsx(j,{id:"slctd-clrbl-stng",className:o(n.fieldSection,n.singleOption),title:h("Selected Option Clearable:"),action:t=>S(t.target.checked,"selectedOptClearable"),isChecked:Q,tip:"By disabling this option, the field selected option clearable will be hidden"}),e.jsx(c,{}),e.jsx(j,{id:"srch-clrbl-stng",className:o(n.fieldSection,n.singleOption),title:h("Search Clearable:"),action:t=>S(t.target.checked,"searchClearable"),isChecked:W,tip:"By disabling this option, the field search clearable will be hidden"}),e.jsx(c,{}),e.jsx(j,{id:"opt-icn-stng",className:o(n.fieldSection,n.singleOption),title:h("Option Icon/Image:"),action:t=>S(t.target.checked,"optionIcon"),isChecked:B,tip:"By disabling this option, the field option icon will be hidden",isPro:!0,proProperty:"optionIcon"}),e.jsx(c,{}),e.jsx(j,{id:"alw-cstm-opt-stng",className:o(n.fieldSection,n.singleOption),title:h("Allow Custom Option:"),action:t=>S(t.target.checked,"allowCustomOption"),isChecked:Y,tip:"By disabling this option, the field allow custom option will be hidden"}),e.jsx(c,{}),e.jsx(M,{id:"alw-mltpl-stng",title:h("Allow Multiple Select:"),toggleAction:t=>te(t.target.checked,"multipleSelect"),toggleChecked:C,className:o(n.fieldSection,n.hover_tip),switching:!0,tip:"By enabling this feature, you wil enable to select Multiple Options",tipProps:{width:200,icnSize:17},open:C,disable:!C,isPro:!0,allowToggle:!0,proProperty:"minMaxOpt",children:e.jsxs("div",{className:o(m.ml1,m.mr1),children:[e.jsxs("div",{className:o(m.flxc),children:[e.jsx("span",{children:"Minimum Option"}),e.jsx("input",{"data-testid":"alw-mltpl-min-inp",className:o(n.input,m.w5,m.mt1),type:"number",value:w,onChange:t=>E("mn",t.target.value)})]}),!!w&&e.jsx(H,{className:o(m.mt0),id:"min-fil-err-msg",type:"mn",defaultMsg:`Minimum ${w} Option Required`,allowIcons:!1}),e.jsxs("div",{className:o(m.flxc,m.mt2),children:[e.jsx("span",{children:"Maximum Option"}),e.jsx("input",{"data-testid":"alw-mltpl-max-inp",className:o(n.input,m.w5,m.mt1),type:"number",value:y,onChange:t=>E("mx",t.target.value)})]}),!!y&&e.jsxs(e.Fragment,{children:[e.jsx(H,{className:o(m.mt0),id:"max-fil-err-msg",type:"mx",defaultMsg:`Maximum ${y} Option can select`,allowIcons:!1}),e.jsx(j,{id:"mxmm-slctd",title:h("Disable if maximum selected:"),action:de,isChecked:s.valid.disableOnMax,disabled:!N,className:"mt-3 mb-2"})]})]})}),C&&e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(j,{id:"show-chip",className:o(n.fieldSection,n.singleOption),title:h("Show Selected Option Chip:"),action:t=>S(t.target.checked,"showChip"),isChecked:ee,tip:"Show selected options as chip (clearable). If disabled, count of selected options will be shown as text."})]}),e.jsx(c,{}),e.jsx(j,{id:"cls-on-slct-stng",className:o(n.fieldSection,n.singleOption),title:h("Close On Select:"),action:t=>S(t.target.checked,"closeOnSelect"),isChecked:Z,tip:"By disabling this option, the field close on select will be hidden"}),e.jsx(c,{}),e.jsx(De,{}),e.jsx(c,{}),e.jsx(Re,{}),e.jsx(c,{}),e.jsx(He,{type:"entryUnique",title:"Validate as Entry Unique",tipTitle:"Enabling this option will check from the entry database whether its value is duplicate.",className:o(n.fieldSection,n.hover_tip),isUnique:"show"}),e.jsx(c,{}),e.jsx(M,{id:"lst-n-opt",title:"Lists & Options",className:o(n.fieldSection),open:!0,children:e.jsxs("div",{className:o({p:"5px 10px"}),children:[O.map((t,i)=>{const a=Object.keys(t);return e.jsxs(L.Fragment,{children:[e.jsxs("div",{className:o(m.flxcb),children:[e.jsx("input",{"data-testid":`lst-name-inp-${i}`,type:"text",name:"",id:"",value:a,className:o(n.input,{mr:10,my:5}),onChange:d=>ce(d,i)}),e.jsx(ke,{id:`lst-opt-${i}`,radio:!0,name:"option-list",className:o({p:0}),onChange:d=>le(d,i),checked:i===k,value:i,tip:"Select this list as active"}),e.jsx("button",{"data-testid":`lst-opt-edt-btn-${i}`,type:"button",className:o(z.delBtn),title:"Edit List Options",onClick:()=>{U(i),V()},children:e.jsx(Se,{size:19})}),G>1&&i!==k&&e.jsx("button",{"data-testid":`lst-opt-del-btn-${i}`,type:"button",className:o(z.delBtn),onClick:()=>ne(i),title:"Delete List",children:e.jsx(we,{size:19})})]}),K===i&&e.jsx("span",{className:o({cr:"red",ml:5}),children:"Duplicate List Name Not Allowed"})]},`list-name-${i+1}`)}),e.jsxs(ye,{dataTestId:"edt-opt-stng",variant:"primary-outline",size:"sm",className:o({mt:10}),onClick:oe,children:[h("Add Options List"),e.jsx("span",{className:o({ml:3,mt:3,tm:"rotate(45deg)"}),children:e.jsx(ve,{size:"13",stroke:"3"})})]})]})}),e.jsx(c,{}),e.jsx(Ce,{md:!0,autoHeight:!0,show:_,setModal:()=>I(!1),className:"o-v ",title:h("Options"),width:"730px",children:e.jsx("div",{className:"pos-rel",children:e.jsx(ze,{optionMdl:_,options:Object.values(O[v]||{})[0],setOptions:t=>ae(t),lblKey:"lbl",valKey:"val",imgKey:"img",type:"radio",hasGroup:!0,showUpload:B})})})]})}const z={delBtn:{se:25,flx:"center",b:"none",p:3,mr:1,tn:".2s all",curp:1,brs:"50%",bd:"none",":hover":{bd:"var(--b-20-93)",cr:"var(--blue)"}}},P={selectedOptImage:"Selected Option Image",selectedOptClearable:"Selected Option Clearable",searchClearable:"Search Clearable",optionIcon:"Option Icon",allowCustomOption:"Allow Custom Option",multipleSelect:"Multiple Select",closeOnSelect:"Close On Select"};export{wt as default};

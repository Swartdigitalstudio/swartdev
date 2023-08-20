import{o as Y,e as L,a3 as Z,h as D,u as ee,bM as ue,a as te,j as t,q as c,l as m,r as A,aw as f,_ as T,M as be,ak as pe,ao as xe,aM as g,cB as ge,bT as he,cA as C,cC as fe,cz as E}from"./main-398.js";/* empty css          */import{B as O}from"./bf-849-115.js";import{D as $}from"./bf-790-141.js";import{S as V,b as q,d as U,e as G}from"./bf-760-79.js";import{F as y,A as J}from"./bf-612-139.js";import{D as Q}from"./bf-354-65.js";import{a as z}from"./bf-233-100.js";import{F as je,e as w,b as j,A as ve,c as ye,I as Ie}from"./bf-417-87.js";import{S as Se}from"./bf-404-116.js";import"./bf-491-73.js";import"./bf-827-74.js";import"./bf-314-99.js";import"./bf-782-101.js";import"./bf-235-102.js";import"./bf-864-103.js";import"./bf-940-163.js";import"./bf-887-104.js";import"./bf-20-138.js";function W({fieldName:i}){const{fieldKey:l}=Y(),[u,h]=L(Z),e=D(u[l]),d=ee(ue),{css:b}=te(),p=x=>{e[i]+=`\${${x}}`,h(I=>m(I,v=>{v[l]=e}))};return d.filter(x=>!x.type.match(/^(file-up|recaptcha|title)$/)),t.jsx("div",{className:b(H.main),children:t.jsxs("ul",{className:b(H.ul,c.mb0),children:[t.jsx("h4",{style:{margin:0},children:"Smart Tags"}),Se.map((x,I)=>t.jsx("li",{className:b(H.li),children:t.jsx("button",{type:"button",className:`${b(H.button)} btnHover`,title:x.label,onClick:()=>p(x.name),children:x.label})},`smart-tag-${I*2}`))]})})}const H={main:{h:300,ow:"scroll"},ul:{mt:10,pb:0},li:{mb:0,mt:5,ml:5},button:{fw:"normal",dy:"block",w:"100%",ta:"left",b:0,bd:"none",p:3,curp:1,"&:hover":{bd:"var(--white-0-95)",cr:"var(--black-0)",brs:8},fs:11}};function we(){var R,k;const{css:i}=te(),{fieldKey:l}=Y(),[u,h]=L(Z),e=D(u[l]),[d,b]=L(pe),p=ee(xe),x=(R=d==null?void 0:d.fields)==null?void 0:R[l],{classes:I}=x,v=`.${l}-fld-wrp`,[P,F]=A.useState(!1),[_,se]=A.useState(""),{"align-items":le,"flex-direction":ie}=I[v]||"",ne=((k=d.fields[l].classes[`.${l}-sub-titl`])==null?void 0:k["justify-content"])||"start",M=({target:{value:s,name:n}})=>{e[n]=s;const o=m(u,r=>{r[l]=e});h(o),g({event:`${n} Modified to ${s}`,type:`${n}_changes`,state:{fldKey:l,fields:o}})},S=s=>{ge(d,l,he[s])||C(p,s),fe(s,l),se(s),F(!0),f(l)},N=s=>{if(e[s]){delete e[s];const n=m(u,r=>{r[l]=e});h(n);const o=m(d,r=>{s==="prefixIcn"&&delete r.fields[p].classes[`.${p}-fld`]["padding-left"],s==="suffixIcn"&&delete r.fields[p].classes[`.${p}-fld`]["padding-right"]});b(o),g({event:`${E[s]} Icon Deleted`,type:`delete_${s}`,state:{fldKey:l,fields:n,styles:o}})}},oe=s=>{if(e[s]){delete e[s];const n=m(u,o=>{o[l]=e});h(n),f(l),g({event:`${E[s]} Icon Deleted`,type:`delete_${s}`,state:{fldKey:l,fields:n}})}},ce=({target:{checked:s}})=>{s?(e.title="Title",e.titleHide=!1,C(p,"title")):(delete e.title,e.titleHide=!0);const n=s?"on":"off",o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Title ${n}:  ${e.lbl||l}`,type:"title_toggle",state:{fields:o,fldKey:l}})},ae=({target:{checked:s}})=>{s?(e.subtitle="Subtitle",e.subtitleHide=!1,C(p,"subTitl")):(delete e.subtitle,e.subtitleHide=!0);const n=s?"on":"off",o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Subtitle ${n}:  ${e.lbl||l}`,type:"subtitle_toggle",state:{fields:o,fldKey:l}})},K=(s,n)=>{s?e[n]=s:delete e[n];const o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Subtitle ${s}:  ${e.lbl||l}`,type:"subtitle_change",state:{fields:o,fldKey:l}})},re=(s,n)=>{const o=m(d,r=>{r.fields[l].classes[v][n]=s});b(o),f(l),g({event:`Direction Change to ${s}:  ${e.lbl||l}`,type:"direction_changes",state:{styles:o,fldKey:l}})},de=(s,n)=>{let o="left";s==="center"?o="center":s==="flex-end"&&(o="right");const r=m(d,B=>{B.fields[l].classes[v][n]=s,B.fields[l].classes[v]["justify-content"]=o});b(r),g({event:`Title Alignment Change to ${s}:  ${e.lbl||l}`,type:"position_changes",state:{styles:r,fldKey:l}})},me=s=>{const n=m(d,o=>{s==="start"?delete o.fields[l].classes[`.${l}-sub-titl`]["justify-content"]:o.fields[l].classes[`.${l}-sub-titl`]["justify-content"]=s});b(n),g({event:`Subtitle Alignment Change to ${s}:  ${e.lbl||l}`,type:"position_changes",state:{styles:n,fldKey:l}})};return A.useEffect(()=>{(e!=null&&e.logo||e!=null&&e.titlePreIcn||e!=null&&e.titleSufIcn||e!=null&&e.subTitlPreIcn||e!=null&&e.subTitlSufIcn)&&f(l)},[P]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"",children:[t.jsx(je,{title:"Field Settings",subtitle:e.typ,fieldKey:l}),t.jsxs(V,{id:"titl-stng",title:T("Title"),className:i(y.fieldSection,y.hover_tip),switching:!0,tip:"By disabling this option, the field title will be hidden",tipProps:{width:250,icnSize:17},toggleAction:ce,toggleChecked:!(e!=null&&e.titleHide),open:!(e!=null&&e.titleHide),disable:e==null?void 0:e.titleHide,children:[t.jsxs("div",{className:i(y.placeholder,c.mt1,c.ml1),children:[t.jsxs("div",{className:i(a.title),children:[t.jsx("label",{className:i(c.fw500),children:"Text"}),t.jsxs(Q,{children:[t.jsx("button",{"data-testid":"titl-mor-opt-btn","data-close":!0,type:"button",className:i(a.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:T("More Options"),children:t.jsx(O,{size:"16"})}),t.jsx(W,{fieldName:"title"})]})]}),t.jsx(J,{id:"titl",placeholder:"Type title text here...",name:"title",value:e==null?void 0:e.title,changeAction:M})]}),t.jsxs("div",{className:i(c.flxcb,c.mt1),children:[t.jsx("span",{className:i(c.fw500,c.ml2),children:"HTML Tag"}),t.jsx("div",{className:i(c.flxcb,c.mr2,c.w3),children:t.jsx("select",{"data-testid":"titl-tag-slct",className:i(a.select),value:e==null?void 0:e.titleTag,onChange:s=>K(s.target.value,"titleTag"),children:X.map((s,n)=>t.jsx("option",{value:s.value,children:s.title},`opt-title-${n*4}`))})})]}),t.jsx(w,{label:"Leading Icon",iconSrc:e==null?void 0:e.titlePreIcn,styleRoute:"title-pre-i",setIcon:()=>S("titlePreIcn"),removeIcon:()=>N("titlePreIcn")}),t.jsx(w,{label:"Trailing Icon",iconSrc:e==null?void 0:e.titleSufIcn,styleRoute:"title-suf-i",setIcon:()=>S("titleSufIcn"),removeIcon:()=>N("titleSufIcn")})]}),t.jsx(j,{}),t.jsxs(V,{id:"sub-titl-stng",title:T("Subtitle"),className:i(y.fieldSection,y.hover_tip),switching:!0,tip:"By disabling this option, the field subtitle will be hidden",tipProps:{width:250,icnSize:17},toggleAction:ae,toggleChecked:!(e!=null&&e.subtitleHide),open:e==null?void 0:e.subtitleHide,disable:e==null?void 0:e.subtitleHide,children:[t.jsxs("div",{className:i(y.placeholder,c.mt1,c.ml1),children:[t.jsxs("div",{className:i(a.title),children:[t.jsx("label",{className:i(c.fw500),children:"Text"}),t.jsxs(Q,{children:[t.jsx("button",{"data-testid":"sub-titl-mor-opt-btn","data-close":!0,type:"button",className:i(a.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:T("Fields"),children:t.jsx(O,{size:"16"})}),t.jsx(W,{fieldName:"subtitle"})]})]}),t.jsx(J,{id:"sub-titl-stng",placeholder:"Type subtitle here...",name:"subtitle",value:e==null?void 0:e.subtitle,changeAction:M})]}),t.jsxs("div",{className:i(c.flxcb,c.mt1),children:[t.jsx("span",{className:i(c.fw500,c.ml2),children:"HTML Tag"}),t.jsx("div",{className:i(c.flxcb,c.mr2,c.w3),children:t.jsx("select",{"data-testid":"sub-titl-tag",className:i(a.select),value:e==null?void 0:e.subTitleTag,onChange:s=>K(s.target.value,"subTitleTag"),children:X.map((s,n)=>t.jsx("option",{value:s.value,children:s.title},`title-opt-${n*4}`))})})]}),t.jsx(w,{label:"Leading Icon",iconSrc:e==null?void 0:e.subTitlPreIcn,styleRoute:"sub-titl-pre-i",setIcon:()=>S("subTitlPreIcn"),removeIcon:()=>N("subTitlPreIcn")}),t.jsx(w,{label:"Trailing Icon",iconSrc:e==null?void 0:e.subTitlSufIcn,styleRoute:"sub-titl-suf-i",setIcon:()=>S("subTitlSufIcn"),removeIcon:()=>N("subTitlSufIcn")}),t.jsxs("div",{className:i(a.main,c.ml2),children:[t.jsx("span",{className:i(c.fw500),children:"Alignment"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx(q,{size:"17"}),label:"start",tip:"Left"},{icn:t.jsx(U,{size:"17"}),label:"center",tip:"Center"},{icn:t.jsx(G,{size:"17"}),label:"end",tip:"Right"}],onChange:me,defaultActive:ne})]})]}),t.jsx(j,{}),t.jsx(ve,{}),t.jsx(j,{}),t.jsx(ye,{}),t.jsx(j,{}),t.jsx(w,{classNames:i(a.section),labelClass:i(a.logoLabel),label:"Logo/Icon",iconSrc:e==null?void 0:e.logo,styleRoute:"logo",setIcon:()=>S("logo"),removeIcon:()=>oe("logo")}),t.jsx(j,{}),t.jsxs("div",{className:i(a.section,a.main),children:[t.jsx("span",{className:i(a.label),children:"Label Alignment"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx(q,{size:"17"}),label:"flex-start",tip:"Left"},{icn:t.jsx(U,{size:"17"}),label:"center",tip:"Center"},{icn:t.jsx(G,{size:"17"}),label:"flex-end",tip:"Right"}],onChange:s=>de(s,"align-items"),defaultActive:le})]}),t.jsx(j,{}),t.jsxs("div",{className:i(a.section,a.main),children:[t.jsx("span",{className:i(a.label),children:"Layout Direction"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx($,{size:"17",dir:"down"}),label:"column",tip:"Vertical"},{icn:t.jsx($,{size:"17",dir:"up"}),label:"column-reverse",tip:"Vertical  Reverse"},{icn:t.jsx($,{size:"17",dir:"right"}),label:"row",tip:"Horizontal"},{icn:t.jsx($,{size:"17",dir:"left"}),label:"row-reverse",tip:"Horizontal Reverse"}],onChange:s=>re(s,"flex-direction"),defaultActive:ie})]}),t.jsx(j,{})]}),t.jsxs(be,{md:!0,autoHeight:!0,show:P,setModal:F,className:"o-v",title:"Image",children:[t.jsx("div",{className:"pos-rel"}),t.jsx(Ie,{iconType:_,selected:_==="logo"?"Upload Image":"Icons",uploadLbl:"Upload Image",setModal:F,addPaddingOnSelect:!1})]})]})}const X=[{value:"h1",title:"H1"},{value:"h2",title:"H2"},{value:"h3",title:"H3"},{value:"h4",title:"H4"},{value:"h5",title:"H5"},{value:"h6",title:"H6"},{value:"div",title:"Div"},{value:"span",title:"Span"},{value:"p",title:"p"}],a={section:{my:5,mx:15},logoLabel:{flx:"center-between",ml:"0px !important",my:5,brs:8,fw:"600 !important"},main:{flx:"center-between"},label:{fw:600},segment:{mr:7,mt:4},title:{dy:"flex",jc:"space-between",mx:5,mt:5},formfield:{brs:8,w:150,dy:"block"},btn:{b:0,brs:5,curp:1,flx:"center-between"},spaceControl:{m:"9px 10px 0px 7px"},select:{fs:14,fw:500,w:"96%",bd:"var(--b-79-96) !important",oe:"none !important",ae:"auto !important",mx:"auto",dy:"block",lh:"2 !important",px:8,p:"0 !important",mb:3,bs:"none !important",b:"none !important",brs:"8px !important","::placeholder":{cr:"hsl(215deg 16% 57%)",fs:12},":focus":{bs:"0 0 0 2px var(--b-50) !important"}}};var qe=A.memo(we);export{qe as default};
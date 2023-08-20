var de=Object.defineProperty,ce=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var E=(a,d,m)=>d in a?de(a,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):a[d]=m,b=(a,d)=>{for(var m in d||(d={}))re.call(d,m)&&E(a,m,d[m]);if(L)for(var m of L(d))pe.call(d,m)&&E(a,m,d[m]);return a},y=(a,d)=>ce(a,me(d));import{o as xe,e as ue,u as R,a as ge,r as q,h as fe,j as e,_ as p,q as o,I,M as he,l as S,aM as w,cA as H,cE as Se,cB as we,cC as Fe,a3 as je,ao as be,ak as ye,bT as ve,cz as Me}from"./main-398.js";import{F as n}from"./bf-612-139.js";import{C as N}from"./bf-940-163.js";import{D as ze}from"./bf-537-111.js";import{F as Ie,a as Ne,b as c,S as $e,A as Ce,c as Pe,e as D,H as Te,R as ke,d as _e,E as $,I as Ae}from"./bf-417-87.js";import{F as Be}from"./bf-315-292.js";import{F as Le}from"./bf-778-293.js";import{S as h}from"./bf-760-79.js";import{S as Ee}from"./bf-233-100.js";/* empty css          */import"./bf-989-109.js";import"./bf-827-74.js";import"./bf-314-99.js";import"./bf-491-73.js";import"./bf-782-101.js";import"./bf-235-102.js";import"./bf-887-104.js";import"./bf-404-116.js";import"./bf-20-138.js";import"./bf-354-65.js";import"./bf-864-103.js";function ci(){const{fieldKey:a}=xe(),[d,m]=ue(je),C=R(be),U=R(ye),{css:l}=ge(),[V,v]=q.useState(!1),[K,G]=q.useState(""),t=fe(d[a]),{multiple:F,allowMaxSize:M,showMaxSize:z,maxSizeLabel:W,maxSize:Z,sizeUnit:J,isItTotalMax:Q,showSelectStatus:P,fileSelectStatus:X,allowedFileType:T,showFileList:j,fileExistMsg:Y,showFilePreview:ee,showFileSize:ie,duplicateAllow:qe}=t.config;let{minFile:u,maxFile:g}=t.config;u=isNaN(u)?0:Number(u),g=isNaN(g)?0:Number(g);const{btnTxt:te}=t,se=T?T.split(",._RF_,"):[],le=[{label:"Images",value:".xbm,.tif,.pjp,.pjpeg,.svgz,.jpg,.jpeg,.ico,.tiff,.gif,.svg,.bmp,.png,.jfif,.webp,.tif"},{label:"Audios",value:".opus,.flac,.webm,.weba,.wav,.ogg,.m4a,.mp3,.oga,.mid,.amr,.aiff,.wma,.au,.acc,.wpl"},{label:"Videos",value:".ogm,.wmv,.mpg,.webm,.ogv,.mov,.asx,.mpeg,.mp4,.m4v,.avi,.3g2,.3gp,.flv,.mkv,.swf"},{label:"Documents",value:".doc,.docx,.odt,.pdf,.rtf,.tex,.txt,.wks,.wps,.wpd"},{label:"Zip",value:".7z,.arj,.deb,.pkg,.rar,.rpm,.gz,.z,.zip"},{label:"Presentation",value:".key,.odp,.pps,.ppt,.pptx"},{label:"Spreadsheet",value:".ods,.xlr,.xls,.xlsx"},{label:"Databases",value:".csv,.dat,.db,.dbf,.log,.mdb,.sav,.sql,.tar,.sql,.sqlite,.xml"}];function k(i,s){t.config.maxSize=s,t.config.sizeUnit=i;const r=S(d,f=>{f[a]=t});m(r),w({event:`Modify Maximum size to ${s}${i}: ${t.lbl||a}`,type:"modify_maximum_size",state:{fields:r,fldKey:a}})}function x(i,s){t.config[i]=s;const r=S(d,ne=>{ne[a]=t});m(r),["showFileSize","showFilePreview","showFileList"].includes(i)&&s&&H(C,i),w({event:`${O[i]} '${String(s||"Off").replace("true","On")}': ${t.lbl||a}`,type:`${i}_changed`,state:{fields:r,fldKey:a}})}function _(i,s){if(s=isNaN(s)?0:Number(s),s>=0){i==="maxFile"&&u&&s<u&&u?(console.log("minFile=",typeof u),t.config.minFile=s,t.err.minFile.dflt=`Minimum ${s} File Required`):i==="minFile"&&s>g&&g&&(console.log("maxFile=",typeof g),t.config.maxFile=s,t.err.maxFile.dflt=`Maximum ${s} File can uploaded`),i==="minFile"?t.err.minFile.dflt=`Minimum ${s} File Required`:i==="maxFile"&&(t.err.maxFile.dflt=`Maximum ${s} File can uploaded`),t.config[i]=s;const r=S(d,f=>{f[a]=t});m(r),w({event:`${O[i]} '${String(s||"Off").replace("true","On")}': ${t.lbl||a}`,type:`${i}_changed`,state:{fields:r,fldKey:a}}),t.config.minFile>0&&Se({target:{checked:!0}})}}function ae(i){t.btnTxt=i.target.value;const s=S(d,r=>{r[a]=t});m(s),w({event:`Button Text Modify: ${t.lbl||a}`,type:"modify_button_text",state:{fields:s,fldKey:a}})}const A=i=>{we(U,a,ve[i])||H(C,i),Fe(i,a),G(i),v(!0)},B=i=>{if(t[i]){delete t[i];const s=S(d,r=>{r[a]=t});m(s),w({event:`${Me[i]} Icon Deleted`,type:`delete_${i}`,state:{fldKey:a,fields:s}})}};function oe(i){const s=i.map(f=>f.value);s.join(",")===""?t.config.allowedFileType="":t.config.allowedFileType=s.join(",._RF_,");const r=S(d,f=>{f[a]=t});m(r),w({event:`Changed Allowed File Type: ${t.lbl||a}`,type:"allow_file_type",state:{fldKey:a,fields:r}})}return window.selectedFieldData=t,e.jsxs(e.Fragment,{children:[e.jsx(Ie,{title:"Field Settings",subtitle:t.typ,fieldKey:a}),e.jsx(Ne,{}),e.jsx(c,{}),e.jsx($e,{}),e.jsx(c,{}),e.jsx(Ce,{}),e.jsx(c,{}),e.jsx(Pe,{}),e.jsx(c,{}),e.jsx(h,{id:"upld-btn-txt-stng",title:p("Upload Button Text:"),className:l(n.fieldSection),open:!0,children:e.jsx("input",{"data-testid":"upld-btn-txt-inp",className:l(n.input),type:"text",value:te,onChange:ae})}),e.jsx(c,{}),e.jsx(h,{id:"btn-icn-stng",title:p("Button Icons"),className:l(n.fieldSection),toggleChecked:!0,children:e.jsxs("div",{className:l(o.mt1),children:[e.jsx(D,{label:"Leading Icon",iconSrc:t==null?void 0:t.prefixIcn,styleRoute:"pre-i",setIcon:()=>A("prefixIcn"),removeIcon:()=>B("prefixIcn"),isPro:!0,proProperty:"leadingIcon"}),e.jsx(D,{label:"Trailing Icon",iconSrc:t==null?void 0:t.suffixIcn,styleRoute:"suf-i",setIcon:()=>A("suffixIcn"),removeIcon:()=>B("suffixIcn"),isPro:!0,proProperty:"trailingIcon"})]})}),e.jsx(c,{}),e.jsx(Te,{}),e.jsx(c,{}),e.jsx(ke,{}),e.jsx(c,{}),e.jsx(Le,{}),e.jsx(c,{}),e.jsx(Be,{}),e.jsx(c,{}),e.jsx(_e,{}),e.jsx(c,{}),e.jsx(h,{id:"alw-mltpl-stng",title:p("Allow Multiple:"),toggleAction:i=>x("multiple",i.target.checked),toggleChecked:F,className:l(n.fieldSection,n.hover_tip),switching:!0,tip:"By enabling this feature, you wil enable to select multiple file control file upload limit",tipProps:{width:200,icnSize:17},open:F,disable:!F,children:e.jsxs("div",{className:l(o.ml1,o.mr1),children:[e.jsxs("div",{className:l(o.flxc),children:[e.jsx("span",{children:"Minimum File"}),e.jsx("input",{"data-testid":"alw-mltpl-min-inp",className:l(n.input,o.w5,o.mt1),type:"number",value:u,onChange:i=>_("minFile",i.target.value)})]}),e.jsx($,{className:l(o.mt0),id:"min-fil-err-msg",type:"minFile",defaultMsg:`Minimum ${u} File Required`,allowIcons:!1}),e.jsxs("div",{className:l(o.flxc,o.mt2),children:[e.jsx("span",{children:"Maximum File"}),e.jsx("input",{"data-testid":"alw-mltpl-max-inp",className:l(n.input,o.w5,o.mt1),type:"number",value:g,onChange:i=>_("maxFile",i.target.value)})]}),e.jsx($,{className:l(o.mt0),id:"max-fil-err-msg",type:"maxFile",defaultMsg:`Maximum ${g} File can uploaded`,allowIcons:!1})]})}),e.jsx(c,{}),e.jsx(h,y(b({id:"fil-slct-stts-stng",title:p("File Select Status"),toggleAction:i=>x("showSelectStatus",i.target.checked),toggleChecked:P,className:l(n.fieldSection,n.hover_tip,o.px10),switching:!0,tip:"By enabling this feature, you will see file select status",tipProps:{width:200,icnSize:17}},I&&{disable:!P}),{isPro:!0,proProperty:"fileSelectStatus",children:e.jsx("div",{className:l({m:2}),children:e.jsx("input",{"data-testid":"fil-slct-stts-inp",className:l(n.input),type:"text",value:X,onChange:i=>x("fileSelectStatus",i.target.value)})})})),e.jsx(c,{}),e.jsx(h,y(b({id:"shw-mxmm-siz-stng",title:p("Show Maximum Size"),toggleAction:i=>x("showMaxSize",i.target.checked),toggleChecked:z,className:l(n.fieldSection,n.hover_tip),switching:!0,tip:"By disabling this option, the field show maximum size will be hidden",tipProps:{width:200,icnSize:17},open:z},I&&{disable:!z}),{isPro:!0,proProperty:"showMaxSize",children:e.jsx("div",{className:l({m:2}),children:e.jsx("input",{"data-testid":"fil-slct-stts-inp",className:l(n.input),type:"text",value:W,placeholder:"Write a Max Size Label Ex:(Max 2MB)",onChange:i=>x("maxSizeLabel",i.target.value)})})})),e.jsx(c,{}),e.jsx(h,{id:"mxmm-upld-siz-stng",title:p("Allow Maximum Upload Size"),toggleAction:i=>x("allowMaxSize",i.target.checked),toggleChecked:M,className:l(n.fieldSection,n.hover_tip),switching:!0,tip:"By enabling this feature, you will limit the upload size",tipProps:{width:200,icnSize:17},open:M,disable:!M,children:e.jsxs("div",{className:l(n.placeholder),children:[e.jsx(Ee,{dataTestId:"mxmm-upld-siz",className:l(o.w10,o.mt2,o.mb1,{bd:"var(--b-79-96) !important",brs:"8px !important",p:5}),inputHandler:({unit:i,value:s})=>k(i,s),sizeHandler:({unitKey:i,unitValue:s})=>k(i,s),value:Z,unit:J,width:"128px",options:["Bytes","KB","MB","GB"],step:1,max:1024}),F&&e.jsx(N,{id:"ttl-mxmm-siz",className:`${l(o.mr2,o.ml1,o.mt1,o.fw500)} `,checked:Q,title:p("Total Maximum Size"),onChange:i=>x("isItTotalMax",i.target.checked)}),e.jsx($,{id:"mxmm-upld-siz",type:"maxSize",defaultMsg:"Max Upload Size Exceeded",allowIcons:!1})]})}),e.jsx(c,{}),e.jsx(h,y(b({id:"shw-fil-lst-stng",title:p("Show File List"),toggleAction:i=>x("showFileList",i.target.checked),toggleChecked:j,className:l(n.fieldSection,n.hover_tip,o.px10),switching:!0,tip:"By enabling this feature, you will see file select status",tipProps:{width:200,icnSize:17},open:j,disable:!j},I&&{disable:!j}),{isPro:!0,proProperty:"showFileList",children:e.jsxs("div",{className:l(o.ml1),children:[e.jsx(N,{id:"shw-fil-prvw",className:`${l(o.mr2,o.mt2)} ${l(o.fw500)} `,checked:ee,title:p("Show File Preview"),onChange:i=>x("showFilePreview",i.target.checked)}),e.jsx(N,{id:"shw-fil-siz",className:`${l(o.mr2,o.mt2)} ${l(o.fw500)} `,checked:ie,title:p("Show File Size"),onChange:i=>x("showFileSize",i.target.checked)})]})})),e.jsx(c,{}),e.jsx(h,{id:"fil-exst-err-msg",title:p("File Exist Message"),className:l(n.fieldSection),isPro:!0,proProperty:"fileExistMsg",children:e.jsx("div",{className:l({m:2}),children:e.jsx("input",{"data-testid":"fil-exst-msg-inp",className:l(n.input),type:"text",value:Y,onChange:i=>x("fileExistMsg",i.target.value)})})}),e.jsx(c,{}),e.jsx("div",{className:l(n.fieldSection),children:e.jsx(ze,{className:`w-10 ${l(Re.msl)}`,titleClassName:"title",title:p("Allowed File Type:"),isMultiple:!0,addable:!0,options:le,placeholder:p("Select File Type"),jsonValue:!0,action:oe,value:se})}),e.jsx(c,{}),e.jsxs(he,{md:!0,autoHeight:!0,show:V,setModal:v,className:"o-v",title:p("Icons"),children:[e.jsx("div",{className:"pos-rel"}),e.jsx(Ae,{addPaddingOnSelect:!1,iconType:K,setModal:v})]})]})}const O={multiple:"Allow Multiple",minFile:"Change Minimum File to",maxFile:"Change Maximum File to",showSelectStatus:"Show Selected Status",fileSelectStatus:"File Select Status",showMaxSize:"Show Maximum Size",isItTotalMax:"Total Maximum",showFileList:"Show File List",showFilePreview:"Show File Preview",showFileSize:"Show File Size"},Re={msl:{"&.msl-vars":{"--font-size":"13px"},"& .msl-options .msl-option:hover":{bd:"var(--b-79-96)"},"& .msl-options .msl-option:focus":{bd:"var(--b-79-96)"},"& .msl":{bd:"var(--b-79-96) !important"}}};export{ci as default};

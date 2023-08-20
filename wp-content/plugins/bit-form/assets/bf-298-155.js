import{o as z,j as e,a as R,e as q,r as j,h as U,_ as n,B as J,aF as Q,M as v,a3 as W,l as y,aM as x}from"./main-398.js";import{F as t}from"./bf-612-139.js";import{b as h}from"./bf-233-100.js";import{F as X,a as Y,b as s,S as Z,A as ee,c as te,H as ie,R as se,E as oe,d as ae,I as le}from"./bf-417-87.js";import{F as ne}from"./bf-315-292.js";import{F as re}from"./bf-778-293.js";import{O as ce}from"./bf-491-294.js";import{P as de}from"./bf-432-295.js";import{E as pe}from"./bf-910-296.js";import{S as m}from"./bf-760-79.js";import"./bf-782-101.js";import"./bf-491-73.js";import"./bf-235-102.js";/* empty css          */import"./bf-827-74.js";import"./bf-314-99.js";import"./bf-940-163.js";import"./bf-887-104.js";import"./bf-404-116.js";import"./bf-20-138.js";import"./bf-354-65.js";import"./bf-288-71.js";import"./bf-989-109.js";import"./bf-640-289.js";import"./bf-952-107.js";import"./bf-864-106.js";import"./bf-788-137.js";import"./bf-138-72.js";import"./bf-864-103.js";const Re=()=>{const{fieldKey:l}=z();if(!l)return e.jsx(e.Fragment,{children:"No field exist with this field key"});const{css:o}=R(),[g,u]=q(W),[b,F]=j.useState(!1),[P,S]=j.useState(!1),[N,ge]=j.useState(""),a=U(g[l]),C=a.adminLbl||"",{placeholderImage:me,options:I}=a,{selectedFlagImage:O,selectedCountryClearable:B,searchClearable:w,optionFlagImage:k,detectCountryByIp:T,detectCountryByGeo:M,showSearchPh:f,searchPlaceholder:_,noCountryFoundText:E,inputFormat:H,valueFormat:D,maxHeight:ue}=a.config,$=i=>{i.target.checked?(a.config.searchPlaceholder="Search Country Here...",a.config.showSearchPh=!0):(a.config.searchPlaceholder="",a.config.showSearchPh=!1);const r=i.target.checked?"Show":"Hide",d=y(g,p=>{p[l]=a});u(d),x({event:`${r} Search Placeholder: ${a.lbl||C||l}`,type:"toggle_search_placeholder",state:{fields:d,fldKey:l}})};function L(i){a.config.searchPlaceholder=i.target.value;const r=y(g,d=>{d[l]=a});u(r),x({event:`Search Placeholder updated: ${a.lbl||C||l}`,type:"change_placeholder",state:{fields:r,fldKey:l}})}const G=()=>{F(!0)},A=()=>{F(!1)},K=i=>{const r=i.find(p=>p.check),d=y(g,p=>{p[l].options=i,p[l].config.defaultCountryKey=r?r.i:""});u(d),x({event:`Modify Options List: ${a.lbl||l}`,type:"options_modify",state:{fields:d,fldKey:l}})},c=(i,r,d)=>{a[d][r]=i;const p=y(g,V=>{V[l]=a});u(p),x({event:`${he[r]} '${String(i||"Off").replace("true","On")}': ${a.lbl||l}`,type:`${r}_changed`,state:{fields:p,fldKey:l}})};return window.selectedFieldData=a,e.jsxs(e.Fragment,{children:[e.jsx(X,{title:"Field Settings",subtitle:a.typ,fieldKey:l}),e.jsx(Y,{}),e.jsx(s,{}),e.jsx(Z,{}),e.jsx(s,{}),e.jsx(ee,{}),e.jsx(s,{}),e.jsx(te,{}),e.jsx(s,{}),e.jsx(de,{}),e.jsx(s,{}),e.jsx(ie,{}),e.jsx(s,{}),e.jsx(se,{}),e.jsx(s,{}),e.jsx(re,{}),e.jsx(s,{}),e.jsx(ne,{}),e.jsx(s,{}),e.jsx(m,{id:"inp-frmt-opt-stng",title:n("Input Format Option"),className:o(t.fieldSection),isPro:!0,proProperty:"inputFormatOptions",children:e.jsx("div",{className:o(t.placeholder),children:e.jsx("input",{"data-testid":"inp-frmt-opt-inp","aria-label":"Input Format Option",placeholder:"Input Format(Ex: +c #### ### ###)",className:o(t.input),type:"text",value:H,onChange:i=>c(i.target.value,"inputFormat","config")})})}),e.jsx(s,{}),e.jsx(m,{id:"val-frmt-opt-stng",title:n("Value Format Option"),className:o(t.fieldSection),isPro:!0,proProperty:"valueFormatOptions",children:e.jsx("div",{className:o(t.placeholder),children:e.jsx("input",{"data-testid":"val-frmt-opt-inp","aria-label":"Value Format Option",placeholder:"Value Format(Ex: +c #### ### ###)",className:o(t.input),type:"text",value:D,onChange:i=>c(i.target.value,"valueFormat","config")})})}),e.jsx(s,{}),e.jsx(m,{id:"nmbr-stng",title:"Invalid Error Message:",className:o(t.fieldSection),children:e.jsx(oe,{id:"invalid-err-msg",type:"invalid",title:"Invalid Error Message",tipTitle:"By enabling this feature, user will see the error message when input value is Invalid"})}),e.jsx(s,{}),e.jsx(m,{id:"srch-plchldr-stng",title:n("Search Placeholder"),className:o(t.fieldSection,t.hover_tip),switching:!0,tip:"By disabling this option, the search placeholder text will be remove",tipProps:{width:250,icnSize:17},toggleAction:$,toggleChecked:f,open:f,disable:!f,isPro:!0,proProperty:"searchPlaceholder",children:e.jsx("div",{className:o(t.placeholder),children:e.jsx("input",{"data-testid":"srch-plchldr-stng-inp","aria-label":"Placeholer for Country Search",placeholder:"Type Placeholder here...",className:o(t.input),type:"text",value:_,onChange:L})})}),e.jsx(s,{}),e.jsx(m,{id:"cntry-nt-fund-stng",title:n("Country Not Found Text"),className:o(t.fieldSection),isPro:!0,proProperty:"countryNotFoundText",children:e.jsx("div",{className:o(t.placeholder),children:e.jsx("input",{"data-testid":"cntry-nt-fund-inp","aria-label":"Country Not Found Text",placeholder:"Type no country found text here...",className:o(t.input),type:"text",value:E,onChange:i=>c(i.target.value,"noCountryFoundText","config")})})}),e.jsx(s,{}),e.jsx(h,{id:"shw-slctd-img-stng",tip:"By disabling this option, the show selected flag image will be hidden",className:o(t.fieldSection,t.hover_tip,t.singleOption),title:n("Show Selected Flag Image"),action:i=>c(i.target.checked,"selectedFlagImage","config"),isChecked:O,isPro:!0,proProperty:"selectedOptImage"}),e.jsx(s,{}),e.jsx(h,{id:"slctd-clrbl-stng",tip:"By disabling this option, the selected country clearable button will be hidden",className:o(t.fieldSection,t.hover_tip,t.singleOption),title:n("Selected Country Clearable"),action:i=>c(i.target.checked,"selectedCountryClearable","config"),isChecked:B}),e.jsx(s,{}),e.jsx(h,{id:"srch-clrbl-stng",className:o(t.fieldSection,t.hover_tip,t.singleOption),tip:"By disabling this option, the selected country search clearable button will be hidden",title:n("Search Clearable"),action:i=>c(i.target.checked,"searchClearable","config"),isChecked:w}),e.jsx(s,{}),e.jsx(h,{id:"opt-icn-stng",className:o(t.fieldSection,t.hover_tip,t.singleOption),tip:"By disabling this option, the option flags image will be hidden",title:n("Option Flag Image"),action:i=>c(i.target.checked,"optionFlagImage","config"),isChecked:k,isPro:!0,proProperty:"optionFlagImage"}),e.jsx(s,{}),e.jsx(h,{id:"dtct-cntry-by-ip-stng",className:o(t.fieldSection,t.hover_tip,t.singleOption),tip:"By disabling this option, are not detect county by ip",title:n("Detect Country By IP"),action:i=>c(i.target.checked,"detectCountryByIp","config"),isChecked:T||!1,isPro:!0,proProperty:"detectCountryByIp"}),e.jsx(s,{}),e.jsx(h,{id:"dtct-cntry-by-geo-stng",className:o(t.fieldSection,t.hover_tip,t.singleOption),tip:"By disabling this option, are not detect county by Geo location",title:n("Detect Country By Geo"),action:i=>c(i.target.checked,"detectCountryByGeo","config"),isChecked:M||!1,isPro:!0,proProperty:"detectCountryByGeo"}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(ae,{}),e.jsx(s,{}),e.jsx(ce,{}),e.jsx(s,{}),e.jsx("div",{className:o(t.fieldSection),children:e.jsxs(J,{dataTestId:"edt-opt-stng",variant:"primary-outline",size:"sm",className:o({mt:10}),onClick:G,children:[n("Edit Options"),e.jsx("span",{className:o({ml:3,mt:3,tm:"rotate(45deg)"}),children:e.jsx(Q,{size:"13",stroke:"3"})})]})}),e.jsx(s,{}),e.jsx(v,{md:!0,autoHeight:!0,show:b,setModal:A,className:"o-v",title:n("Options 2"),width:"730px",children:e.jsx("div",{className:"pos-rel",children:e.jsx(pe,{optionMdl:b,options:I,setOptions:i=>K(i),lblKey:"lbl",valKey:"val",type:"radio",onlyVisualOptionsTab:!0,hideNDisabledOptions:!0})})}),e.jsxs(v,{md:!0,autoHeight:!0,show:P,setModal:S,className:"o-v",title:"Image",children:[e.jsx("div",{className:"pos-rel"}),e.jsx(le,{iconType:N,selected:"Upload Image",uploadLbl:"Upload Image",setModal:S,addPaddingOnSelect:!1})]})]})},he={inputFormat:"Input Formate Changed to",valueFormat:"Value Formate Changed to",noCountryFoundText:"Country Not Found Text",selectedFlagImage:"Selected Flag Image",selectedCountryClearable:"Selected Country Clearable",searchClearable:"Search Clearable",optionFlagImage:"Option Flag Image",detectCountryByIp:"Detect Country By IP",detectCountryByGeo:"Detect Country By Geo"};export{Re as default};
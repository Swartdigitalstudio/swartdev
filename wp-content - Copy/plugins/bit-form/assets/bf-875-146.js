var K=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,l,s)=>l in t?K(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,C=(t,l)=>{for(var s in l||(l={}))A.call(l,s)&&S(t,s,l[s]);if(y)for(var s of y(l))T.call(l,s)&&S(t,s,l[s]);return t};import{o as $,a as E,e as M,h as w,r as k,j as e,M as V,_ as h,b as N,l as f,aM as b,b7 as F,a3 as L,E as I,q as _}from"./main-398.js";import{F as z,f as H,b as r,A as R,c as U,R as q,d as P}from"./bf-417-87.js";import{F as d}from"./bf-612-139.js";import{C as G}from"./bf-235-102.js";import{b as J}from"./bf-233-100.js";import{T as O}from"./bf-887-104.js";import{F as Q}from"./bf-315-292.js";import{S as D}from"./bf-760-79.js";/* empty css          */import"./bf-827-74.js";import"./bf-314-99.js";import"./bf-491-73.js";import"./bf-782-101.js";import"./bf-940-163.js";import"./bf-20-138.js";import"./bf-354-65.js";import"./bf-404-116.js";import"./bf-864-103.js";function W({labelModal:t,setLabelModal:l}){var o;const{fieldKey:s}=$(),{css:a}=E(),[j,m]=M(L),i=w(j[s]),u=i.lbl||((o=i==null?void 0:i.info)==null?void 0:o.lbl),[p,n]=k.useState(u);k.useEffect(()=>{t&&n(u)},[t]);const c=v=>{m(g=>f(g,B=>{B[s].lbl=v})),b({event:"Modify Decision Box Label",type:"change_decision_label",state:{fields:F("fields"),fldKey:s}})},x=()=>{i.lbl=p,m(v=>f(v,g=>{g[s]=i})),b({event:"Cancel Decision Box Label Editing",type:"cancel_decision_label_edit",state:{fields:F("fields"),fldKey:s}}),l(!1)};return e.jsxs(V,{md:!0,show:t,setModal:x,title:h("Edit Decision Box Label"),children:[e.jsx(O,{id:s,value:u,onChangeHandler:c}),e.jsxs("div",{className:"mt-2 f-right",children:[e.jsx("button",{type:"button",className:`${a(N.btn)} mr-2`,onClick:x,children:"Cancel"}),e.jsx("button",{type:"button",className:`${a(N.btn)} blue`,onClick:()=>l(!1),children:"Save"})]})]})}function fe(){const{fieldKey:t}=$(),[l,s]=M(L),a=w(l[t]),[j,m]=k.useState(!1),{css:i}=E();function u(n){const{checked:c}=n.target;if(c){const o=C({},a.valid);o.checked=!0,a.valid=o}else delete a.valid.checked;const x=f(l,o=>{o[t]=a});s(x),b({event:`Check by default ${c?"on":"off"} : ${a.adminLbl||t}`,type:"set_check_by_default",state:{fields:x,fldKey:t}})}const p=(n,c)=>{a.msg[c]=n;const x=f(l,o=>{o[t]=a});s(x),b({event:`${c[0].toUpperCase()+c.slice(1)} Value Modified to "${n}"`,type:`${c}_value_modify`,state:{fields:x,fldKey:t}})};return window.selectedFieldData=a,e.jsxs("div",{children:[e.jsx(z,{title:"Field Settings",subtitle:a.typ,fieldKey:t}),e.jsxs("div",{className:i(d.fieldSection),children:[e.jsxs("div",{className:`flx flx-between ${d.hover_tip}`,children:[e.jsxs("div",{className:"flx",children:[e.jsx("b",{children:"Label "}),e.jsx(G,{width:250,icnSize:17,className:"hover-tip",children:e.jsx("div",{className:"txt-body",children:h("Edit your decision box label by clicking on edit icon")})})]}),e.jsx("span",{"data-testid":"lbl-edt-btn",role:"button",tabIndex:"-1",className:"mr-2 cp",onClick:()=>m(!0),onKeyDown:()=>m(!0),children:e.jsx(I,{size:19})})]}),e.jsx("div",{className:`${i(H.errMsgBox)} ${i(_.mt2)}`,tabIndex:"0",role:"button",onClick:()=>m(!0),onKeyDown:()=>m(!0),children:e.jsx("p",{className:i(_.m0),children:"Click to edit decision box label"})})]}),e.jsx(r,{}),e.jsx(W,{labelModal:j,setLabelModal:m}),e.jsx(R,{}),e.jsx(r,{}),e.jsx(U,{}),e.jsx(r,{}),e.jsx(q,{asteriskIsAllow:!1}),e.jsx(r,{}),e.jsx(Q,{}),e.jsx(r,{}),e.jsx(P,{}),e.jsx(r,{}),e.jsx(D,{id:"chek-val-stng",title:h("Checked Value"),className:i(d.fieldSection),open:!0,children:e.jsx("div",{className:i(d.placeholder),children:e.jsx("input",{"data-testid":"chek-val-inp","aria-label":"Checked value",className:i(d.input),type:"text",value:a.msg.checked||"",onChange:n=>p(n.target.value,"checked")})})}),e.jsx(r,{}),e.jsx(D,{id:"unchek-val-stng",title:h("Unchecked Value"),className:i(d.fieldSection),open:!0,children:e.jsx("div",{className:i(d.placeholder),children:e.jsx("input",{"data-testid":"unchek-val-inp","aria-label":"Uncheked value",className:i(d.input),type:"text",value:a.msg.unchecked||"",onChange:n=>p(n.target.value,"unchecked")})})}),e.jsx(r,{}),e.jsx("div",{className:i(d.fieldSection,d.hover_tip,{pr:"36px !important"}),children:e.jsx(J,{id:"chek-by-dflt",tip:"By disabling this option, the field checked by default will be hidden",title:h("Checked by Default"),action:u,isChecked:a.valid.checked})}),e.jsx(r,{})]})}export{fe as default};
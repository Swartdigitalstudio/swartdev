var ts=Object.defineProperty,as=Object.defineProperties;var ns=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var ls=Object.prototype.hasOwnProperty,os=Object.prototype.propertyIsEnumerable;var De=(d,c,t)=>c in d?ts(d,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[c]=t,j=(d,c)=>{for(var t in c||(c={}))ls.call(c,t)&&De(d,t,c[t]);if(Ue)for(var t of Ue(c))os.call(c,t)&&De(d,t,c[t]);return d},N=(d,c)=>as(d,ns(c));var ne=(d,c,t)=>new Promise((g,P)=>{var k=h=>{try{i(t.next(h))}catch(R){P(R)}},y=h=>{try{i(t.throw(h))}catch(R){P(R)}},i=h=>h.done?g(h.value):Promise.resolve(h.value).then(k,y);i((t=t.apply(d,c)).next())});import{o as qe,P as Z,ak as Ye,r as M,cT as Je,l as D,I as J,j as e,bi as Xe,_ as f,a as ue,aa as me,bh as cs,u as xe,bM as Ne,e as he,aj as je,cU as rs,E as is,b as pe,aF as ee,b1 as le,b2 as se,q as U,bg as ds,bn as ps,h as A,i as ye,w as ie,cV as Fe,S as us,L as ms,cW as xs,c as Qe,N as Ie,R as hs,x as be,d as We,aG as js}from"./main-398.js";import{S as Ce}from"./bf-550-169.js";import{A as ke}from"./bf-480-290.js";import{B as V}from"./bf-500-108.js";import{R as fs,b as gs,a as vs,G as Oe,S as oe,B as Ge,c as ce}from"./bf-233-100.js";import{C as we}from"./bf-288-71.js";import{P as Ve}from"./bf-782-101.js";import{S as bs}from"./bf-720-164.js";import{T as ws}from"./bf-887-104.js";import{R as Ns}from"./bf-61-291.js";import{u as ys}from"./bf-418-67.js";import{u as Cs}from"./bf-989-109.js";import"./bf-491-73.js";import"./bf-235-102.js";import"./bf-404-116.js";function ks({msgId:d,active:c,setActive:t,position:g,animation:P,autoHide:k,duration:y,msgType:i,message:h,confirmationStyles:R}){const{formID:z}=qe(),I=Z(Ye),L=M.useCallback(()=>Je(z,d,i,g,P,R),[z,d,i,g,P,R]),W=M.useRef(null),_=({target:F})=>{(F.dataset.modalBackdrop||F.parentNode.dataset.modalBackdrop)&&t(!1)};return M.useEffect(()=>{I(F=>D(F,w=>{var $;($=w.confirmations)==null||$.filter(T=>{T.confMsgId===d&&(i==="below"||J)&&(T.style=L())})}))},[L]),M.useEffect(()=>{k&&(c?W.current=setTimeout(()=>{t(!1)},y*1e3):clearTimeout(W))},[c]),e.jsxs(e.Fragment,{children:[e.jsx(Ns,{styleClasses:L()}),e.jsx(fs,{}),e.jsx("div",{role:"dialog","aria-hidden":"true","data-modal-backdrop":!0,onClick:_,className:`msg-container-${d} ${c?"active":"deactive"}`,children:e.jsx("div",{role:"button",className:`layout-wrapper msg-background-${d}`,children:e.jsxs("div",{className:`msg-content-${d}`,children:[e.jsx("button",{className:`close-${d}`,type:"button",onClick:()=>t(!1),children:e.jsxs("svg",{className:`close-icn-${d}`,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 30 30",children:[e.jsx("line",{x1:"4",y1:"3.88",x2:"26",y2:"26.12"}),e.jsx("line",{x1:"26",y1:"3.88",x2:"4",y2:"26.12"})]})}),e.jsx("div",{children:e.jsx(Xe,{html:h})})]})})})]})}function re(){return!J&&e.jsx("div",{className:"pro-blur flx",style:{minHeight:100,height:"100%",left:15,width:"94%",marginTop:10},children:e.jsx("div",{className:"pro",children:e.jsx("a",{href:"https://www.bitapps.pro/bit-form",target:"_blank",rel:"noreferrer",children:e.jsxs("span",{className:"txt-pro",children:[" ",f("Available On Pro")]})})})})}function $s({id:d,msgItem:c}){var Se,Pe,Me,Te,He,Ae,Le,Ee,Be,ze,Re;const{css:t}=ue(),g=Z(me),P=Z(cs),k=xe(Ne),[y,i]=he(je),[h,R]=M.useState(!1),[z,I]=M.useState({show:!1}),[L,W]=M.useState("default"),[_,F]=M.useState("default"),[w,$]=M.useState("background"),[T,K]=M.useState("All"),{msgType:E,position:q,animation:O,autoHide:m,duration:x,styles:s}=(c==null?void 0:c.config)||{},v=`_tmp_${d}_conf_id`,b=({target:{name:n}})=>{$(n)},Q=({target:{value:n}})=>{i(o=>D(o,r=>{r.type.successMsg[d].config.position=n})),g(o=>N(j({},o),{unsaved:!0}))},a=({target:{value:n}})=>{if(!J&&n!=="below"){P(j({show:!0},ds[`${n}_msg`]));return}i(o=>D(o,r=>{r.type.successMsg[d].config.msgType=n})),g(o=>N(j({},o),{unsaved:!0}))},u=({target:{value:n}})=>{i(o=>D(o,r=>{r.type.successMsg[d].config.animation=n})),g(o=>N(j({},o),{unsaved:!0}))},p=({target:{value:n}})=>{i(o=>D(o,r=>{r.type.successMsg[d].config.duration=n>0?n:1})),g(o=>N(j({},o),{unsaved:!0}))},S=()=>{i(n=>D(n,o=>{o.type.successMsg[d].config.autoHide=!o.type.successMsg[d].config.autoHide})),g(n=>N(j({},n),{unsaved:!0}))},H=({target:{name:n,value:o}})=>{J&&(n==="closeColorType"?W(o):n==="closeIconColorType"&&F(o))},C=({target:{name:n,value:o}})=>{J&&(i(r=>D(r,G=>{G.type.successMsg[d].config.styles[n]=o})),g(r=>N(j({},r),{unsaved:!0})))},X=({target:{name:n,value:o}},r)=>{J&&(i(G=>D(G,fe=>{fe.type.successMsg[d].config.styles.boxShadow[r][n]=o})),g(G=>N(j({},G),{unsaved:!0})))},de=(n,o)=>{i(r=>D(r,G=>{G.type.successMsg[d].config.styles.boxShadow.splice(o,1)})),g(r=>N(j({},r),{unsaved:!0}))},$e=()=>{J&&(i(n=>D(n,o=>{o.type.successMsg[d].config.styles.boxShadow.push({x:"0px",y:"27px",blur:"30px",spread:"",color:"rgb(0 0 0 / 18%)",inset:""})})),g(n=>N(j({},n),{unsaved:!0})))},Ze=(n,o)=>{i(r=>D(r,G=>{G.type.successMsg[o].msg=n})),g(r=>N(j({},r),{unsaved:!0}))};let B=(Se=s==null?void 0:s.padding)==null?void 0:Se.trim().split(" ");const Y=({value:n,unit:o,id:r})=>{var _e;if(!J)return;B=(_e=s==null?void 0:s.padding)==null?void 0:_e.trim().split(" ");const G=se(B[r]||"px"),fe=ps(o,n,G);B[r]=fe+o;let ge;T==="All"?ge=`${B[0]}`:ge=`${B[0]||"0px"} ${B[1]||"0px"} ${B[2]||"0px"} ${B[3]||"0px"}`,i(ve=>D(ve,ss=>{ss.type.successMsg[d].config.styles.padding=ge})),g(ve=>N(j({},ve),{unsaved:!0}))},te=["px","em","rem"],es=[{label:"All",icn:e.jsx(Ge,{stroke:"1.7",size:14}),show:["icn"],tip:"All Side"},{label:"Individual",icn:e.jsx(ce,{stroke:"1.7",size:"15"}),show:["icn"],tip:"Individual Side"}],ae={msgContainer:{m:"auto",w:s==null?void 0:s.width,h:"auto"},msgBackground:{w:"100%",h:"100%",flx:"center",bd:"rgba(0, 0, 0, 0.0)"},msgContent:{bd:s==null?void 0:s.background,cr:s==null?void 0:s.color,p:s==null?void 0:s.padding,b:`${s==null?void 0:s.borderWidth} ${s==null?void 0:s.borderType} ${s==null?void 0:s.borderColor}`,brs:s==null?void 0:s.borderRadius,w:"100%",m:"auto",pn:"relative",wb:"break-all",bs:rs((s==null?void 0:s.boxShadow)||[])},close:N(j(j({cr:s==null?void 0:s.closeIconColor,bd:s==null?void 0:s.closeBackground,pn:"absolute",rt:"7px"},E==="modal"&&{tp:"7px"}),E==="snackbar"&&{tp:"50%",tm:"translateY(-50%)"}),{h:"25px",w:"25px",b:"none",brs:"50%",p:0,dy:"grid",g:"center",cur:"pointer",":hover":{cr:s==null?void 0:s.closeIconHover,bd:s==null?void 0:s.closeHover},":focus":{cr:s==null?void 0:s.closeIconHover,cur:"pointer"}}),closeIcon:{w:"15px",h:"15px"}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t({p:10,flx:"1",fd:"column"}),children:e.jsxs("div",{className:t({flx:1,fd:"column",rg:5}),children:[e.jsx("div",{children:e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t({w:130,fw:500}),children:f("Message Styles")}),e.jsx("select",{className:t(l.selectInput),name:"animation",value:(Me=(Pe=y.type.successMsg[d])==null?void 0:Pe.config)==null?void 0:Me.animation,onChange:u,children:e.jsx("option",{value:"custom-style",children:"Custom Style"})}),e.jsx("button",{type:"button",className:t(l.input,{curp:1}),title:"Edit styles",onClick:()=>I({show:!0}),children:e.jsx("span",{children:e.jsx(is,{size:"20"})})})]})}),e.jsxs("div",{children:[e.jsx("span",{className:t({w:130,fw:500}),children:f("Message Type")}),e.jsx(we,{radio:!0,name:`msg-type-${d}`,onChange:a,checked:E==="below",title:e.jsx("small",{className:"txt-dp",children:e.jsx("b",{children:"Below of Form"})}),value:"below"}),e.jsx(we,{radio:!0,name:`msg-type-${d}`,onChange:a,checked:E==="snackbar",title:e.jsx("small",{className:"txt-dp",children:e.jsxs("b",{children:["Snackbar",!J&&e.jsx(Ve,{})]})}),value:"snackbar"}),e.jsx(we,{radio:!0,name:`msg-type-${d}`,onChange:a,checked:E==="modal",title:e.jsx("small",{className:"txt-dp",children:e.jsxs("b",{children:["Modal",!J&&e.jsx(Ve,{})]})}),value:"modal"})]}),e.jsxs("div",{className:t({flx:1,cg:5}),children:[e.jsxs("div",{className:t({flx:"align-center"}),children:[e.jsx("span",{className:t({fs:16,w:80,fw:500}),children:"Animation"}),e.jsx("select",{className:t(l.selectInput),name:"animation",value:O,onChange:u,children:(He=Ps[(Te=c.config)==null?void 0:Te.msgType])==null?void 0:He.map((n,o)=>e.jsx("option",{value:n==="Please Select"?"":n,children:n.replace(/-/g," ").replace(/(^\w{1})|(\s{1}\w{1})/g,r=>r.toUpperCase())},`opt-key${o+2}`))})]}),(E==="snackbar"||["slide-up","slide-down"].includes(O))&&E!=="below"&&e.jsxs("div",{className:t({flx:"align-center"}),children:[e.jsx("span",{className:t({fs:16,w:65,fw:500}),children:"Position"}),e.jsx("select",{className:t(l.selectInput),name:"position",value:q,onChange:Q,children:(Ae=Ke[E][O]||Ke[E])==null?void 0:Ae.map(n=>e.jsx("option",{value:n==="Please Select"?"":n,children:n.replace(/-/g," ").replace(/(^\w{1})|(\s{1}\w{1})/g,o=>o.toUpperCase())},n))})]}),e.jsxs("div",{className:t({flx:"align-center"}),children:[e.jsx("span",{className:t({fs:16,w:80,fw:500,ml:10}),children:"Auto Hide"}),e.jsx(gs,{name:`auto-hide-check-${d}`,action:S,isChecked:(Ee=(Le=y.type.successMsg[d])==null?void 0:Le.config)==null?void 0:Ee.autoHide,className:"flx"})]}),((ze=(Be=y.type.successMsg[d])==null?void 0:Be.config)==null?void 0:ze.autoHide)&&e.jsxs("div",{className:t({flx:"align-center"}),children:[e.jsx("span",{className:t({fs:16,w:70,fw:500,ml:10}),children:"Duration"}),e.jsx("input",{placeholder:"Duration",className:t(l.input,{w:50}),type:"number",value:x,onChange:p,"aria-label":"Confirmation auto hide aftere duration"}),e.jsx("small",{children:"Sec"})]})]}),e.jsx("div",{children:e.jsx("button",{type:"button",className:t(pe.btn,pe.blueGrd,{mt:0}),onClick:()=>R(!h),children:"Preview"})})]})}),e.jsx(bs,{title:"Confirmation Style",show:z.show,setModal:I,className:t({h:"500px !important",w:"550px !important"}),children:e.jsxs("div",{className:`layout-wrapper confirmation-style ${t({w:"100%"})}`,children:[e.jsx("div",{className:`style-preview ${t({h:"250px",p:"40px 20px",ow:"auto",bd:"#E8E8E8"})}`,children:e.jsx("div",{className:`${t(ae.msgContainer)}`,children:e.jsx("div",{className:`${t(ae.msgBackground)}`,children:e.jsxs("div",{className:`${t(ae.msgContent)}`,children:[e.jsx("button",{className:`${t(ae.close)}`,type:"button",children:e.jsxs("svg",{className:`${t(ae.closeIcon)}`,viewBox:"0 0 30 30",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",x1:"4",y1:"3.88",x2:"26",y2:"26.12"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",x1:"26",y1:"3.88",x2:"4",y2:"26.12"})]})}),e.jsx("div",{children:e.jsx(Xe,{html:c==null?void 0:c.msg})})]})})})}),e.jsxs("div",{className:t({h:"210px",bd:"white",bt:"1px solid #abaaaa"}),children:[e.jsxs("div",{className:t({p:"10px 20px"}),children:[e.jsx("button",{type:"button",name:"background",className:`${t(l.styleButton)} ${w==="background"&&"active"}`,onClick:b,children:"Background"}),e.jsx("button",{type:"button",name:"border",className:`${t(l.styleButton)} ${w==="border"&&"active"}`,onClick:b,children:"Border"}),e.jsx("button",{type:"button",name:"shadow",className:`${t(l.styleButton)} ${w==="shadow"&&"active"}`,onClick:b,children:"Shadow"}),e.jsx("button",{type:"button",name:"width",className:`${t(l.styleButton)} ${w==="width"&&"active"}`,onClick:b,children:"Width"}),e.jsx("button",{type:"button",name:"padding",className:`${t(l.styleButton)} ${w==="padding"&&"active"}`,onClick:b,children:"Padding"})]}),e.jsxs("div",{className:`properties-container ${t({pn:"relative"})}`,children:[w==="background"&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsxs("div",{className:t({dy:"flex",fd:"column",p:"0px 20px",rg:5}),children:[e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.label,l.backgrounLabel),children:"Message Background Color"}),e.jsx("input",{type:"color",name:"background",className:t({ml:88},l.input,l.colorInput),value:s==null?void 0:s.background,onChange:C}),e.jsx("input",{type:"text",name:"background",className:t({w:165},l.input),value:s==null?void 0:s.background,onChange:C})]}),e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.label,l.backgrounLabel),children:"Message Text Color"}),e.jsx("input",{type:"color",name:"color",className:t({ml:88},l.input,l.colorInput),value:s==null?void 0:s.color,onChange:C}),e.jsx("input",{type:"text",name:"color",className:t({w:165},l.input),value:s==null?void 0:s.color,onChange:C})]}),e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.label,l.backgrounLabel),children:"Close Button Background Color"}),e.jsxs("select",{name:"closeColorType",className:t({w:80},l.selectInput),value:L,onChange:H,children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"hover",children:"Hover"})]}),e.jsx("input",{type:"color",name:L==="default"?"closeBackground":"closeHover",className:t(l.input,l.colorInput),value:L==="default"?s==null?void 0:s.closeBackground:s==null?void 0:s.closeHover,onChange:C}),e.jsx("input",{type:"text",name:L==="default"?"closeBackground":"closeHover",className:t({w:165},l.input),value:L==="default"?s==null?void 0:s.closeBackground:s==null?void 0:s.closeHover,onChange:C})]}),e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.label,l.backgrounLabel),children:"Close icon color"}),e.jsxs("select",{name:"closeIconColorType",className:t({w:80},l.selectInput),value:_,onChange:H,children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"hover",children:"Hover"})]}),e.jsx("input",{type:"color",name:_==="default"?"closeIconColor":"closeIconHover",className:t(l.input,l.colorInput),value:_==="default"?s==null?void 0:s.closeIconColor:s==null?void 0:s.closeIconHover,onChange:C}),e.jsx("input",{type:"text",name:_==="default"?"closeIconColor":"closeIconHover",className:t({w:165},l.input),value:_==="default"?s==null?void 0:s.closeIconColor:s==null?void 0:s.closeIconHover,onChange:C})]})]})]}),w==="border"&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsxs("div",{className:t({dy:"flex",fd:"column",p:"0px 20px"}),children:[e.jsxs("div",{className:t({flx:"align-center"}),children:[e.jsx("span",{className:t(l.valueLabel,{ml:102}),children:"Color"}),e.jsx("span",{className:t(l.valueLabel,{ml:124}),children:"Thickness"}),e.jsx("span",{className:t(l.valueLabel,{ml:30}),children:"Type"})]}),e.jsxs("div",{className:t({flx:"align-center",mb:5,cg:5}),children:[e.jsx("span",{className:t({w:55},l.label),children:"Border"}),e.jsx("input",{type:"color",name:"borderColor",className:t(l.input,l.colorInput),value:s==null?void 0:s.borderColor,onChange:C}),e.jsx("input",{type:"text",name:"borderColor",className:t({w:150},l.input),value:s==null?void 0:s.borderColor,onChange:C}),e.jsx("input",{type:"text",name:"borderWidth",className:t({w:80},l.input),value:s==null?void 0:s.borderWidth,onChange:C}),e.jsxs("select",{name:"borderType",className:t({w:80},l.selectInput),value:s==null?void 0:s.borderType,onChange:C,children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"hidden",children:"Hidden"}),e.jsx("option",{value:"dotten",children:"Dotted"}),e.jsx("option",{value:"dashed",children:"Dashed"}),e.jsx("option",{value:"solid",children:"Solid"}),e.jsx("option",{value:"double",children:"Double"}),e.jsx("option",{value:"groove",children:"Groove"}),e.jsx("option",{value:"ridge",children:"Ridge"}),e.jsx("option",{value:"inset",children:"Inset"}),e.jsx("option",{value:"outset",children:"Outset"}),e.jsx("option",{value:"initial",children:"Inital"}),e.jsx("option",{value:"inherit",children:"Inherit"})]})]}),e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t({w:55},l.label),children:"Radius"}),e.jsx("input",{type:"text",name:"borderRadius",className:t({w:80},l.input),value:s==null?void 0:s.borderRadius,onChange:C})]})]})]}),w==="shadow"&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsxs("div",{className:t({dy:"flex",fd:"column",p:"0px 20px"}),children:[e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.valueLabel,{ml:48}),children:"Color"}),e.jsx("span",{className:t(l.valueLabel,{ml:92}),children:"X"}),e.jsx("span",{className:t(l.valueLabel,{ml:45}),children:"Y"}),e.jsx("span",{className:t(l.valueLabel,{ml:42}),children:"Blur"}),e.jsx("span",{className:t(l.valueLabel,{ml:25}),children:"Spread"}),e.jsx("span",{className:t(l.valueLabel,{ml:12}),children:"Inset"})]}),e.jsx("div",{className:t({flx:"space-between"}),children:e.jsx("div",{className:t({h:110,ow:"auto",px:5,pt:2,w:"100%"}),children:(Re=s==null?void 0:s.boxShadow)==null?void 0:Re.map((n,o)=>e.jsxs("div",{className:t({flx:"align-center",mb:5,cg:5}),children:[e.jsx("input",{type:"color",name:"color",className:t(l.input,l.colorInput),value:n.color,onChange:r=>X(r,o)}),e.jsx("input",{type:"text",name:"color",className:t({w:120},l.input),value:n.color,onChange:r=>X(r,o)}),e.jsx("input",{type:"text",name:"x",className:t({w:50},l.input),value:n.x,onChange:r=>X(r,o)}),e.jsx("input",{type:"text",name:"y",className:t({w:50},l.input),value:n.y,onChange:r=>X(r,o)}),e.jsx("input",{type:"text",name:"blur",className:t({w:50},l.input),value:n.blur,onChange:r=>X(r,o)}),e.jsx("input",{type:"text",name:"spread",className:t({w:50},l.input),value:n.spread,onChange:r=>X(r,o)}),e.jsxs("select",{name:"inset",className:t({w:72},l.selectInput),value:n.inset,onChange:r=>X(r,o),children:[e.jsx("option",{value:"",children:"Outset"}),e.jsx("option",{value:"inset",children:"Inset"})]}),e.jsx("span",{role:"button",tabIndex:0,onKeyDown:r=>de(r,o),onClick:r=>de(r,o),children:e.jsx(ee,{size:"12",className:t({curp:1})})})]},`inp-${o+9}`))})}),e.jsx("div",{className:t({flx:"center",pt:5}),children:e.jsx("span",{className:t({curp:1}),role:"button",tabIndex:0,onKeyDown:$e,onClick:$e,children:e.jsx(ee,{size:"12",className:t({curp:1,tm:"rotate(45deg)"})})})})]})]}),w==="width"&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx("div",{className:t({dy:"flex",fd:"column",p:"0px 20px"}),children:e.jsxs("div",{className:t({flx:"align-center",cg:5}),children:[e.jsx("span",{className:t(l.label,{w:55}),children:"Width"}),e.jsx("input",{type:"text",name:"width",className:t({w:"100px"},l.input),value:s==null?void 0:s.width,onChange:C})]})})]}),w==="padding"&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsxs("div",{className:t(l.segmentWrapper),children:[e.jsxs("div",{className:t(l.titlecontainer),children:[e.jsx("span",{className:t(l.title),children:"Padding"}),e.jsx(vs,{square:!0,defaultActive:"All",options:es,values:60,component:"button",onChange:n=>K(n),show:["icn"],variant:"lightgray",noShadow:!0})]}),e.jsxs("div",{className:t(l.segmentcontainer),children:[e.jsx(Oe,{open:T==="All",children:e.jsx("div",{className:t({p:2}),children:e.jsx(oe,{min:"0",inputHandler:Y,sizeHandler:({unitKey:n,unitValue:o,indexId:r})=>Y({value:o,unit:n,indexId:r}),id:"0",label:e.jsx(Ge,{size:14}),value:le(B[0])||0,unit:se(B[0])||"px",options:te,width:"110px"})})}),e.jsx(Oe,{open:T==="Individual",children:e.jsxs("div",{className:t(U.flxc,{flxp:"wrap",jc:"end",p:2}),children:[e.jsx(oe,{min:"0",inputHandler:Y,sizeHandler:({unitKey:n,unitValue:o,indexId:r})=>Y({value:o,unit:n,indexId:r}),id:"0",label:e.jsx(ce,{size:"14",variant:"top"}),width:"100px",value:le(B[0])||0,unit:se(B[0])||"px",options:te,className:t(U.mr1,U.mb1)}),e.jsx(oe,{min:"0",inputHandler:Y,sizeHandler:({unitKey:n,unitValue:o,indexId:r})=>Y({value:o,unit:n,indexId:r}),id:"1",label:e.jsx(ce,{size:"14",variant:"right"}),width:"100px",value:le(B[1])||0,unit:se(B[1])||"px",options:te,className:t(U.mr1,U.mb1)}),e.jsx(oe,{min:"0",inputHandler:Y,sizeHandler:({unitKey:n,unitValue:o,indexId:r})=>Y({value:o,unit:n,indexId:r}),id:"2",label:e.jsx(ce,{size:"14",variant:"bottom"}),width:"100px",value:le(B[2])||0,unit:se(B[2])||"px",options:te,className:t(U.mr1,U.mb1)}),e.jsx(oe,{min:"0",inputHandler:Y,sizeHandler:({unitKey:n,unitValue:o,indexId:r})=>Y({value:o,unit:n,indexId:r}),id:"3",label:e.jsx(ce,{size:"14",variant:"left"}),width:"100px",value:le(B[3])||0,unit:se(B[3])||"px",options:te,className:t(U.mr1,U.mb1)})]})})]})]})]})]})]})]})}),e.jsx(ks,{index:d,msgId:c.id||v,active:h,setActive:R,msgType:E||"snackbar",position:q||"top-center",animation:O||"fade",autoHide:m||!1,duration:x||1,message:c==null?void 0:c.msg,confirmationStyles:s||""}),e.jsx(ws,{id:`conf-${d}`,formFields:k,value:c==null?void 0:c.msg,onChangeHandler:n=>Ze(n,d)})]})}var Ss=M.memo($s);const Ke={snackbar:["Please Select","top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],modal:{"slide-up":["Please Select","center-center","bottom-center"],"slide-down":["Please Select","top-center","center-center"]}},Ps={snackbar:["Please Select","fade","scale","slide-up","slide-down","slide-left","slide-right"],modal:["Please Select","fade","scale","slide-up","slide-down"],below:["Please Select","fade","scale"]},l={styleButton:{oe:"none",p:"10px 10px",fs:"14px",fw:"600",b:"none",bd:"none",brs:8,w:"auto",h:33,flxi:"center",mr:2,zx:1,ow:"hidden",curp:1,pn:"relative",cr:"var(--b-54-12)",":disabled":{oy:.4,cur:"not-allowed"},":focus:not(:focus-visible)":{bs:"none"},":hover:is(:not(:disabled),:not(.active))":{cr:"var(--b-53-13)"},":focus-visible":{bs:"0 0 0 2px var(--b-50) inset"},"&.active":{bd:"var(--b-79-96)",cr:"var(--b-50)"},"::before":{ct:'""',zx:-1,pn:"absolute",size:0,tn:"400ms border, opacity 300ms",oy:0,b:"0px solid var(--white-0-81-32)"},":hover::before":{b:"60px solid var(--white-0-81-32)",oy:1},":disabled::before":{dy:"none"}},input:{h:"30px !important",fs:"12px !important",fw:600,bd:"#f0f0f1 !important",brs:"8px !important",b:"none !important",":hover":{bd:"var(--b-50-95) !important",cr:"var(--b-50) !important"},":focus":{bs:"0 0 0 2px var(--b-50) !important"}},selectInput:{h:"30px !important",fs:"12px !important",fw:600,bc:"#f0f0f1 !important",brs:"8px !important",b:"none !important",cr:"var(--dp-blue) !important",":hover":{cr:"var(--b-50) !important"},":focus":{bs:"0 0 0 2px var(--b-50) !important"}},colorInput:{w:30,p:0,brs:"8px !important","-webkit-appearance":"none","::-webkit-color-swatch-wrapper":{p:0},"::-webkit-color-swatch":{b:"1px solid #afafaf",brs:"8px !important"},"::-moz-color-swatch":{b:"1px solid #afafaf",brs:"8px !important"},"::-moz-focus-inner":{b:"1px solid #afafaf",brs:"8px !important"}},segmentcontainer:{flx:"align-center",jc:"flex-end",flxp:"wrap",mt:10,w:220},segmentWrapper:{w:255,p:"0px 20px"},titlecontainer:{flx:"center-between"},title:{fs:12,fw:500},label:{fs:"12px",fw:"500"},backgrounLabel:{w:195},valueLabel:{fs:"12px"}};function Ms({removeIntegration:d}){var _,F;const[c,t]=M.useState({show:!1,action:null}),[g,P]=he(je),k=Z(me),y=Z(Ye),i=A(g),{css:h}=ue(),R=(w,$)=>{i.type.successMsg[$].title=w.target.value,P(i),k(T=>N(j({},T),{unsaved:!0}))},z=()=>{var m;(m=i==null?void 0:i.type)!=null&&m.successMsg||(i.type=j({successMsg:[]},i.type));const w=i.type.successMsg.length,$=`_tmp_${w}_conf_id`,T={title:`Untitled Message ${w+1}`,msg:f('<p style="margin:0">Successfully Submitted.</p>'),config:Fe},{msgType:K,position:E,animation:q,styles:O}=Fe||{};y(x=>D(x,s=>{s.confirmations.push({confMsgId:$,style:Je("formId",$,K,E,q,O)})})),i.type.successMsg.push(T),P(i),k(x=>N(j({},x),{unsaved:!0}))},I=()=>{t({show:!1})},L=w=>{t({show:!0,action:()=>W(w)})},W=w=>ne(this,null,function*(){const $=i.type.successMsg.splice(w,1)[0];t({show:!1}),y(T=>D(T,K=>{const E=$.id||`_tmp_${w}_conf_id`;K.confirmations=K.confirmations.filter(q=>q.confMsgId!==E)})),$.id!==void 0&&((yield d($.id,"msg"))||i.type.successMsg.splice(w,0,$)),P(i)});return e.jsxs("div",{children:[e.jsx(ye,{action:c.action,show:c.show,body:f("Are you sure to delete this message ?"),btnTxt:f("Delete"),close:I}),(_=g==null?void 0:g.type)!=null&&_.successMsg?(F=g.type.successMsg)==null?void 0:F.map((w,$)=>e.jsxs("div",{className:"flx",children:[e.jsx(ke,{title:w.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:T=>R(T,$),children:e.jsx(Ss,{id:$,msgItem:w},`msg-${$+1}`)}),e.jsx(V,{onClick:()=>L($),icn:!0,className:"sh-sm white mt-2",children:e.jsx(ie,{size:16})})]},`f-m-${$+1}`)):e.jsxs("div",{className:h(U.btcdEmpty,U.txCenter),children:[e.jsx(Ce,{size:"50"}),f("Empty")]}),e.jsx("div",{className:"txt-center",children:e.jsx(V,{onClick:z,icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":`'${f("Add More Alternative Success Message")}'`},children:e.jsx(ee,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}var Ts=M.memo(Ms);function Hs({removeIntegration:d}){var O;const[c,t]=M.useState({show:!1,action:null}),[g,P]=M.useState(null),[k,y]=he(je),i=xe(Ne),h=Z(me),{css:R}=ue();ys("bitforms_get_all_wp_pages",null,{onSuccess:m=>P(m)});const z=(m,x)=>{const s=A(k);s.type.redirectPage[x].title=m.target.value,y(s),h(v=>N(j({},v),{unsaved:!0}))},I=(m,x)=>{const s=A(k);s.type.redirectPage[x].url=m.target.value,y(s),h(v=>N(j({},v),{unsaved:!0}))},L=(m,x)=>{const s=A(k);s.type.redirectPage[x].url=m,y(s),h(v=>N(j({},v),{unsaved:!0}))},W=m=>m.match(/(\?|&)([^=]+)=([^&]+|)/gi),_=(m,x,s,v)=>{const b=A(k);x!==""?m==="key"?b.type.redirectPage[v].url=b.type.redirectPage[v].url.replace(s,`${s.charAt(0)}${x}=${s.split("=")[1]}`):b.type.redirectPage[v].url=b.type.redirectPage[v].url.replace(s,`${s.split("=")[0]}=${x}`):s.match(/\?/g)===null?b.type.redirectPage[v].url=b.type.redirectPage[v].url.replace(s,""):b.type.redirectPage[v].url=b.type.redirectPage[v].url.replace(`${s}&`,"?"),y(b),h(Q=>N(j({},Q),{unsaved:!0}))},F=(m,x)=>{const s=A(k);s.type.redirectPage[m].url=s.type.redirectPage[m].url.replace(x,""),y(s),h(v=>N(j({},v),{unsaved:!0}))},w=m=>{const x=A(k);x.type.redirectPage[m].url.match(/\?/g)!==null?x.type.redirectPage[m].url+="&key=value":x.type.redirectPage[m].url+="?key=value",y(x),h(s=>N(j({},s),{unsaved:!0}))},$=(m,x,s)=>{const v=A(k),b=s.split("=");b[1]=m,v.type.redirectPage[x].url=v.type.redirectPage[x].url.replace(s,b.join("=")),y(v),h(Q=>N(j({},Q),{unsaved:!0}))},T=()=>{var x;const m=A(k);(x=m==null?void 0:m.type)!=null&&x.redirectPage?m.type.redirectPage.push({title:`Redirect Url ${m.type.redirectPage.length+1}`,url:""}):(m.type=j({redirectPage:[]},m.type),m.type.redirectPage.push({title:`Redirect Url ${m.type.redirectPage.length+1}`,url:""})),y(m),h(s=>N(j({},s),{unsaved:!0}))},K=m=>ne(this,null,function*(){const x=A(k),s=x.type.redirectPage[m];x.type.redirectPage.splice(m,1),y(x),c.show=!1,t(j({},c)),s.id!==void 0&&((yield d(s.id,"url"))||(x.type.redirectPage.splice(m,0,s),y(x)))}),E=()=>{c.show=!1,t(j({},c))},q=m=>{c.show=!0,c.action=()=>K(m),t(j({},c))};return e.jsxs("div",{children:[e.jsx(ye,{action:c.action,show:c.show,body:f("Are you sure to delete this URL ?"),btnTxt:f("Delete"),close:E}),(O=k==null?void 0:k.type)!=null&&O.redirectPage?k.type.redirectPage.map((m,x)=>e.jsxs("div",{className:"flx",children:[e.jsxs(ke,{title:m.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:s=>z(s,x),children:[e.jsx("div",{className:"f-m",children:f("Select A Page:")}),e.jsxs("select",{className:"btcd-paper-inp mt-1",onChange:s=>I(s,x),children:[e.jsx("option",{value:"",children:f("Custom Link")}),g&&g.map((s,v)=>e.jsx("option",{value:s.url,children:s.title},`r-url-${v+22}`))]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"f-m",children:"Link:"}),e.jsx("input",{onChange:s=>L(s.target.value,x),className:"btcd-paper-inp mt-1",type:"text",value:m.url}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"f-m",children:f("Add Url Parameter: (optional)")}),e.jsx("div",{className:"btcd-param-t-wrp mt-1",children:e.jsxs("div",{className:"btcd-param-t",children:[e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:f("Key")}),e.jsx("div",{className:"td",children:f("Value")})]}),W(m.url)!==null&&W(m.url).map((s,v)=>e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:e.jsx("input",{className:"btcd-paper-inp p-i-sm",onChange:b=>_("key",b.target.value,s,x),type:"text",value:s.split("=")[0].substr(1)})}),e.jsx("div",{className:"td",children:e.jsx("input",{className:"btcd-paper-inp p-i-sm",onChange:b=>_("val",b.target.value,s,x),type:"text",value:s.split("=")[1]})}),e.jsxs("div",{className:"flx p-atn",children:[e.jsx(V,{onClick:()=>F(x,s),icn:!0,children:e.jsx(ie,{size:16})}),e.jsx("span",{className:"tooltip",style:{"--tooltip-txt":`'${f("set Form Field")}'`,position:"relative"},children:e.jsxs("select",{className:"btcd-paper-inp p-i-sm mt-1",onChange:b=>$(b.target.value,x,s),defaultValue:s.split("=")[1],children:[e.jsx("option",{value:"",children:f("Select Form Field")}),i!==null&&i.map(b=>!b.type.match(/^(file-up|recaptcha)$/)&&e.jsx("option",{value:`\${${b.key}}`,children:b.name},b.key))]})})]})]},`url-p-${v+21}`)),e.jsx(V,{onClick:()=>w(x),className:"add-pram",icn:!0,children:e.jsx(ee,{size:"14",stroke:"3",className:"icn-rotate-45"})})]})})]}),e.jsx(V,{onClick:()=>q(x),icn:!0,className:"sh-sm white mt-2",children:e.jsx(ie,{size:16})})]},`f-u-${x+1}`)):e.jsxs("div",{className:R(U.btcdEmpty,U.txCenter),children:[e.jsx(Ce,{size:"50"}),f("Empty")]}),e.jsx("div",{className:"txt-center",children:e.jsx(V,{onClick:T,icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":`'${f("Add More Alternative URl")}'`},children:e.jsx(ee,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}var As=M.memo(Hs);function Ls({removeIntegration:d}){var Q;const[c,t]=M.useState({show:!1,action:null}),[g,P]=M.useState({id:0,loading:!1}),[k,y]=M.useState({show:!1}),[i,h]=he(je),R=xe(Ne),z=Z(me),{css:I}=ue(),L=M.useRef([]),W=a=>{a&&!L.current.includes(a)&&L.current.push(a)},_=(a,u)=>{const p=A(i);p.type.webHooks[u].title=a.target.value,h(p),z(S=>N(j({},S),{unsaved:!0}))},F=(a,u)=>{const p=A(i);p.type.webHooks[u].url=a,p.type.webHooks[u].params=b(a),h(p),z(S=>N(j({},S),{unsaved:!0}))},w=(a,u)=>{const p=A(i);p.type.webHooks[u].method=a,h(p),z(S=>N(j({},S),{unsaved:!0}))},$=(a,u,p,S)=>{const H=A(i);H.type.webHooks[p].params[S][a]=u,H.type.webHooks[p].url=v(p,H),h(H),z(C=>N(j({},C),{unsaved:!0}))},T=(a,u)=>{const p=A(i);p.type.webHooks[a].params.splice(u,1),p.type.webHooks[a].url=v(a,p),h(p),z(S=>N(j({},S),{unsaved:!0}))},K=a=>{var p;const u=A(i);(p=u.type.webHooks[a])!=null&&p.params||(u.type.webHooks[a].params=[]),u.type.webHooks[a].params.push({key:"key",value:"value"}),u.type.webHooks[a].url=v(a,u),h(u),z(S=>N(j({},S),{unsaved:!0}))},E=()=>{var u;const a=A(i);(u=a==null?void 0:a.type)!=null&&u.webHooks?a.type.webHooks.push({title:`Web Hook ${a.type.webHooks.length+1}`,url:"",method:"GET"}):(a.type=j({webHooks:[]},a.type),a.type.webHooks.push({title:`Web Hook ${a.type.webHooks.length+1}`,url:"",method:"GET"})),h(a),z(p=>N(j({},p),{unsaved:!0}))},q=a=>ne(this,null,function*(){const u=A(i),p=u.type.webHooks[a];u.type.webHooks.splice(a,1),h(u),c.show=!1,t(j({},c)),p.id!==void 0&&((yield d(p.id,"hook"))||(u.type.webHooks.splice(a,0,p),h(u)))}),O=()=>{c.show=!1,t(j({},c))},m=a=>{c.show=!0,c.action=()=>q(a),t(j({},c))},x=a=>{try{return JSON.stringify(a,null,2)}catch(u){return a}},s=a=>{P({id:a,loading:!0});const u=A(i);Qe({hookDetails:u.type.webHooks[a]},"bitforms_test_webhook").then(p=>{if(p&&p.success)P({id:a,loading:!1}),p.data.response.length===0?L.current[a].innerHTML=f("No response from the server"):L.current[a].innerHTML=`<pre>${x(p.data.response)}</pre>`,y({show:!0,msg:f(p.data.msg)});else if(p&&p.data){const S=typeof p.data=="string"?p.data:"Unknown error";y({show:!0,msg:`${S}. ${f("please try again")}`}),P({id:a,loading:!1})}else y({show:!0,msg:f("Webhook tests failed. please try again")}),P({id:a,loading:!1})})},v=(a,u)=>{const{url:p,params:S}=u.type.webHooks[a];try{const H=new URL(p);H.search="";let C=H.href;return S.length&&(C+="?",C+=S.map(({key:X,value:de})=>`${X}=${de}`).join("&")),C}catch(H){return""}},b=a=>{try{const u=new URLSearchParams(new URL(a).search),p=[];return u.forEach((S,H)=>{p.push({key:H,value:S})}),p}catch(u){return[]}};return e.jsxs("div",{children:[e.jsx(us,{snack:k,setSnackbar:y}),e.jsx(ye,{action:c.action,show:c.show,body:f("Are you sure to delete this web hook?"),btnTxt:f("Delete"),close:O}),(Q=i==null?void 0:i.type)!=null&&Q.webHooks?i.type.webHooks.map((a,u)=>e.jsxs("div",{className:"flx",children:[e.jsxs(ke,{title:a.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:p=>_(p,u),children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsxs("div",{className:"w-7 mr-2",children:[e.jsx("div",{className:"f-m",children:f("Link:")}),e.jsx("input",{onChange:p=>F(p.target.value,u),className:"btcd-paper-inp mt-1",type:"text",value:a.url})]}),e.jsxs("div",{className:"w-3",children:[e.jsx("div",{className:"f-m",children:f("Method:")}),e.jsxs("select",{onChange:p=>w(p.target.value,u),defaultValue:a.method,className:"btcd-paper-inp mt-1",children:[e.jsx("option",{value:"GET",children:"GET"}),e.jsx("option",{value:"POST",children:"POST"}),e.jsx("option",{value:"PUT",children:"PUT"}),e.jsx("option",{value:"PATCH",children:"PATCH"}),e.jsx("option",{value:"OPTION",children:"OPTION"}),e.jsx("option",{value:"DELETE",children:"DELETE"}),e.jsx("option",{value:"TRACE",children:"TRACE"}),e.jsx("option",{value:"CONNECT",children:"CONNECT"})]})]})]}),e.jsx("div",{className:"f-m mt-2",children:f("Add Url Parameter: (optional)")}),e.jsx("div",{className:"btcd-param-t-wrp mt-1",children:e.jsxs("div",{className:"btcd-param-t",children:[e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:f("Key")}),e.jsx("div",{className:"td",children:f("Value")})]}),(a==null?void 0:a.params)&&a.params.map(({key:p,value:S},H)=>e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:e.jsx("input",{className:"btcd-paper-inp p-i-sm",onChange:C=>$("key",C.target.value,u,H),type:"text",value:p})}),e.jsx("div",{className:"td",children:e.jsx("input",{className:"btcd-paper-inp p-i-sm",onChange:C=>$("value",C.target.value,u,H),type:"text",value:S})}),e.jsxs("div",{className:"flx p-atn",children:[e.jsx(V,{onClick:()=>T(u,H),icn:!0,children:e.jsx(ie,{size:16})}),e.jsx(Cs,{options:R.map(C=>({label:C.name,value:`\${${C.key}}`})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:C=>$("value",C,u,H),defaultValue:S})]})]},`url-p-${H+11}`)),e.jsx(V,{onClick:()=>K(u),className:"add-pram",icn:!0,children:e.jsx(ee,{size:"14",stroke:"3",className:"icn-rotate-45"})})]})}),e.jsxs(V,{onClick:()=>s(u),className:I(pe.btn,pe.btn_blue_otln),children:[f("Test Webhook"),g.id===u&&g.loading&&e.jsx(ms,{size:14,clr:"#022217",className:"ml-2"}),e.jsx(xs,{size:18,className:"ml-1"})]}),e.jsx("br",{}),e.jsxs("div",{className:"wh-resp-box",children:[e.jsx("div",{className:"f-m wh-resp-box-title",children:f("Response:")}),e.jsx("div",{className:"wh-resp-box-content",ref:W,children:" Test Webhook to see the response."})]}),e.jsx("br",{})]}),e.jsx(V,{onClick:()=>m(u),icn:!0,className:"sh-sm white mt-2",children:e.jsx(ie,{size:16})})]},`f-u-${u+1}`)):e.jsxs("div",{className:I(U.btcdEmpty,U.txCenter),children:[e.jsx(Ce,{size:"50"}),f("Empty")]}),e.jsx("div",{className:"txt-center",children:e.jsx(V,{onClick:E,icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":`'${f("Add More Hook")}'`},children:e.jsx(ee,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}var Es=M.memo(Ls);function Xs(){const{"*":d,formType:c}=qe(),t=xe(js),g=`/form/settings/${c}/${t}/confirmations`,P=(k,y=null)=>ne(this,null,function*(){let i="bitforms_delete_integration";y&&y==="msg"&&(i="bitforms_delete_success_messsage");let h=yield Qe({formID:t,id:k},i);return h!==void 0?(h=h.success,We.success("Deleted Successfully")):h.data&&h.data.data?(h=h.data.data,We.error(`Delete failed. Cause: ${h.data.data}`)):h=null,h});return e.jsxs("div",{className:"mt-4",style:{width:900},children:[e.jsx("h2",{children:f("Confirmations")}),e.jsxs("div",{children:[e.jsx(Ie,{to:g,className:`btcd-f-c-t-o mr-4 sh-sm ${d===""&&"btcd-f-c-t-o-a"}`,children:f("Success/Error Messages")}),e.jsx(Ie,{to:`${g}/redirect-url`,className:`btcd-f-c-t-o mr-4 sh-sm ${d==="redirect-url"&&"btcd-f-c-t-o-a"}`,children:f("Redirect Page")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(hs,{children:[e.jsx(be,{index:!0,element:e.jsx(Ts,{removeIntegration:P})}),e.jsx(be,{path:"redirect-url",element:e.jsx(As,{removeIntegration:P})}),e.jsx(be,{path:"webhooks",element:e.jsx(Es,{removeIntegration:P})})]})]})}export{Xs as default};

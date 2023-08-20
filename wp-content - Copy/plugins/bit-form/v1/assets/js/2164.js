"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[2164],{44246:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(4637);const l=function(e){var t=e.className,i=e.disabled,l=e.checked,s=e.onChange,a=e.radio,c=e.name,o=e.title,r=e.value,d=e.sqr;return(0,n.jsxs)("label",{className:"btcd-ck-wrp "+t,children:[o,(0,n.jsx)("input",{type:a?"radio":"checkbox",checked:l,onChange:s,name:c,value:r,disabled:i}),(0,n.jsx)("span",{className:"btcd-mrk "+(!d&&"br-50")+" "+(a?"rdo":"ck")})]})}},72164:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(665),l=i(59496),s=i(44084),a=i(17607),c=i(47359),o=i(73305),r=i(94248),d=i(14103),u=i(19753),m=i(8665),f=i(37029),h=i(30332),p=i(94557),g=i(84448),v=i(4637);const b=function(e){var t,i,n,l,a,c,r,b=e.action,x=e.lgcGrpInd,j=e.actionInd,_=e.setworkFlows,N=e.actionType,y=(0,s.sJ)(g.AK),k=(0,s.sJ)(g.uJ),C="",w="";null!==k&&k.map((function(e){e.key===b.field&&(w=e.type,C=e.key)}));var A=function(e){_((function(t){return(0,d.ZP)(t,(function(t){t[x].actions[j].val=e}))}))},Z="file-up"!==(null==(t=y[b.field])?void 0:t.typ),O="button"!==(null==(i=y[b.field])?void 0:i.typ),F="onsubmit"!==N,S="onvalidate"!==N,$=Object.entries(y).filter((function(e){return"button"===e[1].typ})).map((function(e){return{key:e[0],name:e[1].txt}}));return(0,v.jsxs)("div",{className:"flx pos-rel btcd-logic-blk",children:[(0,v.jsxs)(h.Z,{label:"Form Fields",value:b.field||"",onChange:function(e){return t=e.target.value,void _((function(e){return(0,d.ZP)(e,(function(e){e[x].actions[j].field=t,e[x].actions[j].val=""}))}));var t},style:{width:720},children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select One","bitform")}),[].concat(k,$).map((function(e){return(0,v.jsx)("option",{value:e.key,children:e.name},"ff-Ab-"+e.key)}))]}),(0,v.jsx)("svg",{height:"35",width:"100",className:"mt-1",children:(0,v.jsx)("line",{x1:"0",y1:"20",x2:"50",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),(0,v.jsxs)(h.Z,{label:"Action",onChange:function(e){return t=e.target.value,void _((function(e){return(0,d.ZP)(e,(function(e){e[x].actions[j].action=t}))}));var t},value:b.action||"",style:{width:400},className:"w-4",children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select One","bitform")}),Z&&O&&S&&(0,v.jsx)("option",{value:"value",children:(0,o.__)("Value","bitform")}),F&&S&&(0,v.jsx)("option",{value:"disable",children:(0,o.__)("Disable","bitform")}),F&&S&&Z&&O&&(0,v.jsx)("option",{value:"readonly",children:(0,o.__)("Readonly","bitform")}),F&&S&&(0,v.jsx)("option",{value:"enable",children:(0,o.__)("Enable","bitform")}),F&&S&&(0,v.jsx)("option",{value:"hide",children:(0,o.__)("Hide","bitform")}),F&&S&&(0,v.jsx)("option",{value:"show",children:(0,o.__)("Show","bitform")}),"onvalidate"===N&&(0,v.jsx)("option",{value:"required",children:(0,o.__)("Required","bitform")}),"onvalidate"===N&&(0,v.jsx)("option",{value:"notrequired",children:(0,o.__)("Not Required","bitform")})]}),"value"===b.action&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("svg",{height:"35",width:"100",className:"mt-1",children:(0,v.jsx)("line",{x1:"0",y1:"20",x2:"40",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),"select"===w||"check"===w||"radio"===w?(0,v.jsx)(u.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:b.val||"",onChange:A,options:"select"===w?null==y||null==(n=y[C])?void 0:n.opt:("check"===w||"radio"===w)&&(null==y||null==(l=y[C])||null==(a=l.opt)?void 0:a.map((function(e){return{label:e.lbl,value:e.val||e.lbl}}))),customValue:null==y||null==(c=y[C])?void 0:c.customOpt,singleSelect:"select"===w?!(null!=y&&null!=(r=y[C])&&r.mul):"check"!==w&&("radio"===w&&!0)}):(0,v.jsx)(f.Z,{onChange:function(e){return A(e.target.value)},label:"Value",value:b.val||""})]}),(0,v.jsx)("div",{className:"btcd-li-side-btn mt-2",children:(0,v.jsx)(m.Z,{onClick:function(){_((function(e){return(0,d.ZP)(e,(function(e){e[x].actions.length>1&&e[x].actions.splice(j,1)}))}))},icn:!0,className:"ml-2 sh-sm white",children:(0,v.jsx)(p.Z,{})})})]})};var x=i(44246),j=i(83524),_=i(1974),N=(i(46850),i(2699));const y=function(e){var t,i=e.fieldVal,n=e.delLogic,l=e.lgcGrpInd,a=e.lgcInd,r=e.subLgcInd,d=e.subSubLgcInd,b=e.value,x=e.addInlineLogic,j=e.changeLogic,_=e.logicValue,y=e.changeValue,k=e.changeFormField,C=e.actionType,w=void 0===C?null:C,A=(0,s.sJ)(g.AK),Z=(0,s.sJ)(g.uJ),O=(0,s.sJ)(g.hi).isPro,F="",S="",$="";null==Z||null==Z.find||Z.find((function(e){if(e.key===i)return F=e.type.match(/^(check|radio)$/)?"text":e.type,S=e.type,$=e.key,!0}));var I=["_bf_custom_date_format()","_bf_user_meta_key()","_bf_query_param()"];return(0,v.jsxs)("div",{className:"flx pos-rel btcd-logic-blk",children:[(0,v.jsx)("span",{className:"btcd-logic-chip mr-2",children:"IF"}),(0,v.jsxs)(h.Z,{label:"Form Fields",value:i||"",style:{width:720},onChange:function(e){return k(e.target.value,l,a,r,d)},children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Form Field","bitform")}),(0,v.jsx)("optgroup",{label:"Form Fields",children:Z.map((function(e){return!e.type.match(/^(file-up|recaptcha)$/)&&(0,v.jsx)("option",{value:e.key,children:e.name},"ff-lb-"+e.key)}))}),!(null!=w&&w.match(/^(oninput)$/))&&(0,v.jsx)("optgroup",{label:"General Smart Codes "+(O?"":"(PRO)"),children:O&&(null==N.C?void 0:N.C.map((function(e){return!I.includes(e.name)&&(0,v.jsx)("option",{value:"${"+e.name+"}",children:e.label},"ff-rm-"+e.name)})))})]}),(0,v.jsx)("svg",{height:"35",width:"100",className:"mt-1",children:(0,v.jsx)("line",{x1:"0",y1:"20",x2:"40",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),(0,v.jsxs)(h.Z,{label:"Logic",value:_||"",onChange:function(e){return j(e.target.value,l,a,r,d)},className:"w-5",children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select One","bitform")}),(0,v.jsx)("option",{value:"equal",children:(0,o.__)("Equal","bitform")}),(0,v.jsx)("option",{value:"not_equal",children:(0,o.__)("Not Equal","bitform")}),(0,v.jsx)("option",{value:"null",children:(0,o.__)("Is Null","bitform")}),(0,v.jsx)("option",{value:"not_null",children:(0,o.__)("Is Not Null","bitform")}),!F.match(/^(date|time|datetime|month|week)$/)&&(0,v.jsx)("option",{value:"contain",children:(0,o.__)("Contain","bitform")}),("select"===S&&(null==A||null==(t=A[$])?void 0:t.mul)||"check"===S)&&(0,v.jsx)("option",{value:"contain_all",children:(0,o.__)("Contain All","bitform")}),!F.match(/^(date|time|datetime|month|week)$/)&&(0,v.jsx)("option",{value:"not_contain",children:(0,o.__)("Not Contain","bitform")}),"number"===F&&(0,v.jsx)("option",{value:"greater",children:(0,o.__)("Greater Than","bitform")}),"number"===F&&(0,v.jsx)("option",{value:"less",children:(0,o.__)("Less Than","bitform")}),"number"===F&&(0,v.jsx)("option",{value:"greater_or_equal",children:(0,o.__)("Greater Than or Equal","bitform")}),"number"===F&&(0,v.jsx)("option",{value:"less_or_equal",children:(0,o.__)("Less Than or Equal","bitform")}),!F.match(/^(color|url|password|email|date|time|datetime|month|week)$/)&&(0,v.jsx)("option",{value:"start_with",children:(0,o.__)("Start With","bitform")}),!F.match(/^(color|url|password|email|date|time|datetime|month|week)$/)&&(0,v.jsx)("option",{value:"end_with",children:(0,o.__)("End With","bitform")})]}),(0,v.jsx)("svg",{height:"35",width:"100",className:"mt-1",children:(0,v.jsx)("line",{x1:"0",y1:"20",x2:"40",y2:"20",style:{stroke:"#b9c5ff",strokeWidth:1}})}),S.match(/select|check|radio/g)?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.Z,{className:"msl-wrp-options btcd-paper-drpdwn w-10",defaultValue:b||"",onChange:function(e){return y(e,l,a,r,d)},options:function(){var e,t,i,n=[];"select"===S?n=null==A||null==(e=A[$])?void 0:e.opt:n=null==A||null==(t=A[$])||null==(i=t.opt)?void 0:i.map((function(e){return{label:e.lbl,value:e.val||e.lbl}}));return n}(),customValue:!0,fldType:S})}):(0,v.jsx)(f.Z,{label:"Value",type:F,disabled:"null"===_||"not_null"===_,onChange:function(e){return y(e.target.value,l,a,r,d)},value:b||""}),(0,v.jsxs)("div",{className:"btcd-li-side-btn",children:[(0,v.jsx)(m.Z,{onClick:function(){return n(l,a,r,d)},icn:!0,className:"ml-2 white mr-2 sh-sm",children:(0,v.jsx)(p.Z,{size:"16"})}),(0,v.jsxs)(m.Z,{onClick:function(){return x("and",l,a,r,d)},className:"white mr-2 sh-sm",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"]}),(0,v.jsxs)(m.Z,{onClick:function(){return x("or",l,a,r,d)},className:"white sh-sm",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"]})]})]})};var k=i(5182),C=i(2598),w=i(77111),A=i(33591);function Z(e,t){var i="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}const F=function(e){var t=e.formID,i=(0,l.useState)({show:!1}),d=i[0],u=i[1],f=(0,s.FV)(g.XX),N=f[0],O=f[1],F=(0,s.sJ)(g.u),S=(0,s.sJ)(g.Q4),$=(0,s.sJ)(g.UL),I=(0,s.sJ)(g.uJ),L=(0,A.p$)(N),M=(0,s.sJ)(g.hi),R=M.isPro,E=function(){var e=[];if(ne()){var t=[];I.map((function(e){"email"===e.type&&t.push({label:e.name,value:"${"+e.key+"}"})})),e.push({title:"Form Fields",type:"group",childs:t})}return M.userMail&&Array.isArray(M.userMail)&&e.push({title:"WP Emails",type:"group",childs:M.userMail}),e},T=function(e,t,i){var n=L[i].successAction.find((function(t){return t.type===e}));return void 0!==n?n.details[t]:""},J=function(e,t){var i,n;return null==(i=L[t])||null==(n=i.successAction)?void 0:n.some((function(t){return t.type===e}))},V=function(e){return(0,v.jsxs)(v.Fragment,{children:["onload"===e&&"On Load","oninput"===e&&"On Field Input","onvalidate"===e&&"On Form Validate","onsubmit"===e&&"On Form Submit","create_edit"===e&&"Record Create/Edit","create"===e&&"Record Create","edit"===e&&"Record Edit","delete"===e&&"Record Delete","always"===e&&"Always","cond"===e&&"With Condition"]})},G=function(e,t){"and"===e?O((function(e){var i=(0,A.p$)(e);return i[t].logics.push("and"),i[t].logics.push({field:"",logic:"",val:""}),i})):"or"===e?O((function(e){var i=(0,A.p$)(e);return i[t].logics.push("or"),i[t].logics.push({field:"",logic:"",val:""}),i})):"orGrp"===e?O((function(e){var i=(0,A.p$)(e);return i[t].logics.push("or"),i[t].logics.push([{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]),i})):"andGrp"===e&&O((function(e){var i=(0,A.p$)(e);return i[t].logics.push("and"),i[t].logics.push([{field:"",logic:"",val:""},"and",{field:"",logic:"",val:""}]),i}))},D=function(e,t,i){"and"===e?O((function(e){var n=(0,A.p$)(e);return n[t].logics[i].push("and"),n[t].logics[i].push({field:"",logic:"",val:""}),n})):"or"===e?O((function(e){var n=(0,A.p$)(e);return n[t].logics[i].push("or"),n[t].logics[i].push({field:"",logic:"",val:""}),n})):"orGrp"===e?O((function(e){var n=(0,A.p$)(e);return n[t].logics[i].push("or"),n[t].logics[i].push([{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]),n})):"andGrp"===e&&O((function(e){var n=(0,A.p$)(e);return n[t].logics[i].push("and"),n[t].logics[i].push([{field:"",logic:"",val:""},"and",{field:"",logic:"",val:""}]),n}))},z=function(e,t,i,n){"and"===e?O((function(e){var l=(0,A.p$)(e);return l[t].logics[i][n].push("and"),l[t].logics[i][n].push({field:"",logic:"",val:""}),l})):"or"===e&&O((function(e){var l=(0,A.p$)(e);return l[t].logics[i][n].push("or"),l[t].logics[i][n].push({field:"",logic:"",val:""}),l}))},P=function(e,t,i,n,l){O(void 0!==l?function(s){var a=(0,A.p$)(s);return a[t].logics[i][n][l]=e,a}:void 0!==n?function(l){var s=(0,A.p$)(l);return s[t].logics[i][n]=e,s}:function(n){var l=(0,A.p$)(n);return l[t].logics[i]=e,l})},q=function(e,t,i,n,l){O(void 0!==l?function(s){var a=(0,A.p$)(s);return"null"===e&&(a[t].logics[i][n][l].val=""),a[t].logics[i][n][l].logic=e,a}:void 0!==n?function(l){var s=(0,A.p$)(l);return"null"===e&&(s[t].logics[i][n].val=""),s[t].logics[i][n].logic=e,s}:function(n){var l=(0,A.p$)(n);return"null"===e&&(l[t].logics[i].val=""),l[t].logics[i].logic=e,l})},W=function(e,t,i,n,l){O(void 0!==l?function(s){var a=(0,A.p$)(s);return a[t].logics[i][n][l].val=e,a}:void 0!==n?function(l){var s=(0,A.p$)(l);return s[t].logics[i][n].val=e,s}:function(n){var l=(0,A.p$)(n);return l[t].logics[i].val=e,l})},H=function(e,t,i,n,l){O(void 0!==l?function(s){var a=(0,A.p$)(s);return a[t].logics[i][n][l].field=e,a[t].logics[i][n][l].val="",a}:void 0!==n?function(l){var s=(0,A.p$)(l);return s[t].logics[i][n].field=e,s[t].logics[i][n].val="",s}:function(n){var l=(0,A.p$)(n);return l[t].logics[i].field=e,l[t].logics[i].val="",l})},B=function(e,t,i,n){L[e].logics.length>1&&O(void 0!==n?function(l){var s=(0,A.p$)(l);if(s[e].logics[t][i].length===n+1)if(3===s[e].logics[t][i].length){var a=s[e].logics[t][i][n-2];s[e].logics[t].splice(i,1),s[e].logics[t].push(a)}else s[e].logics[t][i].splice(n-1,2);else if(3===s[e].logics[t][i].length){var c=s[e].logics[t][i][n+2];s[e].logics[t].splice(i,1),s[e].logics[t].push(c)}else s[e].logics[t][i].splice(n,2);return s}:void 0!==i?function(n){var l=(0,A.p$)(n);if(l[e].logics[t].length===i+1)if(3===l[e].logics[t].length){var s=l[e].logics[t][i-2];l[e].logics.splice(t,1),l[e].logics.splice(t,0,s)}else l[e].logics[t].splice(i-1,2);else if(3===l[e].logics[t].length){var a=l[e].logics[t][i+2];l[e].logics.splice(t,1),l[e].logics.splice(t,0,a)}else l[e].logics[t].splice(i,2);return l}:function(i){var n=(0,A.p$)(i);return 0!==t?n[e].logics.splice(t-1,2):n[e].logics.splice(t,2),n})},U=function(e,t,i,n,l){O("and"===e?function(e){var s=(0,A.p$)(e);return void 0!==l?s[t].logics[i][n].splice(l+1,0,"and",{field:"",logic:"",val:""}):void 0!==n?s[t].logics[i].splice(n+1,0,"and",{field:"",logic:"",val:""}):s[t].logics.splice(i+1,0,"and",{field:"",logic:"",val:""}),s}:function(e){var s=(0,A.p$)(e);return void 0!==l?s[t].logics[i][n].splice(l+1,0,"or",{field:"",logic:"",val:""}):void 0!==n?s[t].logics[i].splice(n+1,0,"or",{field:"",logic:"",val:""}):s[t].logics.splice(i+1,0,"or",{field:"",logic:"",val:""}),s})},K=function(e,t){"onsubmit"===e?L[t].actions.map((function(e){e.action="value"})):"onvalidate"===e&&(L[t].action_behaviour="cond"),L[t].action_type=e,O([].concat(L))},X=function(e,t){"delete"===e?delete L[t].action_type:void 0===L[t].action_type&&(L[t].action_type="onload"),L[t].action_run=e,O([].concat(L))},Q=function(e,t){L[t].action_behaviour=e,O([].concat(L))},Y=function(e,t,i){if("tem"===e){for(var n=0;n<L[i].successAction.length;n+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[n].type)){L[i].successAction[n].details.id=t.target.value;break}}else if("from"===e){for(var l=0;l<L[i].successAction.length;l+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[l].type)){L[i].successAction[l].details.from=t;break}}else if("to"===e){for(var s=0;s<L[i].successAction.length;s+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[s].type)){L[i].successAction[s].details.to=t?t.split(","):[];break}}else if("cc"===e){for(var a=0;a<L[i].successAction.length;a+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[a].type)){L[i].successAction[a].details.cc=t?t.split(","):[];break}}else if("bcc"===e){for(var c=0;c<L[i].successAction.length;c+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[c].type)){L[i].successAction[c].details.bcc=t?t.split(","):[];break}}else if("replyto"===e){for(var o=0;o<L[i].successAction.length;o+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[o].type)){L[i].successAction[o].details.replyto=t?t.split(","):[];break}}else if("attachment"===e)for(var r=0;r<L[i].successAction.length;r+=1)if(["mailNotify","dblOptin"].includes(L[i].successAction[r].type)){L[i].successAction[r].details.attachment=t?t.split(","):[];break}O([].concat(L))},ee=function(e,t,i){if(e)"mailNotify"===t||"dblOptin"===t?L[i].successAction.push({type:t,details:{}}):L[i].successAction.push({type:t,details:{id:""}});else for(var n=0;n<L[i].successAction.length;n+=1)if(L[i].successAction[n].type===t){L[i].successAction.splice(n,1);break}O([].concat(L))},te=function(){d.show=!1,u((0,n.Z)({},d))},ie=function(e){d.btnTxt="Delete",d.body="Are you sure to delete this conditional logic?",d.btnClass="",d.action=function(){!function(e){if(L[e].id){var i=(0,w.Z)({formID:t,id:L[e].id},"bitforms_delete_workflow").then((function(t){void 0!==t&&t.success&&(L.splice(e,1),O([].concat(L)))}));a.ZP.promise(i,{success:"Successfully Deleted.",loading:"Deleting...",error:"Error occurred, Try again."})}else L.splice(e,1),O([].concat(L))}(e),te()},d.show=!0,u((0,n.Z)({},d))},ne=function(){for(var e,t=Z(I);!(e=t()).done;){if("email"===e.value.type)return!0}return!1},le=function(){for(var e,t=[],i=Z(I);!(e=i()).done;){var n=e.value;"file-up"===n.type&&t.push({label:n.name,value:n.key})}return t};return(0,v.jsxs)("div",{className:"btcd-workflow",style:{width:900},children:[(0,v.jsx)(j.Z,{show:d.show,close:te,btnTxt:d.btnTxt,btnClass:d.btnClass,body:d.body,action:d.action}),(0,v.jsx)("h2",{children:(0,o.__)("Conditional Logics","bitform")}),(!R&&!L.length||R)&&(0,v.jsxs)(m.Z,{className:"blue",onClick:function(){L.unshift({title:"Action "+(L.length+1),action_type:"onload",action_run:"create_edit",action_behaviour:"cond",logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}],actions:[{field:"",action:"value"}],successAction:[]}),O([].concat(L))},children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),(0,o.__)("Add Conditional Logic","bitform")]}),L.length>0?L.map((function(e,t){var i,n,s,a,d,u,f,g,j;return(0,v.jsxs)(l.Fragment,{children:[(0,v.jsxs)("div",{className:"workflow-grp d-flx mt-2",children:[(0,v.jsxs)(r.Z,{title:""+e.title,header:(0,v.jsxs)("small",{className:"f-right txt-dp mr-4",children:[(0,v.jsxs)("span",{className:"mr-2",children:[(0,v.jsx)("i",{className:"btcd-chat-dot mr-1"}),V(e.action_run)]}),void 0!==e.action_type&&(0,v.jsxs)("span",{className:"mr-2",children:[(0,v.jsx)("i",{className:"btcd-chat-dot mr-1"}),V(e.action_type)]}),(0,v.jsxs)("span",{children:[(0,v.jsx)("i",{className:"btcd-chat-dot mr-1"}),V(e.action_behaviour)]})]}),titleEditable:!0,onTitleChange:function(e){return function(e,t){L[t].title=e.target.value,O([].concat(L))}(e,t)},notScroll:!0,cls:R?"w-9":"w-10",children:[(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsx)("b",{className:"txt-dp",children:(0,v.jsx)("small",{children:"Action Run When:"})}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return X(e.target.value,t)},name:"ar-"+(t+28),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Record Create/Edit","bitform")}),checked:"create_edit"===e.action_run,value:"create_edit"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return X(e.target.value,t)},name:"ar-"+(t+28),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Record Create","bitform")}),checked:"create"===e.action_run,value:"create"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return X(e.target.value,t)},name:"ar-"+(t+28),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Record Edit","bitform")}),checked:"edit"===e.action_run,value:"edit"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return X(e.target.value,t)},name:"ar-"+(t+28),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Record Delete","bitform")}),checked:"delete"===e.action_run,value:"delete"})]}),"delete"!==e.action_run&&(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsx)("b",{className:"txt-dp",children:(0,v.jsx)("small",{children:"Action Effect:"})}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return K(e.target.value,t)},name:"at-"+(t+26),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("On Form Load","bitform")}),checked:"onload"===e.action_type,value:"onload"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return K(e.target.value,t)},name:"at-"+(t+26),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("On Field Input","bitform")}),checked:"oninput"===e.action_type,value:"oninput"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return K(e.target.value,t)},name:"at-"+(t+26),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("On Form Validate","bitform")}),checked:"onvalidate"===e.action_type,value:"onvalidate"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return K(e.target.value,t)},name:"at-"+(t+26),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("On Form Submit","bitform")}),checked:"onsubmit"===e.action_type,value:"onsubmit"})]}),(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsx)("b",{className:"txt-dp",children:(0,v.jsx)("small",{children:"Action Behaviour:"})}),!(null!=e&&null!=(i=e.action_type)&&i.match(/^(onvalidate|oninput)$/))&&(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return Q(e.target.value,t)},name:"ab-"+(t+111),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Always","bitform")}),checked:"always"===e.action_behaviour,value:"always"}),(0,v.jsx)(x.Z,{radio:!0,onChange:function(e){return Q(e.target.value,t)},name:"ab-"+(t+111),title:(0,v.jsx)("small",{className:"txt-dp",children:(0,o.__)("Condition","bitform")}),checked:"cond"===e.action_behaviour,value:"cond"})]}),(0,v.jsxs)("div",{children:["cond"===e.action_behaviour&&e.logics.map((function(i,n){return(0,v.jsxs)("span",{children:["object"===typeof i&&!Array.isArray(i)&&(0,v.jsx)(y,{fieldVal:i.field,changeFormField:H,changeValue:W,logicValue:i.logic,changeLogic:q,addInlineLogic:U,delLogic:B,lgcGrpInd:t,lgcInd:n,value:i.val,actionType:null==e?void 0:e.action_type}),"string"===typeof i&&(0,v.jsx)(k.Z,{logic:i,onChange:function(e){return P(e.target.value,t,n)}}),Array.isArray(i)&&(0,v.jsxs)("div",{className:"p-2 pl-6 br-10 btcd-logic-grp",children:[i.map((function(i,l){return(0,v.jsxs)("span",{children:["object"===typeof i&&!Array.isArray(i)&&(0,v.jsx)(y,{fieldVal:i.field,changeFormField:H,changeValue:W,logicValue:i.logic,changeLogic:q,addInlineLogic:U,delLogic:B,lgcGrpInd:t,lgcInd:n,subLgcInd:l,value:i.val,actionType:null==e?void 0:e.action_type}),"string"===typeof i&&(0,v.jsx)(k.Z,{logic:i,nested:!0,onChange:function(e){return P(e.target.value,t,n,l)}}),Array.isArray(i)&&(0,v.jsxs)("div",{className:"p-2 pl-6 br-10 btcd-logic-grp",children:[i.map((function(i,s){return(0,v.jsxs)("span",{children:["object"===typeof i&&!Array.isArray(i)&&(0,v.jsx)(y,{fieldVal:i.field,changeFormField:H,changeValue:W,logicValue:i.logic,changeLogic:q,addInlineLogic:U,delLogic:B,lgcGrpInd:t,lgcInd:n,subLgcInd:l,subSubLgcInd:s,value:i.val,actionType:null==e?void 0:e.action_type}),"string"===typeof i&&(0,v.jsx)(k.Z,{logic:i,nested:!0,onChange:function(e){return P(e.target.value,t,n,l,s)}})]},"subsubLogic-"+(s+90))})),(0,v.jsx)("div",{className:" btcd-workFlows-btns",children:(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsx)(m.Z,{icn:!0,className:"blue",children:(0,v.jsx)(c.Z,{size:"14",className:"icn-rotate-45"})}),(0,v.jsxs)(m.Z,{onClick:function(){return z("and",t,n,l)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"," "]}),(0,v.jsxs)(m.Z,{onClick:function(){return z("or",t,n,l)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"," "]})]})})]})]},"subLogic-"+7*l)})),(0,v.jsx)("div",{className:" btcd-workFlows-btns",children:(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsx)(m.Z,{icn:!0,className:"blue sh-sm",children:(0,v.jsx)(c.Z,{size:"14",className:"icn-rotate-45"})}),(0,v.jsxs)(m.Z,{onClick:function(){return D("and",t,n)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"]}),(0,v.jsxs)(m.Z,{onClick:function(){return D("or",t,n)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"]}),(0,v.jsxs)(m.Z,{onClick:function(){return D("orGrp",t,n)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR Group"]}),(0,v.jsxs)(m.Z,{onClick:function(){return D("andGrp",t,n)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND Group"]})]})})]})]},"logic-"+(n+44))})),"cond"===e.action_behaviour&&(0,v.jsx)("div",{className:"btcd-workFlows-btns",children:(0,v.jsxs)("div",{className:"flx",children:[(0,v.jsxs)(m.Z,{onClick:function(){return G("and",t)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND"]}),(0,v.jsxs)(m.Z,{onClick:function(){return G("or",t)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR"]}),(0,v.jsxs)(m.Z,{onClick:function(){return G("orGrp",t)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"OR Group"]}),(0,v.jsxs)(m.Z,{onClick:function(){return G("andGrp",t)},className:"blue ml-2",children:[(0,v.jsx)(c.Z,{size:"10",className:"icn-rotate-45 mr-1"}),"AND Group"]})]})}),(0,v.jsxs)("h3",{className:"txt-dp mt-3 mb-1",children:["cond"===e.action_behaviour?"Then ":"","Action"]}),("onsubmit"===e.action_type||"delete"===e.action_run)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"mb-2",children:["delete"!==e.action_run&&(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"successMsg",t)},className:"ml-2 mt-2",title:(0,o.__)("Success Message","bitform"),checked:J("successMsg",t)}),!e.action_run.match(/^(delete|edit)$/)&&(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"redirectPage",t)},className:"ml-5 mt-2",title:(0,o.__)("Redirect URL","bitform"),checked:J("redirectPage",t)}),(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"webHooks",t)},className:"ml-5 mt-2",title:(0,o.__)("Web Hook","bitform"),checked:J("webHooks",t)}),"delete"!==e.action_run&&(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"integ",t)},className:"ml-5 mt-2",title:(0,o.__)("Integration","bitform"),checked:J("integ",t)})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"mailNotify",t)},className:"ml-2 mt-2",title:(0,o.__)("Email Notification","bitform"),checked:J("mailNotify",t)}),(0,v.jsx)(C.Z,{onChange:function(e){return ee(e.target.checked,"dblOptin",t)},className:"ml-4 mt-2",title:(0,o.__)("Double Opt-In","bitform"),checked:J("dblOptin",t)})]})]}),"delete"===e.action_run&&(0,v.jsx)(x.Z,{onChange:function(e){return function(e,t){L[t].avoid_delete=e,O([].concat(L))}(e.target.checked,t)},checked:L[t].avoid_delete,title:(0,v.jsx)("small",{className:"txt-dp",children:"Prevent Delete"})}),("onsubmit"===e.action_type||"delete"===e.action_run)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"ml-2",children:J("webHooks",t)&&(0,v.jsx)(_.Z,{className:"mt-1",action:function(e){return function(e,t){for(var i=0;i<L[t].successAction.length;i+=1)if("webHooks"===L[t].successAction[i].type){L[t].successAction[i].details.id=e.map((function(e){return e.value}));break}O([].concat(L))}(e,t)},jsonValue:!0,value:T("webHooks","id",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("Web Hooks","bitform")}),titleClassName:"mt-2 w-7 mt-1",isMultiple:!0,options:null==$||null==(n=$.type)||null==(s=n.webHooks)?void 0:s.map((function(e,t){return{label:e.title,value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t})}})),placeholder:(0,o.__)("Select Hooks to Call","bitform")})}),(0,v.jsx)("div",{className:"ml-2",children:J("integ",t)&&(0,v.jsx)(_.Z,{className:"mt-1",action:function(e){return function(e,t){for(var i=0;i<L[t].successAction.length;i+=1)if("integ"===L[t].successAction[i].type){L[t].successAction[i].details.id=e.map((function(e){return e.value}));break}O([].concat(L))}(e,t)},jsonValue:!0,value:T("integ","id",t),title:(0,v.jsx)("span",{className:"f-m mt-1",children:(0,o.__)("Integrations","bitform")}),titleClassName:"mt-2 w-7",isMultiple:!0,options:null==S?void 0:S.map((function(e,t){return{label:e.name,value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t})}})),placeholder:(0,o.__)("Select Integation","bitform")})}),"delete"!==e.action_run&&(0,v.jsxs)("div",{className:"ml-2",children:[(0,v.jsx)("div",{className:"mt-2",children:J("successMsg",t)&&(0,v.jsxs)("label",{className:"f-m ",children:[(0,o.__)("Success Message:","bitform"),(0,v.jsx)("br",{}),(0,v.jsxs)("select",{className:"btcd-paper-inp w-7 mt-1",onChange:function(e){return function(e,t){for(var i=0;i<L[t].successAction.length;i+=1)if("successMsg"===L[t].successAction[i].type){L[t].successAction[i].details.id=e;break}O([].concat(L))}(e.target.value,t)},value:T("successMsg","id",t),children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Message","bitform")}),null==$||null==(a=$.type)||null==(d=a.successMsg)?void 0:d.map((function(e,t){return(0,v.jsx)("option",{value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t}),children:e.title},"sm-"+(t+2.3))}))]})]})}),(0,v.jsx)("div",{className:"mt-2",children:J("redirectPage",t)&&(0,v.jsxs)("label",{className:"f-m",children:[(0,o.__)("Redirect URL:","bitform"),(0,v.jsx)("br",{}),(0,v.jsxs)("select",{className:"btcd-paper-inp w-7 mt-1",onChange:function(e){return function(e,t){for(var i=0;i<L[t].successAction.length;i+=1)if("redirectPage"===L[t].successAction[i].type){L[t].successAction[i].details.id=e;break}O([].concat(L))}(e.target.value,t)},value:T("redirectPage","id",t),children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Page To Redirect","bitform")}),null==$||null==(u=$.type)||null==(f=u.redirectPage)?void 0:f.map((function(e,t){return(0,v.jsx)("option",{value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t}),children:e.title},"sr-"+(t+2.5))}))]})]})})]}),(0,v.jsx)("div",{className:"mt-2 ml-2",children:J("mailNotify",t)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("label",{className:"f-m",children:[(0,o.__)("Email Notification:","bitform"),(0,v.jsx)("br",{}),(0,v.jsxs)("select",{className:"btcd-paper-inp w-7  mt-1",onChange:function(e){return Y("tem",e,t)},value:T("mailNotify","id",t),children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Email Template","bitform")}),null==F?void 0:F.map((function(e,t){return(0,v.jsx)("option",{value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t}),children:e.title},"sem-"+(t+2.3))}))]})]}),(0,v.jsx)(_.Z,{action:function(e){return Y("to",e,t)},value:T("mailNotify","to",t),placeholder:(0,o.__)("Add Email Receiver","bitform"),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("To","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("mailNotify","to",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("from",e,t)},placeholder:(0,o.__)("Add mail from address","bitform"),value:T("mailNotify","from",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("From","bitform")}),titleClassName:"w-7 mt-2",addable:!0,options:E(T("mailNotify","from",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("cc",e,t)},value:T("mailNotify","cc",t),placeholder:(0,o.__)("Add Email CC","bitform"),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("CC","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("mailNotify","cc",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("bcc",e,t)},placeholder:(0,o.__)("Add Email BCC","bitform"),value:T("mailNotify","bcc",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("BCC","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("mailNotify","bcc",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("replyto",e,t)},placeholder:(0,o.__)("Reply To","bitform"),value:T("mailNotify","replyto",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("Reply To","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("mailNotify","replyto",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("attachment",e,t)},placeholder:(0,o.__)("Attachment","bitform"),value:T("mailNotify","attachment",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("Attachment","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",options:le()})]})}),(0,v.jsx)("div",{className:"mt-2 ml-2",children:J("dblOptin",t)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("label",{className:"f-m ",children:[(0,o.__)("Double optin tamplate:","bitform"),(0,v.jsx)("br",{}),(0,v.jsxs)("select",{className:"btcd-paper-inp w-7 mt-1",onChange:function(e){return Y("tem",e,t)},value:T("dblOptin","id",t),children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Email Template","bitform")}),null==F?void 0:F.map((function(e,t){return(0,v.jsx)("option",{value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t}),children:e.title},"sem-"+(t+2.3))}))]})]}),(0,v.jsx)(_.Z,{action:function(e){return Y("to",e,t)},value:T("dblOptin","to",t),placeholder:(0,o.__)("Add Email Receiver","bitform"),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("To","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("dblOptin","to",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("from",e,t)},placeholder:(0,o.__)("Add mail from address","bitform"),value:T("dblOptin","from",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("From","bitform")}),titleClassName:"w-7 mt-2",addable:!0,options:E(T("dblOptin","from",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("cc",e,t)},value:T("dblOptin","cc",t),placeholder:(0,o.__)("Add Email CC","bitform"),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("CC","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("dblOptin","cc",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("bcc",e,t)},placeholder:(0,o.__)("Add Email BCC","bitform"),value:T("dblOptin","bcc",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("BCC","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("dblOptin","bcc",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("replyto",e,t)},placeholder:(0,o.__)("Reply To","bitform"),value:T("dblOptin","replyto",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("Reply To","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",addable:!0,options:E(T("dblOptin","replyto",t))}),(0,v.jsx)(_.Z,{action:function(e){return Y("attachment",e,t)},placeholder:(0,o.__)("Attachment","bitform"),value:T("dblOptin","attachment",t),title:(0,v.jsx)("span",{className:"f-m",children:(0,o.__)("Attachment","bitform")}),isMultiple:!0,titleClassName:"w-7 mt-2",options:le()})]})}),"delete"!==e.action_run&&(0,v.jsx)("div",{className:"mt-2 ml-2",children:(0,v.jsx)("b",{className:"txt-dp",children:(0,o.__)("Set another field value","bitform")})})]}),"onvalidate"===e.action_type&&"delete"!==e.action_run&&(0,v.jsxs)(h.Z,{onChange:function(e){return function(e,t){L[t].validateMsg=e,O([].concat(L))}(e.target.value,t)},value:e.validateMsg,label:"Error Message",className:"w-7 mt-3 ml-2",children:[(0,v.jsx)("option",{value:"",children:(0,o.__)("Select Message","bitform")}),null==$||null==(g=$.type)||null==(j=g.successMsg)?void 0:j.map((function(e,t){return(0,v.jsx)("option",{value:e.id?JSON.stringify({id:e.id}):JSON.stringify({index:t}),children:e.title},"vm-"+(t+2.7))}))]}),"onvalidate"!==e.action_type&&"delete"!==e.action_run&&(0,v.jsxs)("div",{className:"ml-2 mt-2",children:[e.actions.map((function(i,n){return(0,v.jsxs)("span",{children:[(0,v.jsx)(b,{action:i,setworkFlows:O,lgcGrpInd:t,actionInd:n,actionType:e.action_type}),e.actions.length!==n+1&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{style:{height:5},children:(0,v.jsx)("svg",{height:"60",width:"50",children:(0,v.jsx)("line",{x1:"20",y1:"10",x2:"20",y2:"0",style:{stroke:"#b9c5ff",strokeWidth:1}})})}),(0,v.jsx)("h6",{className:"m-0 ml-2 mt-1 txt-gray",children:"AND"}),(0,v.jsx)("div",{style:{height:5},children:(0,v.jsx)("svg",{height:"60",width:"50",children:(0,v.jsx)("line",{x1:"20",y1:"10",x2:"20",y2:"0",style:{stroke:"#b9c5ff",strokeWidth:1}})})})]})]},"atn-"+(n+22))})),(0,v.jsx)("br",{}),(0,v.jsx)(m.Z,{onClick:function(){return function(e){O((function(t){var i=(0,A.p$)(t);return"onsubmit"===i[e].action_type?i[e].actions.push({field:"",action:"value"}):i[e].actions.push({field:"",action:"disable"}),i}))}(t)},icn:!0,className:"blue sh-sm",children:(0,v.jsx)(c.Z,{size:"14",className:"icn-rotate-45"})})]})]})]}),R&&(0,v.jsx)("div",{className:"mt-2",children:(0,v.jsx)(m.Z,{onClick:function(){return ie(t)},icn:!0,className:"ml-2 sh-sm btcd-menu-btn tooltip",style:{"--tooltip-txt":'"Delete Action"'},children:(0,v.jsx)(p.Z,{size:"16"})})})]}),!R&&(0,v.jsxs)("div",{className:"txt-center bg-pro p-5 mt-2",children:[(0,o.__)("For","bitform")," ",(0,v.jsx)("span",{className:"txt-pro",children:(0,o.__)("UNLIMITED","bitform")})," ",(0,o.__)("Conditional Logics","bitform"),", ",(0,v.jsx)("a",{href:"https://www.bitapps.pro/bit-form",target:"_blank",rel:"noreferrer",children:(0,v.jsx)("b",{className:"txt-pro",children:(0,o.__)("Buy Premium","bitform")})})]})]},"workFlows-grp-"+(t+13))})):(0,v.jsxs)("div",{className:"txt-center btcd-empty",children:[(0,v.jsx)("span",{className:"btcd-icn icn-stack"}),(0,o.__)("Empty","bitform")]})]})}}}]);
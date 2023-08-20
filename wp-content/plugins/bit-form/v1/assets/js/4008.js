"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[4008],{46315:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(4637);function n(e){var t=e.className,s=e.stroke,n=void 0===s?2:s,r=e.size,l=void 0===r?14:r;return(0,i.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 30 30",children:[(0,i.jsx)("path",{className:"svg-icn",strokeWidth:n,d:"M13.83,6.32H6.11a2.19,2.19,0,0,0-2.2,2.19v15.3A2.19,2.19,0,0,0,6.11,26H21.55a2.19,2.19,0,0,0,2.2-2.19V16.16"}),(0,i.jsx)("path",{className:"svg-icn",strokeWidth:n,d:"M22.1,4.68a2.35,2.35,0,0,1,3.31,0,2.31,2.31,0,0,1,0,3.28L14.93,18.35l-4.41,1.09,1.11-4.37Z"})]})}},14008:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var i=s(59496),n=s(83442),r=s(72564),l=s(18846),o=s(19697),c=s(78736),a=s(57287),d=s(8309),u=s(83286),h=s(46315),m=s(83997),b=s(44947),x=s(7257),f=s(99484),p=s(94796),j=s(46249),_=s(28471),v=s(4637);function w(e){var t=e.formID,s=(0,a.FV)(d.u),w=s[0],y=s[1],N=(0,i.useState)({show:!1}),Z=N[0],g=N[1],k=(0,n.$B)().url,C=function(){Z.show=!1,g((0,r.Z)({},Z))},D=function(e,s){Z.btnTxt=(0,f.__)("Delete","bitform"),Z.body=(0,f.__)("Are you sure to delete this template","bitform"),Z.btnClass="",Z.action=function(){!function(e,s){if(s.original.id){var i=(0,b.Z)({formID:t,id:s.original.id},"bitforms_delete_mailtemplate").then((function(t){if(void 0!==t&&t.success){var s=(0,x.p$)(w);s.splice(e,1),y(s)}}));o.ZP.promise(i,{loading:"Deleting",success:"Successfully Deleted",error:"Error Occurred"})}else{var n=(0,x.p$)(w);n.splice(e,1),y(n)}}(e,s),C()},Z.show=!0,g((0,r.Z)({},Z))},T=function(e){Z.btnTxt=(0,f.__)("Duplicate","bitform"),Z.body=(0,f.__)("Are you sure to duplicate this template?","bitform"),Z.btnClass="blue",Z.action=function(){!function(e){var t=(0,l.ZP)(w,(function(t){t.splice(e+1,0,{title:t[e].title,sub:t[e].sub,body:t[e].body}),t.push({updateTem:1})}));y(t)}(e),C()},Z.show=!0,g((0,r.Z)({},Z))},A=[{Header:(0,f.__)("Template Name","bitform"),accessor:"title",Cell:function(e){return(0,v.jsx)(c.OL,{to:k+"/"+e.row.index,children:(0,v.jsx)("b",{children:e.cell.value})})}},{Header:(0,f.__)("Action","bitform"),accessor:"action",Cell:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Z,{onClick:function(){return T(e.row.index)},className:"icn-btn mr-2 tooltip pos-rel",style:{"--tooltip-txt":"'"+(0,f.__)("Duplicate","bitform")+"'"},children:(0,v.jsx)(u.Z,{size:"22"})}),(0,v.jsx)(c.OL,{to:k+"/"+e.row.index,className:"icn-btn mr-2 flx flx-center tooltip pos-rel",style:{"--tooltip-txt":"'"+(0,f.__)("Edit","bitform")+"'"},children:(0,v.jsx)(h.Z,{size:"22"})}),(0,v.jsx)(p.Z,{onClick:function(){return D(e.row.index,e.row)},className:"icn-btn tooltip pos-rel",style:{"--tooltip-txt":"'"+(0,f.__)("Delete","bitform")+"'"},children:(0,v.jsx)(m.Z,{size:"21"})})]})}}];return(0,v.jsxs)("div",{className:"w-7",children:[(0,v.jsx)(j.Z,{show:Z.show,close:C,btnTxt:Z.btnTxt,btnClass:Z.btnClass,body:Z.body,action:Z.action}),(0,v.jsx)("h2",{children:(0,f.__)("Email Templates","bitform")}),(0,v.jsxs)("h5",{children:["How to setup Email Templates & Send Email Notification:  ",(0,v.jsx)("a",{href:"https://youtu.be/HpMUF5EO-Gg",target:"_blank",rel:"noreferrer",style:{color:"red"},children:"YouTube"})]}),(0,v.jsxs)("div",{className:"",children:[(0,v.jsxs)(c.rU,{to:k+"/new",className:"btn blue",children:[(0,v.jsx)("span",{className:"btcd-icn icn-layout"})," ",(0,f.__)("Add New Template","bitform")]}),w.length>0?(0,v.jsx)(_.Z,{height:"60vh",className:"btcd-neu-table mr-1",columns:A,data:w}):(0,v.jsxs)("div",{className:"txt-center btcd-empty",children:[(0,v.jsx)("span",{className:"btcd-icn icn-stack"}),(0,f.__)("Empty","bitform")]})]})]})}var y=s(49134),N=(0,i.lazy)((function(){return s.e(4197).then(s.bind(s,14197))})),Z=(0,i.lazy)((function(){return s.e(9206).then(s.bind(s,29206))}));function g(e){var t=e.formID,s=(0,n.$B)().path;return(0,v.jsxs)(n.rs,{children:[(0,v.jsx)(n.AW,{exact:!0,path:s,children:(0,v.jsx)(w,{formID:t})}),(0,v.jsx)(n.AW,{path:s+"/new",children:(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(y.Z,{}),children:(0,v.jsx)(N,{})})}),(0,v.jsx)(n.AW,{path:s+"/:id",children:(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(y.Z,{}),children:(0,v.jsx)(Z,{})})})]})}}}]);
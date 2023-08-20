"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3192],{73192:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var l=s(665),n=s(59496),i=s(87230),a=s(73305),o=s(65194),r=s(77111),d=s(96377),c=s(8527),m=s(53132),u=s(81625),x=s(63838),p=s(4637);const h=function(e){var t,s,h,b=e.formFields,f=e.setIntegration,_=e.integrations,j=e.allIntegURL,v=(0,i.k6)(),N=(0,i.UO)().id,g=(0,n.useState)([]),y=g[0],F=g[1],C=(0,n.useState)([]),S=C[0],k=C[1],w=(0,n.useState)([]),P=w[0],Z=w[1],M=(0,n.useState)([]),I=M[0],R=M[1],q=(0,n.useState)((0,l.Z)({},_[N])),D=q[0],U=q[1],A=(0,n.useState)({show:!1}),O=A[0],T=A[1];(0,n.useEffect)((function(){(0,r.Z)({},"bitforms_get_post_type").then((function(e){var t,s;null!=e&&e.success&&(F(Object.values(null==e||null==(t=e.data)?void 0:t.post_types)),R(null==e||null==(s=e.data)?void 0:s.users))})),(0,r.Z)({post_type:null==D?void 0:D.post_type},"bitforms_get_metabox_fields").then((function(e){var t,s;null!=e&&e.success&&void 0!==e&&(k(null==e||null==(t=e.data)?void 0:t.metaboxFields),Z(null==e||null==(s=e.data)?void 0:s.metaboxFile))}))}),[]);var z=function(e,t,s){var n=(0,l.Z)({},D);n[e]=s?Number(t):t,U(n)};return(0,p.jsxs)("div",{style:{width:900},children:[(0,p.jsx)(o.Z,{snack:O,setSnackbar:T}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)("b",{children:(0,a.__)("Integration Name ","bitform")})}),(0,p.jsx)("input",{className:"btcd-paper-inp w-5 mt-1",onChange:function(e){return z(e.target.name,e.target.value)},name:"name",value:D.name,type:"text",placeholder:(0,a.__)("Integration Name...","bitform")}),(0,p.jsxs)("div",{className:"mt-3 flx",children:[(0,p.jsx)("b",{children:(0,a.__)("Post Type","bitform")}),(0,p.jsx)(x.Z,{width:250,icnSize:17,className:"ml-2",children:(0,p.jsxs)("div",{className:"txt-body",children:["Select one of the defined WordPress post types Or custom post types for the post.",(0,p.jsx)("br",{})]})})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("select",{name:"post_type",onChange:function(e){return function(e,t){var s=(0,l.Z)({},D);s[e]=t,(0,r.Z)({post_type:t},"bitforms_get_metabox_fields").then((function(e){var t,l,n,i,a,o,r,d;null!=e&&e.success&&void 0!==e&&(k(null==e||null==(t=e.data)?void 0:t.metaboxFields),null!=e&&null!=(l=e.data)&&l.metaboxFields&&(s.metabox_map=null==e||null==(i=e.data)||null==(a=i.metaboxFields)?void 0:a.filter((function(e){return e.required})).map((function(e){return{formField:"",metaboxField:e.key,required:e.required}})),(null==s||null==(o=s.metabox_map)?void 0:o.length)<1&&(s.acf_map=[{}])),null!=e&&null!=(n=e.data)&&n.metaboxFile&&(s.metabox_file_map=null==e||null==(r=e.data)?void 0:r.metaboxFile.filter((function(e){return e.required})).map((function(e){return{formField:"",metaboxFileUpload:e.key,required:e.required}})),(null==s||null==(d=s.metabox_file_map)?void 0:d.length)<1&&(s.metabox_file_map=[{}])),U(s))}))}(e.target.name,e.target.value)},value:D.post_type,className:"btcd-paper-inp w-5 mt-1",children:[(0,p.jsx)("option",{disabled:!0,selected:!0,children:"Select Post Type"}),y.map((function(e,t){return(0,p.jsx)("option",{value:null==e?void 0:e.name,children:null==e?void 0:e.label},"pos-t-"+9*t)}))]}),(0,p.jsx)("button",{onClick:function(){return(0,c.ok)(y,F)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh Post Types","bitform")+"'"},type:"button",children:"↻"})]}),(0,p.jsxs)("div",{className:"mt-3",children:[(0,p.jsx)("b",{children:(0,a.__)("Post Status","bitform")}),(0,p.jsx)(x.Z,{width:250,icnSize:17,className:"ml-2",children:(0,p.jsxs)("div",{className:"txt-body",children:["Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled",(0,p.jsx)("br",{})]})})]}),(0,p.jsxs)("select",{name:"post_status",onChange:function(e){return z(e.target.name,e.target.value)},value:D.post_status,className:"btcd-paper-inp w-5 mt-1",children:[(0,p.jsx)("option",{value:"publish",children:"Publish"}),(0,p.jsx)("option",{value:"draft",children:"Draft"}),(0,p.jsx)("option",{value:"auto-draft",children:"Auto-Draft"}),(0,p.jsx)("option",{value:"private",children:"Private"}),(0,p.jsx)("option",{value:"pending",children:"Pending"})]}),(0,p.jsxs)("div",{className:"mt-3 flx",children:[(0,p.jsx)("b",{children:(0,a.__)("Author","bitform")}),(0,p.jsx)(x.Z,{width:250,icnSize:17,className:"ml-2",children:(0,p.jsxs)("div",{className:"txt-body",children:["Select the user to be assigned to the post.",(0,p.jsx)("br",{})]})})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("select",{name:"post_author",onChange:function(e){return z(e.target.name,e.target.value)},value:D.post_author,className:"btcd-paper-inp w-5 mt-2",children:[(0,p.jsx)("option",{disabled:!0,selected:!0,children:(0,a.__)("Select Author","bitform")}),I.map((function(e,t){return(0,p.jsx)("option",{value:e.ID,children:e.display_name},"pa-"+2*t)}))]})}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)("b",{children:(0,a.__)("Comment Status","bitform")})}),(0,p.jsxs)("select",{name:"comment_status",onChange:function(e){return z(e.target.name,e.target.value)},value:D.comment_status,className:"btcd-paper-inp w-5 mt-1",children:[(0,p.jsx)("option",{value:"open",children:"Open"}),(0,p.jsx)("option",{value:"closed",children:"Closed"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"mt-3 mb-1",children:(0,p.jsx)("b",{children:(0,a.__)("Field Mapping","bitform")})}),(0,p.jsx)("div",{className:"btcd-hr"}),(0,p.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Form Fields","bitform")})}),(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Post Fields","bitform")})})]})]}),null==D||null==(t=D.post_map)?void 0:t.map((function(e,t){return(0,p.jsx)(d.Z,{i:t,type:"post",field:e,formFields:b,dataConf:D,setDataConf:U,customFields:u.I},"analytics-m-"+(t+9))})),(0,p.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,p.jsx)("button",{onClick:function(){var e;return(0,c.FP)("post_map",null==D||null==(e=D.post_map)?void 0:e.length,D,U)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{className:"p-1 f-m",children:[(0,p.jsx)("strong",{children:"Note"})," ",": All your taxonomies will be mapped automatically from your form fields."]})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"mt-3 mb-1",children:[(0,p.jsx)("b",{children:(0,a.__)("MetaBox Fields Mapping","bitform")}),(0,p.jsx)("button",{onClick:function(){return(0,c.Ud)(D,k,Z)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh MetaBox List","bitform")+"'"},type:"button",children:"↻"})]}),(0,p.jsx)("div",{className:"btcd-hr"}),(0,p.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Form Fields","bitform")})}),(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Metabox Fields","bitform")})})]})]}),null==D||null==(s=D.metabox_map)?void 0:s.map((function(e,t){return(0,p.jsx)(d.Z,{i:t,type:"metabox",field:e,formFields:b,dataConf:D,setDataConf:U,customFields:S},"analytics-m-"+(t+9))})),(0,p.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,p.jsx)("button",{onClick:function(){return(0,c.FP)("metabox_map",D.metabox_map.length,D,U)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"mt-3 mb-1",children:[(0,p.jsx)("b",{children:(0,a.__)("Metabox File Upload Fields Map","bitform")}),(0,p.jsx)("button",{onClick:function(){return(0,c.Ud)(D,k,Z)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh MetaBox List","bitform")+"'"},type:"button",children:"↻"})]}),(0,p.jsx)("div",{className:"btcd-hr"}),(0,p.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Form Fields","bitform")})}),(0,p.jsx)("div",{className:"txt-dp",children:(0,p.jsx)("b",{children:(0,a.__)("Metaxbox Fields","bitform")})})]})]}),null==D||null==(h=D.metabox_file_map)?void 0:h.map((function(e,t){return(0,p.jsx)(d.Z,{i:t,type:"metaboxFile",field:e,formFields:b,dataConf:D,setDataConf:U,customFields:P,fieldType:"file"},"analytics-m-"+(t+9))})),(0,p.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,p.jsx)("button",{onClick:function(){return(0,c.FP)("metabox_file_map",D.metabox_file_map.length,D,U)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(0,p.jsxs)("button",{className:"btn f-left btcd-btn-lg green sh-sm flx",type:"button",onClick:function(){(0,c.aJ)(D)&&(0,c.gm)(D)?(0,m.Mm)(_,f,j,D,v,N,"edit"):T({show:!0,msg:(0,a.__)("Please map mandatory fields","bitform")})},children:[(0,a.__)("Save","bitform")," "]})]})}}}]);
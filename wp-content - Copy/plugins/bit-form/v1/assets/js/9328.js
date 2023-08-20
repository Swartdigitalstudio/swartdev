"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[9328],{70029:(t,e,a)=>{a.d(e,{I:()=>i});var i=[{key:"post_title",name:"Post Title",required:!0},{key:"post_name",name:"Post Name"},{key:"post_content",name:"Post Content"},{key:"post_excerpt",name:"Post Excerpt"},{key:"_thumbnail_id",name:"Featured Image"}]},62769:(t,e,a)=>{a.d(e,{FP:()=>l,T5:()=>s,V$:()=>m,aJ:()=>d,gm:()=>c,ok:()=>u,wX:()=>p});var i=a(72564),r=a(19697),n=a(44947),o=a(99484),l=function(t,e,a,r){var n=(0,i.Z)({},a);n[t].splice(e,0,{}),r((0,i.Z)({},n))},s=function(t,e,a,r){var n=(0,i.Z)({},a);n[t].length>1&&n[t].splice(e,1),r((0,i.Z)({},n))},p=function(t,e,a,r,n){var o=(0,i.Z)({},r);o[t][a][e.target.name]=e.target.value,n((0,i.Z)({},o))},d=function(t){return!((null!=t&&t.post_map?t.post_map.filter((function(t){return!t.formField&&t.postField&&t.required})):[]).length>0)},c=function(t){return!((null!=t&&t.acf_map?t.acf_map.filter((function(t){return!t.formField&&t.acfField&&t.required})):[]).length>0)},m=function(t,e,a){var i=(0,n.Z)({post_type:null==t?void 0:t.post_type},"bitforms_get_custom_field").then((function(t){var i,r,n,o;void 0!==t&&t.success&&(null!=t&&null!=(n=t.data)&&n.acfFields&&e(t.data.acfFields),null!=t&&null!=(o=t.data)&&o.acfFile&&a(t.data.acfFile));return 0!==(null==t||null==(i=t.data)?void 0:i.acfFields.length)||0!==(null==t||null==(r=t.data)?void 0:r.acfFile.length)?"Successfully refresh ACF Fields.":"ACF Fields not found"}));r.ZP.promise(i,{success:function(t){return t},error:(0,o.__)("Error Occured","bitform"),loading:(0,o.__)("Loading ACF Fields...")})},u=function(t,e){var a=(0,n.Z)({},"bitforms_get_post_type").then((function(a){if(a&&a.success){var r,n,o,l=(0,i.Z)({},t);if(null!=a&&null!=(r=a.data)&&r.post_types)l=Object.values(null==a||null==(o=a.data)?void 0:o.post_types),e(l);return 0!==(null==a||null==(n=a.data)?void 0:n.post_types.length)?"Successfully refresh Post Types.":" Post Types not found"}}));r.ZP.promise(a,{success:function(t){return t},error:(0,o.__)("Error Occured","bitform"),loading:(0,o.__)("Loading Post Types...")})}},64798:(t,e,a)=>{a.d(e,{Z:()=>m});var i=a(72564),r=a(57287),n=a(8309),o=a(83997),l=a(99484),s=a(85385),p=a(46649),d=a(62769),c=a(4637);function m(t){var e=t.i,a=t.type,m=t.formFields,u=t.field,f=t.dataConf,b=t.setDataConf,h=t.customFields,y=t.fieldType,_=(0,r.sJ)(n.hi).isPro,v={acf:{propName:"acf_map",fldName:"acfField"},post:{propName:"post_map",fldName:"postField"},acfFile:{propName:"acf_file_map",fldName:"acfFileUpload"}}[a],g=v.propName,x=v.fldName,k=!!h.find((function(t){return t.key===u[x]&&t.required}));return(0,c.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,c.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,c.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:u.formField||"",onChange:function(t){return(0,d.wX)(g,t,e,f,b)},children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),(0,c.jsx)("optgroup",{label:"Form Fields",children:"post"===a?(0,c.jsxs)(c.Fragment,{children:[m.map((function(t){return"file-up33"!==t.type&&(0,c.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})),(0,c.jsx)("option",{value:"custom",children:(0,l.__)("Custom...","bitform")})]}):(0,c.jsxs)(c.Fragment,{children:["file"===y?m.map((function(t){return"file-up"===t.type&&(0,c.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})):m.map((function(t){return"file-up"!==t.type&&(0,c.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})),"file"!==y&&(0,c.jsx)("option",{value:"custom",children:(0,l.__)("Custom...","bitform")})]})}),(0,c.jsx)("optgroup",{label:"General Smart Codes "+(_?"":"(PRO)"),children:_&&(null==s.C?void 0:s.C.map((function(t){return(0,c.jsx)("option",{value:t.name,children:t.label},"ff-rm-"+t.name)})))})]}),"custom"===u.formField&&(0,c.jsx)(p.Z,{onChange:function(t){return function(t,e){var a=(0,i.Z)({},f);a[g][e].customValue=t.target.value,b(a)}(t,e)},label:(0,l.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:u.customValue,placeholder:(0,l.__)("Custom Value","bitform")}),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("select",{className:"btcd-paper-inp",name:x,value:u[x]||"",onChange:function(t){return(0,d.wX)(g,t,e,f,b)},disabled:k,children:[(0,c.jsx)("option",{value:"",children:(0,l.__)("Select Field","bitform")}),null==h?void 0:h.map((function(t){return(0,c.jsx)("option",{value:t.key,children:""+t.name},t.key+"-1")}))]})})]}),!k&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){return(0,d.FP)(g,e,f,b)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,c.jsx)("button",{onClick:function(){return(0,d.T5)(g,e,f,b)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,c.jsx)(o.Z,{})})]})]})}},84584:(t,e,a)=>{a.d(e,{FP:()=>d,Mm:()=>o,P_:()=>s,T5:()=>c,WK:()=>l,mG:()=>u,wX:()=>m});var i=a(72564),r=a(99484),n=a(44947),o=function(t,e,a,r,n,o,l){var s=[].concat(t);if(l)s[o]=(0,i.Z)({},t[o],r),s.push({editItegration:!0}),e([].concat(s)),n.push(a);else{var p=[].concat(s);p.push(r),p.push({newItegration:!0}),e(p),n.push(a)}},l=function(t){var e={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(t){var a=t.split("=");a[1]&&(e[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+t,JSON.stringify(e)),window.close()},s=function(t,e,a,n,o,l,s,d,c){if(n.dataCenter&&n.clientId&&n.clientSecret){d(!0);var m="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),u=window.open(m,t,"width=400,height=609,toolbar=off"),f=setInterval((function(){if(u.closed){clearInterval(f);var a={},l=!1,m=localStorage.getItem("__bitforms_"+t);if(m&&(l=!0,a=JSON.parse(m),localStorage.removeItem("__bitforms_"+t)),a.code&&!a.error&&a&&l){var b=(0,i.Z)({},n);b.accountServer=a["accounts-server"],p(e,a,b,o,s,d,c)}else{var h=a.error?"Cause: "+a.error:"";c({show:!0,msg:(0,r.__)("Authorization failed","bitform")+" "+h+". "+(0,r.__)("please try again","bitform")}),d(!1)}}}),500)}else l({dataCenter:n.dataCenter?"":(0,r.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,r.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,r.__)("Secret key cann't be empty","bitform")})},p=function(t,e,a,o,l,s,p){var d=(0,i.Z)({},e);d.dataCenter=a.dataCenter,d.clientId=a.clientId,d.clientSecret=a.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,n.Z)(d,"bitforms_"+t+"_generate_token").then((function(t){return t})).then((function(t){if(t&&t.success){var e=(0,i.Z)({},a);e.tokenDetails=t.data,o(e),l(!0),p({show:!0,msg:(0,r.__)("Authorized Successfully","bitform")})}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?p({show:!0,msg:""+(0,r.__)("Authorization failed Cause:","bitform")+(t.data.data||t.data)+". "+(0,r.__)("please try again","bitform")}):p({show:!0,msg:(0,r.__)("Authorization failed. please try again","bitform")});s(!1)}))},d=function(t,e,a,r,n){var o=(0,i.Z)({},e);n?r?o.relatedlists[n-1].upload_field_map.splice(t,0,{}):o.relatedlists[n-1].field_map.splice(t,0,{}):r?o.upload_field_map.splice(t,0,{}):o.field_map.splice(t,0,{}),a((0,i.Z)({},o))},c=function(t,e,a,r,n){var o=(0,i.Z)({},e);n?r?o.relatedlists[n-1].upload_field_map.length>1&&o.relatedlists[n-1].upload_field_map.splice(t,1):o.relatedlists[n-1].field_map.length>1&&o.relatedlists[n-1].field_map.splice(t,1):r?o.upload_field_map.length>1&&o.upload_field_map.splice(t,1):o.field_map.length>1&&o.field_map.splice(t,1),a((0,i.Z)({},o))},m=function(t,e,a,r,n,o){var l=(0,i.Z)({},a);o?n?l.relatedlists[o-1].upload_field_map[e][t.target.name]=t.target.value:l.relatedlists[o-1].field_map[e][t.target.name]=t.target.value:n?l.upload_field_map[e][t.target.name]=t.target.value:l.field_map[e][t.target.name]=t.target.value,"custom"===t.target.value&&(o?l.relatedlists[o-1].field_map[e].customValue="":l.field_map[e].customValue=""),r((0,i.Z)({},l))},u=function(t,e,a,r,n){var o=(0,i.Z)({},a);n?o.relatedlists[n-1].field_map[e].customValue=t.target.value:o.field_map[e].customValue=t.target.value,r((0,i.Z)({},o))}},40911:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(63196),r=a(41685),n=a(4637);function o(t){var e=t.size,a=t.stroke,i=void 0===a?2:a;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 30 30",children:[(0,n.jsx)("ellipse",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:i,cx:"15",cy:"15",rx:"12.75",ry:"12.85"}),(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:i,strokeLinecap:"round",d:"M11.3,10.73v0a3.58,3.58,0,0,1,1-2.53l.25-.25a3.56,3.56,0,0,1,5,0h0a3.56,3.56,0,0,1,0,5.05l-1.43,1.43a3.85,3.85,0,0,0-1.13,2.75v2.4"}),(0,n.jsx)("line",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:i,strokeLinecap:"round",x1:"15",y1:"23.12",x2:"15",y2:"23.12"})]})}a(42490),a(74909),a(52722),a(88006);function l(t){var e=t.className,a=t.children,l=t.width,s=void 0===l?"auto":l,p=t.icnSize,d=void 0===p?20:p;return(0,n.jsx)(i.ZP,{animateFill:!0,plugins:[r.C8],duration:150,theme:"material",animation:"shift-away",interactive:!0,maxWidth:s,content:a,children:(0,n.jsx)("div",{role:"button",tabIndex:"0",className:"popper-icn cp d-in-b ig-c cooltip-icn "+e,children:(0,n.jsx)(o,{size:d})})})}},77175:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(1469),r=a.n(i),n=a(76178),o=a.n(n)()(r());o.push([t.id,".tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}",""]);const l=o},57949:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(1469),r=a.n(i),n=a(76178),o=a.n(n)()(r());o.push([t.id,'.tippy-box[data-placement^=top]>.tippy-backdrop{transform-origin:0 25%;border-radius:40% 40% 0 0}.tippy-box[data-placement^=top]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-55%)}.tippy-box[data-placement^=top]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-50%,-45%)}.tippy-box[data-placement^=bottom]>.tippy-backdrop{transform-origin:0 -50%;border-radius:0 0 30% 30%}.tippy-box[data-placement^=bottom]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-45%)}.tippy-box[data-placement^=bottom]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-50%)}.tippy-box[data-placement^=left]>.tippy-backdrop{transform-origin:50% 0;border-radius:50% 0 0 50%}.tippy-box[data-placement^=left]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-50%)}.tippy-box[data-placement^=left]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-75%,-50%)}.tippy-box[data-placement^=right]>.tippy-backdrop{transform-origin:-50% 0;border-radius:0 50% 50% 0}.tippy-box[data-placement^=right]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-50%)}.tippy-box[data-placement^=right]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-25%,-50%)}.tippy-box[data-animatefill]{background-color:transparent!important}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 32px);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop[data-state=hidden]{opacity:0}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}',""]);const l=o},36069:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(1469),r=a.n(i),n=a(76178),o=a.n(n)()(r());o.push([t.id,".tippy-box[data-theme~=material]{background-color:#505355;font-weight:600}.tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before{border-top-color:#505355}.tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#505355}.tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before{border-left-color:#505355}.tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before{border-right-color:#505355}.tippy-box[data-theme~=material]>.tippy-backdrop{background-color:#505355}.tippy-box[data-theme~=material]>.tippy-svg-arrow{fill:#505355}",""]);const l=o},88006:(t,e,a)=>{var i=a(14216),r=a.n(i),n=a(32533),o=a.n(n),l=a(94617),s=a.n(l),p=a(39869),d=a.n(p),c=a(31843),m=a.n(c),u=a(62237),f=a.n(u),b=a(77175),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m();r()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals},52722:(t,e,a)=>{var i=a(14216),r=a.n(i),n=a(32533),o=a.n(n),l=a(94617),s=a.n(l),p=a(39869),d=a.n(p),c=a(31843),m=a.n(c),u=a(62237),f=a.n(u),b=a(57949),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m();r()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals},74909:(t,e,a)=>{var i=a(14216),r=a.n(i),n=a(32533),o=a.n(n),l=a(94617),s=a.n(l),p=a(39869),d=a.n(p),c=a(31843),m=a.n(c),u=a(62237),f=a.n(u),b=a(36069),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m();r()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals}}]);
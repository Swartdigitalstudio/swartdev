"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[6071],{8940:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(73305),l=a(4637);function r(e){var t=e.step,a=e.saveConfig,r=e.edit,n=e.disabled;return r?(0,l.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,l.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n,children:(0,s.__)("Update","bitform")})}):(0,l.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,l.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,l.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},24991:(e,t,a)=>{a.d(t,{Rx:()=>i,V9:()=>c,B5:()=>f,ud:()=>m,n:()=>u});var s=a(665),l=a(73305),r=a(77111),n=a(33591),i=function(e,t,a,l,r,n,i,c,f,m){var u=(0,s.Z)({},t);if(c){var h=(0,s.Z)({},f);h[e.target.name]="",m((0,s.Z)({},h))}switch(u[e.target.name]=e.target.value,e.target.name){case"team":u=o(u,l,a,r,n);break;case"folder":u.folderMap=u.folderMap.slice(0,i),u=d(u,l,a,r,n)}a((0,s.Z)({},u))},o=function(e,t,a,l,r){var n,i,o=(0,s.Z)({},e);return o.folder="",!o.team||null!=o&&null!=(n=o.default)&&null!=(i=n.teamFolders)&&i[o.team]||f(t,o,a,l,r),o},d=function(e,t,a,l,r){var n,i,o,d,c,f,u=(0,s.Z)({},e);(delete u.teamType,!u.folder||null!=(n=u.default)&&null!=(i=n.folders)&&i[u.folder])?u.folder&&u.folder!==u.folderMap[u.folderMap.length-1]&&u.folderMap.push(u.folder):("private"===(null==(o=u.default)||null==(d=o.teamFolders)||null==(c=d[u.team])||null==(f=c[u.folder])?void 0:f.type)&&(u.teamType="private"),m(t,u,a,l,r));return u},c=function(e,t,a,n,i){n(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,r.Z)(o,"bitforms_zworkdrive_refresh_teams").then((function(e){if(e&&e.success){var r=(0,s.Z)({},t);e.data.teams&&(r.default=(0,s.Z)({},r.default,{teams:e.data.teams})),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,l.__)("Teams refreshed","bitform")}),a((0,s.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:(0,l.g)((0,l.__)("Teams refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):i({show:!0,msg:(0,l.__)("Teams refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))},f=function(e,t,a,n,i){n(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,team:t.team};(0,r.Z)(o,"bitforms_zworkdrive_refresh_team_folders").then((function(e){if(e&&e.success){var r=(0,s.Z)({},t);r.default.teamFolders||(r.default.teamFolders={}),e.data.teamFolders&&(r.default.teamFolders[r.team]=e.data.teamFolders),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,l.__)("Folders refreshed","bitform")}),a((0,s.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:(0,l.g)((0,l.__)("Folders refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):i({show:!0,msg:(0,l.__)("Folders refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))},m=function(e,t,a,i,o,d){var c=d?t.folderMap[d]:t.folder;i(!0);var f={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,team:t.team,folder:c,teamType:"teamType"in t?"private":"team"};(0,r.Z)(f,"bitforms_zworkdrive_refresh_sub_folders").then((function(e){if(e&&e.success){var r=(0,s.Z)({},t);e.data.folders?(r.default.folders||(r.default.folders={}),r.default.folders[c]=(0,n.SI)(e.data.folders,"folderName"),r.folderMap.includes(c)||r.folderMap.push(c),o({show:!0,msg:(0,l.__)("Sub Folders refreshed","bitform")})):o({show:!0,msg:(0,l.__)("No Sub Folder Found","bitform")}),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),a((0,s.Z)({},r))}else o({show:!0,msg:(0,l.__)("Sub Folders refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},u=function(e,t,a,n,i){n(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,team:t.team};(0,r.Z)(o,"bitforms_zworkdrive_refresh_users").then((function(e){if(e&&e.success){var r=(0,s.Z)({},t);r.default.users||(r.default.users={}),e.data.users&&(r.default.users[t.team]=e.data.users),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,l.__)("Users refreshed","bitform")}),a((0,s.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:(0,l.g)((0,l.__)("Users refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):i({show:!0,msg:(0,l.__)("Users refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))}},43968:(e,t,a)=>{a.d(t,{Z:()=>h});var s=a(73305),l=a(67860),r=a(665),n=a(59496),i=a(19753),o=a(2598),d=a(12859),c=a(31702),f=a(24991),m=a(4637);function u(e){var t,a,u,h,p,b,v,x,_,j,g,w,k,N,y,C,Z,F,D,S,I,M,T,L,R,U,A,V,W=e.workDriveConf,O=e.setWorkDriveConf,z=e.formFields,B=e.formID,E=e.setSnackbar,$=W.folderMap?W.folderMap[0]:W.folder,q=(0,n.useState)(!1),K=q[0],P=q[1],G=(0,n.useState)({show:!1}),H=G[0],J=G[1],Q=(0,n.useState)([]),X=Q[0],Y=Q[1],ee=function(e,t,a){var s=(0,r.Z)({},W);"create_folder"===t?e.target.checked?s.actions.create_folder={name:"",suffix:!1}:(delete s.actions.create_folder,delete s.actions.share.folder):"attachments"===t?""!==e?s.actions.attachments=e:(delete s.actions.attachments,delete s.actions.share.file):"mail"===t&&(s.actions.share||(s.actions.share={}),"folder"===a?e.target.checked?s.actions.share.folder.mail="true":s.actions.share.folder.mail="false":"file"===a&&(e.target.checked?s.actions.share.file.mail="true":s.actions.share.file.mail="false")),O((0,r.Z)({},s))},te=function(e,t,a,s){var l=(0,r.Z)({},W);l.actions.share[s].permissions[e][t]=a,O((0,r.Z)({},l))},ae=function(e,t,a){var s=(0,r.Z)({},W);"name"===t?a?s.actions.create_folder.name+=e.target.value:s.actions.create_folder.name=e.target.value:e.target.checked?s.actions.create_folder.suffix=!0:s.actions.create_folder.suffix=!1,O((0,r.Z)({},s))},se=function(){J({show:!1})};return(0,n.useEffect)((function(){var e,t,a,s,l=[{title:"Zoho Workdrive Users",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];if(!W.team||null!=(e=W.default)&&null!=(t=e.users)&&t[W.team]||(0,f.n)(B,W,O,P,E),null!=(a=W.default)&&null!=(s=a.users)&&s[W.team]){l[0].childs[0]={label:"All Users",value:"all_users"};for(var r=Object.values(W.default.users[W.team]),n=0;n<r.length;n+=1)l[0].childs[n+1]={label:r[n].userName,value:r[n].userId}}l[1].childs=z.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),Y(l)}),[W.team,null==(t=W.default)||null==(a=t.users)?void 0:a[W.team]]),(0,m.jsxs)("div",{className:"pos-rel",children:[(0,m.jsxs)("div",{className:"d-flx flx-wrp",children:[(0,m.jsx)(c.Z,{action:function(){var e,t,a,s;null!=(e=W.actions)&&e.create_folder||(W.actions.create_folder={name:"",suffix:!1}),null!=(t=W.actions)&&t.share||(W.actions.share={}),null!=(a=W.actions)&&null!=(s=a.share)&&s.folder||(W.actions.share.folder={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"3",accessLabel:"Organize"},{email:"",access:"7",accessLabel:"Upload"}],mail:"false"}),J({show:"create_folder"})},children:(0,m.jsx)(o.Z,{onChange:function(e){return ee(e,"create_folder")},checked:"create_folder"in(null==W?void 0:W.actions),className:"wdt-200 mt-4 mr-2",value:"Create_Folder",title:(0,s.__)("Create New Folder","bitform"),subTitle:(0,s.__)("Create a new folder in the selected folder","bitform")})}),(0,m.jsx)(o.Z,{onChange:function(){var e,t,a;null!=(e=W.actions)&&e.share||(W.actions.share={}),null!=(t=W.actions)&&null!=(a=t.share)&&a.file||(W.actions.share.file={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"4",accessLabel:"Share"},{email:"",access:"6",accessLabel:"View and Comment"}],mail:"false"}),J({show:"attachments"})},checked:"attachments"in W.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:(0,s.__)("Upload Files","bitform"),subTitle:(0,s.__)("Add attachments from BitForm to Zoho Workdrive folder.","bitform")})]}),(0,m.jsx)(d.Z,{md:!0,show:"create_folder"===H.show,setModal:se,title:(0,s.__)("Create New Folder","bitform"),children:(0,m.jsxs)("div",{className:"o-a",style:{height:"95%"},children:[(0,m.jsx)("div",{className:"btcd-hr mt-2"}),(0,m.jsx)("div",{className:"mt-2",children:(0,s.__)("Add field value to use as folder name","bitform")}),(0,m.jsxs)("select",{value:"",className:"btcd-paper-inp mt-2 w-5",onChange:function(e){return ae(e,"name",1)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),null!==z&&z.map((function(e){return!e.type.match(/^(file-up|recaptcha)$/)&&(0,m.jsx)("option",{value:"${"+e.key+"}",children:e.name},e.key)}))]}),(0,m.jsx)("input",{type:"text",className:"btcd-paper-inp mt-2 w-9",value:null==(u=W.actions)||null==(h=u.create_folder)?void 0:h.name,onChange:function(e){return ae(e,"name")},placeholder:"New Folder Name"}),(0,m.jsx)(o.Z,{onChange:function(e){return ae(e,"suffix")},checked:null==W||null==(p=W.actions)||null==(b=p.create_folder)?void 0:b.suffix,className:"wd-100 mt-4 mr-2",value:"Add_Suffix",title:(0,s.__)("Add Random Number","bitform"),subTitle:"Zoho doesn't support duplicate folder name, if you want to make it uniquely you can add random number after the folder name."}),"private"===(null==(v=W.default)||null==(x=v.teamFolders)||null==(_=x[W.team])||null==(j=_[$])?void 0:j.type)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"btcd-hr mt-2"}),(0,m.jsxs)("div",{className:"flx mt-2",children:[(0,m.jsx)("div",{children:(0,s.__)("Share with users: (optional)","bitform")}),(0,m.jsx)("button",{onClick:function(){return(0,f.n)(B,W,O,P,E)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Team Users"'},type:"button",disabled:K,children:"↻"})]}),K&&(0,m.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),null==(g=W.actions)||null==(w=g.share)||null==(k=w.folder)||null==(N=k.permissions)?void 0:N.map((function(e,t){return(0,m.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,m.jsx)(i.Z,{defaultValue:e.email,className:"btcd-paper-drpdwn w-8 mr-2",onChange:function(e){return te(t,"email",e,"folder")},options:X}),(0,m.jsx)("input",{type:"text",value:e.accessLabel,className:"btcd-paper-inp w-2",readOnly:!0})]},e.accessLabel)})),(0,m.jsx)(o.Z,{onChange:function(e){return ee(e,"mail","folder")},checked:"true"===(null==W||null==(y=W.actions)||null==(C=y.share)||null==(Z=C.folder)?void 0:Z.mail)||!1,className:"wd-100 mt-4 mr-2",value:"true",title:(0,s.__)("Send Notification Mail","bitform")})]})]})}),(0,m.jsx)(d.Z,{md:!0,show:"attachments"===H.show,setModal:se,title:(0,s.__)("Select Attachment","bitform"),children:(0,m.jsxs)("div",{className:"o-a",style:{height:"95%"},children:[(0,m.jsx)("div",{className:"mt-2",children:(0,s.__)("Select file upload fields","bitform")}),(0,m.jsx)(i.Z,{defaultValue:W.actions.attachments,className:"mt-2 w-5",onChange:function(e){return ee(e,"attachments")},options:z.filter((function(e){return"file-up"===e.type})).map((function(e){return{label:e.name,value:e.key}}))}),"private"===(null==(F=W.default)||null==(D=F.teamFolders)||null==(S=D[W.team])||null==(I=S[$])?void 0:I.type)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"btcd-hr mt-2"}),(0,m.jsxs)("div",{className:"flx mt-2",children:[(0,m.jsx)("div",{children:"Share with users: (optional)"}),(0,m.jsx)("button",{onClick:function(){return(0,f.n)(B,W,O,P,E)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Team Users"'},type:"button",disabled:K,children:"↻"})]}),K&&(0,m.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),null==(M=W.actions)||null==(T=M.share)||null==(L=T.file)||null==(R=L.permissions)?void 0:R.map((function(e,t){return(0,m.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,m.jsx)(i.Z,{defaultValue:e.email,className:"btcd-paper-drpdwn w-7 mr-2",onChange:function(e){return te(t,"email",e,"file")},options:X}),(0,m.jsx)("input",{type:"text",value:e.accessLabel,className:"btcd-paper-inp w-3",readOnly:!0})]},e.accessLabel)})),(0,m.jsx)(o.Z,{onChange:function(e){return ee(e,"mail","file")},checked:"true"===(null==W||null==(U=W.actions)||null==(A=U.share)||null==(V=A.file)?void 0:V.mail)||!1,className:"wd-100 mt-4 mr-2",value:"true",title:(0,s.__)("Send Notification Mail","bitform")})]})]})})]})}function h(e){var t,a,r,n=e.formID,i=e.formFields,o=e.workDriveConf,d=e.setWorkDriveConf,c=e.isLoading,h=e.setisLoading,p=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:(0,s.__)("Team:","bitform")}),(0,m.jsxs)("select",{onChange:function(e){return(0,f.Rx)(e,o,d,n,h,p)},name:"team",value:o.team,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Team","bitform")}),(null==o||null==(t=o.default)?void 0:t.teams)&&Object.values(o.default.teams).map((function(e){return(0,m.jsx)("option",{value:e.teamId,children:e.teamName},e.teamId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,f.V9)(n,o,d,h,p)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh WorkDrive Teams","bitform")+"'"},type:"button",disabled:c,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:"Folder:"}),(0,m.jsxs)("select",{onChange:function(e){return(0,f.Rx)(e,o,d,n,h,p,0)},name:"folder",value:o.folderMap[0]||o.folder,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Folder","bitform")}),(null==o||null==(a=o.default)||null==(r=a.teamFolders)?void 0:r[o.team])&&Object.values(o.default.teamFolders[o.team]).map((function(e){return(0,m.jsx)("option",{value:e.teamFolderId,children:e.teamFolderName},e.teamFolderId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,f.B5)(n,o,d,h,p)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh WorkDrive Team Folders","bitform")+"'"},type:"button",disabled:c,children:"↻"}),(0,m.jsx)("br",{}),o.folderMap.map((function(e,t){var a,l;return(0,m.jsxs)("div",{children:[(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"flx",children:[(0,m.jsx)("b",{className:"wdt-100 d-in-b"}),(0,m.jsx)("div",{className:"d-in-b",style:{width:10*(t+1),marginLeft:1,marginRight:2,height:58,marginTop:-60},children:(0,m.jsx)("div",{className:"sub-tree"})}),(0,m.jsxs)("div",{className:"flx sub-folder w-7",children:[(0,m.jsxs)("select",{onChange:function(e){return(0,f.Rx)(e,o,d,n,h,p,t+1)},name:"folder",value:o.folderMap[t+1]||o.folder,className:"btcd-paper-inp",children:[(0,m.jsx)("option",{value:o.folderMap[t],children:"/ root"}),(null==o||null==(a=o.default)||null==(l=a.folders)?void 0:l[e])&&o.default.folders[e].map((function(e){return(0,m.jsx)("option",{value:e.folderId,children:e.folderName},e.folderId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,f.ud)(n,o,d,h,p,t)},className:"d-non icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh Sub Folders","bitform")+"'"},type:"button",disabled:c,children:"↻"})]})]})]},e)})),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),c&&(0,m.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),o.folder&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(u,{workDriveConf:o,setWorkDriveConf:d,formFields:i,formID:n,setisLoading:h,setSnackbar:p})]})]})}},31702:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(61473),l=a(4637);function r(e){var t=e.action,a=e.children;return(0,l.jsxs)("div",{className:"action-btn-wrapper",children:[(0,l.jsx)("div",{className:"action-btn",tabIndex:"0",role:"button",onClick:t,onKeyPress:t,children:(0,l.jsx)(s.Z,{})}),a]})}}}]);
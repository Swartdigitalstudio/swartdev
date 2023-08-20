var pe=Object.defineProperty;var de=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var me=(s,m,t)=>m in s?pe(s,m,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[m]=t,o=(s,m)=>{for(var t in m||(m={}))xe.call(m,t)&&me(s,t,m[t]);if(de)for(var t of de(m))re.call(m,t)&&me(s,t,m[t]);return s};import{r as S,j as e,T,_ as d,M as ie,k as $}from"./main-398.js";import{u as U}from"./bf-989-109.js";import{T as je}from"./bf-242-302.js";import{r as L,h as R,a as be,b as oe,c as Ne}from"./bf-966-325.js";function fe({workDriveConf:s,setWorkDriveConf:m,formFields:t,formID:u,setSnackbar:r}){var V,Z,A,E,I,B,q,z,H,G,J,K,P,Q,X,Y,W,w,v,C,k,D,ee,se,ae,te,le,ce;const p=s.folderMap?s.folderMap[0]:s.folder,[h,N]=S.useState(!1),[g,f]=S.useState({show:!1}),[n,j]=S.useState([]),b=(a,c,i)=>{const l=o({},s);c==="create_folder"?a.target.checked?l.actions.create_folder={name:"",suffix:!1}:(delete l.actions.create_folder,delete l.actions.share.folder):c==="attachments"?a!==""?l.actions.attachments=a:(delete l.actions.attachments,delete l.actions.share.file):c==="mail"&&(l.actions.share||(l.actions.share={}),i==="folder"?a.target.checked?l.actions.share.folder.mail="true":l.actions.share.folder.mail="false":i==="file"&&(a.target.checked?l.actions.share.file.mail="true":l.actions.share.file.mail="false")),m(o({},l))},F=(a,c,i,l)=>{const _=o({},s);_.actions.share[l].permissions[a][c]=i,m(o({},_))},x=(a,c,i)=>{const l=o({},s);c==="name"?i?l.actions.create_folder.name+=a.target.value:l.actions.create_folder.name=a.target.value:a.target.checked?l.actions.create_folder.suffix=!0:l.actions.create_folder.suffix=!1,m(o({},l))},O=()=>{f({show:!1})},ne=()=>{var a,c,i,l;(a=s.actions)!=null&&a.create_folder||(s.actions.create_folder={name:"",suffix:!1}),(c=s.actions)!=null&&c.share||(s.actions.share={}),(l=(i=s.actions)==null?void 0:i.share)!=null&&l.folder||(s.actions.share.folder={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"3",accessLabel:"Organize"},{email:"",access:"7",accessLabel:"Upload"}],mail:"false"}),f({show:"create_folder"})},he=()=>{var a,c,i;(a=s.actions)!=null&&a.share||(s.actions.share={}),(i=(c=s.actions)==null?void 0:c.share)!=null&&i.file||(s.actions.share.file={permissions:[{email:"",access:"34",accessLabel:"View"},{email:"",access:"5",accessLabel:"Edit"},{email:"",access:"4",accessLabel:"Share"},{email:"",access:"6",accessLabel:"View and Comment"}],mail:"false"}),f({show:"attachments"})},ue=()=>t.filter(a=>a.type==="file-up").map(a=>({label:a.name,value:a.key}));return S.useEffect(()=>{var c,i,l,_;const a=[{title:"Zoho Workdrive Users",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];if(s.team&&!((i=(c=s.default)==null?void 0:c.users)!=null&&i[s.team])&&L(u,s,m,N,r),(_=(l=s.default)==null?void 0:l.users)!=null&&_[s.team]){a[0].childs[0]={label:"All Users",value:"all_users"};const y=Object.values(s.default.users[s.team]);for(let M=0;M<y.length;M+=1)a[0].childs[M+1]={label:y[M].userName,value:y[M].userId}}a[1].childs=t.map(y=>({label:y.name,value:`\${${y.key}}`})),j(a)},[s.team,(Z=(V=s.default)==null?void 0:V.users)==null?void 0:Z[s.team]]),e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[e.jsx(je,{action:ne,children:e.jsx(T,{onChange:a=>b(a,"create_folder"),checked:"create_folder"in(s==null?void 0:s.actions),className:"wdt-200 mt-4 mr-2",value:"Create_Folder",title:d("Create New Folder"),subTitle:d("Create a new folder in the selected folder")})}),e.jsx(T,{onChange:he,checked:"attachments"in s.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:d("Upload Files"),subTitle:d("Add attachments from BitForm to Zoho Workdrive folder.")})]}),e.jsx(ie,{md:!0,show:g.show==="create_folder",setModal:O,title:d("Create New Folder"),children:e.jsxs("div",{className:"o-a",style:{height:"95%"},children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:d("Add field value to use as folder name")}),e.jsxs("select",{value:"",className:"btcd-paper-inp mt-2 w-5",onChange:a=>x(a,"name",1),children:[e.jsx("option",{value:"",children:d("Select Field")}),t!==null&&t.map(a=>!a.type.match(/^(file-up|recaptcha)$/)&&e.jsx("option",{value:`\${${a.key}}`,children:a.name},a.key))]}),e.jsx("input",{type:"text",className:"btcd-paper-inp mt-2 w-9",value:(E=(A=s.actions)==null?void 0:A.create_folder)==null?void 0:E.name,onChange:a=>x(a,"name"),placeholder:"New Folder Name"}),e.jsx(T,{onChange:a=>x(a,"suffix"),checked:(B=(I=s==null?void 0:s.actions)==null?void 0:I.create_folder)==null?void 0:B.suffix,className:"wd-100 mt-4 mr-2",value:"Add_Suffix",title:d("Add Random Number"),subTitle:"Zoho doesn't support duplicate folder name, if you want to make it uniquely you can add random number after the folder name."}),((G=(H=(z=(q=s.default)==null?void 0:q.teamFolders)==null?void 0:z[s.team])==null?void 0:H[p])==null?void 0:G.type)==="private"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsxs("div",{className:"flx mt-2",children:[e.jsx("div",{children:d("Share with users: (optional)")}),e.jsx("button",{onClick:()=>L(u,s,m,N,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Team Users"'},type:"button",disabled:h,children:"↻"})]}),h&&e.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),(Q=(P=(K=(J=s.actions)==null?void 0:J.share)==null?void 0:K.folder)==null?void 0:P.permissions)==null?void 0:Q.map((a,c)=>e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(U,{defaultValue:a.email,className:"btcd-paper-drpdwn w-8 mr-2",onChange:i=>F(c,"email",i,"folder"),options:n}),e.jsx("input",{type:"text",value:a.accessLabel,className:"btcd-paper-inp w-2",readOnly:!0})]},a.accessLabel)),e.jsx(T,{onChange:a=>b(a,"mail","folder"),checked:((W=(Y=(X=s==null?void 0:s.actions)==null?void 0:X.share)==null?void 0:Y.folder)==null?void 0:W.mail)==="true"||!1,className:"wd-100 mt-4 mr-2",value:"true",title:d("Send Notification Mail")})]})]})}),e.jsx(ie,{md:!0,show:g.show==="attachments",setModal:O,title:d("Select Attachment"),children:e.jsxs("div",{className:"o-a",style:{height:"95%"},children:[e.jsx("div",{className:"mt-2",children:d("Select file upload fields")}),e.jsx(U,{defaultValue:s.actions.attachments,className:"mt-2 w-5",onChange:a=>b(a,"attachments"),options:ue()}),((k=(C=(v=(w=s.default)==null?void 0:w.teamFolders)==null?void 0:v[s.team])==null?void 0:C[p])==null?void 0:k.type)==="private"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsxs("div",{className:"flx mt-2",children:[e.jsx("div",{children:"Share with users: (optional)"}),e.jsx("button",{onClick:()=>L(u,s,m,N,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Team Users"'},type:"button",disabled:h,children:"↻"})]}),h&&e.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),(ae=(se=(ee=(D=s.actions)==null?void 0:D.share)==null?void 0:ee.file)==null?void 0:se.permissions)==null?void 0:ae.map((a,c)=>e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(U,{defaultValue:a.email,className:"btcd-paper-drpdwn w-7 mr-2",onChange:i=>F(c,"email",i,"file"),options:n}),e.jsx("input",{type:"text",value:a.accessLabel,className:"btcd-paper-inp w-3",readOnly:!0})]},a.accessLabel)),e.jsx(T,{onChange:a=>b(a,"mail","file"),checked:((ce=(le=(te=s==null?void 0:s.actions)==null?void 0:te.share)==null?void 0:le.file)==null?void 0:ce.mail)==="true"||!1,className:"wd-100 mt-4 mr-2",value:"true",title:d("Send Notification Mail")})]})]})})]})}function Te({formID:s,formFields:m,workDriveConf:t,setWorkDriveConf:u,isLoading:r,setisLoading:p,setSnackbar:h}){var N,g,f;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:d("Team:")}),e.jsxs("select",{onChange:n=>R(n,t,u,s,p,h),name:"team",value:t.team,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:d("Select Team")}),((N=t==null?void 0:t.default)==null?void 0:N.teams)&&Object.values(t.default.teams).map(n=>e.jsx("option",{value:n.teamId,children:n.teamName},n.teamId))]}),e.jsx("button",{onClick:()=>be(s,t,u,p,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh WorkDrive Teams")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:"Folder:"}),e.jsxs("select",{onChange:n=>R(n,t,u,s,p,h,0),name:"folder",value:t.folderMap[0]||t.folder,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:d("Select Folder")}),((f=(g=t==null?void 0:t.default)==null?void 0:g.teamFolders)==null?void 0:f[t.team])&&Object.values(t.default.teamFolders[t.team]).map(n=>e.jsx("option",{value:n.teamFolderId,children:n.teamFolderName},n.teamFolderId))]}),e.jsx("button",{onClick:()=>oe(s,t,u,p,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh WorkDrive Team Folders")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),t.folderMap.map((n,j)=>{var b,F;return e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-100 d-in-b"}),e.jsx("div",{className:"d-in-b",style:{width:(j+1)*10,marginLeft:1,marginRight:2,height:58,marginTop:-60},children:e.jsx("div",{className:"sub-tree"})}),e.jsxs("div",{className:"flx sub-folder w-7",children:[e.jsxs("select",{onChange:x=>R(x,t,u,s,p,h,j+1),name:"folder",value:t.folderMap[j+1]||t.folder,className:"btcd-paper-inp",children:[e.jsx("option",{value:t.folderMap[j],children:"/ root"}),((F=(b=t==null?void 0:t.default)==null?void 0:b.folders)==null?void 0:F[n])&&t.default.folders[n].map(x=>e.jsx("option",{value:x.folderId,children:x.folderName},x.folderId))]}),e.jsx("button",{onClick:()=>Ne(s,t,u,p,h,j),className:"d-non icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Sub Folders")}'`},type:"button",disabled:r,children:"↻"})]})]})]},n)}),e.jsx("br",{}),e.jsx("br",{}),r&&e.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.folder&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(fe,{workDriveConf:t,setWorkDriveConf:u,formFields:m,formID:s,setisLoading:p,setSnackbar:h})]})]})}export{Te as Z};

"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[8217],{66801:(t,e,a)=>{a.d(e,{FP:()=>u,Mm:()=>i,P_:()=>o,T5:()=>f,WK:()=>n,mG:()=>m,wX:()=>c});var s=a(51163),l=a(51108),r=a(55873),i=function(t,e,a,l,r,i,n){var o=[].concat(t);if(n)o[i]=(0,s.Z)({},t[i],l),o.push({editItegration:!0}),e([].concat(o)),r.push(a);else{var d=[].concat(o);d.push(l),d.push({newItegration:!0}),e(d),r.push(a)}},n=function(t){var e={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(t){var a=t.split("=");a[1]&&(e[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+t,JSON.stringify(e)),window.close()},o=function(t,e,a,r,i,n,o,u,f){if(r.dataCenter&&r.clientId&&r.clientSecret){u(!0);var c="https://accounts.zoho."+r.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+r.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),m=window.open(c,t,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(m.closed){clearInterval(p);var a={},n=!1,c=localStorage.getItem("__bitforms_"+t);if(c&&(n=!0,a=JSON.parse(c),localStorage.removeItem("__bitforms_"+t)),a.code&&!a.error&&a&&n){var _=(0,s.Z)({},r);_.accountServer=a["accounts-server"],d(e,a,_,i,o,u,f)}else{var h=a.error?"Cause: "+a.error:"";f({show:!0,msg:(0,l.__)("Authorization failed","bitform")+" "+h+". "+(0,l.__)("please try again","bitform")}),u(!1)}}}),500)}else n({dataCenter:r.dataCenter?"":(0,l.__)("Data center cann't be empty","bitform"),clientId:r.clientId?"":(0,l.__)("Client ID cann't be empty","bitform"),clientSecret:r.clientSecret?"":(0,l.__)("Secret key cann't be empty","bitform")})},d=function(t,e,a,i,n,o,d){var u=(0,s.Z)({},e);u.dataCenter=a.dataCenter,u.clientId=a.clientId,u.clientSecret=a.clientSecret,u.redirectURI=bits.zohoRedirectURL,(0,r.Z)(u,"bitforms_"+t+"_generate_token").then((function(t){return t})).then((function(t){if(t&&t.success){var e=(0,s.Z)({},a);e.tokenDetails=t.data,i(e),n(!0),d({show:!0,msg:(0,l.__)("Authorized Successfully","bitform")})}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?d({show:!0,msg:""+(0,l.__)("Authorization failed Cause:","bitform")+(t.data.data||t.data)+". "+(0,l.__)("please try again","bitform")}):d({show:!0,msg:(0,l.__)("Authorization failed. please try again","bitform")});o(!1)}))},u=function(t,e,a,l,r){var i=(0,s.Z)({},e);r?l?i.relatedlists[r-1].upload_field_map.splice(t,0,{}):i.relatedlists[r-1].field_map.splice(t,0,{}):l?i.upload_field_map.splice(t,0,{}):i.field_map.splice(t,0,{}),a((0,s.Z)({},i))},f=function(t,e,a,l,r){var i=(0,s.Z)({},e);r?l?i.relatedlists[r-1].upload_field_map.length>1&&i.relatedlists[r-1].upload_field_map.splice(t,1):i.relatedlists[r-1].field_map.length>1&&i.relatedlists[r-1].field_map.splice(t,1):l?i.upload_field_map.length>1&&i.upload_field_map.splice(t,1):i.field_map.length>1&&i.field_map.splice(t,1),a((0,s.Z)({},i))},c=function(t,e,a,l,r,i){var n=(0,s.Z)({},a);i?r?n.relatedlists[i-1].upload_field_map[e][t.target.name]=t.target.value:n.relatedlists[i-1].field_map[e][t.target.name]=t.target.value:r?n.upload_field_map[e][t.target.name]=t.target.value:n.field_map[e][t.target.name]=t.target.value,"custom"===t.target.value&&(i?n.relatedlists[i-1].field_map[e].customValue="":n.field_map[e].customValue=""),l((0,s.Z)({},n))},m=function(t,e,a,l,r){var i=(0,s.Z)({},a);r?i.relatedlists[r-1].field_map[e].customValue=t.target.value:i.field_map[e].customValue=t.target.value,l((0,s.Z)({},i))}},21349:(t,e,a)=>{a.d(e,{AA:()=>p,D6:()=>_,FT:()=>I,GX:()=>h,Ir:()=>c,Rx:()=>o,TF:()=>v,WP:()=>m,Yd:()=>n,c0:()=>f,mM:()=>k,n:()=>g,zF:()=>w});var s=a(51163),l=a(51108),r=a(55873),i=function(t,e){var a=(0,s.Z)({},t),l=["projectId","milestoneId","tasklistFlag","tasklistId","taskId"];return l.splice(l.indexOf(e)+1).map((function(t){null!=a&&a[t]&&(a[t]=""),a.actions[t.split("Id")[0]]={}})),(0,s.Z)({},a)},n=function(t,e,a,l,r){var i=(0,s.Z)({},e);return i.subEvent.map((function(e){var s,n,o,d,u,f,c;(null==i||!i.projectId||null!=i&&null!=(s=i.default)&&null!=(n=s.fields)&&null!=(o=n[i.portalId])&&null!=(d=o[i.projectId])&&d[e])&&null!=i&&null!=(u=i.default)&&null!=(f=u.fields)&&null!=(c=f[i.portalId])&&c[e]?i.field_map[e]=b(i,e):h(t,i,a,l,r,e)})),(0,s.Z)({},i)},o=function(t,e,a,l,r,o,f,c,h){var g,k,I,v=(0,s.Z)({},e),b=t.target.name,w=t.target.value;if(f){var j=(0,s.Z)({},c);j[b]="",h((0,s.Z)({},j))}switch(v[b]=w,b){case"portalId":v=d(v,l,a,r,o);break;case"event":v.subEvent=[w],v.field_map={},v.actions[w]={},v=u(i(v),l,a,r,o);break;case"projectId":case"milestoneId":case"tasklistId":case"taskId":var y,D;v=i(v,b);var Z=b.split("Id")[0];v.actions[Z]={},v.actions[v.event]={},v.subEvent.includes(Z)&&v.subEvent.splice(v.subEvent.indexOf(Z),1),["project","milestone"].includes(v.event)||"project"!==Z||null!=e&&null!=(y=e.default)&&null!=(D=y.milestones)&&D[v.portalId]||m(l,v,a,r,o),"subtask"===v.event&&"task"!==Z&&_(l,v,a,r,o),v=n(l,v,a,r,o);break;case"tasklistFlag":v.tasklistId="",w&&v.subEvent.includes("tasklist")&&v.subEvent.splice(v.subEvent.indexOf("tasklist"),1),!w||!["task","subtask"].includes(v.event)||null!=e&&null!=(g=e.default)&&null!=(k=g.milestones)&&null!=(I=k[v.portalId])&&I[w]||p(l,v,a,r,o)}a((0,s.Z)({},v))},d=function(t,e,a,l,r){var i,n,o=(0,s.Z)({},t);return o.event="",o.field_map={},o.actions={},o.subEvent=[],null==t||!t.portalId||null!=(i=t.default.tags)&&i[o.portalId]||v(e,t,a,l,r),null==t||!t.portalId||null!=(n=t.default.projects)&&n[o.portalId]||c(e,o,a,l,r),o},u=function(t,e,a,l,r){var i,n,o,d=(0,s.Z)({},t);(d.field_map={},d.field_map[d.event]=[{formField:"",zohoFormField:""}],null!=d&&d.event)&&(null!=d&&null!=(i=d.default)&&null!=(n=i.fields)&&null!=(o=n[d.portalId])&&o[d.event]?d.field_map[d.event]=b(d):h(e,d,a,l,r));return d},f=function(t,e,a,i,n){i(!0);var o={formID:t,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};(0,r.Z)(o,"bitforms_zprojects_refresh_portals").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);t.data.portals&&(Object.keys(t.data.portals).length>0?(r.default=(0,s.Z)({},r.default,{portals:t.data.portals}),n({show:!0,msg:(0,l.__)("Portals refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Portal Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),n({show:!0,msg:(0,l.__)("Portals refreshed","bitform")}),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Portals refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Portals refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},c=function(t,e,a,i,n){var o=e.id,d=e.portalId;i(!0);var u={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d};(0,r.Z)(u,"bitforms_zprojects_refresh_projects").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);r.default.projects||(r.default.projects={}),t.data.projects&&(Object.keys(t.data.projects).length>0?(r.default.projects[d]=t.data.projects,n({show:!0,msg:(0,l.__)("Projects refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Project Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Projects refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Projects refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},m=function(t,e,a,i,n){var o=e.id,d=e.portalId,u=e.projectId;i(!0);var f={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d,projectId:u};(0,r.Z)(f,"bitforms_zprojects_refresh_milestones").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);t.data.milestones&&(r.default.milestones||(r.default.milestones={}),Object.keys(t.data.milestones).length>0?(r.default.milestones[u]=t.data.milestones,n({show:!0,msg:(0,l.__)("Milestones refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Milestone Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Milestones refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Milestones refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},p=function(t,e,a,i,n){var o=e.id,d=e.portalId,u=e.projectId,f=e.tasklistFlag;i(!0);var c={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d,projectId:u,tasklistFlag:f};null!=e&&e.milestoneId&&(c.milestoneId=e.milestoneId),(0,r.Z)(c,"bitforms_zprojects_refresh_tasklists").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);Object.keys(t.data.tasklists).length>0?(r.default.tasklists||(r.default.tasklists={}),r.default.tasklists[d]||(r.default.tasklists[d]={}),null!=e&&e.milestoneId?(r.default.tasklists[d][e.milestoneId]||(r.default.tasklists[d][e.milestoneId]={}),r.default.tasklists[d][e.milestoneId][f]=t.data.tasklists):r.default.tasklists[d][f]=t.data.tasklists,n({show:!0,msg:(0,l.__)("Tasklists refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Tasklist Found","bitform")}),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Tasklists refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Tasklists refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},_=function(t,e,a,i,n){var o=e.id,d=e.portalId,u=e.projectId;i(!0);var f={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d,projectId:u};null!=e&&e.milestoneId&&(f.milestoneId=e.milestoneId),null!=e&&e.tasklistId&&(f.tasklistId=e.tasklistId),(0,r.Z)(f,"bitforms_zprojects_refresh_tasks").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);Object.keys(t.data.tasks).length>0?(r.default.tasks||(r.default.tasks={}),r.default.tasks[d]||(r.default.tasks[d]={}),null!=e&&e.milestoneId?null!=e&&e.tasklistId?(r.default.tasks[d][null==e?void 0:e.milestoneId]||(r.default.tasks[d][null==e?void 0:e.milestoneId]={}),r.default.tasks[d][null==e?void 0:e.milestoneId][null==e?void 0:e.tasklistId]=t.data.tasks):r.default.tasks[d][null==e?void 0:e.milestoneId]=t.data.tasks:null!=e&&e.tasklistId?r.default.tasks[d][null==e?void 0:e.tasklistId]=t.data.tasks:r.default.tasks[d]=t.data.tasks,n({show:!0,msg:(0,l.__)("Tasks refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Task Found","bitform")}),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Tasks refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Tasks refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},h=function(t,e,a,i,n,o){var d;d=o||e.event;var u=e.portalId;i(!0);var f={formID:t,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:u,event:d};null!=e&&e.projectId&&(f.projectId=e.projectId),(0,r.Z)(f,"bitforms_zprojects_refresh_fields").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);t.data.fields?(r.default.fields||(r.default.fields={}),r.default.fields[u]||(r.default.fields[u]={}),null!=e&&e.projectId?(r.default.fields[u][e.projectId]||(r.default.fields[u][e.projectId]={}),r.default.fields[u][r.projectId][d]=(0,s.Z)({},t.data)):r.default.fields[u][d]=(0,s.Z)({},t.data),r.field_map[d]=b(r,d),n({show:!0,msg:(0,l.__)("Fields refreshed","bitform")})):n({show:!0,msg:(0,l.g)((0,l.__)("Fields refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else n({show:!0,msg:(0,l.__)("Fields refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},g=function(t,e,a,i,n){var o=e.id,d=e.portalId;i(!0);var u={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:e.portalId};null!=e&&e.projectId&&(u.projectId=e.projectId),(0,r.Z)(u,"bitforms_zprojects_refresh_users").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);r.default.users||(r.default.users={}),t.data.users&&(Object.keys(t.data.users).length>0?(null!=e&&e.projectId?(r.default.users[d]||(r.default.users[d]={}),r.default.users[d][e.projectId]=t.data.users):r.default.users[d]=t.data.users,n({show:!0,msg:(0,l.__)("Owners refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Owner Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Owners refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Owners refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},k=function(t,e,a,i,n){var o=e.id,d=e.portalId;i(!0);var u={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d};(0,r.Z)(u,"bitforms_zprojects_refresh_task_layouts").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);r.default.taskLays||(r.default.taskLays={}),t.data.taskLays&&(Object.keys(t.data.taskLays).length>0?(r.default.taskLays[d]=t.data.taskLays,n({show:!0,msg:(0,l.__)("Task Layouts refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Task Layout Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Task Layouts refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Task Layouts refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},I=function(t,e,a,i,n){var o=e.id,d=e.portalId;i(!0);var u={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d};(0,r.Z)(u,"bitforms_zprojects_refresh_groups").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);r.default.groups||(r.default.groups={}),t.data.groups&&(Object.keys(t.data.groups).length>0?(r.default.groups[d]=t.data.groups,n({show:!0,msg:(0,l.__)("Project Groups refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Project Group Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Project Groups refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Project Groups refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},v=function(t,e,a,i,n){var o=e.id,d=e.portalId;i(!0);var u={formID:t,id:o,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:d};(0,r.Z)(u,"bitforms_zprojects_refresh_tags").then((function(t){if(t&&t.success){var r=(0,s.Z)({},e);r.default.tags||(r.default.tags={}),t.data.tags&&(Object.keys(t.data.tags).length>0?(r.default.tags[d]=t.data.tags,n({show:!0,msg:(0,l.__)("Tags refreshed","bitform")})):n({show:!0,msg:(0,l.__)("No Tag Found","bitform")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),a((0,s.Z)({},r))}else t&&t.data&&t.data.data||!t.success&&"string"===typeof t.data?n({show:!0,msg:(0,l.g)((0,l.__)("Tags refresh failed Cause: %s. please try again","bitform"),t.data.data||t.data)}):n({show:!0,msg:(0,l.__)("Tags refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},b=function(t,e){var a,s,l;return s=e||t.event,null!=t&&t.projectId?t.default.fields[t.portalId][t.projectId][s].required.length>0?null==(l=t.default.fields[t.portalId][t.projectId][s].required)?void 0:l.map((function(t){return{formField:"",zohoFormField:t}})):[{formField:"",zohoFormField:""}]:t.default.fields[t.portalId][s].required.length>0?null==(a=t.default.fields[t.portalId][s].required)?void 0:a.map((function(t){return{formField:"",zohoFormField:t}})):[{formField:"",zohoFormField:""}]},w=function(t,e){return function(t){var e=!0;return null!=t&&t.subEvent&&t.subEvent.map((function(a){var s,l;(null!=t&&t.projectId?null!=t&&null!=(s=t.field_map)&&s[a]?t.field_map[a].filter((function(e){var s,l,r,i,n;return!e.formField&&e.zohoFormField&&-1!==(null==t||null==(s=t.default)||null==(l=s.fields)||null==(r=l[t.portalId])||null==(i=r[t.projectId])||null==(n=i[a])?void 0:n.required.indexOf(e.zohoFormField))})):[]:null!=t&&null!=(l=t.field_map)&&l[a]?t.field_map[a].filter((function(e){var s,l,r,i;return!e.formField&&e.zohoFormField&&-1!==(null==t||null==(s=t.default)||null==(l=s.fields)||null==(r=l[t.portalId])||null==(i=r[a])?void 0:i.required.indexOf(e.zohoFormField))})):[]).length>0&&(e=!1)})),!!e}(t)?function(t){var e=!0,a={project:["owner","tasklayoutid"],milestone:["owner","flag"],tasklist:["flag"],task:["owner"],subtask:["owner"],issue:["owner","flag"]};return null!=t&&t.subEvent&&t.subEvent.map((function(s){a[s].map((function(a){t.actions[s][a]||(e=!1)}))})),!!e}(t)?"subtask"!==(null==t?void 0:t.event)||null!=t&&t.taskId||t.subEvent.includes("task")?!(["task","subtask"].includes(null==t?void 0:t.event)&&(null!=t&&t.milestoneId||t.subEvent.includes("milestone"))&&!(null!=t&&t.tasklistId||t.subEvent.includes("tasklist")))||(e({show:!0,msg:(0,l.g)((0,l.__)("to create a %s under milestone you must select a tasklist or create a new tasklist","bitform"),t.event)}),!1):(e({show:!0,msg:(0,l.__)("to create a subtask you must select a task or create a new task","bitform")}),!1):(e({show:!0,msg:(0,l.__)("please fill up the required actions","bitform")}),!1):(e({show:!0,msg:(0,l.__)("please map mandatory fields","bitform")}),!1)}}}]);
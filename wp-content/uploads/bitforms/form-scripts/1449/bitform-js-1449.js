 if(!window.bf_globals){ window.bf_globals={};}["bitforms_10_1449_1"].forEach(function(contentId){const form=document.getElementById(contentId);if(!form){ delete window.bf_globals[contentId];return;}if(!window.bf_globals[contentId]){window.bf_globals[contentId]={inits:{},contentId: contentId};}else{ window.bf_globals[contentId].inits={};window.bf_globals[contentId].contentId=contentId;}});var bfSelect=function(){"use strict";return function(e,t){return(t||document).querySelector(e)}}();var bfReset=function(){"use strict";return function(e,t=!1){if(t){const t=new CustomEvent("bf-form-reset",{detail:{formId:e}});bfSelect(`#form-${e}`).dispatchEvent(t)}const r=window.bf_globals[e];bfSelect(`#form-${e}`).reset(),localStorage.setItem("bf-entry-id",""),"undefined"!=typeof customFieldsReset&&customFieldsReset(r),"undefined"!=typeof resetOtherOpt&&resetOtherOpt(),window.bf_globals[e].modifiedFields=r.fields,Object.keys(r.fields).forEach((t=>{const r=bfSelect(`#form-${e} .${t}-err-wrp`);r&&(setStyleProperty(r,"height","0px"),setStyleProperty(r,"opacity",0),setStyleProperty(bfSelect(`.${t}-err-msg`,r),"display","none"))})),r.gRecaptchaSiteKey&&"v2"===r.gRecaptchaVersion&&window?.grecaptcha?.reset()}}();var setBFMsg=function(){"use strict";return function(e){let t=bfSelect(`#bf-form-msg-wrp-${e.contentId}`);t.innerHTML=`<div class="bf-form-msg deactive ${e.type} scroll">${e.msg}</div>`,t=bfSelect(".bf-form-msg",t);let s=5e3;e.msgId&&(t=bfSelect(`.msg-content-${e.msgId} .msg-content`,bfSelect(`#${e.contentId}`)),t.innerHTML=e.msg,t=bfSelect(`.msg-container-${e.msgId}`,bfSelect(`#${e.contentId}`)),s=e.duration),t&&t.classList.replace("active","deactive"),t.classList.contains("scroll")&&scrollToFld(t),t&&(setTimeout((()=>{t.classList.replace("deactive","active")}),100),s&&setTimeout((()=>{t.classList.replace("active","deactive")}),s))}}();var scrollToFld=function(){"use strict";function t(t){const n="scrollTop",o=t;let e=!!o[n];return e||(o[n]=1,e=!!o[n],o[n]=0),e}return function(n){const o=function(n){let o=n.parentNode;for(;null!==o&&o!==document.body;){if(t(o))return o;o=o.parentNode}return null}(n),e=o||window,l=o||document.body,r=n.getBoundingClientRect(),c=l.getBoundingClientRect().top,i=r.top+(o?l.scrollTop:0)-c;(function(t,n){const o=t.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=n.clientHeight&&o.right<=n.clientWidth})(n,l)||e.scrollTo({top:i,behavior:"smooth"})}}();var bfValidationErrMsg=function(){"use strict";return function(e,t){const{data:r}=e;r&&"string"==typeof r?setBFMsg({contentId:t,msg:r,error:!0,show:!0,type:"error"}):r&&(void 0!==r.$form&&(setBFMsg({contentId:t,msg:r.$form.message,msgId:r.$form.msg_id,duration:r.$form.msg_duration,type:"error"}),delete r.$form),Object.keys(r).length>0&&function(e,t){Object.keys(e).forEach((r=>{const o=r.match(/\[(\d+)\]/)?.[1],s=bfSelect(`#form-${t}${o?` .rpt-index-${o}`:""} .${r}-err-wrp`),n=bfSelect(`.${r}-err-txt`,s);bfSelect(`.${r}-err-msg`,s).style.removeProperty("display"),n.innerHTML=e[r],setStyleProperty(s,"height",`${n.offsetHeight}px`),setStyleProperty(s,"opacity",1)}))}(r,t))}}();var setHiddenFld=function(){"use strict";return function e(t,n){let a=bfSelect(`input[name="${t.name}"]`,n);return a||(a=document.createElement("input"),a.type="text",a.className="d-none",n.append(a)),"b_h_t"===t.name&&(bfSelect(`input[name="${a.value}"]`,n)?.remove(),e({name:t.value,required:""},n)),Object.keys(t).forEach((e=>{a.setAttribute(e,t[e])})),a}}();var submit_form=function(){"use strict";function e(e,t){const o=new URL(e?.ajaxURL),n=e?.entryId?"bitforms_update_form_entry":"bitforms_submit_form";return o.searchParams.append("action",n),e?.entryId&&(o.searchParams.append("_ajax_nonce",e.nonce||""),o.searchParams.append("entryID",e.entryId),o.searchParams.append("formID",e.formId)),fetch(o,{method:"POST",body:t})}function t(e,t,n){e.then((e=>new Promise(((o,n)=>{if(e.staus>400){const o=new CustomEvent("bf-form-submit-error",{detail:{formId:t,errors:result.data}});bfSelect(`#form-${t}`).dispatchEvent(o),500===e.staus?n(new Error("Mayebe Internal Server Error")):n(e.json())}else o(e.json())})))).then((e=>{const a=new CustomEvent("bf-form-submit-success",{detail:{formId:t,entryId:e.entryId,formData:n}});bfSelect(`#form-${t}`).dispatchEvent(a);let r=null,s=null,c="";const d=window.bf_globals[t];if(void 0!==e&&e.success){const o=bfSelect(`#form-${t}`);bfReset(t),"object"==typeof e.data?(o&&e?.data?.hidden_fields?.map((e=>{setHiddenFld(e,o)})),r=e.data.redirectPage,e.data.cron&&(s=e.data.cron),e.data.cronNotOk&&(s=e.data.cronNotOk),e.data.new_nonce&&(c=e.data.new_nonce),setBFMsg({contentId:t,msgId:e.data.msg_id,msg:e.data.message,duration:e.data.msg_duration,show:!0,type:"success",error:!1})):setBFMsg({contentId:t,msg:e.data,type:"success",show:!0,error:!1}),localStorage.removeItem(`bitform-partial-form-${d.formId}`);const n=bfSelect('input[name="entryID"]',o);n&&n.remove(),delete d.entryId}else{const o=new CustomEvent("bf-form-submit-error",{detail:{formId:t,errors:e.data}});bfSelect(`#form-${t}`).dispatchEvent(o),bfValidationErrMsg(e,t)}if(function(e,t,o){const n=window.bf_globals[o];if(e)if("string"==typeof e){const t=new URL(e);t.protocol!==window.location.protocol&&(t.protocol=window.location.protocol),fetch(t)}else{const o=new URL(n.ajaxURL);o.searchParams.append("action","bitforms_trigger_workflow");const a={cronNotOk:e,token:t||n.nonce,id:n.appID};fetch(o,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}}(s,c,t),r){const e=setTimeout((()=>{window.location=decodeURI(r),e&&clearTimeout(e)}),1e3)}o(t,!1)})).catch((e=>{const n=e?.message?e.message:"Unknown Error";setBFMsg({contentId:t,msg:n,show:!0,type:"error",error:!0}),o(t,!1)}))}function o(e,t){bfSelect('button[type="submit"]',bfSelect(`#form-${e}`)).disabled=t;const o=bfSelect('button[type="submit"] span',bfSelect(`#form-${e}`));o&&o.classList.toggle("d-none")}return function(n=null){(n?[n]:Object.keys(window.bf_globals)).forEach((n=>{const a=bfSelect(`#form-${n}`);a&&(a.addEventListener("submit",(n=>{!function(n){n.preventDefault();const a=n.target.id.slice(n.target.id.indexOf("-")+1);if("undefined"!=typeof validateForm&&!validateForm({form:a})){const e=new CustomEvent("bf-form-validation-error",{detail:{formId:a,fieldId:"",error:""}});return void n.target.dispatchEvent(e)}o(a,!0);let r=new FormData(n.target);const s=window.bf_globals[a];"undefined"!=typeof advancedFileHandle&&(r=advancedFileHandle(s,r)),"undefined"!=typeof decisionFldHandle&&(r=decisionFldHandle(s,r)),s.GCLID&&r.set("GCLID",s.GCLID);const c=[];Object.entries(s?.fields||{}).forEach((e=>{e[1]?.valid?.hide&&c.push(e[0])})),c.length&&r.append("hidden_fields",c),"v3"===s?.gRecaptchaVersion&&s?.gRecaptchaSiteKey?grecaptcha.ready((()=>{grecaptcha.execute(s.gRecaptchaSiteKey,{action:"submit"}).then((o=>{r.append("g-recaptcha-response",o),t(e(s,r),a,r)}))})):t(e(s,r),a,r)}(n)})),bfSelect('button[type="reset"]',a)?.addEventListener("click",(()=>bfReset(a.id.replace("form-",""),!0))))})),document.querySelectorAll(".msg-backdrop,.bf-msg-close").forEach((e=>{e.addEventListener("click",(t=>{t.target===e&&(t.stopPropagation(),bfSelect(`#${e.dataset.contentid} .msg-container-${e.dataset.msgid}`).classList.replace("active","deactive"))}))})),localStorage.setItem("bf-entry-id","")}}();var setStyleProperty=function(){"use strict";return function(t,e,r){t?.style&&t.style.setProperty(e,r,"important")}}();var generateBackslashPattern=function(){"use strict";return t=>(t||"").split("$_bf_$").join("\\")}();var validateForm=function(){"use strict";let e,t,i={};const n=t=>window?.bf_globals?.[e].inits?.[t],l=e=>{const n=e.replace(/\[\d*\]/g,"");if(i[n])return i[n];const l=Object.entries(t);for(let e=0;e<l.length;e+=1){const[t,d]=l[e];if(d?.fieldName===n)return i[n]=t,t}return""},d=()=>{const n=new FormData(bfSelect(`#form-${e}`)),d={},o=Array.from(n.entries());return i={},o.forEach((([e,i])=>{const n=l(e),o=e.replace("[]","");n in t&&(d[o]?(Array.isArray(d[o])||(d[o]=[d[o]]),d[o].push(i)):d[o]=i)})),d},o=(t,i,n,l="")=>{const d=bfSelect(`#form-${e} ${l} .${i}-err-wrp`),o=bfSelect(`.${i}-err-txt`,d),r=bfSelect(`.${i}-err-msg`,d);if(o&&"err"in(n||{}))if(t&&n?.err?.[t]?.show){r.style.removeProperty("display"),o.innerHTML=n.err[t].custom?n.err[t].msg:n.err[t].dflt,setStyleProperty(d,"height",`${o.parentElement.scrollHeight}px`),setStyleProperty(d,"opacity",1);const a=bfSelect(`#form-${e} ${l} .btcd-fld-itm.${i}`);scrollToFld(a)}else o.innerHTML="",setStyleProperty(r,"display","none"),setStyleProperty(d,"height",0),setStyleProperty(d,"opacity",0)};return function({form:i,input:r}){i?e=i:r?.form?.id&&([,e]=r.form.id.split("form-"));const a=window?.bf_globals?.[e];if(void 0===a)return!1;let f={};const c=a.configs.bf_separator;t=a.fields;const{modifiedFields:s}=a;if(s&&Object.assign(t,s),i)f=d();else if(r){if(!a.validateFocusLost)return!0;const e=l(r.name);f=d(),t={[e]:t[e]}}let p=!0;const u=Object.entries(t);let{length:m}=u;for(;m--;){const[t,i]=u[m];let l=[""];if("undefined"!=typeof checkRepeatedField){const e=checkRepeatedField(t,a);l=getRepeatedIndexes(e,a,r)}for(let d=0;d<l.length;d+=1){const r=l[d],a=r?`${i.fieldName}[${r}]`:i.fieldName,s=r?`.rpt-index-${r}`:"",u=i.typ,m="string"==typeof f[a]?f[a].trim():f[a];if(bfSelect(`#form-${e}${s} .${t}.fld-hide`)){o("",t,i,s);continue}let y="";"check"===u&&(y="undefined"!=typeof checkFldValidation?checkFldValidation(m,i):""),"check"!==u&&"radio"!==u||y||"undefined"==typeof customOptionValidation||(y=customOptionValidation(e,t,i)),m||y||(y="undefined"!=typeof requiredFldValidation?requiredFldValidation(i):null),o(y,t,i,s),y?p=!1:m&&("number"===u&&"undefined"!=typeof nmbrFldValidation?y=nmbrFldValidation(m,i):"email"===u&&"undefined"!=typeof emailFldValidation?y=emailFldValidation(m,i):"url"===u&&"undefined"!=typeof urlFldValidation?y=urlFldValidation(m,i):"decision-box"===u&&"undefined"!=typeof dcsnbxFldValidation?y=dcsnbxFldValidation(m,i):"check"!==u&&"select"!==u||"undefined"==typeof checkMinMaxOptions?"file-up"===u&&"undefined"!=typeof fileupFldValidation?y=fileupFldValidation(m,i):"advanced-file-up"===u&&"undefined"!=typeof advanceFileUpFldValidation?y=advanceFileUpFldValidation(n(t),i):"phone-number"===u&&"undefined"!=typeof phoneNumberFldValidation&&(y=phoneNumberFldValidation(n(t),i)):y=checkMinMaxOptions(m,i,c),i?.valid?.regexr&&!y&&(y="undefined"!=typeof regexPatternValidation?regexPatternValidation(m,i):null),o(y,t,i,s),y&&(p=!1))}}return p}}();var bitform_init=function(){"use strict";function e(e=null){"undefined"!=typeof hidden_token_field&&hidden_token_field(e),"undefined"!=typeof initAllCustomFlds&&initAllCustomFlds(e),"undefined"!=typeof initAddOtherOpt&&initAddOtherOpt(e),"undefined"!=typeof initCheckDisableOnMax&&initCheckDisableOnMax(e),"undefined"!=typeof validate_focus&&validate_focus(e),"undefined"!=typeof submit_form&&submit_form(e),"undefined"!=typeof bit_form_abandonment&&bit_form_abandonment(e),"undefined"!=typeof setFieldValues&&setFieldValues(e)}return document.addEventListener("DOMContentLoaded",(()=>{e()})),e}();let bfContentId="",bfVars="";
var M=Object.defineProperty,O=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var w=(r,e,o)=>e in r?M(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,x=(r,e)=>{for(var o in e||(e={}))I.call(e,o)&&w(r,o,e[o]);if(S)for(var o of S(e))K.call(e,o)&&w(r,o,e[o]);return r},P=(r,e)=>O(r,C(e));import{o as R,e as T,h as b,j as $,I as j,l as p,aM as v,a3 as z}from"./main-398.js";import{S as B}from"./bf-760-79.js";import{E as H}from"./bf-417-87.js";function L({type:r,title:e,tipTitle:o,isUnique:i,className:E}){var c,a,g,f,l,m;const{fieldKey:n}=R(),[d,k]=T(z),s=b(d[n]),A=F=>{if(!j)return;const{checked:h}=F.target;if(s.err||(s.err={}),s.err[r]||(s.err[r]={}),h){s.err[r].show=!0;const t="That field is taken. Try another";s.err[r].dflt||(s.err[r].dflt=t)}else delete s.err[r].show;const u=p(d,t=>{t[n]=s});k(u),v({event:`${e} ${h?"On":"Off"}`,type:e,state:{fields:u,fldKey:n}})};return $.jsx(B,P(x({id:`${r}-stng`,title:e,className:E,tip:o,toggleName:r,toggleAction:A,toggleChecked:(a=(c=s==null?void 0:s.err)==null?void 0:c[r])==null?void 0:a[i],switching:!0,tipProps:{width:200,icnSize:17},open:(f=(g=s==null?void 0:s.err)==null?void 0:g[r])==null?void 0:f[i]},j&&{disable:!((m=(l=s==null?void 0:s.err)==null?void 0:l[r])!=null&&m[i])}),{isPro:!0,proProperty:r,children:$.jsx(H,{id:`${r}-stng`,type:r,title:e,tipTitle:o})}))}export{L as U};

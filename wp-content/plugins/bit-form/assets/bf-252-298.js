var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(t,n,s)=>n in t?g(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,r=(t,n)=>{for(var s in n||(n={}))f.call(n,s)&&a(t,s,n[s]);if(p)for(var s of p(n))h.call(n,s)&&a(t,s,n[s]);return t};import{j as e}from"./main-398.js";function S({id:t,className:n,cls:s,width:i,title:c,inpType:l,action:m,value:o,placeholder:x,name:d,list:j,disabled:u}){return e.jsxs("div",{className:`mt-3 setting-inp ${n}`,style:r({},i&&{width:i}),children:[e.jsx("span",{children:c}),e.jsx("input",{"data-testid":`${t}-inp`,className:s||"btcd-paper-inp ",type:l,onChange:m,value:o,placeholder:x,name:d,list:j,disabled:u})]})}export{S};

import{_ as F}from"./bf-864-106.js";function s(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function f(a){s(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||F(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function oe(a,t){s(2,arguments);var e=f(a),r=f(t);return e.getTime()<r.getTime()}var jt=Object.freeze({__proto__:null,default:oe});function ue(a,t){s(2,arguments);var e=f(a),r=f(t);return e.getTime()>r.getTime()}var Lt=Object.freeze({__proto__:null,default:ue});function x(a){s(1,arguments);var t=f(a);return t.setHours(0,0,0,0),t}var qt=Object.freeze({__proto__:null,default:x});function se(a,t){s(2,arguments);var e=x(a),r=x(t);return e.getTime()===r.getTime()}var Ht=Object.freeze({__proto__:null,default:se});function le(a){return s(1,arguments),a instanceof Date||F(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function A(a){if(s(1,arguments),!le(a)&&typeof a!="number")return!1;var t=f(a);return!isNaN(Number(t))}var Rt=Object.freeze({__proto__:null,default:A});function b(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function de(a,t){s(2,arguments);var e=f(a).getTime(),r=b(t);return new Date(e+r)}function fe(a,t){s(2,arguments);var e=b(t);return de(a,-e)}var ce=864e5;function ve(a){s(1,arguments);var t=f(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/ce)+1}function U(a){s(1,arguments);var t=1,e=f(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function V(a){s(1,arguments);var t=f(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=U(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=U(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function me(a){s(1,arguments);var t=V(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=U(e);return r}var he=6048e5;function ge(a){s(1,arguments);var t=f(a),e=U(t).getTime()-me(t).getTime();return Math.round(e/he)+1}var we={};function M(){return we}function E(a,t){var e,r,n,i,o,u,v,l;s(1,arguments);var h=M(),d=b((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:h.weekStartsOn)!==null&&r!==void 0?r:(v=h.locale)===null||v===void 0||(l=v.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=f(a),g=m.getUTCDay(),w=(g<d?7:0)+g-d;return m.setUTCDate(m.getUTCDate()-w),m.setUTCHours(0,0,0,0),m}function J(a,t){var e,r,n,i,o,u,v,l;s(1,arguments);var h=f(a),d=h.getUTCFullYear(),m=M(),g=b((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&r!==void 0?r:(v=m.locale)===null||v===void 0||(l=v.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(d+1,0,g),w.setUTCHours(0,0,0,0);var C=E(w,t),p=new Date(0);p.setUTCFullYear(d,0,g),p.setUTCHours(0,0,0,0);var k=E(p,t);return h.getTime()>=C.getTime()?d+1:h.getTime()>=k.getTime()?d:d-1}function be(a,t){var e,r,n,i,o,u,v,l;s(1,arguments);var h=M(),d=b((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&r!==void 0?r:(v=h.locale)===null||v===void 0||(l=v.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),m=J(a,t),g=new Date(0);g.setUTCFullYear(m,0,d),g.setUTCHours(0,0,0,0);var w=E(g,t);return w}var ye=6048e5;function _e(a,t){s(1,arguments);var e=f(a),r=E(e,t).getTime()-be(e,t).getTime();return Math.round(r/ye)+1}function c(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var Oe={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return c(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):c(r+1,2)},d:function(t,e){return c(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return c(t.getUTCHours()%12||12,e.length)},H:function(t,e){return c(t.getUTCHours(),e.length)},m:function(t,e){return c(t.getUTCMinutes(),e.length)},s:function(t,e){return c(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return c(i,e.length)}},O=Oe,D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},pe={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return O.y(t,e)},Y:function(t,e,r,n){var i=J(t,n),o=i>0?i:1-i;if(e==="YY"){var u=o%100;return c(u,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){var r=V(t);return c(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return c(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return O.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=_e(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):c(i,e.length)},I:function(t,e,r){var n=ge(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):O.d(t,e)},D:function(t,e,r){var n=ve(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return c(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=D.noon:n===0?i=D.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=D.evening:n>=12?i=D.afternoon:n>=4?i=D.morning:i=D.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return O.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):O.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):O.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):O.s(t,e)},S:function(t,e){return O.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return X(o);case"XXXX":case"XX":return T(o);case"XXXXX":case"XXX":default:return T(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return X(o);case"xxxx":case"xx":return T(o);case"xxxxx":case"xxx":default:return T(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(o,":");case"OOOO":default:return"GMT"+T(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(o,":");case"zzzz":default:return"GMT"+T(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return c(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return c(o,e.length)}};function Q(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+c(i,2)}function X(a,t){if(a%60===0){var e=a>0?"-":"+";return e+c(Math.abs(a)/60,2)}return T(a,t)}function T(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=c(Math.floor(n/60),2),o=c(n%60,2);return r+i+e+o}var Te=pe,B=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},K=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},De=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return B(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",B(n,e)).replace("{{time}}",K(i,e))},Me={p:K,P:De},Ce=Me;function z(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var ke=["D","DD"],Se=["YY","YYYY"];function Pe(a){return ke.indexOf(a)!==-1}function We(a){return Se.indexOf(a)!==-1}function G(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ye={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},xe=function(t,e,r){var n,i=Ye[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},$e=xe;function I(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var Ne={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ue={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ee={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Fe={date:I({formats:Ne,defaultWidth:"full"}),time:I({formats:Ue,defaultWidth:"full"}),dateTime:I({formats:Ee,defaultWidth:"full"})},je=Fe,Le={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qe=function(t,e,r,n){return Le[t]},He=qe;function W(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var u=a.defaultWidth,v=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[v]||a.values[u]}var l=a.argumentCallback?a.argumentCallback(t):t;return n[l]}}var Re={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ie={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Be={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ge=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ae={ordinalNumber:Ge,era:W({values:Re,defaultWidth:"wide"}),quarter:W({values:Ie,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:W({values:ze,defaultWidth:"wide"}),day:W({values:Qe,defaultWidth:"wide"}),dayPeriod:W({values:Xe,defaultWidth:"wide",formattingValues:Be,defaultFormattingWidth:"wide"})},Ve=Ae;function Y(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],u=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],v=Array.isArray(u)?Ke(u,function(d){return d.test(o)}):Je(u,function(d){return d.test(o)}),l;l=a.valueCallback?a.valueCallback(v):v,l=e.valueCallback?e.valueCallback(l):l;var h=t.slice(o.length);return{value:l,rest:h}}}function Je(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function Ke(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function Ze(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}var et=/^(\d+)(th|st|nd|rd)?/i,tt=/\d+/i,at={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rt={any:[/^b/i,/^(a|c)/i]},nt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},it={any:[/1/i,/2/i,/3/i,/4/i]},ot={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ut={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},st={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ft={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ct={ordinalNumber:Ze({matchPattern:et,parsePattern:tt,valueCallback:function(t){return parseInt(t,10)}}),era:Y({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),quarter:Y({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:it,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Y({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:ut,defaultParseWidth:"any"}),day:Y({matchPatterns:st,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:dt,defaultMatchWidth:"any",parsePatterns:ft,defaultParseWidth:"any"})},vt=ct,mt={code:"en-US",formatDistance:$e,formatLong:je,formatRelative:He,localize:Ve,match:vt,options:{weekStartsOn:0,firstWeekContainsDate:1}},Z=mt,It=Object.freeze({__proto__:null,default:Z}),ht=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wt=/^'([^]*?)'?$/,bt=/''/g,yt=/[a-zA-Z]/;function _t(a,t,e){var r,n,i,o,u,v,l,h,d,m,g,w,C,p,k,j,L,q;s(2,arguments);var te=String(t),S=M(),P=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:S.locale)!==null&&r!==void 0?r:Z,H=b((i=(o=(u=(v=e==null?void 0:e.firstWeekContainsDate)!==null&&v!==void 0?v:e==null||(l=e.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&u!==void 0?u:S.firstWeekContainsDate)!==null&&o!==void 0?o:(d=S.locale)===null||d===void 0||(m=d.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=b((g=(w=(C=(p=e==null?void 0:e.weekStartsOn)!==null&&p!==void 0?p:e==null||(k=e.locale)===null||k===void 0||(j=k.options)===null||j===void 0?void 0:j.weekStartsOn)!==null&&C!==void 0?C:S.weekStartsOn)!==null&&w!==void 0?w:(L=S.locale)===null||L===void 0||(q=L.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&g!==void 0?g:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var $=f(a);if(!A($))throw new RangeError("Invalid time value");var ae=z($),re=fe($,ae),ne={firstWeekContainsDate:H,weekStartsOn:R,locale:P,_originalDate:$},ie=te.match(gt).map(function(y){var _=y[0];if(_==="p"||_==="P"){var N=Ce[_];return N(y,P.formatLong)}return y}).join("").match(ht).map(function(y){if(y==="''")return"'";var _=y[0];if(_==="'")return Ot(y);var N=Te[_];if(N)return!(e!=null&&e.useAdditionalWeekYearTokens)&&We(y)&&G(y,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Pe(y)&&G(y,t,String(a)),N(re,y,P.localize,ne);if(_.match(yt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return y}).join("");return ie}function Ot(a){var t=a.match(wt);return t?t[1].replace(bt,"'"):a}var zt=Object.freeze({__proto__:null,default:_t});function pt(a,t){var e,r,n,i,o,u,v,l;s(1,arguments);var h=M(),d=b((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:h.weekStartsOn)!==null&&r!==void 0?r:(v=h.locale)===null||v===void 0||(l=v.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=f(a),g=m.getDay(),w=(g<d?-7:0)+6-(g-d);return m.setDate(m.getDate()+w),m.setHours(23,59,59,999),m}var Qt=Object.freeze({__proto__:null,default:pt});function Tt(a,t){var e,r,n,i,o,u,v,l;s(1,arguments);var h=M(),d=b((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:h.weekStartsOn)!==null&&r!==void 0?r:(v=h.locale)===null||v===void 0||(l=v.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=f(a),g=m.getDay(),w=(g<d?7:0)+g-d;return m.setDate(m.getDate()-w),m.setHours(0,0,0,0),m}var Xt=Object.freeze({__proto__:null,default:Tt});function Dt(a,t){s(2,arguments);var e=f(a),r=b(t);return isNaN(r)?new Date(NaN):(r&&e.setDate(e.getDate()+r),e)}var Bt=Object.freeze({__proto__:null,default:Dt});function Mt(a,t){s(2,arguments);var e=f(a),r=f(t),n=e.getFullYear()-r.getFullYear(),i=e.getMonth()-r.getMonth();return n*12+i}var Gt=Object.freeze({__proto__:null,default:Mt}),Ct=864e5;function kt(a,t){s(2,arguments);var e=x(a),r=x(t),n=e.getTime()-z(e),i=r.getTime()-z(r);return Math.round((n-i)/Ct)}var At=Object.freeze({__proto__:null,default:kt});function St(a){s(1,arguments);var t=f(a),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}var Vt=Object.freeze({__proto__:null,default:St});function Pt(a){s(1,arguments);var t=f(a);return t.setDate(1),t.setHours(0,0,0,0),t}var Jt=Object.freeze({__proto__:null,default:Pt});function Wt(a){s(1,arguments);var t;if(a&&typeof a.forEach=="function")t=a;else if(F(a)==="object"&&a!==null)t=Array.prototype.slice.call(a);else return new Date(NaN);var e;return t.forEach(function(r){var n=f(r);(e===void 0||e<n||isNaN(Number(n)))&&(e=n)}),e||new Date(NaN)}var Kt=Object.freeze({__proto__:null,default:Wt});function Yt(a){s(1,arguments);var t;if(a&&typeof a.forEach=="function")t=a;else if(F(a)==="object"&&a!==null)t=Array.prototype.slice.call(a);else return new Date(NaN);var e;return t.forEach(function(r){var n=f(r);(e===void 0||e>n||isNaN(n.getDate()))&&(e=n)}),e||new Date(NaN)}var Zt=Object.freeze({__proto__:null,default:Yt});function xt(a,t){s(2,arguments);var e=f(a),r=f(t);return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()}var ea=Object.freeze({__proto__:null,default:xt});function $t(a){s(1,arguments);var t=f(a),e=t.getFullYear(),r=t.getMonth(),n=new Date(0);return n.setFullYear(e,r+1,0),n.setHours(0,0,0,0),n.getDate()}function Nt(a,t){s(2,arguments);var e=f(a),r=b(t),n=e.getFullYear(),i=e.getDate(),o=new Date(0);o.setFullYear(n,r,15),o.setHours(0,0,0,0);var u=$t(o);return e.setMonth(r,Math.min(i,u)),e}var ta=Object.freeze({__proto__:null,default:Nt});function Ut(a,t){s(2,arguments);var e=f(a),r=b(t);return isNaN(e.getTime())?new Date(NaN):(e.setFullYear(r),e)}var aa=Object.freeze({__proto__:null,default:Ut});function ee(a,t){s(2,arguments);var e=f(a),r=b(t);if(isNaN(r))return new Date(NaN);if(!r)return e;var n=e.getDate(),i=new Date(e.getTime());i.setMonth(e.getMonth()+r+1,0);var o=i.getDate();return n>=o?i:(e.setFullYear(i.getFullYear(),i.getMonth(),n),e)}var ra=Object.freeze({__proto__:null,default:ee});function Et(a,t){s(2,arguments);var e=b(t);return ee(a,e*12)}var na=Object.freeze({__proto__:null,default:Et});export{Yt as $,Pe as A,fe as B,z as C,Kt as D,Zt as E,kt as F,ea as G,ta as H,aa as I,na as J,ee as K,ra as L,It as M,Tt as N,Dt as O,pt as P,Pt as Q,se as R,St as S,x as T,Mt as U,xt as V,oe as W,ue as X,Nt as Y,Ut as Z,Wt as _,Lt as a,_t as a0,le as a1,Et as a2,Ht as b,Xt as c,Bt as d,Qt as e,zt as f,Gt as g,At as h,jt as i,Vt as j,Jt as k,Rt as l,J as m,E as n,U as o,_e as p,b as q,s as r,qt as s,f as t,ge as u,M as v,Z as w,Ce as x,We as y,G as z};

var ht=Object.defineProperty,ut=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var ze=(_,g,t)=>g in _?ht(_,g,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[g]=t,ie=(_,g)=>{for(var t in g||(g={}))gt.call(g,t)&&ze(_,t,g[t]);if(Fe)for(var t of Fe(g))ft.call(g,t)&&ze(_,t,g[t]);return _},ue=(_,g)=>ut(_,dt(g));import{aR as W,a$ as Me,r as J,bX as mt,a3 as bt,cL as Je,a as Ze,j,aX as vt,h as yt,o as xt,e as wt,P as _t,c as _e,q as Q,_ as ke,I as $e,br as kt,as as $t,bh as St,bg as Ct,av as Et,d as At}from"./main-398.js";import{a as me}from"./bf-635-165.js";import{l as Qe}from"./bf-466-135.js";import{B as Tt}from"./bf-849-115.js";import{S as Mt}from"./bf-404-116.js";import{C as De}from"./bf-940-163.js";import{D as Rt}from"./bf-354-65.js";import{S as Lt}from"./bf-314-99.js";import{L as Ot}from"./bf-351-132.js";import{a as It,G as je}from"./bf-233-100.js";import{P as Be}from"./bf-756-69.js";import"./bf-491-73.js";import"./bf-333-133.js";import"./bf-235-102.js";import"./bf-782-101.js";var Nt={exports:{}};(function(_,g){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(t,l,$){var e=t("../lib/oop");t("../lib/lang");var a=t("./text_highlight_rules").TextHighlightRules,u=l.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",f=l.supportFunction="rgb|rgba|url|attr|counter|counters",h=l.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",n=l.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",o=l.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",b=l.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",x=l.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",C=l.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",E=function(){var y=this.createKeywordMapper({"support.function":f,"support.constant":h,"support.type":u,"support.constant.color":n,"support.constant.fonts":o},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:b},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+b+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:b},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:x},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:C},{include:"url"},{token:y,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};e.inherits(E,a),l.CssHighlightRules=E}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,l,$){var e=t("../range").Range,a=function(){};(function(){this.checkOutdent=function(u,f){return/^\s+$/.test(u)?/^\s*\}/.test(f):!1},this.autoOutdent=function(u,f){var h=u.getLine(f),n=h.match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,b=u.findMatchingBracket({row:f,column:o});if(!b||b.row==f)return 0;var x=this.$getIndent(u.getLine(b.row));u.replace(new e(f,0,f,o-1),x)},this.$getIndent=function(u){return u.match(/^\s*/)[0]}}).call(a.prototype),l.MatchingBraceOutdent=a}),ace.define("ace/mode/css_completions",["require","exports","module"],function(t,l,$){var e={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},a=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var u=document.createElement("c").style;for(var f in u)if(typeof u[f]=="string"){var h=f.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()});e.hasOwnProperty(h)||(e[h]=1)}}this.completionsDefined=!0},this.getCompletions=function(u,f,h,n){if(this.completionsDefined||this.defineCompletions(),u==="ruleset"||f.$mode.$id=="ace/mode/scss"){var o=f.getLine(h.row).substr(0,h.column),b=/\([^)]*$/.test(o);return b&&(o=o.substr(o.lastIndexOf("(")+1)),/:[^;]+$/.test(o)?this.getPropertyValueCompletions(u,f,h,n):this.getPropertyCompletions(u,f,h,n,b)}return[]},this.getPropertyCompletions=function(u,f,h,n,o){o=o||!1;var b=Object.keys(e);return b.map(function(x){return{caption:x,snippet:x+": $0"+(o?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(u,f,h,n){var o=f.getLine(h.row).substr(0,h.column),b=(/([\w\-]+):[^:]*$/.exec(o)||{})[1];if(!b)return[];var x=[];return b in e&&typeof e[b]=="object"&&(x=Object.keys(e[b])),x.map(function(C){return{caption:C,snippet:C,meta:"property value",score:1e6}})}}).call(a.prototype),l.CssCompletions=a}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(t,l,$){var e=t("../../lib/oop");t("../behaviour").Behaviour;var a=t("./cstyle").CstyleBehaviour,u=t("../../token_iterator").TokenIterator,f=function(){this.inherit(a),this.add("colon","insertion",function(h,n,o,b,x){if(x===":"&&o.selection.isEmpty()){var C=o.getCursorPosition(),E=new u(b,C.row,C.column),y=E.getCurrentToken();if(y&&y.value.match(/\s+/)&&(y=E.stepBackward()),y&&y.type==="support.type"){var S=b.doc.getLine(C.row),s=S.substring(C.column,C.column+1);if(s===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(S.substring(C.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(h,n,o,b,x){var C=b.doc.getTextRange(x);if(!x.isMultiLine()&&C===":"){var E=o.getCursorPosition(),y=new u(b,E.row,E.column),S=y.getCurrentToken();if(S&&S.value.match(/\s+/)&&(S=y.stepBackward()),S&&S.type==="support.type"){var s=b.doc.getLine(x.start.row),k=s.substring(x.end.column,x.end.column+1);if(k===";")return x.end.column++,x}}}),this.add("semicolon","insertion",function(h,n,o,b,x){if(x===";"&&o.selection.isEmpty()){var C=o.getCursorPosition(),E=b.doc.getLine(C.row),y=E.substring(C.column,C.column+1);if(y===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(h,n,o,b,x){if(x==="!"&&o.selection.isEmpty()){var C=o.getCursorPosition(),E=b.doc.getLine(C.row);if(/^\s*(;|}|$)/.test(E.substring(C.column)))return{text:"!important",selection:[10,10]}}})};e.inherits(f,a),l.CssBehaviour=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,l,$){var e=t("../../lib/oop"),a=t("../../range").Range,u=t("./fold_mode").FoldMode,f=l.FoldMode=function(h){h&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+h.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+h.end)))};e.inherits(f,u),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(h,n,o){var b=h.getLine(o);if(this.singleLineBlockCommentRe.test(b)&&!this.startRegionRe.test(b)&&!this.tripleStarBlockCommentRe.test(b))return"";var x=this._getFoldWidgetBase(h,n,o);return!x&&this.startRegionRe.test(b)?"start":x},this.getFoldWidgetRange=function(h,n,o,b){var x=h.getLine(o);if(this.startRegionRe.test(x))return this.getCommentRegionBlock(h,x,o);var y=x.match(this.foldingStartMarker);if(y){var C=y.index;if(y[1])return this.openingBracketBlock(h,y[1],o,C);var E=h.getCommentFoldRange(o,C+y[0].length,1);return E&&!E.isMultiLine()&&(b?E=this.getSectionRange(h,o):n!="all"&&(E=null)),E}if(n!=="markbegin"){var y=x.match(this.foldingStopMarker);if(y){var C=y.index+y[0].length;return y[1]?this.closingBracketBlock(h,y[1],o,C):h.getCommentFoldRange(o,C,-1)}}},this.getSectionRange=function(h,n){var o=h.getLine(n),b=o.search(/\S/),x=n,C=o.length;n+=1;for(var E=n,y=h.getLength();++n<y;){o=h.getLine(n);var S=o.search(/\S/);if(S!==-1){if(b>S)break;var s=this.getFoldWidgetRange(h,"all",n);if(s){if(s.start.row<=x)break;if(s.isMultiLine())n=s.end.row;else if(b==S)break}E=n}}return new a(x,C,E,h.getLine(E).length)},this.getCommentRegionBlock=function(h,n,o){for(var b=n.search(/\s*$/),x=h.getLength(),C=o,E=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,y=1;++o<x;){n=h.getLine(o);var S=E.exec(n);if(S&&(S[1]?y--:y++,!y))break}var s=o;if(s>C)return new a(C,b,s,n.length)}}.call(f.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(t,l,$){var e=t("../lib/oop"),a=t("./text").Mode,u=t("./css_highlight_rules").CssHighlightRules,f=t("./matching_brace_outdent").MatchingBraceOutdent,h=t("../worker/worker_client").WorkerClient,n=t("./css_completions").CssCompletions,o=t("./behaviour/css").CssBehaviour,b=t("./folding/cstyle").FoldMode,x=function(){this.HighlightRules=u,this.$outdent=new f,this.$behaviour=new o,this.$completer=new n,this.foldingRules=new b};e.inherits(x,a),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(C,E,y){var S=this.$getIndent(E),s=this.getTokenizer().getLineTokens(E,C).tokens;if(s.length&&s[s.length-1].type=="comment")return S;var k=E.match(/^.*\{\s*$/);return k&&(S+=y),S},this.checkOutdent=function(C,E,y){return this.$outdent.checkOutdent(E,y)},this.autoOutdent=function(C,E,y){this.$outdent.autoOutdent(E,y)},this.getCompletions=function(C,E,y,S){return this.$completer.getCompletions(C,E,y,S)},this.createWorker=function(C){var E=new h(["ace"],"ace/mode/css_worker","Worker");return E.attachToDocument(C.getDocument()),E.on("annotate",function(y){C.setAnnotations(y.data)}),E.on("terminate",function(){C.clearAnnotations()}),E},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}.call(x.prototype),l.Mode=x}),function(){ace.require(["ace/mode/css"],function(t){_&&(_.exports=t)})}()})(Nt);var Pt={exports:{}};(function(_,g){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,l,$){var e=t("../lib/oop"),a=t("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},u.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};e.inherits(u,a),u.getTagRule=function(f){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},u.getStartRule=function(f){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:f}},u.getEndRule=function(f){return{token:"comment.doc",regex:"\\*\\/",next:f}},l.JsDocCommentHighlightRules=u}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,l,$){function e(){var b=n.replace("\\d","\\d\\-"),x={onMatch:function(E,y,S){var s=E.charAt(1)=="/"?2:1;return s==1?(y!=this.nextState?S.unshift(this.next,this.nextState,0):S.unshift(this.next),S[2]++):s==2&&y==this.nextState&&(S[1]--,(!S[1]||S[1]<0)&&(S.shift(),S.shift())),[{type:"meta.tag.punctuation."+(s==1?"":"end-")+"tag-open.xml",value:E.slice(0,s)},{type:"meta.tag.tag-name.xml",value:E.substr(s)}]},regex:"</?"+b,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(x);var C={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[C,x,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(E,y,S){return y==S[0]&&S.shift(),E.length==2&&(S[0]==this.nextState&&S[1]--,(!S[1]||S[1]<0)&&S.splice(0,2)),this.next=S[0]||"start",[{type:this.token,value:E}]},nextState:"jsx"},C,a("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:b},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},x],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function a(b){return[{token:"comment",regex:/\/\*/,next:[f.getTagRule(),{token:"comment",regex:"\\*\\/",next:b||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[f.getTagRule(),{token:"comment",regex:"$|^",next:b||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}var u=t("../lib/oop"),f=t("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,h=t("./text_highlight_rules").TextHighlightRules,n="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",o=function(b){var x=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),C="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",E="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[f.getStartRule("doc-start"),a("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+n+")(\\.)(prototype)(\\.)("+n+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\.)("+n+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+n+")(\\.)("+n+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+n+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+C+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:x,regex:n},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+n+")(\\.)("+n+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:n},{regex:"",token:"empty",next:"no_regex"}],start:[f.getStartRule("doc-start"),a("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[a("function_arguments"),{token:"variable.parameter",regex:n},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:E},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:E},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!b||!b.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(y,S,s){if(this.next=y=="{"?this.nextState:"",y=="{"&&s.length)s.unshift("start",S);else if(y=="}"&&s.length&&(s.shift(),this.next=s.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return y=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:E},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+n+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!b||b.jsx!=0)&&e.call(this)),this.embedRules(f,"doc-",[f.getEndRule("no_regex")]),this.normalizeRules()};u.inherits(o,h),l.JavaScriptHighlightRules=o}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,l,$){var e=t("../range").Range,a=function(){};(function(){this.checkOutdent=function(u,f){return/^\s+$/.test(u)?/^\s*\}/.test(f):!1},this.autoOutdent=function(u,f){var h=u.getLine(f),n=h.match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,b=u.findMatchingBracket({row:f,column:o});if(!b||b.row==f)return 0;var x=this.$getIndent(u.getLine(b.row));u.replace(new e(f,0,f,o-1),x)},this.$getIndent=function(u){return u.match(/^\s*/)[0]}}).call(a.prototype),l.MatchingBraceOutdent=a}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,l,$){var e=t("../../lib/oop"),a=t("../../range").Range,u=t("./fold_mode").FoldMode,f=l.FoldMode=function(h){h&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+h.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+h.end)))};e.inherits(f,u),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(h,n,o){var b=h.getLine(o);if(this.singleLineBlockCommentRe.test(b)&&!this.startRegionRe.test(b)&&!this.tripleStarBlockCommentRe.test(b))return"";var x=this._getFoldWidgetBase(h,n,o);return!x&&this.startRegionRe.test(b)?"start":x},this.getFoldWidgetRange=function(h,n,o,b){var x=h.getLine(o);if(this.startRegionRe.test(x))return this.getCommentRegionBlock(h,x,o);var y=x.match(this.foldingStartMarker);if(y){var C=y.index;if(y[1])return this.openingBracketBlock(h,y[1],o,C);var E=h.getCommentFoldRange(o,C+y[0].length,1);return E&&!E.isMultiLine()&&(b?E=this.getSectionRange(h,o):n!="all"&&(E=null)),E}if(n!=="markbegin"){var y=x.match(this.foldingStopMarker);if(y){var C=y.index+y[0].length;return y[1]?this.closingBracketBlock(h,y[1],o,C):h.getCommentFoldRange(o,C,-1)}}},this.getSectionRange=function(h,n){var o=h.getLine(n),b=o.search(/\S/),x=n,C=o.length;n+=1;for(var E=n,y=h.getLength();++n<y;){o=h.getLine(n);var S=o.search(/\S/);if(S!==-1){if(b>S)break;var s=this.getFoldWidgetRange(h,"all",n);if(s){if(s.start.row<=x)break;if(s.isMultiLine())n=s.end.row;else if(b==S)break}E=n}}return new a(x,C,E,h.getLine(E).length)},this.getCommentRegionBlock=function(h,n,o){for(var b=n.search(/\s*$/),x=h.getLength(),C=o,E=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,y=1;++o<x;){n=h.getLine(o);var S=E.exec(n);if(S&&(S[1]?y--:y++,!y))break}var s=o;if(s>C)return new a(C,b,s,n.length)}}.call(f.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(t,l,$){var e=t("../lib/oop"),a=t("./text").Mode,u=t("./javascript_highlight_rules").JavaScriptHighlightRules,f=t("./matching_brace_outdent").MatchingBraceOutdent,h=t("../worker/worker_client").WorkerClient,n=t("./behaviour/cstyle").CstyleBehaviour,o=t("./folding/cstyle").FoldMode,b=function(){this.HighlightRules=u,this.$outdent=new f,this.$behaviour=new n,this.foldingRules=new o};e.inherits(b,a),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(x,C,E){var y=this.$getIndent(C),S=this.getTokenizer().getLineTokens(C,x),s=S.tokens,k=S.state;if(s.length&&s[s.length-1].type=="comment")return y;if(x=="start"||x=="no_regex"){var A=C.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);A&&(y+=E)}else if(x=="doc-start"){if(k=="start"||k=="no_regex")return"";var A=C.match(/^\s*(\/?)\*/);A&&(A[1]&&(y+=" "),y+="* ")}return y},this.checkOutdent=function(x,C,E){return this.$outdent.checkOutdent(C,E)},this.autoOutdent=function(x,C,E){this.$outdent.autoOutdent(C,E)},this.createWorker=function(x){var C=new h(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return C.attachToDocument(x.getDocument()),C.on("annotate",function(E){x.setAnnotations(E.data)}),C.on("terminate",function(){x.clearAnnotations()}),C},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(b.prototype),l.Mode=b}),function(){ace.require(["ace/mode/javascript"],function(t){_&&(_.exports=t)})}()})(Pt);var Ft={exports:{}};(function(_,g){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(t,l,$){$.exports=`snippet .
	\${1} {
		\${2}
	}
snippet !
	 !important
snippet bdi:m+
	-moz-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:m
	-moz-border-image: \${1};
snippet bdrz:m
	-moz-border-radius: \${1};
snippet bxsh:m+
	-moz-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:m
	-moz-box-shadow: \${1};
snippet bdi:w+
	-webkit-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:w
	-webkit-border-image: \${1};
snippet bdrz:w
	-webkit-border-radius: \${1};
snippet bxsh:w+
	-webkit-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:w
	-webkit-box-shadow: \${1};
snippet @f
	@font-face {
		font-family: \${1};
		src: url(\${2});
	}
snippet @i
	@import url(\${1});
snippet @m
	@media \${1:print} {
		\${2}
	}
snippet bg+
	background: #\${1:FFF} url(\${2}) \${3:0} \${4:0} \${5:no-repeat};
snippet bga
	background-attachment: \${1};
snippet bga:f
	background-attachment: fixed;
snippet bga:s
	background-attachment: scroll;
snippet bgbk
	background-break: \${1};
snippet bgbk:bb
	background-break: bounding-box;
snippet bgbk:c
	background-break: continuous;
snippet bgbk:eb
	background-break: each-box;
snippet bgcp
	background-clip: \${1};
snippet bgcp:bb
	background-clip: border-box;
snippet bgcp:cb
	background-clip: content-box;
snippet bgcp:nc
	background-clip: no-clip;
snippet bgcp:pb
	background-clip: padding-box;
snippet bgc
	background-color: #\${1:FFF};
snippet bgc:t
	background-color: transparent;
snippet bgi
	background-image: url(\${1});
snippet bgi:n
	background-image: none;
snippet bgo
	background-origin: \${1};
snippet bgo:bb
	background-origin: border-box;
snippet bgo:cb
	background-origin: content-box;
snippet bgo:pb
	background-origin: padding-box;
snippet bgpx
	background-position-x: \${1};
snippet bgpy
	background-position-y: \${1};
snippet bgp
	background-position: \${1:0} \${2:0};
snippet bgr
	background-repeat: \${1};
snippet bgr:n
	background-repeat: no-repeat;
snippet bgr:x
	background-repeat: repeat-x;
snippet bgr:y
	background-repeat: repeat-y;
snippet bgr:r
	background-repeat: repeat;
snippet bgz
	background-size: \${1};
snippet bgz:a
	background-size: auto;
snippet bgz:ct
	background-size: contain;
snippet bgz:cv
	background-size: cover;
snippet bg
	background: \${1};
snippet bg:ie
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='\${1}',sizingMethod='\${2:crop}');
snippet bg:n
	background: none;
snippet bd+
	border: \${1:1px} \${2:solid} #\${3:000};
snippet bdb+
	border-bottom: \${1:1px} \${2:solid} #\${3:000};
snippet bdbc
	border-bottom-color: #\${1:000};
snippet bdbi
	border-bottom-image: url(\${1});
snippet bdbi:n
	border-bottom-image: none;
snippet bdbli
	border-bottom-left-image: url(\${1});
snippet bdbli:c
	border-bottom-left-image: continue;
snippet bdbli:n
	border-bottom-left-image: none;
snippet bdblrz
	border-bottom-left-radius: \${1};
snippet bdbri
	border-bottom-right-image: url(\${1});
snippet bdbri:c
	border-bottom-right-image: continue;
snippet bdbri:n
	border-bottom-right-image: none;
snippet bdbrrz
	border-bottom-right-radius: \${1};
snippet bdbs
	border-bottom-style: \${1};
snippet bdbs:n
	border-bottom-style: none;
snippet bdbw
	border-bottom-width: \${1};
snippet bdb
	border-bottom: \${1};
snippet bdb:n
	border-bottom: none;
snippet bdbk
	border-break: \${1};
snippet bdbk:c
	border-break: close;
snippet bdcl
	border-collapse: \${1};
snippet bdcl:c
	border-collapse: collapse;
snippet bdcl:s
	border-collapse: separate;
snippet bdc
	border-color: #\${1:000};
snippet bdci
	border-corner-image: url(\${1});
snippet bdci:c
	border-corner-image: continue;
snippet bdci:n
	border-corner-image: none;
snippet bdf
	border-fit: \${1};
snippet bdf:c
	border-fit: clip;
snippet bdf:of
	border-fit: overwrite;
snippet bdf:ow
	border-fit: overwrite;
snippet bdf:r
	border-fit: repeat;
snippet bdf:sc
	border-fit: scale;
snippet bdf:sp
	border-fit: space;
snippet bdf:st
	border-fit: stretch;
snippet bdi
	border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:n
	border-image: none;
snippet bdl+
	border-left: \${1:1px} \${2:solid} #\${3:000};
snippet bdlc
	border-left-color: #\${1:000};
snippet bdli
	border-left-image: url(\${1});
snippet bdli:n
	border-left-image: none;
snippet bdls
	border-left-style: \${1};
snippet bdls:n
	border-left-style: none;
snippet bdlw
	border-left-width: \${1};
snippet bdl
	border-left: \${1};
snippet bdl:n
	border-left: none;
snippet bdlt
	border-length: \${1};
snippet bdlt:a
	border-length: auto;
snippet bdrz
	border-radius: \${1};
snippet bdr+
	border-right: \${1:1px} \${2:solid} #\${3:000};
snippet bdrc
	border-right-color: #\${1:000};
snippet bdri
	border-right-image: url(\${1});
snippet bdri:n
	border-right-image: none;
snippet bdrs
	border-right-style: \${1};
snippet bdrs:n
	border-right-style: none;
snippet bdrw
	border-right-width: \${1};
snippet bdr
	border-right: \${1};
snippet bdr:n
	border-right: none;
snippet bdsp
	border-spacing: \${1};
snippet bds
	border-style: \${1};
snippet bds:ds
	border-style: dashed;
snippet bds:dtds
	border-style: dot-dash;
snippet bds:dtdtds
	border-style: dot-dot-dash;
snippet bds:dt
	border-style: dotted;
snippet bds:db
	border-style: double;
snippet bds:g
	border-style: groove;
snippet bds:h
	border-style: hidden;
snippet bds:i
	border-style: inset;
snippet bds:n
	border-style: none;
snippet bds:o
	border-style: outset;
snippet bds:r
	border-style: ridge;
snippet bds:s
	border-style: solid;
snippet bds:w
	border-style: wave;
snippet bdt+
	border-top: \${1:1px} \${2:solid} #\${3:000};
snippet bdtc
	border-top-color: #\${1:000};
snippet bdti
	border-top-image: url(\${1});
snippet bdti:n
	border-top-image: none;
snippet bdtli
	border-top-left-image: url(\${1});
snippet bdtli:c
	border-corner-image: continue;
snippet bdtli:n
	border-corner-image: none;
snippet bdtlrz
	border-top-left-radius: \${1};
snippet bdtri
	border-top-right-image: url(\${1});
snippet bdtri:c
	border-top-right-image: continue;
snippet bdtri:n
	border-top-right-image: none;
snippet bdtrrz
	border-top-right-radius: \${1};
snippet bdts
	border-top-style: \${1};
snippet bdts:n
	border-top-style: none;
snippet bdtw
	border-top-width: \${1};
snippet bdt
	border-top: \${1};
snippet bdt:n
	border-top: none;
snippet bdw
	border-width: \${1};
snippet bd
	border: \${1};
snippet bd:n
	border: none;
snippet b
	bottom: \${1};
snippet b:a
	bottom: auto;
snippet bxsh+
	box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh
	box-shadow: \${1};
snippet bxsh:n
	box-shadow: none;
snippet bxz
	box-sizing: \${1};
snippet bxz:bb
	box-sizing: border-box;
snippet bxz:cb
	box-sizing: content-box;
snippet cps
	caption-side: \${1};
snippet cps:b
	caption-side: bottom;
snippet cps:t
	caption-side: top;
snippet cl
	clear: \${1};
snippet cl:b
	clear: both;
snippet cl:l
	clear: left;
snippet cl:n
	clear: none;
snippet cl:r
	clear: right;
snippet cp
	clip: \${1};
snippet cp:a
	clip: auto;
snippet cp:r
	clip: rect(\${1:0} \${2:0} \${3:0} \${4:0});
snippet c
	color: #\${1:000};
snippet ct
	content: \${1};
snippet ct:a
	content: attr(\${1});
snippet ct:cq
	content: close-quote;
snippet ct:c
	content: counter(\${1});
snippet ct:cs
	content: counters(\${1});
snippet ct:ncq
	content: no-close-quote;
snippet ct:noq
	content: no-open-quote;
snippet ct:n
	content: normal;
snippet ct:oq
	content: open-quote;
snippet coi
	counter-increment: \${1};
snippet cor
	counter-reset: \${1};
snippet cur
	cursor: \${1};
snippet cur:a
	cursor: auto;
snippet cur:c
	cursor: crosshair;
snippet cur:d
	cursor: default;
snippet cur:ha
	cursor: hand;
snippet cur:he
	cursor: help;
snippet cur:m
	cursor: move;
snippet cur:p
	cursor: pointer;
snippet cur:t
	cursor: text;
snippet d
	display: \${1};
snippet d:mib
	display: -moz-inline-box;
snippet d:mis
	display: -moz-inline-stack;
snippet d:b
	display: block;
snippet d:cp
	display: compact;
snippet d:ib
	display: inline-block;
snippet d:itb
	display: inline-table;
snippet d:i
	display: inline;
snippet d:li
	display: list-item;
snippet d:n
	display: none;
snippet d:ri
	display: run-in;
snippet d:tbcp
	display: table-caption;
snippet d:tbc
	display: table-cell;
snippet d:tbclg
	display: table-column-group;
snippet d:tbcl
	display: table-column;
snippet d:tbfg
	display: table-footer-group;
snippet d:tbhg
	display: table-header-group;
snippet d:tbrg
	display: table-row-group;
snippet d:tbr
	display: table-row;
snippet d:tb
	display: table;
snippet ec
	empty-cells: \${1};
snippet ec:h
	empty-cells: hide;
snippet ec:s
	empty-cells: show;
snippet exp
	expression()
snippet fl
	float: \${1};
snippet fl:l
	float: left;
snippet fl:n
	float: none;
snippet fl:r
	float: right;
snippet f+
	font: \${1:1em} \${2:Arial},\${3:sans-serif};
snippet fef
	font-effect: \${1};
snippet fef:eb
	font-effect: emboss;
snippet fef:eg
	font-effect: engrave;
snippet fef:n
	font-effect: none;
snippet fef:o
	font-effect: outline;
snippet femp
	font-emphasize-position: \${1};
snippet femp:a
	font-emphasize-position: after;
snippet femp:b
	font-emphasize-position: before;
snippet fems
	font-emphasize-style: \${1};
snippet fems:ac
	font-emphasize-style: accent;
snippet fems:c
	font-emphasize-style: circle;
snippet fems:ds
	font-emphasize-style: disc;
snippet fems:dt
	font-emphasize-style: dot;
snippet fems:n
	font-emphasize-style: none;
snippet fem
	font-emphasize: \${1};
snippet ff
	font-family: \${1};
snippet ff:c
	font-family: \${1:'Monotype Corsiva','Comic Sans MS'},cursive;
snippet ff:f
	font-family: \${1:Capitals,Impact},fantasy;
snippet ff:m
	font-family: \${1:Monaco,'Courier New'},monospace;
snippet ff:ss
	font-family: \${1:Helvetica,Arial},sans-serif;
snippet ff:s
	font-family: \${1:Georgia,'Times New Roman'},serif;
snippet fza
	font-size-adjust: \${1};
snippet fza:n
	font-size-adjust: none;
snippet fz
	font-size: \${1};
snippet fsm
	font-smooth: \${1};
snippet fsm:aw
	font-smooth: always;
snippet fsm:a
	font-smooth: auto;
snippet fsm:n
	font-smooth: never;
snippet fst
	font-stretch: \${1};
snippet fst:c
	font-stretch: condensed;
snippet fst:e
	font-stretch: expanded;
snippet fst:ec
	font-stretch: extra-condensed;
snippet fst:ee
	font-stretch: extra-expanded;
snippet fst:n
	font-stretch: normal;
snippet fst:sc
	font-stretch: semi-condensed;
snippet fst:se
	font-stretch: semi-expanded;
snippet fst:uc
	font-stretch: ultra-condensed;
snippet fst:ue
	font-stretch: ultra-expanded;
snippet fs
	font-style: \${1};
snippet fs:i
	font-style: italic;
snippet fs:n
	font-style: normal;
snippet fs:o
	font-style: oblique;
snippet fv
	font-variant: \${1};
snippet fv:n
	font-variant: normal;
snippet fv:sc
	font-variant: small-caps;
snippet fw
	font-weight: \${1};
snippet fw:b
	font-weight: bold;
snippet fw:br
	font-weight: bolder;
snippet fw:lr
	font-weight: lighter;
snippet fw:n
	font-weight: normal;
snippet f
	font: \${1};
snippet h
	height: \${1};
snippet h:a
	height: auto;
snippet l
	left: \${1};
snippet l:a
	left: auto;
snippet lts
	letter-spacing: \${1};
snippet lh
	line-height: \${1};
snippet lisi
	list-style-image: url(\${1});
snippet lisi:n
	list-style-image: none;
snippet lisp
	list-style-position: \${1};
snippet lisp:i
	list-style-position: inside;
snippet lisp:o
	list-style-position: outside;
snippet list
	list-style-type: \${1};
snippet list:c
	list-style-type: circle;
snippet list:dclz
	list-style-type: decimal-leading-zero;
snippet list:dc
	list-style-type: decimal;
snippet list:d
	list-style-type: disc;
snippet list:lr
	list-style-type: lower-roman;
snippet list:n
	list-style-type: none;
snippet list:s
	list-style-type: square;
snippet list:ur
	list-style-type: upper-roman;
snippet lis
	list-style: \${1};
snippet lis:n
	list-style: none;
snippet mb
	margin-bottom: \${1};
snippet mb:a
	margin-bottom: auto;
snippet ml
	margin-left: \${1};
snippet ml:a
	margin-left: auto;
snippet mr
	margin-right: \${1};
snippet mr:a
	margin-right: auto;
snippet mt
	margin-top: \${1};
snippet mt:a
	margin-top: auto;
snippet m
	margin: \${1};
snippet m:4
	margin: \${1:0} \${2:0} \${3:0} \${4:0};
snippet m:3
	margin: \${1:0} \${2:0} \${3:0};
snippet m:2
	margin: \${1:0} \${2:0};
snippet m:0
	margin: 0;
snippet m:a
	margin: auto;
snippet mah
	max-height: \${1};
snippet mah:n
	max-height: none;
snippet maw
	max-width: \${1};
snippet maw:n
	max-width: none;
snippet mih
	min-height: \${1};
snippet miw
	min-width: \${1};
snippet op
	opacity: \${1};
snippet op:ie
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100});
snippet op:ms
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100})';
snippet orp
	orphans: \${1};
snippet o+
	outline: \${1:1px} \${2:solid} #\${3:000};
snippet oc
	outline-color: \${1:#000};
snippet oc:i
	outline-color: invert;
snippet oo
	outline-offset: \${1};
snippet os
	outline-style: \${1};
snippet ow
	outline-width: \${1};
snippet o
	outline: \${1};
snippet o:n
	outline: none;
snippet ovs
	overflow-style: \${1};
snippet ovs:a
	overflow-style: auto;
snippet ovs:mq
	overflow-style: marquee;
snippet ovs:mv
	overflow-style: move;
snippet ovs:p
	overflow-style: panner;
snippet ovs:s
	overflow-style: scrollbar;
snippet ovx
	overflow-x: \${1};
snippet ovx:a
	overflow-x: auto;
snippet ovx:h
	overflow-x: hidden;
snippet ovx:s
	overflow-x: scroll;
snippet ovx:v
	overflow-x: visible;
snippet ovy
	overflow-y: \${1};
snippet ovy:a
	overflow-y: auto;
snippet ovy:h
	overflow-y: hidden;
snippet ovy:s
	overflow-y: scroll;
snippet ovy:v
	overflow-y: visible;
snippet ov
	overflow: \${1};
snippet ov:a
	overflow: auto;
snippet ov:h
	overflow: hidden;
snippet ov:s
	overflow: scroll;
snippet ov:v
	overflow: visible;
snippet pb
	padding-bottom: \${1};
snippet pl
	padding-left: \${1};
snippet pr
	padding-right: \${1};
snippet pt
	padding-top: \${1};
snippet p
	padding: \${1};
snippet p:4
	padding: \${1:0} \${2:0} \${3:0} \${4:0};
snippet p:3
	padding: \${1:0} \${2:0} \${3:0};
snippet p:2
	padding: \${1:0} \${2:0};
snippet p:0
	padding: 0;
snippet pgba
	page-break-after: \${1};
snippet pgba:aw
	page-break-after: always;
snippet pgba:a
	page-break-after: auto;
snippet pgba:l
	page-break-after: left;
snippet pgba:r
	page-break-after: right;
snippet pgbb
	page-break-before: \${1};
snippet pgbb:aw
	page-break-before: always;
snippet pgbb:a
	page-break-before: auto;
snippet pgbb:l
	page-break-before: left;
snippet pgbb:r
	page-break-before: right;
snippet pgbi
	page-break-inside: \${1};
snippet pgbi:a
	page-break-inside: auto;
snippet pgbi:av
	page-break-inside: avoid;
snippet pos
	position: \${1};
snippet pos:a
	position: absolute;
snippet pos:f
	position: fixed;
snippet pos:r
	position: relative;
snippet pos:s
	position: static;
snippet q
	quotes: \${1};
snippet q:en
	quotes: '\\201C' '\\201D' '\\2018' '\\2019';
snippet q:n
	quotes: none;
snippet q:ru
	quotes: '\\00AB' '\\00BB' '\\201E' '\\201C';
snippet rz
	resize: \${1};
snippet rz:b
	resize: both;
snippet rz:h
	resize: horizontal;
snippet rz:n
	resize: none;
snippet rz:v
	resize: vertical;
snippet r
	right: \${1};
snippet r:a
	right: auto;
snippet tbl
	table-layout: \${1};
snippet tbl:a
	table-layout: auto;
snippet tbl:f
	table-layout: fixed;
snippet tal
	text-align-last: \${1};
snippet tal:a
	text-align-last: auto;
snippet tal:c
	text-align-last: center;
snippet tal:l
	text-align-last: left;
snippet tal:r
	text-align-last: right;
snippet ta
	text-align: \${1};
snippet ta:c
	text-align: center;
snippet ta:l
	text-align: left;
snippet ta:r
	text-align: right;
snippet td
	text-decoration: \${1};
snippet td:l
	text-decoration: line-through;
snippet td:n
	text-decoration: none;
snippet td:o
	text-decoration: overline;
snippet td:u
	text-decoration: underline;
snippet te
	text-emphasis: \${1};
snippet te:ac
	text-emphasis: accent;
snippet te:a
	text-emphasis: after;
snippet te:b
	text-emphasis: before;
snippet te:c
	text-emphasis: circle;
snippet te:ds
	text-emphasis: disc;
snippet te:dt
	text-emphasis: dot;
snippet te:n
	text-emphasis: none;
snippet th
	text-height: \${1};
snippet th:a
	text-height: auto;
snippet th:f
	text-height: font-size;
snippet th:m
	text-height: max-size;
snippet th:t
	text-height: text-size;
snippet ti
	text-indent: \${1};
snippet ti:-
	text-indent: -9999px;
snippet tj
	text-justify: \${1};
snippet tj:a
	text-justify: auto;
snippet tj:d
	text-justify: distribute;
snippet tj:ic
	text-justify: inter-cluster;
snippet tj:ii
	text-justify: inter-ideograph;
snippet tj:iw
	text-justify: inter-word;
snippet tj:k
	text-justify: kashida;
snippet tj:t
	text-justify: tibetan;
snippet to+
	text-outline: \${1:0} \${2:0} #\${3:000};
snippet to
	text-outline: \${1};
snippet to:n
	text-outline: none;
snippet tr
	text-replace: \${1};
snippet tr:n
	text-replace: none;
snippet tsh+
	text-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet tsh
	text-shadow: \${1};
snippet tsh:n
	text-shadow: none;
snippet tt
	text-transform: \${1};
snippet tt:c
	text-transform: capitalize;
snippet tt:l
	text-transform: lowercase;
snippet tt:n
	text-transform: none;
snippet tt:u
	text-transform: uppercase;
snippet tw
	text-wrap: \${1};
snippet tw:no
	text-wrap: none;
snippet tw:n
	text-wrap: normal;
snippet tw:s
	text-wrap: suppress;
snippet tw:u
	text-wrap: unrestricted;
snippet t
	top: \${1};
snippet t:a
	top: auto;
snippet va
	vertical-align: \${1};
snippet va:bl
	vertical-align: baseline;
snippet va:b
	vertical-align: bottom;
snippet va:m
	vertical-align: middle;
snippet va:sub
	vertical-align: sub;
snippet va:sup
	vertical-align: super;
snippet va:tb
	vertical-align: text-bottom;
snippet va:tt
	vertical-align: text-top;
snippet va:t
	vertical-align: top;
snippet v
	visibility: \${1};
snippet v:c
	visibility: collapse;
snippet v:h
	visibility: hidden;
snippet v:v
	visibility: visible;
snippet whsc
	white-space-collapse: \${1};
snippet whsc:ba
	white-space-collapse: break-all;
snippet whsc:bs
	white-space-collapse: break-strict;
snippet whsc:k
	white-space-collapse: keep-all;
snippet whsc:l
	white-space-collapse: loose;
snippet whsc:n
	white-space-collapse: normal;
snippet whs
	white-space: \${1};
snippet whs:n
	white-space: normal;
snippet whs:nw
	white-space: nowrap;
snippet whs:pl
	white-space: pre-line;
snippet whs:pw
	white-space: pre-wrap;
snippet whs:p
	white-space: pre;
snippet wid
	widows: \${1};
snippet w
	width: \${1};
snippet w:a
	width: auto;
snippet wob
	word-break: \${1};
snippet wob:ba
	word-break: break-all;
snippet wob:bs
	word-break: break-strict;
snippet wob:k
	word-break: keep-all;
snippet wob:l
	word-break: loose;
snippet wob:n
	word-break: normal;
snippet wos
	word-spacing: \${1};
snippet wow
	word-wrap: \${1};
snippet wow:no
	word-wrap: none;
snippet wow:n
	word-wrap: normal;
snippet wow:s
	word-wrap: suppress;
snippet wow:u
	word-wrap: unrestricted;
snippet z
	z-index: \${1};
snippet z:a
	z-index: auto;
snippet zoo
	zoom: 1;
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(t,l,$){l.snippetText=t("./css.snippets"),l.scope="css"}),function(){ace.require(["ace/snippets/css"],function(t){_&&(_.exports=t)})}()})(Ft);var zt={exports:{}};(function(_,g){ace.define("ace/snippets/javascript.snippets",["require","exports","module"],function(t,l,$){$.exports=`# Prototype
snippet proto
	\${1:class_name}.prototype.\${2:method_name} = function(\${3:first_argument}) {
		\${4:// body...}
	};
# Function
snippet fun
	function \${1?:function_name}(\${2:argument}) {
		\${3:// body...}
	}
# Anonymous Function
regex /((=)\\s*|(:)\\s*|(\\()|\\b)/f/(\\))?/
snippet f
	function\${M1?: \${1:functionName}}($2) {
		\${0:$TM_SELECTED_TEXT}
	}\${M2?;}\${M3?,}\${M4?)}
# Immediate function
trigger \\(?f\\(
endTrigger \\)?
snippet f(
	(function(\${1}) {
		\${0:\${TM_SELECTED_TEXT:/* code */}}
	}(\${1}));
# if
snippet if
	if (\${1:true}) {
		\${0}
	}
# if ... else
snippet ife
	if (\${1:true}) {
		\${2}
	} else {
		\${0}
	}
# tertiary conditional
snippet ter
	\${1:/* condition */} ? \${2:a} : \${3:b}
# switch
snippet switch
	switch (\${1:expression}) {
		case '\${3:case}':
			\${4:// code}
			break;
		\${5}
		default:
			\${2:// code}
	}
# case
snippet case
	case '\${1:case}':
		\${2:// code}
		break;
	\${3}

# while (...) {...}
snippet wh
	while (\${1:/* condition */}) {
		\${0:/* code */}
	}
# try
snippet try
	try {
		\${0:/* code */}
	} catch (e) {}
# do...while
snippet do
	do {
		\${2:/* code */}
	} while (\${1:/* condition */});
# Object Method
snippet :f
regex /([,{[])|^\\s*/:f/
	\${1:method_name}: function(\${2:attribute}) {
		\${0}
	}\${3:,}
# setTimeout function
snippet setTimeout
regex /\\b/st|timeout|setTimeo?u?t?/
	setTimeout(function() {\${3:$TM_SELECTED_TEXT}}, \${1:10});
# Get Elements
snippet gett
	getElementsBy\${1:TagName}('\${2}')\${3}
# Get Element
snippet get
	getElementBy\${1:Id}('\${2}')\${3}
# console.log (Firebug)
snippet cl
	console.log(\${1});
# return
snippet ret
	return \${1:result}
# for (property in object ) { ... }
snippet fori
	for (var \${1:prop} in \${2:Things}) {
		\${0:$2[$1]}
	}
# hasOwnProperty
snippet has
	hasOwnProperty(\${1})
# docstring
snippet /**
	/**
	 * \${1:description}
	 *
	 */
snippet @par
regex /^\\s*\\*\\s*/@(para?m?)?/
	@param {\${1:type}} \${2:name} \${3:description}
snippet @ret
	@return {\${1:type}} \${2:description}
# JSON.parse
snippet jsonp
	JSON.parse(\${1:jstr});
# JSON.stringify
snippet jsons
	JSON.stringify(\${1:object});
# self-defining function
snippet sdf
	var \${1:function_name} = function(\${2:argument}) {
		\${3:// initial code ...}

		$1 = function($2) {
			\${4:// main code}
		};
	}
# singleton
snippet sing
	function \${1:Singleton} (\${2:argument}) {
		// the cached instance
		var instance;

		// rewrite the constructor
		$1 = function $1($2) {
			return instance;
		};
		
		// carry over the prototype properties
		$1.prototype = this;

		// the instance
		instance = new $1();

		// reset the constructor pointer
		instance.constructor = $1;

		\${3:// code ...}

		return instance;
	}
# class
snippet class
regex /^\\s*/clas{0,2}/
	var \${1:class} = function(\${20}) {
		$40$0
	};
	
	(function() {
		\${60:this.prop = ""}
	}).call(\${1:class}.prototype);
	
	exports.\${1:class} = \${1:class};
# 
snippet for-
	for (var \${1:i} = \${2:Things}.length; \${1:i}--; ) {
		\${0:\${2:Things}[\${1:i}];}
	}
# for (...) {...}
snippet for
	for (var \${1:i} = 0; $1 < \${2:Things}.length; $1++) {
		\${3:$2[$1]}$0
	}
# for (...) {...} (Improved Native For-Loop)
snippet forr
	for (var \${1:i} = \${2:Things}.length - 1; $1 >= 0; $1--) {
		\${3:$2[$1]}$0
	}


#modules
snippet def
	define(function(require, exports, module) {
	"use strict";
	var \${1/.*\\///} = require("\${1}");
	
	$TM_SELECTED_TEXT
	});
snippet req
guard ^\\s*
	var \${1/.*\\///} = require("\${1}");
	$0
snippet requ
guard ^\\s*
	var \${1/.*\\/(.)/\\u$1/} = require("\${1}").\${1/.*\\/(.)/\\u$1/};
	$0
`}),ace.define("ace/snippets/javascript",["require","exports","module","ace/snippets/javascript.snippets"],function(t,l,$){l.snippetText=t("./javascript.snippets"),l.scope="javascript"}),function(){ace.require(["ace/snippets/javascript"],function(t){_&&(_.exports=t)})}()})(zt);var Dt={exports:{}};(function(_,g){ace.define("ace/theme/tomorrow-css",["require","exports","module"],function(t,l,$){$.exports=`.ace-tomorrow .ace_gutter {
  background: #f6f6f6;
  color: #4D4D4C
}

.ace-tomorrow .ace_print-margin {
  width: 1px;
  background: #f6f6f6
}

.ace-tomorrow {
  background-color: #FFFFFF;
  color: #4D4D4C
}

.ace-tomorrow .ace_cursor {
  color: #AEAFAD
}

.ace-tomorrow .ace_marker-layer .ace_selection {
  background: #D6D6D6
}

.ace-tomorrow.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
}

.ace-tomorrow .ace_marker-layer .ace_step {
  background: rgb(255, 255, 0)
}

.ace-tomorrow .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #D1D1D1
}

.ace-tomorrow .ace_marker-layer .ace_active-line {
  background: #EFEFEF
}

.ace-tomorrow .ace_gutter-active-line {
  background-color : #dcdcdc
}

.ace-tomorrow .ace_marker-layer .ace_selected-word {
  border: 1px solid #D6D6D6
}

.ace-tomorrow .ace_invisible {
  color: #D1D1D1
}

.ace-tomorrow .ace_keyword,
.ace-tomorrow .ace_meta,
.ace-tomorrow .ace_storage,
.ace-tomorrow .ace_storage.ace_type,
.ace-tomorrow .ace_support.ace_type {
  color: #8959A8
}

.ace-tomorrow .ace_keyword.ace_operator {
  color: #3E999F
}

.ace-tomorrow .ace_constant.ace_character,
.ace-tomorrow .ace_constant.ace_language,
.ace-tomorrow .ace_constant.ace_numeric,
.ace-tomorrow .ace_keyword.ace_other.ace_unit,
.ace-tomorrow .ace_support.ace_constant,
.ace-tomorrow .ace_variable.ace_parameter {
  color: #F5871F
}

.ace-tomorrow .ace_constant.ace_other {
  color: #666969
}

.ace-tomorrow .ace_invalid {
  color: #FFFFFF;
  background-color: #C82829
}

.ace-tomorrow .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #8959A8
}

.ace-tomorrow .ace_fold {
  background-color: #4271AE;
  border-color: #4D4D4C
}

.ace-tomorrow .ace_entity.ace_name.ace_function,
.ace-tomorrow .ace_support.ace_function,
.ace-tomorrow .ace_variable {
  color: #4271AE
}

.ace-tomorrow .ace_support.ace_class,
.ace-tomorrow .ace_support.ace_type {
  color: #C99E00
}

.ace-tomorrow .ace_heading,
.ace-tomorrow .ace_markup.ace_heading,
.ace-tomorrow .ace_string {
  color: #718C00
}

.ace-tomorrow .ace_entity.ace_name.ace_tag,
.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow .ace_meta.ace_tag,
.ace-tomorrow .ace_string.ace_regexp,
.ace-tomorrow .ace_variable {
  color: #C82829
}

.ace-tomorrow .ace_comment {
  color: #8E908C
}

.ace-tomorrow .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y
}

.ace-tomorrow .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/tomorrow",["require","exports","module","ace/theme/tomorrow-css","ace/lib/dom"],function(t,l,$){l.isDark=!1,l.cssClass="ace-tomorrow",l.cssText=t("./tomorrow-css");var e=t("../lib/dom");e.importCssString(l.cssText,l.cssClass,!1)}),function(){ace.require(["ace/theme/tomorrow"],function(t){_&&(_.exports=t)})}()})(Dt);var jt={exports:{}};(function(_,g){ace.define("ace/theme/twilight-css",["require","exports","module"],function(t,l,$){$.exports=`.ace-twilight .ace_gutter {
  background: #232323;
  color: #E2E2E2
}

.ace-twilight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-twilight {
  background-color: #141414;
  color: #F8F8F8
}

.ace-twilight .ace_cursor {
  color: #A7A7A7
}

.ace-twilight .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20)
}

.ace-twilight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #141414;
}

.ace-twilight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-twilight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20)
}

.ace-twilight .ace_invisible {
  color: rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_keyword,
.ace-twilight .ace_meta {
  color: #CDA869
}

.ace-twilight .ace_constant,
.ace-twilight .ace_constant.ace_character,
.ace-twilight .ace_constant.ace_character.ace_escape,
.ace-twilight .ace_constant.ace_other,
.ace-twilight .ace_heading,
.ace-twilight .ace_markup.ace_heading,
.ace-twilight .ace_support.ace_constant {
  color: #CF6A4C
}

.ace-twilight .ace_invalid.ace_illegal {
  color: #F8F8F8;
  background-color: rgba(86, 45, 86, 0.75)
}

.ace-twilight .ace_invalid.ace_deprecated {
  text-decoration: underline;
  font-style: italic;
  color: #D2A8A1
}

.ace-twilight .ace_support {
  color: #9B859D
}

.ace-twilight .ace_fold {
  background-color: #AC885B;
  border-color: #F8F8F8
}

.ace-twilight .ace_support.ace_function {
  color: #DAD085
}

.ace-twilight .ace_list,
.ace-twilight .ace_markup.ace_list,
.ace-twilight .ace_storage {
  color: #F9EE98
}

.ace-twilight .ace_entity.ace_name.ace_function,
.ace-twilight .ace_meta.ace_tag {
  color: #AC885B
}

.ace-twilight .ace_string {
  color: #8F9D6A
}

.ace-twilight .ace_string.ace_regexp {
  color: #E9C062
}

.ace-twilight .ace_comment {
  font-style: italic;
  color: #5F5A60
}

.ace-twilight .ace_variable {
  color: #7587A6
}

.ace-twilight .ace_xml-pe {
  color: #494949
}

.ace-twilight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y
}

.ace-twilight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(t,l,$){l.isDark=!0,l.cssClass="ace-twilight",l.cssText=t("./twilight-css");var e=t("../lib/dom");e.importCssString(l.cssText,l.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(t){_&&(_.exports=t)})}()})(jt);var Bt={exports:{}};(function(_,g){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(t,l,$){function e(d){var i=new Date().toLocaleString("en-us",d);return i.length==1?"0"+i:i}var a=t("./lib/dom"),u=t("./lib/oop"),f=t("./lib/event_emitter").EventEmitter,h=t("./lib/lang"),n=t("./range").Range,o=t("./range_list").RangeList,b=t("./keyboard/hash_handler").HashHandler,x=t("./tokenizer").Tokenizer,C=t("./clipboard"),E={CURRENT_WORD:function(d){return d.session.getTextRange(d.session.getWordRange())},SELECTION:function(d,i,r){var p=d.session.getTextRange();return r?p.replace(/\n\r?([ \t]*\S)/g,`
`+r+"$1"):p},CURRENT_LINE:function(d){return d.session.getLine(d.getCursorPosition().row)},PREV_LINE:function(d){return d.session.getLine(d.getCursorPosition().row-1)},LINE_INDEX:function(d){return d.getCursorPosition().row},LINE_NUMBER:function(d){return d.getCursorPosition().row+1},SOFT_TABS:function(d){return d.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(d){return d.session.getTabSize()},CLIPBOARD:function(d){return C.getText&&C.getText()},FILENAME:function(d){return/[^/\\]*$/.exec(this.FILEPATH(d))[0]},FILENAME_BASE:function(d){return/[^/\\]*$/.exec(this.FILEPATH(d))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(d){return this.FILEPATH(d).replace(/[^/\\]*$/,"")},FILEPATH:function(d){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(d){var i=d.session.$mode||{};return i.blockComment&&i.blockComment.start||""},BLOCK_COMMENT_END:function(d){var i=d.session.$mode||{};return i.blockComment&&i.blockComment.end||""},LINE_COMMENT:function(d){var i=d.session.$mode||{};return i.lineCommentStart||""},CURRENT_YEAR:e.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:e.bind(null,{year:"2-digit"}),CURRENT_MONTH:e.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:e.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:e.bind(null,{month:"short"}),CURRENT_DATE:e.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:e.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:e.bind(null,{weekday:"short"}),CURRENT_HOUR:e.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:e.bind(null,{minute:"2-digit"}),CURRENT_SECOND:e.bind(null,{second:"2-digit"})};E.SELECTED_TEXT=E.SELECTION;var y=function(){function d(){this.snippetMap={},this.snippetNameMap={},this.variables=E}return d.prototype.getTokenizer=function(){return d.$tokenizer||this.createTokenizer()},d.prototype.createTokenizer=function(){function i(c){return c=c.substr(1),/^\d+$/.test(c)?[{tabstopId:parseInt(c,10)}]:[{text:c}]}function r(c){return"(?:[^\\\\"+c+"]|\\\\.)"}var p={regex:"/("+r("/")+"+)/",onMatch:function(c,m,v){var w=v[0];return w.fmtString=!0,w.guard=c.slice(1,-1),w.flag="",""},next:"formatString"};return d.$tokenizer=new x({start:[{regex:/\\./,onMatch:function(c,m,v){var w=c[1];return(w=="}"&&v.length||"`$\\".indexOf(w)!=-1)&&(c=w),[c]}},{regex:/}/,onMatch:function(c,m,v){return[v.length?v.shift():c]}},{regex:/\$(?:\d+|\w+)/,onMatch:i},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(c,m,v){var w=i(c.substr(1));return v.unshift(w[0]),w},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+r("\\|")+"*\\|",onMatch:function(c,m,v){var w=c.slice(1,-1).replace(/\\[,|\\]|,/g,function(T){return T.length==2?T[1]:"\0"}).split("\0").map(function(T){return{value:T}});return v[0].choices=w,[w[0]]},next:"start"},p,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(c,m,v){return v.length&&v[0].expectElse?(v[0].expectElse=!1,v[0].ifEnd={elseEnd:v[0]},[v[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(c,m,v){var w=c[1];return w=="}"&&v.length||"`$\\".indexOf(w)!=-1?c=w:w=="n"?c=`
`:w=="t"?c="	":"ulULE".indexOf(w)!=-1&&(c={changeCase:w,local:w>"a"}),[c]}},{regex:"/\\w*}",onMatch:function(c,m,v){var w=v.shift();return w&&(w.flag=c.slice(1,-1)),this.next=w&&w.tabstopId?"start":"",[w||c]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(c,m,v){return[{text:c.slice(1)}]}},{regex:/\${\w+/,onMatch:function(c,m,v){var w={text:c.slice(2)};return v.unshift(w),[w]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(c,m,v){var w=v.shift();return this.next=w&&w.tabstopId?"start":"",[w||c]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(c,m,v){var w=v[0];return w.formatFunction=c.slice(2,-1),[v.shift()]},next:"formatString"},p,{regex:/:[\?\-+]?/,onMatch:function(c,m,v){c[1]=="+"&&(v[0].ifEnd=v[0]),c[1]=="?"&&(v[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),d.$tokenizer},d.prototype.tokenizeTmSnippet=function(i,r){return this.getTokenizer().getLineTokens(i,r).tokens.map(function(p){return p.value||p})},d.prototype.getVariableValue=function(i,r,p){if(/^\d+$/.test(r))return(this.variables.__||{})[r]||"";if(/^[A-Z]\d+$/.test(r))return(this.variables[r[0]+"__"]||{})[r.substr(1)]||"";if(r=r.replace(/^TM_/,""),!this.variables.hasOwnProperty(r))return"";var c=this.variables[r];return typeof c=="function"&&(c=this.variables[r](i,r,p)),c==null?"":c},d.prototype.tmStrFormat=function(i,r,p){if(!r.fmt)return i;var c=r.flag||"",m=r.guard;m=new RegExp(m,c.replace(/[^gim]/g,""));var v=typeof r.fmt=="string"?this.tokenizeTmSnippet(r.fmt,"formatString"):r.fmt,w=this,T=i.replace(m,function(){var M=w.variables.__;w.variables.__=[].slice.call(arguments);for(var O=w.resolveVariables(v,p),L="E",I=0;I<O.length;I++){var N=O[I];if(typeof N=="object")if(O[I]="",N.changeCase&&N.local){var P=O[I+1];P&&typeof P=="string"&&(N.changeCase=="u"?O[I]=P[0].toUpperCase():O[I]=P[0].toLowerCase(),O[I+1]=P.substr(1))}else N.changeCase&&(L=N.changeCase);else L=="U"?O[I]=N.toUpperCase():L=="L"&&(O[I]=N.toLowerCase())}return w.variables.__=M,O.join("")});return T},d.prototype.tmFormatFunction=function(i,r,p){return r.formatFunction=="upcase"?i.toUpperCase():r.formatFunction=="downcase"?i.toLowerCase():i},d.prototype.resolveVariables=function(i,r){function p(L){var I=i.indexOf(L,w+1);I!=-1&&(w=I)}for(var c=[],m="",v=!0,w=0;w<i.length;w++){var T=i[w];if(typeof T=="string"){c.push(T),T==`
`?(v=!0,m=""):v&&(m=/^\t*/.exec(T)[0],v=/\S/.test(T));continue}if(T){if(v=!1,T.fmtString){var M=i.indexOf(T,w+1);M==-1&&(M=i.length),T.fmt=i.slice(w+1,M),w=M}if(T.text){var O=this.getVariableValue(r,T.text,m)+"";T.fmtString&&(O=this.tmStrFormat(O,T,r)),T.formatFunction&&(O=this.tmFormatFunction(O,T,r)),O&&!T.ifEnd?(c.push(O),p(T)):!O&&T.ifEnd&&p(T.ifEnd)}else T.elseEnd?p(T.elseEnd):(T.tabstopId!=null||T.changeCase!=null)&&c.push(T)}}return c},d.prototype.getDisplayTextForSnippet=function(i,r){var p=S.call(this,i,r);return p.text},d.prototype.insertSnippetForSelection=function(i,r,p){p===void 0&&(p={});var c=S.call(this,i,r,p),m=i.getSelectionRange();p.range&&p.range.compareRange(m)===0&&(m=p.range);var v=i.session.replace(m,c.text),w=new s(i),T=i.inVirtualSelectionMode&&i.selection.index;w.addTabstops(c.tabstops,m.start,v,T)},d.prototype.insertSnippet=function(i,r,p){p===void 0&&(p={});var c=this;if(p.range&&!(p.range instanceof n)&&(p.range=n.fromPoints(p.range.start,p.range.end)),i.inVirtualSelectionMode)return c.insertSnippetForSelection(i,r,p);i.forEachSelection(function(){c.insertSnippetForSelection(i,r,p)},null,{keepOrder:!0}),i.tabstopManager&&i.tabstopManager.tabNext()},d.prototype.$getScope=function(i){var r=i.session.$mode.$id||"";if(r=r.split("/").pop(),r==="html"||r==="php"){r==="php"&&!i.session.$mode.inlinePhp&&(r="html");var p=i.getCursorPosition(),c=i.session.getState(p.row);typeof c=="object"&&(c=c[0]),c.substring&&(c.substring(0,3)=="js-"?r="javascript":c.substring(0,4)=="css-"?r="css":c.substring(0,4)=="php-"&&(r="php"))}return r},d.prototype.getActiveScopes=function(i){var r=this.$getScope(i),p=[r],c=this.snippetMap;return c[r]&&c[r].includeScopes&&p.push.apply(p,c[r].includeScopes),p.push("_"),p},d.prototype.expandWithTab=function(i,r){var p=this,c=i.forEachSelection(function(){return p.expandSnippetForSelection(i,r)},null,{keepOrder:!0});return c&&i.tabstopManager&&i.tabstopManager.tabNext(),c},d.prototype.expandSnippetForSelection=function(i,r){var p=i.getCursorPosition(),c=i.session.getLine(p.row),m=c.substring(0,p.column),v=c.substr(p.column),w=this.snippetMap,T;return this.getActiveScopes(i).some(function(M){var O=w[M];return O&&(T=this.findMatchingSnippet(O,m,v)),!!T},this),T?(r&&r.dryRun||(i.session.doc.removeInLine(p.row,p.column-T.replaceBefore.length,p.column+T.replaceAfter.length),this.variables.M__=T.matchBefore,this.variables.T__=T.matchAfter,this.insertSnippetForSelection(i,T.content),this.variables.M__=this.variables.T__=null),!0):!1},d.prototype.findMatchingSnippet=function(i,r,p){for(var c=i.length;c--;){var m=i[c];if(!(m.startRe&&!m.startRe.test(r))&&!(m.endRe&&!m.endRe.test(p))&&!(!m.startRe&&!m.endRe))return m.matchBefore=m.startRe?m.startRe.exec(r):[""],m.matchAfter=m.endRe?m.endRe.exec(p):[""],m.replaceBefore=m.triggerRe?m.triggerRe.exec(r)[0]:"",m.replaceAfter=m.endTriggerRe?m.endTriggerRe.exec(p)[0]:"",m}},d.prototype.register=function(i,r){function p(M){return M&&!/^\^?\(.*\)\$?$|^\\b$/.test(M)&&(M="(?:"+M+")"),M||""}function c(M,O,L){return M=p(M),O=p(O),L?(M=O+M,M&&M[M.length-1]!="$"&&(M+="$")):(M+=O,M&&M[0]!="^"&&(M="^"+M)),new RegExp(M)}function m(M){M.scope||(M.scope=r||"_"),r=M.scope,v[r]||(v[r]=[],w[r]={});var O=w[r];if(M.name){var L=O[M.name];L&&T.unregister(L),O[M.name]=M}v[r].push(M),M.prefix&&(M.tabTrigger=M.prefix),!M.content&&M.body&&(M.content=Array.isArray(M.body)?M.body.join(`
`):M.body),M.tabTrigger&&!M.trigger&&(!M.guard&&/^\w/.test(M.tabTrigger)&&(M.guard="\\b"),M.trigger=h.escapeRegExp(M.tabTrigger)),!(!M.trigger&&!M.guard&&!M.endTrigger&&!M.endGuard)&&(M.startRe=c(M.trigger,M.guard,!0),M.triggerRe=new RegExp(M.trigger),M.endRe=c(M.endTrigger,M.endGuard,!0),M.endTriggerRe=new RegExp(M.endTrigger))}var v=this.snippetMap,w=this.snippetNameMap,T=this;i||(i=[]),Array.isArray(i)?i.forEach(m):Object.keys(i).forEach(function(M){m(i[M])}),this._signal("registerSnippets",{scope:r})},d.prototype.unregister=function(i,r){function p(v){var w=m[v.scope||r];if(w&&w[v.name]){delete w[v.name];var T=c[v.scope||r],M=T&&T.indexOf(v);M>=0&&T.splice(M,1)}}var c=this.snippetMap,m=this.snippetNameMap;i.content?p(i):Array.isArray(i)&&i.forEach(p)},d.prototype.parseSnippetFile=function(i){i=i.replace(/\r/g,"");for(var r=[],p={},c=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,m;m=c.exec(i);){if(m[1])try{p=JSON.parse(m[1]),r.push(p)}catch(M){}if(m[4])p.content=m[4].replace(/^\t/gm,""),r.push(p),p={};else{var v=m[2],w=m[3];if(v=="regex"){var T=/\/((?:[^\/\\]|\\.)*)|$/g;p.guard=T.exec(w)[1],p.trigger=T.exec(w)[1],p.endTrigger=T.exec(w)[1],p.endGuard=T.exec(w)[1]}else v=="snippet"?(p.tabTrigger=w.match(/^\S*/)[0],p.name||(p.name=w)):v&&(p[v]=w)}}return r},d.prototype.getSnippetByName=function(i,r){var p=this.snippetNameMap,c;return this.getActiveScopes(r).some(function(m){var v=p[m];return v&&(c=v[i]),!!c},this),c},d}();u.implement(y.prototype,f);var S=function(d,i,r){function p(F){for(var q=[],V=0;V<F.length;V++){var B=F[V];if(typeof B=="object"){if(O[B.tabstopId])continue;var te=F.lastIndexOf(B,V-1);B=q[te]||{tabstopId:B.tabstopId}}q[V]=B}return q}r===void 0&&(r={});var c=d.getCursorPosition(),m=d.session.getLine(c.row),v=d.session.getTabString(),w=m.match(/^\s*/)[0];c.column<w.length&&(w=w.slice(0,c.column)),i=i.replace(/\r/g,"");var T=this.tokenizeTmSnippet(i);T=this.resolveVariables(T,d),T=T.map(function(F){return F==`
`&&!r.excludeExtraIndent?F+w:typeof F=="string"?F.replace(/\t/g,v):F});var M=[];T.forEach(function(F,q){if(typeof F=="object"){var V=F.tabstopId,B=M[V];if(B||(B=M[V]=[],B.index=V,B.value="",B.parents={}),B.indexOf(F)===-1){F.choices&&!B.choices&&(B.choices=F.choices),B.push(F);var te=T.indexOf(F,q+1);if(te!==-1){var ne=T.slice(q+1,te),xe=ne.some(function(we){return typeof we=="object"});xe&&!B.value?B.value=ne:ne.length&&(!B.value||typeof B.value!="string")&&(B.value=ne.join(""))}}}}),M.forEach(function(F){F.length=0});for(var O={},L=0;L<T.length;L++){var I=T[L];if(typeof I=="object"){var N=I.tabstopId,P=M[N],K=T.indexOf(I,L+1);if(O[N]){O[N]===I&&(delete O[N],Object.keys(O).forEach(function(F){P.parents[F]=!0}));continue}O[N]=I;var U=P.value;typeof U!="string"?U=p(U):I.fmt&&(U=this.tmStrFormat(U,I,d)),T.splice.apply(T,[L+1,Math.max(0,K-L)].concat(U,I)),P.indexOf(I)===-1&&P.push(I)}}var X=0,ee=0,he="";return T.forEach(function(F){if(typeof F=="string"){var q=F.split(`
`);q.length>1?(ee=q[q.length-1].length,X+=q.length-1):ee+=F.length,he+=F}else F&&(F.start?F.end={row:X,column:ee}:F.start={row:X,column:ee})}),{text:he,tabstops:M,tokens:T}},s=function(){function d(i){if(this.index=0,this.ranges=[],this.tabstops=[],i.tabstopManager)return i.tabstopManager;i.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=h.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(i)}return d.prototype.attach=function(i){this.$openTabstops=null,this.selectedTabstop=null,this.editor=i,this.session=i.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},d.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},d.prototype.onChange=function(i){for(var r=i.action[0]=="r",p=this.selectedTabstop||{},c=p.parents||{},m=this.tabstops.slice(),v=0;v<m.length;v++){var w=m[v],T=w==p||c[w.index];if(w.rangeList.$bias=T?0:1,i.action=="remove"&&w!==p){var M=w.parents&&w.parents[p.index],O=w.rangeList.pointIndex(i.start,M);O=O<0?-O-1:O+1;var L=w.rangeList.pointIndex(i.end,M);L=L<0?-L-1:L-1;for(var I=w.rangeList.ranges.slice(O,L),N=0;N<I.length;N++)this.removeRange(I[N])}w.rangeList.$onChange(i)}var P=this.session;!this.$inChange&&r&&P.getLength()==1&&!P.getValue()&&this.detach()},d.prototype.updateLinkedFields=function(){var i=this.selectedTabstop;if(!(!i||!i.hasLinkedRanges||!i.firstNonLinked)){this.$inChange=!0;for(var r=this.session,p=r.getTextRange(i.firstNonLinked),c=0;c<i.length;c++){var m=i[c];if(m.linked){var v=m.original,w=l.snippetManager.tmStrFormat(p,v,this.editor);r.replace(m,w)}}this.$inChange=!1}},d.prototype.onAfterExec=function(i){i.command&&!i.command.readOnly&&this.updateLinkedFields()},d.prototype.onChangeSelection=function(){if(this.editor){for(var i=this.editor.selection.lead,r=this.editor.selection.anchor,p=this.editor.selection.isEmpty(),c=0;c<this.ranges.length;c++)if(!this.ranges[c].linked){var m=this.ranges[c].contains(i.row,i.column),v=p||this.ranges[c].contains(r.row,r.column);if(m&&v)return}this.detach()}},d.prototype.onChangeSession=function(){this.detach()},d.prototype.tabNext=function(i){var r=this.tabstops.length,p=this.index+(i||1);p=Math.min(Math.max(p,1),r),p==r&&(p=0),this.selectTabstop(p),p===0&&this.detach()},d.prototype.selectTabstop=function(i){this.$openTabstops=null;var r=this.tabstops[this.index];if(r&&this.addTabstopMarkers(r),this.index=i,r=this.tabstops[this.index],!(!r||!r.length)){this.selectedTabstop=r;var p=r.firstNonLinked||r;if(r.choices&&(p.cursor=p.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(p);else{var c=this.editor.multiSelect;c.toSingleRange(p);for(var m=0;m<r.length;m++)r.hasLinkedRanges&&r[m].linked||c.addRange(r[m].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},d.prototype.addTabstops=function(i,r,p){var c=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!i[0]){var m=n.fromPoints(p,p);A(m.start,r),A(m.end,r),i[0]=[m],i[0].index=0}var v=this.index,w=[v+1,0],T=this.ranges;i.forEach(function(M,O){for(var L=this.$openTabstops[O]||M,I=0;I<M.length;I++){var N=M[I],P=n.fromPoints(N.start,N.end||N.start);k(P.start,r),k(P.end,r),P.original=N,P.tabstop=L,T.push(P),L!=M?L.unshift(P):L[I]=P,N.fmtString||L.firstNonLinked&&c?(P.linked=!0,L.hasLinkedRanges=!0):L.firstNonLinked||(L.firstNonLinked=P)}L.firstNonLinked||(L.hasLinkedRanges=!1),L===M&&(w.push(L),this.$openTabstops[O]=L),this.addTabstopMarkers(L),L.rangeList=L.rangeList||new o,L.rangeList.$bias=0,L.rangeList.addList(L)},this),w.length>2&&(this.tabstops.length&&w.push(w.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,w))},d.prototype.addTabstopMarkers=function(i){var r=this.session;i.forEach(function(p){p.markerId||(p.markerId=r.addMarker(p,"ace_snippet-marker","text"))})},d.prototype.removeTabstopMarkers=function(i){var r=this.session;i.forEach(function(p){r.removeMarker(p.markerId),p.markerId=null})},d.prototype.removeRange=function(i){var r=i.tabstop.indexOf(i);r!=-1&&i.tabstop.splice(r,1),r=this.ranges.indexOf(i),r!=-1&&this.ranges.splice(r,1),r=i.tabstop.rangeList.ranges.indexOf(i),r!=-1&&i.tabstop.splice(r,1),this.session.removeMarker(i.markerId),i.tabstop.length||(r=this.tabstops.indexOf(i.tabstop),r!=-1&&this.tabstops.splice(r,1),this.tabstops.length||this.detach())},d}();s.prototype.keyboardHandler=new b,s.prototype.keyboardHandler.bindKeys({Tab:function(d){l.snippetManager&&l.snippetManager.expandWithTab(d)||(d.tabstopManager.tabNext(1),d.renderer.scrollCursorIntoView())},"Shift-Tab":function(d){d.tabstopManager.tabNext(-1),d.renderer.scrollCursorIntoView()},Esc:function(d){d.tabstopManager.detach()}});var k=function(d,i){d.row==0&&(d.column+=i.column),d.row+=i.row},A=function(d,i){d.row==i.row&&(d.column-=i.column),d.row-=i.row};a.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),l.snippetManager=new y;var R=t("./editor").Editor;(function(){this.insertSnippet=function(d,i){return l.snippetManager.insertSnippet(this,d,i)},this.expandSnippet=function(d){return l.snippetManager.expandWithTab(this,d)}}).call(R.prototype)}),ace.define("ace/ext/emmet",["require","exports","module","ace/keyboard/hash_handler","ace/editor","ace/snippets","ace/range","ace/config","resources","resources","tabStops","resources","utils","actions"],function(t,l,$){var e=t("../keyboard/hash_handler").HashHandler,a=t("../editor").Editor,u=t("../snippets").snippetManager,f=t("../range").Range,h=t("../config"),n,o,b=function(){function S(){}return S.prototype.setupContext=function(s){this.ace=s,this.indentation=s.session.getTabString(),n||(n=window.emmet);var k=n.resources||n.require("resources");k.setVariable("indentation",this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},S.prototype.getSelectionRange=function(){var s=this.ace.getSelectionRange(),k=this.ace.session.doc;return{start:k.positionToIndex(s.start),end:k.positionToIndex(s.end)}},S.prototype.createSelection=function(s,k){var A=this.ace.session.doc;this.ace.selection.setRange({start:A.indexToPosition(s),end:A.indexToPosition(k)})},S.prototype.getCurrentLineRange=function(){var s=this.ace,k=s.getCursorPosition().row,A=s.session.getLine(k).length,R=s.session.doc.positionToIndex({row:k,column:0});return{start:R,end:R+A}},S.prototype.getCaretPos=function(){var s=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(s)},S.prototype.setCaretPos=function(s){var k=this.ace.session.doc.indexToPosition(s);this.ace.selection.moveToPosition(k)},S.prototype.getCurrentLine=function(){var s=this.ace.getCursorPosition().row;return this.ace.session.getLine(s)},S.prototype.replaceContent=function(s,k,A,R){A==null&&(A=k==null?this.getContent().length:k),k==null&&(k=0);var d=this.ace,i=d.session.doc,r=f.fromPoints(i.indexToPosition(k),i.indexToPosition(A));d.session.remove(r),r.end=r.start,s=this.$updateTabstops(s),u.insertSnippet(d,s)},S.prototype.getContent=function(){return this.ace.getValue()},S.prototype.getSyntax=function(){if(this.$syntax)return this.$syntax;var s=this.ace.session.$modeId.split("/").pop();if(s=="html"||s=="php"){var k=this.ace.getCursorPosition(),A=this.ace.session.getState(k.row);typeof A!="string"&&(A=A[0]),A&&(A=A.split("-"),A.length>1?s=A[0]:s=="php"&&(s="html"))}return s},S.prototype.getProfileName=function(){var s=n.resources||n.require("resources");switch(this.getSyntax()){case"css":return"css";case"xml":case"xsl":return"xml";case"html":var k=s.getVariable("profile");return k||(k=this.ace.session.getLines(0,2).join("").search(/<!DOCTYPE[^>]+XHTML/i)!=-1?"xhtml":"html"),k;default:var A=this.ace.session.$mode;return A.emmetConfig&&A.emmetConfig.profile||"xhtml"}},S.prototype.prompt=function(s){return prompt(s)},S.prototype.getSelection=function(){return this.ace.session.getTextRange()},S.prototype.getFilePath=function(){return""},S.prototype.$updateTabstops=function(s){var k=1e3,A=0,R=null,d=n.tabStops||n.require("tabStops"),i=n.resources||n.require("resources"),r=i.getVocabulary("user"),p={tabstop:function(m){var v=parseInt(m.group,10),w=v===0;w?v=++A:v+=k;var T=m.placeholder;T&&(T=d.processText(T,p));var M="${"+v+(T?":"+T:"")+"}";return w&&(R=[m.start,M]),M},escape:function(m){return m=="$"?"\\$":m=="\\"?"\\\\":m}};if(s=d.processText(s,p),r.variables.insert_final_tabstop&&!/\$\{0\}$/.test(s))s+="${0}";else if(R){var c=n.utils?n.utils.common:n.require("utils");s=c.replaceSubstring(s,"${0}",R[0],R[1])}return s},S}(),x={expand_abbreviation:{mac:"ctrl+alt+e",win:"alt+e"},match_pair_outward:{mac:"ctrl+d",win:"ctrl+,"},match_pair_inward:{mac:"ctrl+j",win:"ctrl+shift+0"},matching_pair:{mac:"ctrl+alt+j",win:"alt+j"},next_edit_point:"alt+right",prev_edit_point:"alt+left",toggle_comment:{mac:"command+/",win:"ctrl+/"},split_join_tag:{mac:"shift+command+'",win:"shift+ctrl+`"},remove_tag:{mac:"command+'",win:"shift+ctrl+;"},evaluate_math_expression:{mac:"shift+command+y",win:"shift+ctrl+y"},increment_number_by_1:"ctrl+up",decrement_number_by_1:"ctrl+down",increment_number_by_01:"alt+up",decrement_number_by_01:"alt+down",increment_number_by_10:{mac:"alt+command+up",win:"shift+alt+up"},decrement_number_by_10:{mac:"alt+command+down",win:"shift+alt+down"},select_next_item:{mac:"shift+command+.",win:"shift+ctrl+."},select_previous_item:{mac:"shift+command+,",win:"shift+ctrl+,"},reflect_css_value:{mac:"shift+command+r",win:"shift+ctrl+r"},encode_decode_data_url:{mac:"shift+ctrl+d",win:"ctrl+'"},expand_abbreviation_with_tab:"Tab",wrap_with_abbreviation:{mac:"shift+ctrl+a",win:"shift+ctrl+a"}},C=new b;l.commands=new e,l.runEmmetCommand=function S(s){if(this.action=="expand_abbreviation_with_tab"){if(!s.selection.isEmpty())return!1;var k=s.selection.lead,A=s.session.getTokenAt(k.row,k.column);if(A&&/\btag\b/.test(A.type))return!1}try{C.setupContext(s);var R=n.actions||n.require("actions");if(this.action=="wrap_with_abbreviation")return setTimeout(function(){R.run("wrap_with_abbreviation",C)},0);var d=R.run(this.action,C)}catch(r){if(!n){var i=l.load(S.bind(this,s));return this.action=="expand_abbreviation_with_tab"?!1:i}s._signal("changeStatus",typeof r=="string"?r:r.message),h.warn(r),d=!1}return d};for(var E in x)l.commands.addCommand({name:"emmet:"+E,action:E,bindKey:x[E],exec:l.runEmmetCommand,multiSelectAction:"forEach"});l.updateCommands=function(S,s){s?S.keyBinding.addKeyboardHandler(l.commands):S.keyBinding.removeKeyboardHandler(l.commands)},l.isSupportedMode=function(S){if(!S)return!1;if(S.emmetConfig)return!0;var s=S.$id||S;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(s)},l.isAvailable=function(S,s){if(/(evaluate_math_expression|expand_abbreviation)$/.test(s))return!0;var k=S.session.$mode,A=l.isSupportedMode(k);if(A&&k.$modes)try{C.setupContext(S),/js|php/.test(C.getSyntax())&&(A=!1)}catch(R){}return A};var y=function(S,s){var k=s;if(k){var A=l.isSupportedMode(k.session.$mode);S.enableEmmet===!1&&(A=!1),A&&l.load(),l.updateCommands(k,A)}};l.load=function(S){return typeof o!="string"?(h.warn("script for emmet-core is not loaded"),!1):(h.loadModule(o,function(){o=null,S&&S()}),!0)},l.AceEmmetEditor=b,h.defineOptions(a.prototype,"editor",{enableEmmet:{set:function(S){this[S?"on":"removeListener"]("changeMode",y),y({enableEmmet:!!S},this)},value:!0}}),l.setCore=function(S){typeof S=="string"?o=S:n=S}}),function(){ace.require(["ace/ext/emmet"],function(t){_&&(_.exports=t)})}()})(Bt);var Ht={exports:{}};(function(_,g){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(t,l,$){function e(d){var i=new Date().toLocaleString("en-us",d);return i.length==1?"0"+i:i}var a=t("./lib/dom"),u=t("./lib/oop"),f=t("./lib/event_emitter").EventEmitter,h=t("./lib/lang"),n=t("./range").Range,o=t("./range_list").RangeList,b=t("./keyboard/hash_handler").HashHandler,x=t("./tokenizer").Tokenizer,C=t("./clipboard"),E={CURRENT_WORD:function(d){return d.session.getTextRange(d.session.getWordRange())},SELECTION:function(d,i,r){var p=d.session.getTextRange();return r?p.replace(/\n\r?([ \t]*\S)/g,`
`+r+"$1"):p},CURRENT_LINE:function(d){return d.session.getLine(d.getCursorPosition().row)},PREV_LINE:function(d){return d.session.getLine(d.getCursorPosition().row-1)},LINE_INDEX:function(d){return d.getCursorPosition().row},LINE_NUMBER:function(d){return d.getCursorPosition().row+1},SOFT_TABS:function(d){return d.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(d){return d.session.getTabSize()},CLIPBOARD:function(d){return C.getText&&C.getText()},FILENAME:function(d){return/[^/\\]*$/.exec(this.FILEPATH(d))[0]},FILENAME_BASE:function(d){return/[^/\\]*$/.exec(this.FILEPATH(d))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(d){return this.FILEPATH(d).replace(/[^/\\]*$/,"")},FILEPATH:function(d){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(d){var i=d.session.$mode||{};return i.blockComment&&i.blockComment.start||""},BLOCK_COMMENT_END:function(d){var i=d.session.$mode||{};return i.blockComment&&i.blockComment.end||""},LINE_COMMENT:function(d){var i=d.session.$mode||{};return i.lineCommentStart||""},CURRENT_YEAR:e.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:e.bind(null,{year:"2-digit"}),CURRENT_MONTH:e.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:e.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:e.bind(null,{month:"short"}),CURRENT_DATE:e.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:e.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:e.bind(null,{weekday:"short"}),CURRENT_HOUR:e.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:e.bind(null,{minute:"2-digit"}),CURRENT_SECOND:e.bind(null,{second:"2-digit"})};E.SELECTED_TEXT=E.SELECTION;var y=function(){function d(){this.snippetMap={},this.snippetNameMap={},this.variables=E}return d.prototype.getTokenizer=function(){return d.$tokenizer||this.createTokenizer()},d.prototype.createTokenizer=function(){function i(c){return c=c.substr(1),/^\d+$/.test(c)?[{tabstopId:parseInt(c,10)}]:[{text:c}]}function r(c){return"(?:[^\\\\"+c+"]|\\\\.)"}var p={regex:"/("+r("/")+"+)/",onMatch:function(c,m,v){var w=v[0];return w.fmtString=!0,w.guard=c.slice(1,-1),w.flag="",""},next:"formatString"};return d.$tokenizer=new x({start:[{regex:/\\./,onMatch:function(c,m,v){var w=c[1];return(w=="}"&&v.length||"`$\\".indexOf(w)!=-1)&&(c=w),[c]}},{regex:/}/,onMatch:function(c,m,v){return[v.length?v.shift():c]}},{regex:/\$(?:\d+|\w+)/,onMatch:i},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(c,m,v){var w=i(c.substr(1));return v.unshift(w[0]),w},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+r("\\|")+"*\\|",onMatch:function(c,m,v){var w=c.slice(1,-1).replace(/\\[,|\\]|,/g,function(T){return T.length==2?T[1]:"\0"}).split("\0").map(function(T){return{value:T}});return v[0].choices=w,[w[0]]},next:"start"},p,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(c,m,v){return v.length&&v[0].expectElse?(v[0].expectElse=!1,v[0].ifEnd={elseEnd:v[0]},[v[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(c,m,v){var w=c[1];return w=="}"&&v.length||"`$\\".indexOf(w)!=-1?c=w:w=="n"?c=`
`:w=="t"?c="	":"ulULE".indexOf(w)!=-1&&(c={changeCase:w,local:w>"a"}),[c]}},{regex:"/\\w*}",onMatch:function(c,m,v){var w=v.shift();return w&&(w.flag=c.slice(1,-1)),this.next=w&&w.tabstopId?"start":"",[w||c]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(c,m,v){return[{text:c.slice(1)}]}},{regex:/\${\w+/,onMatch:function(c,m,v){var w={text:c.slice(2)};return v.unshift(w),[w]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(c,m,v){var w=v.shift();return this.next=w&&w.tabstopId?"start":"",[w||c]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(c,m,v){var w=v[0];return w.formatFunction=c.slice(2,-1),[v.shift()]},next:"formatString"},p,{regex:/:[\?\-+]?/,onMatch:function(c,m,v){c[1]=="+"&&(v[0].ifEnd=v[0]),c[1]=="?"&&(v[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),d.$tokenizer},d.prototype.tokenizeTmSnippet=function(i,r){return this.getTokenizer().getLineTokens(i,r).tokens.map(function(p){return p.value||p})},d.prototype.getVariableValue=function(i,r,p){if(/^\d+$/.test(r))return(this.variables.__||{})[r]||"";if(/^[A-Z]\d+$/.test(r))return(this.variables[r[0]+"__"]||{})[r.substr(1)]||"";if(r=r.replace(/^TM_/,""),!this.variables.hasOwnProperty(r))return"";var c=this.variables[r];return typeof c=="function"&&(c=this.variables[r](i,r,p)),c==null?"":c},d.prototype.tmStrFormat=function(i,r,p){if(!r.fmt)return i;var c=r.flag||"",m=r.guard;m=new RegExp(m,c.replace(/[^gim]/g,""));var v=typeof r.fmt=="string"?this.tokenizeTmSnippet(r.fmt,"formatString"):r.fmt,w=this,T=i.replace(m,function(){var M=w.variables.__;w.variables.__=[].slice.call(arguments);for(var O=w.resolveVariables(v,p),L="E",I=0;I<O.length;I++){var N=O[I];if(typeof N=="object")if(O[I]="",N.changeCase&&N.local){var P=O[I+1];P&&typeof P=="string"&&(N.changeCase=="u"?O[I]=P[0].toUpperCase():O[I]=P[0].toLowerCase(),O[I+1]=P.substr(1))}else N.changeCase&&(L=N.changeCase);else L=="U"?O[I]=N.toUpperCase():L=="L"&&(O[I]=N.toLowerCase())}return w.variables.__=M,O.join("")});return T},d.prototype.tmFormatFunction=function(i,r,p){return r.formatFunction=="upcase"?i.toUpperCase():r.formatFunction=="downcase"?i.toLowerCase():i},d.prototype.resolveVariables=function(i,r){function p(L){var I=i.indexOf(L,w+1);I!=-1&&(w=I)}for(var c=[],m="",v=!0,w=0;w<i.length;w++){var T=i[w];if(typeof T=="string"){c.push(T),T==`
`?(v=!0,m=""):v&&(m=/^\t*/.exec(T)[0],v=/\S/.test(T));continue}if(T){if(v=!1,T.fmtString){var M=i.indexOf(T,w+1);M==-1&&(M=i.length),T.fmt=i.slice(w+1,M),w=M}if(T.text){var O=this.getVariableValue(r,T.text,m)+"";T.fmtString&&(O=this.tmStrFormat(O,T,r)),T.formatFunction&&(O=this.tmFormatFunction(O,T,r)),O&&!T.ifEnd?(c.push(O),p(T)):!O&&T.ifEnd&&p(T.ifEnd)}else T.elseEnd?p(T.elseEnd):(T.tabstopId!=null||T.changeCase!=null)&&c.push(T)}}return c},d.prototype.getDisplayTextForSnippet=function(i,r){var p=S.call(this,i,r);return p.text},d.prototype.insertSnippetForSelection=function(i,r,p){p===void 0&&(p={});var c=S.call(this,i,r,p),m=i.getSelectionRange();p.range&&p.range.compareRange(m)===0&&(m=p.range);var v=i.session.replace(m,c.text),w=new s(i),T=i.inVirtualSelectionMode&&i.selection.index;w.addTabstops(c.tabstops,m.start,v,T)},d.prototype.insertSnippet=function(i,r,p){p===void 0&&(p={});var c=this;if(p.range&&!(p.range instanceof n)&&(p.range=n.fromPoints(p.range.start,p.range.end)),i.inVirtualSelectionMode)return c.insertSnippetForSelection(i,r,p);i.forEachSelection(function(){c.insertSnippetForSelection(i,r,p)},null,{keepOrder:!0}),i.tabstopManager&&i.tabstopManager.tabNext()},d.prototype.$getScope=function(i){var r=i.session.$mode.$id||"";if(r=r.split("/").pop(),r==="html"||r==="php"){r==="php"&&!i.session.$mode.inlinePhp&&(r="html");var p=i.getCursorPosition(),c=i.session.getState(p.row);typeof c=="object"&&(c=c[0]),c.substring&&(c.substring(0,3)=="js-"?r="javascript":c.substring(0,4)=="css-"?r="css":c.substring(0,4)=="php-"&&(r="php"))}return r},d.prototype.getActiveScopes=function(i){var r=this.$getScope(i),p=[r],c=this.snippetMap;return c[r]&&c[r].includeScopes&&p.push.apply(p,c[r].includeScopes),p.push("_"),p},d.prototype.expandWithTab=function(i,r){var p=this,c=i.forEachSelection(function(){return p.expandSnippetForSelection(i,r)},null,{keepOrder:!0});return c&&i.tabstopManager&&i.tabstopManager.tabNext(),c},d.prototype.expandSnippetForSelection=function(i,r){var p=i.getCursorPosition(),c=i.session.getLine(p.row),m=c.substring(0,p.column),v=c.substr(p.column),w=this.snippetMap,T;return this.getActiveScopes(i).some(function(M){var O=w[M];return O&&(T=this.findMatchingSnippet(O,m,v)),!!T},this),T?(r&&r.dryRun||(i.session.doc.removeInLine(p.row,p.column-T.replaceBefore.length,p.column+T.replaceAfter.length),this.variables.M__=T.matchBefore,this.variables.T__=T.matchAfter,this.insertSnippetForSelection(i,T.content),this.variables.M__=this.variables.T__=null),!0):!1},d.prototype.findMatchingSnippet=function(i,r,p){for(var c=i.length;c--;){var m=i[c];if(!(m.startRe&&!m.startRe.test(r))&&!(m.endRe&&!m.endRe.test(p))&&!(!m.startRe&&!m.endRe))return m.matchBefore=m.startRe?m.startRe.exec(r):[""],m.matchAfter=m.endRe?m.endRe.exec(p):[""],m.replaceBefore=m.triggerRe?m.triggerRe.exec(r)[0]:"",m.replaceAfter=m.endTriggerRe?m.endTriggerRe.exec(p)[0]:"",m}},d.prototype.register=function(i,r){function p(M){return M&&!/^\^?\(.*\)\$?$|^\\b$/.test(M)&&(M="(?:"+M+")"),M||""}function c(M,O,L){return M=p(M),O=p(O),L?(M=O+M,M&&M[M.length-1]!="$"&&(M+="$")):(M+=O,M&&M[0]!="^"&&(M="^"+M)),new RegExp(M)}function m(M){M.scope||(M.scope=r||"_"),r=M.scope,v[r]||(v[r]=[],w[r]={});var O=w[r];if(M.name){var L=O[M.name];L&&T.unregister(L),O[M.name]=M}v[r].push(M),M.prefix&&(M.tabTrigger=M.prefix),!M.content&&M.body&&(M.content=Array.isArray(M.body)?M.body.join(`
`):M.body),M.tabTrigger&&!M.trigger&&(!M.guard&&/^\w/.test(M.tabTrigger)&&(M.guard="\\b"),M.trigger=h.escapeRegExp(M.tabTrigger)),!(!M.trigger&&!M.guard&&!M.endTrigger&&!M.endGuard)&&(M.startRe=c(M.trigger,M.guard,!0),M.triggerRe=new RegExp(M.trigger),M.endRe=c(M.endTrigger,M.endGuard,!0),M.endTriggerRe=new RegExp(M.endTrigger))}var v=this.snippetMap,w=this.snippetNameMap,T=this;i||(i=[]),Array.isArray(i)?i.forEach(m):Object.keys(i).forEach(function(M){m(i[M])}),this._signal("registerSnippets",{scope:r})},d.prototype.unregister=function(i,r){function p(v){var w=m[v.scope||r];if(w&&w[v.name]){delete w[v.name];var T=c[v.scope||r],M=T&&T.indexOf(v);M>=0&&T.splice(M,1)}}var c=this.snippetMap,m=this.snippetNameMap;i.content?p(i):Array.isArray(i)&&i.forEach(p)},d.prototype.parseSnippetFile=function(i){i=i.replace(/\r/g,"");for(var r=[],p={},c=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,m;m=c.exec(i);){if(m[1])try{p=JSON.parse(m[1]),r.push(p)}catch(M){}if(m[4])p.content=m[4].replace(/^\t/gm,""),r.push(p),p={};else{var v=m[2],w=m[3];if(v=="regex"){var T=/\/((?:[^\/\\]|\\.)*)|$/g;p.guard=T.exec(w)[1],p.trigger=T.exec(w)[1],p.endTrigger=T.exec(w)[1],p.endGuard=T.exec(w)[1]}else v=="snippet"?(p.tabTrigger=w.match(/^\S*/)[0],p.name||(p.name=w)):v&&(p[v]=w)}}return r},d.prototype.getSnippetByName=function(i,r){var p=this.snippetNameMap,c;return this.getActiveScopes(r).some(function(m){var v=p[m];return v&&(c=v[i]),!!c},this),c},d}();u.implement(y.prototype,f);var S=function(d,i,r){function p(F){for(var q=[],V=0;V<F.length;V++){var B=F[V];if(typeof B=="object"){if(O[B.tabstopId])continue;var te=F.lastIndexOf(B,V-1);B=q[te]||{tabstopId:B.tabstopId}}q[V]=B}return q}r===void 0&&(r={});var c=d.getCursorPosition(),m=d.session.getLine(c.row),v=d.session.getTabString(),w=m.match(/^\s*/)[0];c.column<w.length&&(w=w.slice(0,c.column)),i=i.replace(/\r/g,"");var T=this.tokenizeTmSnippet(i);T=this.resolveVariables(T,d),T=T.map(function(F){return F==`
`&&!r.excludeExtraIndent?F+w:typeof F=="string"?F.replace(/\t/g,v):F});var M=[];T.forEach(function(F,q){if(typeof F=="object"){var V=F.tabstopId,B=M[V];if(B||(B=M[V]=[],B.index=V,B.value="",B.parents={}),B.indexOf(F)===-1){F.choices&&!B.choices&&(B.choices=F.choices),B.push(F);var te=T.indexOf(F,q+1);if(te!==-1){var ne=T.slice(q+1,te),xe=ne.some(function(we){return typeof we=="object"});xe&&!B.value?B.value=ne:ne.length&&(!B.value||typeof B.value!="string")&&(B.value=ne.join(""))}}}}),M.forEach(function(F){F.length=0});for(var O={},L=0;L<T.length;L++){var I=T[L];if(typeof I=="object"){var N=I.tabstopId,P=M[N],K=T.indexOf(I,L+1);if(O[N]){O[N]===I&&(delete O[N],Object.keys(O).forEach(function(F){P.parents[F]=!0}));continue}O[N]=I;var U=P.value;typeof U!="string"?U=p(U):I.fmt&&(U=this.tmStrFormat(U,I,d)),T.splice.apply(T,[L+1,Math.max(0,K-L)].concat(U,I)),P.indexOf(I)===-1&&P.push(I)}}var X=0,ee=0,he="";return T.forEach(function(F){if(typeof F=="string"){var q=F.split(`
`);q.length>1?(ee=q[q.length-1].length,X+=q.length-1):ee+=F.length,he+=F}else F&&(F.start?F.end={row:X,column:ee}:F.start={row:X,column:ee})}),{text:he,tabstops:M,tokens:T}},s=function(){function d(i){if(this.index=0,this.ranges=[],this.tabstops=[],i.tabstopManager)return i.tabstopManager;i.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=h.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(i)}return d.prototype.attach=function(i){this.$openTabstops=null,this.selectedTabstop=null,this.editor=i,this.session=i.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},d.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},d.prototype.onChange=function(i){for(var r=i.action[0]=="r",p=this.selectedTabstop||{},c=p.parents||{},m=this.tabstops.slice(),v=0;v<m.length;v++){var w=m[v],T=w==p||c[w.index];if(w.rangeList.$bias=T?0:1,i.action=="remove"&&w!==p){var M=w.parents&&w.parents[p.index],O=w.rangeList.pointIndex(i.start,M);O=O<0?-O-1:O+1;var L=w.rangeList.pointIndex(i.end,M);L=L<0?-L-1:L-1;for(var I=w.rangeList.ranges.slice(O,L),N=0;N<I.length;N++)this.removeRange(I[N])}w.rangeList.$onChange(i)}var P=this.session;!this.$inChange&&r&&P.getLength()==1&&!P.getValue()&&this.detach()},d.prototype.updateLinkedFields=function(){var i=this.selectedTabstop;if(!(!i||!i.hasLinkedRanges||!i.firstNonLinked)){this.$inChange=!0;for(var r=this.session,p=r.getTextRange(i.firstNonLinked),c=0;c<i.length;c++){var m=i[c];if(m.linked){var v=m.original,w=l.snippetManager.tmStrFormat(p,v,this.editor);r.replace(m,w)}}this.$inChange=!1}},d.prototype.onAfterExec=function(i){i.command&&!i.command.readOnly&&this.updateLinkedFields()},d.prototype.onChangeSelection=function(){if(this.editor){for(var i=this.editor.selection.lead,r=this.editor.selection.anchor,p=this.editor.selection.isEmpty(),c=0;c<this.ranges.length;c++)if(!this.ranges[c].linked){var m=this.ranges[c].contains(i.row,i.column),v=p||this.ranges[c].contains(r.row,r.column);if(m&&v)return}this.detach()}},d.prototype.onChangeSession=function(){this.detach()},d.prototype.tabNext=function(i){var r=this.tabstops.length,p=this.index+(i||1);p=Math.min(Math.max(p,1),r),p==r&&(p=0),this.selectTabstop(p),p===0&&this.detach()},d.prototype.selectTabstop=function(i){this.$openTabstops=null;var r=this.tabstops[this.index];if(r&&this.addTabstopMarkers(r),this.index=i,r=this.tabstops[this.index],!(!r||!r.length)){this.selectedTabstop=r;var p=r.firstNonLinked||r;if(r.choices&&(p.cursor=p.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(p);else{var c=this.editor.multiSelect;c.toSingleRange(p);for(var m=0;m<r.length;m++)r.hasLinkedRanges&&r[m].linked||c.addRange(r[m].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},d.prototype.addTabstops=function(i,r,p){var c=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!i[0]){var m=n.fromPoints(p,p);A(m.start,r),A(m.end,r),i[0]=[m],i[0].index=0}var v=this.index,w=[v+1,0],T=this.ranges;i.forEach(function(M,O){for(var L=this.$openTabstops[O]||M,I=0;I<M.length;I++){var N=M[I],P=n.fromPoints(N.start,N.end||N.start);k(P.start,r),k(P.end,r),P.original=N,P.tabstop=L,T.push(P),L!=M?L.unshift(P):L[I]=P,N.fmtString||L.firstNonLinked&&c?(P.linked=!0,L.hasLinkedRanges=!0):L.firstNonLinked||(L.firstNonLinked=P)}L.firstNonLinked||(L.hasLinkedRanges=!1),L===M&&(w.push(L),this.$openTabstops[O]=L),this.addTabstopMarkers(L),L.rangeList=L.rangeList||new o,L.rangeList.$bias=0,L.rangeList.addList(L)},this),w.length>2&&(this.tabstops.length&&w.push(w.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,w))},d.prototype.addTabstopMarkers=function(i){var r=this.session;i.forEach(function(p){p.markerId||(p.markerId=r.addMarker(p,"ace_snippet-marker","text"))})},d.prototype.removeTabstopMarkers=function(i){var r=this.session;i.forEach(function(p){r.removeMarker(p.markerId),p.markerId=null})},d.prototype.removeRange=function(i){var r=i.tabstop.indexOf(i);r!=-1&&i.tabstop.splice(r,1),r=this.ranges.indexOf(i),r!=-1&&this.ranges.splice(r,1),r=i.tabstop.rangeList.ranges.indexOf(i),r!=-1&&i.tabstop.splice(r,1),this.session.removeMarker(i.markerId),i.tabstop.length||(r=this.tabstops.indexOf(i.tabstop),r!=-1&&this.tabstops.splice(r,1),this.tabstops.length||this.detach())},d}();s.prototype.keyboardHandler=new b,s.prototype.keyboardHandler.bindKeys({Tab:function(d){l.snippetManager&&l.snippetManager.expandWithTab(d)||(d.tabstopManager.tabNext(1),d.renderer.scrollCursorIntoView())},"Shift-Tab":function(d){d.tabstopManager.tabNext(-1),d.renderer.scrollCursorIntoView()},Esc:function(d){d.tabstopManager.detach()}});var k=function(d,i){d.row==0&&(d.column+=i.column),d.row+=i.row},A=function(d,i){d.row==i.row&&(d.column-=i.column),d.row-=i.row};a.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),l.snippetManager=new y;var R=t("./editor").Editor;(function(){this.insertSnippet=function(d,i){return l.snippetManager.insertSnippet(this,d,i)},this.expandSnippet=function(d){return l.snippetManager.expandWithTab(this,d)}}).call(R.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config"],function(t,l,$){var e=t("../virtual_renderer").VirtualRenderer,a=t("../editor").Editor,u=t("../range").Range,f=t("../lib/event"),h=t("../lib/lang"),n=t("../lib/dom"),o=t("../config").nls,b=function(E){return"suggest-aria-id:".concat(E)},x=function(E){var y=new e(E);y.$maxLines=4;var S=new a(y);return S.setHighlightActiveLine(!1),S.setShowPrintMargin(!1),S.renderer.setShowGutter(!1),S.renderer.setHighlightGutterLine(!1),S.$mouseHandler.$focusTimeout=0,S.$highlightTagPending=!0,S},C=function(){function E(y){var S=n.createElement("div"),s=new x(S);y&&y.appendChild(S),S.style.display="none",s.renderer.content.style.cursor="default",s.renderer.setStyle("ace_autocomplete"),s.renderer.$textLayer.element.setAttribute("role","listbox"),s.renderer.$textLayer.element.setAttribute("aria-label",o("Autocomplete suggestions")),s.renderer.textarea.setAttribute("aria-hidden","true"),s.setOption("displayIndentGuides",!1),s.setOption("dragDelay",150);var k=function(){};s.focus=k,s.$isFocused=!0,s.renderer.$cursorLayer.restartTimer=k,s.renderer.$cursorLayer.element.style.opacity=0,s.renderer.$maxLines=8,s.renderer.$keepTextAreaAtCursor=!1,s.setHighlightActiveLine(!1),s.session.highlight(""),s.session.$searchHighlight.clazz="ace_highlight-marker",s.on("mousedown",function(c){var m=c.getDocumentPosition();s.selection.moveToPosition(m),d.start.row=d.end.row=m.row,c.stop()});var A,R=new u(-1,0,-1,1/0),d=new u(-1,0,-1,1/0);d.id=s.session.addMarker(d,"ace_active-line","fullLine"),s.setSelectOnHover=function(c){c?R.id&&(s.session.removeMarker(R.id),R.id=null):R.id=s.session.addMarker(R,"ace_line-hover","fullLine")},s.setSelectOnHover(!1),s.on("mousemove",function(c){if(!A){A=c;return}if(!(A.x==c.x&&A.y==c.y)){A=c,A.scrollTop=s.renderer.scrollTop;var m=A.getDocumentPosition().row;R.start.row!=m&&(R.id||s.setRow(m),r(m))}}),s.renderer.on("beforeRender",function(){if(A&&R.start.row!=-1){A.$pos=null;var c=A.getDocumentPosition().row;R.id||s.setRow(c),r(c,!0)}}),s.renderer.on("afterRender",function(){var c=s.getRow(),m=s.renderer.$textLayer,v=m.element.childNodes[c-m.config.firstRow],w=document.activeElement;if(v!==m.selectedNode&&m.selectedNode&&(n.removeCssClass(m.selectedNode,"ace_selected"),w.removeAttribute("aria-activedescendant"),m.selectedNode.removeAttribute("id")),m.selectedNode=v,v){n.addCssClass(v,"ace_selected");var T=b(c);v.id=T,m.element.setAttribute("aria-activedescendant",T),w.setAttribute("aria-activedescendant",T),v.setAttribute("role","option"),v.setAttribute("aria-label",s.getData(c).value),v.setAttribute("aria-setsize",s.data.length),v.setAttribute("aria-posinset",c+1),v.setAttribute("aria-describedby","doc-tooltip")}});var i=function(){r(-1)},r=function(c,m){c!==R.start.row&&(R.start.row=R.end.row=c,m||s.session._emit("changeBackMarker"),s._emit("changeHoverMarker"))};s.getHoveredRow=function(){return R.start.row},f.addListener(s.container,"mouseout",i),s.on("hide",i),s.on("changeSelection",i),s.session.doc.getLength=function(){return s.data.length},s.session.doc.getLine=function(c){var m=s.data[c];return typeof m=="string"?m:m&&m.value||""};var p=s.session.bgTokenizer;return p.$tokenizeRow=function(c){function m(U,X){U&&w.push({type:(v.className||"")+(X||""),value:U})}var v=s.data[c],w=[];if(!v)return w;typeof v=="string"&&(v={value:v});for(var T=v.caption||v.value||v.name,M=T.toLowerCase(),O=(s.filterText||"").toLowerCase(),L=0,I=0,N=0;N<=O.length;N++)if(N!=I&&(v.matchMask&1<<N||N==O.length)){var P=O.slice(I,N);I=N;var K=M.indexOf(P,L);if(K==-1)continue;m(T.slice(L,K),""),L=K+P.length,m(T.slice(K,L),"completion-highlight")}return m(T.slice(L,T.length),""),w.push({type:"completion-spacer",value:" "}),v.meta&&w.push({type:"completion-meta",value:v.meta}),v.message&&w.push({type:"completion-message",value:v.message}),w},p.$updateOnChange=k,p.start=k,s.session.$computeWidth=function(){return this.screenWidth=0},s.isOpen=!1,s.isTopdown=!1,s.autoSelect=!0,s.filterText="",s.data=[],s.setData=function(c,m){s.filterText=m||"",s.setValue(h.stringRepeat(`
`,c.length),-1),s.data=c||[],s.setRow(0)},s.getData=function(c){return s.data[c]},s.getRow=function(){return d.start.row},s.setRow=function(c){c=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,c)),d.start.row!=c&&(s.selection.clearSelection(),d.start.row=d.end.row=c||0,s.session._emit("changeBackMarker"),s.moveCursorTo(c||0,0),s.isOpen&&s._signal("select"))},s.on("changeSelection",function(){s.isOpen&&s.setRow(s.selection.lead.row),s.renderer.scrollCursorIntoView()}),s.hide=function(){this.container.style.display="none",s.anchorPos=null,s.anchor=null,s.isOpen&&(s.isOpen=!1,this._signal("hide"))},s.tryShow=function(c,m,v,w){if(!w&&s.isOpen&&s.anchorPos&&s.anchor&&s.anchorPos.top===c.top&&s.anchorPos.left===c.left&&s.anchor===v)return!0;var T=this.container,M=window.innerHeight,O=window.innerWidth,L=this.renderer,I=L.$maxLines*m*1.4,N={top:0,bottom:0,left:0},P=M-c.top-3*this.$borderSize-m,K=c.top-3*this.$borderSize;v||(K<=P||P>=I?v="bottom":v="top"),v==="top"?(N.bottom=c.top-this.$borderSize,N.top=N.bottom-I):v==="bottom"&&(N.top=c.top+m+this.$borderSize,N.bottom=N.top+I);var U=N.top>=0&&N.bottom<=M;if(!w&&!U)return!1;U?L.$maxPixelHeight=null:v==="top"?L.$maxPixelHeight=K:L.$maxPixelHeight=P,v==="top"?(T.style.top="",T.style.bottom=M-N.bottom+"px",s.isTopdown=!1):(T.style.top=N.top+"px",T.style.bottom="",s.isTopdown=!0),T.style.display="";var X=c.left;return X+T.offsetWidth>O&&(X=O-T.offsetWidth),T.style.left=X+"px",T.style.right="",s.isOpen||(s.isOpen=!0,this._signal("show"),A=null),s.anchorPos=c,s.anchor=v,!0},s.show=function(c,m,v){this.tryShow(c,m,v?"bottom":void 0,!0)},s.goTo=function(c){var m=this.getRow(),v=this.session.getLength()-1;switch(c){case"up":m=m<=0?v:m-1;break;case"down":m=m>=v?-1:m+1;break;case"start":m=0;break;case"end":m=v}this.setRow(m)},s.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},s.$imageSize=0,s.$borderSize=1,s}return E}();n.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin-left: 0.9em;
}
.ace_completion-message {
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}
.ace_autocomplete .ace_text-layer  {
    width: calc(100% - 8px);
}
.ace_autocomplete .ace_line {
    display: flex;
    align-items: center;
}
.ace_autocomplete .ace_line > * {
    min-width: 0;
    flex: 0 0 auto;
}
.ace_autocomplete .ace_line .ace_ {
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ace_autocomplete .ace_completion-spacer {
    flex: 1;
}
`,"autocompletion.css",!1),l.AcePopup=C,l.$singleLineEditor=x,l.getAriaId=b}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets"],function(t,l,$){var e=t("../snippets").snippetManager,a=function(){function u(){this.editor=null}return u.prototype.show=function(f,h,n){if(n=n||"",f&&this.editor&&this.editor!==f&&(this.hide(),this.editor=null),!f||!h)return!1;var o=h.snippet?e.getDisplayTextForSnippet(f,h.snippet):h.value;return!o||!o.startsWith(n)?!1:(this.editor=f,o=o.slice(n.length),o===""?f.removeGhostText():f.setGhostText(o),!0)},u.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},u.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},u.prototype.destroy=function(){this.hide(),this.editor=null},u}();l.AceInline=a}),ace.define("ace/autocomplete/util",["require","exports","module"],function(t,l,$){l.parForEach=function(a,u,f){var h=0,n=a.length;n===0&&f();for(var o=0;o<n;o++)u(a[o],function(b,x){h++,h===n&&f(b,x)})};var e=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;l.retrievePrecedingIdentifier=function(a,u,f){f=f||e;for(var h=[],n=u-1;n>=0&&f.test(a[n]);n--)h.push(a[n]);return h.reverse().join("")},l.retrieveFollowingIdentifier=function(a,u,f){f=f||e;for(var h=[],n=u;n<a.length&&f.test(a[n]);n++)h.push(a[n]);return h},l.getCompletionPrefix=function(a){var u=a.getCursorPosition(),f=a.session.getLine(u.row),h;return a.completers.forEach(function(n){n.identifierRegexps&&n.identifierRegexps.forEach(function(o){!h&&o&&(h=this.retrievePrecedingIdentifier(f,u.column,o))}.bind(this))}.bind(this)),h||this.retrievePrecedingIdentifier(f,u.column)},l.triggerAutocomplete=function(a){var u=a.getCursorPosition(),f=a.session.getLine(u.row),h=u.column===0?0:u.column-1,n=f[h];return a.completers.some(function(o){if(o.triggerCharacters&&Array.isArray(o.triggerCharacters))return o.triggerCharacters.includes(n)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config"],function(t,l,$){var e=t("./keyboard/hash_handler").HashHandler,a=t("./autocomplete/popup").AcePopup,u=t("./autocomplete/inline").AceInline,f=t("./autocomplete/popup").getAriaId,h=t("./autocomplete/util"),n=t("./lib/lang"),o=t("./lib/dom"),b=t("./snippets").snippetManager,x=t("./config"),C=function(s,k){k.completer&&k.completer.destroy()},E=function(){function s(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new e,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=n.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=n.delayedCall(this.updateDocTooltip.bind(this),50)}return s.prototype.$init=function(){return this.popup=new a(this.parentNode||document.body||document.documentElement),this.popup.on("click",function(k){this.insertMatch(),k.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupChange.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},s.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new u,this.inlineRenderer},s.prototype.getPopup=function(){return this.popup||this.$init()},s.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip()},s.prototype.$onPopupChange=function(k){if(this.inlineRenderer&&this.inlineEnabled){var A=k?null:this.popup.getData(this.popup.getRow()),R=h.getCompletionPrefix(this.editor);this.inlineRenderer.show(this.editor,A,R)||this.inlineRenderer.hide(),this.$updatePopupPosition()}this.tooltipTimer.call(null,null)},s.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var k=this.editor.container.parentNode,A=[];k;)A.push(k),k.addEventListener("scroll",this.onLayoutChange,{passive:!0}),k=k.parentNode;this.$elements=A}},s.prototype.unObserveLayoutChanges=function(){var k=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(A){A.removeEventListener("scroll",k.onLayoutChange,{passive:!0})}),this.$elements=null},s.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},s.prototype.$updatePopupPosition=function(){var k=this.editor,A=k.renderer,R=A.layerConfig.lineHeight,d=A.$cursorLayer.getPixelPosition(this.base,!0);d.left-=this.popup.getTextLeftOffset();var i=k.container.getBoundingClientRect();d.top+=i.top-A.layerConfig.offset,d.left+=i.left-k.renderer.scrollLeft,d.left+=A.gutterWidth;var r={top:d.top,left:d.left};A.$ghostText&&A.$ghostTextWidget&&this.base.row===A.$ghostText.position.row&&(r.top+=A.$ghostTextWidget.el.offsetHeight),!this.popup.tryShow(r,R,"bottom")&&(this.popup.tryShow(d,R,"top")||this.popup.show(d,R))},s.prototype.openPopup=function(k,A,R){this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:f(this.popup.getRow()),inline:this.inlineEnabled}),k.keyBinding.addKeyboardHandler(this.keyboardHandler),this.popup.setRow(this.autoSelect?0:-1),R?R&&!A&&this.detach():(this.popup.setTheme(k.getTheme()),this.popup.setFontSize(k.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},s.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},s.prototype.changeListener=function(k){var A=this.editor.selection.lead;(A.row!=this.base.row||A.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},s.prototype.blurListener=function(k){var A=document.activeElement,R=this.editor.textInput.getElement(),d=k.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(k.relatedTarget),i=this.popup&&this.popup.container;A!=R&&A.parentNode!=i&&!d&&A!=this.tooltipNode&&k.relatedTarget!=R&&this.detach()},s.prototype.mousedownListener=function(k){this.detach()},s.prototype.mousewheelListener=function(k){this.detach()},s.prototype.goTo=function(k){this.popup.goTo(k)},s.prototype.insertMatch=function(k,A){if(k||(k=this.popup.getData(this.popup.getRow())),!k)return!1;if(k.value==="")return this.detach();var R=this.completions,d=this.getCompletionProvider().insertMatch(this.editor,k,R.filterText,A);return this.completions==R&&this.detach(),d},s.prototype.showPopup=function(k,A){this.editor&&this.detach(),this.activated=!0,this.editor=k,k.completer!=this&&(k.completer&&k.completer.detach(),k.completer=this),k.on("changeSelection",this.changeListener),k.on("blur",this.blurListener),k.on("mousedown",this.mousedownListener),k.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,A)},s.prototype.getCompletionProvider=function(){return this.completionProvider||(this.completionProvider=new y),this.completionProvider},s.prototype.gatherCompletions=function(k,A){return this.getCompletionProvider().gatherCompletions(k,A)},s.prototype.updateCompletions=function(k,A){if(k&&this.base&&this.completions){var d=this.editor.getCursorPosition(),i=this.editor.session.getTextRange({start:this.base,end:d});if(i==this.completions.filterText)return;if(this.completions.setFilter(i),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==i&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,i,k);return}if(A&&A.matches){var d=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(d.row,d.column),this.base.$insertRight=!0,this.completions=new S(A.matches),this.openPopup(this.editor,"",k)}var R=this.editor.getSession(),d=this.editor.getCursorPosition(),i=h.getCompletionPrefix(this.editor);this.base=R.doc.createAnchor(d.row,d.column-i.length),this.base.$insertRight=!0;var r={exactMatch:this.exactMatch};this.getCompletionProvider().provideCompletions(this.editor,r,function(p,c,m){var v=c.filtered,w=h.getCompletionPrefix(this.editor);if(m){if(!v.length){var T=!this.autoShown&&this.emptyMessage;if(typeof T=="function"&&(T=this.emptyMessage(w)),T){var M=[{caption:this.emptyMessage(w),value:""}];this.completions=new S(M),this.openPopup(this.editor,w,k);return}return this.detach()}if(v.length==1&&v[0].value==w&&!v[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&v.length==1)return this.insertMatch(v[0])}this.completions=c,this.openPopup(this.editor,w,k)}.bind(this))},s.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},s.prototype.updateDocTooltip=function(){var k=this.popup,A=k.data,R=A&&(A[k.getHoveredRow()]||A[k.getRow()]),d=null;if(!R||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var i=this.editor.completers.length,r=0;r<i;r++){var p=this.editor.completers[r];if(p.getDocTooltip&&R.completerId===p.id){d=p.getDocTooltip(R);break}}if(!d&&typeof R!="string"&&(d=R),typeof d=="string"&&(d={docText:d}),!d||!d.docHTML&&!d.docText)return this.hideDocTooltip();this.showDocTooltip(d)},s.prototype.showDocTooltip=function(k){this.tooltipNode||(this.tooltipNode=o.createElement("div"),this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"));var A=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(A.isDark?"ace_dark ":"")+(A.cssClass||"");var R=this.tooltipNode;k.docHTML?R.innerHTML=k.docHTML:k.docText&&(R.textContent=k.docText),R.parentNode||this.popup.container.appendChild(this.tooltipNode);var d=this.popup,i=d.container.getBoundingClientRect();R.style.top=d.container.style.top,R.style.bottom=d.container.style.bottom,R.style.display="block",window.innerWidth-i.right<320?i.left<320?d.isTopdown?(R.style.top=i.bottom+"px",R.style.left=i.left+"px",R.style.right="",R.style.bottom=""):(R.style.top=d.container.offsetTop-R.offsetHeight+"px",R.style.left=i.left+"px",R.style.right="",R.style.bottom=""):(R.style.right=window.innerWidth-i.left+"px",R.style.left=""):(R.style.left=i.right+1+"px",R.style.right="")},s.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var k=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==k&&this.editor.focus(),this.tooltipNode=null,k.parentNode&&k.parentNode.removeChild(k)}},s.prototype.onTooltipClick=function(k){for(var A=k.target;A&&A!=this.tooltipNode;){if(A.nodeName=="A"&&A.href){A.rel="noreferrer",A.target="_blank";break}A=A.parentNode}},s.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var k=this.popup.container;k&&k.parentNode&&k.parentNode.removeChild(k)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",C),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},s}();E.prototype.commands={Up:function(s){s.completer.goTo("up")},Down:function(s){s.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(s){s.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(s){s.completer.goTo("end")},Esc:function(s){s.completer.detach()},Return:function(s){return s.completer.insertMatch()},"Shift-Return":function(s){s.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(s){var k=s.completer.insertMatch();if(k||s.tabstopManager)return k;s.completer.goTo("down")},PageUp:function(s){s.completer.popup.gotoPageUp()},PageDown:function(s){s.completer.popup.gotoPageDown()}},E.for=function(s){return s.completer instanceof E||(s.completer&&(s.completer.destroy(),s.completer=null),x.get("sharedPopups")?(E.$sharedInstance||(E.$sharedInstance=new E),s.completer=E.$sharedInstance):(s.completer=new E,s.once("destroy",C))),s.completer},E.startCommand={name:"startAutocomplete",exec:function(s,k){var A=E.for(s);A.autoInsert=!1,A.autoSelect=!0,A.autoShown=!1,A.showPopup(s,k),A.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var y=function(){function s(){this.active=!0}return s.prototype.insertByIndex=function(k,A,R){return!this.completions||!this.completions.filtered?!1:this.insertMatch(k,this.completions.filtered[A],R)},s.prototype.insertMatch=function(k,A,R){if(!A)return!1;if(k.startOperation({command:{name:"insertMatch"}}),A.completer&&A.completer.insertMatch)A.completer.insertMatch(k,A);else{if(!this.completions)return!1;if(this.completions.filterText&&!A.range){var d;k.selection.getAllRanges?d=k.selection.getAllRanges():d=[k.getSelectionRange()];for(var i=0,r;r=d[i];i++)r.start.column-=this.completions.filterText.length,k.session.remove(r)}A.snippet?b.insertSnippet(k,A.snippet,{range:A.range}):this.$insertString(k,A),A.command&&A.command==="startAutocomplete"&&k.execCommand(A.command)}return k.endOperation(),!0},s.prototype.$insertString=function(k,A){var R=A.value||A;if(A.range){if(k.inVirtualSelectionMode)return k.session.replace(A.range,R);k.forEachSelection(function(){var d=k.getSelectionRange();A.range.compareRange(d)===0?k.session.replace(A.range,R):k.insert(R)},null,{keepOrder:!0})}else k.execCommand("insertstring",R)},s.prototype.gatherCompletions=function(k,A){var R=k.getSession(),d=k.getCursorPosition(),i=h.getCompletionPrefix(k),r=[];this.completers=k.completers;var p=k.completers.length;return k.completers.forEach(function(c,m){c.getCompletions(k,R,d,i,function(v,w){!v&&w&&(r=r.concat(w)),A(null,{prefix:h.getCompletionPrefix(k),matches:r,finished:--p===0})})}),!0},s.prototype.provideCompletions=function(k,A,R){var d=function(c){var m=c.prefix,v=c.matches;this.completions=new S(v),A.exactMatch&&(this.completions.exactMatch=!0),A.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter(m),(c.finished||this.completions.filtered.length)&&R(null,this.completions,c.finished)}.bind(this),i=!0,r=null;if(this.gatherCompletions(k,function(c,m){if(this.active){c&&(R(c,[],!0),this.detach());var v=m.prefix;if(v.indexOf(m.prefix)===0){if(i){r=m;return}d(m)}}}.bind(this)),i=!1,r){var p=r;r=null,d(p)}},s.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(k){typeof k.cancel=="function"&&k.cancel()})},s}(),S=function(){function s(k,A){this.all=k,this.filtered=k,this.filterText=A||"",this.exactMatch=!1,this.ignoreCaption=!1}return s.prototype.setFilter=function(k){if(k.length>this.filterText&&k.lastIndexOf(this.filterText,0)===0)var A=this.filtered;else var A=this.all;this.filterText=k,A=this.filterCompletions(A,this.filterText),A=A.sort(function(d,i){return i.exactMatch-d.exactMatch||i.$score-d.$score||(d.caption||d.value).localeCompare(i.caption||i.value)});var R=null;A=A.filter(function(d){var i=d.snippet||d.caption||d.value;return i===R?!1:(R=i,!0)}),this.filtered=A},s.prototype.filterCompletions=function(k,A){var R=[],d=A.toUpperCase(),i=A.toLowerCase();e:for(var r=0,p;p=k[r];r++){var c=!this.ignoreCaption&&p.caption||p.value||p.snippet;if(c){var m=-1,v=0,w=0,T,M;if(this.exactMatch){if(A!==c.substr(0,A.length))continue e}else{var O=c.toLowerCase().indexOf(i);if(O>-1)w=O;else for(var L=0;L<A.length;L++){var I=c.indexOf(i[L],m+1),N=c.indexOf(d[L],m+1);if(T=I>=0&&(N<0||I<N)?I:N,T<0)continue e;M=T-m-1,M>0&&(m===-1&&(w+=10),w+=M,v|=1<<L),m=T}}p.matchMask=v,p.exactMatch=w?0:1,p.$score=(p.score||0)-w,R.push(p)}}return R},s}();l.Autocomplete=E,l.CompletionProvider=y,l.FilteredList=S}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(t,l,$){function e(h,n){var o=h.getTextRange(u.fromPoints({row:0,column:0},n));return o.split(f).length-1}function a(h,n){var o=e(h,n),b=h.getValue().split(f),x=Object.create(null),C=b[o];return b.forEach(function(E,y){if(!(!E||E===C)){var S=Math.abs(o-y),s=b.length-S;x[E]?x[E]=Math.max(s,x[E]):x[E]=s}}),x}var u=t("../range").Range,f=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;l.getCompletions=function(h,n,o,b,x){var C=a(n,o),E=Object.keys(C);x(null,E.map(function(y){return{caption:y,value:y,score:C[y],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(t,l,$){var e=t("../snippets").snippetManager,a=t("../autocomplete").Autocomplete,u=t("../config"),f=t("../lib/lang"),h=t("../autocomplete/util"),n=t("../autocomplete/text_completer"),o={getCompletions:function(r,p,c,m,v){if(p.$mode.completer)return p.$mode.completer.getCompletions(r,p,c,m,v);var w=r.session.getState(c.row),T=p.$mode.getCompletions(w,p,c,m);T=T.map(function(M){return M.completerId=o.id,M}),v(null,T)},id:"keywordCompleter"},b=function(r){var p={};return r.replace(/\${(\d+)(:(.*?))?}/g,function(c,m,v,w){return p[m]=w||""}).replace(/\$(\d+?)/g,function(c,m){return p[m]})},x={getCompletions:function(r,p,c,m,v){var w=[],T=p.getTokenAt(c.row,c.column);T&&T.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?w.push("html-tag"):w=e.getActiveScopes(r);var M=e.snippetMap,O=[];w.forEach(function(L){for(var I=M[L]||[],N=I.length;N--;){var P=I[N],K=P.name||P.tabTrigger;K&&O.push({caption:K,snippet:P.content,meta:P.tabTrigger&&!P.name?P.tabTrigger+"⇥ ":"snippet",completerId:x.id})}},this),v(null,O)},getDocTooltip:function(r){r.snippet&&!r.docHTML&&(r.docHTML=["<b>",f.escapeHTML(r.caption),"</b>","<hr></hr>",f.escapeHTML(b(r.snippet))].join(""))},id:"snippetCompleter"},C=[x,n,o];l.setCompleters=function(r){C.length=0,r&&C.push.apply(C,r)},l.addCompleter=function(r){C.push(r)},l.textCompleter=n,l.keyWordCompleter=o,l.snippetCompleter=x;var E={name:"expandSnippet",exec:function(r){return e.expandWithTab(r)},bindKey:"Tab"},y=function(r,p){S(p.session.$mode)},S=function(r){typeof r=="string"&&(r=u.$modes[r]),r&&(e.files||(e.files={}),s(r.$id,r.snippetFileId),r.modes&&r.modes.forEach(S))},s=function(r,p){!p||!r||e.files[r]||(e.files[r]={},u.loadModule(p,function(c){c&&(e.files[r]=c,!c.snippets&&c.snippetText&&(c.snippets=e.parseSnippetFile(c.snippetText)),e.register(c.snippets||[],c.scope),c.includeScopes&&(e.snippetMap[c.scope].includeScopes=c.includeScopes,c.includeScopes.forEach(function(m){S("ace/mode/"+m)})))}))},k=function(r){var p=r.editor,c=p.completer&&p.completer.activated;if(r.command.name==="backspace")c&&!h.getCompletionPrefix(p)&&p.completer.detach();else if(r.command.name==="insertstring"&&!c){A=r;var m=r.editor.$liveAutocompletionDelay;m?R.delay(m):d(r)}},A,R=f.delayedCall(function(){d(A)},0),d=function(r){var p=r.editor,c=h.getCompletionPrefix(p),m=h.triggerAutocomplete(p);if((c||m)&&c.length>=p.$liveAutocompletionThreshold){var v=a.for(p);v.autoShown=!0,v.showPopup(p)}},i=t("../editor").Editor;t("../config").defineOptions(i.prototype,"editor",{enableBasicAutocompletion:{set:function(r){r?(this.completers||(this.completers=Array.isArray(r)?r:C),this.commands.addCommand(a.startCommand)):this.commands.removeCommand(a.startCommand)},value:!1},enableLiveAutocompletion:{set:function(r){r?(this.completers||(this.completers=Array.isArray(r)?r:C),this.commands.on("afterExec",k)):this.commands.off("afterExec",k)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(r){r?(this.commands.addCommand(E),this.on("changeMode",y),y(null,this)):(this.commands.removeCommand(E),this.off("changeMode",y))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(t){_&&(_.exports=t)})}()})(Ht);var qt={exports:{}};(function(_,g){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(t,l,$){$.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(t,l,$){var e=t("../lib/dom"),a=t("../lib/lang"),u=t("../lib/event"),f=t("./searchbox-css"),h=t("../keyboard/hash_handler").HashHandler,n=t("../lib/keys"),o=t("../config").nls,b=999;e.importCssString(f,"ace_searchbox",!1);var x=function(){function y(S,s,k){var A=e.createElement("div");e.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:o("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},o("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:o("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},o("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},o("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:o("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:o("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:o("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:o("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:o("Search In Selection")},"S"]]],A),this.element=A.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(S),e.importCssString(f,"ace_searchbox",S.container)}return y.prototype.setEditor=function(S){S.searchBox=this,S.renderer.scroller.appendChild(this.element),this.editor=S},y.prototype.setSession=function(S){this.searchRange=null,this.$syncOptions(!0)},y.prototype.$initElements=function(S){this.searchBox=S.querySelector(".ace_search_form"),this.replaceBox=S.querySelector(".ace_replace_form"),this.searchOption=S.querySelector("[action=searchInSelection]"),this.replaceOption=S.querySelector("[action=toggleReplace]"),this.regExpOption=S.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=S.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=S.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=S.querySelector(".ace_search_counter")},y.prototype.$init=function(){var S=this.element;this.$initElements(S);var s=this;u.addListener(S,"mousedown",function(k){setTimeout(function(){s.activeInput.focus()},0),u.stopPropagation(k)}),u.addListener(S,"click",function(k){var A=k.target||k.srcElement,R=A.getAttribute("action");R&&s[R]?s[R]():s.$searchBarKb.commands[R]&&s.$searchBarKb.commands[R].exec(s),u.stopPropagation(k)}),u.addCommandKeyListener(S,function(k,A,R){var d=n.keyCodeToString(R),i=s.$searchBarKb.findKeyCommand(A,d);i&&i.exec&&(i.exec(s),u.stopEvent(k))}),this.$onChange=a.delayedCall(function(){s.find(!1,!1)}),u.addListener(this.searchInput,"input",function(){s.$onChange.schedule(20)}),u.addListener(this.searchInput,"focus",function(){s.activeInput=s.searchInput,s.searchInput.value&&s.highlight()}),u.addListener(this.replaceInput,"focus",function(){s.activeInput=s.replaceInput,s.searchInput.value&&s.highlight()})},y.prototype.setSearchRange=function(S){this.searchRange=S,S?this.searchRangeMarker=this.editor.session.addMarker(S,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},y.prototype.$syncOptions=function(S){e.setCssClass(this.replaceOption,"checked",this.searchRange),e.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",e.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),e.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),e.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var s=this.editor.getReadOnly();this.replaceOption.style.display=s?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!s?"":"none",this.find(!1,!1,S)},y.prototype.highlight=function(S){this.editor.session.highlight(S||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},y.prototype.find=function(S,s,k){var A=this.editor.find(this.searchInput.value,{skipCurrent:S,backwards:s,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:k,range:this.searchRange}),R=!A&&this.searchInput.value;e.setCssClass(this.searchBox,"ace_nomatch",R),this.editor._emit("findSearchBox",{match:!R}),this.highlight(),this.updateCounter()},y.prototype.updateCounter=function(){var S=this.editor,s=S.$search.$options.re,k=0,A=0;if(s){var R=this.searchRange?S.session.getTextRange(this.searchRange):S.getValue(),d=S.session.doc.positionToIndex(S.selection.anchor);this.searchRange&&(d-=S.session.doc.positionToIndex(this.searchRange.start));for(var i=s.lastIndex=0,r;(r=s.exec(R))&&(k++,i=r.index,i<=d&&A++,!(k>b||!r[0]&&(s.lastIndex=i+=1,i>=R.length))););}this.searchCounter.textContent=o("$0 of $1",[A,k>b?b+"+":k])},y.prototype.findNext=function(){this.find(!0,!1)},y.prototype.findPrev=function(){this.find(!0,!0)},y.prototype.findAll=function(){var S=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),s=!S&&this.searchInput.value;e.setCssClass(this.searchBox,"ace_nomatch",s),this.editor._emit("findSearchBox",{match:!s}),this.highlight(),this.hide()},y.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},y.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},y.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},y.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},y.prototype.show=function(S,s){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=s,S&&(this.searchInput.value=S),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},y.prototype.isFocused=function(){var S=document.activeElement;return S==this.searchInput||S==this.replaceInput},y}(),C=new h;C.bindKeys({"Ctrl-f|Command-f":function(y){var S=y.isReplace=!y.isReplace;y.replaceBox.style.display=S?"":"none",y.replaceOption.checked=!1,y.$syncOptions(),y.searchInput.focus()},"Ctrl-H|Command-Option-F":function(y){y.editor.getReadOnly()||(y.replaceOption.checked=!0,y.$syncOptions(),y.replaceInput.focus())},"Ctrl-G|Command-G":function(y){y.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(y){y.findPrev()},esc:function(y){setTimeout(function(){y.hide()})},Return:function(y){y.activeInput==y.replaceInput&&y.replace(),y.findNext()},"Shift-Return":function(y){y.activeInput==y.replaceInput&&y.replace(),y.findPrev()},"Alt-Return":function(y){y.activeInput==y.replaceInput&&y.replaceAll(),y.findAll()},Tab:function(y){(y.activeInput==y.replaceInput?y.searchInput:y.replaceInput).focus()}}),C.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(y){y.regExpOption.checked=!y.regExpOption.checked,y.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(y){y.caseSensitiveOption.checked=!y.caseSensitiveOption.checked,y.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(y){y.wholeWordOption.checked=!y.wholeWordOption.checked,y.$syncOptions()}},{name:"toggleReplace",exec:function(y){y.replaceOption.checked=!y.replaceOption.checked,y.$syncOptions()}},{name:"searchInSelection",exec:function(y){y.searchOption.checked=!y.searchRange,y.setSearchRange(y.searchOption.checked&&y.editor.getSelectionRange()),y.$syncOptions()}}]);var E=new h([{bindKey:"Esc",name:"closeSearchBar",exec:function(y){y.searchBox.hide()}}]);x.prototype.$searchBarKb=C,x.prototype.$closeSearchBarKb=E,l.SearchBox=x,l.Search=function(y,S){var s=y.searchBox||new x(y);s.show(y.session.getTextRange(),S)}}),function(){ace.require(["ace/ext/searchbox"],function(t){_&&(_.exports=t)})}()})(qt);var le={},Re={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.getAceInstance=Z.debounce=Z.editorEvents=Z.editorOptions=void 0;var Ut=["minLines","maxLines","readOnly","highlightActiveLine","tabSize","enableBasicAutocompletion","enableLiveAutocompletion","enableSnippets"];Z.editorOptions=Ut;var Vt=["onChange","onFocus","onInput","onBlur","onCopy","onPaste","onSelectionChange","onCursorChange","onScroll","handleOptions","updateRef"];Z.editorEvents=Vt;var Wt=function(){var _;return typeof window=="undefined"?(W.window={},_=me,delete W.window):window.ace?(_=window.ace,_.acequire=window.ace.require||window.ace.acequire):_=me,_};Z.getAceInstance=Wt;var Gt=function(_,g){var t=null;return function(){var l=this,$=arguments;clearTimeout(t),t=setTimeout(function(){_.apply(l,$)},g)}};Z.debounce=Gt;var Kt=W&&W.__extends||function(){var _=function(g,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,$){l.__proto__=$}||function(l,$){for(var e in $)Object.prototype.hasOwnProperty.call($,e)&&(l[e]=$[e])},_(g,t)};return function(g,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");_(g,t);function l(){this.constructor=g}g.prototype=t===null?Object.create(t):(l.prototype=t.prototype,new l)}}(),Ae=W&&W.__assign||function(){return Ae=Object.assign||function(_){for(var g,t=1,l=arguments.length;t<l;t++){g=arguments[t];for(var $ in g)Object.prototype.hasOwnProperty.call(g,$)&&(_[$]=g[$])}return _},Ae.apply(this,arguments)};Object.defineProperty(Re,"__esModule",{value:!0});var Yt=me,z=Me,He=J,fe=Qe,ce=Z,qe=(0,ce.getAceInstance)(),Xt=function(_){Kt(g,_);function g(t){var l=_.call(this,t)||this;return ce.editorEvents.forEach(function($){l[$]=l[$].bind(l)}),l.debounce=ce.debounce,l}return g.prototype.isInShadow=function(t){for(var l=t&&t.parentNode;l;){if(l.toString()==="[object ShadowRoot]")return!0;l=l.parentNode}return!1},g.prototype.componentDidMount=function(){var t=this,l=this.props,$=l.className,e=l.onBeforeLoad,a=l.onValidate,u=l.mode,f=l.focus,h=l.theme,n=l.fontSize,o=l.value,b=l.defaultValue,x=l.showGutter,C=l.wrapEnabled,E=l.showPrintMargin,y=l.scrollMargin,S=y===void 0?[0,0,0,0]:y,s=l.keyboardHandler,k=l.onLoad,A=l.commands,R=l.annotations,d=l.markers,i=l.placeholder;this.editor=qe.edit(this.refEditor),e&&e(qe);for(var r=Object.keys(this.props.editorProps),p=0;p<r.length;p++)this.editor[r[p]]=this.props.editorProps[r[p]];this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),this.editor.renderer.setScrollMargin(S[0],S[1],S[2],S[3]),this.isInShadow(this.refEditor)&&this.editor.renderer.attachToShadowRoot(),this.editor.getSession().setMode(typeof u=="string"?"ace/mode/".concat(u):u),h&&h!==""&&this.editor.setTheme("ace/theme/".concat(h)),this.editor.setFontSize(typeof n=="number"?"".concat(n,"px"):n),this.editor.getSession().setValue(b||o||""),this.props.navigateToFileEnd&&this.editor.navigateFileEnd(),this.editor.renderer.setShowGutter(x),this.editor.getSession().setUseWrapMode(C),this.editor.setShowPrintMargin(E),this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("copy",this.onCopy),this.editor.on("paste",this.onPaste),this.editor.on("change",this.onChange),this.editor.on("input",this.onInput),i&&this.updatePlaceholder(),this.editor.getSession().selection.on("changeSelection",this.onSelectionChange),this.editor.getSession().selection.on("changeCursor",this.onCursorChange),a&&this.editor.getSession().on("changeAnnotation",function(){var m=t.editor.getSession().getAnnotations();t.props.onValidate(m)}),this.editor.session.on("changeScrollTop",this.onScroll),this.editor.getSession().setAnnotations(R||[]),d&&d.length>0&&this.handleMarkers(d);var c=this.editor.$options;ce.editorOptions.forEach(function(m){c.hasOwnProperty(m)?t.editor.setOption(m,t.props[m]):t.props[m]&&console.warn("ReactAce: editor option ".concat(m," was activated but not found. Did you need to import a related tool or did you possibly mispell the option?"))}),this.handleOptions(this.props),Array.isArray(A)&&A.forEach(function(m){typeof m.exec=="string"?t.editor.commands.bindKey(m.bindKey,m.exec):t.editor.commands.addCommand(m)}),s&&this.editor.setKeyboardHandler("ace/keyboard/"+s),$&&(this.refEditor.className+=" "+$),k&&k(this.editor),this.editor.resize(),f&&this.editor.focus()},g.prototype.componentDidUpdate=function(t){for(var l=t,$=this.props,e=0;e<ce.editorOptions.length;e++){var a=ce.editorOptions[e];$[a]!==l[a]&&this.editor.setOption(a,$[a])}if($.className!==l.className){var u=this.refEditor.className,f=u.trim().split(" "),h=l.className.trim().split(" ");h.forEach(function(b){var x=f.indexOf(b);f.splice(x,1)}),this.refEditor.className=" "+$.className+" "+f.join(" ")}var n=this.editor&&$.value!=null&&this.editor.getValue()!==$.value;if(n){this.silent=!0;var o=this.editor.session.selection.toJSON();this.editor.setValue($.value,$.cursorStart),this.editor.session.selection.fromJSON(o),this.silent=!1}$.placeholder!==l.placeholder&&this.updatePlaceholder(),$.mode!==l.mode&&this.editor.getSession().setMode(typeof $.mode=="string"?"ace/mode/".concat($.mode):$.mode),$.theme!==l.theme&&this.editor.setTheme("ace/theme/"+$.theme),$.keyboardHandler!==l.keyboardHandler&&($.keyboardHandler?this.editor.setKeyboardHandler("ace/keyboard/"+$.keyboardHandler):this.editor.setKeyboardHandler(null)),$.fontSize!==l.fontSize&&this.editor.setFontSize(typeof $.fontSize=="number"?"".concat($.fontSize,"px"):$.fontSize),$.wrapEnabled!==l.wrapEnabled&&this.editor.getSession().setUseWrapMode($.wrapEnabled),$.showPrintMargin!==l.showPrintMargin&&this.editor.setShowPrintMargin($.showPrintMargin),$.showGutter!==l.showGutter&&this.editor.renderer.setShowGutter($.showGutter),fe($.setOptions,l.setOptions)||this.handleOptions($),(n||!fe($.annotations,l.annotations))&&this.editor.getSession().setAnnotations($.annotations||[]),!fe($.markers,l.markers)&&Array.isArray($.markers)&&this.handleMarkers($.markers),fe($.scrollMargin,l.scrollMargin)||this.handleScrollMargins($.scrollMargin),(t.height!==this.props.height||t.width!==this.props.width)&&this.editor.resize(),this.props.focus&&!t.focus&&this.editor.focus()},g.prototype.handleScrollMargins=function(t){t===void 0&&(t=[0,0,0,0]),this.editor.renderer.setScrollMargin(t[0],t[1],t[2],t[3])},g.prototype.componentWillUnmount=function(){this.editor&&(this.editor.destroy(),this.editor=null)},g.prototype.onChange=function(t){if(this.props.onChange&&!this.silent){var l=this.editor.getValue();this.props.onChange(l,t)}},g.prototype.onSelectionChange=function(t){if(this.props.onSelectionChange){var l=this.editor.getSelection();this.props.onSelectionChange(l,t)}},g.prototype.onCursorChange=function(t){if(this.props.onCursorChange){var l=this.editor.getSelection();this.props.onCursorChange(l,t)}},g.prototype.onInput=function(t){this.props.onInput&&this.props.onInput(t),this.props.placeholder&&this.updatePlaceholder()},g.prototype.onFocus=function(t){this.props.onFocus&&this.props.onFocus(t,this.editor)},g.prototype.onBlur=function(t){this.props.onBlur&&this.props.onBlur(t,this.editor)},g.prototype.onCopy=function(t){var l=t.text;this.props.onCopy&&this.props.onCopy(l)},g.prototype.onPaste=function(t){var l=t.text;this.props.onPaste&&this.props.onPaste(l)},g.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},g.prototype.handleOptions=function(t){for(var l=Object.keys(t.setOptions),$=0;$<l.length;$++)this.editor.setOption(l[$],t.setOptions[l[$]])},g.prototype.handleMarkers=function(t){var l=this,$=this.editor.getSession().getMarkers(!0);for(var e in $)$.hasOwnProperty(e)&&this.editor.getSession().removeMarker($[e].id);$=this.editor.getSession().getMarkers(!1);for(var e in $)$.hasOwnProperty(e)&&$[e].clazz!=="ace_active-line"&&$[e].clazz!=="ace_selected-word"&&this.editor.getSession().removeMarker($[e].id);t.forEach(function(a){var u=a.startRow,f=a.startCol,h=a.endRow,n=a.endCol,o=a.className,b=a.type,x=a.inFront,C=x===void 0?!1:x,E=new Yt.Range(u,f,h,n);l.editor.getSession().addMarker(E,o,b,C)})},g.prototype.updatePlaceholder=function(){var t=this.editor,l=this.props.placeholder,$=!t.session.getValue().length,e=t.renderer.placeholderNode;!$&&e?(t.renderer.scroller.removeChild(t.renderer.placeholderNode),t.renderer.placeholderNode=null):$&&!e?(e=t.renderer.placeholderNode=document.createElement("div"),e.textContent=l||"",e.className="ace_comment ace_placeholder",e.style.padding="0 9px",e.style.position="absolute",e.style.zIndex="3",t.renderer.scroller.appendChild(e)):$&&e&&(e.textContent=l)},g.prototype.updateRef=function(t){this.refEditor=t},g.prototype.render=function(){var t=this.props,l=t.name,$=t.width,e=t.height,a=t.style,u=Ae({width:$,height:e},a);return He.createElement("div",{ref:this.updateRef,id:l,style:u})},g.propTypes={mode:z.oneOfType([z.string,z.object]),focus:z.bool,theme:z.string,name:z.string,className:z.string,height:z.string,width:z.string,fontSize:z.oneOfType([z.number,z.string]),showGutter:z.bool,onChange:z.func,onCopy:z.func,onPaste:z.func,onFocus:z.func,onInput:z.func,onBlur:z.func,onScroll:z.func,value:z.string,defaultValue:z.string,onLoad:z.func,onSelectionChange:z.func,onCursorChange:z.func,onBeforeLoad:z.func,onValidate:z.func,minLines:z.number,maxLines:z.number,readOnly:z.bool,highlightActiveLine:z.bool,tabSize:z.number,showPrintMargin:z.bool,cursorStart:z.number,debounceChangePeriod:z.number,editorProps:z.object,setOptions:z.object,style:z.object,scrollMargin:z.array,annotations:z.array,markers:z.array,keyboardHandler:z.string,wrapEnabled:z.bool,enableSnippets:z.bool,enableBasicAutocompletion:z.oneOfType([z.bool,z.array]),enableLiveAutocompletion:z.oneOfType([z.bool,z.array]),navigateToFileEnd:z.bool,commands:z.array,placeholder:z.string},g.defaultProps={name:"ace-editor",focus:!1,mode:"",theme:"",height:"500px",width:"500px",fontSize:12,enableSnippets:!1,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,placeholder:null,navigateToFileEnd:!0},g}(He.Component);Re.default=Xt;var Le={},be={},et={exports:{}};(function(_,g){ace.define("ace/split",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/editor","ace/virtual_renderer","ace/edit_session"],function(t,l,$){var e=t("./lib/oop");t("./lib/lang");var a=t("./lib/event_emitter").EventEmitter,u=t("./editor").Editor,f=t("./virtual_renderer").VirtualRenderer,h=t("./edit_session").EditSession,n=function(o,b,x){this.BELOW=1,this.BESIDE=0,this.$container=o,this.$theme=b,this.$splits=0,this.$editorCSS="",this.$editors=[],this.$orientation=this.BESIDE,this.setSplits(x||1),this.$cEditor=this.$editors[0],this.on("focus",function(C){this.$cEditor=C}.bind(this))};(function(){e.implement(this,a),this.$createEditor=function(){var o=document.createElement("div");o.className=this.$editorCSS,o.style.cssText="position: absolute; top:0px; bottom:0px",this.$container.appendChild(o);var b=new u(new f(o,this.$theme));return b.on("focus",function(){this._emit("focus",b)}.bind(this)),this.$editors.push(b),b.setFontSize(this.$fontSize),b},this.setSplits=function(o){var b;if(o<1)throw"The number of splits have to be > 0!";if(o!=this.$splits){if(o>this.$splits){for(;this.$splits<this.$editors.length&&this.$splits<o;)b=this.$editors[this.$splits],this.$container.appendChild(b.container),b.setFontSize(this.$fontSize),this.$splits++;for(;this.$splits<o;)this.$createEditor(),this.$splits++}else for(;this.$splits>o;)b=this.$editors[this.$splits-1],this.$container.removeChild(b.container),this.$splits--;this.resize()}},this.getSplits=function(){return this.$splits},this.getEditor=function(o){return this.$editors[o]},this.getCurrentEditor=function(){return this.$cEditor},this.focus=function(){this.$cEditor.focus()},this.blur=function(){this.$cEditor.blur()},this.setTheme=function(o){this.$editors.forEach(function(b){b.setTheme(o)})},this.setKeyboardHandler=function(o){this.$editors.forEach(function(b){b.setKeyboardHandler(o)})},this.forEach=function(o,b){this.$editors.forEach(o,b)},this.$fontSize="",this.setFontSize=function(o){this.$fontSize=o,this.forEach(function(b){b.setFontSize(o)})},this.$cloneSession=function(o){var b=new h(o.getDocument(),o.getMode()),x=o.getUndoManager();return b.setUndoManager(x),b.setTabSize(o.getTabSize()),b.setUseSoftTabs(o.getUseSoftTabs()),b.setOverwrite(o.getOverwrite()),b.setBreakpoints(o.getBreakpoints()),b.setUseWrapMode(o.getUseWrapMode()),b.setUseWorker(o.getUseWorker()),b.setWrapLimitRange(o.$wrapLimitRange.min,o.$wrapLimitRange.max),b.$foldData=o.$cloneFoldData(),b},this.setSession=function(o,b){var x;b==null?x=this.$cEditor:x=this.$editors[b];var C=this.$editors.some(function(E){return E.session===o});return C&&(o=this.$cloneSession(o)),x.setSession(o),o},this.getOrientation=function(){return this.$orientation},this.setOrientation=function(o){this.$orientation!=o&&(this.$orientation=o,this.resize())},this.resize=function(){var o=this.$container.clientWidth,b=this.$container.clientHeight,x;if(this.$orientation==this.BESIDE)for(var C=o/this.$splits,E=0;E<this.$splits;E++)x=this.$editors[E],x.container.style.width=C+"px",x.container.style.top="0px",x.container.style.left=E*C+"px",x.container.style.height=b+"px",x.resize();else for(var y=b/this.$splits,E=0;E<this.$splits;E++)x=this.$editors[E],x.container.style.width=o+"px",x.container.style.top=E*y+"px",x.container.style.left="0px",x.container.style.height=y+"px",x.resize()}}).call(n.prototype),l.Split=n}),ace.define("ace/ext/split",["require","exports","module","ace/split"],function(t,l,$){$.exports=t("../split")}),function(){ace.require(["ace/ext/split"],function(t){_&&(_.exports=t)})}()})(et);var Jt=et.exports,Zt="Expected a function",tt="__lodash_hash_undefined__",nt=1/0,Qt="[object Function]",en="[object GeneratorFunction]",tn="[object Symbol]",nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,on=/^\./,sn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,an=/[\\^$.*+?()[\]{}|]/g,cn=/\\(\\)?/g,ln=/^\[object .+?Constructor\]$/,pn=typeof W=="object"&&W&&W.Object===Object&&W,hn=typeof self=="object"&&self&&self.Object===Object&&self,Oe=pn||hn||Function("return this")();function un(_,g){return _==null?void 0:_[g]}function dn(_){var g=!1;if(_!=null&&typeof _.toString!="function")try{g=!!(_+"")}catch(t){}return g}var gn=Array.prototype,fn=Function.prototype,rt=Object.prototype,Se=Oe["__core-js_shared__"],Ue=function(){var _=/[^.]+$/.exec(Se&&Se.keys&&Se.keys.IE_PROTO||"");return _?"Symbol(src)_1."+_:""}(),it=fn.toString,Ie=rt.hasOwnProperty,ot=rt.toString,mn=RegExp("^"+it.call(Ie).replace(an,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ve=Oe.Symbol,bn=gn.splice,vn=st(Oe,"Map"),ge=st(Object,"create"),We=Ve?Ve.prototype:void 0,Ge=We?We.toString:void 0;function se(_){var g=-1,t=_?_.length:0;for(this.clear();++g<t;){var l=_[g];this.set(l[0],l[1])}}function yn(){this.__data__=ge?ge(null):{}}function xn(_){return this.has(_)&&delete this.__data__[_]}function wn(_){var g=this.__data__;if(ge){var t=g[_];return t===tt?void 0:t}return Ie.call(g,_)?g[_]:void 0}function _n(_){var g=this.__data__;return ge?g[_]!==void 0:Ie.call(g,_)}function kn(_,g){var t=this.__data__;return t[_]=ge&&g===void 0?tt:g,this}se.prototype.clear=yn;se.prototype.delete=xn;se.prototype.get=wn;se.prototype.has=_n;se.prototype.set=kn;function pe(_){var g=-1,t=_?_.length:0;for(this.clear();++g<t;){var l=_[g];this.set(l[0],l[1])}}function $n(){this.__data__=[]}function Sn(_){var g=this.__data__,t=ve(g,_);if(t<0)return!1;var l=g.length-1;return t==l?g.pop():bn.call(g,t,1),!0}function Cn(_){var g=this.__data__,t=ve(g,_);return t<0?void 0:g[t][1]}function En(_){return ve(this.__data__,_)>-1}function An(_,g){var t=this.__data__,l=ve(t,_);return l<0?t.push([_,g]):t[l][1]=g,this}pe.prototype.clear=$n;pe.prototype.delete=Sn;pe.prototype.get=Cn;pe.prototype.has=En;pe.prototype.set=An;function ae(_){var g=-1,t=_?_.length:0;for(this.clear();++g<t;){var l=_[g];this.set(l[0],l[1])}}function Tn(){this.__data__={hash:new se,map:new(vn||pe),string:new se}}function Mn(_){return ye(this,_).delete(_)}function Rn(_){return ye(this,_).get(_)}function Ln(_){return ye(this,_).has(_)}function On(_,g){return ye(this,_).set(_,g),this}ae.prototype.clear=Tn;ae.prototype.delete=Mn;ae.prototype.get=Rn;ae.prototype.has=Ln;ae.prototype.set=On;function ve(_,g){for(var t=_.length;t--;)if(Un(_[t][0],g))return t;return-1}function In(_,g){g=zn(g,_)?[g]:Fn(g);for(var t=0,l=g.length;_!=null&&t<l;)_=_[Hn(g[t++])];return t&&t==l?_:void 0}function Nn(_){if(!ct(_)||jn(_))return!1;var g=Vn(_)||dn(_)?mn:ln;return g.test(qn(_))}function Pn(_){if(typeof _=="string")return _;if(Pe(_))return Ge?Ge.call(_):"";var g=_+"";return g=="0"&&1/_==-nt?"-0":g}function Fn(_){return at(_)?_:Bn(_)}function ye(_,g){var t=_.__data__;return Dn(g)?t[typeof g=="string"?"string":"hash"]:t.map}function st(_,g){var t=un(_,g);return Nn(t)?t:void 0}function zn(_,g){if(at(_))return!1;var t=typeof _;return t=="number"||t=="symbol"||t=="boolean"||_==null||Pe(_)?!0:rn.test(_)||!nn.test(_)||g!=null&&_ in Object(g)}function Dn(_){var g=typeof _;return g=="string"||g=="number"||g=="symbol"||g=="boolean"?_!=="__proto__":_===null}function jn(_){return!!Ue&&Ue in _}var Bn=Ne(function(_){_=Gn(_);var g=[];return on.test(_)&&g.push(""),_.replace(sn,function(t,l,$,e){g.push($?e.replace(cn,"$1"):l||t)}),g});function Hn(_){if(typeof _=="string"||Pe(_))return _;var g=_+"";return g=="0"&&1/_==-nt?"-0":g}function qn(_){if(_!=null){try{return it.call(_)}catch(g){}try{return _+""}catch(g){}}return""}function Ne(_,g){if(typeof _!="function"||g&&typeof g!="function")throw new TypeError(Zt);var t=function(){var l=arguments,$=g?g.apply(this,l):l[0],e=t.cache;if(e.has($))return e.get($);var a=_.apply(this,l);return t.cache=e.set($,a),a};return t.cache=new(Ne.Cache||ae),t}Ne.Cache=ae;function Un(_,g){return _===g||_!==_&&g!==g}var at=Array.isArray;function Vn(_){var g=ct(_)?ot.call(_):"";return g==Qt||g==en}function ct(_){var g=typeof _;return!!_&&(g=="object"||g=="function")}function Wn(_){return!!_&&typeof _=="object"}function Pe(_){return typeof _=="symbol"||Wn(_)&&ot.call(_)==tn}function Gn(_){return _==null?"":Pn(_)}function Kn(_,g,t){var l=_==null?void 0:In(_,g);return l===void 0?t:l}var Yn=Kn,Xn=W&&W.__extends||function(){var _=function(g,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,$){l.__proto__=$}||function(l,$){for(var e in $)Object.prototype.hasOwnProperty.call($,e)&&(l[e]=$[e])},_(g,t)};return function(g,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");_(g,t);function l(){this.constructor=g}g.prototype=t===null?Object.create(t):(l.prototype=t.prototype,new l)}}(),Te=W&&W.__assign||function(){return Te=Object.assign||function(_){for(var g,t=1,l=arguments.length;t<l;t++){g=arguments[t];for(var $ in g)Object.prototype.hasOwnProperty.call(g,$)&&(_[$]=g[$])}return _},Te.apply(this,arguments)};Object.defineProperty(be,"__esModule",{value:!0});var oe=Z,Ce=(0,oe.getAceInstance)(),Jn=me,Zn=Jt,D=Me,Ke=J,Ee=Qe,re=Yn,Qn=function(_){Xn(g,_);function g(t){var l=_.call(this,t)||this;return oe.editorEvents.forEach(function($){l[$]=l[$].bind(l)}),l.debounce=oe.debounce,l}return g.prototype.isInShadow=function(t){for(var l=t&&t.parentNode;l;){if(l.toString()==="[object ShadowRoot]")return!0;l=l.parentNode}return!1},g.prototype.componentDidMount=function(){var t=this,l=this.props,$=l.className,e=l.onBeforeLoad,a=l.mode,u=l.focus,f=l.theme,h=l.fontSize,n=l.value,o=l.defaultValue,b=l.cursorStart,x=l.showGutter,C=l.wrapEnabled,E=l.showPrintMargin,y=l.scrollMargin,S=y===void 0?[0,0,0,0]:y,s=l.keyboardHandler,k=l.onLoad,A=l.commands,R=l.annotations,d=l.markers,i=l.splits;this.editor=Ce.edit(this.refEditor),this.isInShadow(this.refEditor)&&this.editor.renderer.attachToShadowRoot(),this.editor.setTheme("ace/theme/".concat(f)),e&&e(Ce);var r=Object.keys(this.props.editorProps),p=new Zn.Split(this.editor.container,"ace/theme/".concat(f),i);this.editor.env.split=p,this.splitEditor=p.getEditor(0),this.split=p,this.editor.setShowPrintMargin(!1),this.editor.renderer.setShowGutter(!1);var c=this.splitEditor.$options;this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),p.forEach(function(v,w){for(var T=0;T<r.length;T++)v[r[T]]=t.props.editorProps[r[T]];var M=re(o,w),O=re(n,w,"");v.session.setUndoManager(new Ce.UndoManager),v.setTheme("ace/theme/".concat(f)),v.renderer.setScrollMargin(S[0],S[1],S[2],S[3]),v.getSession().setMode("ace/mode/".concat(a)),v.setFontSize(h),v.renderer.setShowGutter(x),v.getSession().setUseWrapMode(C),v.setShowPrintMargin(E),v.on("focus",t.onFocus),v.on("blur",t.onBlur),v.on("input",t.onInput),v.on("copy",t.onCopy),v.on("paste",t.onPaste),v.on("change",t.onChange),v.getSession().selection.on("changeSelection",t.onSelectionChange),v.getSession().selection.on("changeCursor",t.onCursorChange),v.session.on("changeScrollTop",t.onScroll),v.setValue(M===void 0?O:M,b);var L=re(R,w,[]),I=re(d,w,[]);v.getSession().setAnnotations(L),I&&I.length>0&&t.handleMarkers(I,v);for(var T=0;T<oe.editorOptions.length;T++){var N=oe.editorOptions[T];c.hasOwnProperty(N)?v.setOption(N,t.props[N]):t.props[N]&&console.warn("ReaceAce: editor option ".concat(N," was activated but not found. Did you need to import a related tool or did you possibly mispell the option?"))}t.handleOptions(t.props,v),Array.isArray(A)&&A.forEach(function(P){typeof P.exec=="string"?v.commands.bindKey(P.bindKey,P.exec):v.commands.addCommand(P)}),s&&v.setKeyboardHandler("ace/keyboard/"+s)}),$&&(this.refEditor.className+=" "+$),u&&this.splitEditor.focus();var m=this.editor.env.split;m.setOrientation(this.props.orientation==="below"?m.BELOW:m.BESIDE),m.resize(!0),k&&k(m)},g.prototype.componentDidUpdate=function(t){var l=this,$=t,e=this.props,a=this.editor.env.split;if(e.splits!==$.splits&&a.setSplits(e.splits),e.orientation!==$.orientation&&a.setOrientation(e.orientation==="below"?a.BELOW:a.BESIDE),a.forEach(function(n,o){e.mode!==$.mode&&n.getSession().setMode("ace/mode/"+e.mode),e.keyboardHandler!==$.keyboardHandler&&(e.keyboardHandler?n.setKeyboardHandler("ace/keyboard/"+e.keyboardHandler):n.setKeyboardHandler(null)),e.fontSize!==$.fontSize&&n.setFontSize(e.fontSize),e.wrapEnabled!==$.wrapEnabled&&n.getSession().setUseWrapMode(e.wrapEnabled),e.showPrintMargin!==$.showPrintMargin&&n.setShowPrintMargin(e.showPrintMargin),e.showGutter!==$.showGutter&&n.renderer.setShowGutter(e.showGutter);for(var b=0;b<oe.editorOptions.length;b++){var x=oe.editorOptions[b];e[x]!==$[x]&&n.setOption(x,e[x])}Ee(e.setOptions,$.setOptions)||l.handleOptions(e,n);var C=re(e.value,o,"");if(n.getValue()!==C){l.silent=!0;var E=n.session.selection.toJSON();n.setValue(C,e.cursorStart),n.session.selection.fromJSON(E),l.silent=!1}var y=re(e.annotations,o,[]),S=re($.annotations,o,[]);Ee(y,S)||n.getSession().setAnnotations(y);var s=re(e.markers,o,[]),k=re($.markers,o,[]);!Ee(s,k)&&Array.isArray(s)&&l.handleMarkers(s,n)}),e.className!==$.className){var u=this.refEditor.className,f=u.trim().split(" "),h=$.className.trim().split(" ");h.forEach(function(n){var o=f.indexOf(n);f.splice(o,1)}),this.refEditor.className=" "+e.className+" "+f.join(" ")}e.theme!==$.theme&&a.setTheme("ace/theme/"+e.theme),e.focus&&!$.focus&&this.splitEditor.focus(),(e.height!==this.props.height||e.width!==this.props.width)&&this.editor.resize()},g.prototype.componentWillUnmount=function(){this.editor.destroy(),this.editor=null},g.prototype.onChange=function(t){if(this.props.onChange&&!this.silent){var l=[];this.editor.env.split.forEach(function($){l.push($.getValue())}),this.props.onChange(l,t)}},g.prototype.onSelectionChange=function(t){if(this.props.onSelectionChange){var l=[];this.editor.env.split.forEach(function($){l.push($.getSelection())}),this.props.onSelectionChange(l,t)}},g.prototype.onCursorChange=function(t){if(this.props.onCursorChange){var l=[];this.editor.env.split.forEach(function($){l.push($.getSelection())}),this.props.onCursorChange(l,t)}},g.prototype.onFocus=function(t){this.props.onFocus&&this.props.onFocus(t)},g.prototype.onInput=function(t){this.props.onInput&&this.props.onInput(t)},g.prototype.onBlur=function(t){this.props.onBlur&&this.props.onBlur(t)},g.prototype.onCopy=function(t){this.props.onCopy&&this.props.onCopy(t)},g.prototype.onPaste=function(t){this.props.onPaste&&this.props.onPaste(t)},g.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},g.prototype.handleOptions=function(t,l){for(var $=Object.keys(t.setOptions),e=0;e<$.length;e++)l.setOption($[e],t.setOptions[$[e]])},g.prototype.handleMarkers=function(t,l){var $=l.getSession().getMarkers(!0);for(var e in $)$.hasOwnProperty(e)&&l.getSession().removeMarker($[e].id);$=l.getSession().getMarkers(!1);for(var e in $)$.hasOwnProperty(e)&&l.getSession().removeMarker($[e].id);t.forEach(function(a){var u=a.startRow,f=a.startCol,h=a.endRow,n=a.endCol,o=a.className,b=a.type,x=a.inFront,C=x===void 0?!1:x,E=new Jn.Range(u,f,h,n);l.getSession().addMarker(E,o,b,C)})},g.prototype.updateRef=function(t){this.refEditor=t},g.prototype.render=function(){var t=this.props,l=t.name,$=t.width,e=t.height,a=t.style,u=Te({width:$,height:e},a);return Ke.createElement("div",{ref:this.updateRef,id:l,style:u})},g.propTypes={className:D.string,debounceChangePeriod:D.number,defaultValue:D.arrayOf(D.string),focus:D.bool,fontSize:D.oneOfType([D.number,D.string]),height:D.string,mode:D.string,name:D.string,onBlur:D.func,onChange:D.func,onCopy:D.func,onFocus:D.func,onInput:D.func,onLoad:D.func,onPaste:D.func,onScroll:D.func,orientation:D.string,showGutter:D.bool,splits:D.number,theme:D.string,value:D.arrayOf(D.string),width:D.string,onSelectionChange:D.func,onCursorChange:D.func,onBeforeLoad:D.func,minLines:D.number,maxLines:D.number,readOnly:D.bool,highlightActiveLine:D.bool,tabSize:D.number,showPrintMargin:D.bool,cursorStart:D.number,editorProps:D.object,setOptions:D.object,style:D.object,scrollMargin:D.array,annotations:D.array,markers:D.array,keyboardHandler:D.string,wrapEnabled:D.bool,enableBasicAutocompletion:D.oneOfType([D.bool,D.array]),enableLiveAutocompletion:D.oneOfType([D.bool,D.array]),commands:D.array},g.defaultProps={name:"ace-editor",focus:!1,orientation:"beside",splits:2,mode:"",theme:"",height:"500px",width:"500px",value:[],fontSize:12,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1},g}(Ke.Component);be.default=Qn;var lt={exports:{}};(function(_){var g=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},t=-1,l=1,$=0;g.Diff=function(e,a){return[e,a]},g.prototype.diff_main=function(e,a,u,f){typeof f=="undefined"&&(this.Diff_Timeout<=0?f=Number.MAX_VALUE:f=new Date().getTime()+this.Diff_Timeout*1e3);var h=f;if(e==null||a==null)throw new Error("Null input. (diff_main)");if(e==a)return e?[new g.Diff($,e)]:[];typeof u=="undefined"&&(u=!0);var n=u,o=this.diff_commonPrefix(e,a),b=e.substring(0,o);e=e.substring(o),a=a.substring(o),o=this.diff_commonSuffix(e,a);var x=e.substring(e.length-o);e=e.substring(0,e.length-o),a=a.substring(0,a.length-o);var C=this.diff_compute_(e,a,n,h);return b&&C.unshift(new g.Diff($,b)),x&&C.push(new g.Diff($,x)),this.diff_cleanupMerge(C),C},g.prototype.diff_compute_=function(e,a,u,f){var h;if(!e)return[new g.Diff(l,a)];if(!a)return[new g.Diff(t,e)];var n=e.length>a.length?e:a,o=e.length>a.length?a:e,b=n.indexOf(o);if(b!=-1)return h=[new g.Diff(l,n.substring(0,b)),new g.Diff($,o),new g.Diff(l,n.substring(b+o.length))],e.length>a.length&&(h[0][0]=h[2][0]=t),h;if(o.length==1)return[new g.Diff(t,e),new g.Diff(l,a)];var x=this.diff_halfMatch_(e,a);if(x){var C=x[0],E=x[1],y=x[2],S=x[3],s=x[4],k=this.diff_main(C,y,u,f),A=this.diff_main(E,S,u,f);return k.concat([new g.Diff($,s)],A)}return u&&e.length>100&&a.length>100?this.diff_lineMode_(e,a,f):this.diff_bisect_(e,a,f)},g.prototype.diff_lineMode_=function(e,a,u){var f=this.diff_linesToChars_(e,a);e=f.chars1,a=f.chars2;var h=f.lineArray,n=this.diff_main(e,a,!1,u);this.diff_charsToLines_(n,h),this.diff_cleanupSemantic(n),n.push(new g.Diff($,""));for(var o=0,b=0,x=0,C="",E="";o<n.length;){switch(n[o][0]){case l:x++,E+=n[o][1];break;case t:b++,C+=n[o][1];break;case $:if(b>=1&&x>=1){n.splice(o-b-x,b+x),o=o-b-x;for(var y=this.diff_main(C,E,!1,u),S=y.length-1;S>=0;S--)n.splice(o,0,y[S]);o=o+y.length}x=0,b=0,C="",E="";break}o++}return n.pop(),n},g.prototype.diff_bisect_=function(e,a,u){for(var f=e.length,h=a.length,n=Math.ceil((f+h)/2),o=n,b=2*n,x=new Array(b),C=new Array(b),E=0;E<b;E++)x[E]=-1,C[E]=-1;x[o+1]=0,C[o+1]=0;for(var y=f-h,S=y%2!=0,s=0,k=0,A=0,R=0,d=0;d<n&&!(new Date().getTime()>u);d++){for(var i=-d+s;i<=d-k;i+=2){var r=o+i,p;i==-d||i!=d&&x[r-1]<x[r+1]?p=x[r+1]:p=x[r-1]+1;for(var c=p-i;p<f&&c<h&&e.charAt(p)==a.charAt(c);)p++,c++;if(x[r]=p,p>f)k+=2;else if(c>h)s+=2;else if(S){var m=o+y-i;if(m>=0&&m<b&&C[m]!=-1){var v=f-C[m];if(p>=v)return this.diff_bisectSplit_(e,a,p,c,u)}}}for(var w=-d+A;w<=d-R;w+=2){var m=o+w,v;w==-d||w!=d&&C[m-1]<C[m+1]?v=C[m+1]:v=C[m-1]+1;for(var T=v-w;v<f&&T<h&&e.charAt(f-v-1)==a.charAt(h-T-1);)v++,T++;if(C[m]=v,v>f)R+=2;else if(T>h)A+=2;else if(!S){var r=o+y-w;if(r>=0&&r<b&&x[r]!=-1){var p=x[r],c=o+p-r;if(v=f-v,p>=v)return this.diff_bisectSplit_(e,a,p,c,u)}}}}return[new g.Diff(t,e),new g.Diff(l,a)]},g.prototype.diff_bisectSplit_=function(e,a,u,f,h){var n=e.substring(0,u),o=a.substring(0,f),b=e.substring(u),x=a.substring(f),C=this.diff_main(n,o,!1,h),E=this.diff_main(b,x,!1,h);return C.concat(E)},g.prototype.diff_linesToChars_=function(e,a){var u=[],f={};u[0]="";function h(x){for(var C="",E=0,y=-1,S=u.length;y<x.length-1;){y=x.indexOf(`
`,E),y==-1&&(y=x.length-1);var s=x.substring(E,y+1);(f.hasOwnProperty?f.hasOwnProperty(s):f[s]!==void 0)?C+=String.fromCharCode(f[s]):(S==n&&(s=x.substring(E),y=x.length),C+=String.fromCharCode(S),f[s]=S,u[S++]=s),E=y+1}return C}var n=4e4,o=h(e);n=65535;var b=h(a);return{chars1:o,chars2:b,lineArray:u}},g.prototype.diff_charsToLines_=function(e,a){for(var u=0;u<e.length;u++){for(var f=e[u][1],h=[],n=0;n<f.length;n++)h[n]=a[f.charCodeAt(n)];e[u][1]=h.join("")}},g.prototype.diff_commonPrefix=function(e,a){if(!e||!a||e.charAt(0)!=a.charAt(0))return 0;for(var u=0,f=Math.min(e.length,a.length),h=f,n=0;u<h;)e.substring(n,h)==a.substring(n,h)?(u=h,n=u):f=h,h=Math.floor((f-u)/2+u);return h},g.prototype.diff_commonSuffix=function(e,a){if(!e||!a||e.charAt(e.length-1)!=a.charAt(a.length-1))return 0;for(var u=0,f=Math.min(e.length,a.length),h=f,n=0;u<h;)e.substring(e.length-h,e.length-n)==a.substring(a.length-h,a.length-n)?(u=h,n=u):f=h,h=Math.floor((f-u)/2+u);return h},g.prototype.diff_commonOverlap_=function(e,a){var u=e.length,f=a.length;if(u==0||f==0)return 0;u>f?e=e.substring(u-f):u<f&&(a=a.substring(0,u));var h=Math.min(u,f);if(e==a)return h;for(var n=0,o=1;;){var b=e.substring(h-o),x=a.indexOf(b);if(x==-1)return n;o+=x,(x==0||e.substring(h-o)==a.substring(0,o))&&(n=o,o++)}},g.prototype.diff_halfMatch_=function(e,a){if(this.Diff_Timeout<=0)return null;var u=e.length>a.length?e:a,f=e.length>a.length?a:e;if(u.length<4||f.length*2<u.length)return null;var h=this;function n(k,A,R){for(var d=k.substring(R,R+Math.floor(k.length/4)),i=-1,r="",p,c,m,v;(i=A.indexOf(d,i+1))!=-1;){var w=h.diff_commonPrefix(k.substring(R),A.substring(i)),T=h.diff_commonSuffix(k.substring(0,R),A.substring(0,i));r.length<T+w&&(r=A.substring(i-T,i)+A.substring(i,i+w),p=k.substring(0,R-T),c=k.substring(R+w),m=A.substring(0,i-T),v=A.substring(i+w))}return r.length*2>=k.length?[p,c,m,v,r]:null}var o=n(u,f,Math.ceil(u.length/4)),b=n(u,f,Math.ceil(u.length/2)),x;if(!o&&!b)return null;b?o?x=o[4].length>b[4].length?o:b:x=b:x=o;var C,E,y,S;e.length>a.length?(C=x[0],E=x[1],y=x[2],S=x[3]):(y=x[0],S=x[1],C=x[2],E=x[3]);var s=x[4];return[C,E,y,S,s]},g.prototype.diff_cleanupSemantic=function(e){for(var a=!1,u=[],f=0,h=null,n=0,o=0,b=0,x=0,C=0;n<e.length;)e[n][0]==$?(u[f++]=n,o=x,b=C,x=0,C=0,h=e[n][1]):(e[n][0]==l?x+=e[n][1].length:C+=e[n][1].length,h&&h.length<=Math.max(o,b)&&h.length<=Math.max(x,C)&&(e.splice(u[f-1],0,new g.Diff(t,h)),e[u[f-1]+1][0]=l,f--,f--,n=f>0?u[f-1]:-1,o=0,b=0,x=0,C=0,h=null,a=!0)),n++;for(a&&this.diff_cleanupMerge(e),this.diff_cleanupSemanticLossless(e),n=1;n<e.length;){if(e[n-1][0]==t&&e[n][0]==l){var E=e[n-1][1],y=e[n][1],S=this.diff_commonOverlap_(E,y),s=this.diff_commonOverlap_(y,E);S>=s?(S>=E.length/2||S>=y.length/2)&&(e.splice(n,0,new g.Diff($,y.substring(0,S))),e[n-1][1]=E.substring(0,E.length-S),e[n+1][1]=y.substring(S),n++):(s>=E.length/2||s>=y.length/2)&&(e.splice(n,0,new g.Diff($,E.substring(0,s))),e[n-1][0]=l,e[n-1][1]=y.substring(0,y.length-s),e[n+1][0]=t,e[n+1][1]=E.substring(s),n++),n++}n++}},g.prototype.diff_cleanupSemanticLossless=function(e){function a(s,k){if(!s||!k)return 6;var A=s.charAt(s.length-1),R=k.charAt(0),d=A.match(g.nonAlphaNumericRegex_),i=R.match(g.nonAlphaNumericRegex_),r=d&&A.match(g.whitespaceRegex_),p=i&&R.match(g.whitespaceRegex_),c=r&&A.match(g.linebreakRegex_),m=p&&R.match(g.linebreakRegex_),v=c&&s.match(g.blanklineEndRegex_),w=m&&k.match(g.blanklineStartRegex_);return v||w?5:c||m?4:d&&!r&&p?3:r||p?2:d||i?1:0}for(var u=1;u<e.length-1;){if(e[u-1][0]==$&&e[u+1][0]==$){var f=e[u-1][1],h=e[u][1],n=e[u+1][1],o=this.diff_commonSuffix(f,h);if(o){var b=h.substring(h.length-o);f=f.substring(0,f.length-o),h=b+h.substring(0,h.length-o),n=b+n}for(var x=f,C=h,E=n,y=a(f,h)+a(h,n);h.charAt(0)===n.charAt(0);){f+=h.charAt(0),h=h.substring(1)+n.charAt(0),n=n.substring(1);var S=a(f,h)+a(h,n);S>=y&&(y=S,x=f,C=h,E=n)}e[u-1][1]!=x&&(x?e[u-1][1]=x:(e.splice(u-1,1),u--),e[u][1]=C,E?e[u+1][1]=E:(e.splice(u+1,1),u--))}u++}},g.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,g.whitespaceRegex_=/\s/,g.linebreakRegex_=/[\r\n]/,g.blanklineEndRegex_=/\n\r?\n$/,g.blanklineStartRegex_=/^\r?\n\r?\n/,g.prototype.diff_cleanupEfficiency=function(e){for(var a=!1,u=[],f=0,h=null,n=0,o=!1,b=!1,x=!1,C=!1;n<e.length;)e[n][0]==$?(e[n][1].length<this.Diff_EditCost&&(x||C)?(u[f++]=n,o=x,b=C,h=e[n][1]):(f=0,h=null),x=C=!1):(e[n][0]==t?C=!0:x=!0,h&&(o&&b&&x&&C||h.length<this.Diff_EditCost/2&&o+b+x+C==3)&&(e.splice(u[f-1],0,new g.Diff(t,h)),e[u[f-1]+1][0]=l,f--,h=null,o&&b?(x=C=!0,f=0):(f--,n=f>0?u[f-1]:-1,x=C=!1),a=!0)),n++;a&&this.diff_cleanupMerge(e)},g.prototype.diff_cleanupMerge=function(e){e.push(new g.Diff($,""));for(var a=0,u=0,f=0,h="",n="",o;a<e.length;)switch(e[a][0]){case l:f++,n+=e[a][1],a++;break;case t:u++,h+=e[a][1],a++;break;case $:u+f>1?(u!==0&&f!==0&&(o=this.diff_commonPrefix(n,h),o!==0&&(a-u-f>0&&e[a-u-f-1][0]==$?e[a-u-f-1][1]+=n.substring(0,o):(e.splice(0,0,new g.Diff($,n.substring(0,o))),a++),n=n.substring(o),h=h.substring(o)),o=this.diff_commonSuffix(n,h),o!==0&&(e[a][1]=n.substring(n.length-o)+e[a][1],n=n.substring(0,n.length-o),h=h.substring(0,h.length-o))),a-=u+f,e.splice(a,u+f),h.length&&(e.splice(a,0,new g.Diff(t,h)),a++),n.length&&(e.splice(a,0,new g.Diff(l,n)),a++),a++):a!==0&&e[a-1][0]==$?(e[a-1][1]+=e[a][1],e.splice(a,1)):a++,f=0,u=0,h="",n="";break}e[e.length-1][1]===""&&e.pop();var b=!1;for(a=1;a<e.length-1;)e[a-1][0]==$&&e[a+1][0]==$&&(e[a][1].substring(e[a][1].length-e[a-1][1].length)==e[a-1][1]?(e[a][1]=e[a-1][1]+e[a][1].substring(0,e[a][1].length-e[a-1][1].length),e[a+1][1]=e[a-1][1]+e[a+1][1],e.splice(a-1,1),b=!0):e[a][1].substring(0,e[a+1][1].length)==e[a+1][1]&&(e[a-1][1]+=e[a+1][1],e[a][1]=e[a][1].substring(e[a+1][1].length)+e[a+1][1],e.splice(a+1,1),b=!0)),a++;b&&this.diff_cleanupMerge(e)},g.prototype.diff_xIndex=function(e,a){var u=0,f=0,h=0,n=0,o;for(o=0;o<e.length&&(e[o][0]!==l&&(u+=e[o][1].length),e[o][0]!==t&&(f+=e[o][1].length),!(u>a));o++)h=u,n=f;return e.length!=o&&e[o][0]===t?n:n+(a-h)},g.prototype.diff_prettyHtml=function(e){for(var a=[],u=/&/g,f=/</g,h=/>/g,n=/\n/g,o=0;o<e.length;o++){var b=e[o][0],x=e[o][1],C=x.replace(u,"&amp;").replace(f,"&lt;").replace(h,"&gt;").replace(n,"&para;<br>");switch(b){case l:a[o]='<ins style="background:#e6ffe6;">'+C+"</ins>";break;case t:a[o]='<del style="background:#ffe6e6;">'+C+"</del>";break;case $:a[o]="<span>"+C+"</span>";break}}return a.join("")},g.prototype.diff_text1=function(e){for(var a=[],u=0;u<e.length;u++)e[u][0]!==l&&(a[u]=e[u][1]);return a.join("")},g.prototype.diff_text2=function(e){for(var a=[],u=0;u<e.length;u++)e[u][0]!==t&&(a[u]=e[u][1]);return a.join("")},g.prototype.diff_levenshtein=function(e){for(var a=0,u=0,f=0,h=0;h<e.length;h++){var n=e[h][0],o=e[h][1];switch(n){case l:u+=o.length;break;case t:f+=o.length;break;case $:a+=Math.max(u,f),u=0,f=0;break}}return a+=Math.max(u,f),a},g.prototype.diff_toDelta=function(e){for(var a=[],u=0;u<e.length;u++)switch(e[u][0]){case l:a[u]="+"+encodeURI(e[u][1]);break;case t:a[u]="-"+e[u][1].length;break;case $:a[u]="="+e[u][1].length;break}return a.join("	").replace(/%20/g," ")},g.prototype.diff_fromDelta=function(e,a){for(var u=[],f=0,h=0,n=a.split(/\t/g),o=0;o<n.length;o++){var b=n[o].substring(1);switch(n[o].charAt(0)){case"+":try{u[f++]=new g.Diff(l,decodeURI(b))}catch(E){throw new Error("Illegal escape in diff_fromDelta: "+b)}break;case"-":case"=":var x=parseInt(b,10);if(isNaN(x)||x<0)throw new Error("Invalid number in diff_fromDelta: "+b);var C=e.substring(h,h+=x);n[o].charAt(0)=="="?u[f++]=new g.Diff($,C):u[f++]=new g.Diff(t,C);break;default:if(n[o])throw new Error("Invalid diff operation in diff_fromDelta: "+n[o])}}if(h!=e.length)throw new Error("Delta length ("+h+") does not equal source text length ("+e.length+").");return u},g.prototype.match_main=function(e,a,u){if(e==null||a==null||u==null)throw new Error("Null input. (match_main)");return u=Math.max(0,Math.min(u,e.length)),e==a?0:e.length?e.substring(u,u+a.length)==a?u:this.match_bitap_(e,a,u):-1},g.prototype.match_bitap_=function(e,a,u){if(a.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var f=this.match_alphabet_(a),h=this;function n(p,c){var m=p/a.length,v=Math.abs(u-c);return h.Match_Distance?m+v/h.Match_Distance:v?1:m}var o=this.Match_Threshold,b=e.indexOf(a,u);b!=-1&&(o=Math.min(n(0,b),o),b=e.lastIndexOf(a,u+a.length),b!=-1&&(o=Math.min(n(0,b),o)));var x=1<<a.length-1;b=-1;for(var C,E,y=a.length+e.length,S,s=0;s<a.length;s++){for(C=0,E=y;C<E;)n(s,u+E)<=o?C=E:y=E,E=Math.floor((y-C)/2+C);y=E;var k=Math.max(1,u-E+1),A=Math.min(u+E,e.length)+a.length,R=Array(A+2);R[A+1]=(1<<s)-1;for(var d=A;d>=k;d--){var i=f[e.charAt(d-1)];if(s===0?R[d]=(R[d+1]<<1|1)&i:R[d]=(R[d+1]<<1|1)&i|((S[d+1]|S[d])<<1|1)|S[d+1],R[d]&x){var r=n(s,d-1);if(r<=o)if(o=r,b=d-1,b>u)k=Math.max(1,2*u-b);else break}}if(n(s+1,u)>o)break;S=R}return b},g.prototype.match_alphabet_=function(e){for(var a={},u=0;u<e.length;u++)a[e.charAt(u)]=0;for(var u=0;u<e.length;u++)a[e.charAt(u)]|=1<<e.length-u-1;return a},g.prototype.patch_addContext_=function(e,a){if(a.length!=0){if(e.start2===null)throw Error("patch not initialized");for(var u=a.substring(e.start2,e.start2+e.length1),f=0;a.indexOf(u)!=a.lastIndexOf(u)&&u.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)f+=this.Patch_Margin,u=a.substring(e.start2-f,e.start2+e.length1+f);f+=this.Patch_Margin;var h=a.substring(e.start2-f,e.start2);h&&e.diffs.unshift(new g.Diff($,h));var n=a.substring(e.start2+e.length1,e.start2+e.length1+f);n&&e.diffs.push(new g.Diff($,n)),e.start1-=h.length,e.start2-=h.length,e.length1+=h.length+n.length,e.length2+=h.length+n.length}},g.prototype.patch_make=function(e,a,u){var f,h;if(typeof e=="string"&&typeof a=="string"&&typeof u=="undefined")f=e,h=this.diff_main(f,a,!0),h.length>2&&(this.diff_cleanupSemantic(h),this.diff_cleanupEfficiency(h));else if(e&&typeof e=="object"&&typeof a=="undefined"&&typeof u=="undefined")h=e,f=this.diff_text1(h);else if(typeof e=="string"&&a&&typeof a=="object"&&typeof u=="undefined")f=e,h=a;else if(typeof e=="string"&&typeof a=="string"&&u&&typeof u=="object")f=e,h=u;else throw new Error("Unknown call format to patch_make.");if(h.length===0)return[];for(var n=[],o=new g.patch_obj,b=0,x=0,C=0,E=f,y=f,S=0;S<h.length;S++){var s=h[S][0],k=h[S][1];switch(!b&&s!==$&&(o.start1=x,o.start2=C),s){case l:o.diffs[b++]=h[S],o.length2+=k.length,y=y.substring(0,C)+k+y.substring(C);break;case t:o.length1+=k.length,o.diffs[b++]=h[S],y=y.substring(0,C)+y.substring(C+k.length);break;case $:k.length<=2*this.Patch_Margin&&b&&h.length!=S+1?(o.diffs[b++]=h[S],o.length1+=k.length,o.length2+=k.length):k.length>=2*this.Patch_Margin&&b&&(this.patch_addContext_(o,E),n.push(o),o=new g.patch_obj,b=0,E=y,x=C);break}s!==l&&(x+=k.length),s!==t&&(C+=k.length)}return b&&(this.patch_addContext_(o,E),n.push(o)),n},g.prototype.patch_deepCopy=function(e){for(var a=[],u=0;u<e.length;u++){var f=e[u],h=new g.patch_obj;h.diffs=[];for(var n=0;n<f.diffs.length;n++)h.diffs[n]=new g.Diff(f.diffs[n][0],f.diffs[n][1]);h.start1=f.start1,h.start2=f.start2,h.length1=f.length1,h.length2=f.length2,a[u]=h}return a},g.prototype.patch_apply=function(e,a){if(e.length==0)return[a,[]];e=this.patch_deepCopy(e);var u=this.patch_addPadding(e);a=u+a+u,this.patch_splitMax(e);for(var f=0,h=[],n=0;n<e.length;n++){var o=e[n].start2+f,b=this.diff_text1(e[n].diffs),x,C=-1;if(b.length>this.Match_MaxBits?(x=this.match_main(a,b.substring(0,this.Match_MaxBits),o),x!=-1&&(C=this.match_main(a,b.substring(b.length-this.Match_MaxBits),o+b.length-this.Match_MaxBits),(C==-1||x>=C)&&(x=-1))):x=this.match_main(a,b,o),x==-1)h[n]=!1,f-=e[n].length2-e[n].length1;else{h[n]=!0,f=x-o;var E;if(C==-1?E=a.substring(x,x+b.length):E=a.substring(x,C+this.Match_MaxBits),b==E)a=a.substring(0,x)+this.diff_text2(e[n].diffs)+a.substring(x+b.length);else{var y=this.diff_main(b,E,!1);if(b.length>this.Match_MaxBits&&this.diff_levenshtein(y)/b.length>this.Patch_DeleteThreshold)h[n]=!1;else{this.diff_cleanupSemanticLossless(y);for(var S=0,s,k=0;k<e[n].diffs.length;k++){var A=e[n].diffs[k];A[0]!==$&&(s=this.diff_xIndex(y,S)),A[0]===l?a=a.substring(0,x+s)+A[1]+a.substring(x+s):A[0]===t&&(a=a.substring(0,x+s)+a.substring(x+this.diff_xIndex(y,S+A[1].length))),A[0]!==t&&(S+=A[1].length)}}}}}return a=a.substring(u.length,a.length-u.length),[a,h]},g.prototype.patch_addPadding=function(e){for(var a=this.Patch_Margin,u="",f=1;f<=a;f++)u+=String.fromCharCode(f);for(var f=0;f<e.length;f++)e[f].start1+=a,e[f].start2+=a;var h=e[0],n=h.diffs;if(n.length==0||n[0][0]!=$)n.unshift(new g.Diff($,u)),h.start1-=a,h.start2-=a,h.length1+=a,h.length2+=a;else if(a>n[0][1].length){var o=a-n[0][1].length;n[0][1]=u.substring(n[0][1].length)+n[0][1],h.start1-=o,h.start2-=o,h.length1+=o,h.length2+=o}if(h=e[e.length-1],n=h.diffs,n.length==0||n[n.length-1][0]!=$)n.push(new g.Diff($,u)),h.length1+=a,h.length2+=a;else if(a>n[n.length-1][1].length){var o=a-n[n.length-1][1].length;n[n.length-1][1]+=u.substring(0,o),h.length1+=o,h.length2+=o}return u},g.prototype.patch_splitMax=function(e){for(var a=this.Match_MaxBits,u=0;u<e.length;u++)if(!(e[u].length1<=a)){var f=e[u];e.splice(u--,1);for(var h=f.start1,n=f.start2,o="";f.diffs.length!==0;){var b=new g.patch_obj,x=!0;for(b.start1=h-o.length,b.start2=n-o.length,o!==""&&(b.length1=b.length2=o.length,b.diffs.push(new g.Diff($,o)));f.diffs.length!==0&&b.length1<a-this.Patch_Margin;){var C=f.diffs[0][0],E=f.diffs[0][1];C===l?(b.length2+=E.length,n+=E.length,b.diffs.push(f.diffs.shift()),x=!1):C===t&&b.diffs.length==1&&b.diffs[0][0]==$&&E.length>2*a?(b.length1+=E.length,h+=E.length,x=!1,b.diffs.push(new g.Diff(C,E)),f.diffs.shift()):(E=E.substring(0,a-b.length1-this.Patch_Margin),b.length1+=E.length,h+=E.length,C===$?(b.length2+=E.length,n+=E.length):x=!1,b.diffs.push(new g.Diff(C,E)),E==f.diffs[0][1]?f.diffs.shift():f.diffs[0][1]=f.diffs[0][1].substring(E.length))}o=this.diff_text2(b.diffs),o=o.substring(o.length-this.Patch_Margin);var y=this.diff_text1(f.diffs).substring(0,this.Patch_Margin);y!==""&&(b.length1+=y.length,b.length2+=y.length,b.diffs.length!==0&&b.diffs[b.diffs.length-1][0]===$?b.diffs[b.diffs.length-1][1]+=y:b.diffs.push(new g.Diff($,y))),x||e.splice(++u,0,b)}}},g.prototype.patch_toText=function(e){for(var a=[],u=0;u<e.length;u++)a[u]=e[u];return a.join("")},g.prototype.patch_fromText=function(e){var a=[];if(!e)return a;for(var u=e.split(`
`),f=0,h=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;f<u.length;){var n=u[f].match(h);if(!n)throw new Error("Invalid patch string: "+u[f]);var o=new g.patch_obj;for(a.push(o),o.start1=parseInt(n[1],10),n[2]===""?(o.start1--,o.length1=1):n[2]=="0"?o.length1=0:(o.start1--,o.length1=parseInt(n[2],10)),o.start2=parseInt(n[3],10),n[4]===""?(o.start2--,o.length2=1):n[4]=="0"?o.length2=0:(o.start2--,o.length2=parseInt(n[4],10)),f++;f<u.length;){var b=u[f].charAt(0);try{var x=decodeURI(u[f].substring(1))}catch(C){throw new Error("Illegal escape in patch_fromText: "+x)}if(b=="-")o.diffs.push(new g.Diff(t,x));else if(b=="+")o.diffs.push(new g.Diff(l,x));else if(b==" ")o.diffs.push(new g.Diff($,x));else{if(b=="@")break;if(b!=="")throw new Error('Invalid patch mode "'+b+'" in: '+x)}f++}}return a},g.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},g.patch_obj.prototype.toString=function(){var e,a;this.length1===0?e=this.start1+",0":this.length1==1?e=this.start1+1:e=this.start1+1+","+this.length1,this.length2===0?a=this.start2+",0":this.length2==1?a=this.start2+1:a=this.start2+1+","+this.length2;for(var u=["@@ -"+e+" +"+a+` @@
`],f,h=0;h<this.diffs.length;h++){switch(this.diffs[h][0]){case l:f="+";break;case t:f="-";break;case $:f=" ";break}u[h+1]=f+encodeURI(this.diffs[h][1])+`
`}return u.join("").replace(/%20/g," ")},_.exports=g,_.exports.diff_match_patch=g,_.exports.DIFF_DELETE=t,_.exports.DIFF_INSERT=l,_.exports.DIFF_EQUAL=$})(lt);var er=lt.exports,tr=W&&W.__extends||function(){var _=function(g,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,$){l.__proto__=$}||function(l,$){for(var e in $)Object.prototype.hasOwnProperty.call($,e)&&(l[e]=$[e])},_(g,t)};return function(g,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");_(g,t);function l(){this.constructor=g}g.prototype=t===null?Object.create(t):(l.prototype=t.prototype,new l)}}();Object.defineProperty(Le,"__esModule",{value:!0});var H=Me,Ye=J,nr=be,rr=er,ir=function(_){tr(g,_);function g(t){var l=_.call(this,t)||this;return l.state={value:l.props.value},l.onChange=l.onChange.bind(l),l.diff=l.diff.bind(l),l}return g.prototype.componentDidUpdate=function(){var t=this.props.value;t!==this.state.value&&this.setState({value:t})},g.prototype.onChange=function(t){this.setState({value:t}),this.props.onChange&&this.props.onChange(t)},g.prototype.diff=function(){var t=new rr,l=this.state.value[0],$=this.state.value[1];if(l.length===0&&$.length===0)return[];var e=t.diff_main(l,$);t.diff_cleanupSemantic(e);var a=this.generateDiffedLines(e),u=this.setCodeMarkers(a);return u},g.prototype.generateDiffedLines=function(t){var l={DIFF_EQUAL:0,DIFF_DELETE:-1,DIFF_INSERT:1},$={left:[],right:[]},e={left:1,right:1};return t.forEach(function(a){var u=a[0],f=a[1],h=f.split(`
`).length-1;if(f.length!==0){var n=f[0],o=f[f.length-1],b=0;switch(u){case l.DIFF_EQUAL:e.left+=h,e.right+=h;break;case l.DIFF_DELETE:n===`
`&&(e.left++,h--),b=h,b===0&&$.right.push({startLine:e.right,endLine:e.right}),o===`
`&&(b-=1),$.left.push({startLine:e.left,endLine:e.left+b}),e.left+=h;break;case l.DIFF_INSERT:n===`
`&&(e.right++,h--),b=h,b===0&&$.left.push({startLine:e.left,endLine:e.left}),o===`
`&&(b-=1),$.right.push({startLine:e.right,endLine:e.right+b}),e.right+=h;break;default:throw new Error("Diff type was not defined.")}}}),$},g.prototype.setCodeMarkers=function(t){t===void 0&&(t={left:[],right:[]});for(var l=[],$={left:[],right:[]},e=0;e<t.left.length;e++){var a={startRow:t.left[e].startLine-1,endRow:t.left[e].endLine,type:"text",className:"codeMarker"};$.left.push(a)}for(var e=0;e<t.right.length;e++){var a={startRow:t.right[e].startLine-1,endRow:t.right[e].endLine,type:"text",className:"codeMarker"};$.right.push(a)}return l[0]=$.left,l[1]=$.right,l},g.prototype.render=function(){var t=this.diff();return Ye.createElement(nr.default,{name:this.props.name,className:this.props.className,focus:this.props.focus,orientation:this.props.orientation,splits:this.props.splits,mode:this.props.mode,theme:this.props.theme,height:this.props.height,width:this.props.width,fontSize:this.props.fontSize,showGutter:this.props.showGutter,onChange:this.onChange,onPaste:this.props.onPaste,onLoad:this.props.onLoad,onScroll:this.props.onScroll,minLines:this.props.minLines,maxLines:this.props.maxLines,readOnly:this.props.readOnly,highlightActiveLine:this.props.highlightActiveLine,showPrintMargin:this.props.showPrintMargin,tabSize:this.props.tabSize,cursorStart:this.props.cursorStart,editorProps:this.props.editorProps,style:this.props.style,scrollMargin:this.props.scrollMargin,setOptions:this.props.setOptions,wrapEnabled:this.props.wrapEnabled,enableBasicAutocompletion:this.props.enableBasicAutocompletion,enableLiveAutocompletion:this.props.enableLiveAutocompletion,value:this.state.value,markers:t})},g.propTypes={cursorStart:H.number,editorProps:H.object,enableBasicAutocompletion:H.bool,enableLiveAutocompletion:H.bool,focus:H.bool,fontSize:H.number,height:H.string,highlightActiveLine:H.bool,maxLines:H.number,minLines:H.number,mode:H.string,name:H.string,className:H.string,onLoad:H.func,onPaste:H.func,onScroll:H.func,onChange:H.func,orientation:H.string,readOnly:H.bool,scrollMargin:H.array,setOptions:H.object,showGutter:H.bool,showPrintMargin:H.bool,splits:H.number,style:H.object,tabSize:H.number,theme:H.string,value:H.array,width:H.string,wrapEnabled:H.bool},g.defaultProps={cursorStart:1,editorProps:{},enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,focus:!1,fontSize:12,height:"500px",highlightActiveLine:!0,maxLines:null,minLines:null,mode:"",name:"ace-editor",onLoad:null,onScroll:null,onPaste:null,onChange:null,orientation:"beside",readOnly:!1,scrollMargin:[0,0,0,0],setOptions:{},showGutter:!0,showPrintMargin:!0,splits:2,style:{},tabSize:4,theme:"github",value:["",""],width:"500px",wrapEnabled:!0},g}(Ye.Component);Le.default=ir;Object.defineProperty(le,"__esModule",{value:!0});le.diff=le.split=void 0;var or=Re,sr=Le;le.diff=sr.default;var ar=be;le.split=ar.default;var Xe=le.default=or.default;const cr=mt(bt),lr=_=>_.lbl||_.adminLbl||_.txt,pt=()=>Object.entries(cr).map(([_,g])=>({lbl:lr(g)||_,val:`${_}`})),pr=()=>Mt.map(({name:_,label:g})=>({lbl:g,val:`bfVars["${_}"]`})),hr=_=>`// On Field ${Je(_)}
document.querySelector(\`#form-\${bfContentId}\`).querySelector('#fieldKey').addEventListener('${_}', event => {
  // Write your code here
})`,G=_=>({lbl:`On ${Je(_)}`,val:hr(_)}),ur=[{type:"group-opts",name:"Global Variables",childs:[{lbl:"Form ID",val:"bf_globals[bfContentId].formId"},...pr()]},{type:"group-opts",name:"Field Keys",childs:[...pt()]},{type:"group-opts",name:"Form Events",childs:[{lbl:"On Form Submit Success",val:"/* On Form Submit Success */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-submit-success', ({detail:{formId, entryId, formData}}) => {\n	/* Write your code here... */\n})"},{lbl:"On Form Submit Error",val:"/* On Form Submit Error */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-submit-error', ({detail:{formId, errors}}) => {\n	/* Write your code here... */\n})"},{lbl:"On Form Reset",val:"// On Form Reset\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-reset', ({detail:{formId}}) => {\n	// Write your code here...\n})"},{lbl:"On Form Validation Error",val:"/* On Form Validation Error */\ndocument.querySelector(`#form-${bfContentId}`).addEventListener('bf-form-validation-error', ({detail:{formId, fieldId, error}}) => {\n	/* Write your code here... */\n})"}]},{type:"group-title",name:"Field Events"},{type:"group-accordion",name:"Text Field",childs:[G("change"),G("input"),G("blur"),G("focus")]},{type:"group-accordion",name:"Textarea Field",childs:[G("change"),G("input"),G("blur"),G("focus")]},{type:"group-accordion",name:"Email Field",childs:[G("change"),G("input"),G("blur"),G("focus")]},{type:"group-accordion",name:"Checkbox",childs:[G("change")]},{type:"group-accordion",name:"Select",childs:[G("change")]},{type:"group-accordion",name:"Button",childs:[G("click")]}],dr=[{type:"group-opts",name:"Field Keys",childs:[...pt()]}],gr=_=>{let g=0;return _.reduce((t,l)=>(l.type?(t.push(l),g=0):(g||(t.push({type:"no-group",childs:[]}),g=1),t[t.length-1].childs.push(l)),t),[])};function fr({options:_,action:g}){var h;const{css:t}=Ze(),l=gr(_),[$,e]=J.useState(l);J.useEffect(()=>{e(l)},[_]);const a=n=>{const o=n.target.value.toLowerCase().trim();if(!o)return e(l);const x=yt(l).reduce((C,E)=>(E.type!=="group-title"&&(C.push(E),E.childs&&(C[C.length-1].childs=E.childs.filter(y=>y.lbl.toLowerCase().includes(o)),C[C.length-1].childs.length===0&&C.pop())),C),[]);e(x)},u=()=>{f.current.value="",e(l)},f=J.useRef(null);return j.jsxs("div",{className:t(Y.main),children:[j.jsxs("div",{className:t(Y.fields_search),children:[j.jsx("input",{ref:f,title:"Search Field","aria-label":"Search Field",autoComplete:"off","data-testid":"tlbr-srch-inp",placeholder:"Search...",id:"search-icon",type:"search",name:"searchIcn",onChange:a,className:t(Y.search_field)}),((h=f==null?void 0:f.current)==null?void 0:h.value)&&j.jsx("span",{title:"clear",className:t(Y.clear_icn),role:"button",tabIndex:"-1",onClick:u,onKeyDown:u,children:" "}),j.jsx("span",{title:"search",className:t(Y.search_icn),children:j.jsx(Lt,{size:"20"})})]}),j.jsx(vt,{style:{height:"92%"},autoHide:!0,children:j.jsx("div",{className:t(Y.groupList),children:$.map(n=>j.jsxs(J.Fragment,{children:[n.type==="group-accordion"&&j.jsx(Ot,{title:n.name,children:j.jsx("ul",{className:t(Y.ul),children:"childs"in n&&n.childs.map(o=>j.jsx("li",{className:t(Y.li),children:j.jsx("button",{type:"button",className:`${t(Y.button)} btnHover`,title:o.lbl,onClick:()=>g(o.val),children:o.lbl})},`childs-${o.val}`))})},`group-accordion-${n.name}`),n.type==="group-opts"&&j.jsxs("ul",{className:t(Y.ul),children:[n.type.match(/group-opts|group-title/)&&j.jsx("h4",{className:t(Y.title),children:n.name}),"childs"in n&&n.childs.map(o=>j.jsx("li",{className:t(Y.li),children:j.jsx("button",{type:"button",className:`${t(Y.button)} btnHover`,title:o.lbl,onClick:()=>g(o.val),children:o.lbl})},`group-child-${o.val}`))]}),n.type==="group-title"&&j.jsx("h4",{className:t(Y.title),children:n.name})]},`group-acc-${n.name}`))})})]})}const Y={main:{h:300,w:200,py:3,ow:"hidden"},title:{m:0,pt:7,pb:5,pn:"sticky",tp:0,bd:"#fff",zx:9},fields_search:{pn:"relative",tn:"width .2s"},search_field:{mx:2,w:"98%",oe:"none",b:"none !important",brs:"9px !important",pl:"27px !important",pr:"5px !important",bd:"var(--white-0-97) !important",":focus":{oe:"none",bs:"0px 0px 0px 1.5px var(--b-50) !important",pr:"0px !important","& ~ .shortcut":{dy:"none"},"& ~ span svg":{cr:"var(--b-50)"}},"::placeholder":{fs:12},"::-webkit-search-cancel-button":{appearance:"none"}},search_icn:{pn:"absolute",tp:"50%",mx:6,lt:0,tm:"translateY(-50%)",cr:"var(--white-0-50)",curp:1,"& svg":{dy:"block"}},clear_icn:{pn:"absolute",tp:"50%",mx:6,rt:0,tm:"translateY(-50%)",cr:"var(--white-0-50)",curp:1,w:14,h:14,bd:"var(--white-0-83)",brs:20,backgroundPosition:"54% 50% !important",bi:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='Black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")`},groupList:{mt:10},ul:{mt:0,mb:10},li:{mb:0,mt:5,ml:5},button:{fw:"normal",brs:5,dy:"block",w:"100%",ta:"left",b:0,bd:"none",p:3,curp:1,"&:hover":{bd:"var(--white-0-95)",cr:"var(--black-0)"},fs:11}};function Or(){const{css:_}=Ze(),{formType:g,formID:t}=xt(),[l,$]=J.useState("JavaScript"),[e,a]=J.useState(localStorage.getItem("bf-editor-theme")||"tomorrow"),[u,f]=J.useState(localStorage.getItem("bf-enable-editor")||"on"),h=J.useRef({}),[n,o]=wt($t),b=_t(St),[x,C]=J.useState(mr),E=["JavaScript","CSS"],y=[{label:"Light Theme",value:"tomorrow"},{label:"Dark Theme",value:"twilight"}],S=p=>{p&&!(p in h.current)&&(h.current[l]=p)},s=p=>{o(c=>ue(ie({},c),{[l]:p}))},k=p=>{const c=h.current[l],{editor:m}=c;m.session.insert(m.getCursorPosition(),p);const v=m.getValue();o(w=>ue(ie({},w),{[l]:v})),c.editor.renderer.scrollBarV.scrollTop!==c.editor.renderer.scrollBarV.maxScrollTop&&c.editor.gotoLine(c.editor.session.getLength()+1)},A=p=>{localStorage.setItem("bf-editor-theme",p),a(p)},R=p=>{const{checked:c}=p.target;c?(f("on"),localStorage.setItem("bf-enable-editor","on")):(f("off"),localStorage.setItem("bf-enable-editor","off"))},d=p=>{if(!$e){b(ie({show:!0},Ct.customCode));return}if(g==="new"){Et("#update-btn").click();return}const m=_e({form_id:t,customCodes:n},"bitforms_add_custom_code").then(v=>v);At.promise(m,{loading:ke("Updating..."),success:v=>{var w;return((w=v==null?void 0:v.data)==null?void 0:w.message)||(v==null?void 0:v.data)},error:ke("Error occurred, Please try again.")}),p.preventDefault()},i=()=>{if(l==="JavaScript")return ur;if(l==="CSS")return dr},r={mode:l.toLowerCase(),theme:e,name:l,value:n[l]||"",onChange:p=>{s(p)},height:"330px",width:"100%",placeholder:"Write your code here...",setOptions:x,ref:S};return J.useEffect(()=>{g==="edit"&&!(n.JavaScript||n.CSS)?_e({form_id:t},"bitforms_get_custom_code").then(c=>{var m,v;return o({JavaScript:(m=c==null?void 0:c.data)==null?void 0:m.JavaScript,CSS:(v=c==null?void 0:c.data)==null?void 0:v.CSS,isFetched:!0}),c}):g==="new"&&_e({form_id:t,customCodes:n},"bitforms_add_custom_code").then(c=>c)},[]),j.jsxs("div",{children:[j.jsxs("div",{className:_({flx:"between"}),children:[j.jsx("div",{className:_(Q.w10,{flx:"center",my:2,ml:27}),children:j.jsx(It,{width:300,options:E.map(p=>({label:p})),onChange:p=>$(p),defaultActive:"JavaScript",actionValue:l,wideTab:!0})}),j.jsx("div",{className:_(Q.flxc),children:j.jsxs(Rt,{place:"bottom-end",children:[j.jsx("button",{"data-testid":"titl-mor-opt-btn","data-close":!0,type:"button",className:_(de.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:ke("Snippets"),children:j.jsx(Tt,{size:"16"})}),j.jsx(fr,{options:i(),action:k})]})})]}),j.jsx(je,{open:l==="JavaScript",children:j.jsxs("div",{className:"pos-rel",children:[!$e&&j.jsx(Be,{style:{left:0,width:"100%"}}),u==="on"?j.jsx(Xe,ue(ie({},r),{onLoad:p=>{p.session.$worker.send("changeOptions",[{asi:!0}])}})):j.jsx("textarea",{className:_(de.editor,{h:330}),onChange:p=>s(p.target.value),value:n[l]||"",rows:"18"})]})}),j.jsx(je,{open:l==="CSS",children:j.jsxs("div",{className:"pos-rel",children:[!$e&&j.jsx(Be,{style:{left:0,width:"100%"}}),u==="on"?j.jsx(Xe,ie({},r)):j.jsx("textarea",{className:_(de.editor,{h:330}),onChange:p=>s(p.target.value),value:n[l]||"",rows:"18"})]})}),j.jsxs("div",{className:_(Q.flxb,Q.mt1,Q.mb1,{jc:"between"}),children:[j.jsxs("div",{className:_(Q.flxc,Q.w10,de.editorBtn),children:[j.jsx(De,{className:_(Q.mr2),title:"Editor Mode",checked:u==="on",onChange:R}),u==="on"&&j.jsxs(j.Fragment,{children:[j.jsx(kt,{onChange:A,value:e,options:y,size:"sm",className:_({w:150})}),j.jsx(De,{className:_(Q.ml4),title:"Word Wrap",checked:x.wrap,onChange:()=>C(p=>ue(ie({},p),{wrap:!p.wrap}))})]})]}),j.jsx("button",{onClick:d,type:"button",className:_(Q.btn,de.saveBtn),children:"Save"})]})]})}const de={editor:{w:"99%"},btn:{b:0,brs:5,curp:1,flx:"center-between"},theme:{dy:"flex",jc:"flex-end"},editorBtn:{fs:12,pr:5},saveBtn:{bc:"var(--b-50)",brs:8,fs:13,fw:800,px:15,py:8,cr:"var(--white-100)",":hover":{bd:"var(--b-36)"}}},mr={autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,animatedScroll:!0,showFoldWidgets:!0,displayIndentGuides:!0,enableEmmet:!0,enableMultiselect:!0,highlightSelectedWord:!0,fontSize:15,useSoftTabs:!0,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0};export{Or as default};

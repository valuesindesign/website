/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],"__proto__"!==d&&g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;d<c;d++)if(!1===b.call(a[d],d,a[d]))break}else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(d<c)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)(d=!b(a[f],f))!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;g<d;g++)null!=(e=b(a[g],g,c))&&h.push(e);else for(g in a)null!=(e=b(a[g],g,c))&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;if("string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a))return c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"!==c&&!n.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fa(),z=fa(),A=fa(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(xa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ea(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+pa(r[h]);s=r.join(","),w=_.test(a)&&na(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fa(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ga(a){return a[u]=!0,a}function ha(a){var b=n.createElement("div");try{return!!a(b)}catch(xa){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ia(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ja(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ka(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function la(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ma(a){return ga(function(b){return b=+b,ga(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function na(a){return a&&void 0!==a.getElementsByTagName&&a}c=ea.support={},f=ea.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ea.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ha(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ha(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ha(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(void 0!==b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ha(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ha(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ha(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ja(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ja(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ea.matches=function(a,b){return ea(a,null,null,b)},ea.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(xa){}return ea(b,n,null,[a]).length>0},ea.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ea.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ea.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ea.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ea.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ea.selectors={cacheLength:50,createPseudo:ga,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ea.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ea.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ea.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ea.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ga(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ga(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ga(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ga(function(a){return function(b){return ea(a,b).length>0}}),contains:ga(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ga(function(a){return V.test(a||"")||ea.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ma(function(){return[0]}),last:ma(function(a,b){return[b-1]}),eq:ma(function(a,b,c){return[c<0?c+b:c]}),even:ma(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:ma(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:ma(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:ma(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ka(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=la(b);function oa(){}oa.prototype=d.filters=d.pseudos,d.setFilters=new oa,g=ea.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ea.error(a):z(a,i).slice(0)};function pa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function qa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function ra(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sa(a,b,c){for(var d=0,e=b.length;d<e;d++)ea(a,b[d],c);return c}function ta(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ua(a,b,c,d,e,f){return d&&!d[u]&&(d=ua(d)),e&&!e[u]&&(e=ua(e,f)),ga(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ta(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ta(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ta(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function va(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qa(function(a){return a===b},h,!0),l=qa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[qa(ra(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ua(i>1&&ra(m),i>1&&pa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&va(a.slice(i,e)),e<f&&va(a=a.slice(e)),e<f&&pa(a))}m.push(c)}return ra(m)}function wa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ta(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ea.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ga(f):f}return h=ea.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=va(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wa(e,d)),f.selector=a}return f},i=ea.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&na(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&pa(j)))return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&na(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ha(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ha(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ia("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ha(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ia("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ha(function(a){return null==a.getAttribute("disabled")})||ia(K,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ea}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;b<e;b++)if(n.contains(d[b],this))return!0}));for(b=0;b<e;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(!(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if((f=d.getElementById(e[2]))&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))}).prototype=n.fn,A=n(d);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.uniqueSort(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g;function G(a){var b={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function b(c){n.each(c,function(c,d){n.isFunction(d)?a.unique&&j.has(d)||f.push(d):d&&d.length&&"string"!==n.type(d)&&b(d)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);b<d;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(!0===a?--n.readyWait:n.isReady)||(n.isReady=!0,!0!==a&&--n.readyWait>0||(H.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function I(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J)):(d.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(I(),n.ready())}n.ready.promise=function(b){if(!H)if(H=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J);else{d.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&function b(){if(!n.isReady){try{c.doScroll("left")}catch(e){return a.setTimeout(b,50)}I(),n.ready()}}()}return H.promise(b)},n.ready.promise();var K;for(K in n(l))break;l.ownFirst="0"===K,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;(c=d.getElementsByTagName("body")[0])&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var L=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)},M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?n.parseJSON(c):c)}catch(e){}n.data(a,b,c)}else c=void 0}return c}function P(a){var b
;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(L(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[n.camelCase(b)]):f=g,f}}function R(a,b,c){if(L(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?n.cache[a[n.expando]]:a[n.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),O(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?O(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)(c=n._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return(c=d.getElementsByTagName("body")[0])&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,n.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)X(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Y=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,$=/^$|\/(?:java|ecma)script/i,_=/^\s+/,aa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ba(a){var b=aa.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var ca={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};ca.optgroup=ca.option,ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead,ca.th=ca.td;function da(a,b){var c,d,e=0,f=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,da(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function ea(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var fa=/<|&#?\w+;/,ga=/<tbody/i;function ha(a){Y.test(a.type)&&(a.defaultChecked=a.checked)}function ia(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ba(b),q=[],r=0;r<o;r++)if((g=a[r])||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(fa.test(g)){i=i||p.appendChild(b.createElement("div")),j=(Z.exec(g)||["",""])[1].toLowerCase(),m=ca[j]||ca._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&_.test(g)&&q.push(b.createTextNode(_.exec(g)[0])),!l.tbody){g="table"!==j||ga.test(g)?"<table>"!==m[1]||ga.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(da(q,"input"),ha),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=da(p.appendChild(g),"script"),h&&ea(i),c){f=0;while(g=i[f++])$.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=!1===e.attributes[c].expando);e=null}();var ja=/^(?:input|select|textarea)$/i,ka=/^key/,la=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ma=/^(?:focusinfocus|focusoutblur)$/,na=/^([^.]*)(?:\.(.+)|)/;function oa(){return!0}function pa(){return!1}function qa(){try{return d.activeElement}catch(a){}}function ra(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ra(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=pa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return void 0===n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=na.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=na.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ma.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||!1!==l.trigger.apply(e,c))){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,ma.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),(g=h&&i[h])&&g.apply&&L(i)&&(b.result=g.apply(i,c),!1===b.result&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||!1===l._default.apply(p.pop(),c))&&L(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,void 0!==(d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=la.test(f)?this.mouseHooks:ka.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==qa()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===qa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(n.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(void 0===a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){if(!(this instanceof n.Event))return new n.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?oa:pa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:pa,isPropagationStopped:pa,isImmediatePropagationStopped:pa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){if(n.nodeName(this,"form"))return!1;n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){if(n.nodeName(this,"form"))return!1;n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){if(ja.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1;n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ja.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return n.event.remove(this,"._change"),!ja.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return ra(this,a,b,c,d)},one:function(a,b,c,d){return ra(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=pa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return n.event.trigger(a,b,c,!0)}});var sa=/ jQuery\d+="(?:null|\d+)"/g,ta=new RegExp("<(?:"+aa+")[\\s/>]","i"),ua=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,va=/<script|<style|<link/i,wa=/checked\s*(?:[^=]|=\s*.checked.)/i,xa=/^true\/(.*)/,ya=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,za=ba(d),Aa=za.appendChild(d.createElement("div"));function Ba(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Ca(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Da(a){var b=xa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ea(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Fa(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Ca(b).text=a.text,Da(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Y.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ga(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&wa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ga(f,b,c,d)});if(o&&(k=ia(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(da(k,"script"),Ca),h=i.length;m<o;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,da(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Da),m=0;m<h;m++)g=i[m],$.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(ya,"")));k=e=null}return a}function Ha(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(da(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&ea(da(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ua,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ta.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Aa.innerHTML=a.outerHTML,Aa.removeChild(f=Aa.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=da(f),h=da(a),g=0;null!=(e=h[g]);++g)d[g]&&Fa(e,d[g]);if(b)if(c)for(h=h||da(a),d=d||da(f),g=0;null!=(e=h[g]);g++)Ea(e,d[g]);else Ea(a,f);return d=da(f,"script"),d.length>0&&ea(d,!i&&da(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||L(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||void 0===d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ga,detach:function(a){return Ha(this,a,!0)},remove:function(a){return Ha(this,a)},text:function(a){return X(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){Ba(this,a).appendChild(a)}})},prepend:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ba(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(da(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return X(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(sa,""):void 0;if("string"==typeof a&&!va.test(a)&&(l.htmlSerialize||!ta.test(a))&&(l.leadingWhitespace||!_.test(a))&&!ca[(Z.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(da(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ga(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(da(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;d<=h;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ia,Ja={HTML:"block",BODY:"block"};function Ka(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function La(a){var b=d,c=Ja[a];return c||(c=Ka(a,b),"none"!==c&&c||(Ia=(Ia||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ia[0].contentWindow||Ia[0].contentDocument).document,b.write(),b.close(),c=Ka(a,b),Ia.detach()),Ja[a]=c),c}var Ma=/^margin/,Na=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Oa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Pa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",(f=0===k[0].offsetHeight)&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}j.style&&(j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}}))}();var Qa,Ra,Sa=/^(top|right|bottom|left)$/;a.getComputedStyle?(Qa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Na.test(g)&&Ma.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Pa.currentStyle&&(Qa=function(a){return a.currentStyle},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Na.test(g)&&!Sa.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ta(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ua=/alpha\([^)]*\)/i,Va=/opacity\s*=\s*([^)]*)/i,Wa=/^(none|table(?!-c[ea]).+)/,Xa=new RegExp("^("+S+")(.*)$","i"),Ya={position:"absolute",visibility:"hidden",display:"block"},Za={letterSpacing:"0",fontWeight:"400"},$a=["Webkit","O","Moz","ms"],_a=d.createElement("div").style;function ab(a){if(a in _a)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=$a.length;while(c--)if((a=$a[c]+b)in _a)return a}function bb(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",La(d.nodeName)))):(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function cb(a,b,c){var d=Xa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function db(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function eb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Qa(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(e<=0||null==e){if(e=Ra(a,b,f),(e<0||null==e)&&(e=a.style[b]),Na.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+db(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ra(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ra(a,b,d)),"normal"===f&&b in Za&&(f=Za[b]),""===c||c?(e=parseFloat(f),!0===c||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c)return Wa.test(n.css(a,"display"))&&0===a.offsetWidth?Oa(a,Ya,function(){return eb(a,b,d)}):eb(a,b,d)},set:function(a,c,d){var e=d&&Qa(a);return cb(a,c,d?db(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Va.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Ua,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ua.test(f)?f.replace(Ua,e):f+" "+e)}}),n.cssHooks.marginRight=Ta(l.reliableMarginRight,function(a,b){if(b)return Oa(a,{display:"inline-block"},Ra,[a,"marginRight"])}),n.cssHooks.marginLeft=Ta(l.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ra(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Oa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),n.each({
margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Ma.test(a)||(n.cssHooks[a+b].set=cb)}),n.fn.extend({css:function(a,b){return X(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Qa(a),e=b.length;g<e;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return bb(this,!0)},hide:function(){return bb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function fb(a,b,c,d,e){return new fb.prototype.init(a,b,c,d,e)}n.Tween=fb,fb.prototype={constructor:fb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=fb.propHooks[this.prop];return a&&a.get?a.get(this):fb.propHooks._default.get(this)},run:function(a){var b,c=fb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):fb.propHooks._default.set(this),this}},fb.prototype.init.prototype=fb.prototype,fb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},fb.propHooks.scrollTop=fb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=fb.prototype.init,n.fx.step={};var gb,hb,ib=/^(?:toggle|show|hide)$/,jb=/queueHooks$/;function kb(){return a.setTimeout(function(){gb=void 0}),gb=n.now()}function lb(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function mb(a,b,c){for(var d,e=(pb.tweeners[b]||[]).concat(pb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function nb(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),"inline"===(k="none"===j?n._data(a,"olddisplay")||La(a.nodeName):j)&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ib.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?La(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=mb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function ob(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=n.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function pb(a,b,c){var d,e,f=0,g=pb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=gb||kb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:gb||kb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(ob(k,j.opts.specialEasing);f<g;f++)if(d=pb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,mb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(pb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(F);for(var c,d=0,e=a.length;d<e;d++)c=a[d],pb.tweeners[c]=pb.tweeners[c]||[],pb.tweeners[c].unshift(b)},prefilters:[nb],prefilter:function(a,b){b?pb.prefilters.unshift(a):pb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=pb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&jb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(lb(b,!0),a,d,e)}}),n.each({slideDown:lb("show"),slideUp:lb("hide"),slideToggle:lb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(gb=n.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),gb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){hb||(hb=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(hb),hb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var qb=/\r/g,rb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),(b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(qb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(rb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b))return a.checked=n.inArray(n(a).val(),b)>-1}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return X(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return!1===b?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){if(!c)return a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){if(!n.nodeName(a,"input"))return sb&&sb.set(a,b,c);a.defaultValue=b}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},ub.id=ub.name=ub.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""!==b&&b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return X(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||!1===a?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(u<2)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),x(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(F)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0==n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),!1===l.cache&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&!1!==l.contentType||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(!1===l.beforeSend.call(m,w,l)||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,x)}catch(y){if(!(u<2))throw y;x(-1,y)}}else x(-1,"No Transport");function x(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&b<300||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),(x=w.getResponseHeader("etag"))&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",b<0&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Y.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,(fc=l.ajax=!!fc)&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):!1!==b.jsonp&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ia([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(void 0!==e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Pa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return X(this,function(a,d,e){var f=lc(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ta(l.pixelPosition,function(a,c){if(c)return c=Ra(a,b),Na.test(c)?n(a).position()[b]+"px":c})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border")
;return X(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);;
var wpFollowButton;

(function($) {
	var cookies = document.cookie.split( /;\s*/ ), cookie = false;
	for ( i = 0; i < cookies.length; i++ ) {
		if ( cookies[i].match( /^wp_api=/ ) ) {
			cookies = cookies[i].split( '=' );
			cookie = cookies[1];
			break;
		}
	}

wpFollowButton = {

	enable: function() {
		$( 'a.wpcom-follow, a.wpcom-following' ).click( function( e ) {
			e.preventDefault();
		
 	 		var link = $( this );
		
			var blog_id = link.data('id');
			var blog_url = link.data('url');
			var is_following = link.hasClass( 'wpcom-following' );

			if ( blog_id ) {
				var f_id = blog_id;
			} else {
				var ln_classes = link.attr( 'class' ).split( ' ' );
				for ( i=0; i < ln_classes.length; i++ ) {
					if ( 0 == ln_classes[i].indexOf('f-') ) {
						var f_id = ln_classes[i].slice( 2, ln_classes[i].length );
					}
				}
			}

 	 		if ( is_following ) {
				var action = 'ab_unsubscribe_from_blog';
 	 		} else {
				var action = 'ab_subscribe_to_blog';
			}

			f_id = parseInt( f_id, 10 ) || 0;
		
			var elem = $( 'a.f-' + f_id );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following' ).removeClass( 'wpcom-follow' ).text( 'Following' );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			var href = link.attr( 'href' );
			if ( typeof href == 'undefined' )
				return;
			var params = href.split( '\?' );
			var domain = params[0];
			var flds = 'undefined' != typeof params[1] ? params[1].split( '&' ) : [];
			for ( var i = 0; i < flds.length; i++ ) {
 	 			var pos = flds[i].indexOf( '=' );
 	 			if ( -1 == pos ) continue;
 	 			var argname = flds[i].substring( 0, pos );
 	 			var value = flds[i].substring( pos+1 );
		
				if ( argname == '_wpnonce') {
 	 				var nonce = value; 
				} else if ( argname == 'src' ) {
					var source = value;
 	 			}
			}

			$.post( domain + 'wp-admin/admin-ajax.php', {
 	 			'action': action,
 	 			'_wpnonce': nonce,
 	 			'blog_id': blog_id,
 	 			'blog_url': blog_url,
 	 			'source': source
			}, function( response ) {
 	 			if ( 'object' == typeof response.errors ) {
 	 				if ( is_following )
 	 					elem.removeClass( 'wpcom-follow' ).addClass( 'wpcom-following' ).text( 'Following' );
 	 				else
 	 					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
 	 			}
 	 		},
			'json' );
		});
	},

	enable_rest: function( el, source ) {
		var t = this;

		el.unbind( 'click' ).bind( 'click', function( e ) {
			e.preventDefault();
 	 		var link = $( this );
			var blog_id = link.attr( 'data-blog-id' );
 	 		var is_following = link.hasClass( 'wpcom-following-rest' );
			var rest_path = '/sites/' + blog_id + '/follows/new';
		
 	 		if ( is_following ) {
				rest_path = '/sites/' + blog_id + '/follows/mine/delete';
 	 		}
			blog_id = parseInt( blog_id, 10 ) || 0;
			//select and update ALL follow buttons on the page (could be more than one)
			var attr_selector = 'data-blog-id="' + blog_id + '"';
			var elem = $( 'a.wpcom-follow-rest[' + attr_selector + '], a.wpcom-following-rest[' + attr_selector + ']' );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following-rest' ).removeClass( 'wpcom-follow-rest' ).text( link.attr( 'data-following-text' ) );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			t.ajax( {
				type: 'POST',
				path : rest_path,
				success : function( res ) {
					if ( ! res.success ){
						if ( is_following )
							elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
						else
							elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					}
				},
				error : function( res ) {
					if ( is_following )
						elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
					else
						elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
				}
			});

			//show post-Follow bubble
			if ( ! is_following ) {
				t.showBubble( link );
				t.bumpStat( link.attr( 'data-stat-src' ) );
			}
		});

		//show unfollow text on hover
		el.hover( function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-hover-text' ) );
			}, function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-text' ) );
			});

	},

	showBubble: function( link ) {
		var pos = link.position();
		var hideBubble = this.hideBubble;
		$( 'div.bubble-txt', 'div.action-bubble' ).html( "New posts from this blog will now appear in <a href='http://wordpress.com/read/following/' onclick='hideBubble()'>your reader</a>." );
		var bubble = $( 'div.action-bubble' );
		link.parent().append( bubble );
		var left = pos.left + ( link.width() / 2 ) - ( $( 'div.wpcom-bubble' ).width() / 2 );
		var top = pos.top + bubble.height();
		bubble.css( { left: left + 'px', top: top + 'px' } );
		bubble.addClass( 'fadein' );
		setTimeout( function() {
			$('body').on( 'click.bubble touchstart.bubble', function(e) {
				if ( !$(e.target).hasClass('action-bubble') && !$(e.target).parents( 'div.action-bubble' ).length )
					hideBubble();
			});
			$(document).on( 'scroll.bubble', hideBubble );
			setTimeout( hideBubble, 10000 );
		}, 500 );
	},

	hideBubble: function() {
		$( 'div.wpcom-bubble.action-bubble' ).remove();
  	},

	//common method for rendering a follow button from the object data
	create : function ( data, source ) {
		var is_following = data['params']['is_following'];
		var follow_link = $('<a></a>', {
			'class' : ( is_following ? 'wpcom-following-rest' : 'wpcom-follow-rest' ),
			href : 'http://public-api.wordpress.com/sites/' + data['params']['site_id'] + '/follows',
			title : data['params']['blog_title'] + 
				' (' + data['params']['blog_domain'] + ')',
			text : is_following ? data['params']['following-text'] : data['params']['follow-text']
		} ).attr( { 
			'data-blog-id' : data['params']['site_id'],
			'data-stat-src' : data['params']['stat-source'],
			'data-follow-text' : data['params']['follow-text'],
			'data-following-text' : data['params']['following-text'],
			'data-following-hover-text' : data['params']['following-hover-text']
		} );
		var follow_button = $( '<div></div>', { 
			'class': 'wpcom-follow-container wpcom-follow-attached',
			style: 'display: inline-block;'
		 } ).append( follow_link );

		this.enable_rest( follow_link, source );
		return follow_button;
	},

	createAll: function() {
		$( '.wpcom-follow-container' ).not( '.wpcom-follow-attached' ).each( function( index ) {
			var el = $( this );
			el.replaceWith( wpFollowButton.create( el.data( 'json' ), el.data( 'follow-source' ) ) );
		});
	},

	ajax: function( options ) {
		if ( document.location.host == 'public-api.wordpress.com' ) {
			//console.log( 'regular ajax call ' + options.type + ' ' + options.path);
			$.ajaxSetup({ beforeSend : function(xhr){
				if ( cookie ) {
					xhr.setRequestHeader( 'Authorization', 'X-WPCOOKIE ' + cookie + ':1:' + document.location.host );
				}
			}});
			var request = {
				type : options.type,
				url : 'https://public-api.wordpress.com/rest/v1' + options.path,
				success : options.success,
				error : options.error,
				data : options.data,
				dataType : 'json'
			};
			$.ajax(request);
			$.ajaxSetup({ beforeSend : null });
		} else {
			//console.log( 'proxied ajax call ' + options.type + ' ' + options.path );
			var request = {
				path: options.path,
				method: options.type
			};
			if ( request.method === "POST" )
				request.body = options.data;
			else
				request.query = options.data;

			$.wpcom_proxy_request(request).done( function ( response, statusCode ) { 
				if ( 200 == statusCode ) 
					options.success( response );
				else
					options.error( statusCode );
			} );
		}
	},

	bumpStat: function( source ) {
		new Image().src = document.location.protocol + 
			'//pixel.wp.com/g.gif?v=wpcom-no-pv&x_follow_source=' + encodeURIComponent( source ) + '&baba=' + Math.random();
	}

};

$(function(){
	wpFollowButton.enable()
	wpFollowButton.createAll()
});

})(jQuery);
;
/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY = {};
(function(window, $, undefined) {

     if (!("console" in window)) {
         var c = window.console = {};
         c.log = c.warn = c.error = c.debug = function(){};
     }

     if ($ === NO_JQUERY) {
         // jQuery is optional
         $ = {
             fn: {},
             extend: function() {
                 var a = arguments[0];
                 for (var i=1,len=arguments.length; i<len; i++) {
                     var b = arguments[i];
                     for (var prop in b) {
                         a[prop] = b[prop];
                     }
                 }
                 return a;
             }
         };
     }

     $.fn.pm = function() {
         console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])");
         return this;
     };

     // send postmessage
     $.pm = window.pm = function(options) {
         pm.send(options);
     };

     // bind postmessage handler
     $.pm.bind = window.pm.bind = function(type, fn, origin, hash, async_reply) {
         pm.bind(type, fn, origin, hash, async_reply === true);
     };

     // unbind postmessage handler
     $.pm.unbind = window.pm.unbind = function(type, fn) {
         pm.unbind(type, fn);
     };

     // default postmessage origin on bind
     $.pm.origin = window.pm.origin = null;

     // default postmessage polling if using location hash to pass postmessages
     $.pm.poll = window.pm.poll = 200;

     var pm = {

         send: function(options) {
             var o = $.extend({}, pm.defaults, options),
             target = o.target;
             if (!o.target) {
                 console.warn("postmessage target window required");
                 return;
             }
             if (!o.type) {
                 console.warn("postmessage type required");
                 return;
             }
             var msg = {data:o.data, type:o.type};
             if (o.success) {
                 msg.callback = pm._callback(o.success);
             }
             if (o.error) {
                 msg.errback = pm._callback(o.error);
             }
             if (("postMessage" in target) && !o.hash) {
                 pm._bind();
                 target.postMessage(JSON.stringify(msg), o.origin || '*');
             }
             else {
                 pm.hash._bind();
                 pm.hash.send(o, msg);
             }
         },

         bind: function(type, fn, origin, hash, async_reply) {
           pm._replyBind ( type, fn, origin, hash, async_reply );
         },

         _replyBind: function(type, fn, origin, hash, isCallback) {
           if (("postMessage" in window) && !hash) {
               pm._bind();
           }
           else {
               pm.hash._bind();
           }
           var l = pm.data("listeners.postmessage");
           if (!l) {
               l = {};
               pm.data("listeners.postmessage", l);
           }
           var fns = l[type];
           if (!fns) {
               fns = [];
               l[type] = fns;
           }
           fns.push({fn:fn, callback: isCallback, origin:origin || $.pm.origin});
         },

         unbind: function(type, fn) {
             var l = pm.data("listeners.postmessage");
             if (l) {
                 if (type) {
                     if (fn) {
                         // remove specific listener
                         var fns = l[type];
                         if (fns) {
                             var m = [];
                             for (var i=0,len=fns.length; i<len; i++) {
                                 var o = fns[i];
                                 if (o.fn !== fn) {
                                     m.push(o);
                                 }
                             }
                             l[type] = m;
                         }
                     }
                     else {
                         // remove all listeners by type
                         delete l[type];
                     }
                 }
                 else {
                     // unbind all listeners of all type
                     for (var i in l) {
                       delete l[i];
                     }
                 }
             }
         },

         data: function(k, v) {
             if (v === undefined) {
                 return pm._data[k];
             }
             pm._data[k] = v;
             return v;
         },

         _data: {},

         _CHARS: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),

         _random: function() {
             var r = [];
             for (var i=0; i<32; i++) {
                 r[i] = pm._CHARS[0 | Math.random() * 32];
             };
             return r.join("");
         },

         _callback: function(fn) {
             var cbs = pm.data("callbacks.postmessage");
             if (!cbs) {
                 cbs = {};
                 pm.data("callbacks.postmessage", cbs);
             }
             var r = pm._random();
             cbs[r] = fn;
             return r;
         },

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("listening.postmessage")) {
                 if (window.addEventListener) {
                     window.addEventListener("message", pm._dispatch, false);
                 }
                 else if (window.attachEvent) {
                     window.attachEvent("onmessage", pm._dispatch);
                 }
                 pm.data("listening.postmessage", 1);
             }
         },

         _dispatch: function(e) {
             //console.log("$.pm.dispatch", e, this);
             try {
                 var msg = JSON.parse(e.data);
             }
             catch (ex) {
                 //console.warn("postmessage data invalid json: ", ex); //message wasn't meant for pm
                 return;
             }
             if (!msg.type) {
                 //console.warn("postmessage message type required"); //message wasn't meant for pm
                 return;
             }
             var cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin && o.origin !== '*' && e.origin !== o.origin) {
                         console.warn("postmessage message origin mismatch", e.origin, o.origin);
                         if (msg.errback) {
                             // notify post message errback
                             var error = {
                                 message: "postmessage origin mismatch",
                                 origin: [e.origin, o.origin]
                             };
                             pm.send({target:e.source, data:error, type:msg.errback});
                         }
                         continue;
                     }

                     function sendReply ( data ) {
                       if (msg.callback) {
                           pm.send({target:e.source, data:data, type:msg.callback});
                       }
                     }

                     try {
                         if ( o.callback ) {
                           o.fn(msg.data, sendReply, e);
                         } else {
                           sendReply ( o.fn(msg.data, e) );
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:e.source, data:ex, type:msg.errback});
                         } else {
                             throw ex;
                         }
                     }
                 };
             }
         }
     };

     // location hash polling
     pm.hash = {

         send: function(options, msg) {
             //console.log("hash.send", target_window, options, msg);
             var target_window = options.target,
             target_url = options.url;
             if (!target_url) {
                 console.warn("postmessage target window url is required");
                 return;
             }
             target_url = pm.hash._url(target_url);
             var source_window,
             source_url = pm.hash._url(window.location.href);
             if (window == target_window.parent) {
                 source_window = "parent";
             }
             else {
                 try {
                     for (var i=0,len=parent.frames.length; i<len; i++) {
                         var f = parent.frames[i];
                         if (f == window) {
                             source_window = i;
                             break;
                         }
                     };
                 }
                 catch(ex) {
                     // Opera: security error trying to access parent.frames x-origin
                     // juse use window.name
                     source_window = window.name;
                 }
             }
             if (source_window == null) {
                 console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");
                 return;
             }
             var hashmessage = {
                 "x-requested-with": "postmessage",
                 source: {
                     name: source_window,
                     url: source_url
                 },
                 postmessage: msg
             };
             var hash_id = "#x-postmessage-id=" + pm._random();
             target_window.location = target_url + hash_id + encodeURIComponent(JSON.stringify(hashmessage));
         },

         _regex: /^\#x\-postmessage\-id\=(\w{32})/,

         _regex_len: "#x-postmessage-id=".length + 32,

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("polling.postmessage")) {
                 setInterval(function() {
                                 var hash = "" + window.location.hash,
                                 m = pm.hash._regex.exec(hash);
                                 if (m) {
                                     var id = m[1];
                                     if (pm.hash._last !== id) {
                                         pm.hash._last = id;
                                         pm.hash._dispatch(hash.substring(pm.hash._regex_len));
                                     }
                                 }
                             }, $.pm.poll || 200);
                 pm.data("polling.postmessage", 1);
             }
         },

         _dispatch: function(hash) {
             if (!hash) {
                 return;
             }
             try {
                 hash = JSON.parse(decodeURIComponent(hash));
                 if (!(hash['x-requested-with'] === 'postmessage' &&
                       hash.source && hash.source.name != null && hash.source.url && hash.postmessage)) {
                     // ignore since hash could've come from somewhere else
                     return;
                 }
             }
             catch (ex) {
                 // ignore since hash could've come from somewhere else
                 return;
             }
             var msg = hash.postmessage,
             cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var source_window;
                 if (hash.source.name === "parent") {
                     source_window = window.parent;
                 }
                 else {
                     source_window = window.frames[hash.source.name];
                 }
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin) {
                         var origin = /https?\:\/\/[^\/]*/.exec(hash.source.url)[0];
                         if (o.origin !== '*' && origin !== o.origin) {
                             console.warn("postmessage message origin mismatch", origin, o.origin);
                             if (msg.errback) {
                                 // notify post message errback
                                 var error = {
                                     message: "postmessage origin mismatch",
                                     origin: [origin, o.origin]
                                 };
                                 pm.send({target:source_window, data:error, type:msg.errback, hash:true, url:hash.source.url});
                             }
                             continue;
                         }
                     }

                     function sendReply ( data ) {
                       if (msg.callback) {
                         pm.send({target:source_window, data:data, type:msg.callback, hash:true, url:hash.source.url});
                       }
                     }

                     try {
                         if ( o.callback ) {
                           o.fn(msg.data, sendReply);
                         } else {
                           sendReply ( o.fn(msg.data) );
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:source_window, data:ex, type:msg.errback, hash:true, url:hash.source.url});
                         } else {
                             throw ex;
                         }
                     }
                 };
             }
         },

         _url: function(url) {
             // url minus hash part
             return (""+url).replace(/#.*$/, "");
         }

     };

     $.extend(pm, {
                  defaults: {
                      target: null,  /* target window (required) */
                      url: null,     /* target window url (required if no window.postMessage or hash == true) */
                      type: null,    /* message type (required) */
                      data: null,    /* message data (required) */
                      success: null, /* success callback (optional) */
                      error: null,   /* error callback (optional) */
                      origin: "*",   /* postmessage origin (optional) */
                      hash: false    /* use location hash for message passing (optional) */
                  }
              });

 })(this, typeof jQuery === "undefined" ? NO_JQUERY : jQuery);

/**
 * http://www.JSON.org/json2.js
 **/
if (! ("JSON" in window && window.JSON)){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
;
var wpcom_mobile_user_agent_info = {
		
		PLATFORM_WINDOWS : 'windows',
		PLATFORM_IPHONE : 'iphone',
		PLATFORM_IPOD : 'ipod',
		PLATFORM_IPAD : 'ipad',
		PLATFORM_BLACKBERRY : 'blackberry',
		PLATFORM_BLACKBERRY_10 : 'blackberry_10',
		PLATFORM_SYMBIAN : 'symbian_series60',
		PLATFORM_SYMBIAN_S40 : 'symbian_series40',
		PLATFORM_J2ME_MIDP : 'j2me_midp',
		PLATFORM_ANDROID : 'android',
		PLATFORM_ANDROID_TABLET : 'android_tablet',
		PLATFORM_FIREFOX_OS : 'firefoxOS',
		PLATFORM_MOBILE_GENERIC : 'mobile_generic',

		userAgent : false, //Shortcut to the browser User Agent String
		matchedPlatformName : false, //Matched platform name. False otherwise.
		matchedUserAgentName : false, //Matched UA String. False otherwise.
		
		init: function() {
			var t = this;
			try{
				t.userAgent = navigator.userAgent.toLowerCase();
				t.getPlatformName();
				t.getMobileUserAgentName();
			}
			catch(e){
				console.error(e);
			}
		},
		
		initForTest: function(userAgent) {
			var t = this;
			t.matchedPlatformName = false;
			t.matchedUserAgentName = false;
			try{
				t.userAgent = userAgent.toLowerCase();
				t.getPlatformName();
				t.getMobileUserAgentName();
			}
			catch(e){
				console.error(e);
			}
		},
		
		
		/**
		 * This method detects the mobile User Agent name.
		 *
		 * @return string The matched User Agent name, false otherwise.
		 */
		getMobileUserAgentName : function() {
			var t = this;
			if ( false !== t.matchedUserAgentName )
				return t.matchedUserAgentName;

			if ( false === t.userAgent )
				return false;

			if( t.isChromeForIOS() )
				t.matchedUserAgentName = 'chrome-for-ios';
			else if( t.isTwitterForIpad() )
				t.matchedUserAgentName =  'twitter-for-ipad';
			else if( t.isTwitterForIphone() )
				t.matchedUserAgentName =  'twitter-for-iphone';
			else if( t.isIPhoneOrIPod() ) 
				t.matchedUserAgentName = 'iphone';
			else if ( t.isIPad() )
				t.matchedUserAgentName = 'ipad';
			else if( t.isAndroidTablet() )
				t.matchedUserAgentName = 'android_tablet';
			else if( t.isAndroid() )
				t.matchedUserAgentName = 'android';
			else if( t.isBlackberry10() )
				t.matchedUserAgentName = 'blackberry_10';
			else if( t.userAgent.indexOf('blackberry') != -1 )
				t.matchedUserAgentName = 'blackberry';
			else if( t.isBlackberryTablet() )
				t.matchedUserAgentName = 'blackberry_tablet';
			else if( t.isWindowsPhone7() )
				t.matchedUserAgentName = 'win7';
			else if( t.isWindowsPhone8() )
				t.matchedUserAgentName = 'winphone8';
			else if( t.isOperaMini() )
				t.matchedUserAgentName = 'opera-mini';
			else if( t.isOperaMobile() )
				t.matchedUserAgentName = 'opera-mobi';
			else if( t.isKindleFire() )
				t.matchedUserAgentName = 'kindle-fire';
			else if( t.isSymbianPlatform() )
				t.matchedUserAgentName = 'series60';
			else if( t.isFirefoxMobile() )
				t.matchedUserAgentName = 'firefox_mobile';
			else if( t.isFirefoxOS() )
				t.matchedUserAgentName = 'firefoxOS';
			else if( t.isFacebookForIphone() )
				t.matchedUserAgentName = 'facebook-for-iphone';
			else if( t.isFacebookForIpad() )
				t.matchedUserAgentName = 'facebook-for-ipad';
			else if( t.isWordPressForIos())
				t.matchedUserAgentName = 'ios-app';
			else if( t.userAgent.indexOf('iphone') != -1 )
				t.matchedUserAgentName = 'iphone-unknown';
			else if( t.userAgent.indexOf('ipad') != -1 )
				t.matchedUserAgentName = 'ipad-unknown';
			
			return t.matchedUserAgentName ;
		},
		
		getPlatformName : function() {
			var t = this;
			if ( false !== t.matchedPlatformName )
				return t.matchedPlatformName;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.userAgent.indexOf('windows ce') != -1 || t.userAgent.indexOf('windows phone') != -1) {
				t.matchedPlatformName = t.PLATFORM_WINDOWS;
			} else if( t.userAgent.indexOf('ipad') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPAD;
			} else if( t.userAgent.indexOf('ipod') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPOD;
			} else if( t.userAgent.indexOf('iphone') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPHONE;
			} else if( t.userAgent.indexOf('android') != -1 ) {
				if ( t.isAndroidTablet() )
					t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
				else
					t.matchedPlatformName = t.PLATFORM_ANDROID;
			} else if( t.isKindleFire() ) {
				t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
			} else if( t.isBlackberry10() ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY_10;
			} else if( t.userAgent.indexOf('blackberry') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
			} else if( t.isBlackberryTablet() ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
			} else if( t.isSymbianPlatform() ) {
				t.matchedPlatformName = t.PLATFORM_SYMBIAN;
			} else if( t.isSymbianS40Platform() ) {
				t.matchedPlatformName = t.PLATFORM_SYMBIAN_S40;
			} else if( t.isJ2MEPlatform() ) {
				t.matchedPlatformName = t.PLATFORM_J2ME_MIDP;
			} else if (t.isFirefoxOS()) {			
				t.matchedPlatformName = t.PLATFORM_FIREFOX_OS;
			} else if (t.isFirefoxMobile()) {			
				t.matchedPlatformName = t.PLATFORM_MOBILE_GENERIC;
			}
			
			return t.matchedPlatformName;
		},
		
		
		/**
		 * Detect the blackBerry OS version.
		 * 
		 * Note: This is for smartphones only. Do not work on BB tablets.
		 *
		 */
		getBlackBerryOSVersion : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.isBlackberry10() )
				return '10';
			
			if( t.userAgent.indexOf('blackberry') == -1)
				return false;
			
			var rv = -1; // Return value assumes failure.
			if ( t.userAgent.indexOf('webkit') != -1 ) { //detecting the BB OS version for devices running OS 6.0 or higher
				var re  = new RegExp(/Version\/([\d\.]+)/i);
			} else {
				//blackberry devices <= 5.XX
				//BlackBerry9000/5.0.0.93 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179
				var re  = new RegExp(/BlackBerry\w+\/([\d\.]+)/i);
			}
			if (re.exec(t.userAgent) != null)
				rv =  RegExp.$1.toString();
			
			if( -1 == rv )
				return false;
			
			return rv;
		},
		
		/**
		 * Detects if the current UA is iPhone Mobile Safari or another iPhone or iPod Touch Browser.
		 */
		isIPhoneOrIPod : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			var isIphone = ( t.userAgent.indexOf('iphone') != -1 || t.userAgent.indexOf('ipod') != -1 );
			var isSafari = ( t.userAgent.indexOf('safari') != -1 );
			
			return( isIphone && isSafari );
		},

		/**
		 * Detects if the current device is an iPad.
		 */
		isIPad : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('ipad') != -1 && t.userAgent.indexOf('safari') != -1);
		},
		
		
		/**
		*  Detects if the current UA is Chrome for iOS
		*
		*/
		isChromeForIOS : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;
			
			return( t.isIPhoneOrIPod() && t.userAgent.indexOf('crios/') != -1);
		},
		
	    /**
	     * Detects if the current browser is the Native Android browser.
	     * @return boolean true if the browser is Android otherwise false
	     */
		 isAndroid : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('android') != -1 ) {
				if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
					return false;
				else
					return true;
			} 
			return false;
		},
		
		/**
		 * Detects if the current browser is the Native Android Tablet browser.
		 * 	Assumes 'Android' should be in the user agent, but not 'mobile'
		 *
		 * @return boolean true if the browser is Android and not 'mobile' otherwise false
		 */
		 isAndroidTablet : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.userAgent.indexOf('android') != -1 && t.userAgent.indexOf('mobile') == -1) {
				if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
					return false;
				else
					return true;
			}
			return false;
		},
		
		
		/**
		 * Detects if the current browser is Opera Mobile
		 *
		 * What is the difference between Opera Mobile and Opera Mini?
		 * - Opera Mobile is a full Internet browser for mobile devices.
		 * - Opera Mini always uses a transcoder to convert the page for a small display.
		 * (it uses Opera advanced server compression technology to compress web content before it gets to a device.
		 *  The rendering engine is on Opera's server.)
		 *
		 * Opera/9.80 (Windows NT 6.1; Opera Mobi/14316; U; en) Presto/2.7.81 Version/11.00"
		 */
		isOperaMobile : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('opera') != -1 && t.userAgent.indexOf('mobi') != -1);
		},

		/**
		 * Detects if the current browser is Opera Mini
		 *
		 * Opera/8.01 (J2ME/MIDP; Opera Mini/3.0.6306/1528; en; U; ssr)
		 * Opera/9.80 (Android;Opera Mini/6.0.24212/24.746 U;en) Presto/2.5.25 Version/10.5454
		 * Opera/9.80 (iPhone; Opera Mini/5.0.019802/18.738; U; en) Presto/2.4.15
		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
		 * Opera/9.80 (Series 60; Opera Mini/5.1.22783/23.334; U; en) Presto/2.5.25 Version/10.54
		 * Opera/9.80 (BlackBerry; Opera Mini/5.1.22303/22.387; U; en) Presto/2.5.25 Version/10.54
		 *
		 */
		isOperaMini : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('opera') != -1 && t.userAgent.indexOf('mini') != -1);
		},

		
		/**
		 * isBlackberry10() can be used to check the User Agent for a BlackBerry 10 device.
		 */
		isBlackberry10 : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('bb10') != -1 && t.userAgent.indexOf('mobile') != -1);
		},
		
		/**
		 * isBlackberryTablet() can be used to check the User Agent for a RIM blackberry tablet
		 * The user agent of the BlackBerry® Tablet OS follows a format similar to the following:
		 * Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+
		 *
		 */
		 isBlackberryTablet : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('playbook') != -1 && t.userAgent.indexOf('rim tablet') != -1);
		},
		
		/**
		 * Detects if the current browser is a Windows Phone 7 device.
		 * ex: Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)
		 */
		isWindowsPhone7 : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return ( t.userAgent.indexOf('windows phone os 7') != -1 ); 
		},
		
		/**
		 * Detects if the current browser is a Windows Phone 8 device.
		 * ex: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; ARM; Touch; IEMobile/10.0; <Manufacturer>; <Device> [;<Operator>])
		 */
		isWindowsPhone8 : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return ( t.userAgent.indexOf('windows phone 8') != -1 );
		},
		
		/**
		 *
		 * Detects if the device platform is J2ME.
		 *
		 */
		isJ2MEPlatform : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('j2me/midp') != -1 ) 
				return true;

			if ( t.userAgent.indexOf('midp') != -1 && t.userAgent.indexOf('cldc') != -1 ) 
				return true;

			return false;
		},
		
		
		/**
		 *
		 * Detects if the device platform is the Symbian Series 40.
		 * Nokia Browser for Series 40 is a proxy based browser, previously known as Ovi Browser.
		 * This browser will report 'NokiaBrowser' in the header, however some older version will also report 'OviBrowser'.
		 *
		 */
		isSymbianS40Platform : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('series40') != -1 ) {
				if ( t.userAgent.indexOf('nokia') != -1 || t.userAgent.indexOf('ovibrowser') != -1 || t.userAgent.indexOf('nokiabrowser') != -1)
					return true;
			}

			return false;
		},
		
		
		/**
		 *
		 * Detects if the device platform is the Symbian Series 60.
		 *
		 */
		isSymbianPlatform : function() {

			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('webkit') != -1 ) {
				//First, test for WebKit, then make sure it's either Symbian or S60.
				if ( t.userAgent.indexOf('symbian') != -1 || t.userAgent.indexOf('series60') != -1 )
					return true;
				else
					return false;
			} else if ( t.userAgent.indexOf('symbianos') != -1 && t.userAgent.indexOf('series60') != -1 ) {
				return true;
			} else if ( t.userAgent.indexOf('nokia') != -1 && t.userAgent.indexOf('series60') != -1 ) {
				return true;
			} else if (  t.userAgent.indexOf('opera mini') != -1) {
				if( t.userAgent.indexOf('symbianos') != -1 || t.userAgent.indexOf('symbos') != -1 || t.userAgent.indexOf('series 60') != -1 )
					return true;
			}

			return false;
		},

		
		/**
		 * Detects if the current browser is the Kindle Fire Native browser.
		 *
		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true
		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=false
		 *
		 * @return boolean true if the browser is Kindle Fire Native browser otherwise false
		 */
		isKindleFire : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('silk/') != -1 && t.userAgent.indexOf('silk-accelerated=') != -1);
		},
		
		/**
		 * Detects if the current browser is Firefox Mobile (Fennec)
		 *
		 * http://www.userAgentstring.com/pages/Fennec/
		 * Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.1.1) Gecko/20110415 Firefox/4.0.2pre Fennec/4.0.1
		 * Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1
		 */
		isFirefoxMobile : function() {
			var t = this;
		
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('fennec') != -1 )
				return true;

			return false;
		},
		
		
		/**
		 * Detects if the current browser is the native FirefoxOS browser
		 * 
		 * Mozilla/5.0 (Mobile; rv:14.0) Gecko/14.0 Firefox/14.0
		 * 
		 */
		isFirefoxOS : function() {
			var t = this;
		
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('mozilla') != -1 && t.userAgent.indexOf('mobile') != -1 && t.userAgent.indexOf('gecko') != -1 &&  t.userAgent.indexOf('firefox') != -1 )
				return true;

			return false;
		},
		
		
		/**
		 * Detects if the current UA is Facebook for iPad
		 * - Facebook 4020.0 (iPad; iPhone OS 5.0.1; en_US)
		 * - Mozilla/5.0 (iPad; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/5.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US;FBSF/1.0]
		 * - Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A403 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/6.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US]
		 */
		isFacebookForIpad : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('ipad') == -1 )
				return false;

			if ( t.userAgent.indexOf('facebook') != -1 || t.userAgent.indexOf('fbforiphone') != -1 ||  t.userAgent.indexOf('fban/fbios;') != -1 )
				return true;
			
			return false;
		},
		
		/**
		 * Detects if the current UA is Facebook for iPhone
		 * - Facebook 4020.0 (iPhone; iPhone OS 5.0.1; fr_FR)
		 * - Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.0;FBSS/2; FBCR/O2;FBID/phone;FBLC/en_US;FBSF/2.0]
		 * - Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; FBCR/3ITA;FBID/phone;FBLC/en_US]
		 */
		isFacebookForIphone : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('iphone') == -1 )
				return false;

			if ( t.userAgent.indexOf('facebook') != -1 && t.userAgent.indexOf('ipad') == -1  )
				return true;
			else if ( t.userAgent.indexOf('fbforiphone') != -1 && t.userAgent.indexOf('tablet') == -1  )
				return true;
			else if ( t.userAgent.indexOf('fban/fbios;') != -1 && t.userAgent.indexOf('tablet') == -1  ) //FB app v5.0 or higher
				return true;

			return false;
		},
		
		/**
		 *  Detects if the current UA is Twitter for iPhone
		 *  
		 * Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; nb-no) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPhone
		 * Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone
		 */
		isTwitterForIphone : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('ipad') != -1 )
				return false;

			if ( t.userAgent.indexOf('twitter for iphone') != -1 )
				return true;

			return false;
		},
		
		/**
		 * Detects if the current UA is Twitter for iPad
		 * 
		 * Old version 4.X - Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPad
		 * Ver 5.0 or Higher - Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone 
		 */
		isTwitterForIpad : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('twitter for ipad') != -1 )
				return true;

			if ( t.userAgent.indexOf('ipad') != -1 && t.userAgent.indexOf('twitter for iphone') != -1  )
				return true;

			return false;
		},
		
		
		/**
		 *  Detects if the current UA is WordPress for iOS
		 */
		isWordPressForIos : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('wp-iphone') != -1 )
				return true;

			return false;
		}
		
};;
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function ($) {
  var inviewObjects = {}, viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, expando = $.expando;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };
    },

    remove: function(data) {
      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = $(), elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      $elements = $elements.add(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize   = viewportSize   || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i<elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i])) {
          continue;
        }

        var element       = $elements[i],
            $element      = $(element),
            elementSize   = {},
            elementOffset = {},
            inView        = $element.data('inview'),
            visiblePartX,
            visiblePartY,
            visiblePartsMerged;

        // for the case where 'display:none' is used in place of 'visibility:hidden'
        // count and sum the above items to get and move closer to the correct values
        // IMPORTANT :: insert element into container empty
        if($element.css('display') == 'none')
        {
            var parentElement = $element.parent();

            elementOffset.top = parentElement.offset().top;
            elementOffset.left = parentElement.offset().left;
            elementSize.height = parentElement.height();
            elementSize.width = parentElement.width();
        } else {
       	    elementSize = { height: $element.height(), width: $element.width() }
       	    elementOffset = $element.offset();
       	}

        // Don't ask me why because I haven't figured out yet:
        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
        // Even though it sounds weird:
        // It seems that the execution of this function is interferred by the onresize/onscroll event
        // where viewportOffset and viewportSize are unset
        if (!viewportOffset || !viewportSize) {
          return;
        }

        if (element.offsetWidth >= 0 && element.offsetHeight >= 0 && element.style.display != "none" &&
            elementOffset.top + elementSize.height > viewportOffset.top &&
            elementOffset.top < viewportOffset.top + viewportSize.height &&
            elementOffset.left + elementSize.width > viewportOffset.left &&
            elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }

  // Use setInterval in order to also make sure this captures elements within
  // "overflow:scroll" elements or elements that appeared in the dom tree due to
  // dom manipulation and reflow
  // old: $(window).scroll(checkInView);
  //
  // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
  // intervals while the user scrolls. Therefore the inview event might fire a bit late there
  setInterval(checkInView, 250);
})(jQuery);;
/* global Jetpack, JSON */
/**
 * Resizeable Iframes.
 *
 * Start listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable' );
 * - OR -
 * Jetpack.resizeable( 'on', context );
 *
 * Resize selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'resize', { width: 100, height: 200 } );
 * - OR -
 * Jetpack.resizeable( 'resize', { width: 100, height: 200 }, context );
 *
 * Stop listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'off' );
 * - OR -
 * Jetpack.resizeable( 'off', context );
 *
 * Stop listening to all resize postMessage events:
 * Jetpack.resizeable( 'off' );
 */
( function( $ ) {
	var listening = false, // Are we listening for resize postMessage events
		sourceOrigins = [], // What origins are allowed to send resize postMessage events
		$sources = false, // What iframe elements are we tracking resize postMessage events from
		URLtoOrigin, // Utility to convert URLs into origins
		setupListener, // Binds global resize postMessage event handler
		destroyListener, // Unbinds global resize postMessage event handler
		methods; // Jetpack.resizeable methods

	// Setup the Jetpack global
	if ( 'undefined' === typeof window.Jetpack ) {
		window.Jetpack = {
			/**
			 * Handles the two different calling methods:
			 * $( selector ).Jetpack( 'namespace', 'method', context ) // here, context is optional and is used to filter the collection
			 * - vs. -
			 * Jetpack.namespace( 'method', context ) // here context defines the collection
			 *
			 * @internal
			 *
			 * Call as: Jetpack.getTarget.call( this, context )
			 *
			 * @param string context: jQuery selector
			 * @return jQuery|undefined object on which to perform operations or undefined when context cannot be determined
			 */
			getTarget: function( context ) {
				if ( this instanceof jQuery ) {
					return context ? this.filter( context ) : this;
				}

				return context ? $( context ) : context;
			},
		};
	}

	// Setup the Jetpack jQuery method
	if ( 'undefined' === typeof $.fn.Jetpack ) {
		/**
		 * Dispatches calls to the correct namespace
		 *
		 * @param string namespace
		 * @param ...
		 * @return mixed|jQuery (chainable)
		 */
		$.fn.Jetpack = function( namespace ) {
			if ( 'function' === typeof Jetpack[ namespace ] ) {
				// Send the call to the correct Jetpack.namespace
				return Jetpack[ namespace ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
			} else {
				$.error( 'Namespace "' + namespace + '" does not exist on jQuery.Jetpack' );
			}
		};
	}

	// Define Jetpack.resizeable() namespace to just always bail if no postMessage
	if ( 'function' !== typeof window.postMessage ) {
		$.extend( window.Jetpack, {
			/**
			 * Defines the Jetpack.resizeable() namespace.
			 * See below for non-trivial definition for browsers with postMessage.
			 */
			resizeable: function() {
				$.error( 'Browser does not support window.postMessage' );
			},
		} );

		return;
	}

	/**
	 * Utility to convert URLs into origins
	 *
	 * http://example.com:port/path?query#fragment -> http://example.com:port
	 *
	 * @param string URL
	 * @return string origin
	 */
	URLtoOrigin = function( URL ) {
		if ( ! URL.match( /^https?:\/\// ) ) {
			URL = document.location.href;
		}
		return URL.split( '/' )
			.slice( 0, 3 )
			.join( '/' );
	};

	/**
	 * Binds global resize postMessage event handler
	 */
	setupListener = function() {
		listening = true;

		$( window ).on( 'message.JetpackResizeableIframe', function( e ) {
			var event = e.originalEvent,
				data;

			// Ensure origin is allowed
			if ( -1 === $.inArray( event.origin, sourceOrigins ) ) {
				return;
			}

			// Some browsers send structured data, some send JSON strings
			if ( 'object' === typeof event.data ) {
				data = event.data.data;
			} else {
				try {
					data = JSON.parse( event.data );
				} catch ( err ) {
					data = false;
				}
			}

			if ( ! data.data ) {
				return;
			}

			// Un-nest
			data = data.data;

			// Is it a resize event?
			if ( 'undefined' === typeof data.action || 'resize' !== data.action ) {
				return;
			}

			// Find the correct iframe and resize it
			$sources
				.filter( function() {
					if ( 'undefined' !== typeof data.name ) {
						return this.name === data.name;
					} else {
						return event.source === this.contentWindow;
					}
				} )
				.first()
				.Jetpack( 'resizeable', 'resize', data );
		} );
	};

	/**
	 * Unbinds global resize postMessage event handler
	 */
	destroyListener = function() {
		listening = false;
		$( window ).off( 'message.JetpackResizeableIframe' );

		sourceOrigins = [];
		$( '.jetpack-resizeable' ).removeClass( 'jetpack-resizeable' );
		$sources = false;
	};

	// Methods for Jetpack.resizeable() namespace
	methods = {
		/**
		 * Start listening for resize postMessage events on the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'on', context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'on', context ) // context optional: used to filter the collectino
		 *
		 * @param string context jQuery selector.
		 * @return jQuery (chainable)
		 */
		on: function( context ) {
			var target = Jetpack.getTarget.call( this, context );

			if ( ! listening ) {
				setupListener();
			}

			target
				.each( function() {
					sourceOrigins.push( URLtoOrigin( $( this ).attr( 'src' ) ) );
				} )
				.addClass( 'jetpack-resizeable' );

			$sources = $( '.jetpack-resizeable' );

			return target;
		},

		/**
		 * Stop listening for resize postMessage events on the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'off', context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'off', context ) // context optional: used to filter the collectino
		 *
		 * @param string context jQuery selector
		 * @return jQuery (chainable)
		 */
		off: function( context ) {
			var target = Jetpack.getTarget.call( this, context );

			if ( 'undefined' === typeof target ) {
				destroyListener();

				return target;
			}

			target
				.each( function() {
					var origin = URLtoOrigin( $( this ).attr( 'src' ) ),
						pos = $.inArray( origin, sourceOrigins );

					if ( -1 !== pos ) {
						sourceOrigins.splice( pos, 1 );
					}
				} )
				.removeClass( 'jetpack-resizeable' );

			$sources = $( '.jetpack-resizeable' );

			return target;
		},

		/**
		 * Resize the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'resize', dimensions, context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'resize', dimensions, context ) // context optional: used to filter the collectino
		 *
		 * @param object dimensions in pixels: { width: (int), height: (int) }
		 * @param string context jQuery selector
		 * @return jQuery (chainable)
		 */
		resize: function( dimensions, context ) {
			var target = Jetpack.getTarget.call( this, context );

			$.each( [ 'width', 'height' ], function( i, variable ) {
				var value = 0,
					container;
				if ( 'undefined' !== typeof dimensions[ variable ] ) {
					value = parseInt( dimensions[ variable ], 10 );
				}

				if ( 0 !== value ) {
					target[ variable ]( value );
					container = target.parent();
					if ( container.hasClass( 'slim-likes-widget' ) ) {
						container[ variable ]( value );
					}
				}
			} );

			return target;
		},
	};

	// Define Jetpack.resizeable() namespace
	$.extend( window.Jetpack, {
		/**
		 * Defines the Jetpack.resizeable() namespace.
		 * See above for trivial definition for browsers with no postMessage.
		 *
		 * @param string method
		 * @param ...
		 * @return mixed|jQuery (chainable)
		 */
		resizeable: function( method ) {
			if ( methods[ method ] ) {
				// Send the call to the correct Jetpack.resizeable() method
				return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
			} else if ( ! method ) {
				// By default, send to Jetpack.resizeable( 'on' ), which isn't useful in that form but is when called as
				// jQuery( selector ).Jetpack( 'resizeable' )
				return methods.on.apply( this );
			} else {
				$.error( 'Method ' + method + ' does not exist on Jetpack.resizeable' );
			}
		},
	} );
} )( jQuery );
;
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	var viewportmeta = document.querySelector('meta[name="viewport"]');
	if (viewportmeta) {
		viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
		document.addEventListener('gesturestart', function () {
			viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		}, false);
	}
}
;
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){},{}],2:[function(e,t,n){(function(n){var o,i=void 0!==n?n:"undefined"!=typeof window?window:{},r=e(1);"undefined"!=typeof document?o=document:(o=i["__GLOBAL_DOCUMENT_CACHE@4"])||(o=i["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],3:[function(e,t,n){(function(e){var n;n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){!function(e){function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void s(t.promise,e)}a(t.promise,o)}else(1===e._state?a:s)(t.promise,e._value)})):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void u(o(n,t),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)r(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var c=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var o=new this.constructor(n);return r(this,new d(e,t,o)),o},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function o(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){o(r,e)},n)}t[r]=a,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,r=0;r<t.length;r++)o(r,t[r])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var o=0,i=e.length;o<i;o++)e[o].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==t&&t.exports?t.exports=i:e.Promise||(e.Promise=i)}(this)},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){return e&&e.__esModule?e:{default:e}}(e(7)),r=e(15),a=e(27),s={lang:"en",en:r.EN};s.language=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(null!==t&&void 0!==t&&t.length){if("string"!=typeof t[0])throw new TypeError("Language code must be a string value");if(!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0]))throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");s.lang=t[0],void 0===s[t[0]]?(t[1]=null!==t[1]&&void 0!==t[1]&&"object"===o(t[1])?t[1]:{},s[t[0]]=(0,a.isObjectEmpty)(t[1])?r.EN:t[1]):null!==t[1]&&void 0!==t[1]&&"object"===o(t[1])&&(s[t[0]]=t[1])}return s.lang},s.t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof e&&e.length){var n=void 0,i=void 0,r=s.language(),l=function(e,t,n){return"object"!==(void 0===e?"undefined":o(e))||"number"!=typeof t||"number"!=typeof n?e:[function(){return arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 0===(arguments.length<=0?void 0:arguments[0])||1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:0!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])||11===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])||12===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])>2&&(arguments.length<=0?void 0:arguments[0])<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||(arguments.length<=0?void 0:arguments[0])%100>0&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])>=2&&(arguments.length<=0?void 0:arguments[0])<=4?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%100==1?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])%100==2?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])%100==3||(arguments.length<=0?void 0:arguments[0])%100==4?arguments.length<=4?void 0:arguments[4]:arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])>2&&(arguments.length<=0?void 0:arguments[0])<7?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])>6&&(arguments.length<=0?void 0:arguments[0])<11?arguments.length<=4?void 0:arguments[4]:arguments.length<=5?void 0:arguments[5]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])%100>=3&&(arguments.length<=0?void 0:arguments[0])%100<=10?arguments.length<=4?void 0:arguments[4]:(arguments.length<=0?void 0:arguments[0])%100>=11?arguments.length<=5?void 0:arguments[5]:arguments.length<=6?void 0:arguments[6]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||(arguments.length<=0?void 0:arguments[0])%100>1&&(arguments.length<=0?void 0:arguments[0])%100<11?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])%100>10&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10==2?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 11!==(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])%10==1?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:8!==(arguments.length<=0?void 0:arguments[0])&&11!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:3===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]}][n].apply(null,[t].concat(e))};return void 0!==s[r]&&(n=s[r][e],null!==t&&"number"==typeof t&&(i=s[r]["mejs.plural-form"],n=l.apply(null,[n,t,i]))),!n&&s.en&&(n=s.en[e],null!==t&&"number"==typeof t&&(i=s.en["mejs.plural-form"],n=l.apply(null,[n,t,i]))),n=n||e,null!==t&&"number"==typeof t&&(n=n.replace("%1",t)),(0,a.escapeHTML)(n)}return e},i.default.i18n=s,"undefined"!=typeof mejsL10n&&i.default.i18n.language(mejsL10n.language,mejsL10n.strings),n.default=s},{15:15,27:27,7:7}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=o(e(3)),s=o(e(2)),l=o(e(7)),d=e(27),u=e(28),c=e(8),f=e(25),p=function e(t,n,o){var p=this;i(this,e);var m=this;o=Array.isArray(o)?o:null,m.defaults={renderers:[],fakeNodeName:"mediaelementwrapper",pluginPath:"build/",shimScriptAccess:"sameDomain"},n=Object.assign(m.defaults,n),m.mediaElement=s.default.createElement(n.fakeNodeName);var h=t,v=!1;if("string"==typeof t?m.mediaElement.originalNode=s.default.getElementById(t):(m.mediaElement.originalNode=t,h=t.id),void 0===m.mediaElement.originalNode||null===m.mediaElement.originalNode)return null;m.mediaElement.options=n,h=h||"mejs_"+Math.random().toString().slice(2),m.mediaElement.originalNode.setAttribute("id",h+"_from_mejs");var g=m.mediaElement.originalNode.tagName.toLowerCase();["video","audio"].indexOf(g)>-1&&!m.mediaElement.originalNode.getAttribute("preload")&&m.mediaElement.originalNode.setAttribute("preload","none"),m.mediaElement.originalNode.parentNode.insertBefore(m.mediaElement,m.mediaElement.originalNode),m.mediaElement.appendChild(m.mediaElement.originalNode);var y=function(e,t){if("https:"===a.default.location.protocol&&0===e.indexOf("http:")&&f.IS_IOS&&l.default.html5media.mediaTypes.indexOf(t)>-1){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=(a.default.URL||a.default.webkitURL).createObjectURL(this.response);return m.mediaElement.originalNode.setAttribute("src",t),t}return e},n.open("GET",e),n.responseType="blob",n.send()}return e},E=void 0;if(null!==o)E=o;else if(null!==m.mediaElement.originalNode)switch(E=[],m.mediaElement.originalNode.nodeName.toLowerCase()){case"iframe":E.push({type:"",src:m.mediaElement.originalNode.getAttribute("src")});break;case"audio":case"video":var b=m.mediaElement.originalNode.children.length,S=m.mediaElement.originalNode.getAttribute("src");if(S){var x=m.mediaElement.originalNode,w=(0,u.formatType)(S,x.getAttribute("type"));E.push({type:w,src:y(S,w)})}for(var P=0;P<b;P++){var T=m.mediaElement.originalNode.children[P];if("source"===T.tagName.toLowerCase()){var C=T.getAttribute("src"),k=(0,u.formatType)(C,T.getAttribute("type"));E.push({type:k,src:y(C,k)})}}}m.mediaElement.id=h,m.mediaElement.renderers={},m.mediaElement.events={},m.mediaElement.promises=[],m.mediaElement.renderer=null,m.mediaElement.rendererName=null,m.mediaElement.changeRenderer=function(e,t){var n=p,o=Object.keys(t[0]).length>2?t[0]:t[0].src;if(void 0!==n.mediaElement.renderer&&null!==n.mediaElement.renderer&&n.mediaElement.renderer.name===e)return n.mediaElement.renderer.pause(),n.mediaElement.renderer.stop&&n.mediaElement.renderer.stop(),n.mediaElement.renderer.show(),n.mediaElement.renderer.setSrc(o),!0;void 0!==n.mediaElement.renderer&&null!==n.mediaElement.renderer&&(n.mediaElement.renderer.pause(),n.mediaElement.renderer.stop&&n.mediaElement.renderer.stop(),n.mediaElement.renderer.hide());var i=n.mediaElement.renderers[e],r=null;if(void 0!==i&&null!==i)return i.show(),i.setSrc(o),n.mediaElement.renderer=i,n.mediaElement.rendererName=e,!0;for(var a=n.mediaElement.options.renderers.length?n.mediaElement.options.renderers:c.renderer.order,s=0,l=a.length;s<l;s++){var d=a[s];if(d===e){r=c.renderer.renderers[d];var u=Object.assign(r.options,n.mediaElement.options);return i=r.create(n.mediaElement,u,t),i.name=e,n.mediaElement.renderers[r.name]=i,n.mediaElement.renderer=i,n.mediaElement.rendererName=e,i.show(),!0}}return!1},m.mediaElement.setSize=function(e,t){void 0!==m.mediaElement.renderer&&null!==m.mediaElement.renderer&&m.mediaElement.renderer.setSize(e,t)},m.mediaElement.generateError=function(e,t){e=e||"",t=Array.isArray(t)?t:[];var n=(0,d.createEvent)("error",m.mediaElement);n.message=e,n.urls=t,m.mediaElement.dispatchEvent(n),v=!0};var _=l.default.html5media.properties,N=l.default.html5media.methods,A=function(e,t,n,o){var i=e[t];Object.defineProperty(e,t,{get:function(){return n.apply(e,[i])},set:function(t){return i=o.apply(e,[t])}})},L=function(){return void 0!==m.mediaElement.renderer&&null!==m.mediaElement.renderer?m.mediaElement.renderer.getSrc():null},F=function(e){var t=[];if("string"==typeof e)t.push({src:e,type:e?(0,u.getTypeFromFile)(e):""});else if("object"===(void 0===e?"undefined":r(e))&&void 0!==e.src){var n=(0,u.absolutizeUrl)(e.src),o=e.type,i=Object.assign(e,{src:n,type:""!==o&&null!==o&&void 0!==o||!n?o:(0,u.getTypeFromFile)(n)});t.push(i)}else if(Array.isArray(e))for(var a=0,s=e.length;a<s;a++){var l=(0,u.absolutizeUrl)(e[a].src),f=e[a].type,p=Object.assign(e[a],{src:l,type:""!==f&&null!==f&&void 0!==f||!l?f:(0,u.getTypeFromFile)(l)});t.push(p)}var h=c.renderer.select(t,m.mediaElement.options.renderers.length?m.mediaElement.options.renderers:[]),v=void 0;if(m.mediaElement.paused||(m.mediaElement.pause(),v=(0,d.createEvent)("pause",m.mediaElement),m.mediaElement.dispatchEvent(v)),m.mediaElement.originalNode.src=t[0].src||"",null!==h||!t[0].src)return t[0].src?m.mediaElement.changeRenderer(h.rendererName,t):null;m.mediaElement.generateError("No renderer found",t)},j=function(e,t){try{if("play"===e&&"native_dash"===m.mediaElement.rendererName){var n=m.mediaElement.renderer[e](t);n&&"function"==typeof n.then&&n.catch(function(){m.mediaElement.paused&&setTimeout(function(){var e=m.mediaElement.renderer.play();void 0!==e&&e.catch(function(){m.mediaElement.renderer.paused||m.mediaElement.renderer.pause()})},150)})}else m.mediaElement.renderer[e](t)}catch(e){m.mediaElement.generateError(e,E)}};A(m.mediaElement,"src",L,F),m.mediaElement.getSrc=L,m.mediaElement.setSrc=F;for(var I=0,M=_.length;I<M;I++)!function(e){if("src"!==e){var t=""+e.substring(0,1).toUpperCase()+e.substring(1),n=function(){return void 0!==m.mediaElement.renderer&&null!==m.mediaElement.renderer&&"function"==typeof m.mediaElement.renderer["get"+t]?m.mediaElement.renderer["get"+t]():null},o=function(e){void 0!==m.mediaElement.renderer&&null!==m.mediaElement.renderer&&"function"==typeof m.mediaElement.renderer["set"+t]&&m.mediaElement.renderer["set"+t](e)};A(m.mediaElement,e,n,o),m.mediaElement["get"+t]=n,m.mediaElement["set"+t]=o}}(_[I]);for(var O=0,D=N.length;O<D;O++)!function(e){m.mediaElement[e]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return void 0!==m.mediaElement.renderer&&null!==m.mediaElement.renderer&&"function"==typeof m.mediaElement.renderer[e]&&(m.mediaElement.promises.length?Promise.all(m.mediaElement.promises).then(function(){j(e,n)}).catch(function(e){m.mediaElement.generateError(e,E)}):j(e,n)),null}}(N[O]);return m.mediaElement.addEventListener=function(e,t){m.mediaElement.events[e]=m.mediaElement.events[e]||[],m.mediaElement.events[e].push(t)},m.mediaElement.removeEventListener=function(e,t){if(!e)return m.mediaElement.events={},!0;var n=m.mediaElement.events[e];if(!n)return!0;if(!t)return m.mediaElement.events[e]=[],!0;for(var o=0;o<n.length;o++)if(n[o]===t)return m.mediaElement.events[e].splice(o,1),!0;return!1},m.mediaElement.dispatchEvent=function(e){var t=m.mediaElement.events[e.type];if(t)for(var n=0;n<t.length;n++)t[n].apply(null,[e])},E.length&&(m.mediaElement.src=E),m.mediaElement.promises.length?Promise.all(m.mediaElement.promises).then(function(){m.mediaElement.options.success&&m.mediaElement.options.success(m.mediaElement,m.mediaElement.originalNode)}).catch(function(){v&&m.mediaElement.options.error&&m.mediaElement.options.error(m.mediaElement,m.mediaElement.originalNode)}):(m.mediaElement.options.success&&m.mediaElement.options.success(m.mediaElement,m.mediaElement.originalNode),v&&m.mediaElement.options.error&&m.mediaElement.options.error(m.mediaElement,m.mediaElement.originalNode)),m.mediaElement};a.default.MediaElement=p,l.default.MediaElement=p,n.default=p},{2:2,25:25,27:27,28:28,3:3,7:7,8:8}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(e(3)),i={};i.version="4.2.6",i.html5media={properties:["volume","src","currentTime","muted","duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable","currentSrc","preload","bufferedBytes","bufferedTime","initialTime","startOffsetTime","defaultPlaybackRate","playbackRate","played","autoplay","loop","controls"],readOnlyProperties:["duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable"],methods:["load","play","pause","canPlayType"],events:["loadstart","durationchange","loadedmetadata","loadeddata","progress","canplay","canplaythrough","suspend","abort","error","emptied","stalled","play","playing","pause","waiting","seeking","seeked","timeupdate","ended","ratechange","volumechange"],mediaTypes:["audio/mp3","audio/ogg","audio/oga","audio/wav","audio/x-wav","audio/wave","audio/x-pn-wav","audio/mpeg","audio/mp4","video/mp4","video/webm","video/ogg","video/ogv"]},o.default.mejs=i,n.default=i},{3:3}],8:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.renderer=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(e(7)),s=function(){function e(){o(this,e),this.renderers={},this.order=[]}return r(e,[{key:"add",value:function(e){if(void 0===e.name)throw new TypeError("renderer must contain at least `name` property");this.renderers[e.name]=e,this.order.push(e.name)}},{key:"select",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.length;if(t=t.length?t:this.order,!n){var o=[/^(html5|native)/i,/^flash/i,/iframe$/i],i=function(e){for(var t=0,n=o.length;t<n;t++)if(o[t].test(e))return t;return o.length};t.sort(function(e,t){return i(e)-i(t)})}for(var r=0,a=t.length;r<a;r++){var s=t[r],l=this.renderers[s];if(null!==l&&void 0!==l)for(var d=0,u=e.length;d<u;d++)if("function"==typeof l.canPlayType&&"string"==typeof e[d].type&&l.canPlayType(e[d].type))return{rendererName:l.name,src:e[d].src}}return null}},{key:"order",set:function(e){if(!Array.isArray(e))throw new TypeError("order must be an array of strings.");this._order=e},get:function(){return this._order}},{key:"renderers",set:function(e){if(null!==e&&"object"!==(void 0===e?"undefined":i(e)))throw new TypeError("renderers must be an array of objects.");this._renderers=e},get:function(){return this._renderers}}]),e}(),l=n.renderer=new s;a.default.Renderers=l},{7:7}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(3)),r=o(e(2)),a=o(e(5)),s=e(16),l=o(s),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(e(25)),u=e(27),c=e(26),f=e(28);Object.assign(s.config,{usePluginFullScreen:!0,fullscreenText:null,useFakeFullscreen:!1}),Object.assign(l.default.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,isPluginClickThroughCreated:!1,fullscreenMode:"",containerSizeTimeout:null,buildfullscreen:function(e){if(e.isVideo){e.isInIframe=i.default.location!==i.default.parent.location,e.detectFullscreenMode();var t=this,n=(0,u.isString)(t.options.fullscreenText)?t.options.fullscreenText:a.default.t("mejs.fullscreen"),o=r.default.createElement("div");if(o.className=t.options.classPrefix+"button "+t.options.classPrefix+"fullscreen-button",o.innerHTML='<button type="button" aria-controls="'+t.id+'" title="'+n+'" aria-label="'+n+'" tabindex="0"></button>',t.addControlElement(o,"fullscreen"),o.addEventListener("click",function(){d.HAS_TRUE_NATIVE_FULLSCREEN&&d.IS_FULLSCREEN||e.isFullScreen?e.exitFullScreen():e.enterFullScreen()}),e.fullscreenBtn=o,t.options.keyActions.push({keys:[70],action:function(e,t,n,o){o.ctrlKey||void 0!==e.enterFullScreen&&(e.isFullScreen?e.exitFullScreen():e.enterFullScreen())}}),t.exitFullscreenCallback=function(n){27===(n.which||n.keyCode||0)&&(d.HAS_TRUE_NATIVE_FULLSCREEN&&d.IS_FULLSCREEN||t.isFullScreen)&&e.exitFullScreen()},t.globalBind("keydown",t.exitFullscreenCallback),t.normalHeight=0,t.normalWidth=0,d.HAS_TRUE_NATIVE_FULLSCREEN){e.globalBind(d.FULLSCREEN_EVENT_NAME,function(){e.isFullScreen&&(d.isFullScreen()?(e.isNativeFullScreen=!0,e.setControlsSize()):(e.isNativeFullScreen=!1,e.exitFullScreen()))})}}},cleanfullscreen:function(e){e.exitFullScreen(),e.globalUnbind("keydown",e.exitFullscreenCallback)},detectFullscreenMode:function(){var e=this,t=null!==e.media.rendererName&&/(native|html5)/i.test(e.media.rendererName),n="";return d.HAS_TRUE_NATIVE_FULLSCREEN&&t?n="native-native":d.HAS_TRUE_NATIVE_FULLSCREEN&&!t?n="plugin-native":e.usePluginFullScreen&&d.SUPPORT_POINTER_EVENTS&&(n="plugin-click"),e.fullscreenMode=n,n},enterFullScreen:function(){var e=this,t=null!==e.media.rendererName&&/(html5|native)/i.test(e.media.rendererName),n=getComputedStyle(e.getElement(e.container));if(!1===e.options.useFakeFullscreen&&d.IS_IOS&&d.HAS_IOS_FULLSCREEN&&"function"==typeof e.media.originalNode.webkitEnterFullscreen&&e.media.originalNode.canPlayType((0,f.getTypeFromFile)(e.media.getSrc())))e.media.originalNode.webkitEnterFullscreen();else{if((0,c.addClass)(r.default.documentElement,e.options.classPrefix+"fullscreen"),(0,c.addClass)(e.getElement(e.container),e.options.classPrefix+"container-fullscreen"),e.normalHeight=parseFloat(n.height),e.normalWidth=parseFloat(n.width),"native-native"!==e.fullscreenMode&&"plugin-native"!==e.fullscreenMode||(d.requestFullScreen(e.getElement(e.container)),e.isInIframe&&setTimeout(function t(){if(e.isNativeFullScreen){var n=i.default.innerWidth||r.default.documentElement.clientWidth||r.default.body.clientWidth,o=screen.width;Math.abs(o-n)>.002*o?e.exitFullScreen():setTimeout(t,500)}},1e3)),e.getElement(e.container).style.width="100%",e.getElement(e.container).style.height="100%",e.containerSizeTimeout=setTimeout(function(){e.getElement(e.container).style.width="100%",e.getElement(e.container).style.height="100%",e.setControlsSize()},500),t)e.node.style.width="100%",e.node.style.height="100%";else for(var o=e.getElement(e.container).querySelectorAll("embed, object, video"),a=o.length,s=0;s<a;s++)o[s].style.width="100%",o[s].style.height="100%";e.options.setDimensions&&"function"==typeof e.media.setSize&&e.media.setSize(screen.width,screen.height);for(var l=e.getElement(e.layers).children,p=l.length,m=0;m<p;m++)l[m].style.width="100%",l[m].style.height="100%";e.fullscreenBtn&&((0,c.removeClass)(e.fullscreenBtn,e.options.classPrefix+"fullscreen"),(0,c.addClass)(e.fullscreenBtn,e.options.classPrefix+"unfullscreen")),e.setControlsSize(),e.isFullScreen=!0;var h=Math.min(screen.width/e.width,screen.height/e.height),v=e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-text");v&&(v.style.fontSize=100*h+"%",v.style.lineHeight="normal",e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-position").style.bottom="45px");var g=(0,u.createEvent)("enteredfullscreen",e.getElement(e.container));e.getElement(e.container).dispatchEvent(g)}},exitFullScreen:function(){var e=this,t=null!==e.media.rendererName&&/(native|html5)/i.test(e.media.rendererName);if(clearTimeout(e.containerSizeTimeout),d.HAS_TRUE_NATIVE_FULLSCREEN&&(d.IS_FULLSCREEN||e.isFullScreen)&&d.cancelFullScreen(),(0,c.removeClass)(r.default.documentElement,e.options.classPrefix+"fullscreen"),(0,c.removeClass)(e.getElement(e.container),e.options.classPrefix+"container-fullscreen"),e.options.setDimensions){if(e.getElement(e.container).style.width=e.normalWidth+"px",e.getElement(e.container).style.height=e.normalHeight+"px",t)e.node.style.width=e.normalWidth+"px",e.node.style.height=e.normalHeight+"px";else for(var n=e.getElement(e.container).querySelectorAll("embed, object, video"),o=n.length,i=0;i<o;i++)n[i].style.width=e.normalWidth+"px",n[i].style.height=e.normalHeight+"px";"function"==typeof e.media.setSize&&e.media.setSize(e.normalWidth,e.normalHeight);for(var a=e.getElement(e.layers).children,s=a.length,l=0;l<s;l++)a[l].style.width=e.normalWidth+"px",a[l].style.height=e.normalHeight+"px"}e.fullscreenBtn&&((0,c.removeClass)(e.fullscreenBtn,e.options.classPrefix+"unfullscreen"),(0,c.addClass)(e.fullscreenBtn,e.options.classPrefix+"fullscreen")),e.setControlsSize(),e.isFullScreen=!1;var f=e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-text");f&&(f.style.fontSize="",f.style.lineHeight="",e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-position").style.bottom="");var p=(0,u.createEvent)("exitedfullscreen",e.getElement(e.container));e.getElement(e.container).dispatchEvent(p)}})},{16:16,2:2,25:25,26:26,27:27,28:28,3:3,5:5}],10:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=e(16),a=o(r),s=o(e(5)),l=e(27),d=e(26);Object.assign(r.config,{playText:null,pauseText:null}),Object.assign(a.default.prototype,{buildplaypause:function(e,t,n,o){function r(e){"play"===e?((0,d.removeClass)(p,a.options.classPrefix+"play"),(0,d.removeClass)(p,a.options.classPrefix+"replay"),(0,d.addClass)(p,a.options.classPrefix+"pause"),m.setAttribute("title",f),m.setAttribute("aria-label",f)):((0,d.removeClass)(p,a.options.classPrefix+"pause"),(0,d.removeClass)(p,a.options.classPrefix+"replay"),(0,d.addClass)(p,a.options.classPrefix+"play"),m.setAttribute("title",c),m.setAttribute("aria-label",c))}var a=this,u=a.options,c=(0,l.isString)(u.playText)?u.playText:s.default.t("mejs.play"),f=(0,l.isString)(u.pauseText)?u.pauseText:s.default.t("mejs.pause"),p=i.default.createElement("div");p.className=a.options.classPrefix+"button "+a.options.classPrefix+"playpause-button "+a.options.classPrefix+"play",p.innerHTML='<button type="button" aria-controls="'+a.id+'" title="'+c+'" aria-label="'+f+'" tabindex="0"></button>',p.addEventListener("click",function(){a.paused?a.play():a.pause()});var m=p.querySelector("button");a.addControlElement(p,"playpause"),r("pse"),o.addEventListener("loadedmetadata",function(){-1===o.rendererName.indexOf("flash")&&r("pse")}),o.addEventListener("play",function(){r("play")}),o.addEventListener("playing",function(){r("play")}),o.addEventListener("pause",function(){r("pse")}),o.addEventListener("ended",function(){e.options.loop||((0,d.removeClass)(p,a.options.classPrefix+"pause"),(0,d.removeClass)(p,a.options.classPrefix+"play"),(0,d.addClass)(p,a.options.classPrefix+"replay"),m.setAttribute("title",c),m.setAttribute("aria-label",c))})}})},{16:16,2:2,26:26,27:27,5:5}],11:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=e(16),a=o(r),s=o(e(5)),l=e(25),d=e(30),u=e(26);Object.assign(r.config,{enableProgressTooltip:!0,useSmoothHover:!0,forceLive:!1}),Object.assign(a.default.prototype,{buildprogress:function(e,t,n,o){var a=0,c=!1,f=!1,p=this,m=e.options.autoRewind,h=e.options.enableProgressTooltip?'<span class="'+p.options.classPrefix+'time-float"><span class="'+p.options.classPrefix+'time-float-current">00:00</span><span class="'+p.options.classPrefix+'time-float-corner"></span></span>':"",v=i.default.createElement("div");v.className=p.options.classPrefix+"time-rail",v.innerHTML='<span class="'+p.options.classPrefix+"time-total "+p.options.classPrefix+'time-slider"><span class="'+p.options.classPrefix+'time-buffering"></span><span class="'+p.options.classPrefix+'time-loaded"></span><span class="'+p.options.classPrefix+'time-current"></span><span class="'+p.options.classPrefix+'time-hovered no-hover"></span><span class="'+p.options.classPrefix+'time-handle"><span class="'+p.options.classPrefix+'time-handle-content"></span></span>'+h+"</span>",p.addControlElement(v,"progress"),p.options.keyActions.push({keys:[37,227],action:function(e){if(!isNaN(e.duration)&&e.duration>0){e.isVideo&&(e.showControls(),e.startControlsTimer()),e.getElement(e.container).querySelector("."+r.config.classPrefix+"time-total").focus();var t=Math.max(e.currentTime-e.options.defaultSeekBackwardInterval(e),0);e.setCurrentTime(t)}}},{keys:[39,228],action:function(e){if(!isNaN(e.duration)&&e.duration>0){e.isVideo&&(e.showControls(),e.startControlsTimer()),e.getElement(e.container).querySelector("."+r.config.classPrefix+"time-total").focus();var t=Math.min(e.currentTime+e.options.defaultSeekForwardInterval(e),e.duration);e.setCurrentTime(t)}}}),p.rail=t.querySelector("."+p.options.classPrefix+"time-rail"),p.total=t.querySelector("."+p.options.classPrefix+"time-total"),p.loaded=t.querySelector("."+p.options.classPrefix+"time-loaded"),p.current=t.querySelector("."+p.options.classPrefix+"time-current"),p.handle=t.querySelector("."+p.options.classPrefix+"time-handle"),p.timefloat=t.querySelector("."+p.options.classPrefix+"time-float"),p.timefloatcurrent=t.querySelector("."+p.options.classPrefix+"time-float-current"),p.slider=t.querySelector("."+p.options.classPrefix+"time-slider"),p.hovered=t.querySelector("."+p.options.classPrefix+"time-hovered"),p.buffer=t.querySelector("."+p.options.classPrefix+"time-buffering"),p.newTime=0,p.forcedHandlePause=!1,p.setTransformStyle=function(e,t){e.style.transform=t,e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t},p.buffer.style.display="none";var g=function(t){var n=getComputedStyle(p.total),o=(0,u.offset)(p.total),i=p.total.offsetWidth,r=void 0!==n.webkitTransform?"webkitTransform":void 0!==n.mozTransform?"mozTransform ":void 0!==n.oTransform?"oTransform":void 0!==n.msTransform?"msTransform":"transform",a="WebKitCSSMatrix"in window?"WebKitCSSMatrix":"MSCSSMatrix"in window?"MSCSSMatrix":"CSSMatrix"in window?"CSSMatrix":void 0,s=0,f=0,m=0,h=void 0;if(h=t.originalEvent&&t.originalEvent.changedTouches?t.originalEvent.changedTouches[0].pageX:t.changedTouches?t.changedTouches[0].pageX:t.pageX,p.getDuration()){if(h<o.left?h=o.left:h>i+o.left&&(h=i+o.left),m=h-o.left,s=m/i,p.newTime=s<=.02?0:s*p.getDuration(),c&&null!==p.getCurrentTime()&&p.newTime.toFixed(4)!==p.getCurrentTime().toFixed(4)&&(p.setCurrentRailHandle(p.newTime),p.updateCurrent(p.newTime)),!l.IS_IOS&&!l.IS_ANDROID){if(m<0&&(m=0),p.options.useSmoothHover&&null!==a&&void 0!==window[a]){var v=new window[a](getComputedStyle(p.handle)[r]).m41,g=m/parseFloat(getComputedStyle(p.total).width)-v/parseFloat(getComputedStyle(p.total).width);p.hovered.style.left=v+"px",p.setTransformStyle(p.hovered,"scaleX("+g+")"),p.hovered.setAttribute("pos",m),g>=0?(0,u.removeClass)(p.hovered,"negative"):(0,u.addClass)(p.hovered,"negative")}if(p.timefloat){var y=p.timefloat.offsetWidth/2,E=mejs.Utils.offset(p.getElement(p.container)),b=getComputedStyle(p.timefloat);f=h-E.left<p.timefloat.offsetWidth?y:h-E.left>=p.getElement(p.container).offsetWidth-y?p.total.offsetWidth-y:m,(0,u.hasClass)(p.getElement(p.container),p.options.classPrefix+"long-video")&&(f+=parseFloat(b.marginLeft)/2+p.timefloat.offsetWidth/2),p.timefloat.style.left=f+"px",p.timefloatcurrent.innerHTML=(0,d.secondsToTimeCode)(p.newTime,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat),p.timefloat.style.display="block"}}}else l.IS_IOS||l.IS_ANDROID||!p.timefloat||(f=p.timefloat.offsetWidth+i>=p.getElement(p.container).offsetWidth?p.timefloat.offsetWidth/2:0,p.timefloat.style.left=f+"px",p.timefloat.style.left=f+"px",p.timefloat.style.display="block")},y=function(){var t=p.getCurrentTime(),n=s.default.t("mejs.time-slider"),i=(0,d.secondsToTimeCode)(t,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat),r=p.getDuration();p.slider.setAttribute("role","slider"),p.slider.tabIndex=0,o.paused?(p.slider.setAttribute("aria-label",n),p.slider.setAttribute("aria-valuemin",0),p.slider.setAttribute("aria-valuemax",r),p.slider.setAttribute("aria-valuenow",t),p.slider.setAttribute("aria-valuetext",i)):(p.slider.removeAttribute("aria-label"),p.slider.removeAttribute("aria-valuemin"),p.slider.removeAttribute("aria-valuemax"),p.slider.removeAttribute("aria-valuenow"),p.slider.removeAttribute("aria-valuetext"))},E=function(){new Date-a>=1e3&&p.play()},b=function(){c&&null!==p.getCurrentTime()&&p.newTime.toFixed(4)!==p.getCurrentTime().toFixed(4)&&(p.setCurrentTime(p.newTime),p.setCurrentRail(),p.updateCurrent(p.newTime)),p.forcedHandlePause&&(p.slider.focus(),p.play()),p.forcedHandlePause=!1};p.slider.addEventListener("focus",function(){e.options.autoRewind=!1}),p.slider.addEventListener("blur",function(){e.options.autoRewind=m}),p.slider.addEventListener("keydown",function(t){if(new Date-a>=1e3&&(f=p.paused),p.options.keyActions.length){var n=t.which||t.keyCode||0,i=p.getDuration(),r=e.options.defaultSeekForwardInterval(o),s=e.options.defaultSeekBackwardInterval(o),d=p.getCurrentTime(),u=p.getElement(p.container).querySelector("."+p.options.classPrefix+"volume-slider");if(38===n||40===n){u&&(u.style.display="block"),p.isVideo&&(p.showControls(),p.startControlsTimer());var c=38===n?Math.min(p.volume+.1,1):Math.max(p.volume-.1,0),m=c<=0;return p.setVolume(c),void p.setMuted(m)}switch(u&&(u.style.display="none"),n){case 37:p.getDuration()!==1/0&&(d-=s);break;case 39:p.getDuration()!==1/0&&(d+=r);break;case 36:d=0;break;case 35:d=i;break;case 13:case 32:return void(l.IS_FIREFOX&&(p.paused?p.play():p.pause()));default:return}d=d<0?0:d>=i?i:Math.floor(d),a=new Date,f||e.pause(),d<p.getDuration()&&!f&&setTimeout(E,1100),p.setCurrentTime(d),e.showControls(),t.preventDefault(),t.stopPropagation()}});var S=["mousedown","touchstart"];p.slider.addEventListener("dragstart",function(){return!1});for(var x=0,w=S.length;x<w;x++)p.slider.addEventListener(S[x],function(e){if(p.forcedHandlePause=!1,p.getDuration()!==1/0&&(1===e.which||0===e.which)){p.paused||(p.pause(),p.forcedHandlePause=!0),c=!0,g(e);for(var t=["mouseup","touchend"],n=0,o=t.length;n<o;n++)p.getElement(p.container).addEventListener(t[n],function(e){var t=e.target;(t===p.slider||t.closest("."+p.options.classPrefix+"time-slider"))&&g(e)});p.globalBind("mouseup.dur touchend.dur",function(){b(),c=!1,p.timefloat&&(p.timefloat.style.display="none")})}},!(!l.SUPPORT_PASSIVE_EVENT||"touchstart"!==S[x])&&{passive:!0});p.slider.addEventListener("mouseenter",function(e){e.target===p.slider&&p.getDuration()!==1/0&&(p.getElement(p.container).addEventListener("mousemove",function(e){var t=e.target;(t===p.slider||t.closest("."+p.options.classPrefix+"time-slider"))&&g(e)}),!p.timefloat||l.IS_IOS||l.IS_ANDROID||(p.timefloat.style.display="block"),p.hovered&&!l.IS_IOS&&!l.IS_ANDROID&&p.options.useSmoothHover&&(0,u.removeClass)(p.hovered,"no-hover"))}),p.slider.addEventListener("mouseleave",function(){p.getDuration()!==1/0&&(c||(p.timefloat&&(p.timefloat.style.display="none"),p.hovered&&p.options.useSmoothHover&&(0,u.addClass)(p.hovered,"no-hover")))}),p.broadcastCallback=function(n){var o=t.querySelector("."+p.options.classPrefix+"broadcast");if(p.options.forceLive||p.getDuration()===1/0){if(!o||p.options.forceLive){var r=i.default.createElement("span");r.className=p.options.classPrefix+"broadcast",r.innerText=s.default.t("mejs.live-broadcast"),p.slider.style.display="none",p.rail.appendChild(r)}}else o&&(p.slider.style.display="",o.remove()),e.setProgressRail(n),p.forcedHandlePause||e.setCurrentRail(n),y()},o.addEventListener("progress",p.broadcastCallback),o.addEventListener("timeupdate",p.broadcastCallback),o.addEventListener("play",function(){p.buffer.style.display="none"}),o.addEventListener("playing",function(){p.buffer.style.display="none"}),o.addEventListener("seeking",function(){p.buffer.style.display=""}),o.addEventListener("seeked",function(){p.buffer.style.display="none"}),o.addEventListener("pause",function(){p.buffer.style.display="none"}),o.addEventListener("waiting",function(){p.buffer.style.display=""}),o.addEventListener("loadeddata",function(){p.buffer.style.display=""}),o.addEventListener("canplay",function(){p.buffer.style.display="none"}),o.addEventListener("error",function(){p.buffer.style.display="none"}),p.getElement(p.container).addEventListener("controlsresize",function(t){p.getDuration()!==1/0&&(e.setProgressRail(t),p.forcedHandlePause||e.setCurrentRail(t))})},cleanprogress:function(e,t,n,o){o.removeEventListener("progress",e.broadcastCallback),o.removeEventListener("timeupdate",e.broadcastCallback),e.rail&&e.rail.remove()},setProgressRail:function(e){var t=this,n=void 0!==e?e.detail.target||e.target:t.media,o=null;n&&n.buffered&&n.buffered.length>0&&n.buffered.end&&t.getDuration()?o=n.buffered.end(n.buffered.length-1)/t.getDuration():n&&void 0!==n.bytesTotal&&n.bytesTotal>0&&void 0!==n.bufferedBytes?o=n.bufferedBytes/n.bytesTotal:e&&e.lengthComputable&&0!==e.total&&(o=e.loaded/e.total),null!==o&&(o=Math.min(1,Math.max(0,o)),t.loaded&&t.setTransformStyle(t.loaded,"scaleX("+o+")"))},setCurrentRailHandle:function(e){var t=this;t.setCurrentRailMain(t,e)},setCurrentRail:function(){var e=this;e.setCurrentRailMain(e)},setCurrentRailMain:function(e,t){if(void 0!==e.getCurrentTime()&&e.getDuration()){var n=void 0===t?e.getCurrentTime():t;if(e.total&&e.handle){var o=parseFloat(getComputedStyle(e.total).width),i=Math.round(o*n/e.getDuration()),r=i-Math.round(e.handle.offsetWidth/2);if(r=r<0?0:r,e.setTransformStyle(e.current,"scaleX("+i/o+")"),e.setTransformStyle(e.handle,"translateX("+r+"px)"),e.options.useSmoothHover&&!(0,u.hasClass)(e.hovered,"no-hover")){var a=parseInt(e.hovered.getAttribute("pos"),10),s=(a=isNaN(a)?0:a)/o-r/o;e.hovered.style.left=r+"px",e.setTransformStyle(e.hovered,"scaleX("+s+")"),s>=0?(0,u.removeClass)(e.hovered,"negative"):(0,u.addClass)(e.hovered,"negative")}}}}})},{16:16,2:2,25:25,26:26,30:30,5:5}],12:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=e(16),a=o(r),s=e(30),l=e(26);Object.assign(r.config,{duration:0,timeAndDurationSeparator:"<span> | </span>"}),Object.assign(a.default.prototype,{buildcurrent:function(e,t,n,o){var r=this,a=i.default.createElement("div");a.className=r.options.classPrefix+"time",a.setAttribute("role","timer"),a.setAttribute("aria-live","off"),a.innerHTML='<span class="'+r.options.classPrefix+'currenttime">'+(0,s.secondsToTimeCode)(0,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat)+"</span>",r.addControlElement(a,"current"),e.updateCurrent(),r.updateTimeCallback=function(){r.controlsAreVisible&&e.updateCurrent()},o.addEventListener("timeupdate",r.updateTimeCallback)},cleancurrent:function(e,t,n,o){o.removeEventListener("timeupdate",e.updateTimeCallback)},buildduration:function(e,t,n,o){var r=this;if(t.lastChild.querySelector("."+r.options.classPrefix+"currenttime"))t.querySelector("."+r.options.classPrefix+"time").innerHTML+=r.options.timeAndDurationSeparator+'<span class="'+r.options.classPrefix+'duration">'+(0,s.secondsToTimeCode)(r.options.duration,r.options.alwaysShowHours,r.options.showTimecodeFrameCount,r.options.framesPerSecond,r.options.secondsDecimalLength,r.options.timeFormat)+"</span>";else{t.querySelector("."+r.options.classPrefix+"currenttime")&&(0,l.addClass)(t.querySelector("."+r.options.classPrefix+"currenttime").parentNode,r.options.classPrefix+"currenttime-container");var a=i.default.createElement("div");a.className=r.options.classPrefix+"time "+r.options.classPrefix+"duration-container",a.innerHTML='<span class="'+r.options.classPrefix+'duration">'+(0,s.secondsToTimeCode)(r.options.duration,r.options.alwaysShowHours,r.options.showTimecodeFrameCount,r.options.framesPerSecond,r.options.secondsDecimalLength,r.options.timeFormat)+"</span>",r.addControlElement(a,"duration")}r.updateDurationCallback=function(){r.controlsAreVisible&&e.updateDuration()},o.addEventListener("timeupdate",r.updateDurationCallback)},cleanduration:function(e,t,n,o){o.removeEventListener("timeupdate",e.updateDurationCallback)},updateCurrent:function(){var e=this,t=e.getCurrentTime();isNaN(t)&&(t=0);var n=(0,s.secondsToTimeCode)(t,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat);n.length>5?(0,l.addClass)(e.getElement(e.container),e.options.classPrefix+"long-video"):(0,l.removeClass)(e.getElement(e.container),e.options.classPrefix+"long-video"),e.getElement(e.controls).querySelector("."+e.options.classPrefix+"currenttime")&&(e.getElement(e.controls).querySelector("."+e.options.classPrefix+"currenttime").innerText=n)},updateDuration:function(){var e=this,t=e.getDuration();(isNaN(t)||t===1/0||t<0)&&(e.media.duration=e.options.duration=t=0),e.options.duration>0&&(t=e.options.duration);var n=(0,s.secondsToTimeCode)(t,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat);n.length>5?(0,l.addClass)(e.getElement(e.container),e.options.classPrefix+"long-video"):(0,l.removeClass)(e.getElement(e.container),e.options.classPrefix+"long-video"),e.getElement(e.controls).querySelector("."+e.options.classPrefix+"duration")&&t>0&&(e.getElement(e.controls).querySelector("."+e.options.classPrefix+"duration").innerHTML=n)}})},{16:16,2:2,26:26,30:30}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=o(e(7)),a=o(e(5)),s=e(16),l=o(s),d=e(30),u=e(27),c=e(26);Object.assign(s.config,{startLanguage:"",tracksText:null,chaptersText:null,tracksAriaLive:!1,hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),Object.assign(l.default.prototype,{hasChapters:!1,buildtracks:function(e,t,n,o){if(this.findTracks(),e.tracks.length||e.trackFiles&&0!==!e.trackFiles.length){var r=this,s=r.options.tracksAriaLive?' role="log" aria-live="assertive" aria-atomic="false"':"",l=(0,u.isString)(r.options.tracksText)?r.options.tracksText:a.default.t("mejs.captions-subtitles"),d=(0,u.isString)(r.options.chaptersText)?r.options.chaptersText:a.default.t("mejs.captions-chapters"),f=null===e.trackFiles?e.tracks.length:e.trackFiles.length;if(r.domNode.textTracks)for(var p=r.domNode.textTracks.length-1;p>=0;p--)r.domNode.textTracks[p].mode="hidden";r.cleartracks(e),e.captions=i.default.createElement("div"),e.captions.className=r.options.classPrefix+"captions-layer "+r.options.classPrefix+"layer",e.captions.innerHTML='<div class="'+r.options.classPrefix+"captions-position "+r.options.classPrefix+'captions-position-hover"'+s+'><span class="'+r.options.classPrefix+'captions-text"></span></div>',e.captions.style.display="none",n.insertBefore(e.captions,n.firstChild),e.captionsText=e.captions.querySelector("."+r.options.classPrefix+"captions-text"),e.captionsButton=i.default.createElement("div"),e.captionsButton.className=r.options.classPrefix+"button "+r.options.classPrefix+"captions-button",e.captionsButton.innerHTML='<button type="button" aria-controls="'+r.id+'" title="'+l+'" aria-label="'+l+'" tabindex="0"></button><div class="'+r.options.classPrefix+"captions-selector "+r.options.classPrefix+'offscreen"><ul class="'+r.options.classPrefix+'captions-selector-list"><li class="'+r.options.classPrefix+'captions-selector-list-item"><input type="radio" class="'+r.options.classPrefix+'captions-selector-input" name="'+e.id+'_captions" id="'+e.id+'_captions_none" value="none" checked disabled><label class="'+r.options.classPrefix+"captions-selector-label "+r.options.classPrefix+'captions-selected" for="'+e.id+'_captions_none">'+a.default.t("mejs.none")+"</label></li></ul></div>",r.addControlElement(e.captionsButton,"tracks"),e.captionsButton.querySelector("."+r.options.classPrefix+"captions-selector-input").disabled=!1,e.chaptersButton=i.default.createElement("div"),e.chaptersButton.className=r.options.classPrefix+"button "+r.options.classPrefix+"chapters-button",e.chaptersButton.innerHTML='<button type="button" aria-controls="'+r.id+'" title="'+d+'" aria-label="'+d+'" tabindex="0"></button><div class="'+r.options.classPrefix+"chapters-selector "+r.options.classPrefix+'offscreen"><ul class="'+r.options.classPrefix+'chapters-selector-list"></ul></div>';for(var m=0,h=0;h<f;h++){var v=e.tracks[h].kind;e.tracks[h].src.trim()&&("subtitles"===v||"captions"===v?m++:"chapters"!==v||t.querySelector("."+r.options.classPrefix+"chapter-selector")||e.captionsButton.parentNode.insertBefore(e.chaptersButton,e.captionsButton))}e.trackToLoad=-1,e.selectedTrack=null,e.isLoadingTrack=!1;for(var g=0;g<f;g++){var y=e.tracks[g].kind;!e.tracks[g].src.trim()||"subtitles"!==y&&"captions"!==y||e.addTrackButton(e.tracks[g].trackId,e.tracks[g].srclang,e.tracks[g].label)}e.loadNextTrack();var E=["mouseenter","focusin"],b=["mouseleave","focusout"];if(r.options.toggleCaptionsButtonWhenOnlyOne&&1===m)e.captionsButton.addEventListener("click",function(t){var n="none";null===e.selectedTrack&&(n=e.tracks[0].trackId);var o=t.keyCode||t.which;e.setTrack(n,void 0!==o)});else{for(var S=e.captionsButton.querySelectorAll("."+r.options.classPrefix+"captions-selector-label"),x=e.captionsButton.querySelectorAll("input[type=radio]"),w=0,P=E.length;w<P;w++)e.captionsButton.addEventListener(E[w],function(){(0,c.removeClass)(this.querySelector("."+r.options.classPrefix+"captions-selector"),r.options.classPrefix+"offscreen")});for(var T=0,C=b.length;T<C;T++)e.captionsButton.addEventListener(b[T],function(){(0,c.addClass)(this.querySelector("."+r.options.classPrefix+"captions-selector"),r.options.classPrefix+"offscreen")});for(var k=0,_=x.length;k<_;k++)x[k].addEventListener("click",function(t){var n=t.keyCode||t.which;e.setTrack(this.value,void 0!==n)});for(var N=0,A=S.length;N<A;N++)S[N].addEventListener("click",function(e){var t=(0,c.siblings)(this,function(e){return"INPUT"===e.tagName})[0],n=(0,u.createEvent)("click",t);t.dispatchEvent(n),e.preventDefault()});e.captionsButton.addEventListener("keydown",function(e){e.stopPropagation()})}for(var L=0,F=E.length;L<F;L++)e.chaptersButton.addEventListener(E[L],function(){this.querySelector("."+r.options.classPrefix+"chapters-selector-list").children.length&&(0,c.removeClass)(this.querySelector("."+r.options.classPrefix+"chapters-selector"),r.options.classPrefix+"offscreen")});for(var j=0,I=b.length;j<I;j++)e.chaptersButton.addEventListener(b[j],function(){(0,c.addClass)(this.querySelector("."+r.options.classPrefix+"chapters-selector"),r.options.classPrefix+"offscreen")});e.chaptersButton.addEventListener("keydown",function(e){e.stopPropagation()}),e.options.alwaysShowControls?(0,c.addClass)(e.getElement(e.container).querySelector("."+r.options.classPrefix+"captions-position"),r.options.classPrefix+"captions-position-hover"):(e.getElement(e.container).addEventListener("controlsshown",function(){(0,c.addClass)(e.getElement(e.container).querySelector("."+r.options.classPrefix+"captions-position"),r.options.classPrefix+"captions-position-hover")}),e.getElement(e.container).addEventListener("controlshidden",function(){o.paused||(0,c.removeClass)(e.getElement(e.container).querySelector("."+r.options.classPrefix+"captions-position"),r.options.classPrefix+"captions-position-hover")})),o.addEventListener("timeupdate",function(){e.displayCaptions()}),""!==e.options.slidesSelector&&(e.slidesContainer=i.default.querySelectorAll(e.options.slidesSelector),o.addEventListener("timeupdate",function(){e.displaySlides()}))}},cleartracks:function(e){e&&(e.captions&&e.captions.remove(),e.chapters&&e.chapters.remove(),e.captionsText&&e.captionsText.remove(),e.captionsButton&&e.captionsButton.remove(),e.chaptersButton&&e.chaptersButton.remove())},rebuildtracks:function(){var e=this;e.findTracks(),e.buildtracks(e,e.getElement(e.controls),e.getElement(e.layers),e.media)},findTracks:function(){var e=this,t=null===e.trackFiles?e.node.querySelectorAll("track"):e.trackFiles,n=t.length;e.tracks=[];for(var o=0;o<n;o++){var i=t[o],r=i.getAttribute("srclang").toLowerCase()||"",a=e.id+"_track_"+o+"_"+i.getAttribute("kind")+"_"+r;e.tracks.push({trackId:a,srclang:r,src:i.getAttribute("src"),kind:i.getAttribute("kind"),label:i.getAttribute("label")||"",entries:[],isLoaded:!1})}},setTrack:function(e,t){for(var n=this,o=n.captionsButton.querySelectorAll('input[type="radio"]'),i=n.captionsButton.querySelectorAll("."+n.options.classPrefix+"captions-selected"),r=n.captionsButton.querySelector('input[value="'+e+'"]'),a=0,s=o.length;a<s;a++)o[a].checked=!1;for(var l=0,d=i.length;l<d;l++)(0,c.removeClass)(i[l],n.options.classPrefix+"captions-selected");r.checked=!0;for(var f=(0,c.siblings)(r,function(e){return(0,c.hasClass)(e,n.options.classPrefix+"captions-selector-label")}),p=0,m=f.length;p<m;p++)(0,c.addClass)(f[p],n.options.classPrefix+"captions-selected");if("none"===e)n.selectedTrack=null,(0,c.removeClass)(n.captionsButton,n.options.classPrefix+"captions-enabled");else for(var h=0,v=n.tracks.length;h<v;h++){var g=n.tracks[h];if(g.trackId===e){null===n.selectedTrack&&(0,c.addClass)(n.captionsButton,n.options.classPrefix+"captions-enabled"),n.selectedTrack=g,n.captions.setAttribute("lang",n.selectedTrack.srclang),n.displayCaptions();break}}var y=(0,u.createEvent)("captionschange",n.media);y.detail.caption=n.selectedTrack,n.media.dispatchEvent(y),t||setTimeout(function(){n.getElement(n.container).focus()},500)},loadNextTrack:function(){var e=this;e.trackToLoad++,e.trackToLoad<e.tracks.length?(e.isLoadingTrack=!0,e.loadTrack(e.trackToLoad)):(e.isLoadingTrack=!1,e.checkForTracks())},loadTrack:function(e){var t=this,n=t.tracks[e];void 0===n||void 0===n.src&&""===n.src||(0,c.ajax)(n.src,"text",function(e){n.entries="string"==typeof e&&/<tt\s+xml/gi.exec(e)?r.default.TrackFormatParser.dfxp.parse(e):r.default.TrackFormatParser.webvtt.parse(e),n.isLoaded=!0,t.enableTrackButton(n),t.loadNextTrack(),"slides"===n.kind?t.setupSlides(n):"chapters"!==n.kind||t.hasChapters||(t.drawChapters(n),t.hasChapters=!0)},function(){t.removeTrackButton(n.trackId),t.loadNextTrack()})},enableTrackButton:function(e){var t=this,n=e.srclang,o=i.default.getElementById(""+e.trackId);if(o){var s=e.label;""===s&&(s=a.default.t(r.default.language.codes[n])||n),o.disabled=!1;for(var l=(0,c.siblings)(o,function(e){return(0,c.hasClass)(e,t.options.classPrefix+"captions-selector-label")}),d=0,f=l.length;d<f;d++)l[d].innerHTML=s;if(t.options.startLanguage===n){o.checked=!0;var p=(0,u.createEvent)("click",o);o.dispatchEvent(p)}}},removeTrackButton:function(e){var t=i.default.getElementById(""+e);if(t){var n=t.closest("li");n&&n.remove()}},addTrackButton:function(e,t,n){var o=this;""===n&&(n=a.default.t(r.default.language.codes[t])||t),o.captionsButton.querySelector("ul").innerHTML+='<li class="'+o.options.classPrefix+'captions-selector-list-item"><input type="radio" class="'+o.options.classPrefix+'captions-selector-input" name="'+o.id+'_captions" id="'+e+'" value="'+e+'" disabled><label class="'+o.options.classPrefix+'captions-selector-label"for="'+e+'">'+n+" (loading)</label></li>"},checkForTracks:function(){var e=this,t=!1;if(e.options.hideCaptionsButtonWhenEmpty){for(var n=0,o=e.tracks.length;n<o;n++){var i=e.tracks[n].kind;if(("subtitles"===i||"captions"===i)&&e.tracks[n].isLoaded){t=!0;break}}e.captionsButton.style.display=t?"":"none",e.setControlsSize()}},displayCaptions:function(){if(void 0!==this.tracks){var e=this,t=e.selectedTrack;if(null!==t&&t.isLoaded){var n=e.searchTrackPosition(t.entries,e.media.currentTime);if(n>-1)return e.captionsText.innerHTML=function(e){var t=i.default.createElement("div");t.innerHTML=e;for(var n=t.getElementsByTagName("script"),o=n.length;o--;)n[o].remove();for(var r=t.getElementsByTagName("*"),a=0,s=r.length;a<s;a++)for(var l=r[a].attributes,d=Array.prototype.slice.call(l),u=0,c=d.length;u<c;u++)d[u].name.startsWith("on")||d[u].value.startsWith("javascript")?r[a].remove():"style"===d[u].name&&r[a].removeAttribute(d[u].name);return t.innerHTML}(t.entries[n].text),e.captionsText.className=e.options.classPrefix+"captions-text "+(t.entries[n].identifier||""),e.captions.style.display="",void(e.captions.style.height="0px");e.captions.style.display="none"}else e.captions.style.display="none"}},setupSlides:function(e){var t=this;t.slides=e,t.slides.entries.imgs=[t.slides.entries.length],t.showSlide(0)},showSlide:function(e){var t=this,n=this;if(void 0!==n.tracks&&void 0!==n.slidesContainer){var o=n.slides.entries[e].text,r=n.slides.entries[e].imgs;if(void 0===r||void 0===r.fadeIn){var a=i.default.createElement("img");a.src=o,a.addEventListener("load",function(){var e=t,o=(0,c.siblings)(e,function(e){return o(e)});e.style.display="none",n.slidesContainer.innerHTML+=e.innerHTML,(0,c.fadeIn)(n.slidesContainer.querySelector(a));for(var i=0,r=o.length;i<r;i++)(0,c.fadeOut)(o[i],400)}),n.slides.entries[e].imgs=r=a}else if(!(0,c.visible)(r)){var s=(0,c.siblings)(self,function(e){return s(e)});(0,c.fadeIn)(n.slidesContainer.querySelector(r));for(var l=0,d=s.length;l<d;l++)(0,c.fadeOut)(s[l])}}},displaySlides:function(){var e=this;if(void 0!==this.slides){var t=e.slides,n=e.searchTrackPosition(t.entries,e.media.currentTime);n>-1&&e.showSlide(n)}},drawChapters:function(e){var t=this,n=e.entries.length;if(n){t.chaptersButton.querySelector("ul").innerHTML="";for(var o=0;o<n;o++)t.chaptersButton.querySelector("ul").innerHTML+='<li class="'+t.options.classPrefix+'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="'+t.options.classPrefix+'captions-selector-input" name="'+t.id+'_chapters" id="'+t.id+"_chapters_"+o+'" value="'+e.entries[o].start+'" disabled><label class="'+t.options.classPrefix+'chapters-selector-label"for="'+t.id+"_chapters_"+o+'">'+e.entries[o].text+"</label></li>";for(var i=t.chaptersButton.querySelectorAll('input[type="radio"]'),r=t.chaptersButton.querySelectorAll("."+t.options.classPrefix+"chapters-selector-label"),a=0,s=i.length;a<s;a++)i[a].disabled=!1,i[a].checked=!1,i[a].addEventListener("click",function(e){var n=this,o=t.chaptersButton.querySelectorAll("li"),i=(0,c.siblings)(n,function(e){return(0,c.hasClass)(e,t.options.classPrefix+"chapters-selector-label")})[0];n.checked=!0,n.parentNode.setAttribute("aria-checked",!0),(0,c.addClass)(i,t.options.classPrefix+"chapters-selected"),(0,c.removeClass)(t.chaptersButton.querySelector("."+t.options.classPrefix+"chapters-selected"),t.options.classPrefix+"chapters-selected");for(var r=0,a=o.length;r<a;r++)o[r].setAttribute("aria-checked",!1);void 0===(e.keyCode||e.which)&&setTimeout(function(){t.getElement(t.container).focus()},500),t.media.setCurrentTime(parseFloat(n.value)),t.media.paused&&t.media.play()});for(var l=0,d=r.length;l<d;l++)r[l].addEventListener("click",function(e){var t=(0,c.siblings)(this,function(e){return"INPUT"===e.tagName})[0],n=(0,u.createEvent)("click",t);t.dispatchEvent(n),e.preventDefault()})}},searchTrackPosition:function(e,t){for(var n=0,o=e.length-1,i=void 0,r=void 0,a=void 0;n<=o;){if(i=n+o>>1,r=e[i].start,a=e[i].stop,t>=r&&t<a)return i;r<t?n=i+1:r>t&&(o=i-1)}return-1}}),r.default.language={codes:{af:"mejs.afrikaans",sq:"mejs.albanian",ar:"mejs.arabic",be:"mejs.belarusian",bg:"mejs.bulgarian",ca:"mejs.catalan",zh:"mejs.chinese","zh-cn":"mejs.chinese-simplified","zh-tw":"mejs.chines-traditional",hr:"mejs.croatian",cs:"mejs.czech",da:"mejs.danish",nl:"mejs.dutch",en:"mejs.english",et:"mejs.estonian",fl:"mejs.filipino",fi:"mejs.finnish",fr:"mejs.french",gl:"mejs.galician",de:"mejs.german",el:"mejs.greek",ht:"mejs.haitian-creole",iw:"mejs.hebrew",hi:"mejs.hindi",hu:"mejs.hungarian",is:"mejs.icelandic",id:"mejs.indonesian",ga:"mejs.irish",it:"mejs.italian",ja:"mejs.japanese",ko:"mejs.korean",lv:"mejs.latvian",lt:"mejs.lithuanian",mk:"mejs.macedonian",ms:"mejs.malay",mt:"mejs.maltese",no:"mejs.norwegian",fa:"mejs.persian",pl:"mejs.polish",pt:"mejs.portuguese",ro:"mejs.romanian",ru:"mejs.russian",sr:"mejs.serbian",sk:"mejs.slovak",sl:"mejs.slovenian",es:"mejs.spanish",sw:"mejs.swahili",sv:"mejs.swedish",tl:"mejs.tagalog",th:"mejs.thai",tr:"mejs.turkish",uk:"mejs.ukrainian",vi:"mejs.vietnamese",cy:"mejs.welsh",yi:"mejs.yiddish"}},r.default.TrackFormatParser={webvtt:{pattern:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(e){for(var t=e.split(/\r?\n/),n=[],o=void 0,i=void 0,r=void 0,a=0,s=t.length;a<s;a++){if((o=this.pattern.exec(t[a]))&&a<t.length){for(a-1>=0&&""!==t[a-1]&&(r=t[a-1]),i=t[++a],a++;""!==t[a]&&a<t.length;)i=i+"\n"+t[a],a++;i=i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),n.push({identifier:r,start:0===(0,d.convertSMPTEtoSeconds)(o[1])?.2:(0,d.convertSMPTEtoSeconds)(o[1]),stop:(0,d.convertSMPTEtoSeconds)(o[3]),text:i,settings:o[5]})}r=""}return n}},dfxp:{parse:function(e){var t=(e=$(e).filter("tt")).firstChild,n=t.querySelectorAll("p"),o=e.getElementById(""+t.attr("style")),i=[],r=void 0;if(o.length){o.removeAttribute("id");var a=o.attributes;if(a.length){r={};for(var s=0,l=a.length;s<l;s++)r[a[s].name.split(":")[1]]=a[s].value}}for(var u=0,c=n.length;u<c;u++){var f=void 0,p={start:null,stop:null,style:null,text:null};if(n.eq(u).attr("begin")&&(p.start=(0,d.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))),!p.start&&n.eq(u-1).attr("end")&&(p.start=(0,d.convertSMPTEtoSeconds)(n.eq(u-1).attr("end"))),n.eq(u).attr("end")&&(p.stop=(0,d.convertSMPTEtoSeconds)(n.eq(u).attr("end"))),!p.stop&&n.eq(u+1).attr("begin")&&(p.stop=(0,d.convertSMPTEtoSeconds)(n.eq(u+1).attr("begin"))),r){f="";for(var m in r)f+=m+":"+r[m]+";"}f&&(p.style=f),0===p.start&&(p.start=.2),p.text=n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),i.push(p)}return i}}}},{16:16,2:2,26:26,27:27,30:30,5:5,7:7}],14:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=e(16),a=o(r),s=o(e(5)),l=e(25),d=e(27),u=e(26);Object.assign(r.config,{muteText:null,unmuteText:null,allyVolumeControlText:null,hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical",startVolume:.8}),Object.assign(a.default.prototype,{buildvolume:function(e,t,n,o){if(!l.IS_ANDROID&&!l.IS_IOS||!this.options.hideVolumeOnTouchDevices){var a=this,c=a.isVideo?a.options.videoVolume:a.options.audioVolume,f=(0,d.isString)(a.options.muteText)?a.options.muteText:s.default.t("mejs.mute"),p=(0,d.isString)(a.options.unmuteText)?a.options.unmuteText:s.default.t("mejs.unmute"),m=(0,d.isString)(a.options.allyVolumeControlText)?a.options.allyVolumeControlText:s.default.t("mejs.volume-help-text"),h=i.default.createElement("div");if(h.className=a.options.classPrefix+"button "+a.options.classPrefix+"volume-button "+a.options.classPrefix+"mute",h.innerHTML="horizontal"===c?'<button type="button" aria-controls="'+a.id+'" title="'+f+'" aria-label="'+f+'" tabindex="0"></button>':'<button type="button" aria-controls="'+a.id+'" title="'+f+'" aria-label="'+f+'" tabindex="0"></button><a href="javascript:void(0);" class="'+a.options.classPrefix+'volume-slider" aria-label="'+s.default.t("mejs.volume-slider")+'" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="'+a.options.classPrefix+'offscreen">'+m+'</span><div class="'+a.options.classPrefix+'volume-total"><div class="'+a.options.classPrefix+'volume-current"></div><div class="'+a.options.classPrefix+'volume-handle"></div></div></a>',a.addControlElement(h,"volume"),a.options.keyActions.push({keys:[38],action:function(e){var t=e.getElement(e.container).querySelector("."+r.config.classPrefix+"volume-slider");(t||e.getElement(e.container).querySelector("."+r.config.classPrefix+"volume-slider").matches(":focus"))&&(t.style.display="block"),e.isVideo&&(e.showControls(),e.startControlsTimer());var n=Math.min(e.volume+.1,1);e.setVolume(n),n>0&&e.setMuted(!1)}},{keys:[40],action:function(e){var t=e.getElement(e.container).querySelector("."+r.config.classPrefix+"volume-slider");t&&(t.style.display="block"),e.isVideo&&(e.showControls(),e.startControlsTimer());var n=Math.max(e.volume-.1,0);e.setVolume(n),n<=.1&&e.setMuted(!0)}},{keys:[77],action:function(e){e.getElement(e.container).querySelector("."+r.config.classPrefix+"volume-slider").style.display="block",e.isVideo&&(e.showControls(),e.startControlsTimer()),e.media.muted?e.setMuted(!1):e.setMuted(!0)}}),"horizontal"===c){var v=i.default.createElement("a");v.className=a.options.classPrefix+"horizontal-volume-slider",v.href="javascript:void(0);",v.setAttribute("aria-label",s.default.t("mejs.volume-slider")),v.setAttribute("aria-valuemin",0),v.setAttribute("aria-valuemax",100),v.setAttribute("role","slider"),v.innerHTML+='<span class="'+a.options.classPrefix+'offscreen">'+m+'</span><div class="'+a.options.classPrefix+'horizontal-volume-total"><div class="'+a.options.classPrefix+'horizontal-volume-current"></div><div class="'+a.options.classPrefix+'horizontal-volume-handle"></div></div>',h.parentNode.insertBefore(v,h.nextSibling)}var g=!1,y=!1,E=!1,b=function(){var e=Math.floor(100*o.volume);S.setAttribute("aria-valuenow",e),S.setAttribute("aria-valuetext",e+"%")},S="vertical"===c?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-slider"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-slider"),x="vertical"===c?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-total"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-total"),w="vertical"===c?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-current"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-current"),P="vertical"===c?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-handle"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-handle"),T=function(e){if(null!==e&&!isNaN(e)&&void 0!==e){if(e=Math.max(0,e),0===(e=Math.min(e,1))){(0,u.removeClass)(h,a.options.classPrefix+"mute"),(0,u.addClass)(h,a.options.classPrefix+"unmute");var t=h.firstElementChild;t.setAttribute("title",p),t.setAttribute("aria-label",p)}else{(0,u.removeClass)(h,a.options.classPrefix+"unmute"),(0,u.addClass)(h,a.options.classPrefix+"mute");var n=h.firstElementChild;n.setAttribute("title",f),n.setAttribute("aria-label",f)}var o=100*e+"%",i=getComputedStyle(P);"vertical"===c?(w.style.bottom=0,w.style.height=o,P.style.bottom=o,P.style.marginBottom=-parseFloat(i.height)/2+"px"):(w.style.left=0,w.style.width=o,P.style.left=o,P.style.marginLeft=-parseFloat(i.width)/2+"px")}},C=function(e){var t=(0,u.offset)(x),n=getComputedStyle(x);E=!0;var o=null;if("vertical"===c){var i=parseFloat(n.height);if(o=(i-(e.pageY-t.top))/i,0===t.top||0===t.left)return}else{var r=parseFloat(n.width);o=(e.pageX-t.left)/r}o=Math.max(0,o),o=Math.min(o,1),T(o),a.setMuted(0===o),a.setVolume(o),e.preventDefault(),e.stopPropagation()},k=function(){a.muted?(T(0),(0,u.removeClass)(h,a.options.classPrefix+"mute"),(0,u.addClass)(h,a.options.classPrefix+"unmute")):(T(o.volume),(0,u.removeClass)(h,a.options.classPrefix+"unmute"),(0,u.addClass)(h,a.options.classPrefix+"mute"))};e.getElement(e.container).addEventListener("keydown",function(e){!!e.target.closest("."+a.options.classPrefix+"container")||"vertical"!==c||(S.style.display="none")}),h.addEventListener("mouseenter",function(e){e.target===h&&(S.style.display="block",y=!0,e.preventDefault(),e.stopPropagation())}),h.addEventListener("focusin",function(){S.style.display="block",y=!0}),h.addEventListener("focusout",function(e){e.relatedTarget&&(!e.relatedTarget||e.relatedTarget.matches("."+a.options.classPrefix+"volume-slider"))||"vertical"!==c||(S.style.display="none")}),h.addEventListener("mouseleave",function(){y=!1,g||"vertical"!==c||(S.style.display="none")}),h.addEventListener("focusout",function(){y=!1}),h.addEventListener("keydown",function(e){if(a.options.keyActions.length){var t=e.which||e.keyCode||0,n=o.volume;switch(t){case 38:n=Math.min(n+.1,1);break;case 40:n=Math.max(0,n-.1);break;default:return!0}g=!1,T(n),o.setVolume(n),e.preventDefault(),e.stopPropagation()}}),h.querySelector("button").addEventListener("click",function(){o.setMuted(!o.muted);var e=(0,d.createEvent)("volumechange",o);o.dispatchEvent(e)}),S.addEventListener("dragstart",function(){return!1}),S.addEventListener("mouseover",function(){y=!0}),S.addEventListener("focusin",function(){S.style.display="block",y=!0}),S.addEventListener("focusout",function(){y=!1,g||"vertical"!==c||(S.style.display="none")}),S.addEventListener("mousedown",function(e){C(e),a.globalBind("mousemove.vol",function(e){var t=e.target;g&&(t===S||t.closest("vertical"===c?"."+a.options.classPrefix+"volume-slider":"."+a.options.classPrefix+"horizontal-volume-slider"))&&C(e)}),a.globalBind("mouseup.vol",function(){g=!1,y||"vertical"!==c||(S.style.display="none")}),g=!0,e.preventDefault(),e.stopPropagation()}),o.addEventListener("volumechange",function(e){g||k(),b()});var _=!1;o.addEventListener("rendererready",function(){E||setTimeout(function(){_=!0,(0===e.options.startVolume||o.originalNode.muted)&&(o.setMuted(!0),e.options.startVolume=0),o.setVolume(e.options.startVolume),a.setControlsSize()},250)}),o.addEventListener("loadedmetadata",function(){setTimeout(function(){E||_||((0===e.options.startVolume||o.originalNode.muted)&&(o.setMuted(!0),e.options.startVolume=0),o.setVolume(e.options.startVolume),a.setControlsSize()),_=!1},250)}),(0===e.options.startVolume||o.originalNode.muted)&&(o.setMuted(!0),e.options.startVolume=0,k()),a.getElement(a.container).addEventListener("controlsresize",function(){k()})}}})},{16:16,2:2,25:25,26:26,27:27,5:5}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.EN={"mejs.plural-form":1,"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}},{}],16:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.config=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=o(e(3)),l=o(e(2)),d=o(e(7)),u=o(e(6)),c=o(e(17)),f=o(e(5)),p=e(25),m=e(27),h=e(30),v=e(28),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(e(26));d.default.mepIndex=0,d.default.players={};var y=n.config={poster:"",showPosterWhenEnded:!1,showPosterWhenPaused:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:40,defaultSeekBackwardInterval:function(e){return.05*e.getDuration()},defaultSeekForwardInterval:function(e){return.05*e.getDuration()},setDimensions:!0,audioWidth:-1,audioHeight:-1,loop:!1,autoRewind:!0,enableAutosize:!0,timeFormat:"",alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,hideVideoControlsOnPause:!1,clickToPlayPause:!0,controlsTimeoutDefault:1500,controlsTimeoutMouseEnter:2500,controlsTimeoutMouseLeave:1e3,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],useDefaultControls:!1,isVideo:!0,stretching:"auto",classPrefix:"mejs__",enableKeyboard:!0,pauseOtherPlayers:!0,secondsDecimalLength:0,customError:null,keyActions:[{keys:[32,179],action:function(e){p.IS_FIREFOX||(e.paused||e.ended?e.play():e.pause())}}]};d.default.MepDefaults=y;var E=function(){function e(t,n){i(this,e);var o=this,r="string"==typeof t?l.default.getElementById(t):t;if(!(o instanceof e))return new e(r,n);if(o.node=o.media=r,o.node){if(o.media.player)return o.media.player;if(o.hasFocus=!1,o.controlsAreVisible=!0,o.controlsEnabled=!0,o.controlsTimer=null,o.currentMediaTime=0,o.proxy=null,void 0===n){var a=o.node.getAttribute("data-mejsoptions");n=a?JSON.parse(a):{}}return o.options=Object.assign({},y,n),o.options.loop&&!o.media.getAttribute("loop")?(o.media.loop=!0,o.node.loop=!0):o.media.loop&&(o.options.loop=!0),o.options.timeFormat||(o.options.timeFormat="mm:ss",o.options.alwaysShowHours&&(o.options.timeFormat="hh:mm:ss"),o.options.showTimecodeFrameCount&&(o.options.timeFormat+=":ff")),(0,h.calculateTimeFormat)(0,o.options,o.options.framesPerSecond||25),o.id="mep_"+d.default.mepIndex++,d.default.players[o.id]=o,o.init(),o}}return a(e,[{key:"getElement",value:function(e){return e}},{key:"init",value:function(){var e=this,t=Object.assign({},e.options,{success:function(t,n){e._meReady(t,n)},error:function(t){e._handleError(t)}}),n=e.node.tagName.toLowerCase();if(e.isDynamic="audio"!==n&&"video"!==n&&"iframe"!==n,e.isVideo=e.isDynamic?e.options.isVideo:"audio"!==n&&e.options.isVideo,e.mediaFiles=null,e.trackFiles=null,p.IS_IPAD&&e.options.iPadUseNativeControls||p.IS_IPHONE&&e.options.iPhoneUseNativeControls)e.node.setAttribute("controls",!0),p.IS_IPAD&&e.node.getAttribute("autoplay")&&e.play();else if(!e.isVideo&&(e.isVideo||!e.options.features.length&&!e.options.useDefaultControls)||p.IS_ANDROID&&e.options.AndroidUseNativeControls)e.isVideo||e.options.features.length||e.options.useDefaultControls||(e.node.style.display="none");else{e.node.removeAttribute("controls");var o=e.isVideo?f.default.t("mejs.video-player"):f.default.t("mejs.audio-player"),i=l.default.createElement("span");if(i.className=e.options.classPrefix+"offscreen",i.innerText=o,e.media.parentNode.insertBefore(i,e.media),e.container=l.default.createElement("div"),e.getElement(e.container).id=e.id,e.getElement(e.container).className=e.options.classPrefix+"container "+e.options.classPrefix+"container-keyboard-inactive "+e.media.className,e.getElement(e.container).tabIndex=0,e.getElement(e.container).setAttribute("role","application"),e.getElement(e.container).setAttribute("aria-label",o),e.getElement(e.container).innerHTML='<div class="'+e.options.classPrefix+'inner"><div class="'+e.options.classPrefix+'mediaelement"></div><div class="'+e.options.classPrefix+'layers"></div><div class="'+e.options.classPrefix+'controls"></div></div>',e.getElement(e.container).addEventListener("focus",function(t){if(!e.controlsAreVisible&&!e.hasFocus&&e.controlsEnabled){e.showControls(!0);var n=(0,m.isNodeAfter)(t.relatedTarget,e.getElement(e.container))?"."+e.options.classPrefix+"controls ."+e.options.classPrefix+"button:last-child > button":"."+e.options.classPrefix+"playpause-button > button";e.getElement(e.container).querySelector(n).focus()}}),e.node.parentNode.insertBefore(e.getElement(e.container),e.node),e.options.features.length||e.options.useDefaultControls||(e.getElement(e.container).style.background="transparent",e.getElement(e.container).querySelector("."+e.options.classPrefix+"controls").style.display="none"),e.isVideo&&"fill"===e.options.stretching&&!g.hasClass(e.getElement(e.container).parentNode,e.options.classPrefix+"fill-container")){e.outerContainer=e.media.parentNode;var r=l.default.createElement("div");r.className=e.options.classPrefix+"fill-container",e.getElement(e.container).parentNode.insertBefore(r,e.getElement(e.container)),r.appendChild(e.getElement(e.container))}if(p.IS_ANDROID&&g.addClass(e.getElement(e.container),e.options.classPrefix+"android"),p.IS_IOS&&g.addClass(e.getElement(e.container),e.options.classPrefix+"ios"),p.IS_IPAD&&g.addClass(e.getElement(e.container),e.options.classPrefix+"ipad"),p.IS_IPHONE&&g.addClass(e.getElement(e.container),e.options.classPrefix+"iphone"),g.addClass(e.getElement(e.container),e.isVideo?e.options.classPrefix+"video":e.options.classPrefix+"audio"),p.IS_SAFARI&&!p.IS_IOS){g.addClass(e.getElement(e.container),e.options.classPrefix+"hide-cues");for(var a=e.node.cloneNode(),s=e.node.children,c=[],h=[],y=0,E=s.length;y<E;y++){var b=s[y];!function(){switch(b.tagName.toLowerCase()){case"source":var e={};Array.prototype.slice.call(b.attributes).forEach(function(t){e[t.name]=t.value}),e.type=(0,v.formatType)(e.src,e.type),c.push(e);break;case"track":b.mode="hidden",h.push(b);break;default:a.appendChild(b)}}()}e.node.remove(),e.node=e.media=a,c.length&&(e.mediaFiles=c),h.length&&(e.trackFiles=h)}e.getElement(e.container).querySelector("."+e.options.classPrefix+"mediaelement").appendChild(e.node),e.media.player=e,e.controls=e.getElement(e.container).querySelector("."+e.options.classPrefix+"controls"),e.layers=e.getElement(e.container).querySelector("."+e.options.classPrefix+"layers");var S=e.isVideo?"video":"audio",x=S.substring(0,1).toUpperCase()+S.substring(1);e.options[S+"Width"]>0||e.options[S+"Width"].toString().indexOf("%")>-1?e.width=e.options[S+"Width"]:""!==e.node.style.width&&null!==e.node.style.width?e.width=e.node.style.width:e.node.getAttribute("width")?e.width=e.node.getAttribute("width"):e.width=e.options["default"+x+"Width"],e.options[S+"Height"]>0||e.options[S+"Height"].toString().indexOf("%")>-1?e.height=e.options[S+"Height"]:""!==e.node.style.height&&null!==e.node.style.height?e.height=e.node.style.height:e.node.getAttribute("height")?e.height=e.node.getAttribute("height"):e.height=e.options["default"+x+"Height"],e.initialAspectRatio=e.height>=e.width?e.width/e.height:e.height/e.width,e.setPlayerSize(e.width,e.height),t.pluginWidth=e.width,t.pluginHeight=e.height}if(d.default.MepDefaults=t,new u.default(e.media,t,e.mediaFiles),void 0!==e.getElement(e.container)&&e.options.features.length&&e.controlsAreVisible&&!e.options.hideVideoControlsOnLoad){var w=(0,m.createEvent)("controlsshown",e.getElement(e.container));e.getElement(e.container).dispatchEvent(w)}}},{key:"showControls",value:function(e){var t=this;if(e=void 0===e||e,!t.controlsAreVisible&&t.isVideo){if(e)!function(){g.fadeIn(t.getElement(t.controls),200,function(){g.removeClass(t.getElement(t.controls),t.options.classPrefix+"offscreen");var e=(0,m.createEvent)("controlsshown",t.getElement(t.container));t.getElement(t.container).dispatchEvent(e)});for(var e=t.getElement(t.container).querySelectorAll("."+t.options.classPrefix+"control"),n=0,o=e.length;n<o;n++)!function(n,o){g.fadeIn(e[n],200,function(){g.removeClass(e[n],t.options.classPrefix+"offscreen")})}(n)}();else{g.removeClass(t.getElement(t.controls),t.options.classPrefix+"offscreen"),t.getElement(t.controls).style.display="",t.getElement(t.controls).style.opacity=1;for(var n=t.getElement(t.container).querySelectorAll("."+t.options.classPrefix+"control"),o=0,i=n.length;o<i;o++)g.removeClass(n[o],t.options.classPrefix+"offscreen"),n[o].style.display="";var r=(0,m.createEvent)("controlsshown",t.getElement(t.container));t.getElement(t.container).dispatchEvent(r)}t.controlsAreVisible=!0,t.setControlsSize()}}},{key:"hideControls",value:function(e,t){var n=this;if(e=void 0===e||e,!0===t||!(!n.controlsAreVisible||n.options.alwaysShowControls||n.paused&&4===n.readyState&&(!n.options.hideVideoControlsOnLoad&&n.currentTime<=0||!n.options.hideVideoControlsOnPause&&n.currentTime>0)||n.isVideo&&!n.options.hideVideoControlsOnLoad&&!n.readyState||n.ended)){if(e)!function(){g.fadeOut(n.getElement(n.controls),200,function(){g.addClass(n.getElement(n.controls),n.options.classPrefix+"offscreen"),n.getElement(n.controls).style.display="";var e=(0,m.createEvent)("controlshidden",n.getElement(n.container));n.getElement(n.container).dispatchEvent(e)});for(var e=n.getElement(n.container).querySelectorAll("."+n.options.classPrefix+"control"),t=0,o=e.length;t<o;t++)!function(t,o){g.fadeOut(e[t],200,function(){g.addClass(e[t],n.options.classPrefix+"offscreen"),e[t].style.display=""})}(t)}();else{g.addClass(n.getElement(n.controls),n.options.classPrefix+"offscreen"),n.getElement(n.controls).style.display="",n.getElement(n.controls).style.opacity=0;for(var o=n.getElement(n.container).querySelectorAll("."+n.options.classPrefix+"control"),i=0,r=o.length;i<r;i++)g.addClass(o[i],n.options.classPrefix+"offscreen"),o[i].style.display="";var a=(0,m.createEvent)("controlshidden",n.getElement(n.container));n.getElement(n.container).dispatchEvent(a)}n.controlsAreVisible=!1}}},{key:"startControlsTimer",value:function(e){var t=this;e=void 0!==e?e:t.options.controlsTimeoutDefault,t.killControlsTimer("start"),t.controlsTimer=setTimeout(function(){t.hideControls(),t.killControlsTimer("hide")},e)}},{key:"killControlsTimer",value:function(){var e=this;null!==e.controlsTimer&&(clearTimeout(e.controlsTimer),delete e.controlsTimer,e.controlsTimer=null)}},{key:"disableControls",value:function(){var e=this;e.killControlsTimer(),e.controlsEnabled=!1,e.hideControls(!1,!0)}},{key:"enableControls",value:function(){var e=this;e.controlsEnabled=!0,e.showControls(!1)}},{key:"_setDefaultPlayer",value:function(){var e=this;e.proxy&&e.proxy.pause(),e.proxy=new c.default(e),e.media.addEventListener("loadedmetadata",function(){e.getCurrentTime()>0&&e.currentMediaTime>0&&(e.setCurrentTime(e.currentMediaTime),p.IS_IOS||p.IS_ANDROID||e.play())})}},{key:"_meReady",value:function(e,t){var n=this,o=t.getAttribute("autoplay"),i=!(void 0===o||null===o||"false"===o),r=null!==e.rendererName&&/(native|html5)/i.test(n.media.rendererName);if(n.getElement(n.controls)&&n.enableControls(),n.getElement(n.container)&&n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-play")&&(n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-play").style.display=""),!n.created){if(n.created=!0,n.media=e,n.domNode=t,!(p.IS_ANDROID&&n.options.AndroidUseNativeControls||p.IS_IPAD&&n.options.iPadUseNativeControls||p.IS_IPHONE&&n.options.iPhoneUseNativeControls)){if(!n.isVideo&&!n.options.features.length&&!n.options.useDefaultControls)return i&&r&&n.play(),void(n.options.success&&("string"==typeof n.options.success?s.default[n.options.success](n.media,n.domNode,n):n.options.success(n.media,n.domNode,n)));if(n.featurePosition={},n._setDefaultPlayer(),n.buildposter(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.buildkeyboard(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.buildoverlays(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.options.useDefaultControls){var a=["playpause","current","progress","duration","tracks","volume","fullscreen"];n.options.features=a.concat(n.options.features.filter(function(e){return-1===a.indexOf(e)}))}n.buildfeatures(n,n.getElement(n.controls),n.getElement(n.layers),n.media);var u=(0,m.createEvent)("controlsready",n.getElement(n.container));n.getElement(n.container).dispatchEvent(u),n.setPlayerSize(n.width,n.height),n.setControlsSize(),n.isVideo&&(n.clickToPlayPauseCallback=function(){if(n.options.clickToPlayPause){var e=n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-button"),t=e.getAttribute("aria-pressed");n.paused&&t?n.pause():n.paused?n.play():n.pause(),e.setAttribute("aria-pressed",!t),n.getElement(n.container).focus()}},n.createIframeLayer(),n.media.addEventListener("click",n.clickToPlayPauseCallback),!p.IS_ANDROID&&!p.IS_IOS||n.options.alwaysShowControls?(n.getElement(n.container).addEventListener("mouseenter",function(){n.controlsEnabled&&(n.options.alwaysShowControls||(n.killControlsTimer("enter"),n.showControls(),n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))}),n.getElement(n.container).addEventListener("mousemove",function(){n.controlsEnabled&&(n.controlsAreVisible||n.showControls(),n.options.alwaysShowControls||n.startControlsTimer(n.options.controlsTimeoutMouseEnter))}),n.getElement(n.container).addEventListener("mouseleave",function(){n.controlsEnabled&&(n.paused||n.options.alwaysShowControls||n.startControlsTimer(n.options.controlsTimeoutMouseLeave))})):n.node.addEventListener("touchstart",function(){n.controlsAreVisible?n.hideControls(!1):n.controlsEnabled&&n.showControls(!1)},!!p.SUPPORT_PASSIVE_EVENT&&{passive:!0}),n.options.hideVideoControlsOnLoad&&n.hideControls(!1),n.options.enableAutosize&&n.media.addEventListener("loadedmetadata",function(e){var t=void 0!==e?e.detail.target||e.target:n.media;n.options.videoHeight<=0&&!n.domNode.getAttribute("height")&&!n.domNode.style.height&&null!==t&&!isNaN(t.videoHeight)&&(n.setPlayerSize(t.videoWidth,t.videoHeight),n.setControlsSize(),n.media.setSize(t.videoWidth,t.videoHeight))})),n.media.addEventListener("play",function(){n.hasFocus=!0;for(var e in d.default.players)if(d.default.players.hasOwnProperty(e)){var t=d.default.players[e];t.id===n.id||!n.options.pauseOtherPlayers||t.paused||t.ended||(t.pause(),t.hasFocus=!1)}p.IS_ANDROID||p.IS_IOS||n.options.alwaysShowControls||!n.isVideo||n.hideControls()}),n.media.addEventListener("ended",function(){if(n.options.autoRewind)try{n.setCurrentTime(0),setTimeout(function(){var e=n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-loading");e&&e.parentNode&&(e.parentNode.style.display="none")},20)}catch(e){}"function"==typeof n.media.renderer.stop?n.media.renderer.stop():n.pause(),n.setProgressRail&&n.setProgressRail(),n.setCurrentRail&&n.setCurrentRail(),n.options.loop?n.play():!n.options.alwaysShowControls&&n.controlsEnabled&&n.showControls()}),n.media.addEventListener("loadedmetadata",function(){(0,h.calculateTimeFormat)(n.getDuration(),n.options,n.options.framesPerSecond||25),n.updateDuration&&n.updateDuration(),n.updateCurrent&&n.updateCurrent(),n.isFullScreen||(n.setPlayerSize(n.width,n.height),n.setControlsSize())});var c=null;n.media.addEventListener("timeupdate",function(){isNaN(n.getDuration())||c===n.getDuration()||(c=n.getDuration(),(0,h.calculateTimeFormat)(c,n.options,n.options.framesPerSecond||25),n.updateDuration&&n.updateDuration(),n.updateCurrent&&n.updateCurrent(),n.setControlsSize())}),n.getElement(n.container).addEventListener("click",function(e){g.addClass(e.currentTarget,n.options.classPrefix+"container-keyboard-inactive")}),n.getElement(n.container).addEventListener("focusin",function(e){g.removeClass(e.currentTarget,n.options.classPrefix+"container-keyboard-inactive"),!n.isVideo||p.IS_ANDROID||p.IS_IOS||!n.controlsEnabled||n.options.alwaysShowControls||(n.killControlsTimer("enter"),n.showControls(),n.startControlsTimer(n.options.controlsTimeoutMouseEnter))}),n.getElement(n.container).addEventListener("focusout",function(e){setTimeout(function(){e.relatedTarget&&n.keyboardAction&&!e.relatedTarget.closest("."+n.options.classPrefix+"container")&&(n.keyboardAction=!1,!n.isVideo||n.options.alwaysShowControls||n.paused||n.startControlsTimer(n.options.controlsTimeoutMouseLeave))},0)}),setTimeout(function(){n.setPlayerSize(n.width,n.height),n.setControlsSize()},0),n.globalResizeCallback=function(){n.isFullScreen||p.HAS_TRUE_NATIVE_FULLSCREEN&&l.default.webkitIsFullScreen||n.setPlayerSize(n.width,n.height),n.setControlsSize()},n.globalBind("resize",n.globalResizeCallback)}i&&r&&n.play(),n.options.success&&("string"==typeof n.options.success?s.default[n.options.success](n.media,n.domNode,n):n.options.success(n.media,n.domNode,n))}}},{key:"_handleError",value:function(e,t,n){var o=this,i=o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-play");i&&(i.style.display="none"),o.options.error&&o.options.error(e,t,n),o.getElement(o.container).querySelector("."+o.options.classPrefix+"cannotplay")&&o.getElement(o.container).querySelector("."+o.options.classPrefix+"cannotplay").remove();var r=l.default.createElement("div");r.className=o.options.classPrefix+"cannotplay",r.style.width="100%",r.style.height="100%";var a="function"==typeof o.options.customError?o.options.customError(o.media,o.media.originalNode):o.options.customError,s="";if(!a){var u=o.media.originalNode.getAttribute("poster");if(u&&(s='<img src="'+u+'" alt="'+d.default.i18n.t("mejs.download-file")+'">'),e.message&&(a="<p>"+e.message+"</p>"),e.urls)for(var c=0,f=e.urls.length;c<f;c++){var p=e.urls[c];a+='<a href="'+p.src+'" data-type="'+p.type+'"><span>'+d.default.i18n.t("mejs.download-file")+": "+p.src+"</span></a>"}}a&&o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error")&&(r.innerHTML=a,o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error").innerHTML=""+s+r.outerHTML,o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error").parentNode.style.display="block"),o.controlsEnabled&&o.disableControls()}},{key:"setPlayerSize",value:function(e,t){var n=this;if(!n.options.setDimensions)return!1;switch(void 0!==e&&(n.width=e),void 0!==t&&(n.height=t),n.options.stretching){case"fill":n.isVideo?n.setFillMode():n.setDimensions(n.width,n.height);break;case"responsive":n.setResponsiveMode();break;case"none":n.setDimensions(n.width,n.height);break;default:!0===n.hasFluidMode()?n.setResponsiveMode():n.setDimensions(n.width,n.height)}}},{key:"hasFluidMode",value:function(){var e=this;return-1!==e.height.toString().indexOf("%")||e.node&&e.node.style.maxWidth&&"none"!==e.node.style.maxWidth&&e.node.style.maxWidth!==e.width||e.node&&e.node.currentStyle&&"100%"===e.node.currentStyle.maxWidth}},{key:"setResponsiveMode",value:function(){var e=this,t=function(){for(var t=void 0,n=e.getElement(e.container);n;){try{if(p.IS_FIREFOX&&"html"===n.tagName.toLowerCase()&&s.default.self!==s.default.top&&null!==s.default.frameElement)return s.default.frameElement;t=n.parentElement}catch(e){t=n.parentElement}if(t&&g.visible(t))return t;n=t}return null}(),n=t?getComputedStyle(t,null):getComputedStyle(l.default.body,null),o=e.isVideo?e.media.videoWidth&&e.media.videoWidth>0?e.media.videoWidth:e.node.getAttribute("width")?e.node.getAttribute("width"):e.options.defaultVideoWidth:e.options.defaultAudioWidth,i=e.isVideo?e.media.videoHeight&&e.media.videoHeight>0?e.media.videoHeight:e.node.getAttribute("height")?e.node.getAttribute("height"):e.options.defaultVideoHeight:e.options.defaultAudioHeight,r=function(){var t=1;return e.isVideo?(t=e.media.videoWidth&&e.media.videoWidth>0&&e.media.videoHeight&&e.media.videoHeight>0?e.height>=e.width?e.media.videoWidth/e.media.videoHeight:e.media.videoHeight/e.media.videoWidth:e.initialAspectRatio,(isNaN(t)||t<.01||t>100)&&(t=1),t):t}(),a=parseFloat(n.height),d=void 0,u=parseFloat(n.width);if(d=e.isVideo?"100%"===e.height?parseFloat(u*i/o,10):e.height>=e.width?parseFloat(u/r,10):parseFloat(u*r,10):i,isNaN(d)&&(d=a),e.getElement(e.container).parentNode.length>0&&"body"===e.getElement(e.container).parentNode.tagName.toLowerCase()&&(u=s.default.innerWidth||l.default.documentElement.clientWidth||l.default.body.clientWidth,d=s.default.innerHeight||l.default.documentElement.clientHeight||l.default.body.clientHeight),d&&u){e.getElement(e.container).style.width=u+"px",e.getElement(e.container).style.height=d+"px",e.node.style.width="100%",e.node.style.height="100%",e.isVideo&&e.media.setSize&&e.media.setSize(u,d);for(var c=e.getElement(e.layers).children,f=0,m=c.length;f<m;f++)c[f].style.width="100%",c[f].style.height="100%"}}},{key:"setFillMode",value:function(){var e=this,t=s.default.self!==s.default.top&&null!==s.default.frameElement,n=function(){for(var t=void 0,n=e.getElement(e.container);n;){try{if(p.IS_FIREFOX&&"html"===n.tagName.toLowerCase()&&s.default.self!==s.default.top&&null!==s.default.frameElement)return s.default.frameElement;t=n.parentElement}catch(e){t=n.parentElement}if(t&&g.visible(t))return t;n=t}return null}(),o=n?getComputedStyle(n,null):getComputedStyle(l.default.body,null);"none"!==e.node.style.height&&e.node.style.height!==e.height&&(e.node.style.height="auto"),"none"!==e.node.style.maxWidth&&e.node.style.maxWidth!==e.width&&(e.node.style.maxWidth="none"),"none"!==e.node.style.maxHeight&&e.node.style.maxHeight!==e.height&&(e.node.style.maxHeight="none"),e.node.currentStyle&&("100%"===e.node.currentStyle.height&&(e.node.currentStyle.height="auto"),"100%"===e.node.currentStyle.maxWidth&&(e.node.currentStyle.maxWidth="none"),"100%"===e.node.currentStyle.maxHeight&&(e.node.currentStyle.maxHeight="none")),t||parseFloat(o.width)||(n.style.width=e.media.offsetWidth+"px"),t||parseFloat(o.height)||(n.style.height=e.media.offsetHeight+"px"),o=getComputedStyle(n);var i=parseFloat(o.width),r=parseFloat(o.height);e.setDimensions("100%","100%");var a=e.getElement(e.container).querySelector("."+e.options.classPrefix+"poster>img");a&&(a.style.display="");for(var d=e.getElement(e.container).querySelectorAll("object, embed, iframe, video"),u=e.height,c=e.width,f=i,m=u*i/c,h=c*r/u,v=r,y=h>i==!1,E=y?Math.floor(f):Math.floor(h),b=y?Math.floor(m):Math.floor(v),S=y?i+"px":E+"px",x=y?b+"px":r+"px",w=0,P=d.length;w<P;w++)d[w].style.height=x,d[w].style.width=S,e.media.setSize&&e.media.setSize(S,x),d[w].style.marginLeft=Math.floor((i-E)/2)+"px",d[w].style.marginTop=0}},{key:"setDimensions",value:function(e,t){var n=this;e=(0,m.isString)(e)&&e.indexOf("%")>-1?e:parseFloat(e)+"px",t=(0,m.isString)(t)&&t.indexOf("%")>-1?t:parseFloat(t)+"px",n.getElement(n.container).style.width=e,n.getElement(n.container).style.height=t;for(var o=n.getElement(n.layers).children,i=0,r=o.length;i<r;i++)o[i].style.width=e,o[i].style.height=t}},{key:"setControlsSize",value:function(){var e=this;if(g.visible(e.getElement(e.container)))if(e.rail&&g.visible(e.rail)){for(var t=e.total?getComputedStyle(e.total,null):null,n=t?parseFloat(t.marginLeft)+parseFloat(t.marginRight):0,o=getComputedStyle(e.rail),i=parseFloat(o.marginLeft)+parseFloat(o.marginRight),r=0,a=g.siblings(e.rail,function(t){return t!==e.rail}),s=a.length,l=0;l<s;l++)r+=a[l].offsetWidth;r+=n+(0===n?2*i:i)+1,e.getElement(e.container).style.minWidth=r+"px";var d=(0,m.createEvent)("controlsresize",e.getElement(e.container));e.getElement(e.container).dispatchEvent(d)}else{for(var u=e.getElement(e.controls).children,c=0,f=0,p=u.length;f<p;f++)c+=u[f].offsetWidth;e.getElement(e.container).style.minWidth=c+"px"}}},{key:"addControlElement",value:function(e,t){var n=this;if(void 0!==n.featurePosition[t]){var o=n.getElement(n.controls).children[n.featurePosition[t]-1];o.parentNode.insertBefore(e,o.nextSibling)}else{n.getElement(n.controls).appendChild(e);for(var i=n.getElement(n.controls).children,r=0,a=i.length;r<a;r++)if(e===i[r]){n.featurePosition[t]=r;break}}}},{key:"createIframeLayer",value:function(){var e=this;if(e.isVideo&&null!==e.media.rendererName&&e.media.rendererName.indexOf("iframe")>-1&&!l.default.getElementById(e.media.id+"-iframe-overlay")){var t=l.default.createElement("div"),n=l.default.getElementById(e.media.id+"_"+e.media.rendererName);t.id=e.media.id+"-iframe-overlay",t.className=e.options.classPrefix+"iframe-overlay",t.addEventListener("click",function(t){e.options.clickToPlayPause&&(e.paused?e.play():e.pause(),t.preventDefault(),t.stopPropagation())}),n.parentNode.insertBefore(t,n)}}},{key:"resetSize",value:function(){var e=this;setTimeout(function(){e.setPlayerSize(e.width,e.height),e.setControlsSize()},50)}},{key:"setPoster",value:function(e){var t=this;if(t.getElement(t.container)){var n=t.getElement(t.container).querySelector("."+t.options.classPrefix+"poster");n||((n=l.default.createElement("div")).className=t.options.classPrefix+"poster "+t.options.classPrefix+"layer",t.getElement(t.layers).appendChild(n));var o=n.querySelector("img");!o&&e&&((o=l.default.createElement("img")).className=t.options.classPrefix+"poster-img",o.width="100%",o.height="100%",n.style.display="",n.appendChild(o)),e?(o.setAttribute("src",e),n.style.backgroundImage='url("'+e+'")',n.style.display=""):o?(n.style.backgroundImage="none",n.style.display="none",o.remove()):n.style.display="none"}else(p.IS_IPAD&&t.options.iPadUseNativeControls||p.IS_IPHONE&&t.options.iPhoneUseNativeControls||p.IS_ANDROID&&t.options.AndroidUseNativeControls)&&(t.media.originalNode.poster=e)}},{key:"changeSkin",value:function(e){var t=this;t.getElement(t.container).className=t.options.classPrefix+"container "+e,t.setPlayerSize(t.width,t.height),t.setControlsSize()}},{key:"globalBind",value:function(e,t){var n=this,o=n.node?n.node.ownerDocument:l.default;if((e=(0,m.splitEvents)(e,n.id)).d)for(var i=e.d.split(" "),r=0,a=i.length;r<a;r++)i[r].split(".").reduce(function(e,n){return o.addEventListener(n,t,!1),n},"");if(e.w)for(var d=e.w.split(" "),u=0,c=d.length;u<c;u++)d[u].split(".").reduce(function(e,n){return s.default.addEventListener(n,t,!1),n},"")}},{key:"globalUnbind",value:function(e,t){var n=this,o=n.node?n.node.ownerDocument:l.default;if((e=(0,m.splitEvents)(e,n.id)).d)for(var i=e.d.split(" "),r=0,a=i.length;r<a;r++)i[r].split(".").reduce(function(e,n){return o.removeEventListener(n,t,!1),n},"");if(e.w)for(var d=e.w.split(" "),u=0,c=d.length;u<c;u++)d[u].split(".").reduce(function(e,n){return s.default.removeEventListener(n,t,!1),n},"")}},{key:"buildfeatures",value:function(e,t,n,o){for(var i=this,r=0,a=i.options.features.length;r<a;r++){var s=i.options.features[r];if(i["build"+s])try{i["build"+s](e,t,n,o)}catch(e){console.error("error building "+s,e)}}}},{key:"buildposter",value:function(e,t,n,o){var i=this,r=l.default.createElement("div");r.className=i.options.classPrefix+"poster "+i.options.classPrefix+"layer",n.appendChild(r);var a=o.originalNode.getAttribute("poster");""!==e.options.poster&&(a&&p.IS_IOS&&o.originalNode.removeAttribute("poster"),a=e.options.poster),a?i.setPoster(a):null!==i.media.renderer&&"function"==typeof i.media.renderer.getPosterUrl?i.setPoster(i.media.renderer.getPosterUrl()):r.style.display="none",o.addEventListener("play",function(){r.style.display="none"}),o.addEventListener("playing",function(){r.style.display="none"}),e.options.showPosterWhenEnded&&e.options.autoRewind&&o.addEventListener("ended",function(){r.style.display=""}),o.addEventListener("error",function(){r.style.display="none"}),e.options.showPosterWhenPaused&&o.addEventListener("pause",function(){e.ended||(r.style.display="")})}},{key:"buildoverlays",value:function(e,t,n,o){if(e.isVideo){var i=this,r=l.default.createElement("div"),a=l.default.createElement("div"),s=l.default.createElement("div");r.style.display="none",r.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer",r.innerHTML='<div class="'+i.options.classPrefix+'overlay-loading"><span class="'+i.options.classPrefix+'overlay-loading-bg-img"></span></div>',n.appendChild(r),a.style.display="none",a.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer",a.innerHTML='<div class="'+i.options.classPrefix+'overlay-error"></div>',n.appendChild(a),s.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer "+i.options.classPrefix+"overlay-play",s.innerHTML='<div class="'+i.options.classPrefix+'overlay-button" role="button" tabindex="0" aria-label="'+f.default.t("mejs.play")+'" aria-pressed="false"></div>',s.addEventListener("click",function(){if(i.options.clickToPlayPause){var e=i.getElement(i.container).querySelector("."+i.options.classPrefix+"overlay-button"),t=e.getAttribute("aria-pressed");i.paused?i.play():i.pause(),e.setAttribute("aria-pressed",!!t),i.getElement(i.container).focus()}}),s.addEventListener("keydown",function(e){var t=e.keyCode||e.which||0;if(13===t||p.IS_FIREFOX&&32===t){var n=(0,m.createEvent)("click",s);return s.dispatchEvent(n),!1}}),n.appendChild(s),null!==i.media.rendererName&&(/(youtube|facebook)/i.test(i.media.rendererName)&&!(i.media.originalNode.getAttribute("poster")||e.options.poster||"function"==typeof i.media.renderer.getPosterUrl&&i.media.renderer.getPosterUrl())||p.IS_STOCK_ANDROID||i.media.originalNode.getAttribute("autoplay"))&&(s.style.display="none");var d=!1;o.addEventListener("play",function(){s.style.display="none",r.style.display="none",a.style.display="none",d=!1}),o.addEventListener("playing",function(){s.style.display="none",r.style.display="none",a.style.display="none",d=!1}),o.addEventListener("seeking",function(){s.style.display="none",r.style.display="",d=!1}),o.addEventListener("seeked",function(){s.style.display=i.paused&&!p.IS_STOCK_ANDROID?"":"none",r.style.display="none",d=!1}),o.addEventListener("pause",function(){r.style.display="none",p.IS_STOCK_ANDROID||d||(s.style.display=""),d=!1}),o.addEventListener("waiting",function(){r.style.display="",d=!1}),o.addEventListener("loadeddata",function(){r.style.display="",p.IS_ANDROID&&(o.canplayTimeout=setTimeout(function(){if(l.default.createEvent){var e=l.default.createEvent("HTMLEvents");return e.initEvent("canplay",!0,!0),o.dispatchEvent(e)}},300)),d=!1}),o.addEventListener("canplay",function(){r.style.display="none",clearTimeout(o.canplayTimeout),d=!1}),o.addEventListener("error",function(e){i._handleError(e,i.media,i.node),r.style.display="none",s.style.display="none",d=!0}),o.addEventListener("loadedmetadata",function(){i.controlsEnabled||i.enableControls()}),o.addEventListener("keydown",function(t){i.onkeydown(e,o,t),d=!1})}}},{key:"buildkeyboard",value:function(e,t,n,o){var i=this;i.getElement(i.container).addEventListener("keydown",function(){i.keyboardAction=!0}),i.globalKeydownCallback=function(t){var n=l.default.activeElement.closest("."+i.options.classPrefix+"container"),r=i.media.closest("."+i.options.classPrefix+"container");return i.hasFocus=!(!n||!r||n.id!==r.id),i.onkeydown(e,o,t)},i.globalClickCallback=function(e){i.hasFocus=!!e.target.closest("."+i.options.classPrefix+"container")},i.globalBind("keydown",i.globalKeydownCallback),i.globalBind("click",i.globalClickCallback)}},{key:"onkeydown",value:function(e,t,n){if(e.hasFocus&&e.options.enableKeyboard)for(var o=0,i=e.options.keyActions.length;o<i;o++)for(var r=e.options.keyActions[o],a=0,s=r.keys.length;a<s;a++)if(n.keyCode===r.keys[a])return r.action(e,t,n.keyCode,n),n.preventDefault(),void n.stopPropagation();return!0}},{key:"play",value:function(){this.proxy.play()}},{key:"pause",value:function(){this.proxy.pause()}},{key:"load",value:function(){this.proxy.load()}},{key:"setCurrentTime",value:function(e){this.proxy.setCurrentTime(e)}},{key:"getCurrentTime",value:function(){return this.proxy.currentTime}},{key:"getDuration",value:function(){return this.proxy.duration}},{key:"setVolume",value:function(e){this.proxy.volume=e}},{key:"getVolume",value:function(){return this.proxy.getVolume()}},{key:"setMuted",value:function(e){this.proxy.setMuted(e)}},{key:"setSrc",value:function(e){this.controlsEnabled||this.enableControls(),this.proxy.setSrc(e)}},{key:"getSrc",value:function(){return this.proxy.getSrc()}},{key:"canPlayType",value:function(e){return this.proxy.canPlayType(e)}},{key:"remove",value:function(){var e=this,t=e.media.rendererName,n=e.media.originalNode.src;for(var o in e.options.features){var i=e.options.features[o];if(e["clean"+i])try{e["clean"+i](e,e.getElement(e.layers),e.getElement(e.controls),e.media)}catch(e){console.error("error cleaning "+i,e)}}var a=e.node.getAttribute("width"),s=e.node.getAttribute("height");a?-1===a.indexOf("%")&&(a+="px"):a="auto",s?-1===s.indexOf("%")&&(s+="px"):s="auto",e.node.style.width=a,e.node.style.height=s,e.setPlayerSize(0,0),e.isDynamic?e.getElement(e.container).parentNode.insertBefore(e.node,e.getElement(e.container)):function(){e.node.setAttribute("controls",!0),e.node.setAttribute("id",e.node.getAttribute("id").replace("_"+t,"").replace("_from_mejs",""));var o=e.getElement(e.container).querySelector("."+e.options.classPrefix+"poster>img");o&&e.node.setAttribute("poster",o.src),delete e.node.autoplay,""!==e.media.canPlayType((0,v.getTypeFromFile)(n))&&e.node.setAttribute("src",n),~t.indexOf("iframe")&&l.default.getElementById(e.media.id+"-iframe-overlay").remove();var i=e.node.cloneNode();if(i.style.display="",e.getElement(e.container).parentNode.insertBefore(i,e.getElement(e.container)),e.node.remove(),e.mediaFiles)for(var r=0,a=e.mediaFiles.length;r<a;r++){var s=l.default.createElement("source");s.setAttribute("src",e.mediaFiles[r].src),s.setAttribute("type",e.mediaFiles[r].type),i.appendChild(s)}if(e.trackFiles)for(var d=0,u=e.trackFiles.length;d<u;d++)!function(t,n){var o=e.trackFiles[t],r=l.default.createElement("track");r.kind=o.kind,r.label=o.label,r.srclang=o.srclang,r.src=o.src,i.appendChild(r),r.addEventListener("load",function(){this.mode="showing",i.textTracks[t].mode="showing"})}(d);delete e.node,delete e.mediaFiles,delete e.trackFiles}(),"function"==typeof e.media.renderer.destroy&&e.media.renderer.destroy(),delete d.default.players[e.id],"object"===r(e.getElement(e.container))&&(e.getElement(e.container).parentNode.querySelector("."+e.options.classPrefix+"offscreen").remove(),e.getElement(e.container).remove()),e.globalUnbind("resize",e.globalResizeCallback),e.globalUnbind("keydown",e.globalKeydownCallback),e.globalUnbind("click",e.globalClickCallback),delete e.media.player}},{key:"paused",get:function(){return this.proxy.paused}},{key:"muted",get:function(){return this.proxy.muted},set:function(e){this.setMuted(e)}},{key:"ended",get:function(){return this.proxy.ended}},{key:"readyState",get:function(){return this.proxy.readyState}},{key:"currentTime",set:function(e){this.setCurrentTime(e)},get:function(){return this.getCurrentTime()}},{key:"duration",get:function(){return this.getDuration()}},{key:"volume",set:function(e){this.setVolume(e)},get:function(){return this.getVolume()}},{key:"src",set:function(e){this.setSrc(e)},get:function(){return this.getSrc()}}]),e}();s.default.MediaElementPlayer=E,d.default.MediaElementPlayer=E,n.default=E},{17:17,2:2,25:25,26:26,27:27,28:28,3:3,30:30,5:5,6:6,7:7}],17:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(e(3)),a=function(){function e(t){return o(this,e),this.media=t.media,this.isVideo=t.isVideo,this.classPrefix=t.options.classPrefix,this.createIframeLayer=function(){return t.createIframeLayer()},this.setPoster=function(e){return t.setPoster(e)},this}return i(e,[{key:"play",value:function(){this.media.play()}},{key:"pause",value:function(){this.media.pause()}},{key:"load",value:function(){var e=this;e.isLoaded||e.media.load(),e.isLoaded=!0}},{key:"setCurrentTime",value:function(e){this.media.setCurrentTime(e)}},{key:"getCurrentTime",value:function(){return this.media.currentTime}},{key:"getDuration",value:function(){return this.media.getDuration()}},{key:"setVolume",value:function(e){this.media.setVolume(e)}},{key:"getVolume",value:function(){return this.media.getVolume()}},{key:"setMuted",value:function(e){this.media.setMuted(e)}},{key:"setSrc",value:function(e){var t=this,n=document.getElementById(t.media.id+"-iframe-overlay");n&&n.remove(),t.media.setSrc(e),t.createIframeLayer(),null!==t.media.renderer&&"function"==typeof t.media.renderer.getPosterUrl&&t.setPoster(t.media.renderer.getPosterUrl())}},{key:"getSrc",value:function(){return this.media.getSrc()}},{key:"canPlayType",value:function(e){return this.media.canPlayType(e)}},{key:"paused",get:function(){return this.media.paused}},{key:"muted",set:function(e){this.setMuted(e)},get:function(){return this.media.muted}},{key:"ended",get:function(){return this.media.ended}},{key:"readyState",get:function(){return this.media.readyState}},{key:"currentTime",set:function(e){this.setCurrentTime(e)},get:function(){return this.getCurrentTime()}},{key:"duration",get:function(){return this.getDuration()}},{key:"volume",set:function(e){this.setVolume(e)},get:function(){return this.getVolume()}},{key:"src",set:function(e){this.setSrc(e)},get:function(){return this.getSrc()}}]),e}();n.default=a,r.default.DefaultPlayer=a},{3:3}],18:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(3)),r=o(e(7)),a=o(e(16));"undefined"!=typeof jQuery?r.default.$=i.default.jQuery=i.default.$=jQuery:"undefined"!=typeof Zepto?r.default.$=i.default.Zepto=i.default.$=Zepto:"undefined"!=typeof ender&&(r.default.$=i.default.ender=i.default.$=ender),function(e){void 0!==e&&(e.fn.mediaelementplayer=function(t){return!1===t?this.each(function(){var t=e(this).data("mediaelementplayer");t&&t.remove(),e(this).removeData("mediaelementplayer")}):this.each(function(){e(this).data("mediaelementplayer",new a.default(this,t))}),this},e(document).ready(function(){e("."+r.default.MepDefaults.classPrefix+"player").mediaelementplayer()}))}(r.default.$)},{16:16,3:3,7:7}],19:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(e(3)),a=o(e(7)),s=e(8),l=e(27),d=e(28),u=e(25),c=e(26),f={promise:null,load:function(e){return"undefined"!=typeof dashjs?f.promise=new Promise(function(e){e()}).then(function(){f._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdn.dashjs.org/latest/dash.all.min.js",f.promise=f.promise||(0,c.loadScript)(e.options.path),f.promise.then(function(){f._createPlayer(e)})),f.promise},_createPlayer:function(e){var t=dashjs.MediaPlayer().create();return r.default["__ready__"+e.id](t),t}},p={name:"native_dash",options:{prefix:"native_dash",dash:{path:"https://cdn.dashjs.org/latest/dash.all.min.js",debug:!1,drm:{},robustnessLevel:""}},canPlayType:function(e){return u.HAS_MSE&&["application/dash+xml"].indexOf(e.toLowerCase())>-1},create:function(e,t,n){var o=e.originalNode,d=e.id+"_"+t.prefix,u=o.autoplay,c=o.children,p=null,m=null;o.removeAttribute("type");for(var h=0,v=c.length;h<v;h++)c[h].removeAttribute("type");p=o.cloneNode(!0),t=Object.assign(t,e.options);for(var g=a.default.html5media.properties,y=a.default.html5media.events.concat(["click","mouseover","mouseout"]),E=function(t){if("error"!==t.type){var n=(0,l.createEvent)(t.type,e);e.dispatchEvent(n)}},b=0,S=g.length;b<S;b++)!function(e){var n=""+e.substring(0,1).toUpperCase()+e.substring(1);p["get"+n]=function(){return null!==m?p[e]:null},p["set"+n]=function(n){if(-1===a.default.html5media.readOnlyProperties.indexOf(e))if("src"===e){var o="object"===(void 0===n?"undefined":i(n))&&n.src?n.src:n;if(p[e]=o,null!==m){m.reset();for(var r=0,s=y.length;r<s;r++)p.removeEventListener(y[r],E);m=f._createPlayer({options:t.dash,id:d}),n&&"object"===(void 0===n?"undefined":i(n))&&"object"===i(n.drm)&&(m.setProtectionData(n.drm),(0,l.isString)(t.dash.robustnessLevel)&&t.dash.robustnessLevel&&m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)),m.attachSource(o),u&&m.play()}}else p[e]=n}}(g[b]);if(r.default["__ready__"+d]=function(n){e.dashPlayer=m=n;for(var o=dashjs.MediaPlayer.events,r=0,s=y.length;r<s;r++)!function(e){"loadedmetadata"===e&&(m.getDebug().setLogToBrowserConsole(t.dash.debug),m.initialize(),m.setScheduleWhilePaused(!1),m.setFastSwitchEnabled(!0),m.attachView(p),m.setAutoPlay(!1),"object"!==i(t.dash.drm)||a.default.Utils.isObjectEmpty(t.dash.drm)||(m.setProtectionData(t.dash.drm),(0,l.isString)(t.dash.robustnessLevel)&&t.dash.robustnessLevel&&m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)),m.attachSource(p.getSrc())),p.addEventListener(e,E)}(y[r]);var d=function(t,n){if("error"===t.toLowerCase())e.generateError(n.message,p.src),console.error(n);else{var o=(0,l.createEvent)(t,e);o.data=n,e.dispatchEvent(o)}};for(var u in o)o.hasOwnProperty(u)&&m.on(o[u],function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return d(e.type,n)})},n&&n.length>0)for(var x=0,w=n.length;x<w;x++)if(s.renderer.renderers[t.prefix].canPlayType(n[x].type)){p.setAttribute("src",n[x].src),void 0!==n[x].drm&&(t.dash.drm=n[x].drm);break}p.setAttribute("id",d),o.parentNode.insertBefore(p,o),o.autoplay=!1,o.style.display="none",p.setSize=function(e,t){return p.style.width=e+"px",p.style.height=t+"px",p},p.hide=function(){return p.pause(),p.style.display="none",p},p.show=function(){return p.style.display="",p},p.destroy=function(){null!==m&&m.reset()};var P=(0,l.createEvent)("rendererready",p);return e.dispatchEvent(P),e.promises.push(f.load({options:t.dash,id:d})),p}};d.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".mpd")?"application/dash+xml":null}),s.renderer.add(p)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],20:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.PluginDetector=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(e(3)),a=o(e(2)),s=o(e(7)),l=o(e(5)),d=e(8),u=e(27),c=e(25),f=e(28),p=n.PluginDetector={plugins:[],hasPluginVersion:function(e,t){var n=p.plugins[e];return t[1]=t[1]||0,t[2]=t[2]||0,n[0]>t[0]||n[0]===t[0]&&n[1]>t[1]||n[0]===t[0]&&n[1]===t[1]&&n[2]>=t[2]},addPlugin:function(e,t,n,o,i){p.plugins[e]=p.detectPlugin(t,n,o,i)},detectPlugin:function(e,t,n,o){var a=[0,0,0],s=void 0,l=void 0;if(null!==c.NAV.plugins&&void 0!==c.NAV.plugins&&"object"===i(c.NAV.plugins[e])){if((s=c.NAV.plugins[e].description)&&(void 0===c.NAV.mimeTypes||!c.NAV.mimeTypes[t]||c.NAV.mimeTypes[t].enabledPlugin))for(var d=0,u=(a=s.replace(e,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".")).length;d<u;d++)a[d]=parseInt(a[d].match(/\d+/),10)}else if(void 0!==r.default.ActiveXObject)try{(l=new ActiveXObject(n))&&(a=o(l))}catch(e){}return a}};p.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(e){var t=[],n=e.GetVariable("$version");return n&&(n=n.split(" ")[1].split(","),t=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]),t});var m={create:function(e,t,n){var o={},i=!1;o.options=t,o.id=e.id+"_"+o.options.prefix,o.mediaElement=e,o.flashState={},o.flashApi=null,o.flashApiStack=[];for(var p=s.default.html5media.properties,m=0,h=p.length;m<h;m++)!function(e){o.flashState[e]=null;var t=""+e.substring(0,1).toUpperCase()+e.substring(1);o["get"+t]=function(){if(null!==o.flashApi){if("function"==typeof o.flashApi["get_"+e]){var t=o.flashApi["get_"+e]();return"buffered"===e?{start:function(){return 0},end:function(){return t},length:1}:t}return null}return null},o["set"+t]=function(t){if("src"===e&&(t=(0,f.absolutizeUrl)(t)),null!==o.flashApi&&void 0!==o.flashApi["set_"+e])try{o.flashApi["set_"+e](t)}catch(e){}else o.flashApiStack.push({type:"set",propName:e,value:t})}}(p[m]);var v=s.default.html5media.methods;v.push("stop");for(var g=0,y=v.length;g<y;g++)!function(e){o[e]=function(){if(i)if(null!==o.flashApi){if(o.flashApi["fire_"+e])try{o.flashApi["fire_"+e]()}catch(e){}}else o.flashApiStack.push({type:"call",methodName:e})}}(v[g]);for(var E=["rendererready"],b=0,S=E.length;b<S;b++){var x=(0,u.createEvent)(E[b],o);e.dispatchEvent(x)}r.default["__ready__"+o.id]=function(){if(o.flashReady=!0,o.flashApi=a.default.getElementById("__"+o.id),o.flashApiStack.length)for(var e=0,t=o.flashApiStack.length;e<t;e++){var n=o.flashApiStack[e];if("set"===n.type){var i=n.propName,r=""+i.substring(0,1).toUpperCase()+i.substring(1);o["set"+r](n.value)}else"call"===n.type&&o[n.methodName]()}},r.default["__event__"+o.id]=function(e,t){var n=(0,u.createEvent)(e,o);if(t)try{n.data=JSON.parse(t),n.details.data=JSON.parse(t)}catch(e){n.message=t}o.mediaElement.dispatchEvent(n)},o.flashWrapper=a.default.createElement("div"),-1===["always","sameDomain"].indexOf(o.options.shimScriptAccess)&&(o.options.shimScriptAccess="sameDomain");var w=e.originalNode.autoplay,P=["uid="+o.id,"autoplay="+w,"allowScriptAccess="+o.options.shimScriptAccess,"preload="+(e.originalNode.getAttribute("preload")||"")],T=null!==e.originalNode&&"video"===e.originalNode.tagName.toLowerCase(),C=T?e.originalNode.height:1,k=T?e.originalNode.width:1;e.originalNode.getAttribute("src")&&P.push("src="+e.originalNode.getAttribute("src")),!0===o.options.enablePseudoStreaming&&(P.push("pseudostreamstart="+o.options.pseudoStreamingStartQueryParam),P.push("pseudostreamtype="+o.options.pseudoStreamingType)),o.options.streamDelimiter&&P.push("streamdelimiter="+encodeURIComponent(o.options.streamDelimiter)),o.options.proxyType&&P.push("proxytype="+o.options.proxyType),e.appendChild(o.flashWrapper),e.originalNode.style.display="none";var _=[];if(c.IS_IE||c.IS_EDGE){var N=a.default.createElement("div");o.flashWrapper.appendChild(N),_=c.IS_EDGE?['type="application/x-shockwave-flash"','data="'+o.options.pluginPath+o.options.filename+'"','id="__'+o.id+'"','width="'+k+'"','height="'+C+"'\""]:['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"','codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"','id="__'+o.id+'"','width="'+k+'"','height="'+C+'"'],T||_.push('style="clip: rect(0 0 0 0); position: absolute;"'),N.outerHTML="<object "+_.join(" ")+'><param name="movie" value="'+o.options.pluginPath+o.options.filename+"?x="+new Date+'" /><param name="flashvars" value="'+P.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+o.options.shimScriptAccess+'" /><param name="allowFullScreen" value="true" /><div>'+l.default.t("mejs.install-flash")+"</div></object>"}else _=['id="__'+o.id+'"','name="__'+o.id+'"','play="true"','loop="false"','quality="high"','bgcolor="#000000"','wmode="transparent"','allowScriptAccess="'+o.options.shimScriptAccess+'"','allowFullScreen="true"','type="application/x-shockwave-flash"','pluginspage="//www.macromedia.com/go/getflashplayer"','src="'+o.options.pluginPath+o.options.filename+'"','flashvars="'+P.join("&")+'"'],T?(_.push('width="'+k+'"'),_.push('height="'+C+'"')):_.push('style="position: fixed; left: -9999em; top: -9999em;"'),o.flashWrapper.innerHTML="<embed "+_.join(" ")+">";if(o.flashNode=o.flashWrapper.lastChild,o.hide=function(){i=!1,T&&(o.flashNode.style.display="none")},o.show=function(){i=!0,T&&(o.flashNode.style.display="")},o.setSize=function(e,t){o.flashNode.style.width=e+"px",o.flashNode.style.height=t+"px",null!==o.flashApi&&"function"==typeof o.flashApi.fire_setSize&&o.flashApi.fire_setSize(e,t)},o.destroy=function(){o.flashNode.remove()},n&&n.length>0)for(var A=0,L=n.length;A<L;A++)if(d.renderer.renderers[t.prefix].canPlayType(n[A].type)){o.setSrc(n[A].src);break}return o}};if(p.hasPluginVersion("flash",[10,0,0])){f.typeChecks.push(function(e){return(e=e.toLowerCase()).startsWith("rtmp")?~e.indexOf(".mp3")?"audio/rtmp":"video/rtmp":/\.og(a|g)/i.test(e)?"audio/ogg":~e.indexOf(".m3u8")?"application/x-mpegURL":~e.indexOf(".mpd")?"application/dash+xml":~e.indexOf(".flv")?"video/flv":null});var h={name:"flash_video",options:{prefix:"flash_video",filename:"mediaelement-flash-video.swf",enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",pseudoStreamingType:"byte",proxyType:"",streamDelimiter:""},canPlayType:function(e){return~["video/mp4","video/rtmp","audio/rtmp","rtmp/mp4","audio/mp4","video/flv","video/x-flv"].indexOf(e.toLowerCase())},create:m.create};d.renderer.add(h);var v={name:"flash_hls",options:{prefix:"flash_hls",filename:"mediaelement-flash-video-hls.swf"},canPlayType:function(e){return~["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())},create:m.create};d.renderer.add(v);var g={name:"flash_dash",options:{prefix:"flash_dash",filename:"mediaelement-flash-video-mdash.swf"},canPlayType:function(e){return~["application/dash+xml"].indexOf(e.toLowerCase())},create:m.create};d.renderer.add(g);var y={name:"flash_audio",options:{prefix:"flash_audio",filename:"mediaelement-flash-audio.swf"},canPlayType:function(e){return~["audio/mp3"].indexOf(e.toLowerCase())},create:m.create};d.renderer.add(y);var E={name:"flash_audio_ogg",options:{prefix:"flash_audio_ogg",filename:"mediaelement-flash-audio-ogg.swf"},canPlayType:function(e){return~["audio/ogg","audio/oga","audio/ogv"].indexOf(e.toLowerCase())},create:m.create};d.renderer.add(E)}},{2:2,25:25,27:27,28:28,3:3,5:5,7:7,8:8}],21:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(e(3)),a=o(e(7)),s=e(8),l=e(27),d=e(25),u=e(28),c=e(26),f={promise:null,load:function(e){return"undefined"!=typeof flvjs?f.promise=new Promise(function(e){e()}).then(function(){f._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js",f.promise=f.promise||(0,c.loadScript)(e.options.path),f.promise.then(function(){f._createPlayer(e)})),f.promise},_createPlayer:function(e){flvjs.LoggingControl.enableDebug=e.options.debug,flvjs.LoggingControl.enableVerbose=e.options.debug;var t=flvjs.createPlayer(e.options,e.configs);return r.default["__ready__"+e.id](t),t}},p={name:"native_flv",options:{prefix:"native_flv",flv:{path:"https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js",cors:!0,debug:!1}},canPlayType:function(e){return d.HAS_MSE&&["video/x-flv","video/flv"].indexOf(e.toLowerCase())>-1},create:function(e,t,n){var o=e.originalNode,d=e.id+"_"+t.prefix,u=null,c=null;u=o.cloneNode(!0),t=Object.assign(t,e.options);for(var p=a.default.html5media.properties,m=a.default.html5media.events.concat(["click","mouseover","mouseout"]),h=function(t){if("error"!==t.type){var n=(0,l.createEvent)(t.type,e);e.dispatchEvent(n)}},v=0,g=p.length;v<g;v++)!function(e){var n=""+e.substring(0,1).toUpperCase()+e.substring(1);u["get"+n]=function(){return null!==c?u[e]:null},u["set"+n]=function(n){if(-1===a.default.html5media.readOnlyProperties.indexOf(e))if("src"===e){if(u[e]="object"===(void 0===n?"undefined":i(n))&&n.src?n.src:n,null!==c){var o={};o.type="flv",o.url=n,o.cors=t.flv.cors,o.debug=t.flv.debug,o.path=t.flv.path;var r=t.flv.configs;c.destroy();for(var s=0,l=m.length;s<l;s++)u.removeEventListener(m[s],h);(c=f._createPlayer({options:o,configs:r,id:d})).attachMediaElement(u),c.load()}}else u[e]=n}}(p[v]);if(r.default["__ready__"+d]=function(t){e.flvPlayer=c=t;for(var n=flvjs.Events,o=0,i=m.length;o<i;o++)!function(e){"loadedmetadata"===e&&(c.unload(),c.detachMediaElement(),c.attachMediaElement(u),c.load()),u.addEventListener(e,h)}(m[o]);var r=function(t,n){if("error"===t){var o=n[0]+": "+n[1]+" "+n[2].msg;e.generateError(o,u.src)}else{var i=(0,l.createEvent)(t,e);i.data=n,e.dispatchEvent(i)}};for(var a in n)!function(e){n.hasOwnProperty(e)&&c.on(n[e],function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return r(n[e],o)})}(a)},n&&n.length>0)for(var y=0,E=n.length;y<E;y++)if(s.renderer.renderers[t.prefix].canPlayType(n[y].type)){u.setAttribute("src",n[y].src);break}u.setAttribute("id",d),o.parentNode.insertBefore(u,o),o.autoplay=!1,o.style.display="none";var b={};b.type="flv",b.url=u.src,b.cors=t.flv.cors,b.debug=t.flv.debug,b.path=t.flv.path;var S=t.flv.configs;u.setSize=function(e,t){return u.style.width=e+"px",u.style.height=t+"px",u},u.hide=function(){return null!==c&&c.pause(),u.style.display="none",u},u.show=function(){return u.style.display="",u},u.destroy=function(){null!==c&&c.destroy()};var x=(0,l.createEvent)("rendererready",u);return e.dispatchEvent(x),e.promises.push(f.load({options:b,configs:S,id:d})),u}};u.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".flv")?"video/flv":null}),s.renderer.add(p)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],22:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(e(3)),a=o(e(7)),s=e(8),l=e(27),d=e(25),u=e(28),c=e(26),f={promise:null,load:function(e){return"undefined"!=typeof Hls?f.promise=new Promise(function(e){e()}).then(function(){f._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js",f.promise=f.promise||(0,c.loadScript)(e.options.path),f.promise.then(function(){f._createPlayer(e)})),f.promise},_createPlayer:function(e){var t=new Hls(e.options);return r.default["__ready__"+e.id](t),t}},p={name:"native_hls",options:{prefix:"native_hls",hls:{path:"https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js",autoStartLoad:!1,debug:!1}},canPlayType:function(e){return d.HAS_MSE&&["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())>-1},create:function(e,t,n){var o=e.originalNode,d=e.id+"_"+t.prefix,u=o.getAttribute("preload"),c=o.autoplay,p=null,m=null,h=0,v=n.length;m=o.cloneNode(!0),(t=Object.assign(t,e.options)).hls.autoStartLoad=u&&"none"!==u||c;for(var g=a.default.html5media.properties,y=a.default.html5media.events.concat(["click","mouseover","mouseout"]),E=function(t){if("error"!==t.type){var n=(0,l.createEvent)(t.type,e);e.dispatchEvent(n)}},b=0,S=g.length;b<S;b++)!function(e){var n=""+e.substring(0,1).toUpperCase()+e.substring(1);m["get"+n]=function(){return null!==p?m[e]:null},m["set"+n]=function(n){if(-1===a.default.html5media.readOnlyProperties.indexOf(e))if("src"===e){if(m[e]="object"===(void 0===n?"undefined":i(n))&&n.src?n.src:n,null!==p){p.destroy();for(var o=0,r=y.length;o<r;o++)m.removeEventListener(y[o],E);(p=f._createPlayer({options:t.hls,id:d})).loadSource(n),p.attachMedia(m)}}else m[e]=n}}(g[b]);if(r.default["__ready__"+d]=function(t){e.hlsPlayer=p=t;for(var o=Hls.Events,i=0,r=y.length;i<r;i++)!function(t){if("loadedmetadata"===t){var n=e.originalNode.src;p.detachMedia(),p.loadSource(n),p.attachMedia(m)}m.addEventListener(t,E)}(y[i]);var a=void 0,s=void 0,d=function(t,o){if("hlsError"===t){if(console.warn(o),(o=o[1]).fatal)switch(o.type){case"mediaError":var i=(new Date).getTime();if(!a||i-a>3e3)a=(new Date).getTime(),p.recoverMediaError();else if(!s||i-s>3e3)s=(new Date).getTime(),console.warn("Attempting to swap Audio Codec and recover from media error"),p.swapAudioCodec(),p.recoverMediaError();else{var r="Cannot recover, last media error recovery failed";e.generateError(r,m.src),console.error(r)}break;case"networkError":if("manifestLoadError"===o.details)if(h<v&&void 0!==n[h+1])m.setSrc(n[h++].src),m.load(),m.play();else{e.generateError("Network error",n),console.error("Network error")}else{e.generateError("Network error",n),console.error("Network error")}break;default:p.destroy()}}else{var d=(0,l.createEvent)(t,e);d.data=o,e.dispatchEvent(d)}};for(var u in o)!function(e){o.hasOwnProperty(e)&&p.on(o[e],function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return d(o[e],n)})}(u)},v>0)for(;h<v;h++)if(s.renderer.renderers[t.prefix].canPlayType(n[h].type)){m.setAttribute("src",n[h].src);break}"auto"===u||c||(m.addEventListener("play",function(){null!==p&&p.startLoad()}),m.addEventListener("pause",function(){null!==p&&p.stopLoad()})),m.setAttribute("id",d),o.parentNode.insertBefore(m,o),o.autoplay=!1,o.style.display="none",m.setSize=function(e,t){return m.style.width=e+"px",m.style.height=t+"px",m},m.hide=function(){return m.pause(),m.style.display="none",m},m.show=function(){return m.style.display="",m},m.destroy=function(){null!==p&&(p.stopLoad(),p.destroy())};var x=(0,l.createEvent)("rendererready",m);return e.dispatchEvent(x),e.promises.push(f.load({options:t.hls,id:d})),m}};u.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".m3u8")?"application/x-mpegURL":null}),s.renderer.add(p)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],23:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(3)),r=o(e(2)),a=o(e(7)),s=e(8),l=e(27),d=e(25),u={name:"html5",options:{prefix:"html5"},canPlayType:function(e){var t=r.default.createElement("video");return d.IS_ANDROID&&/\/mp(3|4)$/i.test(e)||~["application/x-mpegurl","vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())&&d.SUPPORTS_NATIVE_HLS?"yes":t.canPlayType?t.canPlayType(e.toLowerCase()).replace(/no/,""):""},create:function(e,t,n){var o=e.id+"_"+t.prefix,i=!1,d=null;void 0===e.originalNode||null===e.originalNode?(d=r.default.createElement("audio"),e.appendChild(d)):d=e.originalNode,d.setAttribute("id",o);for(var u=a.default.html5media.properties,c=0,f=u.length;c<f;c++)!function(e){var t=""+e.substring(0,1).toUpperCase()+e.substring(1);d["get"+t]=function(){return d[e]},d["set"+t]=function(t){-1===a.default.html5media.readOnlyProperties.indexOf(e)&&(d[e]=t)}}(u[c]);for(var p=a.default.html5media.events.concat(["click","mouseover","mouseout"]),m=0,h=p.length;m<h;m++)!function(t){d.addEventListener(t,function(t){if(i){var n=(0,l.createEvent)(t.type,t.target);e.dispatchEvent(n)}})}(p[m]);d.setSize=function(e,t){return d.style.width=e+"px",d.style.height=t+"px",d},d.hide=function(){return i=!1,d.style.display="none",d},d.show=function(){return i=!0,d.style.display="",d};var v=0,g=n.length;if(g>0)for(;v<g;v++)if(s.renderer.renderers[t.prefix].canPlayType(n[v].type)){d.setAttribute("src",n[v].src);break}d.addEventListener("error",function(t){4===t.target.error.code&&i&&(v<g&&void 0!==n[v+1]?(d.src=n[v++].src,d.load(),d.play()):e.generateError("Media error: Format(s) not supported or source(s) not found",n))});var y=(0,l.createEvent)("rendererready",d);return e.dispatchEvent(y),d}};i.default.HtmlMediaElement=a.default.HtmlMediaElement=u,s.renderer.add(u)},{2:2,25:25,27:27,3:3,7:7,8:8}],24:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(3)),r=o(e(2)),a=o(e(7)),s=e(8),l=e(27),d=e(28),u=e(26),c={isIframeStarted:!1,isIframeLoaded:!1,iframeQueue:[],enqueueIframe:function(e){c.isLoaded="undefined"!=typeof YT&&YT.loaded,c.isLoaded?c.createIframe(e):(c.loadIframeApi(),c.iframeQueue.push(e))},loadIframeApi:function(){c.isIframeStarted||((0,u.loadScript)("https://www.youtube.com/player_api"),c.isIframeStarted=!0)},iFrameReady:function(){for(c.isLoaded=!0,c.isIframeLoaded=!0;c.iframeQueue.length>0;){var e=c.iframeQueue.pop();c.createIframe(e)}},createIframe:function(e){return new YT.Player(e.containerId,e)},getYouTubeId:function(e){var t="";return e.indexOf("?")>0?""===(t=c.getYouTubeIdFromParam(e))&&(t=c.getYouTubeIdFromUrl(e)):t=c.getYouTubeIdFromUrl(e),(t=t.substring(t.lastIndexOf("/")+1).split("?"))[0]},getYouTubeIdFromParam:function(e){if(void 0===e||null===e||!e.trim().length)return null;for(var t=e.split("?")[1].split("&"),n="",o=0,i=t.length;o<i;o++){var r=t[o].split("=");if("v"===r[0]){n=r[1];break}}return n},getYouTubeIdFromUrl:function(e){return void 0!==e&&null!==e&&e.trim().length?(e=e.split("?")[0]).substring(e.lastIndexOf("/")+1):null},getYouTubeNoCookieUrl:function(e){if(void 0===e||null===e||!e.trim().length||-1===e.indexOf("//www.youtube"))return e;var t=e.split("/");return t[2]=t[2].replace(".com","-nocookie.com"),t.join("/")}},f={name:"youtube_iframe",options:{prefix:"youtube_iframe",youtube:{autoplay:0,controls:0,disablekb:1,end:0,loop:0,modestbranding:0,playsinline:0,rel:0,showinfo:0,start:0,iv_load_policy:3,nocookie:!1,imageQuality:null}},canPlayType:function(e){return~["video/youtube","video/x-youtube"].indexOf(e.toLowerCase())},create:function(e,t,n){var o={},s=[],d=null,u=!0,f=!1,p=null,m=1;o.options=t,o.id=e.id+"_"+t.prefix,o.mediaElement=e;for(var h=a.default.html5media.properties,v=0,g=h.length;v<g;v++)!function(t){var n=""+t.substring(0,1).toUpperCase()+t.substring(1);o["get"+n]=function(){if(null!==d){switch(t){case"currentTime":return d.getCurrentTime();case"duration":return d.getDuration();case"volume":return m=d.getVolume()/100;case"paused":return u;case"ended":return f;case"muted":return d.isMuted();case"buffered":var e=d.getVideoLoadedFraction(),n=d.getDuration();return{start:function(){return 0},end:function(){return e*n},length:1};case"src":return d.getVideoUrl();case"readyState":return 4}return null}return null},o["set"+n]=function(n){if(null!==d)switch(t){case"src":var i="string"==typeof n?n:n[0].src,r=c.getYouTubeId(i);e.originalNode.autoplay?d.loadVideoById(r):d.cueVideoById(r);break;case"currentTime":d.seekTo(n);break;case"muted":n?d.mute():d.unMute(),setTimeout(function(){var t=(0,l.createEvent)("volumechange",o);e.dispatchEvent(t)},50);break;case"volume":m=n,d.setVolume(100*n),setTimeout(function(){var t=(0,l.createEvent)("volumechange",o);e.dispatchEvent(t)},50);break;case"readyState":var a=(0,l.createEvent)("canplay",o);e.dispatchEvent(a)}else s.push({type:"set",propName:t,value:n})}}(h[v]);for(var y=a.default.html5media.methods,E=0,b=y.length;E<b;E++)!function(e){o[e]=function(){if(null!==d)switch(e){case"play":return u=!1,d.playVideo();case"pause":return u=!0,d.pauseVideo();case"load":return null}else s.push({type:"call",methodName:e})}}(y[E]);var S=r.default.createElement("div");S.id=o.id,o.options.youtube.nocookie&&(e.originalNode.src=c.getYouTubeNoCookieUrl(n[0].src)),e.originalNode.parentNode.insertBefore(S,e.originalNode),e.originalNode.style.display="none";var x="audio"===e.originalNode.tagName.toLowerCase(),w=x?"1":e.originalNode.height,P=x?"1":e.originalNode.width,T=c.getYouTubeId(n[0].src),C={id:o.id,containerId:S.id,videoId:T,height:w,width:P,playerVars:Object.assign({controls:0,rel:0,disablekb:1,showinfo:0,modestbranding:0,html5:1,iv_load_policy:3},o.options.youtube),origin:i.default.location.host,events:{onReady:function(t){if(e.youTubeApi=d=t.target,e.youTubeState={paused:!0,ended:!1},s.length)for(var n=0,i=s.length;n<i;n++){var r=s[n];if("set"===r.type){var a=r.propName,u=""+a.substring(0,1).toUpperCase()+a.substring(1);o["set"+u](r.value)}else"call"===r.type&&o[r.methodName]()}p=d.getIframe(),e.originalNode.muted&&d.mute();for(var c=["mouseover","mouseout"],f=0,m=c.length;f<m;f++)p.addEventListener(c[f],function(t){var n=(0,l.createEvent)(t.type,o);e.dispatchEvent(n)},!1);for(var h=["rendererready","loadedmetadata","loadeddata","canplay"],v=0,g=h.length;v<g;v++){var y=(0,l.createEvent)(h[v],o);e.dispatchEvent(y)}},onStateChange:function(t){var n=[];switch(t.data){case-1:n=["loadedmetadata"],u=!0,f=!1;break;case 0:n=["ended"],u=!1,f=!o.options.youtube.loop,o.options.youtube.loop||o.stopInterval();break;case 1:n=["play","playing"],u=!1,f=!1,o.startInterval();break;case 2:n=["pause"],u=!0,f=!1,o.stopInterval();break;case 3:n=["progress"],f=!1;break;case 5:n=["loadeddata","loadedmetadata","canplay"],u=!0,f=!1}for(var i=0,r=n.length;i<r;i++){var a=(0,l.createEvent)(n[i],o);e.dispatchEvent(a)}},onError:function(t){var n=(0,l.createEvent)("error",o);n.data=t.data,e.dispatchEvent(n)}}};return(x||e.originalNode.hasAttribute("playsinline"))&&(C.playerVars.playsinline=1),e.originalNode.controls&&(C.playerVars.controls=1),e.originalNode.autoplay&&(C.playerVars.autoplay=1),e.originalNode.loop&&(C.playerVars.loop=1),c.enqueueIframe(C),o.onEvent=function(t,n,o){null!==o&&void 0!==o&&(e.youTubeState=o)},o.setSize=function(e,t){null!==d&&d.setSize(e,t)},o.hide=function(){o.stopInterval(),o.pause(),p&&(p.style.display="none")},o.show=function(){p&&(p.style.display="")},o.destroy=function(){d.destroy()},o.interval=null,o.startInterval=function(){o.interval=setInterval(function(){var t=(0,l.createEvent)("timeupdate",o);e.dispatchEvent(t)},250)},o.stopInterval=function(){o.interval&&clearInterval(o.interval)},o.getPosterUrl=function(){var n=t.youtube.imageQuality,o=["default","hqdefault","mqdefault","sddefault","maxresdefault"],i=c.getYouTubeId(e.originalNode.src);return n&&o.indexOf(n)>-1&&i?"https://img.youtube.com/vi/"+i+"/"+n+".jpg":""},o}};i.default.onYouTubePlayerAPIReady=function(){c.iFrameReady()},d.typeChecks.push(function(e){return/\/\/(www\.youtube|youtu\.?be)/i.test(e)?"video/x-youtube":null}),s.renderer.add(f)},{2:2,26:26,27:27,28:28,3:3,7:7,8:8}],25:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.cancelFullScreen=n.requestFullScreen=n.isFullScreen=n.FULLSCREEN_EVENT_NAME=n.HAS_NATIVE_FULLSCREEN_ENABLED=n.HAS_TRUE_NATIVE_FULLSCREEN=n.HAS_IOS_FULLSCREEN=n.HAS_MS_NATIVE_FULLSCREEN=n.HAS_MOZ_NATIVE_FULLSCREEN=n.HAS_WEBKIT_NATIVE_FULLSCREEN=n.HAS_NATIVE_FULLSCREEN=n.SUPPORTS_NATIVE_HLS=n.SUPPORT_PASSIVE_EVENT=n.SUPPORT_POINTER_EVENTS=n.HAS_MSE=n.IS_STOCK_ANDROID=n.IS_SAFARI=n.IS_FIREFOX=n.IS_CHROME=n.IS_EDGE=n.IS_IE=n.IS_ANDROID=n.IS_IOS=n.IS_IPOD=n.IS_IPHONE=n.IS_IPAD=n.UA=n.NAV=void 0;for(var i=o(e(3)),r=o(e(2)),a=o(e(7)),s=n.NAV=i.default.navigator,l=n.UA=s.userAgent.toLowerCase(),d=n.IS_IPAD=/ipad/i.test(l)&&!i.default.MSStream,u=n.IS_IPHONE=/iphone/i.test(l)&&!i.default.MSStream,c=n.IS_IPOD=/ipod/i.test(l)&&!i.default.MSStream,f=(n.IS_IOS=/ipad|iphone|ipod/i.test(l)&&!i.default.MSStream,n.IS_ANDROID=/android/i.test(l)),p=n.IS_IE=/(trident|microsoft)/i.test(s.appName),m=(n.IS_EDGE="msLaunchUri"in s&&!("documentMode"in r.default)),h=n.IS_CHROME=/chrome/i.test(l),v=n.IS_FIREFOX=/firefox/i.test(l),g=n.IS_SAFARI=/safari/i.test(l)&&!h,y=n.IS_STOCK_ANDROID=/^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l),E=(n.HAS_MSE="MediaSource"in i.default),b=n.SUPPORT_POINTER_EVENTS=function(){var e=r.default.createElement("x"),t=r.default.documentElement,n=i.default.getComputedStyle;if(!("pointerEvents"in e.style))return!1;e.style.pointerEvents="auto",e.style.pointerEvents="x",t.appendChild(e);var o=n&&"auto"===n(e,"").pointerEvents;return e.remove(),!!o}(),S=n.SUPPORT_PASSIVE_EVENT=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});i.default.addEventListener("test",null,t)}catch(e){}return e}(),x=["source","track","audio","video"],w=void 0,P=0,T=x.length;P<T;P++)w=r.default.createElement(x[P]);var C=n.SUPPORTS_NATIVE_HLS=g||f&&(h||y)||p&&/edge/i.test(l),k=void 0!==w.webkitEnterFullscreen,_=void 0!==w.requestFullscreen;k&&/mac os x 10_5/i.test(l)&&(_=!1,k=!1);var N=void 0!==w.webkitRequestFullScreen,A=void 0!==w.mozRequestFullScreen,L=void 0!==w.msRequestFullscreen,F=N||A||L,j=F,I="",M=void 0,O=void 0,D=void 0;A?j=r.default.mozFullScreenEnabled:L&&(j=r.default.msFullscreenEnabled),h&&(k=!1),F&&(N?I="webkitfullscreenchange":A?I="mozfullscreenchange":L&&(I="MSFullscreenChange"),n.isFullScreen=M=function(){return A?r.default.mozFullScreen:N?r.default.webkitIsFullScreen:L?null!==r.default.msFullscreenElement:void 0},n.requestFullScreen=O=function(e){N?e.webkitRequestFullScreen():A?e.mozRequestFullScreen():L&&e.msRequestFullscreen()},n.cancelFullScreen=D=function(){N?r.default.webkitCancelFullScreen():A?r.default.mozCancelFullScreen():L&&r.default.msExitFullscreen()});var R=n.HAS_NATIVE_FULLSCREEN=_,V=n.HAS_WEBKIT_NATIVE_FULLSCREEN=N,H=n.HAS_MOZ_NATIVE_FULLSCREEN=A,U=n.HAS_MS_NATIVE_FULLSCREEN=L,q=n.HAS_IOS_FULLSCREEN=k,B=n.HAS_TRUE_NATIVE_FULLSCREEN=F,z=n.HAS_NATIVE_FULLSCREEN_ENABLED=j,W=n.FULLSCREEN_EVENT_NAME=I;n.isFullScreen=M,n.requestFullScreen=O,n.cancelFullScreen=D,a.default.Features=a.default.Features||{},a.default.Features.isiPad=d,a.default.Features.isiPod=c,a.default.Features.isiPhone=u,a.default.Features.isiOS=a.default.Features.isiPhone||a.default.Features.isiPad,a.default.Features.isAndroid=f,a.default.Features.isIE=p,a.default.Features.isEdge=m,a.default.Features.isChrome=h,a.default.Features.isFirefox=v,a.default.Features.isSafari=g,a.default.Features.isStockAndroid=y,a.default.Features.hasMSE=E,a.default.Features.supportsNativeHLS=C,a.default.Features.supportsPointerEvents=b,a.default.Features.supportsPassiveEvent=S,a.default.Features.hasiOSFullScreen=q,a.default.Features.hasNativeFullscreen=R,a.default.Features.hasWebkitNativeFullScreen=V,a.default.Features.hasMozNativeFullScreen=H,a.default.Features.hasMsNativeFullScreen=U,a.default.Features.hasTrueNativeFullScreen=B,a.default.Features.nativeFullScreenEnabled=z,a.default.Features.fullScreenEventName=W,a.default.Features.isFullScreen=M,a.default.Features.requestFullScreen=O,a.default.Features.cancelFullScreen=D},{2:2,3:3,7:7}],26:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return new Promise(function(t,n){var o=p.default.createElement("script");o.src=e,o.async=!0,o.onload=function(){o.remove(),t()},o.onerror=function(){o.remove(),n()},p.default.head.appendChild(o)})}function r(e){var t=e.getBoundingClientRect(),n=f.default.pageXOffset||p.default.documentElement.scrollLeft,o=f.default.pageYOffset||p.default.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}function a(e,t){y(e,t)?b(e,t):E(e,t)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,n=arguments[2];e.style.opacity||(e.style.opacity=1);var o=null;f.default.requestAnimationFrame(function i(r){var a=r-(o=o||r),s=parseFloat(1-a/t,2);e.style.opacity=s<0?0:s,a>t?n&&"function"==typeof n&&n():f.default.requestAnimationFrame(i)})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,n=arguments[2];e.style.opacity||(e.style.opacity=0);var o=null;f.default.requestAnimationFrame(function i(r){var a=r-(o=o||r),s=parseFloat(a/t,2);e.style.opacity=s>1?1:s,a>t?n&&"function"==typeof n&&n():f.default.requestAnimationFrame(i)})}function d(e,t){var n=[];e=e.parentNode.firstChild;do{t&&!t(e)||n.push(e)}while(e=e.nextSibling);return n}function u(e){return void 0!==e.getClientRects&&"function"===e.getClientRects?!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!(!e.offsetWidth&&!e.offsetHeight)}function c(e,t,n,o){var i=f.default.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),r="application/x-www-form-urlencoded; charset=UTF-8",a=!1,s="*/".concat("*");switch(t){case"text":r="text/plain";break;case"json":r="application/json, text/javascript";break;case"html":r="text/html";break;case"xml":r="application/xml, text/xml"}"application/x-www-form-urlencoded"!==r&&(s=r+", */*; q=0.01"),i&&(i.open("GET",e,!0),i.setRequestHeader("Accept",s),i.onreadystatechange=function(){if(!a&&4===i.readyState)if(200===i.status){a=!0;var e=void 0;switch(t){case"json":e=JSON.parse(i.responseText);break;case"xml":e=i.responseXML;break;default:e=i.responseText}n(e)}else"function"==typeof o&&o(i.status)},i.send())}Object.defineProperty(n,"__esModule",{value:!0}),n.removeClass=n.addClass=n.hasClass=void 0,n.loadScript=i,n.offset=r,n.toggleClass=a,n.fadeOut=s,n.fadeIn=l,n.siblings=d,n.visible=u,n.ajax=c;var f=o(e(3)),p=o(e(2)),m=o(e(7)),h=void 0,v=void 0,g=void 0;"classList"in p.default.documentElement?(h=function(e,t){return void 0!==e.classList&&e.classList.contains(t)},v=function(e,t){return e.classList.add(t)},g=function(e,t){return e.classList.remove(t)}):(h=function(e,t){return new RegExp("\\b"+t+"\\b").test(e.className)},v=function(e,t){y(e,t)||(e.className+=" "+t)},g=function(e,t){e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")});var y=n.hasClass=h,E=n.addClass=v,b=n.removeClass=g;m.default.Utils=m.default.Utils||{},m.default.Utils.offset=r,m.default.Utils.hasClass=y,m.default.Utils.addClass=E,m.default.Utils.removeClass=b,m.default.Utils.toggleClass=a,m.default.Utils.fadeIn=l,m.default.Utils.fadeOut=s,m.default.Utils.siblings=d,m.default.Utils.visible=u,m.default.Utils.ajax=c,m.default.Utils.loadScript=i},{2:2,3:3,7:7}],27:[function(e,t,n){"use strict";function o(e){if("string"!=typeof e)throw new Error("Argument passed must be a string");var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return e.replace(/[&<>"]/g,function(e){return t[e]})}function i(e,t){var n=this,o=arguments,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof e)throw new Error("First argument must be a function");if("number"!=typeof t)throw new Error("Second argument must be a numeric value");var r=void 0;return function(){var a=n,s=o,l=i&&!r;clearTimeout(r),r=setTimeout(function(){r=null,i||e.apply(a,s)},t),l&&e.apply(a,s)}}function r(e){return Object.getOwnPropertyNames(e).length<=0}function a(e,t){var n=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,o={d:[],w:[]};return(e||"").split(" ").forEach(function(e){var i=e+(t?"."+t:"");i.startsWith(".")?(o.d.push(i),o.w.push(i)):o[n.test(e)?"w":"d"].push(i)}),o.d=o.d.join(" "),o.w=o.w.join(" "),o}function s(e,t){if("string"!=typeof e)throw new Error("Event name must be a string");var n=e.match(/([a-z]+\.([a-z]+))/i),o={target:t};return null!==n&&(e=n[1],o.namespace=n[2]),new window.CustomEvent(e,{detail:o})}function l(e,t){return!!(e&&t&&2&e.compareDocumentPosition(t))}function d(e){return"string"==typeof e}Object.defineProperty(n,"__esModule",{value:!0}),n.escapeHTML=o,n.debounce=i,n.isObjectEmpty=r,n.splitEvents=a,n.createEvent=s,n.isNodeAfter=l,n.isString=d;var u=function(e){return e&&e.__esModule?e:{default:e}}(e(7));u.default.Utils=u.default.Utils||{},u.default.Utils.escapeHTML=o,u.default.Utils.debounce=i,u.default.Utils.isObjectEmpty=r,u.default.Utils.splitEvents=a,u.default.Utils.createEvent=s,u.default.Utils.isNodeAfter=l,u.default.Utils.isString=d},{7:7}],28:[function(e,t,n){"use strict";function o(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");var t=document.createElement("div");return t.innerHTML='<a href="'+(0,u.escapeHTML)(e)+'">x</a>',t.firstChild.href}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e&&!t?a(e):t}function r(e){if("string"!=typeof e)throw new Error("`type` argument must be a string");return e&&e.indexOf(";")>-1?e.substr(0,e.indexOf(";")):e}function a(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");for(var t=0,n=c.length;t<n;t++){var o=c[t](e);if(o)return o}var i=l(s(e)),r="video/mp4";return i&&(~["mp4","m4v","ogg","ogv","webm","flv","mpeg","mov"].indexOf(i)?r="video/"+i:~["mp3","oga","wav","mid","midi"].indexOf(i)&&(r="audio/"+i)),r}function s(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");var t=e.split("?")[0].split("\\").pop().split("/").pop();return~t.indexOf(".")?t.substring(t.lastIndexOf(".")+1):""}function l(e){if("string"!=typeof e)throw new Error("`extension` argument must be a string");switch(e){case"mp4":case"m4v":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return e}}Object.defineProperty(n,"__esModule",{value:!0}),n.typeChecks=void 0,n.absolutizeUrl=o,n.formatType=i,n.getMimeFromType=r,n.getTypeFromFile=a,n.getExtension=s,n.normalizeExtension=l;var d=function(e){return e&&e.__esModule?e:{default:e}}(e(7)),u=e(27),c=n.typeChecks=[];d.default.Utils=d.default.Utils||{},d.default.Utils.typeChecks=c,d.default.Utils.absolutizeUrl=o,d.default.Utils.formatType=i,d.default.Utils.getMimeFromType=r,d.default.Utils.getTypeFromFile=a,d.default.Utils.getExtension=s,d.default.Utils.normalizeExtension=l},{27:27,7:7}],29:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e(2)),r=o(e(4));if([Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=i.default.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null===e||void 0===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1,o=arguments.length;n<o;n++){var i=arguments[n];if(null!==i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length-1;--n>=0&&t.item(n)!==this;);return n>-1}),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=(this.document||this.ownerDocument).querySelectorAll(e),n=void 0,o=this;do{for(n=t.length;--n>=0&&t.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o}),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),o=Math.max(0,16-(n-e)),i=window.setTimeout(function(){t(n+o)},o);return e=n+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),/firefox/i.test(navigator.userAgent)){var a=window.getComputedStyle;window.getComputedStyle=function(e,t){var n=a(e,t);return null===n?{getPropertyValue:function(){}}:n}}window.Promise||(window.Promise=r.default),function(e){e&&e.prototype&&null===e.prototype.children&&Object.defineProperty(e.prototype,"children",{get:function(){for(var e=0,t=void 0,n=this.childNodes,o=[];t=n[e++];)1===t.nodeType&&o.push(t);return o}})}(window.Node||window.Element)},{2:2,4:4}],30:[function(e,t,n){"use strict";function o(){return!((arguments.length>0&&void 0!==arguments[0]?arguments[0]:25)%1==0)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"mm:ss";e=!e||"number"!=typeof e||e<0?0:e;var s=Math.round(.066666*i),l=Math.round(i),d=24*Math.round(3600*i),u=Math.round(600*i),c=o(i)?";":":",f=void 0,p=void 0,m=void 0,h=void 0,v=Math.round(e*i);if(o(i)){v<0&&(v=d+v);var g=(v%=d)%u;v+=9*s*Math.floor(v/u),g>s&&(v+=s*Math.floor((g-s)/Math.round(60*l-s)));var y=Math.floor(v/l);f=Math.floor(Math.floor(y/60)/60),p=Math.floor(y/60)%60,m=n?y%60:(v/l%60).toFixed(r)}else f=Math.floor(e/3600)%24,p=Math.floor(e/60)%60,m=n?Math.floor(e%60):(e%60).toFixed(r);f=f<=0?0:f,p=p<=0?0:p,m=m<=0?0:m;for(var E=a.split(":"),b={},S=0,x=E.length;S<x;++S){for(var w="",P=0,T=E[S].length;P<T;P++)w.indexOf(E[S][P])<0&&(w+=E[S][P]);~["f","s","m","h"].indexOf(w)&&(b[w]=E[S].length)}var C=t||f>0?(f<10&&b.h>1?"0"+f:f)+":":"";return C+=(p<10&&b.m>1?"0"+p:p)+":",C+=""+(m<10&&b.s>1?"0"+m:m),n&&(C+=(h=(h=(v%l).toFixed(0))<=0?0:h)<10&&b.f?c+"0"+h:""+c+h),C}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;if("string"!=typeof e)throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":")),!/\d{2}(\:\d{2}){0,3}/i.test(e))throw new TypeError("Time code must have the format `00:00:00`");var n=e.split(":"),i=void 0,r=0,a=0,s=0,l=0,d=0,u=Math.round(.066666*t),c=Math.round(t),f=3600*c,p=60*c;switch(n.length){default:case 1:s=parseInt(n[0],10);break;case 2:a=parseInt(n[0],10),s=parseInt(n[1],10);break;case 3:r=parseInt(n[0],10),a=parseInt(n[1],10),s=parseInt(n[2],10);break;case 4:r=parseInt(n[0],10),a=parseInt(n[1],10),s=parseInt(n[2],10),l=parseInt(n[3],10)}return i=o(t)?f*r+p*a+c*s+l-u*((d=60*r+a)-Math.floor(d/10)):(f*r+p*a+t*s+l)/t,parseFloat(i.toFixed(3))}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;e=!e||"number"!=typeof e||e<0?0:e;for(var o=Math.floor(e/3600)%24,i=Math.floor(e/60)%60,r=Math.floor(e%60),a=[[Math.floor((e%1*n).toFixed(3)),"f"],[r,"s"],[i,"m"],[o,"h"]],s=t.timeFormat,l=s[1]===s[0],d=l?2:1,u=s.length<d?s[d]:":",c=s[0],f=!1,p=0,m=a.length;p<m;p++)if(~s.indexOf(a[p][1]))f=!0;else if(f){for(var h=!1,v=p;v<m;v++)if(a[v][0]>0){h=!0;break}if(!h)break;l||(s=c+s),s=a[p][1]+u+s,l&&(s=a[p][1]+s),c=a[p][1]}t.timeFormat=s}function s(e){if("string"!=typeof e)throw new TypeError("Argument must be a string value");for(var t=~(e=e.replace(",",".")).indexOf(".")?e.split(".")[1].length:0,n=0,o=1,i=0,r=(e=e.split(":").reverse()).length;i<r;i++)o=1,i>0&&(o=Math.pow(60,i)),n+=Number(e[i])*o;return Number(n.toFixed(t))}Object.defineProperty(n,"__esModule",{value:!0}),n.isDropFrame=o,n.secondsToTimeCode=i,n.timeCodeToSeconds=r,n.calculateTimeFormat=a,n.convertSMPTEtoSeconds=s;var l=function(e){return e&&e.__esModule?e:{default:e}}(e(7));l.default.Utils=l.default.Utils||{},l.default.Utils.secondsToTimeCode=i,l.default.Utils.timeCodeToSeconds=r,l.default.Utils.calculateTimeFormat=a,l.default.Utils.convertSMPTEtoSeconds=s},{7:7}]},{},[29,6,5,15,23,20,19,21,22,24,16,18,17,9,10,11,12,13,14]);;
!function(a,b){void 0===mejs.plugins&&(mejs.plugins={},mejs.plugins.silverlight=[],mejs.plugins.silverlight.push({types:[]})),mejs.HtmlMediaElementShim=mejs.HtmlMediaElementShim||{getTypeFromFile:mejs.Utils.getTypeFromFile},void 0===mejs.MediaFeatures&&(mejs.MediaFeatures=mejs.Features),void 0===mejs.Utility&&(mejs.Utility=mejs.Utils);var c=MediaElementPlayer.prototype.init;MediaElementPlayer.prototype.init=function(){this.options.classPrefix="mejs-",this.$media=this.$node=b(this.node),c.call(this)};var d=MediaElementPlayer.prototype._meReady;MediaElementPlayer.prototype._meReady=function(){this.container=b(this.container),this.controls=b(this.controls),this.layers=b(this.layers),d.apply(this,arguments)},MediaElementPlayer.prototype.getElement=function(a){return void 0!==b&&a instanceof b?a[0]:a},MediaElementPlayer.prototype.buildfeatures=function(a,c,d,e){for(var f=["playpause","current","progress","duration","tracks","volume","fullscreen"],g=0,h=this.options.features.length;g<h;g++){var i=this.options.features[g];if(this["build"+i])try{f.indexOf(i)===-1?this["build"+i](a,b(c),b(d),e):this["build"+i](a,c,d,e)}catch(j){console.error("error building "+i,j)}}}}(window,jQuery);;
//fgnass.github.com/spin.js#v1.3

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: o.color, opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));
;
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        // Begin WordPress Additions
        // To use opts.right, you need to have specified a length, width, and radius.
        if ( typeof opts.right !== 'undefined' && typeof opts.length !== 'undefined'
          && typeof opts.width !== 'undefined' && typeof opts.radius !== 'undefined' ) {
          var pad = $this.css( 'padding-left' );
          pad = ( typeof pad === 'undefined' ) ? 0 : parseInt( pad, 10 );
          opts.left = $this.outerWidth() - ( 2 * ( opts.length + opts.width + opts.radius ) ) - pad - opts.right;
          delete opts.right;
        }
        // End WordPress Additions
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));

// Jetpack Presets Overrides:
(function($){
	$.fn.spin.presets.wp = { trail: 60, speed: 1.3 };
	$.fn.spin.presets.small  = $.extend( { lines:  8, length: 2, width: 2, radius: 3 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.medium = $.extend( { lines:  8, length: 4, width: 3, radius: 5 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.large  = $.extend( { lines: 10, length: 6, width: 4, radius: 7 }, $.fn.spin.presets.wp );
	$.fn.spin.presets['small-left']   = $.extend( { left:  5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['small-right']  = $.extend( { right: 5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['medium-left']  = $.extend( { left:  5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['medium-right'] = $.extend( { right: 5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['large-left']   = $.extend( { left:  5 }, $.fn.spin.presets.large );
	$.fn.spin.presets['large-right']  = $.extend( { right: 5 }, $.fn.spin.presets.large );
})(jQuery);
;

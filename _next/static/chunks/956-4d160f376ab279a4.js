(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[956],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",u="day",s="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:s,d:u,D:d,h:a,m:o,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=y;var S=function(e){return e instanceof _},$=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var u=t.name;w[u]=t,i=u}return!r&&i&&(b=i),i||!r&&b},M=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},O=v;O.l=$,O.i=S,O.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=y.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,r=!!O.u(t)||t,l=O.p(e),h=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(u)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,y=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,y):h(0,y+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?m-w:m+(6-w),y);case u:case d:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var n,s=O.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[s],p=s===u?this.$D+(t-this.$W):t;if(s===c||s===f){var g=this.clone().set(d,1);g.$d[h](p),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[O.p(e)]()},m.add=function(r,l){var d,h=this;r=Number(r);var p=O.p(l),g=function(e){var t=M(h);return O.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===u)return g(1);if(p===s)return g(7);var y=(d={},d[o]=t,d[a]=n,d[i]=e,d)[p]||1,m=this.$d.getTime()+r*y;return O.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,u=this.$M,s=n.weekdays,c=n.months,l=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},d=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:O.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,s,2),ddd:l(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:O.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,h){var p,g=O.p(d),y=M(r),m=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=O.m(this,y);return b=(p={},p[f]=b/12,p[c]=b,p[l]=b/3,p[s]=(v-m)/6048e5,p[u]=(v-m)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,h?b:O.a(b)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return w[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),j=_.prototype;return M.prototype=j,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",u],["$M",c],["$y",f],["$D",d]].forEach((function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,_,M),e.$i=!0),M},M.locale=$,M.isDayjs=S,M.unix=function(e){return M(1e3*e)},M.en=w[b],M.Ls=w,M.p={},M}()},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";var r=n(9361).default,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,d=void 0!==a&&a,p=e.priority,y=void 0!==p&&p,S=e.loading,j=e.lazyRoot,z=void 0===j?null:j,D=e.lazyBoundary,k=e.className,A=e.quality,C=e.width,L=e.height,E=e.style,I=e.objectFit,P=e.objectPosition,R=e.onLoadingComplete,H=e.placeholder,N=void 0===H?"empty":H,W=e.blurDataURL,T=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(f.ImageConfigContext),q=u.useMemo((function(){var e=v||U||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[U]),B=T,Y=n?"responsive":"intrinsic";"layout"in B&&(B.layout&&(Y=B.layout),delete B.layout);var F=_;if("loader"in B){if(B.loader){var Z=B.loader;F=function(e){e.config;var t=g(e,["config"]);return Z(t)}}delete B.loader}var V="";if(function(e){return"object"===typeof e&&($(e)||function(e){return void 0!==e.src}(e))}(t)){var J=$(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,V=J.src,(!Y||"fill"!==Y)&&(L=L||J.height,C=C||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:V;var K=O(C),G=O(L),Q=O(A),X=!y&&("lazy"===S||"undefined"===typeof S);(t.startsWith("data:")||t.startsWith("blob:"))&&(d=!0,X=!1);b.has(t)&&(X=!1);m&&(d=!0);var ee,te=i(u.useState(!1),2),ne=te[0],re=te[1],ie=i(l.useIntersection({rootRef:z,rootMargin:D||"200px",disabled:!X}),3),oe=ie[0],ae=ie[1],ue=ie[2],se=!X||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:P};0;var he=Object.assign({},E,de),pe="blur"!==N||ne?{}:{backgroundSize:I||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===Y)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof G){var ge=G/K,ye=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===Y?(ce.display="block",ce.position="relative",fe=!0,le.paddingTop=ye):"intrinsic"===Y?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",fe=!0,le.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(G,"%27/%3e")):"fixed"===Y&&(ce.display="inline-block",ce.position="relative",ce.width=K,ce.height=G)}else 0;var me={src:w,srcSet:void 0,sizes:void 0};se&&(me=M({config:q,src:t,unoptimized:d,layout:Y,width:K,quality:Q,sizes:n,loader:F}));var ve=t;0;var be,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var $e=(r(be={},we,me.srcSet),r(be,Se,me.sizes),be),Me=u.default.useLayoutEffect,Oe=u.useRef(R),_e=u.useRef(t);u.useEffect((function(){Oe.current=R}),[R]),Me((function(){_e.current!==t&&(ue(),_e.current=t)}),[ue,t]);var je=h({isLazy:X,imgAttributes:me,heightInt:G,widthInt:K,qualityInt:Q,layout:Y,className:k,imgStyle:he,blurStyle:pe,loading:S,config:q,unoptimized:d,placeholder:N,loader:F,srcString:ve,onLoadingCompleteRef:Oe,setBlurComplete:re,setIntersection:oe,isVisible:se,noscriptSizes:n},B);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ce},fe?u.default.createElement("span",{style:le},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(x,Object.assign({},je))),y?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},$e))):null)};var a,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),l=n(7190),f=n(9977),d=(n(3794),n(2392));function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function g(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0}||{},m=y.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(d.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(z(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function $(e){return void 0!==e.default}function M(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,u=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var u,s=/(^|\s)(1?\d?\d)vw/g,c=[];u=s.exec(r);u)c.push(parseInt(u[2]));if(c.length){var l,f=.01*(l=Math).min.apply(l,o(c));return{widths:a.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,s),f=l.widths,d=l.kind,h=f.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:f.map((function(e,r){return"".concat(c({config:t,src:n,quality:u,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:c({config:t,src:n,quality:u,width:f[h]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=S.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var x=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,s=e.blurStyle,c=e.isLazy,l=e.placeholder,f=e.loading,d=e.srcString,p=e.config,y=e.unoptimized,m=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,$=e.onError,O=(e.isVisible,e.noscriptSizes),_=g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=c?"lazy":f,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":i,className:o,style:h({},a,s),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,d,0,l,v,b)}),[w,d,i,l,v,b]),onLoad:function(e){j(e.currentTarget,d,0,l,v,b),S&&S(e)},onError:function(e){"blur"===l&&b(!0),$&&$(e)}})),(c||"blur"===l)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},_,M({config:p,src:d,unoptimized:y,layout:i,width:n,quality:r,sizes:O,loader:m}),{decoding:"async","data-nimg":i,style:a,className:o,loading:f}))))};function z(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),u=n(2725),s=n(3462),c=n(1018),l=n(7190),f=n(1210),d=n(8684);var h="undefined"!==typeof o.default.useTransition,p={};function g(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(i?"%"+i:"")]=!0}}var y=o.default.forwardRef((function(e,t){var n,i=e.href,y=e.as,m=e.children,v=e.prefetch,b=e.passHref,w=e.replace,S=e.shallow,$=e.scroll,M=e.locale,O=e.onClick,_=e.onMouseEnter,j=e.legacyBehavior,x=void 0===j?!0!==Boolean(!1):j,z=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=m,!x||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var D=!1!==v,k=r(h?o.default.useTransition():[],2)[1],A=o.default.useContext(s.RouterContext),C=o.default.useContext(c.AppRouterContext);C&&(A=C);var L,E=o.default.useMemo((function(){var e=r(a.resolveHref(A,i,!0),2),t=e[0],n=e[1];return{href:t,as:y?a.resolveHref(A,y):n||t}}),[A,i,y]),I=E.href,P=E.as,R=o.default.useRef(I),H=o.default.useRef(P);x&&(L=o.default.Children.only(n));var N=x?L&&"object"===typeof L&&L.ref:t,W=r(l.useIntersection({rootMargin:"200px"}),3),T=W[0],U=W[1],q=W[2],B=o.default.useCallback((function(e){H.current===P&&R.current===I||(q(),H.current=P,R.current=I),T(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[P,N,I,q,T]);o.default.useEffect((function(){var e=U&&D&&a.isLocalURL(I),t="undefined"!==typeof M?M:A&&A.locale,n=p[I+"%"+P+(t?"%"+t:"")];e&&!n&&g(A,I,P,{locale:t})}),[P,I,U,M,D,A]);var Y={ref:B,onClick:function(e){x||"function"!==typeof O||O(e),x&&L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,u,s,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var l=function(){t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:u})};c?c(l):l()}}(e,A,I,P,w,S,$,M,C?k:void 0)},onMouseEnter:function(e){x||"function"!==typeof _||_(e),x&&L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),a.isLocalURL(I)&&g(A,I,P,{priority:!0})}};if(!x||b||"a"===L.type&&!("href"in L.props)){var F="undefined"!==typeof M?M:A&&A.locale,Z=A&&A.isLocaleDomain&&f.getDomainLocale(P,F,A.locales,A.domainLocales);Y.href=Z||d.addBasePath(u.addLocale(P,F,A&&A.defaultLocale))}return x?o.default.cloneElement(L,Y):o.default.createElement("a",Object.assign({},z,Y),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,l=i.useRef(),f=r(i.useState(!1),2),d=f[0],h=f[1],p=r(i.useState(null),2),g=p[0],y=p[1];i.useEffect((function(){if(a){if(l.current&&(l.current(),l.current=void 0),c||d)return;return g&&g.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},s.push(n),u.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(g,(function(e){return e&&h(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==l.current||l.current(),l.current=void 0}}if(!d){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g,c,n,t,d]);var m=i.useCallback((function(){h(!1)}),[]);return[y,d,m]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var u=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=i},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})}}]);
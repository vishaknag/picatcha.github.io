function g(a,c,b){this.a=function(){this.w=a;this.n=c;this.d=null;this.e=this.M();(void 0===ModulesData.J||ModulesData.J)&&Utils.insertAfter(this.e,l.b)};this.c=function(){"function"===typeof this.e.c&&this.e.c();this.e.parentNode&&this.e.parentNode.removeChild(this.e)};this.m=function(a,b){if(this.e.offsetLeft!=a||this.e.offsetTop!=b)this.e.style.left=a+"px",this.e.style.top=b+"px"};this.W=function(){if(!this.d||!this.w)return!1;var a=this.w.getStats();return a?this.d.frameRate>a.frameRate&&this.d.lcLatency<
a.lcLatency||"throttle"!==this.d.state?!0:!1:!1};this.getStats=function(){return this.d};this.da=function(a){this.d=a};this.M=function(){var a=Utils.createFlashObject(parent,ModulesData.host+"SZMKVBCN.swf",{width:"1",height:"1",id:"beacon_"+ModulesData.uid+"_"+this.n},{quality:"high",allowScriptAccess:"always",wmode:this.B()?"transparent":"direct",bgColor:this.B()?"":"#000000"},{index:this.n,onloaded:ModulesData.t+"."+b+".onBeaconLoaded",onstats:ModulesData.t+"."+b+".onBeaconStats",debug:!1});a.style.cssText=
"position:absolute; left:1px; top:1px; width:1px; height:1px";return a};this.B=function(){return-1<navigator.userAgent.toLowerCase().indexOf("chrome")};this.a()};function m(){this.a=function(){};this.getStats=function(){return{ratio:0,discrepancy:0,measurable:!1}};this.c=function(){};this.a()};function n(){this.f=Utils.extend(this,m);this.a=function(){};this.getStats=function(){var a=this.f.getStats(),c=document.visibilityState;a.measurable="string"===typeof c;"visible"===c&&(a.ratio=1);return a};this.a()};function q(){this.f=Utils.extend(this,m);this.a=function(){this.r="sameDomain"===Utils.getEnvironment().frameType};this.getStats=function(){var a=this.f.getStats();if(!this.r)return a;var c=Utils.getWindowRect(l.top),b=Utils.getElementRect(l.top,l.b),d=b.width,d=d-Math.max(0,c.left-b.left),d=d-Math.max(0,b.right-c.right),d=d/b.width,e=b.height,e=e-Math.max(0,c.top-b.top),e=e-Math.max(0,b.bottom-c.bottom),e=e/b.height;a.ratio=Utils.bound(d,0,1)*Utils.bound(e,0,1);a.ratio=Utils.bound(a.ratio,0,1);a.ratio=
Utils.toFixed(a.ratio,2);a.measurable=!0;return a};this.c=function(){};this.a()};r.prototype=Array.prototype;
function r(a){this.f=Utils.extend(this,m);this.a=function(){this.ready=!1;this.n=a;this.o=null;this.l=8;this.q=0;this.s=[];this.D=!0;this.d=this.f.getStats();this.L=0;this.Q()};this.getStats=function(){var a=this.f.getStats(),b=0;if(!this.control.getStats())return a;if(this.D)return this.S(),a.measurable=!1,a;for(var d=0;d<this.length;d++)this[d].W()&&b++;a.ratio=8===b?1:6<=b?.75:5<=b?.5:3<=b?.25:0;a.measurable=!0;a.discrepancy=0;return a};this.c=function(){clearTimeout(this.o);this.control.c();for(var a=
0;a<this.length;a++)this[a].c()};this.$=function(){++this.q===this.l+1&&(this.ready=!0,setTimeout(this.u.bind(this),250))};this.aa=function(a){var b=this[a.beaconIndex];b&&b.da(a)};this.Q=function(){this.control=new g(null,"control",this.n);for(var a=0;a<this.l;a++){var b=new g(this.control,a,this.n);this.push(b)}};this.u=function(){this.control.m(-1E4,-1E4);for(var a=0;a<this.length;a++){var b=this.p(a);this[a].m(b.left,b.top)}};this.S=function(){if(0===++this.L%2){this.control.m(-1E4,-1E4);for(var a=
0;a<this.length;a++)this[a].m(-1E4,-1E4)}else{for(var b=null,d="null"!==this.control.getStats().state,a=0;a<this.length;a++){var e=this[a].getStats();if(!e)return;if("null"===e.state)d=!1;else{b=this.p(a);break}}if(b){this.control.m(b.left,b.top);for(a=0;a<this.length;a++)this[a].m(b.left,b.top);d&&(this.u(),this.D=!1)}else this.u()}};this.p=function(a){var b=l.b.offsetLeft+l.b.offsetWidth-1,d=l.b.offsetTop+l.b.offsetHeight-1,e=l.b.offsetLeft,f=l.b.offsetTop;switch(a){case 1:e=b;break;case 2:f=d;
break;case 3:e=b;f=d;break;case 4:e=.25*b;f=.5*d;break;case 5:e=.5*b;f=.25*d;break;case 6:e=.75*b;f=.5*d;break;case 7:e=.5*b,f=.75*d}return{left:Math.floor(e),top:Math.floor(f)}};this.a()};function s(a,c){this.f=Utils.extend(this,m);this.a=function(){this.h=a;this.j=c;this.o=null;this.k=0;this.l=5;this.s=[];this.d=this.f.getStats();this.r="sameDomain"===Utils.getEnvironment().frameType;this.X="object embed img video select input audio progress".split(" ");this.G()};this.getStats=function(){this.r&&1===this.h.getStats().ratio?this.d.measurable=!0:this.d.measurable=!1;return this.d};this.c=function(){clearTimeout(this.o)};this.G=function(){this.o=setTimeout(this.G.bind(this),16);this.r?
this.k<this.l?this.U():this.T():clearTimeout(this.o)};this.U=function(){var a=null,a=this.p(this.k);if(a=Utils.getElementFromPoint(l.top,a.left,a.top)){var c=window.getComputedStyle(a),e=a.nodeName.toLowerCase(),f=this.O(c.backgroundColor),a=a===l.b?!0:0===Number(c.opacity)?!0:1===a.offsetWidth&&1===a.offsetHeight?!0:0<this.X.indexOf(e)?!1:"none"!==c.backgroundImage?!1:0<f?!1:0<a.children.length||0<a.textContent.length?!1:!0;this.s[this.k]=a}else this.s[this.k]=!1;this.k++};this.T=function(){for(var a=
0,c=0;c<this.l;c++)this.s[c]||a++;this.d.ratio=a===this.l?0:1;this.d.measurable=!0;this.k=this.d.discrepancy=0};this.p=function(a){var c=Utils.getWindowRect(l.top),e=Utils.getElementRect(l.top,l.b),f=e.left-c.left,c=e.top-c.top,e=l.b.offsetWidth-1,h=l.b.offsetHeight-1;switch(a){case 1:f+=e;break;case 2:f+=.5*e;c+=.5*h;break;case 3:c+=h;break;case 4:f+=e,c+=h}return{left:Math.floor(f),top:Math.floor(c)}};this.O=function(a){a=a.replace(/ /g,"");return""===a||"transparent"===a?0:-1<a.indexOf("rgba")?
(a=a.split(","),a=a[a.length-1].replace(")",""),Number(a)):1};this.a()};function t(a){this.f=Utils.extend(this,m);this.a=function(){this.h=a};this.getStats=function(){var a=Utils.getWindowRect(l.top),b=Utils.getElementRect(l.top,l.b),d=this.f.getStats(),e=this.h.getStats();d.size={width:a.width,height:a.height};d.measurable=e.measurable;d.ratio=b.width*b.height*e.ratio;d.ratio/=a.width*a.height;d.ratio=Utils.toFixed(d.ratio,2);return d};this.c=function(){};this.a()};VerificationModule=function(a){this.f=Utils.extend(this,u,[a]);this.a=function(){this.I=new n;this.h=new q;this.j=new r(this.id);this.H=new t(this.h);this.F=new s(this.h,this.j);this._emitLoaded()};this.c=function(){this.I.c();this.h.c();this.j.c();this.H.c();this.F.c()};this.getData=function(){var a=this.f.getData.call(this);a.stats={geometric:this.h.getStats(),beacons:this.j.getStats(),viewport:this.H.getStats(),stacking:this.F.getStats(),visibility:this.I.getStats()};return a};this.onBeaconLoaded=
function(){this.j.$();this.j.ready&&this._emitReady()};this.onBeaconStats=function(a){this.j.aa(a)};this.a()};Utils={getZoom:function(){return window.devicePixelRatio||screen.deviceXDPI/screen.la},requestAnimationFrame:function(a){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(){window.setTimeout(a,1E3/60)})(a)},setSetter:function(a,c,b){Object.defineProperty(a,c,{set:b})},setGetter:function(a,c,b){Object.defineProperty(a,c,{get:b})},toFixed:function(a,c){return Number(a.toFixed(c))},bound:function(a,c,b){return Math.max(Math.min(a,b),c)},
getEnvironment:function(){var a=Utils.hasProperty(top,"document")?"sameDomain":"crossDomain",c="sameDomain"===a&&parent===top,b=Utils.getElementRect(l.top,l.e),d=Utils.getZoom(),e=Boolean(l.top.document.referrer)&&"crossDomain"===a?l.top.document.referrer:l.top.location.href,f=Utils.getTopIframe(parent);return{frameType:a,flashRect:b,hostUrl:e,zoom:d,isTop:c,isTopFriendly:"crossDomain"===a&&f!==parent}},getTopIframe:function(a){return Utils.hasProperty(a.parent,"document")?a.parent===a?a:Utils.getTopIframe(a.parent):
a},hasProperty:function(a,c){try{return null===a[c]||void 0===a[c]?!1:!0}catch(b){return!1}},createFlashObject:function(a,c,b,d,e){var f=a.document.createElement("object"),h=null,k="",p=0<window.navigator.userAgent.indexOf("MSIE ");p?(b.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",d.movie=c):(b.data=c,b.type="application/x-shockwave-flash");for(k in b)f.setAttribute(k,b[k]);for(k in d)h=a.document.createElement("param"),h.setAttribute("name",k),h.setAttribute("value",d[k]),f.appendChild(h);
h=a.document.createElement("param");h.setAttribute("name","FlashVars");h.setAttribute("value","");f.appendChild(h);for(k in e)c=h.getAttribute("value")+k+"="+e[k]+"&",h.setAttribute("value",c);p&&(a=a.document.createElement("div"),a.innerHTML=f.outerHTML,f=a.firstElementChild);return f},insertAfter:function(a,c){a&&c&&c.parentNode.insertBefore(a,c.nextSibling)},getElementFromPoint:function(a,c,b){var d=a.document.elementFromPoint(c,b),e=null,f=null;if(!d)return null;if("IFRAME"===d.tagName){if(!d.contentWindow||
!Utils.hasProperty(d.contentWindow,"document"))return null;e=Utils.getElementRect(a,d);f=Utils.getWindowRect(a);c-=e.left-f.left;b-=e.top-f.top;d=Utils.getElementFromPoint(d.contentWindow,c,b)}return d},getWindow:function(a){a=a?a.ownerDocument:{};return a.defaultView||a.parentWindow},getWindowRect:function(a){a={left:a.document.documentElement.scrollLeft||a.document.body.scrollLeft,top:a.document.documentElement.scrollTop||a.document.body.scrollTop,width:Math.max(a.document.documentElement.clientWidth,
a.innerWidth||0),height:Math.max(a.document.documentElement.clientHeight,a.innerHeight||0)};a.right=a.left+a.width;a.bottom=a.top+a.height;return a={left:a.left,top:a.top,width:a.width,height:a.height,right:a.right,bottom:a.bottom}},getElementRect:function(a,c){var b={left:0,top:0,right:0,bottom:0,width:0,height:0};if(!c)return b;b.width=c.offsetWidth;for(b.height=c.offsetHeight;c;)if(b.left+=c.offsetLeft,b.top+=c.offsetTop,c.offsetParent)c=c.offsetParent;else{var d=Utils.getWindow(c);c=d!==a&&d.frameElement?
d.frameElement:null}b.right=b.left+b.width;b.bottom=b.top+b.height;return b={left:b.left,top:b.top,width:b.width,height:b.height,right:b.right,bottom:b.bottom}},getFlashObject:function(){for(var a=Utils.getAllTags(l.top,"object"),c=Utils.getAllTags(l.top,"embed"),a=Utils.concat(a,c),c=0;c<a.length;c++){var b=a[c];if("function"===typeof b[ModulesData.g])return b}},concat:function(a,c){return[].slice.call(a).concat([].slice.call(c))},getAllTags:function(a,c){function b(a){var f=a.getElementsByTagName("iframe");
d=Utils.concat(d,a.getElementsByTagName(c));for(a=0;a<f.length;a++){var h=f[a];h.contentWindow&&Utils.hasProperty(h.contentWindow,"document")&&b(h.contentDocument)}}var d=[];b(a.document);return d},extend:function(a,c,b){a._super=Object.create(c);c.apply(a._super,b);for(var d in a._super)"_super"!==d&&a._super.hasOwnProperty(d)&&(a[d]=a._super[d]);return a._super},loadScript:function(a,c){var b=!1,d=document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("script");
e.src=a;e.onload=e.onreadystatechange=function(){var a=!this.readyState||"loaded"===this.readyState||"complete"===this.readyState;!b&&a&&(b=!0,e.onload=e.onreadystatechange=null,d&&e.parentNode&&d.removeChild(e),c())};d.insertBefore(e,d.firstChild)}};ModulesData={J:shellData.loadBeacons,b:shellData.ad,host:shellData.ds_host,t:shellData.scriptInstance,uid:shellData.uid,K:shellData.modules,g:shellData.callback,loaded:shellData.events.scriptLoaded};function v(){this.a=function(){this.i=[]};this.on=this.addListener=function(a,c,b){if("string"!==typeof a)return!1;if("string"===typeof c){b="string"===typeof b?Utils.getFlashObject(b):l.e;if(!b||"function"!==typeof b[c])return!1;c=b[c];c.Y=!0}if("function"!==typeof c)return!1;for(b=0;b<this.i.length;b++){var d=this.i[b];if(d.type===a&&d.g===c)return!1}a={type:a,g:c};this.i.push(a);return a};this.off=this.removeListener=function(a,c){if("string"!==typeof a||"function"!==typeof c)return!1;for(var b=
0;b<this.i.length;b++){var d=this.i[b];if(d.type===a&&d.g===c)return this.i.splice(b,1)}};this.emit=this.dispatchEvent=function(a,c){if("string"!==typeof a)return!1;for(var b=0;b<this.i.length;b++){var d=this.i[b];d.type===a&&d.g({type:a,data:c,target:d.g.Y?ModulesData.uid:this})}};this.a()};ModuleEvent={ha:"moduleLoaded",fa:"modulesLoaded",ga:"modulesSynced",ea:"modulesDestroyed",ja:"viewabilityBeaconLoaded",ia:"viewabilityBeaconsLoaded",ka:"viewabilityMeasureable"};function u(a){this.f=Utils.extend(this,v);this.a=function(){this.id=a.v;this.C=this.q=!1;this.P=a.Z;this.R=a.ba};this._emitLoaded=function(){this.q=!0;l.b[ModulesData.g]({type:this.P,data:{moduleName:this.id}})};this._emitReady=function(){this.C=!0;l.b[ModulesData.g]({type:this.R,data:{moduleName:this.id}})};this.getData=function(){return{loaded:this.q,ready:this.C}};this.destroy=function(){};this.a()};ModulesMap={SZMKVER:"VerificationModule",SZMKBR:"BreakoutModule"};function w(){this.a=function(){parent[ModulesData.t]=l;parent.szmkmodules=l};this.c=function(){parent[ModulesData.t]=null;parent.szmkmodules=null;frameElement.parentNode&&frameElement.parentNode.removeChild(frameElement)};this.a()};function x(){this.a=function(){};this.load=function(){for(var a in ModulesData.K){var c=ModulesData.K[a];this.A({url:c.url,v:c.moduleName,Z:c.loadEvent,ba:c.readyEvent,className:ModulesMap[c.moduleName]})}};this.A=function(a){var c=window[a.className];if(!c)return Utils.loadScript(a.url,this.A.bind(this,a)),!1;l[a.v]=new c(a);l.push(l[a.v])};this.a()};y.prototype=Array.prototype;
function y(){this.a=function(){window.modules=this;this.Utils=Utils;this.top=Utils.getTopIframe(window);this.e=Utils.getFlashObject(ModulesData.uid);this.b=ModulesData.b||this.e;this.ca=new w;this.V=new x;this.N();this.V.load()};this.callFunction=function(a,c,b){"string"!==typeof c&&(c="");var d=this;c=c.split(".");for(var e=0;e<c.length;e++){var f=c[e];if(!d||!d.hasOwnProperty(f))return;d=d[f]}return"function"!==typeof d[a]?void 0:d[a].apply(d,b)};this.destroy=function(){for(var a=0;a<this.length;a++)this[a].c();
this.ca.c()};this.N=function(){this.b[ModulesData.g]({type:ModulesData.loaded})};setTimeout(this.a.bind(this))}var l=new y;
(function(){var f=void 0,h=true,i=null,j=false,l,m=this;function aa(a,b){function c(){}c.prototype=b.prototype;a.ia=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ba(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ca(a,b){var c="",d=da(encodeURIComponent(a));d.splice(b||5,d.length);n(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function da(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,g=271733878,s=3285377520,q=[],k,w,u,F,G,V=Math.ceil((a.length/4+2)/16),O=[V],z=0,t;z<V;z++){O[z]=[];for(k=0;k<16;k++)O[z][k]=a.charCodeAt(z*64+k*4)<<24|a.charCodeAt(z*64+k*4+1)<<16|a.charCodeAt(z*64+k*4+2)<<8|a.charCodeAt(z*64+k*4+3)}z=(a.length-1)*8;a=V-1;O[a][14]=Math.floor(z/Math.pow(2,32));O[a][15]=z&4294967295;for(z=0;z<V;z++){for(t=0;t<16;t++)q[t]=O[z][t];
for(t=16;t<80;t++)q[t]=(q[t-3]^q[t-8]^q[t-14]^q[t-16])<<1|(q[t-3]^q[t-8]^q[t-14]^q[t-16])>>>31;a=c;k=d;w=e;u=g;F=s;for(t=0;t<80;t++)G=Math.floor(t/20),G=(a<<5|a>>>27)+(G==0?k&w^~k&u:G==1?k^w^u:G==2?k&w^k&u^w&u:k^w^u)+F+b[G]+q[t]&4294967295,F=u,u=w,w=k<<30|k>>>2,k=a,a=G;c=c+a&4294967295;d=d+k&4294967295;e=e+w&4294967295;g=g+u&4294967295;s=s+F&4294967295}return[c,d,e,g,s]}
function ea(a){var b=m.navigator,c=m.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];n(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=m.performance;d=d.concat([b&&b.now?b.now():"",document.title,m.location.href,o(),ba()]);return d.concat(a||[]).join()}function p(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function r(a){return typeof a!=="undefined"}function v(a){return a.replace(/^www\./,"")}function x(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function y(a){return typeof a==="number"}function A(a){return typeof a==="string"}function B(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function o(){return(new Date).getTime()}
function n(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function fa(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function ga(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var g=0,s=a.length;g<=s;g++)c[0][g]=g;for(var q,k,w,d=1;d<=e;d++)for(g=1;g<=s;g++)q=d-1,k=g-1,w=c[q][k],b.charAt(q)==a.charAt(k)?c[d][g]=w:(k=c[d][k]+1,q=c[q][g]+1,w+=2,c[d][g]=Math.min(k,q,w));return c[b.length][a.length]}var ha;function ia(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),n(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function ja(a,b){var c="",d=m.location.href.split("?");if(d.length){var d=ia(d[1]),e=b||a;d[e]&&(c=d[e])}return c}function ka(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function la(a){var b=[];n(ma,function(c){var d=a[c];r(d)&&(Object.prototype.toString.call(d)==="[object Array]"?n(d,function(a){b.push(c+"="+a)}):d&&d.constructor===Object?n(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function C(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=m.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=ka(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,g=e.indexOf("?");g===-1&&(g=e.indexOf("#"));if(g===-1)g=e.length;g=e.lastIndexOf("/",g);a=g===-1?"/"+a:e.substr(0,g)+"/"+
a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(ka(b.protocol,b.port)||b.port==="0")b.port="";return b}
function D(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function E(a,b,c){a[b]=a[b]||c}function na(a){n(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=ia(b.src.split("?")[1]),E(a,"uid",b.uid),E(a,"domain",b.domain),j})}function H(a,b){return a[b]?encodeURIComponent(a[b]):""}function oa(a){var b={};n(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var I={};I.q=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return i;if(I.q.na!==f)return I.q.na;var a=o()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return I.q.na=d}catch(e){}return I.q.na=i};I.k=function(a){var b=I.q();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&o()>c)?(I.remove(a),""):b.getItem(a)||""};
I.create=function(a,b,c){var d=I.q();if(d){var e=new Date;e.setTime(o()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(g){}}};I.remove=function(a){var b=I.q();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function pa(){var a=document.createElement("script");a.async=h;a.src=(m.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("head");b&&b.length&&b[0].appendChild(a)}function qa(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=I.q(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),pa())}};function ra(a){var b,c;b="pageYOffset";c="scrollTop";if(a){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)a=e.querySelectorAll(d+"[data-cb-scroll-element]");else{a=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&a.push(d[e])}if(a&&a.length)return a[0][c]}if(y(m[b]))return m[b];else if(document.body&&document.body[c])return document.body[c];else if(document.documentElement[c])return document.documentElement[c];return 0}
function sa(){var a=document,a=a[a.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0;window.innerHeight&&(a=Math.min(window.innerHeight,a));return a}function J(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function ta(a,b,c){var d=a.ownerDocument.documentElement,e=0,g=r(c)?c+1:-1;A(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==g;){if(c(a))return a;a=a.parentNode;e++}return i}
function ua(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function va(a){a=a||window.event;return!a?i:ta(a.target||a.srcElement,ua,10)};var K={},wa=1;function L(a,b,c){wa++;K[a]=K[a]||{};K[a][wa]=[b,c];return wa}function M(a){if(A(a))K[a]=f,delete K[a];else if(y(a)){var b=h;n(K,function(c){n(c,function(d,e){if(parseInt(e,10)===a)return c[e]=f,delete c[e],b=j});return b})}}function N(a,b){if(K[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];n(K[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};var P={};
P.B=function(){P.oa?P.da("pageload"):(P.Ua=[{target:m,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:m,event:"resize"},{target:document.body,event:"mousedown"}],P.ja=i,P.ya=j,P.T=i,P.Ia={},P.la={},n(P.Ua,function(a){var b=a.event;x(a.target,b,function(a){P.da.call(P,b,a)})}),L("f",function(){P.da("focus")}),P.da("pageload"),x(document.body,"click",function(a){(a=va(a))&&N("c",a)},h),x(document.body,"contextmenu",function(a){(a=va(a))&&N("r",
a)}),P.oa=h)};P.Za=function(){var a,b=P.Ia.keydown;if(b===f)return j;b=o()-b;return b<=(a||15E3)&&b>=0};P.Q=function(a,b){var c=P.la[a];if(!c)return"";var b=b||o(),d,e=0;n(c,function(a){d=Math.floor((b-a)/1E3);d>=0&&d<16&&(e|=1<<d)});c=("0000"+e.toString(16)).slice(-4);return c=="0000"?"":c};P.xb=function(){P.la={}};P.Ca=100;P.da=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}P.Db(a);P.ja===i?P.Qa():P.ya=h};
P.Db=function(a){var b=o();P.Ia[a]=b;var c=P.la[a];c?c.length<2?c.push(b):c[c.length-2]>b-1E3?c[c.length-1]=b:c.push(b):c=[b];c.length>32&&c.shift();P.la[a]=c};P.Qa=function(){P.ja=m.setTimeout(P.cb,P.Ca);N("a");P.T!==i&&m.clearTimeout(P.T);P.T=m.setTimeout(function(){N("i");m.clearTimeout(P.T);P.T=i},5E3+P.Ca)};P.cb=function(){m.clearTimeout(P.ja);P.ja=i;if(P.ya)P.ya=j,P.Qa()};var xa,ya,Q,za,Aa;(function(){var a,b;n(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof m.document[a]==="boolean")return b=c,j});b!==f&&(za=a,Aa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),Q=b+"visibilitychange")})();var R=j;function Ba(){R=Aa&&m.document[Aa]==="prerender"?h:j}function Ca(){ya=h;N("f")}function Da(){ya=j;N("b")}
function Ea(a,b,c){m.addEventListener?m.addEventListener(a,c,j):m.document.attachEvent&&m.document.attachEvent(b,c)}function Fa(){var a=h;m.document.hasFocus&&(a=m.document.hasFocus());var b=j;za&&(b=m.document[za]);return a&&!b}function Ga(){Fa()?Ca():Da()}function Ha(a){Ba();if(R){var b=j,c=function(){b||(Ba(),R||(b=h,a(),m.window.setTimeout(function(){m.document.removeEventListener(Q,c,j)},100)))};m.document.addEventListener(Q,c,j)}else a()};function S(){this.a=m._sf_async_config||{};this.fb=p(this.Ma,this)}S.prototype.B=function(){this.Na=0};S.prototype.Ma=function(){};S.prototype.ga=function(a){if(!R){var b=this.fb,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};var T={};T.bb=function(){try{T.create("_cb_test","1",1);var a=T.k("_cb_test");T.remove("_cb_test");return a==="1"}catch(b){return j}};T.k=function(a){a+="=";var b="";n(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
T.create=function(a,b,c){var d=m._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(o()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};T.remove=function(a){return T.k(a)?T.create(a,"",-86400):""};function Ia(a){this.fa=a||"";this.eb=I.q()!==i||T.bb();this.xa=j;Ja(this)}l=Ia.prototype;l.isSupported=function(){return this.eb};
function Ja(a){if(!T.k("_cb_ls")){var b=I.q()!==i,c=T.k("_SUPERFLY_nosample");c&&n(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,h)});var d=T.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,h),T.remove("_chartbeat3"));b&&((b=T.k("_chartbeat2"))&&a.create("_chartbeat2",b,94608E3,h),(b=T.k("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,94608E3,h),(b=T.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));T.create("_cb_ls","1",2592E3)}}
l.create=function(a,b,c,d){a=d?a:this.fa+a;(I.q()?I:T).create(a,b,c);I.q()&&T.create(a,b,c)};l.update=function(a,b,c,d,e,g,s){a=d?a:this.fa+a;e=A(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(s&&d.length){var q=s(b),k=fa(d,function(a){return s(a)===q});k!==-1&&d.splice(k,1)}y(g)&&d.length>=g&&d.splice(0,d.length-g+1);d.push(b);this.create(a,d.join(e),c,h)};
l.k=function(a,b){var a=b?a:this.fa+a,c=(I.q()?I:T).k(a);if(!c&&I.q()&&(c=T.k(a))&&T.k("_cb_ls")){this.xa=h;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=94608E3}I.create(a,c,d)}return c};l.remove=function(a,b){a=b?a:this.fa+a;(I.q()?I:T).remove(a);I.q()&&T.remove(a)};function Ka(a){var b=i;if(a&&(b=La()))return b;var c=m.location,b=U(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function La(){var a=i;n(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return b=C(b.href),a=U(b.pathname)+b.search+b.hash,j});return a}
for(var Ma={},Na=0;Na<81;Na++)Ma["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Na)]=h;function Oa(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Ma[c]?String.fromCharCode(c):"%"+b.toUpperCase()}function U(a){if(!A(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Oa);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};var W={Wa:{IDLE:0,Gb:1,Fb:2,Va:3},F:0};W.B=function(){if(!W.oa)L("a",W.ib,W),L("i",W.lb,W),L("f",W.kb,W),L("b",W.jb,W),W.oa=h};W.hb=function(){return W.F};W.ib=function(){W.F===1?W.H(3):W.F===0&&W.H(2)};W.lb=function(){W.F===3?W.H(1):W.F===2&&W.H(0)};W.kb=function(){(W.F===0||W.F===2)&&W.H(3)};W.jb=function(){W.F===3?W.H(2):W.F===1&&W.H(0)};W.H=function(a){W.F=a;N("s",a)};function X(a,b){this.Ga=a||f;this.La=b||f;this.U=this.O=0}X.prototype.B=function(){this.U=this.O=0;this.$=i;this.zb=L("s",this.Ha,this);this.Ha(W.hb())};X.prototype.Ha=function(a){m.clearInterval(this.$);this.$=i;if(a===W.Wa.Va)this.$=m.setInterval(p(this.ob,this),1E3)};X.prototype.ob=function(){if(this.Ga===f||this.Ga())this.O++,this.U++,this.La&&this.La()};X.prototype.terminate=function(){m.clearInterval(this.$);this.$=i;M(this.zb)};function Y(){S.call(this);this.P=[];this.D=new Ia(this.Ab);this.G=new X;this.vb=p(this.ea,this);x(m,"unload",this.vb);Ha(p(this.B,this))}aa(Y,S);l=Y.prototype;l.va=h;
l.B=function(){Y.ia.B.call(this);this.ba=this.M=0;this.N=o();this.Pa=ca(Pa(this));var a=(this.D.k("_chartbeat2",h)||"").split("."),b=o(),c=b-+(a[1]||0);b-=+(a[2]||0);this.rb=a[0]&&c>18E5&&b<2592E6?0:1;this.ua=h;this.ca=72E5;if(this.va&&(a=+this.a.sessionLength,!isNaN(a)))this.ca=a*6E4;a=(this.D.k("_chartbeat2",h)||"").split(".");a.length>4&&(a=[]);var c=o(),d="1",e=a&&+a[2],b=a&&a[3];if(a&&e&&b)if(d=Math.abs((B(c)-B(e))/864E5)){d=Math.min(d,16)-1;for(e="";d--;)e+=0;d=(b+e+"1").slice(-16)}else d=b;
b=d;a[0]||(a[0]=this.a.utoken||ca(Pa(this),3),a[1]=c);a[2]=c;a[3]=b;this.ka=a[0];this.wb=a.join(".");this.D.create("_chartbeat2",this.wb,94608E3,h);this.a.utoken=this.ka;var g;c=+a[1];b=+a[2];if((a=a[3])&&c&&b)g=(Math.min((Math.abs((B(b)-B(c))/864E5)||0)+1,16,a.length)-1).toString(16),g+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.Fa=g;this.G.B();W.B();P.B();xa||(ya=Fa(),Q&&m.document.addEventListener&&m.document.addEventListener(Q,Ga,j),Ea("focus","onfocusin",Ca),Ea("blur","onfocusout",Da),
ya&&Ca(),xa=h);this.X=0;this.Ya=L("a",this.sb,this)};function Qa(a){if(!a.D.k("_SUPERFLY_nosample")&&!R)a.qb?a.ha():(a.qb=h,!m._sf_async_config&&!m._cbq?(a.sa=p(a.ha,a),x(m,"load",a.sa)):a.ha())}l.ha=function(){var a=m._sf_startpt,b=m._sf_endpt;if(y(a))this.ta=y(b)?b-a:o()-a;P.B();this.pa=setInterval(p(this.Y,this),15E3);this.Y()};
l.Y=function(){var a=this.G.U,a=this.a.reading&&+this.a.reading||a>0;if(this.ba<this.M&&!a)this.ba++;else{var b;if(ha===f)b=m.navigator.userAgent,ha=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=ha;b&&!a?this.ba++:(a?this.M=0:Ra(this),this.ba=0,this.P.push(0),this.P.length>18&&this.P.shift(),this.va&&o()-this.N>=this.ca?this.terminate():this.Z())}};
l.Ma=function(){this.P.push(1);var a=0;n(this.P,function(b){a+=b});a<3?(this.ua=h,Ra(this)):(this.terminate(),this.D.create("_SUPERFLY_nosample","1",600))};l.ea=function(){};l.sb=function(){var a=Sa(this);this.X=Math.max(this.X,a)};function Sa(a){return ra(!!a.a.scrollElement)}function Ra(a){var b=a.M,b=b?Math.min(b*2,16):1;a.M=b}l.Ta=function(a,b){if(!R)this.ea(),this.terminate(),this.za=m.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=U(a),b&&(this.a.title=b),this.B(),Qa(this)};
function Ta(a){if(a.za)return h;a=(document.referrer||"").indexOf("://"+m.location.hostname+"/");return a!=-1&&a<9}function Ua(a){a=a.za;if(!a&&(a=document.referrer||"")){var b=C(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=U(b.pathname),a=D(b)}return encodeURIComponent(a)}function Va(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function Pa(a){a=[Ua(a),J("Width"),J("Height")];return ea(a)}
function Wa(a){var b=[],c=a.D.k("_chartbeat4");c&&(n(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.D.remove("_chartbeat4"));return b}l.terminate=function(){this.G.terminate();M(this.Ya);if(this.sa!==f){var a=this.sa,b=m;b.removeEventListener?b.removeEventListener("load",a,j):b.detachEvent&&b.detachEvent("onload",a)}clearInterval(this.pa)};function Xa(a){for(var b=a.offsetLeft,c=a.offsetTop,d=j,e=a.offsetParent;a&&a!==f&&a!==document.body;){if(a===e)b+=a.offsetLeft,c+=a.offsetTop,e=a.offsetParent;if(Ya(a).position==="fixed"){d=h;break}a=a.parentElement}d&&(b+=0,c+=0);return{x:b,y:c}}function Ya(a){var b={},c,d;m.getComputedStyle?c=m.getComputedStyle(a,i):a.currentStyle?d="currentStyle":a.style&&(d="style");n(["position"],function(e){b[e]=c?c[e]||c.getPropertyValue(e):a[d][e]});return b};function Za(a,b){for(var c=b||document.documentElement,d=[],e=i,g=a,s,q,k,w,u,F;g&&g!==c;){s=g.nodeName.toLowerCase();e=g;q=e.nodeName;if((g=g.parentNode)&&g!==document.documentElement){k=g.children;w=0;for(u=0,F=k.length;u<F;u++){if(e===k[u]){s+="["+(1+u-w)+"]";break}k[u].nodeName!==q&&w++}}d.unshift(s)}return d.join("/")};function Z(){"postMessage"in window&&x(m,"message",p(this.mb,this));Y.call(this);for(var a=p(this.Oa,this),b=m._cbq||[];b.length;)a(b.shift());m._cbq={push:a}}aa(Z,Y);
Z.prototype.B=function(){Z.ia.B.call(this);this.ma=i;na(this.a);var a=m.location;E(this.a,"pingServer","ping.chartbeat.net");E(this.a,"title",document.title);E(this.a,"domain",a.hostname);this.a.path=this.a.path?U(this.a.path):Ka(!!this.a.useCanonical);this.S=v(a.hostname);this.a.domain=v(this.a.domain);this.$a=L("c",this.tb,this);this.ab=L("r",this.ub,this);this.J=i};Z.prototype.Xa=function(a){this.ma=a};
Z.prototype.ea=function(){this.D.update("_chartbeat4",["t="+this.Pa,"E="+this.G.O,"x="+Sa(this),"c="+Math.round((o()-this.N)/600)/100,"y="+J("Height"),"w="+sa()].join("&"),3600,f,f,1)};var ma="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR".split(",");l=Z.prototype;
l.Z=function(a){this.Na++;var b={};b.g=this.a.uid;b.g0=H(this.a,"sections");b.g1=H(this.a,"authors");b.g2=H(this.a,"zone");b.g3=H(this.a,"sponsorName");b.g4=H(this.a,"type");!this.a.noCookies&&this.D.isSupported()?b.n=this.rb:b.nc=1;b.c=Math.round((o()-this.N)/600)/100;b.E=this.G.O;var c=Sa(this);this.X=Math.max(this.X,c);b.x=c;b.m=this.X;b.y=J("Height");b.o=J("Width");b.w=sa();b.b=this.ta?this.ta:"";if(this.Fa)b.f=this.Fa;b[""]=oa(this.a);b.t=this.Pa;b.V=55;b.tz=(new Date).getTimezoneOffset();b.sn=
this.Na;c=this.G.U;b.h=encodeURIComponent(this.a.domain);b.p=encodeURIComponent(this.a.path);b.u=this.ka;b.d=encodeURIComponent(this.S);b.j=Math.round((this.M+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;var d=b.c*6E4+this.N;b.eD=P.Q("mousedown",d);b.eM=P.Q("mousemove",d);b.eK=P.Q("keydown",d);b.eR=P.Q("resize",d);b.eS=P.Q("scroll",d);P.xb();P.Za()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Ta(this);if(this.ua)this.ua=j,c?this.J=$a(this):b.r=Ua(this),b.i=Va(this),d=this.a.hudTrackable,
d!==f&&(b.L=d?"1":"0"),this.a.alias&&(b.PA=encodeURIComponent(this.a.alias));if(c){if(this.J){if(b.v=encodeURIComponent(this.J.path),b.K=ab(this.J),this.J.ra>1)b.l1=this.J.ra}else b.v=Ua(this);this.za&&(b.vp=1)}b.A=this.ma?this.ma:"";b._c=ja("utm_campaign",this.a.campaignTag);b._m=ja("utm_medium",this.a.mediumTag);b.z=Wa(this);b.C=this.a.mobileApp?1:"";b.KK=a?ab(a,h):"";a=this.D;c=a.xa;a.xa=j;b.l=c?1:"";this.G.U=0;this.ga((m.location.protocol||"http:")+"//"+this.a.pingServer+"/ping?"+la(b))};
l.mb=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.S)){var c=a.data;A(c)&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Oa(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b.path)+"&title="+Va(this)+"&referrer="+Ua(this)+"&internal="+(Ta(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.S)+"&utoken="+this.ka,a.source.postMessage(b,"*"))}};
l.Oa=function(a){a[0]==="_demo"&&this.a._demo?this.a._demo=this.a._demo+"%2C"+a[1]:this.a[a[0]]=a[1];this.M=0};function bb(a){a=a.replace(/-{2,}/g,"-");a=C(a);a.pathname=U(a.pathname);return a}l.tb=function(a){cb(this,a,"c")};l.ub=function(a){cb(this,a,"r")};
function cb(a,b,c){if(a.va&&o()-a.N>=a.ca)a.terminate();else{var d=b.href||"",d=bb(d);if(!(d.hostname!==m.location.hostname||d.protocol.indexOf("http")!==0)){var d=D(d),e=ta(b,function(a){return a.id}),g=Za(b,e);e&&(g&&(g="/"+g),g="*[@id='"+e.id+"']"+g);e=ca(g);b=Xa(b);c={left:b.x,top:b.y,path:a.a.path,href:d,Ba:e,Aa:g,wa:c,ra:0};a.Z(c);a.D.update("_chartbeat5",db(c),60,j,f,5,function(a){a=a.split(",");return a[2]+","+a[3]})}}}
function ab(a,b){var c=[a.left,a.top,a.Ba,encodeURIComponent(a.Aa),a.wa];b&&c.push(encodeURIComponent(a.href));return c.join("::")}function db(a){var b=encodeURIComponent(a.Aa),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.Ba,b,a.wa].join(",")}
function $a(a){var b=a.D.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e;if(b===1)d=c[0].split(","),e=0;else{var g,s=bb(m.location.href),q=D(s);n(c,function(a,b){var c=a.split(","),s=ga(q,decodeURIComponent(c[3]));if(s===0)return d=c,e=b,j;if(g===f||s<g)g=s,d=c,e=b})}c.splice(e,1);a.D.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),Ba:d[4]||"",Aa:a,wa:d.length>6?d[6]:"c",
ra:b}}l.terminate=function(){M(this.$a);M(this.ab);Z.ia.terminate.call(this)};if(!m.pSUPERFLY){var eb=new Z;m.pSUPERFLY=eb;Z.prototype.virtualPage=Z.prototype.Ta;Z.prototype.activity=Z.prototype.Xa;var $=m.pSUPERFLY_pub;$&&$.virtualPage&&(Z.prototype.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.virtualPage();Z.prototype.Ta.apply(eb,a);$.B();Qa($)});$&&$.addEngagedAdFilter&&(Z.prototype.addEngagedAdFilter=p($.addEngagedAdFilter,$));$&&$.refreshAd&&(Z.prototype.refreshAd=p($.refreshAd,$));Qa(eb);var fb=I.q(h);if(fb){x(m,"message",
qa);var gb;if(gb=fb.getItem("_cb_ip")){var hb=m.location;gb=!(!/^([^.]+[.])?chartbeat\.com$/.test(hb.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(hb.pathname))}gb&&pa()}};function ib(){r(m._cb_shared)||(m._cb_shared={});return m._cb_shared};function jb(){var a=m.location.href,a=a.replace(/-{2,}/g,"-"),a=C(a);a.pathname=U(a.pathname);return a}function kb(a){var b=T.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,g=jb(),s=D(g);n(b,function(a,b){var g=a.split(","),u=ga(s,decodeURIComponent(g[0]));if(u===0)return c=g,d=b,j;if(e===f||u<e)e=u,c=g,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+lb(a);document.cookie=a;return{Hb:c[0],gb:c[1],Eb:c[2],origin:c[3]}}
function lb(a){var b="",c;if(!(a&&a.constructor===Object))return b;a.Ja&&(c=new Date,c.setTime(c.getTime()+a.Ja),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function mb(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return j;if(c.pop()!==d.pop())return j}return h};function nb(){this.Ab="_t_";Y.call(this)}aa(nb,Y);l=nb.prototype;
l.B=function(){nb.ia.B.call(this);na(this.a);var a=m.location;E(this.a,"mabServer","mabping.chartbeat.net");E(this.a,"title",document.title);E(this.a,"domain",a.hostname);E(this.a,"path",Ka(!!this.a.useCanonical));this.S=v(a.hostname);this.a.domain=v(this.a.domain);var b=this.a,a=b.topStorageDomain,b=b.domain,c=m.location.hostname;this.Cb=a?a:mb(c,b)?b:c.replace(/^www\./,"");this.Sa=this.Da=this.Ea="";this.aa=this.qa=j;a=kb({domain:"."+this.Cb,Ja:6E4,path:"/"});if(a!==i)this.Ea=a.origin,this.Da=a.gb,
this.Sa=a.Eb,this.qa=h;this.ca=6E4;this.Ka=0;a=p(this.nb,this);b=ib();for(b=(r(f)&&!r(b.m)?f:b.m)||[];b.length;)a(b.shift());a={push:a};ib().m=a};l.Z=function(){var a=this.G.O,b=ob(this),c,d,e;if(this.qa)c=this.Ea,d=this.Da,e=this.Sa,this.ga(b+"&x="+d+"&v="+e+"&xo="+c+"&e="+a);!this.aa&&r(this.Ra)&&pb(this,this.Ra);this.aa=h};l.ha=function(){var a=m._sf_startpt,b=m._sf_endpt;if(y(a))this.ta=y(b)?b-a:o()-a;P.B();if(this.qa)this.pa=m.setInterval(p(this.Y,this),500);this.Y()};
l.Y=function(){var a,b;this.aa?(a=this.G.O,b=this.Ka*15,a-b>=15&&(this.Z(),this.Ka+=1),a>=45&&m.clearInterval(this.pa)):this.Z()};function ob(a){var b=a.a;return(m.location.protocol||"http:")+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&d="+encodeURIComponent(a.S)+"&u="+a.ka+"&c="+Math.round((o()-a.N)/600)/100}l.ea=function(){};
l.Bb=function(a){var b=a.d,c=i;b!==i&&(c={yb:b.s,pb:b.l});a={status:a.s,data:c,code:a.c,message:a.m};this.aa?pb(this,a):this.Ra=a};function pb(a,b){var c=ob(a),d=b.status,e=b.data;if(d=="s"&&e!==i){if(!e.pb){var g=p(a.ga,a);n(e.yb,function(a,b){g(c+"&x="+b+"&v="+a+"&e=-1")})}}else d=="e"&&a.ga(c+"&type=error&te="+b.code)}l.nb=function(a,b){for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a.shift()==="t"&&this.Bb.apply(this,a)};if(!m.pSUPERFLY_mab)m.pSUPERFLY_mab={},Qa(new nb);})();

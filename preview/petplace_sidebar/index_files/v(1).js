(function(){var e=0,h=1,k=2,l=3,m=4,f='undefined'==typeof __GetI_domain?'px.adhigh.net':__GetI_domain,c,d;'undefined'!==typeof document.hidden?(c='hidden',d='visibilitychange'):'undefined'!==typeof document.mozHidden?(c='mozHidden',d='mozvisibilitychange'):'undefined'!==typeof document.msHidden?(c='msHidden',d='msvisibilitychange'):'undefined'!==typeof document.webkitHidden&&(c='webkitHidden',d='webkitvisibilitychange');gi_tc=function(a){'true'==a&&generate_imp(h)};generate_imp=function(a){var b=
__GetI_vt.pop();b&&(b='cb\x3d'+(new Date).getTime()+'\x26b\x3d'+encodeURIComponent(b.bidResponse),b+='\x26f\x3d'+a,a=document.createElement('script'),a.type='text/javascript',a.src='//'+f+'/p/v_imp.js?'+b,b=document.getElementsByTagName('script')[0],b.parentNode.insertBefore(a,b))};__GetI_vt_main=function(){var a=(new UAParser).getResult();if('undefined'!==typeof __GetI_context&&'app'==__GetI_context)generate_imp(m);else if('iOS'==a.os.name||'Android'==a.os.name||'BlackBerry'==a.os.name||'Windows Phone'==
a.os.name)registerVisibilityChangeEvent()?testVisibility():generate_imp(e);else if('WebKit'==a.engine.name||'Trident'==a.engine.name||'EdgeHTML'==a.engine.name)if('undefined'!=typeof swfobject&&swfobject.hasFlashPlayerVersion('10')){var b={allowscriptaccess:'always',wmode:'opaque'};'WebKit'==a.engine.name?swfobject.embedSWF('//'+f+'/gw.swf?ua\x3dwk\x26cb\x3d'+(new Date).getTime(),'gw','1px','1px','9',null,null,b):('Trident'==a.engine.name||'EdgeHTML'==a.engine.name)&&swfobject.embedSWF('//'+f+'/gw.swf?ua\x3die\x26cb\x3d'+
(new Date).getTime(),'gw','100%','100%','9',null,null,b);'Safari'==a.browser.name?(setTimeout(function(){document.getElementById('gw').width=2},150),setTimeout(function(){document.getElementById('gw').width=1},300)):('Trident'==a.engine.name||'EdgeHTML'==a.engine.name)&&setInterval(function(){'1px'==document.getElementById('gw_wrapper').style.width?document.getElementById('gw_wrapper').style.width='2px':document.getElementById('gw_wrapper').style.width='1px'},1E3/11)}else registerVisibilityChangeEvent()?
testVisibility():generate_imp(e);else'Gecko'==a.engine.name?'undefined'!==window.mozPaintCount?setInterval(function(){0<window.mozPaintCount&&generate_imp(k)},1E3):generate_imp(e):registerVisibilityChangeEvent()?testVisibility():generate_imp(e)};registerVisibilityChangeEvent=function(){if('undefined'===typeof document.addEventListener||'undefined'===typeof document[c])return!1;document.addEventListener(d,testVisibility,!1);return!0};getDocumentVisibility=function(){return'undefined'===typeof document[c]?
!0:'false'!=document[c]};testVisibility=function(){getDocumentVisibility()&&generate_imp(l)};var g=document.createElement('script');g.type='text/javascript';g.src='//'+f+'/ua-parser.min.js';g.onload=__GetI_vt_main;document.body.appendChild(g)})();
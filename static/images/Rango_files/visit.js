try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1627583359876899']($dv,window,'dcdd512186f040678cf8624954806b56','tps20245.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=('https://tps.doubleverify.com/visit.jpg'||(window.location.protocol+'//tps30.doubleverify.com/visit.jpg'))+'?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 21722714, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 11268475, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 22386271, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 1134, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 868983, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 651681427938, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("dcdd512186f040678cf8624954806b56",false);$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});var dvObj=$dv;var impId='dcdd512186f040678cf8624954806b56';var htmlRate=20;var runTag=-1;var lab=0;var sources=0;var adid='-3840482334080463001';var urlTypeId=1033;var ddt=1;var bundleID='';var date='20210729';var prefix='IBV20210726';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){try{try{!function(){var u={dvp_ac_version:"0507"},l=window,e=0,t=l.navigator,n=l.location,r=window.chrome,a=void 0;try{a=window.top}catch(e){}try{for(;l.parent&&l!=l.parent&&l.parent.document&&(l=l.parent,!(10<e++)););}catch(e){}var c={};function m(e,t){c[e]=!!t}function o(e){var t,r=0;for(t in e)e[t]&&(r+=Math.pow(2,t));return r}var p=function(e){for(var t={};0<e;){for(var r=1,n=0;2*r<=e;)r*=2,n++;t[n]=!0,e-=r}return t}(sources),g=l.document;function v(e){return g.querySelectorAll?g.querySelectorAll(e):null}m(0,l==a),m(1,""==g.title);var d=function(e){return g.querySelector?g.querySelector(e):null};function s(){function e(e,t){for(var r=0;r<e.length;r++){var n=e.item(r).getBoundingClientRect();if(n.height*n.width>1.1*t)return u.dvp_adad=parseInt(n.width)+"x"+parseInt(n.height),1}}var t,r;3==ddt&&(a=(t=parseInt(l.document.documentElement.clientWidth||0))*(r=parseInt(l.document.documentElement.clientHeight||0)),u.dvp_adfr=t+"x"+r,0<(r=g.getElementsByTagName("video")).length&&m(33,!0),0==a?m(30,!0):(m(30,!1),e(r,a)&&m(6,!0),e(g.getElementsByTagName("iframe"),a)&&m(32,!0)));var n=[],a=2==ddt||3==ddt,o=v('script[src*="player/player.js?p="]');if(o&&0<o.length)for(m(29,!0),a&&(u.DVPF_IBV_PLAYER=1),i=0;i<o.length;i++)(d=o[i].src)&&(c=d.match(/appb=([^&]*)/))&&c[1]&&n.push(c[1]);var d,c,p=v('script[id="aniviewJS"]');if(p&&0<p.length)for(m(29,!0),a&&(u.DVPF_IBV_PLAYER=1),i=0;i<p.length;i++)(d=p[i].innerText)&&(c=d.match&&d.match(/AV_APPPKGNAME=([^&]*)/))&&c[1]&&n.push(c[1]);u.dvp_acibv=n.join("_"),a&&(u.DVPF_IBV_BUNDLE=n.join(";"))}a==l&&(m(23,"top"==g.title),m(19,d('iframe[src="subframe.html"]')),m(45,d('iframe[src$=".html"]:not([src*="/"])'))),s(),setTimeout(function(){s(),u.bsigr!=o(c)&&(m(31,!0),u.bsigr=o(c),dvObj.registerEventCall(impId,u),p[31]&&f(""))},3e3),m(34,!!l.__monet__),t&&t.getBattery?t.getBattery().then(function(e){u.dvp_ndp2=e.charging,dvObj.registerEventCall(impId,u.dvp_ndp2)}):u.dvp_ndp2="NA",m(4,!(!t||!t.webdriver));var _=t&&Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"hardwareConcurrency");function f(e){var a,o,t="",d=n&&n.hostname;function r(e,t){var r,n;XMLHttpRequest&&(r=new XMLHttpRequest,(n=new FormData).append("key",prefix+"/"+date+"/"+a+"/"+d+"/"+o+"_"+adid+"_"+impId+"_"+t+".html"),n.append("file",e.document.documentElement&&e.document.documentElement.outerHTML),r.open("POST","https://storage.googleapis.com/gp-ms-us-gcs-fraud",!0),r.send(n))}3==ddt&&bundleID&&0<bundleID.length&&(d=0!=(2&urlTypeId)&&n?n.hostname+"/"+bundleID:bundleID),(new Date).getTime()%100<htmlRate&&(1==lab||function(){if(1==runTag){if(0==sources)return 1;for(i in p)if(c[i])return t="bit_"+i,1}}())&&(0==(a=e+t).length&&(a="default"),o=function(){var e=[];for(i in c)c[i]&&e.push(i);return e.join("_")}()||"default",r(l,"top"),l!=window&&r(window,"iframe_tag"),l!=window.parent&&r(window.parent,"iframe_tag_parent"),l!=window.parent.parent&&r(window.parent.parent,"iframe_tag_parent_parent"),(e=g.getElementById&&g.getElementById("adloaderframe"))&&r(e.contentWindow,"iframe_top_child"),m(3,!0))}m(5,!(!(d=(d=_&&_.value&&_.value.toString())||_&&_.get&&_.get.toString())||!d.indexOf||-1!=d.indexOf("native code"))),m(8,!!(g.__fxdriver_evaluate||g.__fxdriver_unwrapped||g.__fxdriver_script_fn||g.documentElement&&g.documentElement.getAttribute&&g.documentElement.getAttribute("fxdriver"))),m(11,t&&t.appVersion&&t.appVersion.toLowerCase&&String().indexOf&&-1!=t.appVersion.toLowerCase().indexOf("headless")),m(35,_=function(){try{a&&a.navigator&&a.navigator.deviceMemory,a&&a.chrome;return!(window==a)}catch(e){return!1}}()),t=d=!1,_&&(d=(window.navigator&&window.navigator.deviceMemory)!==(a.navigator&&a.navigator.deviceMemory),t=!r!=!a.chrome),m(36,d),m(37,t),m(38,r&&!r==!r.app),m(39,!r),m(40,!!(l.webdriver||g.__webdriver_unwrapped||g.__webdriver_script_fn||g.__webdriver_evaluate||g.documentElement&&g.documentElement.getAttribute("webdriver"))),m(47,!(!l.__nightmare&&!l.phantom)),f(""),u.bsigr=o(c),dvObj.registerEventCall(impId,u)}()}catch(e){try{dvObj.registerEventCall(impId,{dvp_ace:String.prototype.substring?String(e).substring(0,150):String.prototype.slice?String(e).slice(0,150):"String Error."})}catch(e){dvObj.registerEventCall(impId,{dvp_ace:"Generic Error."})}}}catch(e){}});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}
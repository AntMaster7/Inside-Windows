if(typeof(COMSCORE)=="undefined"){var COMSCORE={};}if(typeof COMSCORE.SiteRecruit=="undefined"){COMSCORE.SiteRecruit={version:"5.1.3",configUrl:"broker-config.js",builderUrl:"builder.js",allowScriptCaching:false,CONSTANTS:{COOKIE_TYPE:{ALREADY_ASKED:1,DD_IN_PROGRESS:2},STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}}};
COMSCORE.SiteRecruit.Utils=(function(){var A=COMSCORE.SiteRecruit;return{location:document.location.toString(),loadScript:function(D,C){if(C&&!A.allowScriptCaching){D=A.Utils.appendQueryParams(D,(new Date()).getTime());
}var B=document.createElement("script");B.src=D;document.body.appendChild(B);},getBrowser:function(){var C={};
C.name=navigator.appName;C.version=parseInt(navigator.appVersion,10);if(C.name=="Microsoft Internet Explorer"){if(C.version>3){var B=navigator.userAgent.toLowerCase();
if(B.indexOf("msie 5.0")==-1){C.ie=true;}if(B.indexOf("msie 7")!=-1){C.ie7=true;}}}if(C.name=="Netscape"||C.name=="Opera"){if(C.version>4){C.mozilla=true;
}}return C;},getDevice:function(){var E=new RegExp("iphone|ipad|ipod|android|opera mini|blackberry|windows (phone|ce)|iemobile|htc|nokia|bb10","i");
var D=new RegExp("(?:; ([^;)]+) Build/.*)?\bSilk/([0-9._-]+)\b(.*\bMobile Safari\b)?","i");
var B=self.screen.availWidth>self.screen.availHeight?self.screen.availWidth:self.screen.availHeight;
var C={};if(E.test(navigator.userAgent)||D.test(navigator.userAgent)){C.type=2;if(B>=770){C.type=3;
}}else{C.type=1;}return C;},fireBeacon:function(B){setTimeout(function(){if(B.indexOf("?")==-1){B+=(/\?/.test(B)?"&":"?")+(new Date()).getTime();
}else{B+="&"+(new Date()).getTime();}var C=new Image();C.src=B;},1);},appendQueryParams:function(C,B){if(C==null||B==null){}if(!C){return B;
}else{C=C.replace("?","")+"?";if(B){C+=B.toString().replace("?","");}return C;}},getRandom:function(N){var R=1000000000;
function D(X,U,V,T,Y){var W=Math.floor(X/V);W=U*(X-(W*V))-(W*T);return Math.round((W<0)?(W+Y):W);
}var Q=2147483563,C=2147483399,S=40014,E=40692,K=53668,O=52774,I=12211,M=3791,H=67108862;
var F=(Math.round(((new Date()).getTime()%100000))&2147483647),B=F;var P=[32],G=0;
for(;G<19;G++){B=D(B,S,K,I,Q);}for(G=0;G<32;G++){B=D(B,S,K,I,Q);P[31-G]=B;}B=D(B,S,K,I,Q);
F=D(F,E,O,M,C);var L=Math.round((P[Math.floor(P[0]/H)]+F)%Q);var J=Math.floor(L/(Q/(R+1)))/R;
if(typeof(N)=="undefined"){return J;}else{return Math.floor(J*(N+1));}},getExecutingPath:function(E){var B=document.getElementsByTagName("script");
for(var C=B.length-1;C>=0;C--){var D=B[C].src;this.scriptUrl=D;if(D.indexOf("/"+E)!=-1){return D.replace(/(.*)(\/.*)$/,"$1/");
}}},JSONDeserialize:function(D){try{if(D===""){D='""';}if(D.length>4){if(window.JSON&&window.JSON.parse){if(D.indexOf('"undefined"')==-1){return window.JSON.parse(D.replace("undefined",'"undefined"'));
}else{return window.JSON.parse(D);}}else{var K=D.substring(1,D.indexOf(","))+D.substring(D.indexOf("}")+1,D.length-1);
var L=D.slice(D.indexOf("name"),D.indexOf("}")).replace(/"/gi,"");var C=D.substring(D.indexOf("[")+1,D.indexOf("]")).replace(/"/gi,"");
var G=K.substring(0,K.indexOf("surveys")-1).replace(/"/gi,"")+K.substring(K.indexOf("],")+2,K.length).replace(/"/gi,"");
var H=L.split(",");var J=C.split(",");var E=G.split(",");var B={};B.version=E[0].substring(E[0].indexOf(":")+1);
B.state={};B.state.name=H[0].substring(H[0].indexOf(":")+1);B.state.url=H[1].substring(H[1].indexOf(":")+1);
B.state.timestamp=parseInt(H[2].substring(H[2].indexOf(":")+1));B.lastinvited=parseInt(E[1].substring(E[1].indexOf(":")+1));
B.userid=E[2].substring(E[2].indexOf(":")+1);B.vendorid=parseInt(E[3].substring(E[3].indexOf(":")+1));
B.surveys=new Array();for(var F=0;F<J.length;F++){B.surveys.push(J[F]);}B.graceperiod=parseInt(E[4].substring(E[4].indexOf(":")+1));
B.trackertimestamp=parseInt(E[5].substring(E[5].indexOf(":")+1));return B;}}else{return null;
}}catch(I){return null;}},JSONSerialize:function(H){try{var D=typeof(H);if(D!="object"||H===null){if(D=="string"){H='"'+H+'"';
}return String(H);}else{var G,C,B=[],E=(H&&H.constructor==Array);for(G in H){C=H[G];
D=typeof(C);if(D!="function"){if(D=="string"){C='"'+C+'"';}else{if(D=="object"&&C!==null){C=this.JSONSerialize(C);
}}B.push((E?"":'"'+G+'":')+String(C));}}return(E?"[":"{")+String(B)+(E?"]":"}");}}catch(F){return"";
}}};})();COMSCORE.SiteRecruit.Utils.UserPersistence={maxNumberOfPids:6,CONSTANTS:{STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}},getCookieName:function(){var A;
if(COMSCORE.SiteRecruit.Broker&&COMSCORE.SiteRecruit.Broker.config){A=COMSCORE.SiteRecruit.Broker.config.cookie;
if(A.name){return A.name;}}return"";},getDefaultCookieOptions:function(){var A={path:"/",domain:""};
return A;},getVendorId:function(){var A=1;return A;},createCookie:function(C,D,B){D=escape(D);
if(B.duration&&B.duration<0){var A=new Date();A.setTime(A.getTime()+B.duration*24*60*60*1000);
D+="; expires="+A.toGMTString();}else{if(B.duration=="s"){if(!(/msie|rv\:11|edge/i.test(navigator.userAgent))){D+="; expires=";
}}else{var A=new Date();A.setTime(A.getTime()+10*365*24*60*60*1000);D+="; expires="+A.toGMTString();
}}if(B.path){D+="; path="+B.path;}else{}if(B.domain){D+="; domain="+B.domain;}if(B.secure){D+="; secure";
}if(B.graceperiod){D+="; graceperiod="+B.graceperiod;}document.cookie=C+"="+D;return true;
},getCookieValue:function(A){var B=document.cookie.match("(?:^|;)\\s*"+A+"=([^;]*)");
return B?unescape(B[1]):false;},removeCookie:function(B,A){A=A||{};A.duration=-999;
this.createCookie(B,"",A);},createUserObj:function(E){var D=new Date();var F=E.pid;
var C=E.url;var G=this.CONSTANTS.STATE_NAME.IDLE;if(E.statename){G=E.statename;}var B=D.getTime();
if(E.timestamp){B=E.timestamp;}var I=this.getCookieName();if(E.cookiename){I=E.cookiename;
}if(!E.cookieoptions){E.cookieoptions=this.getDefaultCookieOptions();}var H={};H.version="5.1";
H.state={};H.state.name=G;H.state.url=C;H.state.timestamp=B;H.lastinvited=B;H.userid=D.getTime().toString()+Math.floor(Math.random()*1e+16).toString();
H.vendorid=this.getVendorId();H.surveys=new Array();H.surveys.push(F);H.graceperiod=5;
var A=COMSCORE.SiteRecruit.Utils.JSONSerialize(H);this.createCookie(I,A,E.cookieoptions);
return H;},setUserObj:function(H){var I,D,J,C;var L,F,E;var B;var K=this.getUserObj(H);
if(!K){K=this.createUserObj(H);}B=new Date();C=0;L=this.getCookieName();F=5;E=0;J=this.CONSTANTS.STATE_NAME.IDLE;
I=H.pid;if(H.url){D=H.url;}else{if(K.state.url){D=K.state.url;}}if(H.statename){J=H.statename;
}else{if(K.state&&K.state.name){J=K.state.name;}}if(H.timestamp){C=H.timestamp;}else{if(K.state&&K.state.timestamp){C=K.state.timestamp;
}}if(H.cookiename){L=H.cookiename;}if(!H.cookieoptions){H.cookieoptions=this.getDefaultCookieOptions();
}if(H.graceperiod){F=H.graceperiod;}else{if(K.graceperiod){F=K.graceperiod;}}if(H.trackertimestamp){E=H.trackertimestamp;
}else{if(K.trackertimestamp){E=K.trackertimestamp;}}K.lastinvited=B.getTime();if(I){var A=false;
for(i=0;i<K.surveys.length;i++){if(K.surveys[i]&&K.surveys[i].toLowerCase()==I.toLowerCase()){A=true;
}}if(A==false){if(K.surveys.length){if(K.surveys.length<this.maxNumberOfPids){K.surveys.push(I);
}else{K.surveys.splice(0,1);K.surveys.push(I);}}else{K.surveys.push(I);}}for(i=0;
i<K.surveys.length;i++){if(K.surveys[i]==null){K.surveys.splice(i,1);}}}if(J){K.state.name=J;
K.state.url=D;K.state.timestamp=C;K.graceperiod=F;K.trackertimestamp=E;}var G=COMSCORE.SiteRecruit.Utils.JSONSerialize(K);
this.createCookie(L,G,H.cookieoptions);return K;},getUserObj:function(B){var D=this.getCookieName();
if(B.cookiename){D=B.cookiename;}var A=this.getCookieValue(D);if(A&&A!=""){var C=COMSCORE.SiteRecruit.Utils.JSONDeserialize(A);
if(C&&C.version&&!isNaN(C.version)&&C.version>=4.6){return C;}else{}}return null;
}};COMSCORE.SiteRecruit.DDKeepAlive=(function(){var D=1000,B=Math.random(),E;var C=COMSCORE.SiteRecruit;
var A=C.Utils;return{start:function(){var F=this;E=setInterval(function(){if(C.Broker.isDDInProgress()&&F.isTrackerPageOpen()){F.setDDTrackerCookie();
}else{if(!F.isTrackerPageOpen()){F.handleClosedTrackerPage();}else{F.stop();}}},D);
},stop:function(){clearInterval(E);},isTrackerPageOpen:function(){var J={};J.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;
var M=A.UserPersistence.getUserObj(J);var I=(new Date()).getTime();var L=true;var F=false;
var H;if(M&&M.state&&M.state.name==C.CONSTANTS.STATE_NAME.DDINPROGRESS&&M.state.timestamp&&M.trackertimestamp){var N=I-M.trackertimestamp;
var G=N/1000;if(COMSCORE.SiteRecruit.Builder&&COMSCORE.SiteRecruit.Builder.invitation&&COMSCORE.SiteRecruit.Builder.invitation.config){H=COMSCORE.SiteRecruit.Builder.invitation.config.trackerGracePeriod;
}else{if(M.gracePeriod){H=M.gracePeriod;}}if(H){H=parseInt(H);var K=2*H*1000;F=(N<K);
if(!F){L=false;}}}return L;},handleClosedTrackerPage:function(){var G={};var F=C.Broker.config.cookie;
G.cookiename=F.name;G.statename=C.CONSTANTS.STATE_NAME.IDLE;G.cookieoptions={path:F.path,domain:F.domain};
G.url=escape(A.location);G.timestamp=(new Date()).getTime();A.UserPersistence.setUserObj(G);
this.stop();},setDDTrackerCookie:function(){var G=C.Broker.config.cookie;var F={};
F.cookiename=G.name;var H=A.UserPersistence.getUserObj(F);var F={};F.cookiename=G.name;
F.cookieoptions={path:G.path,domain:G.domain};if(document.hidden==false||document.hidden==undefined){F.url=escape(A.location);
}else{F.url=A.UserPersistence.getUserObj(G.name).state.url;}F.statename=C.CONSTANTS.STATE_NAME.DDINPROGRESS;
F.timestamp=(new Date()).getTime();if(COMSCORE.SiteRecruit.Builder&&COMSCORE.SiteRecruit.Builder.invitation&&COMSCORE.SiteRecruit.Builder.invitation.config){F.pid=COMSCORE.SiteRecruit.Builder.invitation.config.projectId;
F.graceperiod=COMSCORE.SiteRecruit.Builder.invitation.config.trackerGracePeriod;}else{if(H&&H.gracePeriod){F.graceperiod=H.graceperiod;
}}A.UserPersistence.setUserObj(F);}};})();COMSCORE.SiteRecruit.PagemapFinder=(function(){var B;
var C=COMSCORE.SiteRecruit;var A=C.Utils;return{getTotalFreq:function(){return B;
},find:function(K){var N=0,E;var J=K;var H=[];var L=false;B=0;for(var F=0;J&&F<J.length;
F++){var M=false;var I=J[F];if(I){var D=new RegExp(I.m,"i");if(A.location.search(D)!=-1){var G=J[F].prereqs;
M=true;if(G){if(!this.isMatchContent(G.content)){M=false;}if(!this.isMatchCookie(G.cookie)){M=false;
}if(!this.isMatchLanguage(G.language)){M=false;}}}if(M){if(I.halt){L=true;break;}else{H.push(I);
B=I.f;}}}}if(L==true){H=null;B=0;return null;}return this.choosePriority(H);},choosePriority:function(D){var F=null;
for(var E=0;E<D.length;E++){if(F==null){F=D[E];B=D[E].f;}else{if(F.p<D[E].p){F=D[E];
B=D[E].f;}}}return F;},isMatchContent:function(J){var N=true,L=0;while(N&&L<J.length){var F=false;
var K=false;var D=J[L];if(D.element){var M=document.getElementsByTagName(D.element);
var I=true;for(var G=0;G<M.length;G++){var E=new RegExp(D.elementValue);if(E){if(E.test(M[G].innerHTML)){if(I){I=false;
}F=true;}}else{F=true;}if(D.attrib&&D.attrib.length){var O=M[G].attributes.getNamedItem(D.attrib);
var H=new RegExp(D.attribValue);if(O){if(D.attribValue&&D.attribValue.length){if(H.test(O.value)){K=true;
}}else{K=true;}}}else{K=true;}}}if(!F||!K){N=false;}L++;}return N;},isMatchCookie:function(H){var I=true,E=0;
while(I&&E<H.length){var D=H[E],F=A.UserPersistence.getCookieValue(D.name);if(F&&F!==null){var G=new RegExp(D.value,"i");
I=G.test(F);E++;}else{return false;}}return I;},isMatchLanguage:function(D){var F=navigator.language||navigator.userLanguage;
F=F.toLowerCase();if(!D){return true;}var E=new RegExp(D);if(E.test(F)){return true;
}return false;}};})();COMSCORE.SiteRecruit.Broker=(function(){var C=COMSCORE.SiteRecruit;
var A=C.Utils;var B="!";return{init:function(){C.device=A.getDevice();C.browser=A.getBrowser();
C.executingPath=A.getExecutingPath("broker.js");if(C.browser.ie||C.browser.mozilla){A.loadScript(C.executingPath+C.configUrl,true);
}else{return;}},start:function(){this.init();},run:function(){if(this.config.mobile){var K=new RegExp(this.config.mobile.match,"i");
var H=new RegExp(this.config.mobile.kmatch,"i");if(this.config.mobile.halt==true&&(K.test(navigator.userAgent)||H.test(navigator.userAgent))){return;
}}this.config.Events.beforeRecruit();if(this.config.objStoreElemName){if(C.browser.ie){COMSCORE.SiteRecruit.Utils.UserPersistence.initialize();
}else{return;}}if(C.version!==this.config.version){return;}var G=this.config.testMode;
var N;var J;N=(A.UserPersistence.getCookieValue("tstMode")==false)?false:true;J=(G||N);
if(this.isDDInProgress()){this.processDDInProgress();}if(!G||this.isDDInProgress()){var I={};
I.cookiename=this.config.cookie.name;var M=A.UserPersistence.getUserObj(I);var L=new Date();
var E=this.config.cookie.duration;var F=L.getTime()-(E*24*60*60*1000);if(M){if(M.lastinvited>F){return;
}}}if(this.findPageMapping()&&!(COMSCORE.SiteRecruit._halt&&COMSCORE.SiteRecruit._halt===true)){if(J){if(this.pagemap){this.loadBuilder();
}return;}var D=A.getRandom();if(D<=C.PagemapFinder.getTotalFreq()){if(this.pagemap){this.loadBuilder();
}}else{return;}}else{return;}},isDDInProgress:function(){var D=false;var E={};E.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;
var F=A.UserPersistence.getUserObj(E);if(F){if(F.state.name==C.CONSTANTS.STATE_NAME.DDINPROGRESS){D=true;
}}return D;},processDDInProgress:function(){C.DDKeepAlive.start();},findPageMapping:function(){this.pagemap=C.PagemapFinder.find(this.config.mapping);
return this.pagemap;},loadBuilder:function(){var D=C.executingPath+C.builderUrl;A.loadScript(D);
}};})();COMSCORE.isDDInProgress=COMSCORE.SiteRecruit.Broker.isDDInProgress;COMSCORE.SiteRecruit.OnReady=(function(){var A=COMSCORE.SiteRecruit;
var B=A.Utils;return{onload:function(){if(A.OnReady.done){return;}A.OnReady.done=true;
A.Broker.start();if(A.OnReady.timer){clearInterval(A.OnReady.timer);}if(document.addEventListener){document.removeEventListener("DOMContentLoaded",A.OnReady.onload,false);
}if(window.ActiveXObject){}},listen:function(){var G=document.domain.split(".");G="."+G[G.length-2]+"."+G[G.length-1];
var C="";if(/xbox/i.test(G)){C="xboxresearch";}else{C="msresearch";}var F=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(C);
if(/DDINPROGRESS/i.test(F)){COMSCORE.SiteRecruit.Broker.config={cookie:{name:C,path:"/",domain:G,duration:90,rapidDuration:0,expireDate:""}};
COMSCORE.SiteRecruit.Broker.processDDInProgress();}var D=document.domain.split(".");
var H="";D=D[D.length-2]+"."+D[D.length-1];var E=new RegExp(D,"i");if(document.referrer!=""){H=document.referrer;
}if(H!=""&&H!=undefined&&!(E.test(H))){A.Broker.delayConfig=true;}else{A.Broker.delayConfig=false;
}if(/Chrome/i.test(navigator.userAgent)){if(/loading|uninitialized/i.test(document.readyState)){document.addEventListener("DOMContentLoaded",A.OnReady.onload,false);
}else{A.OnReady.onload();}}else{if(/WebKit|khtml/i.test(navigator.userAgent)){A.OnReady.timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(A.OnReady.timer);
delete A.OnReady.timer;A.OnReady.onload();}},10);}else{if(window.ActiveXObject){COMSCORE.SiteRecruit.OnReady.waitForLoad=setInterval(function(){try{document.documentElement.doScroll("left");
}catch(I){return;}COMSCORE.SiteRecruit.OnReady.waitForLoad=clearInterval(COMSCORE.SiteRecruit.OnReady.waitForLoad);
COMSCORE.SiteRecruit.OnReady.onload();},1000);}else{if(document.addEventListener){if(/loading|uninitialized/i.test(document.readyState)){document.addEventListener("DOMContentLoaded",A.OnReady.onload,false);
}else{A.OnReady.onload();}}else{if(window.addEventListener){window.addEventListener("load",A.OnReady.onload,false);
}else{if(window.attachEvent){return window.attachEvent("onload",A.OnReady.onload);
}}}}}}},f:[],done:false,timer:null};})();COMSCORE.SiteRecruit.OnReady.listen();}
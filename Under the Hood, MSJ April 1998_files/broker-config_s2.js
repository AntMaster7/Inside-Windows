/*
Copyright (c) 2014, comScore Inc. All rights reserved.
version: 5.0.3
*/
COMSCORE.SiteRecruit.Broker.config = {
	version: "5.0.3",
	//TODO:Karl extend cookie enhancements to ie userdata
	testMode: false,
	// START 5.1.3
	cddsDomains: 'www.windowsphone.com|microsoftstore.com|xbox.com|office.com',
	cddsInProgress: 'cddsinprogress',
	domainSwitch: 'tracking3p',
	domainMatch: '([\\da-z\.-]+\.com)',
	delay: 0,
	// END 5.1.3
	
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookieEnabled : false,
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",
	
	//events
	Events: {
		beforeRecruit: function() {
			
if(/surface\/en-us\/products\/surface-pro-3/i.test(document.location.toString() )){
			for(var srI=1; srI < COMSCORE.SiteRecruit.Broker.config.mapping.length; srI++){ 
				if(/surface\/en-us\/products\/surface-pro-3/i.test(COMSCORE.SiteRecruit.Broker.config.mapping[srI].m) ){
					if(/oneconstab/i.test(document.location.toString())){
						COMSCORE.SiteRecruit.Broker.config.mapping[srI].f = 0.35;
					}else if(/surface\/en-us/i.test(document.referrer)){
						//COMSCORE.SiteRecruit.Broker.config.mapping[srI].f = 0.1;
						COMSCORE.SiteRecruit.Broker.config.mapping[srI].halt = true;
					}else{
						COMSCORE.SiteRecruit.Broker.config.mapping[srI].halt = true;
					}
				}
			}
}		
			
					}
	},
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/pl-pl/download', c: 'inv_c_p162095591-DLC-PL-PL.js', f: 0.1761, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/buy/(tr-tr|en-ca|en-gb|en-au|ja-jp|de-de|fr-fr|ru-ru|es-es|it-it|nl-nl)', c: 'inv_c_blank.js', f: 0, p: 5  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windows/enterprise/', c: 'inv_c_p38361073-DDS.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/internet-explorer/(?!welcome\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 1  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windowsembedded/en-us/', c: 'inv_c_p250749567-2403.js', f: 0.8, p: 1 	}
	,{m: '(//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv))|(/learning/en/us/(s|S)yndication(p|P)age\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 3  ,halt: true 	}
	,{m: 'powerbi\.microsoft\.com\/en.*', c: 'inv_c_p218292485_2694.js', f: 0.5, p: 1 	}
]
};

if(/windows\/en-us\/xp\/(top-questions|pcs-and-offers|end-of-xp-support)/i.test(document.referrer)) {
	COMSCORE.SiteRecruit._halt = true;
}

// START 5.1.3
function _set_SessionCookie(_name, _val) {	  
	if (_name == COMSCORE.SiteRecruit.Broker.config.domainSwitch) {
		var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.domainMatch,'i');
		if (r.test(_val)) {
			_val = RegExp.$1 + RegExp.$2;
			var c = _name + '=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
			document.cookie = c; 
		}
	}else if(COMSCORE.isDDInProgress()){	
 		if(_name == "captlinks"){
 			if(/^http(s)?\:/i.test(_val)){
				var _reg = new RegExp("http(s)?://"+document.domain+"/", "i");
 				var _val = _val.replace(_reg, '');
 			}
 			if(_val && _val.length > 2){
				c_vals = readCookie("captlinks");

				if(c_vals){
   				if(c_vals.indexOf(_val) == -1){
   					var str = c_vals +"," + _val;
   					if(str.length <= 1440){
   						_val = str;
   					}else{ _val=false; }
   				}else{ _val = false; }
  			}
 			}
 		}
  	if(_val){
  		var c = _name+'=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
    	document.cookie = c;
    }
	}
}
// END 5.1.3
var gIdelay = 0;
if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr") == 1) {
	gIdelay = 5000;
}
setTimeout(function(){_set_SessionCookie("graceIncr", 0)},gIdelay);
//_set_SessionCookie("graceIncr", 0);


// START 5.1.3
var allLinks = document.getElementsByTagName("a");
for (var i = 0, n = allLinks.length; i < n;i++) {
	var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.cddsDomains,'i');

	if (r.test(allLinks[i].href)) {
		if (allLinks[i].addEventListener) {
			allLinks[i].addEventListener('click', function(event) {
				if (r.test(this.href)) {
					_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, this.href);
				}
			}, false);
		}
		else {
			hrefURL = allLinks[i].href;
			allLinks[i].attachEvent('onclick', function() {
				_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, hrefURL);
			});
		}
	}
}
// END 5.1.3

//START 5.1.3 captLink-graceIncr handlers
function SRappendEventListener(srElement, _name, _val){
	if(srElement.addEventListener){
			srElement.addEventListener('click',function(event){	_set_SessionCookie(_name, _val); },false);
	}else{
			srElement.attachEvent('onclick',function(){	_set_SessionCookie(_name, _val); });
	}
}
function checkLink(){
 for (var i = 0, n = allLinks.length; i < n; i++){
	var _clickURL = allLinks[i].href;
	if(_clickURL && _clickURL != '' && !(/javascript\:void(0)/i.test(_clickURL)) ){	
		if(/[\w\.]+\/surface/i.test(document.location.toString())){
			//if(/https:\/\/((login|accountservices|myservice)\.(live|passport|surface)|login\.live|msacademicverify|(o15\.officeredir|office)\.microsoft|login|LiveLogin)\.(com|net)/i.test(_clickURL)){
			if(/CheckOfferEligibility|login\.live|msacademicverify|(o15\.officeredir|office)\.microsoft\.com|login|LiveLogin/i.test(_clickURL)){
				SRappendEventListener(allLinks[i], "graceIncr", _clickURL);
				SRappendEventListener(allLinks[i], "captlinks",_clickURL);
			}
		}
	}
 }
}
setTimeout("checkLink();", 3000);
//END 5.1.3 captLink-graceIncr handlers

// START 5.1.3
	function crossDomainCheck() {
		if (intervalMax > 0) {
			intervalMax --;
			
			var cookieName = COMSCORE.SiteRecruit.Broker.config.cddsInProgress;
			
			if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(cookieName) != false ) {
				COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie();
				COMSCORE.SiteRecruit._halt = true;
				clearCrossDomainCheck();
			}
		}
		else {
			clearCrossDomainCheck();
		}
	}

	function clearCrossDomainCheck() {
		window.clearInterval(crossDomainInterval);
	}

	var intervalMax = 10;
	
	var crossDomainInterval = window.setInterval('crossDomainCheck()', '1000');
//END CROSS_DOMAIN DEPARTURE FUNCTIONALITY

//CUSTOM - ADD 5 SECOND DELAY ON CALLING BROKER.RUN()
if (COMSCORE.SiteRecruit.Broker.delayConfig == true)  {
	COMSCORE.SiteRecruit.Broker.config.delay = 5000;
}

//CUSTOM - ADD 20 SECOND DELAY ON CALLING BROKER.RUN() FOR SMB SITES
if(/www\.microsoft\.com\/((en-(ca|in|us)|fr-ca|fr-fr|pt-br|ru-ru|zh-cn)\/business|(en-gb|ja-jp|de-de)\/smb)/i.test(window.location.toString())){
	COMSCORE.SiteRecruit.Broker.config.delay = 20000;
}
window.setTimeout('COMSCORE.SiteRecruit.Broker.run()', COMSCORE.SiteRecruit.Broker.config.delay);
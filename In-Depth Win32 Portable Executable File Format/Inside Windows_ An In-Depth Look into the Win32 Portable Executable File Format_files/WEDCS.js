window.pmc=window.pmc||{};window.pmc.codeVersion="2015jan21v1";window.pmc.debugConsoleLogEnabled=!1;window.pmc.debugLogMsgs=[];window.pmc.debugLog=function(inMsg){window.pmc.debugLogMsgs.push(inMsg);window.pmc.debugConsoleLogEnabled&&console.log(inMsg)};window.pmc.formatString=function(inValue){var newStr;if(typeof inValue=="undefined")return"";else newStr=typeof inValue=="string"?inValue.toLowerCase().trim():inValue.toString().toLowerCase().trim();return newStr.replace(/"/g,"'")};window.pmc.passScriptCheck=function(inText){return typeof inText!="undefined"&&inText.match(/<script/i)?(window.pmc.debugLog("passScriptCheck failed"),!1):!0};window.pmc.setAttribute=function(inJQObj,inAttrName,inAttrValue){typeof inJQObj!="undefined"&&inJQObj.length!==0&&inAttrName&&inAttrValue!==""&&inJQObj.attr(inAttrName,inAttrValue)};window.pmc.getMetaTagContent=function(inMTName){try{var myMTContent=jQuery("meta[name='"+inMTName+"']");return myMTContent.length>0?myMTContent[myMTContent.length-1].content:null}catch(e){return null}};window.pmc.setMetaTagContent=function(inMTName,inMTContent){if(inMTContent)if(window.pmc.getMetaTagContent(inMTName)===null){var myMetaTag=document.createElement("meta");myMetaTag.name=inMTName;myMetaTag.content=inMTContent;window.pmc.passScriptCheck(myMetaTag.content)&&document.getElementsByTagName("head")[0].appendChild(myMetaTag)}else jQuery("meta[name='"+inMTName+"']").attr("content",inMTContent);else return};window.pmc.checkMetaTags=function(name,val){var metaTag=document.querySelector('meta[name="'+name+'"]');metaTag||window.pmc.setMetaTagContent(name,val)};window.pmc.webtrendsCheck=function(name,val,alt){var reg=new RegExp(name,"i");jQuery("meta").each(function(){var jqName=jQuery(this).attr("name"),wtContent;jqName&&(jQuery(this).attr("name").match(reg)?(wtContent=jQuery(this).attr("content"),wtContent=wtContent.replace(/_/g,""),window.pmc.setMetaTagContent(val,wtContent)):alt&&window.pmc.setMetaTagContent(val,alt))})};window.pmc.webtrendsLangLocCheck=function(msLang,msLoc){for(var checkText="DCSext.WClocale",reg=new RegExp(checkText,"i"),allMetas=document.querySelectorAll("meta"),wtContent,i=0;i<allMetas.length;i++)if(allMetas[i].name.search(reg)>-1){wtContent=allMetas[i].content;wtContent=wtContent.replace(/_/g,"");wtLang=wtContent.split("-")[0];wtLoc=wtContent.split("-")[1];window.pmc.setMetaTagContent(msLang,wtLang);window.pmc.setMetaTagContent(msLoc,wtLoc);break}};window.pmc.pageLoad=function(){var pageURL,lang,loc,langLoc,userLang,queryString,titleToSearch,removedSec;if(window.pmc.libraryTaggingEnabled=!1,pageURL=window.location.hostname+window.location.pathname,window.location.hostname.match(/technet\.microsoft\.com/i)||window.location.hostname.match(/technet\.com/i)||window.location.hostname.match(/^technetappsmain\./i)||window.location.hostname.match(/^tngmain\./i)||window.location.hostname.match(/^techblogsrc\./i)){if(window.location.hostname.match(/^int\./)||window.location.hostname.match(/^technetappsmain\./i)||window.location.hostname.match(/^tngmain\./i)||window.location.hostname.match(/^techblogsrc\./i)?window.pmc.checkMetaTags("ms.env","staging"):window.pmc.checkMetaTags("ms.env","production"),langLoc=window.location.pathname.match(/\/..-..\//),langLoc){var grabbed_langLoc=langLoc[0],grabbed_lang=grabbed_langLoc.split("-")[0],grabbed_loc=grabbed_langLoc.split("-")[1];lang=grabbed_lang.replace("/","");loc=grabbed_loc.replace("/","");window.pmc.checkMetaTags("ms.lang",lang);window.pmc.checkMetaTags("ms.loc",loc)}else userLang=navigator.language||navigator.userLanguage,lang=userLang.split("-")[0],loc=userLang.split("-")[1],window.pmc.checkMetaTags("ms.lang",lang),window.pmc.checkMetaTags("ms.loc",loc);window.pmc.pageTitle=window.pmc.formatString(jQuery(document).find("title").text());window.pmc.pageTitle=window.pmc.pageTitle.substring(0,100);pageURL.match(/technet\.microsoft\.com(\/..-..)?\/library/i)?(window.pmc.checkMetaTags("ms.sitesec","library"),window.pmc.msTitle="library;"+window.pmc.pageTitle,window.pmc.webtrendsCheck("DCSext.WCarea","ms.sitesec"),window.pmc.webtrendsLangLocCheck("ms.lang","ms.loc"),window.pmc.webtrendsCheck("DCSext.Wclifecycle","ms.mktglfcyl"),window.pmc.webtrendsCheck("DCSext.WCversion","ms.prod"),window.pmc.webtrendsCheck("DCSext.WCzone","ms.pagetype"),window.pmc.libraryTaggingEnabled=!0):pageURL.match(/social\.technet\.microsoft\.com\/wiki/i)?(window.pmc.checkMetaTags("ms.sitesec","wiki"),window.pmc.msTitle="wiki;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com(\/..-..)?\/bb291022/i)||pageURL.match(/technet\.microsoft\.com(\/..-..)?\/dd644554/i)||pageURL.match(/technet\.microsoft\.com(\/..-..)?\/cc138021/i)||pageURL.match(/technet\.microsoft\.com(\/..-..)?\/ff871920/i)?(window.pmc.checkMetaTags("ms.sitesec","learn"),window.pmc.msTitle="learn;"+window.pmc.pageTitle):pageURL.match(/gallery\.technet\.microsoft/i)?(window.pmc.checkMetaTags("ms.sitesec","gallery"),window.pmc.msTitle="gallery;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com(\/..-..)?\/bb403698/i)?(window.pmc.checkMetaTags("ms.sitesec","downloads"),window.pmc.msTitle="downloads;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com(\/..-..)?\/ms772425/i)?(window.pmc.checkMetaTags("ms.sitesec","support"),window.pmc.msTitle="support;"+window.pmc.pageTitle):pageURL.match(/social\.technet\.microsoft.com\/forums/i)?(window.pmc.checkMetaTags("ms.sitesec","forums"),window.pmc.msTitle="forums;"+window.pmc.pageTitle):pageURL.match(/blogs\.technet\.com/i)||window.location.hostname.match(/^techblogsrc\./i)?(window.pmc.checkMetaTags("ms.sitesec","blogs"),window.pmc.msTitle="blogs;"+window.pmc.pageTitle):pageURL.match(/social\.technet\.microsoft\.com\/search\//i)?(window.pmc.checkMetaTags("ms.sitesec","search"),window.pmc.msTitle="search;"+window.pmc.pageTitle,queryString=window.location.search,queryString.match(/query=/i)&&(titleToSearch=window.pmc.msTitle.split(" - microsoft technet search")[0],removedSec=titleToSearch.split(";")[1],window.pmc.checkMetaTags("ms.searchquery",removedSec))):pageURL.match(/technet\.microsoft\.com\/..-..\/windows/i)?(window.pmc.msTitle="windows;"+window.pmc.pageTitle,window.pmc.webtrendsCheck("DCSext.WCarea","ms.sitesec","windows"),window.pmc.webtrendsLangLocCheck("ms.lang","ms.loc"),window.pmc.webtrendsCheck("DCSext.Wclifecycle","ms.mktglfcyl"),window.pmc.webtrendsCheck("DCSext.WCversion","ms.prod"),window.pmc.webtrendsCheck("DCSext.WCzone","ms.pagetype")):pageURL.match(/technet\.microsoft\.com\/..-..\/ie/i)?(window.pmc.checkMetaTags("ms.sitesec","internet explorer"),window.pmc.msTitle="internet explorer;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/sqlserver/i)?(window.pmc.checkMetaTags("ms.sitesec","sql server"),window.pmc.msTitle="sql server;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/scriptcenter\//i)?(window.pmc.checkMetaTags("ms.sitesec","script center"),window.pmc.msTitle="script center;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="office;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788774/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="office 365;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788775/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="exchange server;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788776/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="sharepoint products;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788773/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="lync;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788954/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="lync;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788774/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="office 365 for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/fp160948/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="office for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788776/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="sharepoint for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788775/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="exchange for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788773/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="lync server for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn788778/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="project server for it pros;"+window.pmc.pageTitle):pageURL.match(/technet\.microsoft\.com\/..-..\/office\/dn770220/i)?(window.pmc.checkMetaTags("ms.sitesec","office"),window.pmc.msTitle="support for office products;"+window.pmc.pageTitle):(pageURL.match(/technet\.microsoft\.com\/((..-..)?\/?(((default)(\.aspx)?)?|(ms\d+(\.aspx)?)?))$/i)||pageURL.match(/technet\.microsoft\.com\/..-..\/.*$/i))&&(window.pmc.checkMetaTags("ms.sitesec","home"),window.pmc.msTitle="home;"+window.pmc.pageTitle);window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}};window.pmc.setAttribute=function(inJQObj,inAttrName,inAttrValue){typeof inJQObj!="undefined"&&inJQObj.length!==0&&inAttrName&&inAttrValue!==""&&inJQObj.attr(inAttrName,inAttrValue)};window.pmc.wedcsUCTracking=[];window.pmc.currUC="";window.pmc.setWEDCSAttributes=function(inJQObj,inCmpgrp,inCmpnm,inIndex){var newUCTLen=window.pmc.wedcsUCTracking.push(window.pmc.currUC);window.pmc.setAttribute(inJQObj,"data-pmcucidx",newUCTLen-1);window.pmc.setAttribute(inJQObj,"ms.cmpgrp",inCmpgrp);window.pmc.setAttribute(inJQObj,"ms.cmpnm",inCmpnm);window.pmc.setAttribute(inJQObj,"ms.index",inIndex)};window.pmc.processWEDCSCustomEventFromArray=function(inArray){if(typeof window.MscomCustomEvent=="function"){if(typeof inArray=="undefined"||inArray===null||inArray.length===0){window.MscomCustomEvent();return}window.MscomCustomEvent.apply(this,inArray)}};window.pmc.processWEDCSCustomEventFromJQObj=function(inJQObj){if(typeof inJQObj=="undefined"||inJQObj===null||inJQObj.length===0){window.pmc.processWEDCSCustomEventFromArray();return}var myWEDCDAttrArray=[];jQuery(inJQObj[0].attributes).each(function(){this.nodeName&&this.nodeName.indexOf("ms.")===0&&myWEDCDAttrArray.push(this.nodeName,this.nodeValue)});window.pmc.processWEDCSCustomEventFromArray(myWEDCDAttrArray)};window.pmc.cleanSearchQuery=function(searchVal){var cleanedQuery;return cleanedQuery=searchVal.replace(/(<([^>]+)>)/ig,""),cleanedQuery=searchVal.replace(/"/g,"'"),searchVal.replace(/&/g,"+")};window.pmc.tagForSearch=function(){if(window.location.hostname.match(/technet\.microsoft\.com/i)||window.location.hostname.match(/technet\.com/i)||window.location.hostname.match(/^technetappsmain\./i)||window.location.hostname.match(/^tngmain\./i)||window.location.hostname.match(/^techblogsrc\./i)){var cleanedQuery;window.pmc.currUC="Bing Searchbox; top of page";jQuery("button#HeaderSearchButton").mousedown(function(){try{var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}catch(e){}});jQuery("input#HeaderSearchButton").mousedown(function(){try{var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)}catch(e){}});window.pmc.currUC="Bing Searchbox; top of page on wiki sections";jQuery("#Header_SearchButton").mousedown(function(){try{var searchVal=window.pmc.formatString(jQuery("#Header_SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)}catch(e){}});jQuery("input#Header_SearchTextBox").keydown(function(event){if(event.which==13)try{var searchVal=window.pmc.formatString(jQuery("#Header_SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}catch(e){}});window.pmc.currUC="Bing small Searchbox; top center of page";jQuery("#SearchButton").mousedown(function(){try{var searchVal=window.pmc.formatString(jQuery("#SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)}catch(e){}});jQuery("#HeaderSearchTextBox").keydown(function(event){if(event.which==13)try{var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}catch(e){}});jQuery("#HeaderSearchTextBox").off("mousedown").on("mousedown",function(){jQuery("#SuggestionContainer ul").off("mousedown").on("mousedown",function(){try{var term=window.pmc.formatString(jQuery("input[title*='Search']").val());cleanedQuery=window.pmc.cleanSearchQuery(term);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}catch(e){}})});jQuery("#SuggestionContainer ul").off("mousedown").on("mousedown",function(){try{var term="";term=window.location.hostname.match(/blogs\.technet\.com/i)||window.location.hostname.match(/^techblogsrc\./i)?window.pmc.formatString(jQuery("input[title*='Search']:visible").val()):window.pmc.formatString(jQuery("input[title*='Search']").val());cleanedQuery=window.pmc.cleanSearchQuery(term);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.location.pathname.match(/\/search\//i)?(window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery),window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))):window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}catch(e){}});jQuery("#SearchTextBox").on("input",function(){try{var searchText=jQuery(this).val();cleanedQuery=window.pmc.cleanSearchQuery(searchText);jQuery(this).attr("ms.searchquery",cleanedQuery);jQuery("a#SearchSubmitImage").attr("ms.searchquery",cleanedQuery)}catch(e){}});jQuery("#SearchSubmitImage").on("mousedown",function(){try{var searchVal=window.pmc.formatString(jQuery("#SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.location.pathname.match(/\/search\//i)&&window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery)}catch(e){}});jQuery("input.search-button[title*='Search TechNet with Bing']").mousedown(function(){try{var term="";term=window.location.hostname.match(/blogs\.technet\.com/i)||window.location.hostname.match(/^techblogsrc\./i)?window.pmc.formatString(jQuery("input[title*='Search']:visible").val()):window.pmc.formatString(jQuery("input[name*='SearchTextBox']").val());cleanedQuery=window.pmc.cleanSearchQuery(term);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.location.pathname.match(/\/search\//i)&&window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery)}catch(e){}});jQuery("input[name*='SearchTextBox']").on("keydown",function(event){try{if(event.which==13){var searchVal=window.pmc.formatString(jQuery(this).val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.location.pathname.match(/\/search\//i)?(window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery),window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))):window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}}catch(e){}})}};window.pmc.tagLeftNav=function(){var tCmpGrp,tCmpNm,currentLevel,prevLevel,prevCmpNmLevel,splitCmpNmLevel;(window.location.hostname.match(/technet\.microsoft\.com/i)||window.location.hostname.match(/technet\.com/i)||window.location.hostname.match(/^technetappsmain\./i)||window.location.hostname.match(/^tngmain\./i))&&(tCmpGrp="",tCmpNm="",window.pmc.navIndex="0",window.pmc.currUC="Left nav dropdown items",jQuery('#leftNav div[data-toclevel] a:not([class*="toc_"]):not([data-pmcucidx])').each(function(){var parentDropText=window.pmc.formatString(jQuery(this).closest("div[data-toclevel]").prevAll(".toclevel1:first").find("a:not([href='#'])").text()),levelNum=parseInt(jQuery(this).closest("div[data-toclevel]").attr("data-toclevel"),10);levelNum===0||levelNum===1?parentDropText=window.pmc.formatString(jQuery(this).text()):levelNum===-1&&(levelNum=0,parentDropText=window.pmc.formatString(jQuery(this).text()));tCmpNm=parentDropText+";"+levelNum;currentLevel=jQuery(this).closest("div").attr("data-toclevel");prevLevel=jQuery(this).closest("div").prev().attr("data-toclevel");window.pmc.setWEDCSAttributes(jQuery(this),"table of contents",tCmpNm);try{currentLevel!==prevLevel?(window.pmc.navIndex="0",window.pmc.setAttribute(jQuery(this),"ms.index",window.pmc.navIndex)):(window.pmc.navIndex++,window.pmc.setAttribute(jQuery(this),"ms.index",window.pmc.navIndex))}catch(e){}}))};window.pmc.tagElements=function(){var tCmpGrp="",tCmpNm="",sideNavCounter=0,cmpnmCheck="";window.pmc.tagLeftNav();window.pmc.currUC="body directory links";jQuery("#content .navpage ul li a").each(function(index){tCmpNm=jQuery(this).closest("ul").prev().text();tCmpNm===" "&&(tCmpNm=jQuery(this).closest("ul").prev().parent().prev().children(":header").text());tCmpNm=window.pmc.formatString(tCmpNm);tCmpGrp=window.pmc.formatString(jQuery(this).closest(".navpage").find(":header:first").text());window.pmc.setWEDCSAttributes(jQuery(this),tCmpGrp,tCmpNm,index)});window.pmc.currUC="alternative see also directory links";jQuery(".navpage div[style*='float'] a:not([data-pmcucidx])").each(function(index){tCmpNm=window.pmc.formatString(jQuery(this).closest("ul").prev().text());tCmpNm===""&&(tCmpNm=window.pmc.formatString(jQuery(this).closest(".navpage").find("div[style*='clear:both']:first").next().text()),tCmpNm=tCmpNm.replace(":",""));tCmpGrp=window.pmc.formatString(jQuery(this).closest(".navpage").find(":header:first").text());window.pmc.setWEDCSAttributes(jQuery(this),tCmpGrp,tCmpNm,index)});window.pmc.verbatim="";jQuery(".feedbackContainer textarea").on("input",function(){try{window.pmc.verbatim=jQuery(this).val().substring(0,500).replace(/(<([^>]+)>)/ig,"").replace(/"/g,"'").replace(/&/g,"+")}catch(e){}});jQuery(".feedbackContainer #feedbackSubmit").on("mousedown",function(){var jqFsButton,tCBid,srv_resp;try{jqFsButton=jQuery(this);window.pmc.setAttribute(jqFsButton,"ms.srv_id","was this page helpful?");window.pmc.setAttribute(jqFsButton,"ms.scnum","feedbackform");tCmpNm=window.pmc.formatString(jQuery("#feedbackSection1").children(".left:first").text());window.pmc.setWEDCSAttributes(jqFsButton,"user feedback",tCmpNm,"0");window.pmc.radioChoice=jQuery(".feedbackContainer input[type=radio]:checked").attr("id")==="feedbackYes"?"yes":"no";window.pmc.checkText="";tCBid="";jQuery('.feedbackContainer input[name*="chkbxNo"]:checked').each(function(){tCBid=jQuery(this).attr("id");tCBid==="checkboxNo201"?window.pmc.checkText+="not accurate|":tCBid==="checkboxNo202"?window.pmc.checkText+="not enough depth|":tCBid==="checkboxNo203"?window.pmc.checkText+="need more code examples|":tCBid==="checkboxNo204"&&(window.pmc.checkText+="the translation needs improvement|")});srv_resp=window.pmc.radioChoice;window.pmc.checkText.length>0&&window.pmc.radioChoice==="no"&&(srv_resp+=";"+window.pmc.checkText.substring(0,window.pmc.checkText.length-1));window.pmc.setAttribute(jqFsButton,"ms.srv_resp",srv_resp);window.pmc.verbatim===""&&(window.pmc.verbatim="no comment");window.pmc.setAttribute(jqFsButton,"ms.srv_v",window.pmc.verbatim);window.pmc.processWEDCSCustomEventFromJQObj(jqFsButton)}catch(e){}})};window.pmc.callMSJS=function(){window.pmc.pageLoad();window.varClickTracking=1;window.varCustomerTracking=0;window.varAutoFirePV=1;window.route="";window.ctrl="";var script=document.createElement("script");script.type="text/javascript";script.src=window.location.protocol+"//c.microsoft.com/ms.js";script.onload=function(){(window.location.hostname.match(/msdn\.microsoft\.com/i)||window.location.hostname.match(/msdnapps/i))&&(window.pmc.setupScrollTracking(),window.location.pathname.match(/\/search/i)?window.pmc.runRefinementCode():window.pmc.readLanguageSwitcher())};document.getElementsByTagName("head")[0].appendChild(script);window.AmbientContext&&window.AmbientContext["insight.use_wedcs_vnext"]&&(script=document.createElement("script"),script.type="text/javascript",script.src="//az725175.vo.msecnd.net/scripts/jsll-3.2.0.js",script.onload=function(){window.Asimov.clickstreamTracker.init()},document.getElementsByTagName("head")[0].appendChild(script));window.pmc.tagForSearch();window.pmc.libraryTaggingEnabled&&window.pmc.tagElements();jQuery(document).ajaxComplete(function(){window.pmc.libraryTaggingEnabled&&window.pmc.tagLeftNav()})};window.pmc.scrollArea=function(inName){this.name=inName;this.scrollNA=!1;this.scrollQuarter=!1;this.scrollHalf=!1;this.scrollThreeQuarter=!1;this.scrollBot=!1};window.pmc.currScrollArea=null;window.pmc.scrollAreaList=[];window.pmc.setCurrScrollArea=function(inIndex){if(typeof inIndex!="number")return;else if(window.pmc.scrollAreaList.length<=inIndex)return;window.pmc.currScrollArea=window.pmc.scrollAreaList[inIndex]};window.pmc.scrollBottomElement=null;window.pmc.scrollPageHeight=-1;window.pmc.viewportBottom=-1;window.pmc.refreshScrollPageDimVars=function(){var tBottom=0;window.pmc.scrollBottomElement&&(tBottom=window.pmc.scrollBottomElement.getBoundingClientRect().top+window.pageYOffset);tBottom<=0&&(tBottom=document.body.getBoundingClientRect().height);window.pmc.scrollPageHeight=tBottom;window.pmc.viewportBottom=window.pageYOffset+window.innerHeight};window.pmc.suppressMobileEvents=!1;window.pmc.fireScrollEvent=function(inScrollValue){window.pmc.debugLog("stepped inside fireScrollEvent function");var tArray=[];tArray.push("ms.pgarea","body");tArray.push("ms.scnum","scroll-"+inScrollValue);tArray.push("ms.interactiontype","4");tArray.push("ms.scn","scroll");window.pmc.processWEDCSCustomEventFromArray(tArray)};window.pmc.checkForNAScroll=function(){if(window.pmc.refreshScrollPageDimVars(),window.pmc.scrollPageHeight<=0)return;else if(window.pmc.suppressMobileEvents&&window.innerWidth<=510)return;window.innerHeight>window.pmc.scrollPageHeight*.9?(window.pmc.debugLog("calling n/a scroll event"),window.pmc.currScrollArea.scrollNA=!0,window.pmc.fireScrollEvent("na")):(window.pmc.debugLog("calling 0 percent scroll"),window.pmc.fireScrollEvent("0%"))};window.pmc.processScroll=function(){if(window.clearTimeout(window.pmc.scrollResizeTimer),window.pmc.currScrollArea!==null){if(window.pmc.refreshScrollPageDimVars(),window.pmc.scrollPageHeight<=0)return;else if(window.pmc.suppressMobileEvents&&window.innerWidth<=510)return;if(window.innerHeight>window.pmc.scrollPageHeight*.9){window.pmc.currScrollArea.scrollNA||(window.pmc.currScrollArea.scrollNA=!0,window.pmc.fireScrollEvent("na"));return}var tCurrPercent=window.pmc.viewportBottom/window.pmc.scrollPageHeight;tCurrPercent>.25&&!window.pmc.currScrollArea.scrollQuarter&&(window.pmc.currScrollArea.scrollQuarter=!0,window.pmc.fireScrollEvent("25%"));tCurrPercent>.5&&!window.pmc.currScrollArea.scrollHalf&&(window.pmc.currScrollArea.scrollHalf=!0,window.pmc.fireScrollEvent("50%"));tCurrPercent>.75&&!window.pmc.currScrollArea.scrollThreeQuarter&&(window.pmc.currScrollArea.scrollThreeQuarter=!0,window.pmc.fireScrollEvent("75%"));tCurrPercent>.99&&!window.pmc.currScrollArea.scrollBot&&(window.pmc.currScrollArea.scrollBot=!0,window.pmc.fireScrollEvent("100%"))}};window.pmc.scrollResizeTimer=0;window.pmc.setupScrollTracking=function(){window.pmc.scrollBottomElement=jQuery("footer:first")[0];window.pmc.scrollAreaList.push(new window.pmc.scrollArea("body"));window.pmc.setCurrScrollArea(0);window.addEventListener("scroll",function(){window.pmc.processScroll()});jQuery(window).resize(function(){window.clearTimeout(window.pmc.scrollResizeTimer);window.pmc.scrollResizeTimer=window.setTimeout(function(){window.pmc.processScroll()},500)});window.pmc.checkForNAScroll()};window.pmc.findRefinements=function(){var searchQuery,searchHash,refinements,rIndex,choppedQueryString,rcIndex,choppedHashString,splitHash;if(window.pmc.refinementTextArray=[],window.pmc.urlHashString=window.location.hash,window.pmc.urlQueryString=window.location.search,window.pmc.urlQueryString)try{if(rIndex=window.pmc.urlQueryString.indexOf("refinement="),rIndex>-1&&(choppedQueryString=window.pmc.urlQueryString.substr(rIndex,window.pmc.urlQueryString.length),refinements=choppedQueryString.substr(0,choppedQueryString.indexOf("&")),window.pmc.debugLog("search hash before '=' split "+refinements),searchQuery=refinements.split("=")[1],window.pmc.debugLog("search hash after '=' split "+searchQuery)),searchQuery&&searchQuery.length>0){if(searchQuery.match(/%2C/i))for(window.pmc.debugLog("multiple refinements in refinement query string"),searchQuery=searchQuery.split("%2C"),i=0;i<searchQuery.length;i++)try{searchQuery[i].match("-")||window.pmc.refinementTextArray.push(searchQuery[i])}catch(e){window.pmc.debugLog("error in refinement= -> multiple refinement logic. Message: "+e)}else if(window.pmc.debugLog("one refinement"),searchQuery.length>0)try{searchQuery.match("-")||window.pmc.refinementTextArray.push(searchQuery)}catch(e){window.pmc.debugLog("error in refinement= -> one refinement logic. Message: "+e)}window.pmc.setMetaTagContent("ms.search_productfilter",window.pmc.refinementTextArray.toString())}}catch(e){window.pmc.debugLog("Error in query string parsing logic. Error: "+e)}if(window.pmc.urlHashString)try{if(rcIndex=window.pmc.urlHashString.indexOf("refinementChanges="),rcIndex>-1&&(choppedHashString=window.pmc.urlHashString.substr(rcIndex,window.pmc.urlHashString.length),refinements=choppedHashString.substr(0,choppedHashString.indexOf("&")),window.pmc.debugLog("search hash before '=' split "+refinements),searchHash=refinements.split("=")[1],window.pmc.debugLog("search hash after '=' split "+searchHash)),searchHash&&searchHash.length>0){if(searchHash.match(/,/i))for(window.pmc.debugLog("multiple refinements in refinementChanges= hash string"),searchHash=searchHash.split(","),i=0;i<searchHash.length;i++)try{searchHash[i].match("-")?String(searchQuery).match(searchHash[i].split("-")[1])&&(window.pmc.debugLog("refinement change matches item in refinement query string"),window.pmc.refinementTextArray=window.pmc.refinementTextArray.filter(function(val){return val!=searchHash[i].split("-")[1]})):window.pmc.refinementTextArray.push(searchHash[i])}catch(e){window.pmc.debugLog("Error in refinementChanges= -> multiple refinement logic. Message: "+e)}else if(window.pmc.debugLog("one refinement"),searchHash.length>0)try{searchHash.match("-")?(splitHash=searchHash.split("-")[1],String(searchQuery).match(splitHash)&&(window.pmc.debugLog("refinement change matches item in refinement query string"),window.pmc.refinementTextArray=window.pmc.refinementTextArray.filter(function(val){return val!=splitHash}))):window.pmc.refinementTextArray.push(searchHash)}catch(e){window.pmc.debugLog("Error in refinementChanges= -> one refinement logic. Message: "+e)}window.pmc.setMetaTagContent("ms.search_productfilter",window.pmc.refinementTextArray.toString())}}catch(e){window.pmc.debugLog("Error found in hash string parsing logic. Error: "+e)}window.pmc.refinementTextArray.length===0&&window.pmc.setMetaTagContent("ms.search_productfilter","no refinements");window.pmc.debugLog("array of all refinement ids in query params "+searchQuery);window.pmc.debugLog("array of all refinement ids in hash params "+searchHash);window.pmc.debugLog("array of all refinement id values "+window.pmc.refinementTextArray)};window.pmc.applyNodeListener=function(){var interaction_type,jqthis,tArray=[],limiter=0;jQuery(".RefinementListContainer").on("click","li",function(){try{limiter===0&&(limiter=1,jqthis=jQuery(this).context,window.setTimeout(function(){interaction_type=jQuery(jqthis).find("input:first").attr("checked")?"16":"17";window.pmc.findRefinements();window.pmc.refinementTextArray.length>0?(tArray.push("ms.cmptyp","checkbox"),tArray.push("ms.interactiontype",interaction_type),tArray.push("ms.title",window.pmc.formatString(jQuery(jqthis).closest("li").text())),window.pmc.setMetaTagContent("ms.search_productfilter",window.pmc.refinementTextArray.toString()),window.pmc.processWEDCSCustomEventFromArray(tArray),limiter=0):(window.pmc.debugLog("there are no refinements"),tArray.push("ms.cmptyp","checkbox"),tArray.push("ms.interactiontype",interaction_type),tArray.push("ms.title",window.pmc.formatString(jQuery(jqthis).text())),window.pmc.setMetaTagContent("ms.search_productfilter","no refinements"),window.pmc.processWEDCSCustomEventFromArray(tArray),limiter=0)},1e3))}catch(e){window.pmc.debugLog("error in refinement list custom event building. Message: "+e)}});jQuery("#ContentTableCell").on("mousedown","a.resultTitleLink",function(){jqthis=jQuery(jQuery(this).context);try{jqthis.attr({"ms.cmptyp":"text link","ms.interaction_type":"1","ms.title":window.pmc.formatString(jqthis.text())})}catch(e){window.pmc.debugLog("error in assigning attributes to body result. Message: "+e)}})};window.pmc.runRefinementCode=function(){try{window.pmc.urlHashString=window.location.hash;window.pmc.urlQueryString=window.location.search;window.pmc.refinementText="";window.pmc.urlHashString&&window.pmc.urlHashString.match(/refinementChanges=/i)||window.pmc.urlQueryString&&window.pmc.urlQueryString.match(/refinement=/i)?window.pmc.findRefinements():window.pmc.setMetaTagContent("ms.search_productfilter","no refinements");window.pmc.applyNodeListener()}catch(e){window.pmc.debugLog("Error found in runRefinementCode function. Error: "+e)}};window.pmc.assignSearchQuery=function(){var urlQueryString=window.location.search;if(urlQueryString&&urlQueryString.match(/query=/i))try{var queryIndex=urlQueryString.indexOf("query="),tailQS=urlQueryString.substr(queryIndex,urlQueryString.length),searchParam=urlQueryString.substr("query=",tailQS.indexOf("&")+1);searchParam=searchParam.split("=")[1];window.pmc.setMetaTagContent("ms.searchquery",searchParam)}catch(e){window.pmc.debugLog(e+": error assigning ms.searchquery")}};window.pmc.checkDataDashLoaded=function(numTrys){typeof window.epx_loaded!="undefined"&&window.epx_loaded?window.setTimeout(function(){window.pmc.epxLoaded=!0;window.pmc.runMSDNCustomSearchTagging()},500):numTrys<=10?window.setTimeout(function(){numTrys++;window.pmc.checkDataDashLoaded(numTrys)},500):window.pmc.debugLog("checking for epx_loaded=true timed out inside of checkDataDashLoaded function")};window.pmc.runMSDNCustomSearchTagging=function(){window.pmc.headerSearchButton=jQuery("[data-searchtype='icon'][data-pgarea='header']");window.pmc.headerSearchButton.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"header","ms.searchtype":"icon"});window.pmc.headerSearchButton.on("mousedown",function(){var searchVal,cleanedQuery;try{searchVal=jQuery("[data-searchtype='searchbox'][data-pgarea='header']").val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),jQuery(this).is(jQuery("a,img,input,area"))||window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in header search button code. Error: "+e)}});window.pmc.headerSearchButton.prev().attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"header","ms.searchtype":"icon"});window.pmc.headerSearchButton.prev().on("mousedown",function(){var searchVal,cleanedQuery;try{searchVal=jQuery("[data-searchtype='searchbox'][data-pgarea='header']").val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),jQuery(this).is(jQuery("a,img,input,area"))||window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in header search button code. Error: "+e)}});window.pmc.bodySearchButton=jQuery("[data-searchtype='icon'][data-pgarea='body']");window.pmc.bodySearchButton.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"body","ms.searchtype":"icon"});window.pmc.bodySearchButton.on("mousedown",function(){var searchVal,cleanedQuery;try{searchVal=jQuery("[data-searchtype='searchbox'][data-pgarea='body']").val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),jQuery(this).is(jQuery("a,img,input,area"))||window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in body search button code. Error: "+e)}});window.pmc.headerSearchbox=jQuery("[data-searchtype='searchbox'][data-pgarea='header']");window.pmc.headerSearchbox.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"header","ms.searchtype":"enter-key"});window.pmc.headerSearchbox.keydown(function(event){var searchVal,cleanedQuery;if(event.which==13)try{searchVal=jQuery(this).val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in header searchbox enter event code. Error: "+e)}});window.pmc.bodySearchbox=jQuery("[data-searchtype='searchbox'][data-pgarea='body']");window.pmc.bodySearchbox.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"body","ms.searchtype":"enter-key"});window.pmc.bodySearchbox.keydown(function(event){var searchVal,cleanedQuery;if(event.which==13)try{searchVal=jQuery(this).val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in body searchbox enter event code. Error: "+e)}});window.pmc.headerSearchDropdown=jQuery("[data-searchtype='search dropdown'][data-pgarea='header']");window.pmc.headerSearchDropdown.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"header","ms.searchtype":"suggested keyword"});window.pmc.headerSearchDropdown.on("mousedown",function(){var searchVal,cleanedQuery;try{searchVal=window.pmc.headerSearchbox.val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),jQuery(this).is(jQuery("a,img,input,area"))||window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in header search dropdown code. Error: "+e)}});window.pmc.bodySearchDropdown=jQuery("[data-searchtype='search dropdown'][data-pgarea='body']");window.pmc.bodySearchDropdown.attr({"ms.interactiontype":"2","ms.title":"search","ms.pgarea":"body","ms.searchtype":"suggested keyword"});window.pmc.bodySearchDropdown.on("mousedown",function(){var searchVal,cleanedQuery;try{searchVal=window.pmc.bodySearchbox.val();searchVal&&searchVal.length>0&&(cleanedQuery=window.pmc.cleanSearchQuery(searchVal),window.pmc.setMetaTagContent("ms.searchquery",window.pmc.formatString(cleanedQuery)),jQuery(this).is(jQuery("a,img,input,area"))||window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this)))}catch(e){window.pmc.debugLog("Error in header search dropdown code. Error: "+e)}})};window.pmc.getCookie=function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),c,i=0;i<ca.length;i++){for(c=ca[i];c.charAt(0)==" ";)c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return unescape(c.substring(nameEQ.length,c.length))}return null};window.pmc.scrapePageForRadioChecked=function(){var radioChecked=jQuery(".TranslationViewSwitcher input:checked").attr("value"),langVal;radioChecked==="0"||radioChecked==="1"?(langVal=radioChecked==="1"?"original":"translated",window.MscomCustomEvent("ms.title",langVal,"ms.cmptyp","language switcher")):window.pmc.debugLog("Language translator switcher value attribute != 0|1")};window.pmc.readLanguageSwitcher=function(){try{var languageSwitcherVal=window.pmc.getCookie("MtpsLibraryTranslator");window.location.pathname.match(/\/library\//i)?languageSwitcherVal!==null?languageSwitcherVal==="1"?window.MscomCustomEvent("ms.title","original","ms.cmptyp","language switcher"):window.MscomCustomEvent("ms.title","translated","ms.cmptyp","language switcher"):window.pmc.scrapePageForRadioChecked():window.pmc.scrapePageForRadioChecked()}catch(e){window.pmc.debugLog("error in readLanguageSwitcher function. Native error: "+e)}jQuery(".TranslationViewSwitcher input").each(function(){jQuery(this).attr("value")?jQuery(this).attr("value")==="0"||jQuery(this).attr("value")==="1"?(langVal=jQuery(this).attr("value")==="0"?"translated":"original",jQuery(this).attr("ms.title",langVal)):window.pmc.debugLog("Language translator switcher value attribute != 0|1"):window.pmc.debugLog("Language translator switcher does not have a value attribute");jQuery(this).attr({"ms.cmptyp":"language selector","ms.interactiontype":"16"})})};window.pmc.setupPerfTiming=function(){var navigationStart,vals,val,key;if(window.performance&&typeof window.performance.timing!="undefined"){navigationStart=0;vals=[];for(key in window.performance.timing)if(val=window.performance.timing[key],typeof val=="number"){if(key==="navigationStart"){navigationStart=val;continue}vals[key]=val}for(key in vals)typeof vals[key]=="number"&&(vals[key]>0&&(vals[key]-=navigationStart),window.pmc.setMetaTagContent("ms.pf."+key,vals[key]))}};jQuery(document).ready(function(){window.pmc.getMetaTagContent("ms.contentsource")==="OP"&&window.pmc.setupPerfTiming();(window.location.hostname.match(/msdn\.microsoft\.com/i)||window.location.hostname.match(/msdnapps/i))&&window.pmc.assignSearchQuery();window.pmc.callMSJS();(window.location.hostname.match(/msdn\.microsoft\.com/i)||window.location.hostname.match(/msdnapps/i))&&window.pmc.checkDataDashLoaded(1)});
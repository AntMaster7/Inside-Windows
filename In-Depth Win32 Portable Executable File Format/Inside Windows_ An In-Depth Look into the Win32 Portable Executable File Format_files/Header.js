(function(){var headerModule=function($){function initVars(){isAuxNavMoved=!1;userNameWidth=0;ellipsisEnabled=!1;lastWindowWidth=$(window).width();isRTL=$("#ux-header").hasClass("rtl");minGap=40;$siteLogo=$("#ux-header header div.topRow div.top div.left");$auxNav=$("#ux-header div.auxNav");$signInLinks=$("#ux-header #signIn");$topRight=$("#ux-header header .top .right");$bottomRight=$("#ux-header header .bottom .right");$bottomLeft=$("#ux-header header .bottom .left");$drawer=$("#ux-header #drawer");$searchBox=$("#ux-header #Fragment_SearchBox");$buttomRow=$("#ux-header header .buttomRow");$expandTop=$("#ux-header header .expandTop");$expandTopLeft=$("#ux-header header .expandTop .left");$expandTopRight=$("#ux-header header .expandTop .right");$viewCreateProfileLink=$("#ux-header header .createViewProfileLink");$scarabLink=$("#ux-header header .scarabLink")}function closeSearchBox(){$("#HeaderSearchForm").removeClass("clearable");$("#searchTextContainer").css("display","none");$("#searchTextContainer").animate({width:"0"},200,function(){$("#HeaderSearchForm").removeClass("opened")})}function clearSearchText(){$("#HeaderSearchTextBox").val("");$("#HeaderSearchTextBox").focus();updateCloseIconStyle()}function getSearchText(){return $.trim($("#HeaderSearchTextBox").val())}function updateCloseIconStyle(){getSearchText()?$("#HeaderSearchForm").addClass("clearable"):$("#HeaderSearchForm").removeClass("clearable")}function clearHeight($object){$object.css("height","")}function bindDropdownEventHandlers(){$("#ux-header .navL1 > li.toggle > a").each(function(){$(this).click(function(e){addActiveClassForL1($(this));e.stopPropagation()})});$("#ux-header .navL2 > li.toggle > a").each(function(){$(this).bind("click",function(e){addActiveClassForL2($(this));e.stopPropagation()});$(this).bind("focus mouseover",function(e){isAuxNavMoved||(addActiveClassForL2($(this),!0),e.stopPropagation())})});$("#ux-header .navL2 > li:not(.toggle) > a").each(function(){$(this).bind("focus mouseover",function(e){isAuxNavMoved||(closeAllL3(!0),e.stopPropagation())})});$("html, body").bind("click",function(){isAuxNavMoved||(closeAllL2(),closeAllL3())})}function addActiveClassForL1($this){var selfActive=$this.parent().hasClass("active");closeAllL3();closeAllL2();clearHeight($this.next());selfActive||(isAuxNavMoved?$this.next().animate({height:"toggle"},200,"swing",function(){$(this).parent().removeClass("inactive").addClass("active")}):($this.parent().removeClass("inactive").addClass("active"),$this.next().animate({height:"toggle"},66,"swing")))}function tuneHeight($object1,$object2){clearHeight($object1);clearHeight($object2);var minHeight=Math.max($object1.height(),$object2.height());$object1.css("height",minHeight);$object2.css("height",minHeight)}function addActiveClassForL2($this,isHover){var selfActive=$this.parent().hasClass("active"),visibleL3;if(selfActive){isAuxNavMoved&&(clearHeight($this.next()),closeAllL3());return}visibleL3=closeAllL3(!isHover);isAuxNavMoved?(clearHeight($this.next()),$this.next().animate({height:"toggle"},200,"swing",function(){$(this).parent().removeClass("inactive").addClass("active")})):($this.parent().removeClass("inactive").addClass("active"),visibleL3?$this.next().css("display","block"):$this.next().animate({width:"toggle"},200,"swing"),tuneHeight($this.next(),$this.parent().parent()))}function closeAllL2(){var $l2=$("#ux-header .navL1 > li.active"),subSelector=".navL2";isAuxNavMoved?$l2.find(subSelector).animate({height:"toggle"},200,"swing",function(){$(this).parent().removeClass("active").addClass("inactive")}):($l2.removeClass("active").addClass("inactive"),$("#ux-header "+subSelector).css("display","none"))}function closeAllL3(toggleAnimationEnabled){var $l3=$("#ux-header .navL2 > li.active"),subSelector=".navL3",$l3Menu=$l3.find(subSelector),visibleL3=$l3.length;return isAuxNavMoved?$l3Menu.animate({height:"toggle"},200,"swing",function(){$(this).parent().removeClass("active").addClass("inactive")}):($l3.removeClass("active").addClass("inactive"),toggleAnimationEnabled?$l3Menu.animate({width:"toggle"},200,"swing",function(){clearHeight($l3.parent());clearHeight($l3Menu)}):$("#ux-header "+subSelector).css("display","none")),visibleL3>0}function addLocale(){var $canonical=$('link[rel="canonical"]'),locale="",metaName="WT.seg_1",$localeMeta=$('meta[name="'+metaName+'"]');$localeMeta&&$localeMeta.length!=0||($localeMeta=$("<meta>").attr("name",metaName).attr("content","en-us"));$("head").prepend($localeMeta);$canonical&&$canonical.length>0&&(locale=$canonical.attr("href").split("/"),locale.length>3&&(locale=locale[3],locale!=""&&$localeMeta.attr("content",locale)))}function changeToEllipsis(leftPos,rightPos){rightPos-leftPos<=minGap&&($userName.text($userName.text()[0]+$userName.text()[1]+$userName.text()[2]+"..."),ellipsisEnabled=!0,ellipsisWidth=$userName.width())}function changeBackToUserName(leftPos,rightPos){rightPos-leftPos>userNameWidth-ellipsisWidth+minGap&&($userName.text(userNameText),ellipsisEnabled=!1)}function changeUserName(){var currentWindowWidth=$(window).width();isRTL?!ellipsisEnabled&&lastWindowWidth>=currentWindowWidth?changeToEllipsis($topRight.offset().left+$topRight.width()-Number($signInLinks.css("margin-right").replace(/px/ig,"")),$siteLogo.offset().left):ellipsisEnabled&&changeBackToUserName($topRight.offset().left+$topRight.width()-Number($signInLinks.css("margin-right").replace(/px/ig,"")),$siteLogo.offset().left):!ellipsisEnabled&&lastWindowWidth>=currentWindowWidth?changeToEllipsis($siteLogo.offset().left+$siteLogo.width(),$topRight.offset().left+Number($signInLinks.css("margin-left").replace(/px/ig,""))):ellipsisEnabled&&changeBackToUserName($siteLogo.offset().left+$siteLogo.width(),$topRight.offset().left+Number($signInLinks.css("margin-left").replace(/px/ig,"")));lastWindowWidth=currentWindowWidth}function setUserNameAndWidth(){userNameWidth!=0||ellipsisEnabled||(userNameText=$userName.text(),userNameLength=$userName.text().length,userNameWidth=$userName.width())}function ellipsisFeature(){$userName=$("#ux-header #signIn > span.profileName");$userName.length>0&&($userName.text()==""?setTimeout(ellipsisFeature,500):(setUserNameAndWidth(),userNameLength>3&&changeUserName()))}function userNameTransformation(){isAuxNavMoved?ellipsisFeature():($userName=$("#ux-header #signIn > a.createProfileLink"),$userName.length>0&&(ellipsisEnabled?($userName.text(userNameText),ellipsisEnabled=!1):setUserNameAndWidth()))}function closeExpandTop(){$expandTop.hide()}function resize(){openMenu||showMenu(!1);$("#ux-header #SearchFlyoutContainer").hide();closeSearchBox();isAuxNavMoved!=auxNavShouldMove()&&(isAuxNavMoved?($drawer.css("display","inline-block"),expandTopEnabled=!1,$("header").removeClass("mobile")):(closeAllL3(),closeAllL2(),closeExpandTop(),$drawer.css("display","none"),expandTopEnabled=!0,$("header").addClass("mobile")),moveAuxNav(isAuxNavMoved));$("#msft-logo").removeClass("msft-logo");$("#msft-logo").removeClass("tablet-msft-logo");$("#msft-logo").removeClass("mobile-msft-logo");$("#search-finder").removeClass("search-finder");$("#search-finder").removeClass("mobile-search-finder");$("#searchCloseIcon").removeClass("search-clear-x");$("#searchCloseIcon").removeClass("mobile-search-clear-x");var deviceType;auxNavShouldMove()?($("#msft-logo").addClass("tablet-msft-logo"),$("#search-finder").addClass("search-finder"),$("#searchCloseIcon").addClass("search-clear-x"),$("#grip").removeClass("mobile-menu-icon"),$("#grip").addClass("menu-icon"),deviceType="tablet"):($("#msft-logo").addClass("msft-logo"),$("#search-finder").addClass("search-finder"),$("#searchCloseIcon").addClass("search-clear-x"),deviceType="desktop");$("#ux-header").attr("data-device-type",deviceType);isAuxNavMoved||(closeAllL3(),closeAllL2(),closeExpandTop());userNameTransformation()}function moveAuxNav(restoreOriginalPosition){restoreOriginalPosition?($auxNav.appendTo($topRight),$viewCreateProfileLink.appendTo($signInLinks),$scarabLink.appendTo($signInLinks),$drawer.appendTo($bottomLeft)):($auxNav.appendTo($expandTopLeft),$viewCreateProfileLink.appendTo($expandTopRight),$scarabLink.appendTo($expandTopRight),$drawer.appendTo($buttomRow));isAuxNavMoved=!restoreOriginalPosition}function auxNavShouldMove(){return $("#ux-header #grip:visible").length>0}function isTabletOrMobile(){return $("#ux-header header span#isMobile:visible").length>0}var isAuxNavMoved,userNameText,userNameWidth,userNameLength,ellipsisWidth,ellipsisEnabled,lastWindowWidth,isRTL,minGap,$siteLogo,$userName,$auxNav,$signInLinks,$topRight,$bottomRight,$bottomLeft,$drawer,$searchBox,$buttomRow,$expandTop,$expandTopLeft,$expandTopRight,$viewCreateProfileLink,$scarabLink,$mask,openMenu=!0,showMenu=function(show){$("div#drawer>div.toc").toggleClass("open");show?($mask.show(),$mask.height($(document).height())):$mask.hide();openMenu=!show};$(document).ready(function(){var touchScroll=!1,windowWidth=0,bodyScrollTop=0;initVars();addLocale();bindDropdownEventHandlers();$("#ux-header").append('<div id="overlayMaskHeader"/>');$(document.body.appendChild($('<div id="overlayMask"/>')[0]));$mask=$("#overlayMaskHeader, #overlayMask");$mask.on("touchstart",function(){bodyScrollTop=$("body")[0].srollTop});$mask.on("touchmove",function(){Math.abs(bodyScrollTop-$("body")[0].srollTop)>=10&&(touchScroll=!0)});$mask.click(function(){touchScroll||showMenu(!1);touchScroll=!1});$("#ux-header #grip").click(function(){$drawer.show();showMenu(openMenu)});$("#ux-header .top").click(function(event){(event.target===$("#ux-header .top")[0]||event.target===$("#ux-header .profileName")[0]||event.target===$("#ux-header .profileImage")[0])&&($("#ux-header header .expandTop:visible").length>0?$expandTop.fadeOut(200):$expandTop.fadeIn(200))});$(document).click(function(e){clearSearchText();closeSearchBox()});$("#searchTextContainer").click(function(e){return e.stopPropagation(),!1});$("#FakeHeaderSearchButton").click(function(e){if($("#HeaderSearchForm").hasClass("opened"))$("#HeaderSearchButton").click();else{$("#HeaderSearchForm").addClass("opened");$("#searchTextContainer").stop(!0);var width=0;width=isTabletOrMobile()?Math.min(255,$("#ux-header").width()-90):255;$("#searchTextContainer").css("display","inline-block");$("#searchTextContainer").animate({width:width+"px"},200,function(){var textBox=$("#HeaderSearchTextBox");textBox=textBox.length>0?textBox[0]:null;$("#HeaderSearchTextBox").focus();!textBox||textBox==document.activeElement||textBox.focus()})}return e.stopPropagation(),!1});$("#searchCloseIcon").click(function(e){return clearSearchText(),!1});$("#HeaderSearchTextBox").on("input propertychange keyup",function(){updateCloseIconStyle()});$(window).resize(function(){windowWidth!=$(window).width()&&(resize(),windowWidth=$(window).width())});resize();windowWidth=$(window).width()})};typeof define=="function"&&window.mtpsAmd?define("header",["jquery"],function($){return headerModule($)}):headerModule($)})();
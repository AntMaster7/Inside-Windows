(function(){var layoutModule=function($){function checkIsSingleCol(){var singleColSpan=$("#ux-header span#singleCol");return singleColSpan.length>0?singleColSpan.css("display")!="none":!1}function checkIsSingleColInThreeColLayout(){var singleColSpan=$("#content .threeCol span#singleColInThreeColLayout");return singleColSpan.length>0?singleColSpan.css("display")!="none":!1}function checkIsDoubleCol(){var doubleColSpan=$("#ux-header span#doubleCol");return doubleColSpan.length>0?doubleColSpan.css("display")!="none":!1}return{checkIsSingleCol:checkIsSingleCol,checkIsDoubleCol:checkIsDoubleCol,checkIsSingleColInThreeColLayout:checkIsSingleColInThreeColLayout}};typeof define=="function"&&window.mtpsAmd?define("layout",["jquery"],function($){return layoutModule($)}):(window.epx=window.epx||{},window.epx.layout=layoutModule($))})();
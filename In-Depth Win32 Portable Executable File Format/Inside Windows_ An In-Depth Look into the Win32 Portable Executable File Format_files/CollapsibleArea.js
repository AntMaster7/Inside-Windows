epx=window.epx||{};epx.collapsibleArea=function(){function init(){$expandCollapseAllButton=$("a#expandCollapseAll");$titleAnchor=$("a.LW_CollapsibleArea_TitleAhref");$titleAnchor.length===0&&(isEnhanced=!1);$expandCollapseAllButton.length===0&&(isEnhanced=!1);isEnhanced||$expandCollapseAllButton.hide();expandedCaretClass="cl_CollapsibleArea_expanding LW_CollapsibleArea_Img";collapsedCaretClass="cl_CollapsibleArea_collapsing LW_CollapsibleArea_Img";expandedCaretSelector="span.cl_CollapsibleArea_expanding.LW_CollapsibleArea_Img";collapsedCaretSelector="span.cl_CollapsibleArea_collapsing.LW_CollapsibleArea_Img";var stringsAvailable=typeof window.MTPS!="undefined"&&typeof window.MTPS.LocalizedStrings!="undefined";stringsAvailable&&(isEnhanced?(expandTooltip=window.MTPS.LocalizedStrings.EnhancedExpandTooltip,collapseTooltip=window.MTPS.LocalizedStrings.EnhancedCollapseTooltip):(expandTooltip=window.MTPS.LocalizedStrings.ExpandButtonTooltip,collapseTooltip=window.MTPS.LocalizedStrings.CollapseButtonTooltip),$(".cl_CollapsibleArea_expanding").parent().attr("title",collapseTooltip),$(".cl_CollapsibleArea_collapsing").parent().attr("title",expandTooltip),$(collapsedCaretSelector).length===0&&$expandCollapseAllButton.text(window.MTPS.LocalizedStrings.CollapseAllButtonTooltip));setupEventHandlers()}function titleAnchorClicked(){var $this=$(this),$image=$this.children("span").first(),$content=$this.parent().parent().next();$image&&$content&&($this.removeAttr("title"),$content.attr("class")==="sectionblock"?($image.attr("class",collapsedCaretClass),$content.attr("class","sectionnone"),$this.attr("title",expandTooltip),$image.attr("title",expandTooltip)):($image.attr("class",expandedCaretClass),$content.attr("class","sectionblock"),$this.attr("title",collapseTooltip),$image.attr("title",collapseTooltip)),setECAButtonText())}function expandCollapseAllButtonClicked(){$(this).text()===window.MTPS.LocalizedStrings.ExpandAllButtonTooltip?expandAll():collapseAll()}function collapseAll(){$(expandedCaretSelector).parent().click();$expandCollapseAllButton.text(window.MTPS.LocalizedStrings.ExpandAllButtonTooltip)}function expandAll(){$(collapsedCaretSelector).parent().click();$expandCollapseAllButton.text(window.MTPS.LocalizedStrings.CollapseAllButtonTooltip)}function expandCollapseAll(){if(isEnhanced){var $eca=$(this);$eca.hasClass("LW_CollapsibleArea_Title")&&($eca=$($eca.parent().children().first()));$eca.hasClass("cl_CollapsibleArea_collapsing")?expandAll():$eca.hasClass("cl_CollapsibleArea_expanding")&&collapseAll();$("html, body").scrollTop($eca.offset().top-10)}}function setupEventHandlers(){$titleAnchor.click(titleAnchorClicked);$expandCollapseAllButton.click(expandCollapseAllButtonClicked);$("span.LW_CollapsibleArea_Img").dblclick(expandCollapseAll);$("span.LW_CollapsibleArea_Title").dblclick(expandCollapseAll);$(window).keyup(function(e){return e.keyCode==69&&e.shiftKey&&e.ctrlKey?($expandCollapseAllButton.trigger("click"),!1):!0})}function setECAButtonText(){$(collapsedCaretSelector).length===0?$expandCollapseAllButton.text(window.MTPS.LocalizedStrings.CollapseAllButtonTooltip):$(expandedCaretSelector).length===0&&$expandCollapseAllButton.text(window.MTPS.LocalizedStrings.ExpandAllButtonTooltip)}var isEnhanced=!0,expandTooltip="",collapseTooltip="",expandedCaretClass="",collapsedCaretClass="",expandedCaretSelector="",collapsedCaretSelector="",$expandCollapseAllButton,$titleAnchor;return{init:init}}();$(document).ready(function(){epx.collapsibleArea.init()});
document.writeln("<style type=\"text/css\">	");
document.writeln("  .adcur,.ad_mt{overflow: hidden;}					");
document.writeln("	.adcur{position: relative;line-height: 0;}");
document.writeln("	.adcur span{position:absolute;left: 0;bottom:0;height:24px;width:24px;background: url(http://jm.jmcdn.cn/public/gg_v.png) no-repeat left bottom;}");
document.writeln("	.adcur span a{color: #fff;text-decoration: none;font-size: 12px;display: block;}			");
document.writeln("</style>");

$(function(){
	var html='<span><a href="javascript: ;"></a></span>';
	var adcur=$('.dlggbox,.sdsjad,.ad1,.zsl,.index_topR .pic,.jm_focus li').find('img,embed');
	var adcur2=$('.ad_mt,.ad2,.ad2x2,.su_lan_ad,.zsl');
	adcur.each(function(){
		var Hasa=$(this).parents("a").length;
		$(this).removeAttr("title");
		if(Hasa){				    		
			$(this).parents("a").wrapAll("<div class='adcur'></div>");
			$(this).parents("a").removeAttr("title")
		}else{				    		
			$(this).wrapAll("<div class='adcur'></div>");
		}										
	});	
	 adcur2.each(function(){
		var Hasdiv=$(this).children("div").length;
		if(Hasdiv){				    		
			$(this).children("div").addClass('adcur');
		}else{				    		
			$(this).addClass('adcur');
		}										
	});	
	$('.adcur').append(html);
			$('.adcur').each(function(){
				var h=$(this).find('img,embed').height();
				var w=$(this).find('img,embed').width();
				$(this).width(w).height(h);
			});
});

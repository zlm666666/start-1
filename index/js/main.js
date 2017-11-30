$(function () {
    $('#myTab li:nth-of-type(2) a').tab('show')
})
//右边客服
$(function() {
	$(".contactusdiyou").hover(function() {
		$(".hoverimg").attr("src","images/hoverbtnbg1.gif");
		$('.diyoumask').fadeIn();
		$('.contactusdiyou').animate({right:'0'},300); 
	}, function() {
		$(".hoverimg").attr("src","images/hoverbtnbg.gif");
		$('.contactusdiyou').animate({right:'-230px'},300,function(){});
		$('.diyoumask').fadeOut();
	});
});
//下拉菜单
		$("#list>li").mouseover(function(){
			$(this).find(".oList").stop().slideDown(500);
		}).mouseleave(function(){
			$(this).find(".oList").stop().slideUp(500);
		})
        
        
//选项卡
$("li").click(
			function(){
				var ind = $(this).index();
                $(this).addClass("bg-color").siblings().removeClass("bg-color");
				$(".main1").eq(ind).addClass("show").siblings().removeClass("show");
                
			}

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"3","bdPos":"right","bdTop":"30.5"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
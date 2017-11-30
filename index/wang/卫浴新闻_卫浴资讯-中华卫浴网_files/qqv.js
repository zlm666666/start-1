/****sman 20160316 ,qq视频iframe换api****/
//按需加载qq视频代码
(function(){
	var jq = typeof(J)=='undefined'?$:J; //兼容地板
	(function(){
		var $ = jq;
		var isM = function(){
		    return /^m\./.test(location.host) || /\.chinabm\.cn\/m\//.test(location.href);
		}
		//根据iframe框架计算视频宽高
		var vsize = function(o){
			var w = $(o).attr('ow') || ($(o).css('width').replace('px', '') > 0 ? $(o).css('width').replace('px', '') : null) || $(o).attr('width') || $(o).width() || 160;
			var h = $(o).attr('oh') || $(o).attr('height') ;
			//debugger;
			if (isM()){
				if (!h||!$(o).attr('width')||/%$/.test($(o).attr('width'))) {
					h=w/160*90
					} //未指定高度或宽度时，按16：9计算高度
				
				$(o).attr('oh',h).attr('ow',w);
				$(o).css({ "width": "100%" });
				h = $(o).width() / w * h;
				w = $(o).width();
				$(o).parent("p,center").css({ "text-indent": "0px", "text-align": "center" }); //移除text-indent
			}else{
				w = $(o).attr('width');
				h = $(o).attr('height');
				
				document.write('<style>.tenvideo_player{text-align:center}</style>');
			}
			return {h:h,w:w};
		}
		$('iframe').each(function(index){
			if (/\bv\.qq\.com/.test($(this).attr('src'))){document.write('<script src="http://imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_jq.js" charset="utf-8" type="text/javascript"></sc'+'ript>');return false;}
			if (/\.youku\.com\//.test($(this).attr('src'))){
				var src = $(this).attr("src");
				if(src.match(/[A-Za-z0-9]+==/)){
					src = src.match(/[A-Za-z0-9]+==/)[0];
				}else{
					return;
				}
				var parent = $(this).parent();
				var s = vsize(this);
				$(this).remove();
				parent.append('<div id="youkuplayer' + index + '" style="width:' + s.w + 'px;height:' + s.h + 'px;margin:auto;"></div>');
				var func = function(){
					var player = new YKU.Player('youkuplayer' + index,{
						styleid: '0',
						client_id: '813d344ec5060223',
						vid: src,
						newPlayer: true
					});
				};
				$.getScript("//player.youku.com/jsapi", function(data, textStatus, jqxhr) {
					func();
				});
			}
		});
	})
	();
})();
//加载视频iframe转api调用代码
document.write('<script src="http://video.js.chinabm.cn/qqv_iframe.js?v1.153" charset="utf-8" type="text/javascript"></sc'+'ript>');
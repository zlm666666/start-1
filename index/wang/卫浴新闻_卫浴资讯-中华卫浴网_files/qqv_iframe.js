(function(){
	var jq = typeof(J)=='undefined'?$:J; //兼容地板
	(function(){
		var $ = jq;
		//根据视频数产生唯一ID
		var uniqId = (function(){
			var i=0;
			return function() {
				return i++;
			}
		})();
		var isM = function(){
		    return /^m\./.test(location.host) || /\.chinabm\.cn\/m\//.test(location.href);
		}
		//根据iframe框架计算视频宽高
		var vsize = function(o){
			var w = $(o).attr('ow') || $(o).css('width').replace('px', '') || $(o).attr('width') || $(o).width() || 160;
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
		//循环判断视频
		$("iframe").each(function(){
			var reg = /\.qq\.com.+?\bvid=([^&]+)/ig;
			var src = $(this).attr('src');
			var vid = reg.exec(src);
			vid = vid?vid[1]:null;
			if (vid){ //iframe里是qq视频
				//debugger;
				var video = new tvp.VideoInfo();
				video.setVid(vid);
				var snap = video.getVideoSnap();
				var s = vsize(this);
				var id = "qq_v_"+uniqId();
				var player_warp = $('<div id="'+id+'"><b style="text-align:center;font-size:14px;display:block;height:'+s.h+'px;">&lt;&lt;视频加载中..&gt;&gt;</b></div>').attr('id',id);
				$(this).wrap(player_warp);
				var player =new tvp.Player();
				player_warp.createTVP(
					{
						video:video,
						width:s.w,
						height:s.h,
						autoplay:false,
						isHtml5ControlAlwaysShow:true,
						isHtml5ShowPlayBtnOnPause:true,
						isHtml5ShowPosterOnStart:true,
						isHtml5UseAirPlay:true,
						share:true,
						AppRecommend: false,
						pic:tvp.common.getVideoSnapMobile(vid)
					}
				);
			}

		})

	})();

})()
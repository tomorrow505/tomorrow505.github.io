!(function() {
  function show() {
	if (location.href.match(/tomorrow505.xyz$/){
		//滚动条事件
		$("#music_div").attr("style","display:none;");
		$(window).scroll(function(){
			//获取滚动条的滑动距离
			var scroH = $(this).scrollTop();
			console.log(scroH);
			// console.log(scroH);
			//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
			if(scroH >= 120){
				$("#music_div").attr("style","display:block;");
			}else if(scroH < 120){
				$("#music_div").attr("style","display:none;");
			}
		 })
	}

  }
  show();
})();
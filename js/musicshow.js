!(function() {
	
  function isMobile(){
    let info = navigator.userAgent;
    let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    for(let i = 0; i < agents.length; i++){
        if(info.indexOf(agents[i]) >= 0) return true;
    }
    return false;
  }
	
  function show() {
	  
	if isMobile(){
		//直接把音乐框放到最后
		$("#music_div").attr("style","display:block;");
	} else {
		 //简单判断首页，因为我的域名是tomorrow50.xyz，所以首页就会触发
		if (location.href.match(/(xyz|4000|board).{0,1}$/)){
			 //直接把音乐框隐藏
			$("#music_div").attr("style","display:none;");
			 //滚动条事件
			$(window).scroll(function(){
				//获取滚动条的滑动距离
				var scroH = $(this).scrollTop();
				console.log(scroH);
				//滚动条的滑动距离大于120，就显示，反之就隐藏
				if(scroH >= 180){
					$("#music_div").attr("style","display:block; position:fixed;bottom:0px;left:30px; z-index: 100");
				}else if(scroH < 180){
					$("#music_div").attr("style","display:none;");
				}
			 })
		}
	}

  }
  show();
})();
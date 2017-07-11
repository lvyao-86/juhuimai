require(['config'],function(){
	require(['jquery','gdsZoom'],function($,gdsZoom){
		//引入头部尾部
		$('<div/>').addClass('header').load('../html/header.html',function(){
			// 加载完成后写入页面
			$(this).prependTo('.containter');
					//竖向导航的显示隐藏
			$('.colNav').on('mouseenter',function(){
			$('.catList').stop().fadeIn();}).on('mouseleave',function(){
			$('.catList').stop().fadeOut();
			})
		});
		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			// 加载完成后写入页面
			$(this).appendTo('.containter');
		});

		//放大镜
		$('.goods').gdsZoom({
			width:"400px",
			height:"400px",
			position:'right'
		});

	})
})
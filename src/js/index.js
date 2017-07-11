require(['config'],function(){
	require(['jquery','lxCarousel'],function($){	

		//引入头部尾部
		$('<div/>').addClass('header').load('./html/header.html',function(){
			// 加载完成后写入页面
			$(this).prependTo('.containter');
		});
		$('<div/>').addClass('footer').load('./html/footer.html',function(){
			// 加载完成后写入页面
			$(this).appendTo('.containter');
		})


		//轮播图
		$('.banner .carousel').lxCarousel({
			imgs:['../img/lunbo1.jpg','../img/lunbo2.jpg','../img/lunbo3.jpg','../img/lunbo4.jpg',
			'../img/lunbo5.jpg','../img/lunbo6.jpg'],
			type:'fade',
			buttons:false,
			width:'900px',
			height:'350px',
			duration:2000,
			small:true
		})
		$('.banner .tuijian').on('mouseenter','img',function(){
				$(this).stop().animate({left:'-35px'})
		}).on('mouseleave','img',function(){
			$(this).stop().animate({left:0})
		})


		//热门商店
		$('.hotstore .hot2').on('mouseenter','a',function(){
			$(this).find('img').stop().animate({top:'30%'})
		}).on('mouseleave','a',function(){
			$(this).find('img').stop().animate({top:'50%'})
		})	


		//楼梯效果
		var $nav = $('#LoutiNav');
		var $main = $('#main');
		var $floor = $main.children('.Louti');

			// 1、滚动距离大于1000时时显示导航，否则隐藏
		$(window).on('scroll',scrollHandler);

		function scrollHandler(){
			// 获取滚动条滚动过的距离
			var scrollTop = $(window).scrollTop();

			if(scrollTop >= 1300){
				// console.log(scrollTop)
				// $nav.show();
				$nav.fadeIn();
			}else{
				// $nav.hide();
				$nav.fadeOut();
			}


			// 2、滚动高亮显示对应导航
			// *找出当前显示楼层的索引值
			$floor.each(function(idx,ele){
				// 0-10
				// if(scrollTop >= ele.offsetTop - ele.offsetHeight/2){
				if(scrollTop < ele.offsetTop && scrollTop >= ele.offsetTop - ele.offsetHeight/3){
					$nav.find('li').eq(idx).addClass('hover').siblings().removeClass('hover');

					// 退出循环，避免多余的遍历
					return false;
				}
			});
		}

			// 3、点击滚动到对应楼层
		$nav.on('click','li',function(){
			// 避免点击时进入scroll事件
			$(window).off('scroll');

			var idx = $(this).index();
			console.log(idx)
			$(this).addClass('hover').siblings().removeClass('hover');

			var scrollTop;

			// 返回顶部
			if($(this).hasClass('last')){
				scrollTop = 0;
			}else{
				scrollTop = $floor.eq(idx).offset().top;
			}


			$('html,body').animate({'scrollTop':scrollTop},function(){

				$(window).on('scroll',scrollHandler);
			});
		})	

		//楼梯上的标签切换
		var $tab=$('.Louti .tab');
		var	$content=$('.Louti .louti_m').children('.content');
		$tab.children().eq(0).addClass('active');
		$content.eq(0).show();
		$tab.on('mouseenter','span',function(){
			var idx =$(this).index();
			$(this).addClass('active').siblings().removeClass('active')
			$content.eq(idx).stop().show().siblings().hide();
		})
	})
	
})
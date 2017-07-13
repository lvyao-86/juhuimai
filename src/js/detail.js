require(['config'],function(){
	require(['jquery','gdsZoom','common'],function($,gdsZoom,common){
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
		//请求数据
		//获取地址栏guid
		var guid=location.search.slice(6);
		console.log(guid);
		$.ajax({
			url:'../api/detail.php',
			dataType:'json',
			data:{
				guid:guid
			},
			success:function(res){
				console.log(res)
				res.forEach(function(item){
					$('.category').html(item.category);
					$('.name').html(item.name).attr({guid:item.id});
					$('.goods').find('img').attr({
						src:'../img/images/'+item.img,
						'data-big':'../img/images/'+item.img
					});
					$('.explain').children('h2').html(item.goods);
					$('.Curprice').html('￥'+item.Curprice);
					$('.price').html('￥'+item.price);
					$('.smallImg')[0].innerHTML=`
						<img src="../img/images/${item.img}" data-big="../img/images/${item.img}" />
						<img src="../img/images/${item.img}" data-big="../img/images/${item.img}" />
						<img src="../img/images/${item.img}" data-big="../img/images/${item.img}" />
						<img src="../img/images/${item.img}" data-big="../img/images/${item.img}" />
					`
				});
				//飞入购物车，并写入cookies	
				
				$('.car').on('click',function(){
					var $cloneImg=$goods.clone();
					$cloneImg.css({
		                position:'absolute',
		                left:$goods.offset().left,
		                top:$goods.offset().top,
		                width:$goods.outerWidth(),
		                height:$goods.outerHeight()
		            }).appendTo('body');
			               // 图片飞入动画效果
	                // 动画完成后，把复制li写入购物车列表
	                $cloneImg.animate({
	                    left:900,
	                    top:0,
	                    width:10,
	                    height:10
	                },function(){
	                   // 删除动画图片
	                   $cloneImg.remove();
	                });     
				})				
				//放大镜
				$('.goods').gdsZoom({
					width:"400",
					height:"400"
				});

				//加减数量
					var  $input=$('.quanlity')
				$('.jian').on('click',()=>{
					var count=$input.val();
					count--;
					if(count<0){
						count=0;
					}
					$input.val(count);
				})
				$('.jia').on('click',()=>{
					var count=$input.val();
					count++;
					$input.val(count);
				})
				//点击切换图片
				var $smallImg =$('.smallImg');
				var $goods=$('.goods').find('img');
				$smallImg.children('img').eq(0).addClass('active');
				$smallImg.on('click','img',function(){
					$(this).addClass('active').siblings().removeClass('active');
					$goods.attr({
						src:$(this).attr('src'),
						'data-big':$(this).attr('data-big')
					})
				})
				

				

			}


		})

		

	})
})
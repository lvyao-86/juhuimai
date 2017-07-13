require(['config'],function(){
	require(['jquery','lxCarousel','common'],function($,lxCarousel,common){
		//引入头部尾部
		$('<div/>').addClass('header').load('../html/header.html',function(){
			// 加载完成后写入页面
			$(this).prependTo('.containter');
				//竖向导航的显示隐藏
			$('.colNav').on('mouseenter',function(){
				$('.catList').stop().fadeIn();})
				.on('mouseleave',function(){
				$('.catList').stop().fadeOut();
			})

		});
		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			// 加载完成后写入页面
			$(this).appendTo('.containter');
		});

		$('.carousel').lxCarousel({
			imgs:['../img/list_img1.jpg','../img/list_img2.jpg','../img/list_img3.jpg'],
			type:'fade',
			width:'1300px',
			height:'470px',
			duration:2000,
			buttons:false
		});

		//分页加载
		let $goods = $('.goods');
		let pageNo = 1;
		let qty = 10;
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				console.log(res);
				showList(res);

				// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str);
			}
		})
			// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();
			$.ajax({
				url:'../api/list.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					showList(res);
				}
			});

			return false;
		});
		function showList(res){
			let  html= res.data.map(item=>{
				return `
					<li data-guid="${item.id}">
						<a class="goodsImg" href="./detail.html?guid=${item.id}"><img src="../img/images/${item.img}"/></a>
						<p class="product">${item.goods}</p>
						<p><strong style="font-size:20px ;color:red;">${item.Curprice}</strong> 
						<i style="text-decoration:line-through">${item.price}</i>
						<span class="buycar"><img src="../img/shopcar.jpg"/></span></p>
					</li>
				`
			}).join('');
			$('.list>h2').html(res.data[0].category)
			$('.goods').html(html);
		}

		//添加购物车，写入cookie	
		//Unexpected end of JSON input
			//JSON.parse中的字符串不符合规则
			//点击购物车，添加cookies
		var goodslist = common.getCookie('goodslist');
			goodslist = goodslist ? JSON.parse(goodslist) : [];
			// 给button绑定点击事件
			// 利用事件委托
			$goods.on('click','.buycar',function(){
				var $currentLi = $(this).closest('li');
				var guid = $currentLi.data('guid');
				console.log(guid,$currentLi)
				// 关键：判断当前商品是否存在cookie
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){
						goodslist[i].qty++;
						break;
					}
				}
				// 商品不存cookie中
				if(i===goodslist.length){
					// 获取<当前>商品的信息
					var goods = {
						guid:guid,
						imgurl:$currentLi.find('.goodsImg>img').attr('src'),
						product:$currentLi.find('.product').html(),
						price:$currentLi.find('strong').html(),
						qty:1
					};

					// 往数组中添加当前商品
					goodslist.push(goods);
				}
					// 设置cookie
					// cookie保存的是字符串
					// JSON.stringify()：把对象/数组转成json字符串
					common.setCookie('goodslist',JSON.stringify(goodslist));

				var $img =$currentLi.find('.goodsImg>img');
				var $cloneImg=$img.clone();
					$cloneImg.css({
		                position:'absolute',
		                left:$img.offset().left,
		                top:$img.offset().top,
		                width:$img.outerWidth(),
		                height:$img.outerHeight()
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
	})
})
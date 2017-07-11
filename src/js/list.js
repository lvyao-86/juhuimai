require(['config'],function(){
	require(['jquery','lxCarousel'],function($,lxCarousel){
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
					<li>
						<a class="goodsImg" href="./detail.html"><img src="../img/images/${item.img}"/></a>
						<p>${item.goods}</p>
						<p><strong style="font-size:20px ;color:red;">${item.Curprice}</strong> 
						<i style="text-decoration:line-through">${item.price}</i>
						<span class="iconfont iconfont-gouwuche1"></span></p>
					</li>
				`
			}).join('');
			$('.list>h2').html(res.data[0].category)
			$('.goods').html(html);
		}
	})
})
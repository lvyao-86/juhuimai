require(['config'],function(){
	require(['jquery','common'],function($,common){
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

		// 获取cookie商品信息
		var goodslist = common.getCookie('goodslist');
		// 把json字符串转换成数组/对象
		// JSON.parse(json)
		goodslist = goodslist ? JSON.parse(goodslist) : [];
		console.log(goodslist);		
		render();
		var $checkall = $('#checkall');
		var $check =$('tbody').find(':checkbox');
		sum();
		//结构
		function render(){
			$('tbody')[0].innerHTML=goodslist.map(function(item){
				var sub =(item.price*item.qty).toFixed(2);

				return ` 
						<tr>
							<td><input type="checkbox"></td>
							<td class="product">
								<img class="imgurl" src=${item.imgurl}>
								<a class="goods" href="">${item.product}</a>
							</td>
							<td> <i class="jian">-</i><input class="qty" type="text" value="${item.qty}" disabled><i class="jia">+</i></td>
							<td class="Curprice">${item.price}</td>
							<td class="subtotal">${sub}</td>
							<td><span class="clear">删除</span></td>
						</tr>
				`
			}).join('');
		};
		//重置cookie
		function cookie(){
			common.setCookie('goodslist',JSON.stringify(goodslist));
			goodslist = common.getCookie('goodslist');
			goodslist = goodslist ? JSON.parse(goodslist) : [];
			render();
		};
		//应付总额
		function sum(){
			var $subtotal = $('.subtotal')
			var sum=0;
			$subtotal.each(function(idx,item){
				var $checkbox = $check.eq(idx) 
				if($checkbox.prop('checked')){
						console.log($(item).html())
					sum += Number($(item).html())
				}
			})
			$('.sum').html('￥'+sum);
		}
	//全选按钮
		// console.log($check)
		
		$checkall.on('click',function(){
			console.log($check)
			$check.prop('checked',this.checked)
			sum();
				console.log($check.prop('checked'))
		});
		//清空购物车
		$('.allclear').on('click',function(){
			if($check.prop('checked')){
				goodslist=[];
				cookie();
				sum();
			};
		});
		//点击每一项商品
		$('.shoplist tbody').on('click',':checkbox',function(){
				sum();
		})
		
		//删除单项商品
		$('.shoplist').on('click','.clear',function(){
			var idx = $(this).closest('tr').index();
			goodslist.splice(idx,1);
			common.setCookie('goodslist',JSON.stringify(goodslist));
			
			$(this).closest('tr').remove();
			sum();
		}).on('click','.jian',function(){
			$tr =$(this).closest('tr')
			var idx = $tr.index();
			goodslist[idx].qty--;
			if(goodslist[idx].qty<=0){
				goodslist[idx].qty=0;
			}
			common.setCookie('goodslist',JSON.stringify(goodslist));

			var Curprice =$tr.find('.Curprice').html();
			var sub = (Curprice*goodslist[idx].qty).toFixed(2);
			$tr.find('.qty').val(goodslist[idx].qty);
			$tr.find('.subtotal').html(sub)
			sum();
		}).on('click','.jia',function(){
			$tr =$(this).closest('tr')
			var idx = $tr.index();
			goodslist[idx].qty++;
			common.setCookie('goodslist',JSON.stringify(goodslist));

			var Curprice =$tr.find('.Curprice').html();
			var sub = (Curprice*goodslist[idx].qty).toFixed(2);
			$tr.find('.qty').val(goodslist[idx].qty);
			$tr.find('.subtotal').html(sub)
			sum();
		})
		
		

		//继续购物
		$('.continue').on('click',function(){
			location.href='./list.html'
		})
	})
})
require(['config'],function(){
	require(['jquery'],function($){
		//引入头部尾部
		$('<div/>').addClass('header').load('../html/header.html',function(){
			// 加载完成后写入页面
			$(this).prependTo('.containter');
		});
		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			// 加载完成后写入页面
			$(this).appendTo('.containter');
		})
		//登录
		$('#btnReg').on('click',function(){
			$.ajax({
				url:'../api/user.php',
				data:{
					name:$('#username').val(),
					password:$('#password').val()
				},
				success:(res)=>{
					console.log(res)
					var res =JSON.parse(res);
					if(res.length==1){
						location.href="../index.html"
					}else{
						console.log(res)
						alert("用户名不存在或密码输出错误") 
					}
				}
			});
		});
	})
})
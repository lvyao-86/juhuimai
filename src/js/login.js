require(['config'],function(){
	require(['jquery','common'],function($,common){
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
		
			if($('#username').val()=='' || $('#password').val()=='' ){
				alert('用户名或密码不能为空')
				}else{
				$.ajax({
					url:'../api/user.php',
					type:'get',
					data:{
						name:$('#username').val(),
						password:$('#password').val()
					},
					success:(res)=>{				
						console.log(res)					
						if(res){
							var res =JSON.parse(res);
							location.href="../index.html?user="+res[0].name;
						}else{
							// console.log(res)
							alert("用户名不存在或密码输出错误") 
						}
					}
				});
			}
		
		});

				//记住我
			var $remember=$('#remember');
		
		$remember.on('click',function(){
			var $user = $('#username').val();
			var $password = $('#password').val();
					console.log($remember[0].checked)
			if($remember[0].checked){
				var msg=[{user:$user,password:$password}]
				common.setCookie(msg,JSON.stringify(msg))
			}else{
				common.removeCookie(msg);
			}
		})
			

		
	})
})
require(['config'],function(){
	require(['jquery','validate','messages'],function($,validate,messages){
		//引入头部尾部
		$('<div/>').addClass('header').load('../html/header.html',function(){
			// 加载完成后写入页面
			$(this).prependTo('.containter');
		});
		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			// 加载完成后写入页面
			$(this).appendTo('.containter');
		})

		// 阅读并同意必须勾选
		var $checkbox = $(':checkbox');
		var $btn = $('button');
		$btn.attr('title','注册前必须同意协议');	
		$checkbox.prop('disabled',false).on('click',function(){
			if(this.checked){
				$btn.prop('disabled',false);
			}else{
				$btn.prop('disabled',true);
			}
		});

		$('form').validate({
            // 验证规则
            rules:{
                username:{
                    required:true,
                    rangelength:[6,12]
                },
            	password:{
                    required:true,
                    rangelength:[6,12]
                },
                repassword:{
                	required:true,
                	equalTo:'#password'
                },
                phone:{
                	required:true,
                	number:true
                },
                email:{
                	required:true,
                	email:true
                }

            },

            // 自定义提示
            messages:{
                username:{
                    required:'*请输入用户名',
                    rangelength:$.validator.format("用户名长度为{6}-{12}个字符"),
  					remote:"该用户名已存在！"
                },
                password:{
                    required:'*请输入密码'
                },
                repassword:{
                	required:"*请再次输入密码",
  					equalTo:"两次密码必须一致" //表示和id="spass"的值相同
                },
                phone:{
                	required:"*请输入手机号"
                },
                email:{
                	required:"*请填写邮件",
  					email:"*邮箱格式不正确"
                }
            }
        });
		
		// 点击提交传递信息到后台
		$btn.on('click',function(){
			
			var $username = $('#username').val();
			var $password = $('#password').val();
			var $repassword = $('#repassword').val();

			if($username == '' || $password == ''){
				$checkbox.prop('checked',false);
				$btn.prop('disabled',true).addClass('no');
				alert('用户名密码不能为空值');
			}
			else{
				console.log(444)
				$.ajax({
					url:'../api/register.php',
					type:'get',
					data:{
						name:$username,
						password:$password
					},
					success:function(res){
						console.log(res);
						if(res === 'ok'){
							confirm('恭喜您注册成功，赶紧登陆抢购吧！');
						}else if(res == '用户已存在'){
							alert('用户名已经存在，请另起一个用户名');
							$(':input').val('');
						}
					}
				});
			}
			// button标签会有默认行为，跳转到新的页面，会导致代码执行情况没法看见
			// 若使用input标签则不需要阻止浏览器默认行为
			return false;

		})
	})
})
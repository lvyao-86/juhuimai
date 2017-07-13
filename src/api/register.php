<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	include 'connect.php';

	// 接收前端传回的数据
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	//先查询库内是否已存在
	$sql = "select username from user";

	// 查找指定name信息
	if($name){
		$sql .= " where username='$name'";
	}

	$res = $conn->query($sql);
	$rows = $res->fetch_all(MYSQLI_ASSOC);
	if($rows){
		print_r($rows) ;
	}else{
			// md5加密密码
		// $password = md5($password);

		// 添加用户信息
		$sql = "insert into user(username,password) values('$name','$password')";

		// echo $sql;

		// 查询数据库
		$result = $conn->query($sql);

		//使用查询结果	
		if($result){
			echo "数据写入成功";
		}else{
			echo "Error:" . $sql . "<br/>" . $conn->error;
		}
	}
	//关闭链接
	$conn->close();
?>
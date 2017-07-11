<?php
	include 'connect.php';
		// 接收前端传回的数据
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	// md5加密密码
	// $password = md5($password);

	// 查找所有用户信息
	$sql = "select * from user";
	// 查找指定name信息
	if($name){
		$sql .= " where name='$name' and password='$password'";		
	}
	// 查询数据库
		$result = $conn->query($sql);
	//使用查询结果	
		$row = $result->fetch_all(MYSQLI_ASSOC);
	if($row){
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
	}


?>
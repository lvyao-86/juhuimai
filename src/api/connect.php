<?php

	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'juhuimai';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_error){
		die('连接失败'.$conn->connect_error);
	}

	// 设置编码格式
	$conn->set_charset('utf8');


?>
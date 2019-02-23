<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接收数据
	$userphone = $_POST['userphone'];
	$userpass = $_POST['userpass'];
	//2.处理（将数据保存在数据库里）
	//1、创建连接（搭桥）
	$conn = mysql_connect('localhost','root','root');

	if(!$conn){
		// die("没有连成功");
		echo "服务器端出错！";
	}else{
		//2、选择数据库（目的地）
		mysql_select_db("meizu",$conn);

		//3、传输数据（运送）
		//3.1)、定义一个字符串，写上SQL语句
		$sqlstr="insert into userinfo(username,userpass)
              values('$userphone',$userpass)";
        //3.2)、执行SQL语句
        $result = mysql_query($sqlstr,$conn);

		//4、关闭数据库（过河拆桥）
        mysql_close($conn);
       if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
		//3.响应
?>
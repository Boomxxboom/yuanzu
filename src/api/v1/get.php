<?php 
	include("db.php");

	$sql = "select * from shop";

	$res = mysql_query($sql);

	$arr = array();

	while ($row = mysql_fetch_assoc($res)) {
		array_push($arr, $row);
	}

	$resArr = array(
		'res_code' => 1,
		'res_message' => '查询成功',
		'res_body' => array('data' => $arr)
	);

	echo json_encode($resArr);



 ?>
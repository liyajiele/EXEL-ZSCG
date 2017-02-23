<?php
    include "db.php";
    $result=$mysql->query("select * from li");
    $arr=array();
    while($row=$result->fetch_assoc()){
    	$arr[]=$row;
    }	
	echo json_encode($arr);
?>
<?php
    include "db.php";
	$id=$_GET["id"];
    $attr=$_GET["attr"];
    $value=$_GET["value"];
    $sql="update li set {$attr}='{$value}' where id='{$id}'";
    $mysql->query($sql);
	if($mysql->affected_rows>0){
   		echo "ok";
   	}
	
	
?>
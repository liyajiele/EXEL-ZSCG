<?php
    include "db.php";
    $id=$_GET["id"];
    $mysql->query("delete from li where id=".$id);
    if($mysql->affected_rows>0){
    	echo "ok";
    }	
	
	
?>
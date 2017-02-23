<?php
    include "db.php";
    $mysql->query("insert into li (name,age,sex,num) values ('','','','')")	;
	if($mysql->affected_rows>0){
		echo $mysql->insert_id;
	}

?>
<?php
function MySQLConnction($task) {
	
	if($task == "open" || $task == ""){
		$host = "127.0.0.1";
		$user = "root";
		$pass = "root";
		$db = "library";
	
		$connection = mysql_connect($host, $user, $pass) or die ("Unable to connect!");
		mysql_select_db($db) or die ("Unable to select database!"); 
	}
	
	if($task == "close") {
		if(isset($connection)){
			mysql_close($connection);
		}
	}
}
?>
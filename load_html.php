<?php

include 'config.php';

session_start();
ob_start();
$con = mysqli_connect( $host, $user, $pass, $db);

if (!empty($_GET['project_id'])) {
    $query = mysqli_query(
        $con,
        sprintf("select html from html where project_id=%s", $_GET['project_id'])
    );
    while ($row = mysqli_fetch_array($query)) {
	    $html = $row[0];
	}
	echo json_encode($html);exit;
}
?>
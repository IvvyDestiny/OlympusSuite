<?php
$data = json_decode(file_get_contents("php://input"), true);
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];
$status = $data['status'];
$line = date("Y-m-d H:i:s") . " | IP: $ip | UA: $ua | Status: $status" . PHP_EOL;
file_put_contents(__DIR__ . "/logs/admin_access.log", $line, FILE_APPEND);
?>

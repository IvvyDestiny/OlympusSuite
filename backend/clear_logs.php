<?php
$logfile = __DIR__ . "/logs/admin_access.log";
file_put_contents($logfile, "");
echo json_encode(["status" => "ok"]);
?>

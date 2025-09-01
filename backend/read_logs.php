<?php
$logfile = __DIR__ . "/logs/admin_access.log";
if (!file_exists($logfile)) {
    echo json_encode([]);
    exit;
}
$lines = file($logfile, FILE_IGNORE_NEW_LINES);
echo json_encode($lines);
?>

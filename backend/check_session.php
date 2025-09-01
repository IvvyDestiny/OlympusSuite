<?php
session_start();

$allowed_networks = json_decode(file_get_contents(__DIR__ . "/allowed_networks.json"), true);
$user_ip = $_SERVER['REMOTE_ADDR'];

if (!in_array($user_ip, $allowed_networks['ips'])) {
    echo json_encode(["valid" => false, "reason" => "IP não autorizado"]);
    exit;
}

if (!isset($_SESSION['adm_logged']) || $_SESSION['adm_logged'] !== true) {
    echo json_encode(["valid" => false, "reason" => "Sessão inválida"]);
    exit;
}

$login_time = $_SESSION['login_time'];
if (time() - $login_time > 3600) {
    session_destroy();
    echo json_encode(["valid" => false, "reason" => "Sessão expirada"]);
    exit;
}

echo json_encode(["valid" => true]);
?>

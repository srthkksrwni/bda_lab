<?php
$config = require_once __DIR__ . "/../config/config.php";
session_start();
$_SESSION["admin_id"] = 1;
$_SESSION["admin_username"] = "admin";
header("Location: " . $config["FRONTEND_URL"] . "/admin/dashboard");
exit();
?>

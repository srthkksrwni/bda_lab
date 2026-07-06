<?php
$config = require_once __DIR__ . "/../config/config.php";

session_start();

header("Access-Control-Allow-Origin: " . $config["FRONTEND_URL"]);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

session_unset();
session_destroy();

echo json_encode([
    "success" => true,
    "message" => "Logged out successfully."
]);
?>
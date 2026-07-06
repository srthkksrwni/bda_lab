<?php
$config = require_once __DIR__ . "/../config/config.php";

session_start();

header("Access-Control-Allow-Origin: " . $config["FRONTEND_URL"]);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if (isset($_SESSION["admin_id"])) {
    echo json_encode([
        "success" => true,
        "loggedIn" => true,
        "admin" => [
            "id" => $_SESSION["admin_id"],
            "username" => $_SESSION["admin_username"]
        ]
    ]);
} else {
    echo json_encode([
        "success" => false,
        "loggedIn" => false
    ]);
}
?>

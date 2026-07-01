<?php
$config = require __DIR__ . "/config.php";

// header("Access-Control-Allow-Origin: " . $config["FRONTEND_URL"]);
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

$conn = new mysqli(
    $config["DB_HOST"],
    $config["DB_USER"],
    $config["DB_PASS"],
    $config["DB_NAME"]
);

if ($conn->connect_error) {

    die(json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]));
}
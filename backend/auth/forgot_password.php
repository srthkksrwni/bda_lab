<?php
$config = require_once __DIR__ . "/../config/config.php";

header("Access-Control-Allow-Origin: " . $config["FRONTEND_URL"]);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";

$sql = "SELECT id FROM admin_users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 1) {
    echo json_encode([
        "success" => true,
        "message" => "Email verified. You can reset password."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Admin email not found."
    ]);
}

$conn->close();
?>
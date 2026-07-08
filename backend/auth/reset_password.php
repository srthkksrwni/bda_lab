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
include "../utils/send_alert.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data["email"] ?? "");
$newPassword = trim($data["newPassword"] ?? "");

if (empty($email) || empty($newPassword)) {
    echo json_encode([
        "success" => false,
        "message" => "Email and new password are required."
    ]);
    exit();
}

$sqlCheck = "SELECT id, username, email FROM admin_users WHERE email = ?";
$stmtCheck = $conn->prepare($sqlCheck);
$stmtCheck->bind_param("s", $email);
$stmtCheck->execute();
$result = $stmtCheck->get_result();

if ($result->num_rows !== 1) {
    echo json_encode([
        "success" => false,
        "message" => "Admin email not found."
    ]);
    exit();
}

$admin = $result->fetch_assoc();

$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

$sql = "UPDATE admin_users SET password = ? WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $hashedPassword, $email);

if ($stmt->execute() && $stmt->affected_rows > 0) {
    sendAlert(
        "Admin Password Changed",
        "Password was changed for admin <b>" . $admin["username"] . "</b><br>Email: " . $admin["email"]
    );

    echo json_encode([
        "success" => true,
        "message" => "Password reset successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Email not found or password not updated."
    ]);
}

$stmtCheck->close();
$stmt->close();
$conn->close();
?>
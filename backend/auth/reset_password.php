<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

include "../config/db.php";

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

$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

$sql = "UPDATE admin_users SET password = ? WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $hashedPassword, $email);

if ($stmt->execute() && $stmt->affected_rows > 0) {
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

$stmt->close();
$conn->close();
?>
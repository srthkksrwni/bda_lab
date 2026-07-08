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
$otp = trim($data["otp"] ?? "");
$newPassword = trim($data["newPassword"] ?? "");

if ($email === "" || $otp === "" || $newPassword === "") {
    echo json_encode(["success" => false, "message" => "Email, OTP and password are required."]);
    exit();
}

$sql = "SELECT id, username, email, reset_otp, reset_otp_expiry FROM admin_users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    echo json_encode(["success" => false, "message" => "Admin email not found."]);
    exit();
}

$admin = $result->fetch_assoc();

if ($admin["reset_otp"] !== $otp) {
    echo json_encode(["success" => false, "message" => "Invalid verification code."]);
    exit();
}

if (strtotime($admin["reset_otp_expiry"]) < time()) {
    echo json_encode(["success" => false, "message" => "Verification code expired."]);
    exit();
}

$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

$update = $conn->prepare("UPDATE admin_users SET password = ?, reset_otp = NULL, reset_otp_expiry = NULL WHERE email = ?");
$update->bind_param("ss", $hashedPassword, $email);

if ($update->execute()) {
    sendAlert(
        "Admin Password Changed",
        "Password was changed for admin <b>" . $admin["username"] . "</b><br>Email: " . $admin["email"]
    );

    echo json_encode(["success" => true, "message" => "Password reset successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Password not updated."]);
}

$conn->close();
?>
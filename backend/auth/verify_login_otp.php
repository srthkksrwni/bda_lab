<?php
$config = require_once __DIR__ . "/../config/config.php";

session_start();

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

$admin_id = intval($data["admin_id"] ?? 0);
$otp = trim($data["otp"] ?? "");

if ($admin_id === 0 || $otp === "") {
    echo json_encode(["success" => false, "message" => "OTP is required."]);
    exit();
}

$sql = "SELECT id, username, email, login_otp, login_otp_expiry FROM admin_users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $admin_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    echo json_encode(["success" => false, "message" => "Admin not found."]);
    exit();
}

$admin = $result->fetch_assoc();

if ($admin["login_otp"] !== $otp) {
    echo json_encode(["success" => false, "message" => "Invalid verification code."]);
    exit();
}

if (strtotime($admin["login_otp_expiry"]) < time()) {
    echo json_encode(["success" => false, "message" => "Verification code expired."]);
    exit();
}

$_SESSION["admin_id"] = $admin["id"];
$_SESSION["admin_username"] = $admin["username"];

$clear = $conn->prepare("UPDATE admin_users SET login_otp = NULL, login_otp_expiry = NULL WHERE id = ?");
$clear->bind_param("i", $admin["id"]);
$clear->execute();

sendAlert(
    "Admin Login Alert",
    "Admin <b>" . $admin["username"] . "</b> logged in successfully.<br>Email: " . $admin["email"]
);

echo json_encode([
    "success" => true,
    "message" => "Login successful.",
    "admin" => [
        "id" => $admin["id"],
        "username" => $admin["username"],
        "email" => $admin["email"]
    ]
]);

$conn->close();
?>
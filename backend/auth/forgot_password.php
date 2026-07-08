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

if ($email === "") {
    echo json_encode(["success" => false, "message" => "Email is required."]);
    exit();
}

$sql = "SELECT id, username, email FROM admin_users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $admin = $result->fetch_assoc();

    $otp = rand(100000, 999999);
    $expiry = date("Y-m-d H:i:s", strtotime("+10 minutes"));

    $update = $conn->prepare("UPDATE admin_users SET reset_otp = ?, reset_otp_expiry = ? WHERE email = ?");
    $update->bind_param("sss", $otp, $expiry, $email);
    $update->execute();

    sendAlert(
        "Password Reset Verification Code",
        "Password reset code for admin <b>" . $admin["username"] . "</b>: <h2>$otp</h2><p>This code is valid for 10 minutes.</p>"
    );

    echo json_encode([
        "success" => true,
        "message" => "Verification code sent to admin email."
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Admin email not found."]);
}

$conn->close();
?>
<?php
$config = require_once __DIR__ . "/../config/config.php";

ini_set("display_errors", 0);
error_reporting(0);

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

include "../config/db.php";
include "../utils/send_alert.php";

$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"] ?? "");
$password = trim($data["password"] ?? "");

if ($username === "" || $password === "") {
    echo json_encode(["success" => false, "message" => "Username and password are required."]);
    exit();
}

$sql = "SELECT id, username, email, password FROM admin_users WHERE username = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows === 1) {
    $admin = $result->fetch_assoc();

    if (password_verify($password, $admin["password"])) {
        $otp = rand(100000, 999999);
        $expiry = date("Y-m-d H:i:s", strtotime("+10 minutes"));

        $update = $conn->prepare("UPDATE admin_users SET login_otp = ?, login_otp_expiry = ? WHERE id = ?");
        $update->bind_param("ssi", $otp, $expiry, $admin["id"]);
        $update->execute();

        sendAlert(
            "Admin Login Verification Code",
            "Your login verification code is: <h2>$otp</h2><p>This code is valid for 10 minutes.</p>"
        );

        echo json_encode([
            "success" => true,
            "otp_required" => true,
            "message" => "Verification code sent to admin email.",
            "admin_id" => $admin["id"]
        ]);
        exit();
    }

    echo json_encode(["success" => false, "message" => "Invalid password."]);
    exit();
}

echo json_encode(["success" => false, "message" => "Admin not found."]);
exit();
?>
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
    echo json_encode([
        "success" => false,
        "message" => "Username and password are required."
    ]);
    exit();
}

$sql = "SELECT id, username, email, password FROM admin_users WHERE username = ? OR email = ?";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => "SQL error"
    ]);
    exit();
}

$stmt->bind_param("ss", $username, $username);
$stmt->execute();

$result = $stmt->get_result();

if ($result && $result->num_rows === 1) {

    $admin = $result->fetch_assoc();

    if (password_verify($password, $admin["password"])) {

        $_SESSION["admin_id"] = $admin["id"];
        $_SESSION["admin_username"] = $admin["username"];

        sendAlert(
            "✅ Admin Login Alert",
            "
            <b>Admin Login Successful</b><br><br>

            <b>Username:</b> {$admin['username']}<br>
            <b>Email:</b> {$admin['email']}<br>
            <b>IP Address:</b> {$_SERVER['REMOTE_ADDR']}<br>
            <b>Time:</b> " . date("d-m-Y h:i:s A")
        );

        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "admin" => [
                "id" => $admin["id"],
                "username" => $admin["username"],
                "email" => $admin["email"]
            ]
        ]);

        exit();
    }

    // Wrong password
    sendAlert(
        "❌ Failed Admin Login",
        "
        <b>Wrong Password Attempt</b><br><br>

        <b>Username/Email Entered:</b> {$username}<br>
        <b>IP Address:</b> {$_SERVER['REMOTE_ADDR']}<br>
        <b>Time:</b> " . date("d-m-Y h:i:s A")
    );

    echo json_encode([
        "success" => false,
        "message" => "Invalid password."
    ]);

    exit();
}

// Username not found
sendAlert(
    "⚠ Unknown Admin Login Attempt",
    "
    <b>Unknown Username/Email Attempt</b><br><br>

    <b>Entered:</b> {$username}<br>
    <b>IP Address:</b> {$_SERVER['REMOTE_ADDR']}<br>
    <b>Time:</b> " . date("d-m-Y h:i:s A")
);

echo json_encode([
    "success" => false,
    "message" => "Admin not found."
]);

exit();

?>
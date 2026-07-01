<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$full_name = trim($data["full_name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$query_message = trim($data["query_message"] ?? "");

#validation:
if (!preg_match("/^[A-Za-z ]{3,100}$/", $full_name)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid full name."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email."
    ]);
    exit();
}

if (strlen($query_message) < 10 || strlen($query_message) > 1000) {
    echo json_encode([
        "success" => false,
        "message" => "Query must be between 10 and 1000 characters."
    ]);
    exit();
}
if ($full_name === "" || $email === "" || $phone === "" || $query_message === "") {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required."
    ]);
    exit();
}

$stmt = $conn->prepare(
    "INSERT INTO contact_messages (full_name, email, phone, query_message) VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $full_name, $email, $phone, $query_message);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Message submitted successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Message submission failed."
    ]);
}

$stmt->close();
$conn->close();

?>
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

$partner_name = trim($data["partner_name"] ?? "");
$logo = trim($data["logo"] ?? "");

if ($partner_name === "" || $logo === "") {
    echo json_encode([
        "success" => false,
        "message" => "Partner name and logo are required."
    ]);
    exit();
}

$stmt = $conn->prepare(
    "INSERT INTO funding_collaboration (partner_name, logo) VALUES (?, ?)"
);

$stmt->bind_param("ss", $partner_name, $logo);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Funding partner added successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add funding partner."
    ]);
}

$stmt->close();
$conn->close();

?>
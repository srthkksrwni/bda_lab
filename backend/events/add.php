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

$category_id = trim($data["category_id"] ?? "");
$category_label = trim($data["category_label"] ?? "");
$citation = trim($data["citation"] ?? "");
$link = trim($data["link"] ?? "");

if ($category_id === "" || $category_label === "" || $citation === "") {
    echo json_encode([
        "success" => false,
        "message" => "Category and citation are required."
    ]);
    exit();
}

$stmt = $conn->prepare(
    "INSERT INTO events (category_id, category_label, citation, link) VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $category_id, $category_label, $citation, $link);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Event added successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Event add failed."
    ]);
}

$stmt->close();
$conn->close();

?>
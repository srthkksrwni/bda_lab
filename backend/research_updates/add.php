<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$year = $data["year"];

$sql = "INSERT INTO research_updates (title, year) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $title, $year);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Research update added successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add research update"
    ]);
}
?>
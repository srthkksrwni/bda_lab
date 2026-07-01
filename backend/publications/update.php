<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$category = $data["category"];
$citation = $data["citation"];
$link = $data["link"];

$sql = "UPDATE publications SET category = ?, citation = ?, link = ? WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssi", $category, $citation, $link, $id);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>
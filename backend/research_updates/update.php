<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$title = $data["title"];
$year = $data["year"];

$sql = "UPDATE research_updates SET title = ?, year = ? WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $title, $year, $id);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Research update updated"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to update"]);
}
?>
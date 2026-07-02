<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$label = $data["label"];
$all_count = $data["all_count"];
$since_2021 = $data["since_2021"];

$sql = "UPDATE publication_stats 
        SET all_count = ?, since_2021 = ? 
        WHERE label = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iis", $all_count, $since_2021, $label);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>
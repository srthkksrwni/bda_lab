<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT * FROM contact_messages ORDER BY id DESC";
$result = $conn->query($sql);

$messages = [];

while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $messages
]);

$conn->close();
?>
<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT * FROM events ORDER BY id DESC";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch events."
    ]);
    exit();
}

$events = [];

while ($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $events
]);

$conn->close();

?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$sql = "SELECT id, title, year, created_at
        FROM research_updates
        ORDER BY created_at DESC";

$result = $conn->query($sql);

$updates = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $updates[] = $row;
    }

    echo json_encode([
        "success" => true,
        "updates" => $updates
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch research updates."
    ]);
}

$conn->close();
?>
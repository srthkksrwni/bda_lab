<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$sql = "SELECT id, category, year, citation, link, created_at 
        FROM publications 
        ORDER BY created_at DESC";

$result = $conn->query($sql);

$publications = [];

while ($row = $result->fetch_assoc()) {
    $publications[] = $row;
}

echo json_encode([
    "success" => true,
    "publications" => $publications
]);

$conn->close();
?>
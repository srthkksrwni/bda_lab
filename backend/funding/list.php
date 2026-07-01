<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT * FROM funding_collaboration ORDER BY id ASC";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch funding partners."
    ]);
    exit();
}

$partners = [];

while ($row = $result->fetch_assoc()) {
    $partners[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $partners
]);

$conn->close();

?>
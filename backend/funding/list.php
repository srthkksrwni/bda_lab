<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$sql = "SELECT id, partner_name, logo, created_at FROM funding_collaboration ORDER BY created_at DESC";

$result = $conn->query($sql);

$fundings = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $fundings[] = $row;
    }

    echo json_encode([
        "success" => true,
        "fundings" => $fundings
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
}

$conn->close();
?>
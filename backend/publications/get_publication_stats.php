<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT label, all_count, since_2021 FROM publication_stats ORDER BY id ASC";

$result = $conn->query($sql);

$data = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode([
    "success" => true,
    "data" => $data
]);

$conn->close();

?>
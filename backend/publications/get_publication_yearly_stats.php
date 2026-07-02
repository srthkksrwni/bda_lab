<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT year, total FROM publication_yearly_stats ORDER BY year ASC";

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
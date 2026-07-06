<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$sql = "SELECT * FROM publication_citation_stats WHERE id = 1";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "data" => $row
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Citation stats not found"
    ]);
}

$conn->close();

?>
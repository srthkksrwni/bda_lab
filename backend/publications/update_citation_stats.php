<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$citations = $data["citations"];
$h_index = $data["h_index"];
$i10_index = $data["i10_index"];

$sql = "UPDATE publication_citation_stats 
        SET citations='$citations',
            h_index='$h_index',
            i10_index='$i10_index'
        WHERE id = 1";

if ($conn->query($sql)) {
    echo json_encode([
        "success" => true,
        "message" => "Citation stats updated successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Update failed"
    ]);
}

$conn->close();

?>
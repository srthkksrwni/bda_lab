<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "../config/db.php";

if (!isset($_GET["id"])) {
    echo json_encode([
        "success" => false,
        "message" => "Event ID is missing."
    ]);
    exit();
}

$id = intval($_GET["id"]);

$sql = "DELETE FROM events WHERE id = $id";

if ($conn->query($sql)) {
    echo json_encode([
        "success" => true,
        "message" => "Event deleted successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Delete failed."
    ]);
}

$conn->close();

?>
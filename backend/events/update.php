<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data["id"] ?? 0);
$citation = trim($data["citation"] ?? "");
$link = trim($data["link"] ?? "");

if ($id === 0 || $citation === "") {
    echo json_encode([
        "success" => false,
        "message" => "ID and citation are required."
    ]);
    exit();
}

$stmt = $conn->prepare(
    "UPDATE events SET citation = ?, link = ? WHERE id = ?"
);

$stmt->bind_param("ssi", $citation, $link, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Event updated successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Update failed."
    ]);
}

$stmt->close();
$conn->close();

?>
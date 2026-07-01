<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data["id"] ?? 0);
$partner_name = trim($data["partner_name"] ?? "");
$logo = trim($data["logo"] ?? "");

if ($id === 0 || $partner_name === "" || $logo === "") {
    echo json_encode([
        "success" => false,
        "message" => "ID, partner name and logo are required."
    ]);
    exit();
}

$stmt = $conn->prepare(
    "UPDATE funding_collaboration SET partner_name = ?, logo = ? WHERE id = ?"
);

$stmt->bind_param("ssi", $partner_name, $logo, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Funding partner updated successfully."
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
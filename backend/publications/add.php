<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$category = $data["category"];
$year = $data["year"];
$citation = $data["citation"];
$link = $data["link"];

$sql = "INSERT INTO publications (category, year, citation, link)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("siss", $category, $year, $citation, $link);

if ($stmt->execute()) {

    // Update yearly graph count
    $updateSql = "
        INSERT INTO publication_yearly_stats (year, total)
        VALUES (?, 1)
        ON DUPLICATE KEY UPDATE total = total + 1
    ";

    $updateStmt = $conn->prepare($updateSql);
    $updateStmt->bind_param("i", $year);
    $updateStmt->execute();

    echo json_encode([
        "success" => true,
        "message" => "Publication added successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Failed to add publication."
    ]);
}

$conn->close();
?>
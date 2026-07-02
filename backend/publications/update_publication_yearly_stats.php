<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$year = $data["year"];
$total = $data["total"];

$sql = "
    INSERT INTO publication_yearly_stats (year, total)
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE total = VALUES(total)
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $year, $total);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Yearly stats updated successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Yearly stats update failed."
    ]);
}

$conn->close();
?>
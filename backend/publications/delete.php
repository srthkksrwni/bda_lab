<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];

// Get publication year before deleting
$year = null;

$getSql = "SELECT year FROM publications WHERE id = ?";
$getStmt = $conn->prepare($getSql);
$getStmt->bind_param("i", $id);
$getStmt->execute();

$result = $getStmt->get_result();

if ($row = $result->fetch_assoc()) {
    $year = $row["year"];
}

// Delete publication
$sql = "DELETE FROM publications WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {

    if ($year !== null) {
        $updateSql = "
            UPDATE publication_yearly_stats
            SET total = GREATEST(total - 1, 0)
            WHERE year = ?
        ";

        $updateStmt = $conn->prepare($updateSql);
        $updateStmt->bind_param("i", $year);
        $updateStmt->execute();
    }

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>
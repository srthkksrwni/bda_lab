<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$category = $data["category"];
$year = $data["year"];
$citation = $data["citation"];
$link = $data["link"];

// Get old year
$oldYear = null;

$getSql = "SELECT year FROM publications WHERE id = ?";
$getStmt = $conn->prepare($getSql);
$getStmt->bind_param("i", $id);
$getStmt->execute();

$result = $getStmt->get_result();

if ($row = $result->fetch_assoc()) {
    $oldYear = $row["year"];
}

// Update publication
$sql = "UPDATE publications
        SET category = ?, year = ?, citation = ?, link = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sissi", $category, $year, $citation, $link, $id);

if ($stmt->execute()) {

    // If year changed, update graph counts
    if ($oldYear != $year) {

        // Decrease old year count
        $sql1 = "UPDATE publication_yearly_stats
                 SET total = total - 1
                 WHERE year = ?";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->bind_param("i", $oldYear);
        $stmt1->execute();

        // Increase new year count
        $sql2 = "
            INSERT INTO publication_yearly_stats(year,total)
            VALUES(?,1)
            ON DUPLICATE KEY UPDATE total = total + 1
        ";

        $stmt2 = $conn->prepare($sql2);
        $stmt2->bind_param("i", $year);
        $stmt2->execute();
    }

    echo json_encode([
        "success" => true,
        "message" => "Publication updated successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Update failed."
    ]);
}

$conn->close();
?>
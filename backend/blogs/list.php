<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$sql = "SELECT id, title, category, description, image, link, created_at
        FROM blogs
        ORDER BY created_at DESC";

$result = $conn->query($sql);

$blogs = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $blogs[] = $row;
    }

    echo json_encode([
        "success" => true,
        "blogs" => $blogs
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch blogs"
    ]);
}

$conn->close();
?>
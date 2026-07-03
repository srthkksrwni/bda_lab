<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

if (!isset($_FILES["image"])) {
    echo json_encode([
        "success" => false,
        "message" => "No image received."
    ]);
    exit();
}

if ($_FILES["image"]["error"] != 0) {
    echo json_encode([
        "success" => false,
        "message" => "Image upload failed."
    ]);
    exit();
}

$uploadDir = "../uploads/blogs/";

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$imageName = time() . "_" . basename($_FILES["image"]["name"]);
$targetFile = $uploadDir . $imageName;
$imagePath = "uploads/blogs/" . $imageName";

if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to save image."
    ]);
    exit();
}

/* Default values */

$title = "Image";
$category = "Gallery";
$description = "Gallery Image";

$sql = "INSERT INTO blogs(title, category, description, image)
        VALUES(?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit();
}

$stmt->bind_param(
    "ssss",
    $title,
    $category,
    $description,
    $imagePath
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Image uploaded successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();

?>
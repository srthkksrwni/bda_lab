<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

// Get form values safely
$title = $_POST["title"] ?? "";
$category = $_POST["category"] ?? "";
$description = $_POST["description"] ?? "";

// Validate
if ($title === "" || $category === "" || $description === "") {
    echo json_encode([
        "success" => false,
        "message" => "Please fill title, category and description."
    ]);
    exit();
}

// Check image
if (
    !isset($_FILES["image"]) ||
    $_FILES["image"]["error"] !== UPLOAD_ERR_OK
) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload an image."
    ]);
    exit();
}

// Upload folder
$uploadDir = "../uploads/blogs/";

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Generate unique filename
$imageName = time() . "_" . basename($_FILES["image"]["name"]);

$targetFile = $uploadDir . $imageName;

$imagePath = "uploads/blogs/" . $imageName;

// Upload image
if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to upload image."
    ]);
    exit();
}

// Insert into database
$sql = "INSERT INTO blogs
(title, category, description, image)
VALUES (?, ?, ?, ?)";

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
        "message" => "Blog added successfully."
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
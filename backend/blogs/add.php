<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

$title = $_POST["title"] ?? "";
$category = $_POST["category"] ?? "";
$description = $_POST["description"] ?? "";
$link = $_POST["link"] ?? "";

if (empty($title) || empty($category) || empty($description)) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit();
}

if (!isset($_FILES["image"])) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload an image."
    ]);
    exit();
}

$uploadDir = "../uploads/blogs/";

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$imageName = time() . "_" . basename($_FILES["image"]["name"]);
$targetFile = $uploadDir . $imageName;
$imagePath = "uploads/blogs/" . $imageName;

if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to upload image."
    ]);
    exit();
}

$sql = "INSERT INTO blogs (title, category, description, image, link)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit();
}

$stmt->bind_param("sssss", $title, $category, $description, $imagePath, $link);

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
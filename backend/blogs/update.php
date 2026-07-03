<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$id = $_POST["id"] ?? "";
$title = $_POST["title"] ?? "";
$category = $_POST["category"] ?? "";
$description = $_POST["description"] ?? "";
$oldImage = $_POST["oldImage"] ?? "";

if (empty($id) || empty($title) || empty($category) || empty($description)) {
    echo json_encode([
        "success" => false,
        "message" => "Missing required fields."
    ]);
    exit();
}

$imagePath = $oldImage;

if (isset($_FILES["image"]) && $_FILES["image"]["error"] === 0) {
    $uploadDir = "../uploads/blogs/";

    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $imageName = time() . "_" . basename($_FILES["image"]["name"]);
    $targetPath = $uploadDir . $imageName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {
        $imagePath = "uploads/blogs/" . $imageName;
    }
}

$sql = "UPDATE blogs 
        SET title = ?, category = ?, description = ?, image = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit();
}

$stmt->bind_param("ssssi", $title, $category, $description, $imagePath, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Blog updated successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to update blog"
    ]);
}

$stmt->close();
$conn->close();
?>
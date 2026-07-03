<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$id = $_POST["id"] ?? "";

if (empty($id)) {
    echo json_encode([
        "success" => false,
        "message" => "Missing blog ID."
    ]);
    exit();
}

if (!isset($_FILES["image"]) || $_FILES["image"]["error"] !== UPLOAD_ERR_OK) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload an image."
    ]);
    exit();
}

$uploadDir = "../uploads/blogs/";

if (!is_dir($uploadDir)) {
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

$sql = "UPDATE blogs SET image = ? WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $imagePath, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Image updated successfully"
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
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

$id = $_POST["id"];
$title = $_POST["title"];
$category = $_POST["category"];
$description = $_POST["description"];
$link = $_POST["link"] ?? "";
$oldImage = $_POST["oldImage"];

$imagePath = $oldImage;

if (isset($_FILES["image"])) {
    $imageName = time() . "_" . basename($_FILES["image"]["name"]);
    $targetPath = "../uploads/blogs/" . $imageName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {
        $imagePath = "uploads/blogs/" . $imageName;
    }
}

$sql = "UPDATE blogs 
        SET title = ?, category = ?, description = ?, image = ?, link = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $title, $category, $description, $imagePath, $link, $id);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Blog updated successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to update blog"]);
}

$conn->close();
?>
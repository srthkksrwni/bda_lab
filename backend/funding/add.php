<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

$partner_name = trim($_POST["partner_name"] ?? "");

if ($partner_name === "") {
    echo json_encode([
        "success" => false,
        "message" => "Partner name is required."
    ]);
    exit();
}

if (!isset($_FILES["logo"]) || $_FILES["logo"]["error"] !== UPLOAD_ERR_OK) {
    echo json_encode([
        "success" => false,
        "message" => "Please upload a logo."
    ]);
    exit();
}

$uploadDir = "../uploads/funding/";

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$logoName = time() . "_" . basename($_FILES["logo"]["name"]);
$targetFile = $uploadDir . $logoName;
$logoPath = "uploads/funding/" . $logoName;

if (!move_uploaded_file($_FILES["logo"]["tmp_name"], $targetFile)) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to upload logo."
    ]);
    exit();
}

$sql = "INSERT INTO funding_collaboration (partner_name, logo) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $partner_name, $logoPath);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Funding partner added successfully"
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
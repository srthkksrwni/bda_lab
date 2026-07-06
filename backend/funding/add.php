<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$partner_name = trim($_POST["partner_name"] ?? "");

if ($partner_name === "" || !isset($_FILES["logo"])) {
    echo json_encode([
        "success" => false,
        "message" => "Partner name and logo are required."
    ]);
    exit();
}

$uploadDir = "../../public_html/";

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$originalName = basename($_FILES["logo"]["name"]);
$fileName = preg_replace('/\s+/', '_', $originalName);

if (file_exists($uploadDir . $fileName)) {
    $name = pathinfo($fileName, PATHINFO_FILENAME);
    $ext = pathinfo($fileName, PATHINFO_EXTENSION);
    $fileName = $name . "_" . time() . "." . $ext;
}

$targetPath = $uploadDir . $fileName;

if (!move_uploaded_file($_FILES["logo"]["tmp_name"], $targetPath)) {
    echo json_encode([
        "success" => false,
        "message" => "Logo upload failed."
    ]);
    exit();
}

$logo = $fileName;

$stmt = $conn->prepare(
    "INSERT INTO funding_collaboration (partner_name, logo) VALUES (?, ?)"
);

$stmt->bind_param("ss", $partner_name, $logo);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Funding partner added successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add funding partner."
    ]);
}

$stmt->close();
$conn->close();

?>
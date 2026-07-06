<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

include "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$id = intval($_POST["id"] ?? 0);
$partner_name = trim($_POST["partner_name"] ?? "");
$old_logo = trim($_POST["old_logo"] ?? "");

if ($id === 0 || $partner_name === "") {
    echo json_encode([
        "success" => false,
        "message" => "ID and partner name are required."
    ]);
    exit();
}

$logo = $old_logo;

if (isset($_FILES["logo"]) && $_FILES["logo"]["name"] !== "") {
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
}

$stmt = $conn->prepare(
    "UPDATE funding_collaboration SET partner_name = ?, logo = ? WHERE id = ?"
);

$stmt->bind_param("ssi", $partner_name, $logo, $id);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Funding partner updated successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Update failed."
    ]);
}

$stmt->close();
$conn->close();

?>
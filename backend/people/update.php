<?php

require_once("../config/db.php");

// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received."
    ]);
    exit();
}

$type = $data["type"] ?? "";
$id = $data["id"] ?? 0;

if ($id <= 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid ID."
    ]);
    exit();
}

if ($type == "faculty") {

    $name = $data["name"] ?? "";
    $designation = $data["designation"] ?? "";
    $email = $data["email"] ?? null;
    $image_url = $data["image_url"] ?? null;
    $scholar_url = $data["scholar_url"] ?? null;
    $profile_url = $data["profile_url"] ?? null;
    $description = $data["description"] ?? "";
    $external_links = json_encode($data["external_links"] ?? []);

    if ($name == "" || $designation == "") {
        echo json_encode([
            "success" => false,
            "message" => "Name and Designation are required."
        ]);
        exit();
    }

    $stmt = $conn->prepare("
        UPDATE faculty
        SET
            name = ?,
            designation = ?,
            description = ?,
            email = ?,
            image_url = ?,
            scholar_url = ?,
            profile_url = ?,
            external_links = ?
        WHERE id = ?
    ");

    $stmt->bind_param(
        "ssssssssi",
        $name,
        $designation,
        $description,
        $email,
        $image_url,
        $scholar_url,
        $profile_url,
        $external_links,
        $id
    );

} elseif ($type == "student") {

    $category = $data["category"] ?? "";
    $name = $data["name"] ?? "";
    $email = $data["email"] ?? null;
    $research_topic = $data["research_topic"] ?? null;
    $image_url = $data["image_url"] ?? null;
    $scholar_url = $data["scholar_url"] ?? null;
    $profile_url = $data["profile_url"] ?? null;

    if ($category == "" || $name == "") {
        echo json_encode([
            "success" => false,
            "message" => "Category and Name are required."
        ]);
        exit();
    }

    $stmt = $conn->prepare("
        UPDATE students
        SET
            category = ?,
            name = ?,
            email = ?,
            research_topic = ?,
            image_url = ?,
            scholar_url = ?,
            profile_url = ?
        WHERE id = ?
    ");

    $stmt->bind_param(
        "sssssssi",
        $category,
        $name,
        $email,
        $research_topic,
        $image_url,
        $scholar_url,
        $profile_url,
        $id
    );

} else {

    echo json_encode([
        "success" => false,
        "message" => "Invalid type."
    ]);

    exit();
}

if ($stmt->execute()) {

    if ($stmt->affected_rows > 0) {
        echo json_encode([
            "success" => true,
            "message" => "Record updated successfully."
        ]);
    } else {
        echo json_encode([
            "success" => true,
            "message" => "No changes were made."
        ]);
    }

} else {

    echo json_encode([
        "success" => false,
        "message" => $stmt->error
    ]);

}

$stmt->close();
$conn->close();

?>
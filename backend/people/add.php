
<?php

require_once("../config/db.php");

// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit();
}

$type = $data["type"] ?? "";

if ($type == "faculty") {

    $name = $data["name"] ?? "";
    $designation = $data["designation"] ?? "";
    $email = $data["email"] ?? null;
    $image_url = $data["image_url"] ?? null;
    $scholar_url = $data["scholar_url"] ?? null;
    $profile_url = $data["profile_url"] ?? null;

    if ($name == "" || $designation == "") {
        echo json_encode([
            "success" => false,
            "message" => "Name and Designation are required."
        ]);
        exit();
    }

    $stmt = $conn->prepare("
        INSERT INTO faculty
        (name, designation, email, image_url, scholar_url, profile_url)
        VALUES (?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "ssssss",
        $name,
        $designation,
        $email,
        $image_url,
        $scholar_url,
        $profile_url
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
        INSERT INTO students
        (category, name, email, research_topic, image_url, scholar_url, profile_url)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "sssssss",
        $category,
        $name,
        $email,
        $research_topic,
        $image_url,
        $scholar_url,
        $profile_url
    );

} else {

    echo json_encode([
        "success" => false,
        "message" => "Invalid type."
    ]);

    exit();

}

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Record added successfully.",
        "id" => $stmt->insert_id
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
<?php
$config = require_once __DIR__ . "/../config/config.php";

header("Access-Control-Allow-Origin: " . $config["FRONTEND_URL"]);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

require_once __DIR__ . "/../config/db.php";

// Read FormData (populated into $_POST)
$data = $_POST;

if (!$data && empty($_FILES)) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit();
}

$type = $data["type"] ?? "";

function handle_image_upload($type) {
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] === UPLOAD_ERR_OK) {
        $file = $_FILES["image"];
        $filename = $file["name"];
        $filesize = $file["size"];
        $tmp_name = $file["tmp_name"];

        // Validate size (5MB = 5,242,880 bytes)
        if ($filesize > 5242880) {
            echo json_encode([
                "success" => false,
                "message" => "Image file size exceeds the 5MB limit."
            ]);
            exit();
        }

        // Validate extension
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $allowed_exts = ["jpg", "jpeg", "png", "webp"];
        if (!in_array($ext, $allowed_exts)) {
            echo json_encode([
                "success" => false,
                "message" => "Only JPG, JPEG, PNG, and WEBP image files are allowed."
            ]);
            exit();
        }

        // Generate unique filename
        $unique_name = time() . "_" . bin2hex(random_bytes(4)) . "." . $ext;
        $folder = ($type === "faculty" ? "faculty" : "students");
        $target_dir = "../uploads/" . $folder . "/";
        
        // Ensure folder exists
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0755, true);
        }

        $target_file = $target_dir . $unique_name;
        if (move_uploaded_file($tmp_name, $target_file)) {
            return "uploads/" . $folder . "/" . $unique_name;
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Failed to save uploaded image."
            ]);
            exit();
        }
    }
    return null;
}

if ($type == "faculty") {

    $name = $data["name"] ?? "";
    $designation = $data["designation"] ?? "";
    $email = $data["email"] ?? null;
    $scholar_url = $data["scholar_url"] ?? null;
    $profile_url = $data["profile_url"] ?? null;
    $description = $data["description"] ?? "";
    
    // Parse external links safely from JSON string
    $ext_links_raw = $data["external_links"] ?? null;
    if (is_string($ext_links_raw)) {
        $decoded = json_decode($ext_links_raw, true);
        $external_links = json_encode(is_array($decoded) ? $decoded : []);
    } else {
        $external_links = json_encode($ext_links_raw ?? []);
    }

    if ($name == "" || $designation == "") {
        echo json_encode([
            "success" => false,
            "message" => "Name and Designation are required."
        ]);
        exit();
    }

    $image_url = handle_image_upload("faculty");

    $stmt = $conn->prepare("
        INSERT INTO faculty
        (name, designation, description, email, image_url, scholar_url, profile_url, external_links)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "ssssssss",
        $name,
        $designation,
        $description,
        $email,
        $image_url,
        $scholar_url,
        $profile_url,
        $external_links
    );

} elseif ($type == "student") {

    $category = $data["category"] ?? "";
    $name = $data["name"] ?? "";
    $email = $data["email"] ?? null;
    $research_topic = $data["research_topic"] ?? null;
    $scholar_url = $data["scholar_url"] ?? null;
    $profile_url = $data["profile_url"] ?? null;
    $batch_year = (($category === "mtech" || $category === "intern") && isset($data["batch_year"]) && $data["batch_year"] !== "") ? intval($data["batch_year"]) : null;

    if ($category == "" || $name == "") {
        echo json_encode([
            "success" => false,
            "message" => "Category and Name are required."
        ]);
        exit();
    }

    $image_url = handle_image_upload("student");

    $stmt = $conn->prepare("
        INSERT INTO students
        (category, batch_year, name, email, research_topic, image_url, scholar_url, profile_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "sissssss",
        $category,
        $batch_year,
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
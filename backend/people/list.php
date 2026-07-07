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

$type = $_GET["type"] ?? "";

if ($type == "faculty") {

    $sql = "SELECT * FROM faculty ORDER BY id DESC";

} elseif ($type == "years") {

    $result = $conn->query(
        "SELECT DISTINCT batch_year FROM students 
         WHERE category='mtech' AND batch_year IS NOT NULL 
         ORDER BY batch_year DESC"
    );
    $years = [];
    while ($row = $result->fetch_assoc()) {
        $years[] = (string)$row["batch_year"];
    }
    echo json_encode([
        "success" => true,
        "data" => $years
    ]);
    $conn->close();
    exit();

} elseif ($type == "students") {

    $category = $_GET["category"] ?? "";
    $batch_year = $_GET["batch_year"] ?? "";

    if ($category != "") {
        if ($category === "mtech" && $batch_year !== "") {
            $stmt = $conn->prepare(
                "SELECT * FROM students
                 WHERE category=? AND batch_year=?
                 ORDER BY id DESC"
            );

            $stmt->bind_param("si", $category, $batch_year);
        } else {
            $stmt = $conn->prepare(
                "SELECT * FROM students
                 WHERE category=?
                 ORDER BY id DESC"
            );

            $stmt->bind_param("s", $category);
        }

        $stmt->execute();

        $result = $stmt->get_result();

    } else {

        $result = $conn->query(
            "SELECT * FROM students
             ORDER BY id DESC"
        );

    }

} else {

    echo json_encode([
        "success"=>false,
        "message"=>"Invalid type"
    ]);

    exit();

}

if ($type=="faculty"){
    $result = $conn->query($sql);
}

$data = [];

while($row=$result->fetch_assoc()){
    if (isset($row['external_links']) && $row['external_links'] !== null && $row['external_links'] !== '') {
        $decoded = json_decode($row['external_links'], true);
        $row['external_links'] = is_array($decoded) ? $decoded : [];
    } else {
        $row['external_links'] = [];
    }
    $data[]=$row;
}

echo json_encode([
    "success"=>true,
    "data"=>$data
]);

$conn->close();

?>
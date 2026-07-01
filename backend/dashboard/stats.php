<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "../config/db.php";

$stats = [
    "funding" => 0,
    "events" => 0,
    "messages" => 0,
    "people" => 0,
    "publications" => 0,
    "blogs" => 0
];

$queries = [
    "funding" => "SELECT COUNT(*) AS total FROM funding_collaboration",
    "events" => "SELECT COUNT(*) AS total FROM events",
    "messages" => "SELECT COUNT(*) AS total FROM contact_messages"
];

foreach ($queries as $key => $sql) {
    $result = $conn->query($sql);

    if ($result) {
        $row = $result->fetch_assoc();
        $stats[$key] = (int)$row["total"];
    }
}

echo json_encode([
    "success" => true,
    "data" => $stats
]);

$conn->close();

?>
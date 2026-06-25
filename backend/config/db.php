<?php

$conn = new mysqli("localhost", "root", "", "bda_lab");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit();
}

?>
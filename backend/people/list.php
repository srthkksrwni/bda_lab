<?php

require_once("../config/db.php");

$type = $_GET["type"] ?? "";

if ($type == "faculty") {

    $sql = "SELECT * FROM faculty ORDER BY id DESC";

} elseif ($type == "students") {

    $category = $_GET["category"] ?? "";

    if ($category != "") {
        $stmt = $conn->prepare(
            "SELECT * FROM students
             WHERE category=?
             ORDER BY id DESC"
        );

        $stmt->bind_param("s", $category);

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

    $data[]=$row;

}

echo json_encode([
    "success"=>true,
    "data"=>$data
]);

$conn->close();

?>
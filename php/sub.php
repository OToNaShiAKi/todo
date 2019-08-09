<?php
require './conn.php';
$type = $_POST["type"];
$content = $_POST["content"];
$date = $_POST["date"];
$time = $_POST["time"];
$login = $_POST["color"];
$id = $_POST["id"];
$sql = "INSERT INTO `todo` (`type`, `content`, `date`, `time`, `login`, `id`)
        VALUES ('$type', '$content', '$date', '$time', '$login', '$id')";
$result = $conn->query($sql);
if ($result) {
    $sql =  "SELECT COUNT(`id`) FROM todo WHERE `done`=0 AND `date`='$date' AND `login`='$login'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $all = $row["COUNT(`id`)"];
    $status = 1;
} else $status = 0;
echo json_encode(array(
    "all" => $all,
    "status" => $status
));

<?php
require './conn.php';
$login = $_POST["login"];
$status = 0;
if ($login != "0506" && $login != "1204") {
    $conn->close();
    exit();
}
$sql = "SELECT `login`, `content`, `type`, `date`, `time`, `id`
        FROM `todo` WHERE `done`=0 ORDER BY `date`, `time`";
$result = $conn->query($sql);
$todo = [];
$remain = 0;
if ($result) {
    $status = 1;
    while ($row = $result->fetch_assoc()) {
        if ($login == $row['login']) $remain++;
        array_push($todo, array(
            "type" => $row['type'],
            "date" => $row['date'],
            "time" => $row['time'],
            "content" => $row['content'],
            "color" => $row['login'],
            "id" => $row['id']
        ));
    }
} else $status = 0;
echo json_encode(array(
    "remain" => $remain,
    "todo" => $todo,
    "login" => $login,
    "status" => $status,
));
$conn->close();

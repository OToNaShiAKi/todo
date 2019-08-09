<?php
require './conn.php';
$more = $_POST["more"] * 15;
$login = $_POST["login"];
$sql = "SELECT `login`, `content`, `type`, `date`, `time`, `id`, `out`
        FROM `todo` WHERE `done`=1  ORDER BY `date` DESC, `time` DESC LIMIT $more, 15";
$result = $conn->query($sql);
$done = [];
$status = 0;
if ($result) {
    $status = 1;
    while ($row = $result->fetch_assoc()) {
        array_push($done, array(
            "type" => $row['type'],
            "date" => $row['date'],
            "time" => $row['time'],
            "color" => $row['login'],
            "id" => $row['id'],
            "out" => $row['out'],
            "content" => $row['content']
        ));
    }
} else $status = 0;
$sql = "SELECT COUNT(`id`) FROM `todo` WHERE `done`=1 AND `login`='$login'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$me = $row["COUNT(`id`)"];
$sql = "SELECT COUNT(`id`) FROM `todo` WHERE `done`=1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$btn = $row["COUNT(`id`)"] >= ($more * 15 + 15);
$ta = $row["COUNT(`id`)"] - $me;
echo json_encode(array(
    "done" => $done,
    "status" => $status,
    "btn" => $btn,
    "me" => $me,
    "ta" => $ta
));

$conn->close();

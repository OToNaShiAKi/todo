<?php
require './conn.php';
$date = $_POST["date"];
$time = $_POST["time"];
$id = $_POST["id"];
$out = $_POST["out"] == true || $_POST["out"] == "true" ? 1 : 0;

$sql = "UPDATE `todo` SET `time`='$time', `date`='$date', `done`=1, `out`=$out WHERE `id` = '$id'";
$result = $conn->query($sql);
if ($result) echo 1;
else echo 0;
$conn->close();

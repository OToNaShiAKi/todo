<?php
$servername = "localhost";
$username = "root";
$password = "hustmathskexie";
$dbname = "hustmaths";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
  die(0);

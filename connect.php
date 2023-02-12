<?php
$server = "https://so-yeon-yang.github.io/share"
$user = "soso"
$password = "1234"
$dbname = "augji"

$conn = new mysqli($server, $user, $password, $dbname);

if($conn->connect_error) echo "<h2>접속에 실패하였습니다.</h2>";
else echo "<h2>접속에 성공했습니다.</h2>";
?>
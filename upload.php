<?php

include_once("connect.php");

$title = $_POST["title"];
$name = $_POST["name"];
$content = $_POST["content"];
$img = $_POST["image"];

$sql = "INSERT INTO image (title, name, content, img) VALUES('$title', '$name', '$content', '$img')";

if($conn->query($sql))echo "<h3>업로드 성공</h3>";
else echo "<h3>업로드 실패</h3>";

?>
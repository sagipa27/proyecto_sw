<?php
include "../Config/db.php";

$userName = $_POST['userName'];
$passw = $_POST['passw'];
$data = [];

$userName = mysqli_real_escape_string($connection, $userName);
$passw = mysqli_real_escape_string($connection, $passw);


$query = "SELECT nombre, apellido, documento, perfil, passw ";
$query .= "FROM users WHERE passw = '$passw' and nombre = '$userName'";
$result = $connection->query($query);
while ($row = mysqli_fetch_object($result)) {
    $data[] = $row;
}

echo json_encode($data);

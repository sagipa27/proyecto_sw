<?php
include "../Config/db.php";

$documento = $_POST['documento'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$perfil = $_POST['perfil'];
$passw = $_POST['passw'];
$birthDate = $_POST['birthDate'];
$sede = $_POST['sede'];

$documento = mysqli_real_escape_string($connection, $documento);
$nombre = mysqli_real_escape_string($connection, $nombre);
$apellido = mysqli_real_escape_string($connection, $apellido);
$perfil = mysqli_real_escape_string($connection, $perfil);
$passw = mysqli_real_escape_string($connection, $passw);

$query = "INSERT INTO pcsw.users (nombre, apellido, documento, perfil, passw, fnacimiento, sede) ";
$query .= "VALUES ('$nombre', '$apellido', $documento, '$perfil', '$passw', '$birthDate', '$sede')";

if ($result = $connection->query($query)) {
    echo "\n" . 1;
} else {
    echo "\n" . 0;
}

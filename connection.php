<?php

$servername = "localhost";
$username = "abdulrahmanbanas";
$password = "";
$database = "mynews_db";

$conn = new mysqli($servername, $username, $password, $database);

echo $conn->connect_error;
// check the connection
if ($conn->connect_error) {

    echo "Failed to connect to database!";
    die("Connection failed: ");
}

?>
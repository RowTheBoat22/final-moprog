<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$username = $_GET['username'];

$query = "DELETE from users where username = '$username'";

$result = mysqli_query($conn, $query);

if ($result) {
    echo TRUE;
} else {
    echo FALSE;
}

$conn->close();
?>
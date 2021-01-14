<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$username = $_GET['username'];
$id_matpel = $_GET['id_matpel'];

$query = "DELETE FROM nilai WHERE username = '$username' AND id_matpel = '$id_matpel'";

$result = mysqli_query($conn, $query);

if ($result) {
    echo TRUE;
} else {
    echo FALSE;
}

$conn->close();
?>
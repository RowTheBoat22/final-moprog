<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

function helloWorld () {
    echo 'Hello World';
}

// username, nama, alamat, jen_kel

$username = $_GET['username'];

$query = "SELECT siswa.username, matpel.id_matpel, matpel.namamatpel
            from siswa
            INNER JOIN nilai ON siswa.username = nilai.username
            INNER JOIN matpel ON nilai.id_matpel = matpel.id_matpel
            WHERE siswa.username = '$username'";

$result = $conn->query($query);

$out = "";

while ( $rec = $result->fetch_array(MYSQLI_ASSOC) ) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"username":"'.$rec["username"].'",';
    $out .= '"id_matpel":"'.$rec["id_matpel"].'",';
    $out .= '"namamatpel":"'.$rec["namamatpel"].'"}';
}
$out = (!empty($out)) ? '{"records":['.$out.']}' : '';

echo($out);

$conn->close();
?>
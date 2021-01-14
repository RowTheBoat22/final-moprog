<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

// nim, nama, alamat, jen_kel

$query = "select * from siswa";
$result = $conn->query($query);

$out = "";

while ( $rec = $result->fetch_array(MYSQLI_ASSOC) ) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"username":"'.$rec["username"].'",';
    $out .= '"nama":"'.$rec["nama"].'",';
    $out .= '"alamat":"'.$rec["alamat"].'"}';
}
$out = (!empty($out)) ? '{"records":['.$out.']}' : '';
echo($out);

$conn->close();
?>
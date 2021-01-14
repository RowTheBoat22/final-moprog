<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$query = "SELECT (SELECT COUNT(*)FROM siswa) AS siswa,(SELECT COUNT(*)FROM matpel) as matpel";
$result = $conn->query($query);

$out = "";

if ($rs = $result->fetch_array()) {
    $out .= '{"total_siswa":"'.$rs["siswa"].'",';
    $out .= '"total_matpel":"'.$rs["matpel"].'"}';
    $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
    echo($out);
} else {
    return false;
}

$conn->close();
?>
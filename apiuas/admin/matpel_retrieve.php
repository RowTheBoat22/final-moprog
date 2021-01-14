<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$query = "SELECT * from matpel";
$result = $conn->query($query);

$out = "";

while ( $rec = $result->fetch_array(MYSQLI_ASSOC) ) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"id_matpel":"'.$rec["id_matpel"].'",';
    $out .= '"namamatpel":"'.$rec["namamatpel"].'",';
    $out .= '"kelompok":"'.$rec["kelompok"].'"}';
}
$out = (!empty($out)) ? '{"records":['.$out.']}' : '';
echo($out);

$conn->close();
?>
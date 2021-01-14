<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$query = "SELECT *
          FROM matpel
          WHERE id_matpel = '".$_GET['id_matpel']."'";

$result = $conn->query($query);

$out = "";
if ($rs = $result->fetch_array()) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"id_matpel":"'.$rs["id_matpel"].'",';
    $out .= '"namamatpel":"'.$rs["namamatpel"].'",';
    $out .= '"kelompok":"'.$rs["kelompok"].'"}';
    $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
    echo($out);
} else {
    return false;
}

$conn->close();
?>
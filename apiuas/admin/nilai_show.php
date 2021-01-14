<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$username = $_GET['username'];
$id_matpel = $_GET['id_matpel'];

$query = "SELECT *
          FROM nilai
          WHERE username = '$username' AND id_matpel = '$id_matpel'";

$result = $conn->query($query);

$out = "";
if ($rs = $result->fetch_array()) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"username":"'.$rs["username"].'",';
    $out .= '"id_matpel":"'.$rs["id_matpel"].'",';
    $out .= '"pengetahuan":"'.$rs["pengetahuan"].'",';
    $out .= '"pengetahuan_grade":"'.$rs["pengetahuan_grade"].'",';
    $out .= '"keterampilan":"'.$rs["keterampilan"].'",';
    $out .= '"keterampilan_grade":"'.$rs["keterampilan_grade"].'"}';
    $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
    echo($out);
} else {
    return false;
}

$conn->close();
?>
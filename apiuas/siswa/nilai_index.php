<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "../conn.inc.php";

$username = $_GET['username'];
$kelompok = $_GET['kelompok'];

$query = "SELECT matpel.id_matpel, matpel.namamatpel, matpel.kelompok ,nilai.pengetahuan, nilai.pengetahuan_grade, nilai.keterampilan, nilai.keterampilan_grade
            from siswa
            INNER JOIN nilai ON siswa.username = nilai.username
            INNER JOIN matpel ON nilai.id_matpel = matpel.id_matpel
            WHERE siswa.username = '$username' AND matpel.kelompok = '$kelompok'";

$result = $conn->query($query);

$out = "";

while ( $rec = $result->fetch_array(MYSQLI_ASSOC) ) {
    if ($out != "") {
        $out .= ",";
    }
    $out .= '{"id_matpel":"'.$rec["id_matpel"].'",';
    $out .= '"namamatpel":"'.$rec["namamatpel"].'",';
    $out .= '"kelompok":"'.$rec["kelompok"].'",';
    $out .= '"pengetahuan":"'.$rec["pengetahuan"].'",';
    $out .= '"pengetahuan_grade":"'.$rec["pengetahuan_grade"].'",';
    $out .= '"keterampilan":"'.$rec["keterampilan"].'",';
    $out .= '"keterampilan_grade":"'.$rec["keterampilan_grade"].'"}';
}
$out = (!empty($out)) ? '{"records":['.$out.']}' : '';
echo($out);

$conn->close();
?>
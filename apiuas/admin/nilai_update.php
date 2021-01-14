<?php

function getGrade ($number) {
    if ($number >= 85) {
        return 'A';
    } elseif ($number >= 75){
        return 'B';
    } elseif ($number >= 60) {
        return 'C';
    } else {
        return 'D';
    }
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['id_matpel']) && isset($_GET['username']) && isset($_GET['pengetahuan']) && isset($_GET['keterampilan']) ) {
    
    if ( !empty($_GET['id_matpel']) && !empty($_GET['username']) && !empty($_GET['pengetahuan']) && !empty($_GET['keterampilan']) ) {
        
        include "../conn.inc.php";

        $username = $_GET['username'];
        $id_matpel = $_GET['id_matpel'];
        
        $pengetahuan = $_GET['pengetahuan'];
        $pengetahuan_grade = getGrade($pengetahuan);
        $keterampilan = $_GET['keterampilan'];
        $keterampilan_grade = getGrade($keterampilan);

        $query = "UPDATE nilai
                    SET pengetahuan = '$pengetahuan', pengetahuan_grade ='$pengetahuan_grade', keterampilan = '$keterampilan', keterampilan_grade = '$keterampilan_grade'
                    WHERE username = '$username' AND id_matpel = '$id_matpel'";
        
        $result = mysqli_query($conn, $query);

        if ($result) {
            echo TRUE;
        } else {
            echo FALSE;
        }
        $conn->close();
    }
}

?>
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['id_matpel']) && isset($_GET['namamatpel']) && isset($_GET['kelompok']) ) {
    
    if ( !empty($_GET['id_matpel']) && !empty($_GET['namamatpel']) && !empty($_GET['kelompok']) ) {
        
        include "../conn.inc.php";

        $id_matpel = $_GET['id_matpel'];
        $namamatpel = $_GET['namamatpel'];
        $kelompok = $_GET['kelompok'];

        $query = "INSERT into
                  matpel(id_matpel, namamatpel, kelompok)
                  value('$id_matpel', '$namamatpel', '$kelompok')";
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
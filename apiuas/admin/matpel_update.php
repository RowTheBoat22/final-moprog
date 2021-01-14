<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['id_matpel']) && isset($_GET['namamatpel']) && isset($_GET['kelompok']) && isset($_GET['old_id_matpel']) ) {
    
    if ( !empty($_GET['id_matpel']) && !empty($_GET['namamatpel']) && !empty($_GET['kelompok']) && !empty($_GET['old_id_matpel']) ) {
        
        include "../conn.inc.php";

        $id_matpel = $_GET['id_matpel'];
        $old_id_matpel = $_GET['old_id_matpel'];

        $namamatpel = $_GET['namamatpel'];
        $kelompok = $_GET['kelompok'];

        $query1 = "UPDATE matpel
                    SET id_matpel = '$id_matpel', namamatpel ='$namamatpel', kelompok = '$kelompok'
                    WHERE id_matpel = '$old_id_matpel'";
        
        $result1 = mysqli_query($conn, $query1);

        if ($result1) {
            echo TRUE;
        } else {
            echo FALSE;
        }
        $conn->close();
    }
}

?>
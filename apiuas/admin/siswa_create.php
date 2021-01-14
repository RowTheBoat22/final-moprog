<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['username']) && isset($_GET['nama']) && isset($_GET['alamat']) && isset($_GET['jen_kel']) ) {
    
    if ( !empty($_GET['username']) && !empty($_GET['nama']) && !empty($_GET['alamat']) && !empty($_GET['jen_kel']) ) {
        
        include "../conn.inc.php";

        $username = $_GET['username'];
        $userpass = '123';
        $userlevel = '2';

        $nama = $_GET['nama'];
        $alamat = $_GET['alamat'];
        $jen_kel = $_GET['jen_kel'];

        $query1 = "INSERT into
                  users(username, userpass, userlevel)
                  value('$username', '$userpass', '$userlevel')";

        $query2 = "INSERT INTO siswa(username, nama, alamat, jen_kel)
                    value('$username', '$nama', '$alamat', '$jen_kel')";
        
        $result1 = mysqli_query($conn, $query1);
        $result2 = mysqli_query($conn, $query2);

        if ($result1 && $result2) {
            echo TRUE;
        } else {
            echo FALSE;
        }
        $conn->close();
    }
}

?>
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['username']) && isset($_GET['nama']) && isset($_GET['alamat']) && isset($_GET['jen_kel']) && isset($_GET['old_username']) ) {
    
    if ( !empty($_GET['username']) && !empty($_GET['nama']) && !empty($_GET['alamat']) && !empty($_GET['jen_kel']) && !empty($_GET['old_username'])  ) {
        
        include "../conn.inc.php";

        $username = $_GET['username'];
        $old_username = $_GET['old_username'];

        $nama = $_GET['nama'];
        $alamat = $_GET['alamat'];
        $jen_kel = $_GET['jen_kel'];

        $query1 = "UPDATE siswa
                    SET nama ='$nama', alamat = '$alamat', jen_kel = '$jen_kel'
                    WHERE username = '$old_username'";

        $query2 = "UPDATE users
                    SET username = '$username'
                    WHERE username = '$old_username'";
        
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
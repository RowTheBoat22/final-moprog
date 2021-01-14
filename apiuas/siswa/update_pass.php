<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['username']) && isset($_GET['userpass']) ) {
    
    if ( !empty($_GET['username']) && !empty($_GET['userpass']) ) {
        
        include "../conn.inc.php";

        $username = $_GET['username'];
        $userpass = $_GET['userpass'];

        $query1 = "UPDATE users
                    SET userpass = '$userpass'
                    WHERE username = '$username'";
        
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
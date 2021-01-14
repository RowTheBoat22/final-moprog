<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ( isset($_GET['name']) && isset($_GET['pass']) ) {
    if ( !empty($_GET['name']) && !empty($_GET['pass']) ) {

        include "conn.inc.php";

        $username = $_GET['name'];
        $userpass = $_GET['pass'];
        $query = "select *
                  from users
                  where username = '$username' and userpass = '$userpass'";
        $result = $conn->query($query);

        $out = "";
        if ( $rs = $result->fetch_array() ) {
            if ( $out != "") { $out .= ","; }
             
            $out .= '{"username":"'.$rs["username"].'",';
            $out .= '"userpass":"'.$rs["userpass"].'",';
            $out .= '"userlevel":"'.$rs["userlevel"].'"}';
            $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
            echo($out);
        } else {
            return false;
        }
        $conn->close();
    }
}


?>
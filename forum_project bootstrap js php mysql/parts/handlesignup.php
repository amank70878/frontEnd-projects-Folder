<?php
$showerror= "false";
if($_SERVER['REQUEST_METHOD']=="POST"){
    include "db_connect.php";
    $useremail = $_POST["signupemail"];
    $username = $_POST["signupname"];
    $password = $_POST["signuppassword"];
    $cpassword = $_POST["signupcpassword"];

    // Add email from database to check its existence 
    $sql = "select * from `user` where `user_email` = '$useremail'";
    $result = mysqli_query($connection , $sql);
    $numrows = mysqli_num_rows($result);

    // check whether the user already exist or not
    if($numrows>0){
        $showerror= "user email already exists";
    }else{

        // both passwords have to be same
        if($password == $cpassword){

            // convert password into hash for security
            $hash = password_hash($password , PASSWORD_DEFAULT);
            $mysql = "INSERT INTO `user` (`user_name`, `user_email`, `user_password`, `user_time`) VALUES ('$username', '$useremail', '$hash', current_timestamp())";
            $result = mysqli_query($connection , $mysql);

            if($result){
                header("location:/test/forum_project/home.php?signupsuccess='true'");
                exit();
            }


        }else{
            $showerror = "password do not match";
        }

    }
header("location:/test/forum_project/home.php?signupsuccess='false'&signuperror=$showerror");
}

?>
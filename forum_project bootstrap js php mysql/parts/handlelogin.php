<?php
$showlogin = "false";
if($_SERVER['REQUEST_METHOD'] =="POST"){

    // include database connection file
    include 'db_connect.php';
    $email = $_POST['loginemail'];
    $password = $_POST['loginpassword'];

    // select email names form database to check its existence
    $sql = "select * from `user` where `user_email` = '$email'";
    $result = mysqli_query($connection , $sql);
    $numrows = mysqli_num_rows($result);    

    if($numrows == 1){
        $row = mysqli_fetch_assoc($result);
        $user_sno = $row['user_sno'];
        $user_name = $row['user_name'];
        if(password_verify($password , $row['user_password'])){
            session_start();
            $_SESSION['loggedin'] = true;   
            $_SESSION['user_sno'] = $user_sno;
            $_SESSION['useremail'] = $email;
            $_SESSION['username'] = $user_name;
            header("location:/test/forum_project/home.php?loginsuccess=true&user_name=$user_name");
            

        }else{
            $showlogin = "password do not match";
            header("location:/test/forum_project/home.php?loginsuccess=false&loginerror=$showlogin");
        }

    }else{
        $showlogin = "user does not exist";
        header("location:/test/forum_project/home.php?loginsuccess=false&loginerror=$showlogin");
    }

    
        


}
?>
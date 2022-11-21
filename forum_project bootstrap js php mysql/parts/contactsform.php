<?php

if($_SERVER['REQUEST_METHOD']=="POST"){
    include "db_connect.php";
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mysql = "INSERT INTO `contacts` (`email`, `message`) VALUES ('$email', '$message')";
    $result = mysqli_query($connection , $mysql);

    if($result){
        header("location:/test/forum_project/contacts.php?contactsfeedback='true'");
        exit();
    }else{
        header("location:/test/forum_project/contacts.php?contactsfeedback='false'");
    }
}

?>
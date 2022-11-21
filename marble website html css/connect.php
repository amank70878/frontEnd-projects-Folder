<?php
    
//make a connection with database
$servername = "localhost";
$username = "root";
$password = "";
$database = "ashuphp";
$connection = mysqli_connect($servername , $username , $password , $database);

//handle error with connection to database
if(!$connection){
    echo "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
};

if($_SERVER['REQUEST_METHOD']=="POST"){
   
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $text = $_POST["text"];

    $mysql = "INSERT INTO `php` (`name`, `phone`, `email`, `text`) VALUES ('$name', '$phone', '$email', '$text')";
    $result = mysqli_query($connection , $mysql);

    if($result){
        header("location:/test/forum_project/contacts.php?contactsfeedback='true'");
        exit();
    }else{
        header("location:/test/forum_project/contacts.php?contactsfeedback='false'");
    }
}

?>
    


<!-- 
    // make a db named ashuphp
    name email phone text make four tables in db
    chnge 27 and 30 location acc. to your pc
    also chnge the form action location  -->

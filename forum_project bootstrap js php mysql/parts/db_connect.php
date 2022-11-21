<?php

//make a connection with database
$servername = "localhost";
$username = "root";
$password = "";
$database = "idiscuss";
$connection = mysqli_connect($servername , $username , $password , $database);

//handle error with connection to database
if(!$connection){
    echo "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
};

?>
<?php
session_start();
$_SESSION['notifyloggedin'] = "FALSE";

echo '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="http://localhost/test/forum_project/home.php">iDiscuss</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="http://localhost/test/forum_project/home.php">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost/test/forum_project/about.php">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Top Catgories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">';
        
        $mysql = "SELECT category_name,category_sno FROM `idiscuss-table` LIMIT 5";
        $result = mysqli_query($connection , $mysql);
        while($row = mysqli_fetch_assoc($result)){
          echo '<li><a class="dropdown-item" href="http://localhost/test/forum_project/threads.php?catid='. $row['category_sno'] .'">'. $row["category_name"] .'</a></li>';
        } 
         
        
        echo '</ul>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="http://localhost/test/forum_project/contacts.php">contacts</a>
      </li>




      </ul> 
    <form class="d-flex mx-2" action="http://localhost/test/forum_project/parts/search.php" method="GET">
      <input class="form-control me-2" type="search" name="query" placeholder="Search" aria-label="Search">
      <button class="btn btn-success"  type="submit">Search</button>
    </form>';
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
  echo'
      <p class="text-light my-0 mx-2">Welcome '. $_SESSION['username'] .'</p>
      <a href="parts/logout.php/" class="btn btn-outline-success my-0">Logout</a>';
      
      $_SESSION['notifyloggedin'] = "TRUE";
}else{
  echo'
      <button class="btn btn-outline-success mx-2" data-bs-toggle="modal" data-bs-target="#loginmodal">Login</button>
      <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#signupmodal">Signup</button>
      ';
} 

echo '</div>
      </div>
      </nav>';


include 'loginmodal.php';
include 'signupmodal.php';


// if(isset($_GET['signupsuccess'])  and $_GET['signupsuccess'] = 'true'){
//   echo "<div class='alert alert-success my-0  alert-dismissible fade show' role='alert'>
//             <strong>Success! </strong>your account is successfully created , please login to enter in your account<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
//          </div>";   
// }else{
//   $error = $_GET['signuperror'];
//   echo $error;
//   // echo"<div class='alert alert-warning my-0  alert-dismissible fade show' role='alert'>
//   //         <strong>ALERT! </strong>Error happend<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
//   //     </div>"; 
// }

// if(isset($_GET($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
//   echo"<div class='alert alert-success my-0  alert-dismissible fade show' role='alert'>
//           <strong>Success! </strong>your account has been logged in successfully<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
//       </div>";   
// }else{
//   $error = $_GET['loginerror'];
//   echo"<div class='alert alert-warning my-0  alert-dismissible fade show' role='alert'>
//           <strong>ALERT! </strong>" . $error . "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
//       </div>"; 

// }
?>






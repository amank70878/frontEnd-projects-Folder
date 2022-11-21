<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- fontawesome link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <title>Contacts</title>

    <style>
    *
    {
      margin: 0;
      padding: 0;  
      box-sizing: border-box;
    }
    .contact{
      position: relative;
      max-height: 85.10vh;
      padding: 50px 100px;
      display: flex;
      justify-content: center;
      align-items:center;
      flex-direction: column;
      /* background: url(images/contact.jpg);
      background-size: cover; */
      background: #2b1c1c ;
    }
    .contact .content{
      max-width: 800px;
      text-align: center;
    }
    .contact .content h2{
      font-size: 36px;
      font-weight: 500;
      color: #fff;
    }
    .contact .content p{
      font-weight: 300;
      color: #fff;
    }
    .container{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
    .container .contactInfo{
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    .container .contactInfo .box{
      position: relative;
      padding: 20px 0;
      display: flex;
    }
    .container .contactInfo .box .icon{
      min-width: 60px;
      height: 60px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 22px;
    }
    .container .contactInfo .box .text{
      display: flex;
      margin-left: 20px;
      font-size: 16px;
      color: #fff;
      flex-direction: column;
      font-weight: 300;
    }
    .container .contactInfo .box .text h3{
      font-weight: 500;
      color: #00bcd4;
    }
    .contactForm{
      border-radius:20px;
      width: 40%;
      padding: 40px ;
      background: #fff;
    }
    .contactForm h2{
      font-size: 30px;
      color: #333;
      font-weight: 500;
    } 
    .contactForm .inputbox{
      position: relative;
      width: 100%;
      margin-top: 10px;
    }
    .contactForm .inputbox input,
    .contactForm .inputbox textarea 
    {
      width: 100%;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      border: none;
      border-bottom: 2px solid #333;
      outline: none;
      resize: none;
    }
    .contactForm .inputbox span{
      position: absolute;
      left: 0;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      pointer-events: none;
      transition: 0.5s;
      color: #666;
    }
    .contactForm .inputbox input:focus ~ span,
    .contactForm .inputbox input:valid ~ span,
    .contactForm .inputbox textarea:focus ~ span,
    .contactForm .inputbox textarea:valid ~ span{
      color: #000;
      font-size: 15px;
      transform: translateY(-20px);
    }
    .contactForm .inputbox input[type="submit"]{
      width: 100px;
      background: #00bcd4;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
    }
    .submitbtn{
      width: 100%;
      height: 35px;
      border-radius:20px;
      color:black;
      font-weight:700;
      background: #fff;
    }
    .submitbtn:hover{
      background: grey;
    }
    @media (max-width: 991px){
      .contact{
        padding: 50px;
      }
      .container{
        flex-direction: column;
      }
      .container .contactInfo{
        margin-top: 40px;
      }
      .container .contactInfo,
      .contactForm{
        width: 100%;
      }
    }
    
    </style>
  </head>
  <body>
    <?php 
        include "parts/db_connect.php";
        // include "parts/header.php"; 

        // header starts here
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


include 'parts/loginmodal.php';
include 'parts/signupmodal.php';


    ?>
    <section class="contact">
      <div class="content">
          <h2>Contact Us</h2>
          <p>iDiscuss helps people find the answers they need, when they need them.</p>
      </div>
      <div class="container">
        <div class="contactInfo">

        <div class="box">
            <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div class="text">
              <h3>Address</h3>
              <p>House no. 136/4,<br>Railway Colony No.12,<br>ludhiana </p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div class="text">
              <h3>Phone No.</h3>
              <p>+91-7087819490</p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
            <div class="text">
              <h3>Email Address</h3>
              <p>hm829315@gmail.com</p>
            </div>
          </div>

        </div>
      

      <!-- form -->
      <div class="contactForm">
        <form action="http://localhost/test/forum_project/parts/contactsform.php"  method="POST">
          <h2>Send Message</h2>
          <div class="inputbox">
            <input type="email" name="email" required="required">
            <span>Enter your email address</span>
          </div>
          <div class="inputbox">
            <textarea name="message" required="required"></textarea>
            <span>Type your Message</span>
          </div>
          <div class="inputbox">
            <button type="submit" class="submitbtn">SUBMIT</button>
          </div>
        </form>
      </div>
      </div>
    </section>


    <?php 
        include "parts/footer.php";
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  </body>
</html>
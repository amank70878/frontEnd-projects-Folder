<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <!-- fontawesome link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!-- adding css file -->
    <link rel="stylesheet" href="css/styleforabout.css">

    <title>About</title>
    <style>
      
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
        *{
          margin:0px;
          padding:0px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
   
        .section{
          width: 100%;
          min-height: 87vh;
          background-color: #ddd;
        }
        .container{
          width: 80%;
          display: block;
          margin:auto;
          padding-top: 100px;
        }
        .content-section{
          float: left;
          width: 55%;
        }
        .image-section{
          float: right;
          width: 40%;
        }
        .image-section img{
          width: 100%;
          height: auto;
        }
        .content-section .title{
          text-transform: uppercase;
          font-size: 28px;
        }
        .content-section .content h3{
          margin-top: 20px;
          color:#5d5d5d;
          font-size: 21px;
        }
        .content-section .content p{
          margin-top: 10px;
          font-family: sans-serif;
          font-size: 18px;
          line-height: 1.5;
        }
        .content-section .content .button{
          margin-top: 30px;
        }
        .content-section .content .button a{
          background-color: #3d3d3d;
          padding:12px 40px;
          text-decoration: none;
          color:#fff;
          font-size: 25px;
          letter-spacing: 1.5px;
        }
        .content-section .content .button a:hover{
          background-color: #a52a2a;
          color:#fff;
        }
        .content-section .social{
          margin: 40px 40px;
        }
        .content-section .social i{
          color:#a52a2a;
          font-size: 30px;
          padding:0px 10px;
        }
        .content-section .social i:hover{
          color:#3d3d3d;
        }
        @media screen and (max-width: 768px){
          .container{
          width: 80%;
          display: block;
          margin:auto;
          padding-top:50px;
        }
        .content-section{
          float:none;
          width:100%;
          display: block;
          margin:auto;
        }
        .image-section{
          float:none;
          width:100%;
          
        }
        .image-section img{
          width: 100%;
          height: auto;
          display: block;
          margin:auto;
        }
        .content-section .title{
          text-align: center;
          font-size: 19px;
        }
        .content-section .content .button{
          text-align: center;
        }
        .content-section .content .button a{
          padding:9px 30px;
        }
        .content-section .social{
          text-align: center;
        }

        }


    </style>
  </head>
  <body>
    <?php 
        include "parts/db_connect.php";
        include "parts/header.php"; 
    ?>
    <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
          
				</div>
				<div class="content">
					<u><h3 class='h3h3'>iDiscuss Forum : Online Discussion Forum Website</h3></u><br>
					<p>iDiscuss helps people find the answers they need, when they need them.It is a free website in which all the user can discuss their queries about different programming languages and if they have a good understanding about programming languages then they can solve the problems of others by giving them a good answer .</p>
					
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="images/aboutpic.png">
			</div>
		</div>
	</div>


                        
    <?php 
        include "parts/footer.php";
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  </body>
</html>
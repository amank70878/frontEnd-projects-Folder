<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <title>Home</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Rubik:ital@1&display=swap" rel="stylesheet">
    <style>
        .text-box
        {
            font-family: 'Roboto Slab', serif;
            text-align: center;
            margin-top: 15px;
        }
        .text-box h1{
            font-size: 32px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <?php  
    include "parts/db_connect.php";
    include "parts/header.php"; 
    include "parts/handlesignup.php";
    if($_SESSION['notifyloggedin'] ==  "TRUE"){
        echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
            <strong>Success! </strong>you are logged in successfully :)
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>";
    }
    else{
        echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
            <strong>Success! </strong>please login so that you can insert your queries
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>";
    }
    ?>


    <!-- slider starts here -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/2400x700?coding,javascript" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/2400x700?programming,python" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/2400x700?vscode,php" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>


    <div class="text-box">
        <h1><b>RULES : </b> Do not post <span class="text-box-span"></span></h1>
        <hr>
    </div>

    <div class="container my-4">
        <h2 class="text-center"> iDiscuss - Categories</h2>
        <div class="row">
            
        <?php
        $mysql = "select * from `idiscuss-table`";
        $result = mysqli_query($connection , $mysql);
        while ($row = mysqli_fetch_assoc($result)){
            $_categoryId = $row['category_sno'];
            $_categoryName = $row['category_name'];
            $_categoryDescription = $row['category_description'];
            echo '<div class="col-md-4 py-3 ">
                    <div class="card" style="width: 18rem; ">
                        <img src="https://source.unsplash.com/500x400?' .$_categoryName .',coding" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"><a href="http://localhost/test/forum_project/threads.php?catid=' .$_categoryId .'">' .$_categoryName .'</a></h5>
                            <p class="card-text">' .$_categoryDescription .'.</p>
                            <a href="http://localhost/test/forum_project/threads.php?catid=' .$_categoryId .'" class="btn btn-primary">view threads</a>
                        </div>
                    </div>
                </div>';
        };
        ?>
        </div>
    </div>


            <?php  include "parts/footer.php"; ?>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                crossorigin="anonymous">
            </script>
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
            <script>
                var typed = new Typed(".text-box-span" , {
                    strings : ["copyright-infringing material" , "“offensive” posts, links or images" , "“stupid” topic names"],
                    typeSpeed :   100 ,
                    backSpeed : 100 ,
                    loop : true
                })
            </script>
</body>

</html>
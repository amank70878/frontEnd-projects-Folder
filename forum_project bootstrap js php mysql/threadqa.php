<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- fontawesome link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <!-- add jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
    <!-- adding css file -->
    <link rel="stylesheet" href="css/styleforthreadqa.css">

    <title>Home</title>
    <style>
        .post-info {
            margin: 10px auto 0px;
            padding: 5px;
        }

        .fa {
            font-size: 1.2em;
        }

        .fa-thumbs-down,
        .fa-thumbs-o-down {
            transform: rotateY(180deg);
        }

        .logged_in_user {
            padding: 10px 30px 0px;
        }

        i {
            color: blue;
        }
    </style>
</head>

<body>

    <?php  
    include "parts/db_connect.php";
    include "parts/header.php"; 
    $id = $_GET['threadid'];
    // fetch the information from thread-user-table
    $mysql = "select * from `thread-user-table` where thread_sno = $id";
    $result = mysqli_query($connection , $mysql);
    while ($row = mysqli_fetch_assoc($result)){
        $threadSno = $row['thread_sno'];
        $threadTitle = $row['thread_ques_title'];
        $threadDesc = $row['thread_ques_description'];
        $thread_user_id = $row['thread_user_id'];

        // fetch the user name from users table 
        $mysql2 = "SELECT * FROM `user` WHERE `user_sno` = '$thread_user_id'";
        $result2 = mysqli_query($connection , $mysql2);
        $row2 = mysqli_fetch_assoc($result2);
        $posted_by = $row2['user_name'];

        }

    
    ?>

    <!-- insertion in the comments -->
    <?php 
    $solutionError = false;
    $id = $_GET['threadid'];
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $solution  = $_POST["commentSolution"];
        $solution = str_replace("<" , "&lt;" , $solution);
        $solution = str_replace(">" , "&gt;" , $solution);

        $user_sno = $_POST['user_sno'];
        $mysql = "INSERT INTO `comments-table` (`comment_solution`, `thread_id`, `comment_by`, `comment_time`) VALUES ('$solution', '$id', '$user_sno', current_timestamp());";
        $result = mysqli_query($connection , $mysql);
        if(!$result){
            $solutionError = true;
        }else{
            echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
            <strong>Success! </strong>your comment has been added successfully :)
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>";
        }
    }
    if($solutionError){
        echo "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>ALERT! </strong>problem in adding the solutions
        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
        </div>";
    }
    ?>

    <!-- jumbotron -->
    <div class="container ">
        <div class="jumbotron p-2" style="background-color:#e9f3f2">
            <h2 class="display-4 text-center py-1"><?php echo $threadTitle;?></h2>
            <h4 class="lead text-center"><?php echo $threadDesc ;?>.</h4>
            <hr class="my-4">
            <p class="text-center">No Spam / Advertising / Self-promote in the forums. <br>
                Do not post copyright-infringing material. <br>
                Do not post “offensive” posts, links or images.<br>
                Do not cross post questions.<br>
                Do not PM users asking for help.<br>
                Remain respectful of other members at all times.
            </p>
            <p class="my-1 ">posted by : <b><?php echo $posted_by?></b></p>
        </div>
    </div>
    <hr>

    <!-- form to add the solutions -->
<?php 
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] = true){
echo '<div class="container">
        <form action="'. $_SERVER['REQUEST_URI'].'" method="POST">
            <b>
                <h1 class="py-2">Post a Comment</h1>
            </b>
            <div class="mb-3">
            <input type="hidden" name="user_sno" value="'. $_SESSION["user_sno"] .'">
                <textarea class="form-control" id="commentSolution" name="commentSolution"
                    style="height: 100px"></textarea>
            </div>
            <button type="submit" class="btn btn-primary ">post a comment</button>
        </form>
     </div>';
}else{
    echo'<div class="container">
            <h1 class="py-3">Post a Comment</h1>
            <p class="">You have to loggedin first, if you want to Post a Comment.</p>
         </div>
        ';
}
?>


    <!-- Add your solutions here -->
    <div class="container my-2">
        <h1 class="py-3"> Browse Solutions </h1>
        <?php
        $id = $_GET['threadid'];
        $mysql = "SELECT * FROM `comments-table` WHERE thread_id = $id";
        $result = mysqli_query($connection , $mysql);
        $noComment = true;
        while ($post = mysqli_fetch_assoc($result)){
            $noComment = false;
            $solution = $post['comment_solution'];
            $comment_time = $post['comment_time'];
            $comment_by = $post['comment_by'];
            $id = $post['comment_sno'];
            $mysql2 = "SELECT * FROM `user` WHERE `user_sno` = '$comment_by'";
            $result2 = mysqli_query($connection , $mysql2);
            $row2 = mysqli_fetch_assoc($result2);

            
            
            echo '
            <div class="d-flex my-3" id="postansdiv">
                
                    <img src="images/user.png" class="mr-3" width="45px" height="45px" alt="...">
               
                <div class="flex-grow-1 ms-3">
                    <b><p class="font-weight-bold my-0">'. $row2['user_name'] .' at '. $comment_time .'</p></b>
                    <p class="mt-0">' . $solution . '</p>
                    
                    <div class="post-info">
                        <i class="fa fa-thumbs-up like-btn"></i>
                        <i class="fa fa-thumbs-down dislike-btn"></i>
                    </div>
                    
                    
                    
                </div>
            </div><br>';
        }

        
        if($noComment){
            echo '<p class="text-center"><b>there is no solution given ,be the first to add a solution</b></p>';
        }

        
        ?>

    </div>

    

    <?php  include "parts/footer.php"; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">
    </script>
    <script src="js/script.js"></script>
</body>
</html>


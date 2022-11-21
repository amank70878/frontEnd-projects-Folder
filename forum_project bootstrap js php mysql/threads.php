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
</head>

<body>
    <?php  
    include "parts/db_connect.php";
    include "parts/header.php"; 
    $id = $_GET['catid'];
    $mysql = "select * from `idiscuss-table` where category_sno = $id";
    $result = mysqli_query($connection , $mysql);
    while ($row = mysqli_fetch_assoc($result)){
        $threadQues = $row['category_name'];
        $threadDesc = $row['category_description'];
    }
?>
    <?php 
    $resultError = false;
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $title = $_POST["prbtitle"];
        $title = str_replace("<" , "&lt;" , $title);
        $title = str_replace(">" , "&gt;" , $title);

        $description = $_POST["prbdescription"];
        $description = str_replace("<" , "&lt;" , $description);
        $description = str_replace(">" , "&gt;" , $description);

        $user_sno = $_POST['user_sno'];
        $mysql = "INSERT INTO `thread-user-table` (`thread_ques_title`, `thread_ques_description`, `thread_cat_id`, `thread_user_id`, `thread_time`) VALUES ('$title', '$description', '$id', '$user_sno' , current_timestamp())";
        $result = mysqli_query($connection , $mysql);
        if(!$result){
            $resultError = true;
        }else{
            echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
            <strong>Success! </strong>your query has been added successfully :)
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>";
        }

        if($resultError){
            echo "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
                <strong>Alert! </strong>problem in adding the questions
                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                </div>";
        }
    }
?>
    <div class="container">
        <div class="jumbotron" style="background-color:#e9f3f2">
            <h1 class="display-4 text-center">Welcome to <?php echo $threadQues ;?> forums</h1>
            <p class="lead text-center"><?php echo $threadDesc ;?> </p>
            <hr class="my-4">
            <p class="text-center">No Spam / Advertising / Self-promote in the forums. <br>
                Do not post copyright-infringing material. <br>
                Do not post “offensive” posts, links or images.<br>
                Do not cross post questions.<br>
                Do not PM users asking for help.<br>
                Remain respectful of other members at all times..</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
    <hr>


    <?php
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] = true){
    echo '<div class="container">
            <form action="'. $_SERVER['REQUEST_URI'] .'" method="POST">
                <b>
                <h1 class="py-3">Start a Discussion</h1>
                </b>
                <div class="mb-3">
                    <label for="prbtitle" class="form-label">Problem Title </label>
                    <input type="text" class="form-control" id="prbtitle" name="prbtitle" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">keep your words short and accurate.</div>
                </div>
                <div class="mb-3">
                    <input type="hidden" name="user_sno" value="'. $_SESSION["user_sno"] .'">
                    <label for="prbdescription" class="form-label">Problem Description </label>
                    <textarea class="form-control" id="prbdescription" name="prbdescription" style="height: 100px"></textarea>
                </div>
                <button type="submit" class="btn btn-primary ">Submit</button>
            </form>
        </div>';
}else{
    echo'
        <div class="container">
            <h1 class="py-3">Start a Discussion</h1>
            <p class="py-1">You have to loggedin first, if you want to start a discussion.</p>
        </div>
        ';
}
?>


    <div class="container my-2">
        <h1 class="py-3 ">Browse Question </h1>
        <?php
        $id = $_GET['catid'];
        $mysql = "select * from `thread-user-table` where thread_cat_id = $id";
        $result = mysqli_query($connection , $mysql);
        $noResult = true;
        while ($row = mysqli_fetch_assoc($result)){
            $noResult = false;
            $threadSno = $row['thread_sno'];
            $threadTitle = $row['thread_ques_title'];
            $threadDesc = $row['thread_ques_description'];
            $thread_time = $row['thread_time'];
            $thread_user_id = $row['thread_user_id'];
            
            $mysql2 = "SELECT * FROM `user` WHERE `user_sno` = '$thread_user_id'";
            $result2 = mysqli_query($connection , $mysql2);
            $row2 = mysqli_fetch_assoc($result2);

            echo '
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="images/user.png" width="30px" alt="...">
                </div>
                <div class="flex-grow-1 ms-3">
                <p class="my-0 "><b>'. $row2['user_name'] .' at '. $thread_time .'</b></p>
                    <h5 class="mt-0"><a class="text-dark"href="threadqa.php?threadid=' .$threadSno. '">' .$threadTitle  .  '</a></h5>
                    ' .$threadDesc .'
                </div>
            </div><br>';
        }
        if($noResult){
            echo '<p class="text-center"><b>there is no question asked be the first to ask a question</b></p>';
        }
        ?>
    </div>



    <?php  include "parts/footer.php"; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous">
    </script>
</body>

</html>
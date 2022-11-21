<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <title>Search</title>
    <style>
        .outer_container{
            min-height: 86vh;
        }
    </style>
  </head>
  <body>
 
<?php include "db_connect.php"; ?>
<?php include "header.php"; ?>
    
<div class="outer_container">
<h1 class="text-center py-3">Search result for <?php echo $_GET['query']; ?></h1><hr>

<?php
    $noresult = true;
    $query = $_GET['query'];
    $mysql = "select * from `thread-user-table` where match (thread_ques_title,thread_ques_description) against('$query')";    
    $result = mysqli_query($connection , $mysql);

    // fetch value from database 
    while ($row = mysqli_fetch_assoc($result)){
        $sno = $row['thread_sno'];
        $title = $row['thread_ques_title'];
        $description = $row['thread_ques_description'];
        $noresult = false;

        // displaying result 
        echo'<div class="container px-5">
              
              <h3>
                  <a href="http://localhost/test/forum_project/threadqa.php?threadid='. $sno .'" class="text-dark"> '. $title .'  </a>
              </h3>
              <p>'. $description .'</p>
            </div>';
    }

    // showing error if there is no result found
    if($noresult){
      echo'<div class="container">
              <h1 class="my-2 py-2 pt-4">It looks like there aren\'t any matches for your search</h1>
              <p><b>Tip</b> : try to make your words short and accurate . For example, "cake recipes" instead of "how to make a cake".
             </p>
          </div>
      ';
    }
    
?>


</div>
    <?php 
        include "footer.php";
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  </body>
</html>
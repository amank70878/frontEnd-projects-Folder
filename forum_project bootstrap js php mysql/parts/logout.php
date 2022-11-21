<?php


session_start();
echo "logging out";

session_destroy();
header("location:/test/forum_project/home.php");



?>
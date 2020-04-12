<?php
session_start();
header('location:login.php');

$con = mysqli_connect('localhost','root');
mysqli_select_db($con,'userregistration');
$name = $_POST['user'];
$pass = $_POST['password'];
$s = " select * from usertable where name = '$name'";
$res = mysqli_query($con, $s);
$num = mysqli_num_rows($res);

if($num == 1){
    echo"Name Already Taken";
}
else{
    $reg = "insert into usertable(name, password) values('$name' , '$pass')";
    mysqli_query($con, $reg);
    echo"Registration Successful";
}
?>
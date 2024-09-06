<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET , POST , PUT , DELETE , OPTION');
header('Access-Control-Allow-headers:content-type,Authorization');

$conn = mysqli_connect("localhost","root","","file");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $folder = 'image/';
    $imagename = basename($_FILES['image']['name']);
    $final = $folder . $imagename;

    $query = mysqli_query($conn , "Insert into upload (Image)values('$imagename')");

    if($query){
        move_uploaded_file($_FILES['image']['tmp_name'],$final);
    }
}



?>
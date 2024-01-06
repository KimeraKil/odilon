<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $base = 'autoeletrica';        
    //didknowmaxthunder3*K
    try{
        $pdo = new PDO("mysql:host={$host};dbname={$base};charset=UTF8;", $user, $pass);
        //echo 'OK';
    } catch (Exception $e) {
        die ('ERRO: Contate o Administrador');
    }

    /*$sql = $pdo->prepare("SELECT MAX(id) as id FROM usuarios");
    $sql->execute();
    $row = $sql->fetch();

    //echo($row['id']);*/
    //session_start();
    //echo $_SESSION['id_User'];
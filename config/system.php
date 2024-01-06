<?php

date_default_timezone_set('America/Sao_Paulo');

include_once 'sys.php';


if(isset($_POST['action'])){
    $acao = $_POST['action'];

    if($acao == "newUser"){
        $newUser = $_POST['dadosUser'];

        $sql = $pdo->prepare("SELECT id, user FROM usuarios WHERE cpf=:CPF");
        $sql->bindValue(":CPF", $newUser['cpf']);
        $sql->execute();

        if($sql->rowCount() > 0){
            //Existe Usuario Cadastrado
            echo json_encode(false);
        } else {
            //Cadastrar
            $sql = $pdo->prepare("INSERT INTO usuarios (fullname, user, senha, contato, email, cpf) VALUES(:fn, :u, :s, :c, :e, :cpf)");
            $sql->bindValue(":fn", $newUser['nome']);
            $sql->bindValue(":u", $newUser['login']);
            $sql->bindValue(":s", md5($newUser['senha']));
            $sql->bindValue(":c", $newUser['contato']);
            $sql->bindValue(":e", $newUser['email']);
            $sql->bindValue(":cpf", $newUser['cpf']);
            $sql->execute();

            /*$sql = $pdo->prepare("SELECT MAX(id) as id FROM usuarios");
            $sql->execute();
            $row = $sql->fetch();*/

            //echo($row['id']);
            session_start();
            $_SESSION['user'] = $newUser['login'];
            $_SESSION['id_User'] = $newUser['cpf'];

            echo json_encode(true);
        }

    } else if($acao == 't401'){
        session_start();
        if(isset($_SESSION['id_User'])){
            echo (true);
        } else {
            echo (false);
        }
    }














}
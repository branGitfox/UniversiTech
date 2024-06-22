<?php
require_once './Database.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-methods: *');

$db = new Database();

// var_dump($db->connect());



$method = $_SERVER['REQUEST_METHOD'];

// echo strlen($_SERVER['REQUEST_URI']);

$user =json_decode(file_get_contents('php://input'));


switch ($method) {
    case "POST":
            $link = explode('/',$_SERVER['REQUEST_URI']);
            $key = end($link);

            if($key == 'newEvent'){
                $response = json_encode($db->test(['message' => 'successful'],$db->newEvent($user->titre, $user->date, $user->description)));
            }else if($key == 'updateEmplois'){

                $response = json_encode($db->test(['message'=> 'succes'], $db->UpdateSchedule($user->jours, $user->filieres, $user->niveau, $user->matiere1, $user->matiere2, $user->matiere3, $user->matiere4)));
            }else{

                $response = json_encode($db->test(['message'=> 'successful'],$db->login($user->name, $user->firstname,$user->email, $user->date, $user->filiere, $user->password)));

            }

        echo $response;
        break;
    case "GET":
        
        
        
        if(strlen($_SERVER['REQUEST_URI']) == 19){
                $link=explode('/',$_SERVER['REQUEST_URI']) ;
                $annee=$link[3];
                 $id_filiere = $link[4];
                if($db->emploie($annee, $id_filiere)){
                    $response = $db->emploie($annee, $id_filiere);
                }else{
                    $response = "pas d'emplois du temps";
                }

        }else if(strlen($_SERVER['REQUEST_URI']) == 21){
                if($db->getEvents()){
                    $response= $db->getEvents();
                }else{
                    $response= "erreur";
                }
                
        } else {
               if($db->listOfUSer()){
                $response = $db->listOfUSer();
            }else {
                $response = "erreur";
            }
         }

        echo json_encode($response);
        break;
    case "DELETE":
    
         $id = end(explode('/', $_SERVER['REQUEST_URI']));
            $response = $db->test(['message'=>'succes'], $db->deleteByID($id));
        echo json_encode($response); 
}
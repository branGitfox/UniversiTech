<?php
require_once './Database.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-methods: *');

$db = new Database();

// var_dump($db->connect());



$method = $_SERVER['REQUEST_METHOD'];
// print_r(file_get_contents('php://input'));
// print_r($_POST);
// $user = json_decode(file_get_contents('php://input'));
// print_r($user);

// var_dump($user);
// if(isset($_POST['id'])){
//     echo $_POST['id'];
// }

// echo $method;
$user =json_decode(file_get_contents('php://input'));

// switch($method){
//     case "POST":
//         $send = $db->connect()->prepare('INSERT INTO users (`name`,`email`) VALUES (?, ?)');

//         if($send->execute([$user->name, $user->email])){
//             $response = ['status' => 1, 'message' => "user is created"];
            
//         }else {
//             $response = ['status' => 0, 'message' => "failed to create user"];
//         }

//         echo json_encode($response);
//         break;
//         case "GET":
//            $data = explode('/',$_SERVER['REQUEST_URI']);
             
//             if(!empty(end($data))&& is_numeric(end($data))){
//                 $listOfUSer = $db->connect()
//                 ->prepare('SELECT * FROM users WHERE id=?');
//                 $listOfUSer->execute([end($data)]);
                
//               if($listOfUSer->rowCount() > 0){
//                     $data = $listOfUSer->fetch(PDO::FETCH_ASSOC);
//                     $resul =$data;
//               }else {
//                 $resul = 'not found';
//               }
//             }else{
//                  $listOfUSer = $db->connect()
//             ->prepare('SELECT * FROM users ');
//             $listOfUSer->execute();
            
//           if($listOfUSer->rowCount() > 0){
//                 $data = $listOfUSer->fetchAll(PDO::FETCH_ASSOC);
//                 $resul =$data;
//           }else {
//             $resul = 'not found';
//           }
//             }
           
//             echo json_encode($resul);
//             break;
//         case "DELETE":
//            $data = explode('/',$_SERVER['REQUEST_URI']);
//            $del = $db->connect()
//            ->prepare('DELETE FROM users WHERE id=?');
//            $del->execute([end($data)]);
//            break;
//           case "PUT":
//            $data = explode('/',$_SERVER['REQUEST_URI']);
//             // echo end($data);
//            if(!empty(end($data))&& is_numeric(end($data))){
//             $listOfUSer = $db->connect()
//             ->prepare('UPDATE users SET name=?, email=? WHERE id=? ');
            
            
//           if($listOfUSer->execute([$user->name,$user->email,end($data)])){
//                 // $data = $listOfUSer->fetch(PDO::FETCH_ASSOC);
//                 $resul ="ok";
//           }else {
//             $resul = 'not found';
//           }
//         }

//         echo json_encode($resul);
//         break;

// }
// echo $user->name.$user->firstname.$user->date.$user->filiere;
switch ($method) {
    case "POST":
            
        echo json_encode($db->test(['message'=> 'successful'],$db->login($user->name, $user->firstname,$user->email, $user->date, $user->filiere, $user->password)));

        break;
    case "GET":
        
        
        // echo $link[4];
        if(strlen($_SERVER['REQUEST_URI']) == 19){
                $link=explode('/',$_SERVER['REQUEST_URI']) ;
                $annee=$link[3];
                 $id_filiere = $link[4];
                if($db->emploie($annee, $id_filiere)){
                    $response = $db->emploie($annee, $id_filiere);
                }else{
                    $response = "pas d'emplois du temps";
                }
        }else {
                
            if($db->listOfUSer()){
                $response = $db->listOfUSer();
            }else {
                $response = "erreur";
            }

            }

        echo json_encode($response);
        break;
}
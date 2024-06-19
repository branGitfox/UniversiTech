<?php 

   class Database {
    private $host = 'localhost';
    private $user = 'root';
    private $pdo = null;
    private $pass = '';
    private $dbname = 'universitech';


    public function connect(){
        if($this->pdo == null){
            return new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);
        }

        return $this->pdo;
    }

    public function login($nom, $prenom,$email, $dateN, $id_filiere, $password) {
        $log = $this->connect()
        ->prepare("INSERT INTO etudiants (`nom`, `prenom`,`email` ,`dateN`, `id_filiere`, `password`) VALUES (?, ?,?, ?,?, ?)");
        $log->execute([$nom, $prenom,$email, $dateN, $id_filiere, $password]);
        return true;
    }

    public function test($response, $test){
        if($test){
            return $response;
        }else{

            return "erreur";
        }

    }

    public function listOfUSer(){
        $list = $this->connect()
        ->prepare('SELECT * FROM etudiants');
        $list->execute();
       return $list->fetchAll();

    }
}
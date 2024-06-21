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
        ->prepare('SELECT * FROM etudiants JOIN filieres ON filieres.id_filiere = etudiants.id_filiere');
        $list->execute();
       return $list->fetchAll();


    }

    public function emploie($annee_filiere, $id_filiere) {
        $emploi= $this->connect()
        ->prepare('SELECT * FROM emplois  JOIN horaire  ON horaire.id_emploi= emplois.id_emploi   WHERE emplois.annee_filiere=? AND emplois.id_filiere=? ');
        $emploi->execute([$annee_filiere, $id_filiere]);
        return $emploi->fetch();
    }
}
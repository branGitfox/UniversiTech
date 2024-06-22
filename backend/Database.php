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

    public function newEvent($titre,$date, $description){
        $newEvent = $this->connect()
        ->prepare('INSERT INTO events (`titre`,`date`,`description`) VALUES (?,?,?)');
        $newEvent->execute([$titre, $date, $description]);
    }

    public function getEvents(){
        $events = $this->connect()
        ->query('SELECT * FROM events');
        $events->execute();
        return $events->fetchAll();
    }


    public function UpdateSchedule($jour, $filieres, $niveau, $matiere1, $matiere2, $matiere3, $matiere4){
        
        switch($jour){
            case "lundi":
                $test=$this->connect()
                ->prepare('UPDATE horaire SET lundi_7h15_9h15=?, lundi_9h15_11h15=?, lundi_12h30_14h=?, lundi_14h_15h30=? WHERE id_emploi=? AND annee_filiere=?');
                $test->execute([$matiere1, $matiere2, $matiere3, $matiere4, $filieres, $niveau]);
                break;
                case "mardi":
                    $test=$this->connect()
                    ->prepare('UPDATE horaire SET mardi_7h15_9h15=?, mardi_9h15_11h15=?, mardi_12h30_14h=?, mardi_14h_15h30=? WHERE id_emploi=? AND annee_filiere=?');
                    $test->execute([$matiere1, $matiere2, $matiere3, $matiere4, $filieres, $niveau]);
                    break;    
                 case "mercredi":
                    $test=$this->connect()
                    ->prepare('UPDATE horaire SET mercredi_7h_9h15=?, mercredi_9h15_11h15=?, mercredi_12h30_14h=?, mercredi_14h_15h30=? WHERE id_emploi=? AND annee_filiere=?');
                    $test->execute([$matiere1, $matiere2, $matiere3, $matiere4, $filieres, $niveau]);
                    break;
                    case "jeudi":
                        $test=$this->connect()
                        ->prepare('UPDATE horaire SET jeudi_7h15_9h15=?, jeudi_9h15_11h15=?, jeudi_12h30_14h=?, jeudi_14h_15h30=? WHERE id_emploi=? AND annee_filiere=?');
                        $test->execute([$matiere1, $matiere2, $matiere3, $matiere4, $filieres, $niveau]);
                        break;   
                    case "vendredi":
                            $test=$this->connect()
                            ->prepare('UPDATE horaire SET vendredi_7h15_9h15=?, vendredi_9h15_11h15=?, vendredi_12h30_14h=?, vendredi_14h_15h30=? WHERE id_emploi=? AND annee_filiere=?');
                            $test->execute([$matiere1, $matiere2, $matiere3, $matiere4, $filieres, $niveau]);
                            break;   
                            case "samedi":
                                $test=$this->connect()
                                ->prepare('UPDATE horaire SET samedi_7h15_9h15=?, samedi_9h15_11h15=? WHERE id_emploi=? AND annee_filiere=?');
                                $test->execute([$matiere1, $matiere2, $filieres, $niveau]);
                                break;         
        }

        return true;
    }
    

    public function deleteByID($id) {
        $del = $this->connect()
        ->prepare('DELETE FROM events WHERE id_event = ?');
        $del->execute([$id]);
        return true;
    }

}
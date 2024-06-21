<?php 

require './Database.php';

$test = new Database();

                
// var_dump($test->getEvents());
var_dump($test->UpdateSchedule('lundi', 1, 'L1', 'Brandon', 'Jayson','Nolane', 'Ravomanana'));

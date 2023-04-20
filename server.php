<?php
//mi prendo il todo.json
$todoJson=file_get_contents('todo.json');
//decodifico il file json in maniera tale che php possa leggerlo
$todoPhp=json_decode($todoJson,true);
//dichiaro alla browser che è un file JSON
header('Content-type: application/json');
// stampo il contenuto tramite echo e la funzione e json_encode() 
echo json_encode($todoPhp);


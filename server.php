<?php
 //mi prendo il todo.json
 $todoJson=file_get_contents('todo.json');
 //decodifico il file json in maniera tale che php possa leggerlo
 $todoPhp=json_decode($todoJson);
 // push
if(isset($_POST['newTodo'])) {
    // salvo la chiamata post nella variabile newtodo 
    $newTodo = $_POST['newTodo'];
    // aggiungo nell'array di oggetti i parametri del nuovo oggetto
    $todoPhp[] = [
        "text" => $newTodo, 
        "status" => false,
    ];
    // converto in json
    $newTodoJSON = json_encode($todoPhp);
    //slavo il json nel file
    file_put_contents('todo.json', $newTodoJSON);
}else{
    //dichiaro alla browser che è un file JSON
    header('Content-type: application/json');
    // stampo il contenuto tramite echo e la funzione e json_encode() 
    echo json_encode($todoPhp);
}


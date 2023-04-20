<?php
if(isset($_POST['newTodo'])) {
    //mi prendo il todo.json
    $todoJson=file_get_contents('todo.json');
    //decodifico il file json in maniera tale che php possa leggerlo
    $todoPhp=json_decode($todoJson);
    // push
    $todoPhp[] = $_POST['newTodo'];
    // converto in json
    $newTodoJSON = json_encode($todoPhp);
    //slavo il json nel file
    file_put_contents('todos.json', $newTodoJSON);

}else{
    //mi prendo il todo.json
    $todoJson=file_get_contents('todo.json');
    //decodifico il file json in maniera tale che php possa leggerlo
    $todoPhp=json_decode($todoJson,true);
    //dichiaro alla browser che è un file JSON
    header('Content-type: application/json');
    // stampo il contenuto tramite echo e la funzione e json_encode() 
    echo json_encode($todoPhp);
}


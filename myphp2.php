<?php
header('Content-Type: text/html; charset=UTF-8');
$file = "file.json";

if (is_file($file)){
        $getData = file_get_contents($file);
        
        
        echo $getData; 
    }
    
else{
    echo "Ne Srabotalo";
}
?>

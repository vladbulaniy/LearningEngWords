<?php
header('Content-Type: text/html; charset=UTF-8');
//$data = json_decode($_POST['data']);
//$engword = $data->{'EngW'};
//$ruword = $data->{'RuW'};

$data3 = $_GET['data'];
$data2 = substr_replace($data3,',',0,0);
$data = substr_replace($data2,']',strlen($data2));
//echo $engword; 

$file = "file.json";

if (file_exists($file)){
    if (is_writable($file)){
        //echo "Srabotalo";
        
        $getData = file_get_contents($file);
        $getData2 = substr($getData,0,-1);
        $fp = fopen($file,"w");
        //file_put_contents($file,"\r\n".$data3,FILE_APPEND | LOCK_EX);
        fwrite ($fp,$getData2);
        fwrite ($fp,"\r\n".$data);
        fclose($fp);
    }
    
}
else{
    echo "Ne Srabotalo";
}
?>

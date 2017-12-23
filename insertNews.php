<?php

    function insertnews($title, $url){
        
        
        $insertStmt = $GLOBALS['conn']->prepare("INSERT INTO news (title, url, date) VALUES (?, ?, now());");
        
        $insertStmt->bind_param("ss", $title, $url);
        
        $insertStmt->execute();
        
        $insertStmt->close();
        
        
    }



?>
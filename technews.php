<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="technews.css" />
  <title>techNews</title>
</head>

<body>
    
    <?php 
    require_once('./connection.php');
    require('./fetchnews.php');
    
    ?>
    
    <div>
        <?php getnews(); ?>
    </div>


</body>

</html>

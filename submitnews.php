<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>submit news</title>
  <script src="submitnews.js" charset="utf-8"></script>
  <link rel="stylesheet" href="submitnews.css">
</head>

<body>
  
      <?php 
    require_once('./connection.php');
    require('./insertNews.php');
    
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
      
      insertnews($_POST["title"], $_POST["url"]);
      
    }
    
    ?>
    
  <h1>Submit</h1>

  <form method="POST">

    <label>Title:</label>
    <input type="text" name="title" value="" id="title"> <br>
    <label>URL:</label>
    <input type="text" name="url" value="" id="url"> <br>

    <h4>or</h4>

    <label>Text:</label>
    <textarea name="name" rows="5" cols="70" id="text area"></textarea>
    <input type="submit" name="" value="submit" onclick="return validate()">

  </form>

</body>

</html>

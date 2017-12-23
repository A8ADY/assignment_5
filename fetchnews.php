<?php 
function getnews()
{
    $get_all_news = "SELECT * from news;";
    $response = $GLOBALS['conn']->query($get_all_news);
    if ($response && $response->num_rows > 0) {
        echo '<ul id="newslist">';
        while ($row = $response->fetch_array()) {
            echo "<li>"."<a href=".$row["url"].">".$row["title"]."</a>".
            "<ul> <li>".$row["comments"]." | ".$row["date"]."</li> </ul>"."</li>";
        }
        echo '</ul>';
    } else {
        echo '<h3>there are no news!</h3>';
    }
}
?>
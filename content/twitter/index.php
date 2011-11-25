<?php

include('twitter.php');
$obj = new GetTweetsFrom("fireyy",5,true);
echo '<div class="twitter content">'.$obj.'</div>'; 
  
?>
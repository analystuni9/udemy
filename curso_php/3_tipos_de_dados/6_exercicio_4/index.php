<?php 
echo 4.15;
echo '<br>';
echo 12.12;
echo '<br>';

$c = -78.1;
$d = 10;

echo $c;
echo '<br>';
if(is_float($c)){
    echo 'Sim podemos ter floats negativos <br>';
}
if(is_int($d)){
    echo 'É um inteiro <br>';
}
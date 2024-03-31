<?php
if(is_int(5)){  //true
    echo 'É um inteiro ex1 <br>';
}
if(is_int('texto')){  //false
    echo 'É um inteiro ex2 <br>';
}
$a = 10;
if(is_int($a)){
    echo 'É inteiro ex3 <br>';
}
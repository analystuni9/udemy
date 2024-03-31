<?php
$pessoa = [
    'nome' => 'Danilo',
    'idade' => 30,
    'profissão' => 'Progamador',
    'graduação' => 'Tecnologia em Análise de Sistemas',
];
// Desafio
if($pessoa['idade'] >= 18){
    echo 'É maior de idade <br>';
}else{
    echo 'É menor de idade <br>';
}
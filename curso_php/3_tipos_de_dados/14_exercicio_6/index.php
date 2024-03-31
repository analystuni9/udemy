<?php 
$carro = [
    'marca' => 'BMW',
    'rodas' => '4',
    'teto_solar' => true,
    'velocidade_max' => 300,
    'blindado' => false,
];
print_r($carro);
$marca = $carro['marca'];
$velocidade_maxima = $carro['velocidade_max'];
echo '<br>';

echo "O carro é da marca $marca e atinge no máximo $velocidade_maxima km/h"; 
// Criei uma variavel que aponta para meu elemento no html
var canvas1 = document.getElementById('canvas1')
// Criei uma variavel que manipula meu contexto
var ctx1 = canvas1.getContext('2d')
// Definindo meu preenchimento
ctx1.fillStyle = 'rgba(0,0,255)'
// Desenhando um quadrado
// Definindo posição eixo x e y tamanho largura e altura 
ctx1.fillRect(0,0,50,50)
var anima
var px = 0
var py = 0
function desenha(){
    // Criei duas variaveis para manipular eixo x e y
    // Criei uma variavel que aponta para meu elemento no html
    var canvas1 = document.getElementById('canvas1')
    // Criei uma variavel que manipula meu contexto
    var ctx1 = canvas1.getContext('2d')
    ctx1.clearRect(0,0,500,500)
    ctx1.fillStyle = 'rgba(0,0,0)'
    // ctx1.rect(0,0,50,50)
    ctx1.fillRect(px,0,50,50)
    // ctx1.fill()
    px++
    // Redesenha minha animação constatemente
    anima = requestAnimationFrame(desenha)
    
}
document.addEventListener("DOMContentLoaded",desenha)
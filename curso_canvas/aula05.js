var anima
var dirX = 1
var eixoX = 0
var eixoY = 0
var widthRect = 50
var heightRect = 50
var widthCanvas = 500
var heightCanvas = 500
function desenha(){
    var canvas1 = document.getElementById('canvas1')
    var ctx1 = canvas1.getContext('2d')
    // Criei duas variaveis para manipular eixo x e y
    // Criei uma variavel que aponta para meu elemento no html
    // Criei uma variavel que manipula meu contexto
    ctx1.clearRect(0,0,widthCanvas,heightCanvas)
    ctx1.fillStyle = 'rgba(0,0,0)'
    // ctx1.rect(0,0,50,50)
    ctx1.fillRect(eixoX,eixoY,widthRect,heightRect)
    // ctx1.fill()
    eixoX += dirX
    // Redesenha minha animação constatemente
    console.log(eixoX)
        // if((eixoX + widthRect >= 500) || (eixoX <= 0)){
        //     dirX *= -1
        // }
        if(eixoX + widthRect >= widthCanvas){
            dirX = -1
        }
        if (eixoX <= 0){
            dirX = 1
        }
    anima = requestAnimationFrame(desenha)
    
}
desenha()
// document.addEventListener("DOMContentLoaded",desenha)
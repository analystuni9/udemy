function desenha(){
    // Criei duas variaveis para manipular eixo x e y
    var px = 0
    var py = 0
    // Criei uma variavel que aponta para meu elemento no html
    var canvas1 = document.getElementById('canvas1')
    // Criei uma variavel que manipula meu contexto
    var ctx1 = canvas1.getContext('2d')
    // Cordenadas x e y
    ctx1.moveTo(0,0)
    // Linha até a onde
    ctx1.lineTo(100,100)
    // ctx1.lineTo()
    // Desenhe na tela
    ctx1.stroke()
    
    
}
// DOMContentLoaded para garantir que seu script seja executado assim que o documento HTML for completamente carregado. 
document.addEventListener
("DOMContentLoaded", function(){
    desenha()
})

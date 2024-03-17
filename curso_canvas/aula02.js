function desenha(){
    // Criei duas variaveis para manipular eixo x e y
    var px = 0
    var py = 0
    // Criei uma variavel que aponta para meu elemento no html
    var canvas1 = document.getElementById('canvas1')
    // Criei uma variavel que manipula meu contexto
    var ctx1 = canvas1.getContext('2d')
    // Definindo a cor do meu preenchimento
    // ctx1.fillStyle = 'rgba(0,0,255)'
    // Desenha um quadrado preenchido
    // Definindo posição eixo x e y tamanho largura e altura 
    // ctx1.fillRect(0,0,50,50)
    //Apenas desenha um quadradado
    // Definindo posição eixo x e y tamanho largura e altura 
    ctx1.rect(0,0,50,50)
    ctx1.fill()
    // Limpa meu conteudo posição eixo x e y tamanho largura e altura
    // ctx1.clearRect(0,0,30,30)
    
}
document.addEventListener
("DOMContentLoaded", function(){
    desenha()
})

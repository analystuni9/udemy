let canvas1 = document.getElementById('canvas1')
let ctx1 = canvas1.getContext('2d')
function desenha() {
    // posX, posY, raio, anguloinicial, angulofinal, sentido 
    // sentido: true=horario false=anti-horario
    ctx1.fillStyle = 'red'
    ctx1.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*180,false)
    ctx1.fill()
    ctx1.beginPath()
    ctx1.fillStyle = 'green'
    ctx1.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*150,false)
    ctx1.fill()
    ctx1.beginPath()
    ctx1.fillStyle = 'blue'
    ctx1.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*120,false)
    ctx1.fill()
    // Formula para transformar radiando em graus
    // PI/180*angulo em grau
    // Redesenha minha animação constatemente
    // anima = requestAnimationFrame(() => { desenha() })

}
desenha()
// document.addEventListener("DOMContentLoaded",desenha)
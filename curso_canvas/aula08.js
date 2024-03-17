let canvas1 = document.getElementById('canvas1')
let anima
let ctx1 = canvas1.getContext('2d')
let max = 50
let min = 10
function desenha() {
    ctx1.clearRect(0, 0, 500, 500)
    let red2 = Math.floor(Math.random() * 256)
    let green2 = Math.floor(Math.random() * 256)
    let blue2 = Math.floor(Math.random() * 256)
    // posX, posY, raio(tamanho), angulo inicial, angulo final
    // sentido: true=horario false=anti-horario
    for (let i = 0; i <= 50; i++) {
        let raio = Math.random()  
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let x = Math.random() * 500
        let y = Math.random() * 500
        start = (Math.PI / 180) * 0
        end = (Math.PI / 180) * 360
        ctx1.beginPath() 
        ctx1.fillStyle = `rgb(${red},${green},${blue})`;
        ctx1.arc(x, y, raio * (max + min), start, end, true)
        ctx1.fill()
    }
    ctx1.clearRect(0, 0, 500, 500)
    // ctx1.beginPath() 
    // ctx1.fillStyle = 'yellow'
    ctx1.arc(250, 250, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false)
    ctx1.fill()

    // Formula para transformar radiando em graus
    // PI/180*angulo em grau
    // Redesenha minha animação constatemente
    anima = requestAnimationFrame(()=>{desenha()})
    
}
desenha()
// setInterval(desenha, 500)

// document.addEventListener("DOMContentLoaded",desenha)
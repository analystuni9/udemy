let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

class Objeto {
    constructor(x, y, largura, altura, cor) {
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.cor = cor
    }
    draw() {
        ctx.fillStyle = this.cor
        ctx.fillRect(this.x, this.y, this.largura, this.altura, this.cor)
    }
}
class Bee extends Objeto {
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
        this.dir = 0
    }
    move() {
        this.x += this.dir
    }
}
class Spider extends Objeto {
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
    }
    move(){
        this.y += 1
        if (this.y > 500){
            this.y = 0
            this.x = Math.random() * (480 - 1)
        }
    }
}
let bee = new Bee(250, 450, 20, 20, 'blue', 0)
let spider = new Spider(0, 0, 20, 20, 'red')
document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
        bee.dir = -1
    } else if (event.key === 'd'){
        bee.dir = 1
    }
})
document.addEventListener('keyup', function(event){
    if (event.key === 'a'){
        bee.dir = 0
    } else if (event.key === 'd'){
        bee.dir = 0
    }
})
function draw() {
    ctx.clearRect(0, 0, 500, 500)
    bee.draw()
    spider.draw()
}
function update() {
    bee.move()
    spider.move()
}
function main() {
    update()
    draw()
}
setInterval(main, 10)
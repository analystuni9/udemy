let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

class Objeto {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Bee extends Objeto {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color)
        this.dir = 0 // Definindo dir dentro do construtor
    }
    move() {
        this.x += this.dir
    }
}
class Spider extends Objeto {
    constructor(x, y, width, height, color){
        super(x, y, width, height, color)
    }
    move(){
        this.y += 1
        if (this.y > 500){
            this.y = 0
            this.x = Math.random() * (480 - 1)
        }
    }
}
let bee = new Bee(300, 300, 20, 20, 'blue', 0)
let spider = new Spider(100, 100, 20, 20, 'red', 0)

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        bee.dir = -1
    }
    if (event.key === 'd') {
        bee.dir = 1
    }
})

document.addEventListener('keyup', function (event) {
    if (event.key === 'a') {
        bee.dir = 0
    }
    if (event.key === 'd') {
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

// Jogo Bee 
// Variaveis
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
// Classes
class Objeto {
    constructor(x, y, largura, altura, cor) {
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.cor = cor
        this.frame = 0
        this.timer = 0
        
    }
    draw() {
        // ctx.fillStyle = this.cor
        // ctx.fillRect(this.x, this.y, this.largura, this.altura, this.image)
        let img = new Image();
        img.src = this.cor
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura);
    }
    animation(nome){
        this.timer++
        if(this.timer > 15){
            this.timer = 0
            this.frame++
            this.cor = `assets/${nome}${this.frame}.png`
        }else if(this.frame >= 4){
            this.frame = 1
        }
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
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
    }
    move() {
        this.y += 2
        if (this.y > 480) {
            this.y = 0
            this.x = Math.random() * (500 - 1)
        }

    }
}
class Background extends Objeto {
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
    }
    move(velocidade, limite, posicao) {
        this.y += velocidade
        if (this.y > limite) {
            this.y = posicao
        } 
    }
}
let bee = new Bee(250, 450, 30, 30, 'assets/bee1.png',)
let spider = new Spider(250, 0, 30, 30, 'assets/spider1.png')
let bg = new Background(0, 0, 500, 500, 'assets/bg.png')
let bg2 = new Background(0, -500, 500, 500, 'assets/bg.png')
// Eventos de teclado
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        bee.dir = -1
    } else if (event.key === 'd') {
        bee.dir = 1
    }
})
document.addEventListener('keyup', function (event) {
    if (event.key === 'a' || event.key === 'd') {
        bee.dir = 0
    }
})
// Funçoes
function draw() {
    ctx.clearRect(0, 0, 500, 500)
    bg.draw()
    bg2.draw()
    bee.draw()
    spider.draw()

}
function update() {
    bg.move(4, 500, 0)
    bg2.move(4, 0, -500)
    bee.move()
    spider.move()
    bee.animation('bee')
    spider.animation('spider')

}
function main() {
    update()
    draw()
}
setInterval(main, 10)
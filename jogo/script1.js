let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
class Objeto {
    constructor(x, y, largura, altura, cor){
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.cor = cor
    }
    draw(){
        var img = new Image()
        img.src = this.cor
        ctx.drawImage(img, this.x, this.y)
   
    }
}
class Bee extends Objeto {
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
        this.dir = 0
    }
    move(){
        this.x += this.dir
    }
}
class Spider extends Objeto {
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
    }
    move(){
        this.y += 1
        if (this.y > 420){
            this.y = 0
            this.x = Math.random() * (420 - 1)
        }
    }

}

let bee = new Bee(200, 350, 20, 20, 'assets/bee1.png', 0 )
let spider = new Spider(0, 0, 20, 20, 'assets/spider1.png')
document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
        bee.dir = -1
    }else if(event.key === 'd'){
        bee.dir = 1
    }
})
document.addEventListener('keyup', function(event){
    if(event.key === 'a'){
        bee.dir = 0
    }else if(event.key === 'd'){
        bee.dir = 0
    }
})
function draw(){
    ctx.clearRect(0, 0, 450, 450)
    bee.draw()
    spider.draw()
}
function update(){
    bee.move()
    spider.move()
}
function main(){
    draw()
    update()
}
setInterval(main, 10)
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
class Objeto {
    constructor(x, y, width, height, image, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = image
        this.color = color
    }
    draw() {
        // ctx.fillStyle = this.color
        // ctx.fillRect(this.x, this.y, this.width, this.height, this.image, this.color)
        let img = new Image()
        img.src = this.image
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
}
class Car extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.dirX = 0
        this.dirY = 0
        this.lifes = 10
    }
    move() {
        this.x += this.dirX
        this.y += this.dirY
    }
    collide(objeto){
        if(this.x < objeto.x + objeto.width && this.x + this.width > objeto.x && this.y < objeto.y + objeto.height && this.y + this.height > objeto.y ){
            // console.log('coliiu')
            return true
        } else {
            // console.log('não colidiu')
            return false
        }
    
    }
}
class Boot extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
    }
    move(speed, limit, position){
        this.y += speed
        if(this.y > limit){
            this.y = position
            this.x = Math.random() * (600 - 120)
        }else if(this.x < 100){
            this.x += this.x 
        }
    }
    raspawn(){
        this.y = -30
        this.x = Math.random() * (600 - 120)
    }
}
class Background extends Boot {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
    }
    move(speed, limit, position) {
        this.y += speed
        if (this.y > limit) {
            this.y = position
        }
    }
}
class Text extends Objeto {
    constructor(x, y, width, height, image, color){
        super(x, y, width, height, image, color)
    }
    draw(size, family, color, text, x, y){
        ctx.font = `${size} ${family}`
        ctx.fillStyle = `${color}`
        ctx.fillText(`${text}`, x, y)
    }
}
let pts = 0
let t = 0
let f = 0
let bg = new Background(0, 0, 800, 800, 'image/background(3).png')
let bg2 = new Background(0, -800, 800, 800, 'image/background(3).png')
let car = new Car(500, 600, 110, 110, 'image/car (21).png')
let boot = new Boot(180, -100, 110, 110, 'image/car (3).png')
let text = new Text()
let text2 = new Text()
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        car.dirX = -2
    } else if (event.key === 'd') {
        car.dirX = 2
    } else if (event.key === 'w') {
        car.dirY = -2
    } else if (event.key === 's') {
        car.dirY = 2
    }
})
document.addEventListener('keyup', function (event) {
    if (event.key === 'a' || event.key === 'd') {
        car.dirX = 0
    } else if (event.key === 'w' || event.key === 's') {
        car.dirY = 0
    }
})
function points(){
    t++
    if(t > 30){
        t = 0
        f++
        pts = f
    }
}
function collides(){
    if(car.collide(boot) === true){
        boot.raspawn()
        car.lifes -= 1
    }
}
function draw() {
    bg.draw()
    bg2.draw()
    car.draw()
    boot.draw()
    text.draw('20px','arial black', 'red', `Pontos: ${pts}`, 30, 100)
    text2.draw('20px','arial black', 'red', `Vidas: ${car.lifes}`, 200, 100)
}
function update() {
    bg.move(3, 800, 0)
    bg2.move(3, 0, -800)
    car.move()
    boot.move(4, 800, -100)
    car.collide(boot)
}
function main() {
    draw()
    update()
    collides()
    points()
}
setInterval(main, 10)
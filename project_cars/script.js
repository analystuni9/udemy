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
        this.lifes = 2
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
            this.x = Math.random() * (550 - 0)
        }else if(this.x < 0){
            this.x += Math.random() * (550 - 0)
        }
    }
    raspawn(){
        this.y = -30
        this.x = Math.random() * (550 - 0)
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
let play = true
let pts = 0
let t = 0
let f = 0
let bg = new Background(0, 0, 600, 600, 'image/background.png')
let bgTwo = new Background(0, -600, 600, 600, 'image/background.png')
let car = new Car(250, 500, 70, 70, 'image/car (21).png')
let boot = new Boot(0, 0, 70, 70, 'image/car (3).png')
let textPoints = new Text()
let textLifes = new Text()
let textGameOver = new Text()
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
function gameover(){
    if(car.lifes <= 0){
        play = false
    }
}
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
  if(play === true){
    bg.draw()
    bgTwo.draw()
    car.draw()
    boot.draw()
    textPoints.draw('20px','arial black', 'red', `Pontos: ${pts}`, 30, 100)
    textLifes.draw('20px','arial black', 'red', `Vidas: ${car.lifes}`, 200, 100)
  }
}
function update() {
    if(play === true){
    bg.move(2, 600, 0)
    bgTwo.move(2, 0, -600)
    car.move()
    boot.move(3, 550, -50)
    car.collide(boot)
    points()
    collides()
    gameover()
    }else{
        // ctx.clearRect(0, 0, 600, 600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 600, 600)
        ctx.fillStyle = 'white'
        ctx.font = '30px arial black'
        ctx.fillText('Game Over', 200, 300)

    }
}
function main() {
    draw()
    update()
}
setInterval(main, 10)
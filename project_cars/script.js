let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let play = true
let pts = 0
let t = 0
let f = 0
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
        let img = new Image()
        img.src = this.image
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
    stroke() {
        ctx.fillStyle = this.color
        ctx.strokeRect(this.x, this.y, this.width, this.height, this.image, this.color)
    }
    collide(objeto) {
        if (this.x < objeto.x + objeto.width && this.x + this.width > objeto.x && this.y < objeto.y + objeto.height && this.y + this.height > objeto.y) {
            // console.log('coliiu')
            return true
        } else {
            // console.log('não colidiu')
            return false
        }

    }
    raspawn() {
        this.y = -30
        this.x = Math.random() * (550 - 0)
    }

}
class Car extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.dirX = 0
        this.dirY = 0
        this.lifes = 5
    }
    move(limitOne, limitTwo) {
        this.x += this.dirX
        this.y += this.dirY
        if (this.x > limitOne) {
            this.x = 3
        } else if (this.x < limitTwo) {
            this.x = 530
        } else if (this.y > 600){
            this.y = 0
        } else if (this.y < -10){
            this.y = 600
        }
    }
    collide(objeto) {
        if (this.x < objeto.x + objeto.width && this.x + this.width > objeto.x && this.y < objeto.y + objeto.height && this.y + this.height > objeto.y) {
            // console.log('coliiu')
            return true
        } else {
            // console.log('não colidiu')
            return false
        }

    }

}
class Boot1 extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.j = 0
        this.b = 0

    }
    move(speed, limit, position) {
        this.y += speed

        if (this.y > limit) {
            this.b++
            if(this.b > 500){
                this.b = 0
                this.y = position
                this.x = Math.random() * (550 - 0)
            }
        } else if (this.x < 0 || this.x > 580) {
            this.x = Math.random() * (550 - 0)
        } else if (this.y < -10) {
            this.j++
            if (this.j > 100) {
                this.j = 0
                this.y = 600
                this.x = Math.random() * (500 - 0)
            }
        }
    }

    raspawn() {
        this.y = -30
        this.x = Math.random() * (550 - 0)
    }
}
class Background extends Boot1 {
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
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
    }
    draw(size, family, color, text, x, y) {
        ctx.font = `${size} ${family}`
        ctx.fillStyle = `${color}`
        ctx.fillText(`${text}`, x, y)
    }
}
class Plane1 extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.k = 0
    }
    move(speed, limit, position) {
        this.y += speed
        if (this.y > limit) {
        this.k++ 
            if(this.k > 900){
                this.k = 0
                this.y = position
                this.x = Math.random() * (500 - 1)
            }
            
        }
    }
}
class Plane2 extends Objeto {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.z = 0
    }
    move(speed, limit, position) {
        this.y += speed
        if (this.y < limit) {
            this.z++ 
            if(this.z > 900){
                this.z = 0
                this.y = position
                this.x = Math.random() * (500 - 1)
            }
            
        }
    }
}
class Boot2 extends Plane2 {
    constructor(x, y, width, height, image, color) {
        super(x, y, width, height, image, color)
        this.w = 0
    }
    move(speed, limit, position) {
        this.y += speed
        if (this.y < limit) {
            this.w++ 
            if(this.w > 2000){
                this.w = 0
                this.y = position
                this.x = Math.random() * (550 - 1)
            }
            
        }
    }
}
let bg = new Background(0, 0, 600, 600, 'image/background.png')
let bg2 = new Background(0, -600, 600, 600, 'image/background.png')
let car = new Car(530, 500, 100, 100, 'image/car (5).png')
let boot = new Boot1(30, 0, 80, 80, 'image/car (3).png')
let boot2 = new Plane2(200, 600, 100, 100, 'image/car (20).png')
let boot3 = new Plane1(300, 200, 120, 120, 'image/car (25).png')
let boot4 = new Boot2(300, 200, 80, 80, 'image/car (18).png')
let textPoints = new Text()
let textLifes = new Text()
let textGameOver = new Text()
let textPointsGameOver = new Text()
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
function gameover() {
    if (car.lifes <= 0) {
        play = false
    }
}
function points() {
    t++
    if (t > 15) {
        t = 0
        f++
        pts = f
    }
}
function collides() {
    if (car.collide(boot) === true) {
        boot.raspawn()
        car.lifes -= 1
    }else if(boot4.collide(boot) === true){
        boot.raspawn()
    }else if(car.collide(boot4) === true){
        boot4.raspawn()
        car.lifes += 1
}
}
function draw() {
    if (play === true) {
        bg.draw()
        bg2.draw()
        car.draw()
        // car.stroke()
        // carTwo.stroke()
        boot.draw()
        boot3.draw()
        boot2.draw()
        boot4.draw()
        // boot.stroke()
        textPoints.draw('25px', 'arial black', 'cadetblue', `Pontos: ${pts}`, 60, 100)
        textLifes.draw('25px', 'arial black', 'cadetblue', `Vidas: ${car.lifes}`, 300, 100)
    }
}
function update() {
    if (play === true) {
        bg.move(2, 600, 0)
        bg2.move(2, 0, -600)
        boot2.move(-1, 0, 600)
        boot3.move(3, 600, -50)
        boot4.move(-1, 0, 600)
        car.move(580, -50)
        boot.move(3, 700, -10)
        car.collide(boot)
        points()
        collides()
        gameover()
    } else {
        // ctx.clearRect(0, 0, 600, 600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 600, 600)
        // ctx.fillStyle = 'white'
        // ctx.font = '30px arial black'
        // ctx.fillText('Game Over', 200, 300)
        textGameOver.draw('30px', 'arial black', 'white', 'Game Over', 200, 300)
        textPointsGameOver.draw('30px', 'arial black', 'white', `Score: ${pts}`, 50, 50)

    }
}
function main() {
    draw()
    update()
}
setInterval(main, 10)
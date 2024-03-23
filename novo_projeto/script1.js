let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let bee = new Bee(300, 550, 30, 30, 'assets/bee1.png')
let spider = new Spider(0, 0, 30, 30, 'assets/spider1.png')
let spider2 = new Spider(300, 0, 30, 30, 'assets/spider1.png')
let spider3 = new Spider(600, 100, 30, 30, 'assets/spider1.png')
let bg = new Bg(0, 0, 600, 600, 'assets/bg.png')
let bg2 = new Bg(0, -600, 600, 600, 'assets/bg.png')
let flower = new Flower(550, 0, 30, 30, 'assets/flower1.png')
let flower2 = new Flower(250, 0, 30, 30, 'assets/flower1.png')
let flower3 = new Flower(0, 100, 30, 30, 'assets/flower1.png')
let textPoints = new Text()
let textLife = new Text()
let textGameOver = new Text()
let textGameOverPoints = new Text()
let textCredits = new Text()
let player = true
let f = 0
let t = 0
let total = 0
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        bee.dir = -2
    } else if (event.key === 'd') {
        bee.dir = 2
    } else if (event.key === 'w') {
        bee.dir2 = -2
    } else if (event.key === 's') {
        bee.dir2 = 2
    }
})

document.addEventListener('keyup', function (event) {
    if (event.key === 'a' || event.key === 'd') {
        bee.dir = 0
    } else if (event.key === 'w' || event.key === 's') {
        bee.dir2 = 0
    }
})

function collides() {
    if (bee.collide(spider) === true) {
        spider.respaw()
        bee.lifes -= 1
    } else if (bee.collide(spider2) === true) {
        spider2.respaw()
        bee.lifes -= 1
    } else if (bee.collide(spider3) === true) {
        spider3.respaw()
        bee.lifes -= 1
    } else if (bee.collide(flower) === true) {
        flower.respaw()
        bee.lifes -= 1
    } else if (bee.collide(flower2) === true) {
        flower2.respaw()
        bee.lifes -= 1
    } else if (bee.collide(flower3) === true) {
        flower3.respaw()
        bee.lifes -= 1
    } else {
        t++
        if (t > 10) {
            t = 0
            f++
            bee.points = f 
            console.log(`Pontos: ${bee.points}`)
        }
    }
}
function gameover() {
    if (bee.lifes <= 0) {
        player = false
        f = undefined
        t = undefined
    }
}
function draw() {
    if (player === true) {
        // ctx.clearRect(0, 0, 600, 600)
        bg.draw()
        bg2.draw()
        spider.draw()
        bee.draw()
        // bee.changeColor('red')
        spider2.draw()
        spider3.draw()
        flower.draw()
        flower2.draw()
        flower3.draw()
        textPoints.draw(`Points: ${bee.points}`, 300, 100, 'Violet', '30px', 'Verdana')
        textLife.draw(`Lifes: ${bee.lifes}`, 50, 100, 'Violete', '30px', 'Verdana')
    } else {
        ctx.fillRect(0, 0, 600, 600)
        textGameOver.draw(`Sua pontuação: ${bee.points}`, 50, 70, 'White', '25px', 'Verdana')
        textGameOver.draw('Game Over', 200, 300, 'White', '40px', 'Verdana')
        textCredits.draw('Créditos: Dev. Danilo', 250, 530, 'white', '25px', 'Verdana')
        ctx.fillStyle = 'black'

    }
}
function update() {
    if (player === true) {
        bg.move(3, 600, 0)
        bg2.move(3, 0, -600)
        bee.move()
        spider.move(1, 600, 0)
        spider2.move(2, 600, 0)
        spider3.move(2, 600, 0)
        flower.move(1, 600, 0)
        flower2.move(1, 600, 0)
        flower3.move(2, 600, 0)
        bee.animation('bee', 4)
        spider.animation('spider', 4)
        spider2.animation('spider', 4)
        spider3.animation('spider', 4)
        flower.animation('flower', 2)
        flower2.animation('flower', 2)
        flower3.animation('flower', 2)
        bee.collide(spider)
        bee.collide(spider2)
        bee.collide(spider3)
        bee.collide(flower)
        bee.collide(flower2)
        bee.collide(flower3)
        collides()
        gameover()
    }
}
function main() {
    draw()
    update()
}
setInterval(main, 10)
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

class Objeto {
    constructor(x, y, width, height, image) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = image
        this.f = 0
        this.t = 0
    }
    draw() {
        let img = new Image()
        img.src = this.image
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
    animation(name, limit){
        this.t++
        if(this.t > 10){
            this.t = 0
            this.f++
            this.image = ``
        }else if(this.f >= limit){
            this.f = 0
        }

    }
}
class Cars extends Objeto {
    constructor(x, y, width, height, image) {
        super(x, y, width, height, image)
    }
}
class Road extends Objeto {
    constructor(x, y, width, height, image){
        super(x, y, width, height, image)
    }
    move(speed, limit, position){
        this.y += speed
        if(this.y > limit){
            this.y = position
        }
    }
}
let car = new Cars(100, 350, 70, 70, 'imagens/car (1).png')
let car2 = new Cars(10, 50, 70, 70, 'imagens/car (2).png')
let car3 = new Cars(150, 50, 90, 90, 'imagens/car (3).png')
let car4 = new Cars(250, 50, 90, 90, 'imagens/car (4).png')
let car5 = new Cars(300, 50, 90, 90, 'imagens/car (5).png')
let car6 = new Cars(400, 50, 90, 90, 'imagens/car (6).png')
let road = new Road(120, 0, 500, 500, 'imagens/road (2).png')
let road2 = new Road(120, -500, 500, 500, 'imagens/road (2).png')
let road3 = new Road(-83, 0, 500, 500, 'imagens/road (2).png')
let road4 = new Road(-83, -500, 500, 500, 'imagens/road (2).png')
let road5 = new Road(-286, 0, 500, 500, 'imagens/road (2).png')
let road6 = new Road(-286, -500, 500, 500, 'imagens/road (2).png')
function draw() {
    ctx.clearRect(0, 0, 500, 500)
    road.draw()
    road2.draw()
    road3.draw()
    road4.draw()
    road5.draw()
    road6.draw()
    car.draw()
    car2.draw()
    car3.draw()
    car4.draw()
    car5.draw()
    car6.draw()
}
function update(){
    // car.animation()
    road.move(3, 500, 0)
    road2.move(3, 0, -500)
    road3.move(3, 500, 0)
    road4.move(3, 0, -500)
    road5.move(3, 500, 0)
    road6.move(3, 0, -500)
}
function main(){
    draw()
    update()
}
setInterval(main, 10)
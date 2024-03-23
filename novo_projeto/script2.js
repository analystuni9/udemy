class Objeto {
    constructor(x, y, largura, altura, cor) {
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.cor = cor
        this.f = 0
        this.t = 0
    }
    draw() {
        ctx.fillStyle = this.cor
        // ctx.fillRect(this.x, this.y, this.largura, this.altura, this.cor)
        let img = new Image()
        img.src = this.cor
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura)
    }
    animation(nome, limite) {
        this.t++
        if (this.t > 10) {
            this.t = 0
            this.f++
            this.cor = `assets/${nome}${this.f}.png`
        } else if (this.f >= limite) {
            this.f = 0
        }
    }

}
class Bee extends Objeto {
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
        this.dir = 0
        this.dir2 = 0
        this.lifes = 3
        this.points = 0
    }
    move() {
        this.x += this.dir
        this.y += this.dir2
        console.log(`eixo x: ${this.x}`)
        console.log(`eixo y: ${this.y}`)
        if(this.x > 570){
            this.x = Math.random() * (570 - 1)
        }else if(this.x < -1){
            this.x = Math.random() * (570 - 1)
        }else if(this.y > 570){
            this.y = Math.random() * (570 - 1)
        }
        else if(this.y < -1){
            this.y = Math.random() * (570 - 1)
        }
    }
    collide(objeto) {
        if (this.x < objeto.x + objeto.largura && this.x + this.largura > objeto.x && this.y < objeto.y + objeto.altura && this.y + this.altura > objeto.y) {
            // console.log('Colidiu')

            return true
        } else {
            // console.log('Não colidiu')
            return false
        }
    }

    changeColor(newColor) {
        this.cor = newColor;
    }
}
class Spider extends Objeto {
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
    }
    move(velocidade, limite, posicao) {
        this.y += velocidade
        this.x += 0.5
        if (this.y + this.altura > limite) {
            this.y = posicao
            this.x = Math.random() * (570 - 1)
        }
    }
    respaw() {
        this.y = 0
        this.x = Math.random() * (580 - 1)
    }
}
class Bg extends Objeto {
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
class Flower extends Spider {
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor)
    }
}
class Text {
    draw(texto, x, y, corDaFonte, tamanhoDaFonte, familiaDaFonte) {
        ctx.font = `${tamanhoDaFonte} ${familiaDaFonte}`
        ctx.fillStyle = corDaFonte
        ctx.fillText(texto, x, y)
    }

}
class GameOver extends Text {
    constructor(texto, x, y, corDaFonte, tamanhoDaFonte, familiaDaFonte) {
        super(texto, x, y, corDaFonte, tamanhoDaFonte, familiaDaFonte)
    }
}
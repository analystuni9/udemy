function alternar () {
    let menumobile = document.querySelector('.menu-mobile')
    if (menumobile.style.display == 'none') {
        menumobile.style.display = 'block'
        document.querySelector('.icon-mobile div:nth-child(1)').style.transformOrigin = '100% 0%';
        document.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(-45deg) scaleX(1.25)';
        document.querySelector('.icon-mobile div:nth-child(2)').style.display = 'none';
        document.querySelector('.icon-mobile div:nth-child(3)').style.transformOrigin = '60% 100%';
        document.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(45deg) scaleX(1.25)';
    } else {
        menumobile.style.display = 'none';
        document.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(0) scaleX(1)'
        document.querySelector('.icon-mobile div:nth-child(2)').style.display =  'block'
        document.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(0) scaleX(1)'
    }
}
function abrirlink() {
    window.open('y.html', '_blank')
}
function alternar3() {
    let conteudo = document.querySelector('.conteudo')
    if (conteudo.style.display == 'none') {
        conteudo.style.display = 'block';
    } else {
        conteudo.style.display = 'none';
    }
}
function alternar2(x) {
    let visualizar = document.querySelector('.visualizar')
    if (x == 1) {
        visualizar.src = 'img1.jpg'
    } else if (x == 2) {
        visualizar.src = 'img2.jpg'
    } else if (x == 3) {
        visualizar.src = 'img3.jpg'
    } else if (x == 4) {
        visualizar.src = 'img4.jpg'
    } else if (x == 5) {
        visualizar.src = 'img5.jpg'
    } else {
        visualizar.src = 'img6.jpg'
    }
}

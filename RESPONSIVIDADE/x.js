function alternar () {
    let m = document.getElementById('menu-mobile')
    let i = document.getElementById('icon-mobile')
    if (m.style.display == 'none') {
        m.style.display = 'block'
        i.querySelector('.icon-mobile div:nth-child(1)').style.transformOrigin = '100% 0%';
        i.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(-45deg) scaleX(1.25)';
        i.querySelector('.icon-mobile div:nth-child(2)').style.display = 'none';
        i.querySelector('.icon-mobile div:nth-child(3)').style.transformOrigin = '60% 100%';
        i.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(45deg) scaleX(1.25)';
    } else {
        m.style.display = 'none';
        i.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(0) scaleX(1)'
        i.querySelector('.icon-mobile div:nth-child(2)').style.display =  'block'
        i.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(0) scaleX(1)'
    }
}
function acessar() {
    window.open('y.html', '_blank')
}
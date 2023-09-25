function alternar () {
    let a = document.getElementById('icon-mobile')
    let b = document.getElementById('menu-mobile')
    if (b.style.marginRight == '-300px') {
        b.style.marginRight = '0';
        a.querySelector('.icon-mobile div:nth-child(1)').style.transformOrigin = '100% 47%';
        a.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(-45deg) scaleX(1.25)';
        a.querySelector('.icon-mobile div:nth-child(2)').style.opacity = '0';
        a.querySelector('.icon-mobile div:nth-child(3)').style.transformOrigin = ' 100% 0%';
        a.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(45deg) scaleX(1.25)';
    } else {
        b.style.marginRight = '-300px';
        a.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(0) scaleX(1)';
        a.querySelector('.icon-mobile div:nth-child(2)').style.opacity = '1';
        a.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(0) scaleX(1)';
    }
}
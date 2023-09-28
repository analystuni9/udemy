function alternar2(x) {
    let v = document.querySelector('.visualizar')
    if (x == 1) {
        v.src = 'img1.jpg'
    } else if (x == 2) {
        v.src = 'img2.jpg'
    } else if (x == 3) {
        v.src = 'img3.jpg'
    } else if (x == 4) {
        v.src = 'img4.jpg'
    } else if (x == 5) {
        v.src = 'img5.jpg'
    } else {
        v.src = 'img6.jpg'
    }
}
function alternar() {
    let x = document.getElementById('links');
    let y = document.getElementById('icon');

    if (x.style.marginLeft == '-300px') {
        x.style.marginLeft = '0';
        y.querySelector('.lines span:nth-child(1)').style.transformOrigin = '0% 0%';
        y.querySelector('.lines span:nth-child(1)').style.transform = 'rotate(45deg) scaleX(1.25)'; 
        y.querySelector('.lines span:nth-child(2)').style.opacity = '0';
        y.querySelector('.lines span:nth-child(3)').style.transformOrigin = '0% 100%';
        y.querySelector('.lines span:nth-child(3)').style.transform = 'rotate(-45deg) scaleX(1.25)';
    } else {
        x.style.marginLeft = '-300px';
        y.querySelector('.lines span:nth-child(1)').style.transform = 'rotate(0) scaleX(1)';
        y.querySelector('.lines span:nth-child(2)').style.opacity = '1';
        y.querySelector('.lines span:nth-child(3)').style.transform = 'rotate(0) scaleX(1)';
    }
}
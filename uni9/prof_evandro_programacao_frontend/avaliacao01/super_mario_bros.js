// AVALIAÇÃO I PROF EVANDRO
// PROGRAMAÇÃO FRONT-END
let btnmobile = document.querySelector('.btn-mobile')
let navlinks = document.querySelector('.nav-links')
let animation = () => {
    if (btnmobile.classList.contains('animationx')) {
        btnmobile.classList.remove('animationx');
        navlinks.classList.remove('visualizar');
    } else {
        btnmobile.classList.add('animationx');
        navlinks.classList.add('visualizar');
    }
}
btnmobile.addEventListener('click', animation); 
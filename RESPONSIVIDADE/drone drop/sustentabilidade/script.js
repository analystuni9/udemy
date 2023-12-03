let iconmenu = document.querySelector('.icon-mobile')
let menumobile = document.querySelector('.menu-mobile')
let animation = () => {
    if (iconmenu.classList.contains('animation_x')) {
        iconmenu.classList.remove('animation_x')
        menumobile.classList.remove('exibir')

    } else {
        iconmenu.classList.add('animation_x')
        menumobile.classList.add('exibir')
    }
}
iconmenu.addEventListener('click', animation)
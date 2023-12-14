let iconmenu = document.querySelector('.icon-mobile');
let menumobile = document.querySelector('.menu-mobile');
let btn = document.querySelector('.btn');

let animation = () => {
    if (iconmenu.classList.contains('animation_x')) {
        iconmenu.classList.remove('animation_x');
        menumobile.classList.remove('exibir');
    } else {
        iconmenu.classList.add('animation_x');
        menumobile.classList.add('exibir');
    }
}

iconmenu.addEventListener('click', animation);

function verificarCredenciais() {
 
    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (usuario === 'admin@exemple.com' && senha === 'uninove123') {
        alert('Acesso Liberado');
    } else {
        alert('Credenciais Inválidas. Tente novamente.');
    }
}

btn.addEventListener('click', verificarCredenciais);


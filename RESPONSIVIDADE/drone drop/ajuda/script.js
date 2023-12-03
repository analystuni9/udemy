// Seleciona o elemento HTML com a classe "icon-mobile" e armazena-o na variável iconmenu
let iconmobile = document.querySelector(".icon-mobile")

// Seleciona o elemento HTML com a classe "menu-mobile" e armazena-o na variável menumobile
let menumobile = document.querySelector(".menu-mobile")

// Seleciona o elemento HTML com a classe "visualizar" e armazena-o na variável visualizar
let visualizar = document.querySelector(".visualizar")

// Inicializa variáveis i e k com valor zero
let i = 0
let k = 0

// Define uma função chamada "animation" que é acionada quando o elemento com a classe "icon-mobile" é clicado
let animation = () => {
    // Verifica se o elemento iconmenu possui a classe "animation_x"
    if (iconmobile.classList.contains("animation_x")) {
        // Remove a classe "animation_x" do elemento iconmenu
        iconmobile.classList.remove("animation_x")
        // Remove a classe "exibir" do elemento menumobile
        menumobile.classList.remove("exibir")
    } else {
        // Adiciona a classe "animation_x" ao elemento iconmenu
        iconmobile.classList.add("animation_x")
        // Adiciona a classe "exibir" ao elemento menumobile
        menumobile.classList.add("exibir")
    }
}



// Adiciona um ouvinte de evento de clique ao elemento com a classe "icon-mobile" para chamar a função "animation"
iconmobile.addEventListener("click", animation)



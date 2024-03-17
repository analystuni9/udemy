// Seleciona o elemento HTML com a classe "icon-menu" e armazena-o na variável iconmenu
let iconmenu = document.querySelector('.icon-mobile')

// Seleciona o elemento HTML com a classe "menu-mobile" e armazena-o na variável menumobile
let menumobile = document.querySelector('.menu-mobile')

// Seleciona todos os elementos input do tipo "radio" e armazena-os na variável btnradio como uma NodeList
let btnradio = document.querySelectorAll("input[type='radio']")

// Seleciona o elemento HTML com a classe "exibir" e armazena-o na variável exibir
let exibir = document.querySelector(".exibir")

// Define uma função chamada "animation" que é acionada quando o elemento com a classe "icon-menu" é clicado
let animation = () => {
    // Verifica se o elemento iconmenu possui a classe "animation_x"
    if (iconmenu.classList.contains('animation_x')) {
        // Remove a classe "animation_x" do elemento iconmenu
        iconmenu.classList.remove('animation_x')
        // Remove a classe "exibir" do elemento menumobile
        menumobile.classList.remove('visualizar')
    } else {
        // Adiciona a classe "animation_x" ao elemento iconmenu
        iconmenu.classList.add('animation_x')
        // Adiciona a classe "exibir" ao elemento menumobile
        menumobile.classList.add('visualizar')
    }
}

// Adiciona um ouvinte de evento de clique ao elemento com a classe "icon-menu" para chamar a função "animation"
iconmenu.addEventListener('click', animation)

// Inicializa a variável i com o valor zero
let i = 0; 

// Define uma função chamada "carrosselautomatico" para avançar automaticamente os slides do carrossel
let carrosselautomatico = () => {
    // Atualiza o valor de i para o próximo índice (circularmente)
    i = (++i) % btnradio.length; 
    // Define o botão de opção correspondente como "checked" para avançar para o próximo slide
    btnradio[i].checked = true
    // Define a imagem no elemento exibir com o valor do botão de opção selecionado
    exibir.src = btnradio[i].value;
}

// Inicializa a variável k com o valor zero
let k = 0;

// Define uma função chamada "carrosselmanual" para controlar a exibição de slides quando os botões de opção são clicados
let carrosselmanual = () => {
    // Itera sobre todos os botões de opção
    for (k = 0; k < btnradio.length; k++) {
        // Verifica qual botão de opção está marcado como "checked"
        if (btnradio[k].checked) {
            // Obtém o valor (URL da imagem) do botão de opção selecionado
            let selecione = btnradio[k].value
            // Define a imagem no elemento exibir com o valor obtido
            exibir.src = selecione
        }
    }
}

// Adiciona um ouvinte de evento de clique a cada botão de opção para chamar a função "carrosselmanual"
for (k = 0; k < btnradio.length; k++) {
    btnradio[k].addEventListener('click', carrosselmanual)
}

// Configura um intervalo para chamar a função "carrosselautomatico" a cada 2000 milissegundos (2 segundos)
setInterval(carrosselautomatico, 2000)
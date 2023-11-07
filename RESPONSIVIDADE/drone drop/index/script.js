// Seleciona o elemento HTML com a classe "icon-mobile" e armazena-o na variável iconmenu
let iconmenu = document.querySelector(".icon-mobile")

// Seleciona o elemento HTML com a classe "menu-mobile" e armazena-o na variável menumobile
let menumobile = document.querySelector(".menu-mobile")

// Seleciona todos os elementos input do tipo "radio" e armazena-os na variável btnradio como uma NodeList
let btnradio = document.querySelectorAll("input[type='radio']")

// Seleciona o elemento HTML com a classe "visualizar" e armazena-o na variável visualizar
let visualizar = document.querySelector(".visualizar")

// Seleciona o elemento HTML com a classe "texto" e armazena-o na variável texto
let texto = document.querySelector(".texto")

// Seleciona o elemento HTML com a classe "btn-lermais" e armazena-o na variável btnlermais
let btnlermais = document.querySelector(".btn-lermais")

// Inicializa variáveis i e k com valor zero
let i = 0
let k = 0

// Define uma função chamada "animation" que é acionada quando o elemento com a classe "icon-mobile" é clicado
let animation = () => {
    // Verifica se o elemento iconmenu possui a classe "animation_x"
    if (iconmenu.classList.contains("animation_x")) { 
        // Remove a classe "animation_x" do elemento iconmenu
        iconmenu.classList.remove("animation_x")
        // Remove a classe "exibir" do elemento menumobile
        menumobile.classList.remove("exibir")
    } else {
        // Adiciona a classe "animation_x" ao elemento iconmenu
        iconmenu.classList.add("animation_x")
        // Adiciona a classe "exibir" ao elemento menumobile
        menumobile.classList.add("exibir")
    }
}

// Define uma função chamada "carrosselautomatico" para avançar automaticamente os slides do carrossel
let carrosselautomatico = () => {
    // Atualiza o valor de i para o próximo índice (circularmente)
    i = (++i) % btnradio.length
    // Define o botão de opção correspondente como "checked" para avançar para o próximo slide
    btnradio[i].checked = true
    // Define a imagem no elemento visualizar com o valor do botão de opção selecionado
    visualizar.src = btnradio[i].value
}

// Define uma função chamada "carrosselmanual" para controlar a exibição de slides quando os botões de opção são clicados
let carrosselmanual = () => {
    // Itera sobre todos os botões de opção
    for (k = 0; k < btnradio.length; k++) {
        // Verifica qual botão de opção está marcado como "checked"
        if (btnradio[k].checked) {
            // Obtém o valor (URL da imagem) do botão de opção selecionado
            let selecione = btnradio[k].value
            // Define a imagem no elemento visualizar com o valor obtido
            visualizar.src = selecione
        }
    }
}

// Adiciona um ouvinte de evento de clique a cada botão de opção para chamar a função "carrosselmanual"
for (k = 0; k < btnradio.length; k++) {
    btnradio[k].addEventListener("click", carrosselmanual)
}

// Adiciona um ouvinte de evento de clique ao elemento com a classe "icon-mobile" para chamar a função "animation"
iconmenu.addEventListener("click", animation)

// Configura um intervalo para chamar a função "carrosselautomatico" a cada 2000 milissegundos (2 segundos)
setInterval(carrosselautomatico, 2000)

// Define uma função chamada "adicionartexto" para expandir/recolher o conteúdo de texto
let adicionartexto = () => {
    // Verifica se o elemento texto possui a classe "adicionar"
    if (texto.classList.contains("adicionar")) {
        // Remove a classe "adicionar" do elemento texto
        texto.classList.remove("adicionar")
        // Atualiza o texto do botão
        btnlermais.innerHTML = "Ler mais"
    } else {
        // Adiciona a classe "adicionar" ao elemento texto
        texto.classList.add("adicionar")
        // Atualiza o texto do botão
        btnlermais.innerHTML = "Ler menos"
    }
}

// Adiciona um ouvinte de evento de clique ao elemento com a classe "btn-lermais" para chamar a função "adicionartexto"
btnlermais.addEventListener("click", adicionartexto)

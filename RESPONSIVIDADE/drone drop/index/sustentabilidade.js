let iconmenu = document.querySelector('.icon-mobile')
let menumobile = document.querySelector('.menu-mobile')
let visualizar = document.querySelector('.visualizar')
let btnradio = document.querySelectorAll('input[type="radio"]')
// Seleciona o elemento HTML com a classe "texto" e armazena-o na variável texto
let texto = document.querySelector(".texto")
let texto_2 = document.querySelector(".texto_2")
// Seleciona o elemento HTML com a classe "btn-lermais" e armazena-o na variável btnlermais
let btnlermais = document.querySelector(".btn-lermais")
let btnlermais_2 = document.querySelector(".btn-lermais_2")
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
let i = 0
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

let adicionartexto_2 = () => {
    if (texto_2.classList.contains("adicionar_2")) {
        texto_2.classList.remove("adicionar_2")
        btnlermais_2.innerHTML = "Ler mais"
    } else {
        texto_2.classList.add("adicionar_2")
        btnlermais_2.innerHTML = "Ler menos"
    }
}
btnlermais_2.addEventListener("click", adicionartexto_2)

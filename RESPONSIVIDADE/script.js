let menumobile = document.querySelector('.menu-mobile')
function alternar () {
    if (menumobile.style.display == 'none') {
        menumobile.style.display = 'block'
        document.querySelector('.icon-mobile div:nth-child(1)').style.transformOrigin = '100% 0%';
        document.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(-45deg) scaleX(1.25)';
        document.querySelector('.icon-mobile div:nth-child(2)').style.display = 'none';
        document.querySelector('.icon-mobile div:nth-child(3)').style.transformOrigin = '60% 100%';
        document.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(45deg) scaleX(1.25)';
    } else {
        menumobile.style.display = 'none';
        document.querySelector('.icon-mobile div:nth-child(1)').style.transform = 'rotate(0) scaleX(1)'
        document.querySelector('.icon-mobile div:nth-child(2)').style.display =  'block'
        document.querySelector('.icon-mobile div:nth-child(3)').style.transform = 'rotate(0) scaleX(1)'
    }
}
function abrirlink() {
    window.open('y.html', '_blank')
}
let conteudo = document.querySelector('.conteudo')
function alternar3() {
    if (conteudo.style.display == 'none') {
        conteudo.style.display = 'block';
    } else {
        conteudo.style.display = 'none';
    }
}
function alternar2(x) {
    let visualizar = document.querySelector('.visualizar')
    if (x == 1) {
        visualizar.src = 'img1.jpg'
    } else if (x == 2) {
        visualizar.src = 'img2.jpg'
    } else if (x == 3) {
        visualizar.src = 'img3.jpg'
    } else if (x == 4) {
        visualizar.src = 'img4.jpg'
    } else if (x == 5) {
        visualizar.src = 'img5.jpg'
    } else {
        visualizar.src = 'img6.jpg'
    }
}
// Primeiro, adicione estas variáveis globais no início do seu script.js para controlar o estado atual da imagem.
let imagemAtual = 1;
const totalImagens = 6; // Altere para o número total de imagens que você tem.

// Função para avançar para a próxima imagem.
function irParaProximaImagem() {
    imagemAtual += 1;
    if (imagemAtual > totalImagens) {
        imagemAtual = 1; // Volta para a primeira imagem se estiver na última.
    }
    exibirImagemAtual();
}

// Função para voltar para a imagem anterior.
function voltarParaImagemAnterior() {
    imagemAtual -= 1;
    if (imagemAtual < 1) {
        imagemAtual = totalImagens; // Vai para a última imagem se estiver na primeira.
    }
    exibirImagemAtual();
}

// Função para exibir a imagem atual com base na variável imagemAtual.
function exibirImagemAtual() {
    const visualizarImagem = document.querySelector('.visualizar');
    visualizarImagem.src = `img${imagemAtual}.jpg`; // Suponha que suas imagens tenham nomes como "img1.jpg", "img2.jpg", etc.
}

// Exibir a primeira imagem ao carregar a página.
exibirImagemAtual();
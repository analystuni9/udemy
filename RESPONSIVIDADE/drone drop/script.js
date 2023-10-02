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
    window.open('login/login.html', '_blank')
}
let conteudo = document.querySelector('.conteudo')
let botao = document.querySelector('.btn-personalizado2')
function alternar3() {
    if (conteudo.style.display == 'none') {
        conteudo.style.display = 'block';
        botao.textContent = 'MOSTRAR MENOS'
    } else {
        conteudo.style.display = 'none';
        botao.textContent = 'SAIBA MAIS'
    }
}
function alternar2(x) {
    let visualizar = document.querySelector('.visualizar')
    if (x == 1) {
        visualizar.src = 'img/1.png'
    } else if (x == 2) {
        visualizar.src = 'img/2.png'
    } else if (x == 3) {
        visualizar.src = 'img/3.png'
    } else if (x == 4) {
        visualizar.src = 'img/4.png'
    } else if (x == 5) {
        visualizar.src = 'img/5.png'
    } else if (x == 6) {
        visualizar.src = 'img/6.png' 
    } else if (x == 7) {
        visualizar.src = 'img/7.png' 
    } else if (x == 8) {
        visualizar.src = 'img/8.png' 
    } else {
        visualizar.src = 'img/9.png'
    }
    }
    // Array de nomes de imagens
    const imagens = [
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
        "img/7.png",
        "img/8.png",
        "img/9.png",
    // Adicione mais nomes de imagens conforme necessário
  ];
  
  let index = 0; // Índice da imagem atual
  
  // Função para exibir a próxima imagem na caixa3
  function exibirProximaImagem() {
    const visualizar = document.querySelector(".visualizar");
    visualizar.src = imagens[index];
    index = (index + 1) % imagens.length; // Avança para a próxima imagem circularmente
  }
  
  // Define um intervalo de tempo para exibir as imagens automaticamente (a cada 5 segundos, por exemplo)
  setInterval(exibirProximaImagem, 5000); // 5000 milissegundos = 5 segundos
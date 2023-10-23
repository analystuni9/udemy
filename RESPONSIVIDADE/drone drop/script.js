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
let conteudo = document.querySelector('.conteudo-1')
let botao = document.querySelector('.btn-personalizado-2')
function alternar3() {
    if (conteudo.style.display == 'none') {
        conteudo.style.display = 'block';
        botao.textContent = 'Mostrar menos'
    } else {
        conteudo.style.display = 'none';
        botao.textContent = 'Saiba mais'
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
        "img/9.png"
    // Adicione mais nomes de imagens conforme necessário
  ];
  
  let index = 0; // Índice da imagem atual
  
  // Função para exibir a próxima imagem na caixa3
  function carroselautomatico() {
    const visualizar = document.querySelector(".exibir");
    visualizar.src = imagens[index];
    index = (index + 1) % imagens.length; // Avança para a próxima imagem circularmente
  }
  
  // Define um intervalo de tempo para exibir as imagens automaticamente (a cada 5 segundos, por exemplo)
  setInterval(carroselautomatico, 2000); // 5000 milissegundos = 5 segundos

  function adicionartexto() {
    let adicionar = document.querySelector('.adicionar')
    let lermais1 = document.querySelector('.btn-lermais')
    if (adicionar.style.display == 'none') {
        adicionar.style.display = 'block'
        lermais1.textContent = 'Ler menos'
        adicionar.innerHTML = '<p>Além disso, a Drone Drop está constantemente desenvolvendo parcerias estratégicas com empresas de diversos setores. Seja para entregas de alimentos frescos, medicamentos urgentes ou produtos de comércio eletrônico, a Drone Drop oferece soluções de entrega personalizadas para atender às necessidades específicas de seus clientes.<p/><p>Outro aspecto notável da empresa é seu compromisso com a inovação contínua. A equipe de engenheiros e cientistas da Drone Drop está constantemente trabalhando no aprimoramento de suas tecnologias, tornando seus drones mais eficientes, autônomos e capazes de operar em diversas condições climáticas.<p/><p>À medida que a Drone Drop continua a expandir sua presença global, seu impacto na economia e no meio ambiente se torna cada vez mais evidente. A empresa não apenas está transformando a maneira como as entregas são feitas, mas também está abrindo novas possibilidades de negócios em setores que antes eram limitados pela logística tradicional.<p/><p>Em resumo, a Drone Drop é uma empresa que está na vanguarda da inovação tecnológica e da sustentabilidade. Com seu compromisso com a segurança, parcerias estratégicas e busca incessante pela excelência, a empresa está moldando o futuro das entregas e demonstrando que é possível alcançar a eficiência empresarial sem comprometer o meio ambiente. À medida que a Drone Drop continua sua jornada, podemos esperar que mais marcos revolucionários sejam alcançados na indústria de entrega por drones.</p>'
  } else {
    adicionar.style.display = 'none'
    lermais1.textContent = 'Ler mais'
  }
        
    }

    let botoes = document.querySelectorAll("input[type='radio']")
    let exibir = document.querySelector(".exibir")
function carroselmanual () {
    botoes.forEach(function(radio){
        if (radio.checked) {
            let selecioneimagem = radio.value
            exibir.src = selecioneimagem
        }
    })
}
botoes.forEach(function(radio){
    radio.addEventListener("change", carroselmanual)
})
function visualizarImagem(id) {
    let imagem;
    if (id == 1) {
        imagem = '<img src="imagens/Dragonball.jpg" alt="Dragonball Super">'
    }
    else if (id == 2) {
        imagem = '<img src="imagens/Dragonball2.jpg" alt="Dragonball Z">'
    }
    else if (id == 3) {
        imagem = '<img src="imagens/Dragonball3.jpg" alt="Dragonball Super">'
    }
    else if (id == 4) {
        imagem = '<img src="imagens/Naruto.jpg" alt="Naruto Shippuden">'
    }
    else if (id == 5) {
        imagem = ' <img src="imagens/Naruto2.jpg" alt="Dragonball Z">'
    }
    else if (id == 6) {
        imagem = '<img src="imagens/Naruto3.jpg" alt="Naruto Shippuden">'
    }
    else if (id == 7) {
        imagem = '<img src="imagens/Naruto4.jpg" alt="Naruto Shippuden">'
    }
    else if (id == 8) {
        imagem = '<img src="imagens/Naruto5.jpg" alt="Naruto Shippuden">'
    }
    else if (id == 9) {
        imagem = '<img src="imagens/Naruto6.jpg" alt="Naruto Shippuden">'
    }
    else {
        imagem = '<img src="imagens/Luffy.jpg" alt="One Piece">'
    }
    document.getElementById('view').innerHTML = imagem;
 }
function mudaTexto(id) {
    let texto
    if (id == 1) {
        texto = 'Naruto passa a treinar com o poderoso Jiraya, que vai ajudá-lo a controlar melhor seu chakra e sua relação com a Nove Caudas, ainda que isso exija medidas extremas. Kabuto e um jounin da Vila Oculta da Areia planejam uma invasão da Vila da Folha pelas da Areia e do Som. Os finalistas do exame chunin seguem treinando.'
        document.getElementById('view2').innerHTML = texto
    } else if (id == 2) {
        texto = 'As semelhanças entre o passado de Gaara e Naruto são reveladas. Contudo, o caminho que Gaara seguiu é bem mais sombrio, com o jovem ninja acreditando que seu único propósito é matar aqueles que atrapalhem seus objetivos. As batalhas do exame chunin seguem, com o aguardado confronto entre Sasuke e Gaara. A batalha, porém, é interrompida por Orochimaru e Kabuto, que dão início à invasão da Vila Oculta da Folha.'
        document.getElementById('view3').innerHTML = texto
        texto = 'Orochimaru captura o Terceiro Hokage, e uma luta incomparável tem início. Sasuke procura por Gaara, enquanto Sakura, Naruto e Shikamaru tentam alcançá-lo e pará-lo. Lutas se espalham por toda a aldeia, que parece estar sendo destruída. Konohamaru evacua a escola. Agora é Naruto e Gaara que estão frente à frente, e ambos usam os poderes das bestas de caudas que carregam.'
        document.getElementById('view4').innerHTML = texto
    }
}
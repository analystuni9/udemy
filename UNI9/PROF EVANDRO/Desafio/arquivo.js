function mostrarImagem(id) {
    let imagem;
    if (id == 1) {
        imagem = '<img src="imagens/naruto_3.jpg" alt="Naruto3">'
    }
    else if (id == 2) {
        imagem = '<img src="imagens/goku_2.jpg" alt="Goku2">'
    }
    else if (id == 3) {
        imagem = '<img src="imagens/luffy.jpg" alt="Luffy">'
    }
    else if (id == 4) {
        imagem = '<img src="imagens/goku.jpg" alt="Goku">'
    }
    else if (id == 5) {
        imagem = ' <img src="imagens/goku_3.jpg" alt="Goku3">'
    }
    else if (id == 6) {
        imagem = '<img src="imagens/naruto.jpg" alt="Naruto">'
    }
    else if (id == 7) {
        imagem = '<img src="imagens/itachi.jpg" alt="Naruto">'
    }
    else {
        imagem = '  <img src="imagens/itachi_2.jpg" alt="Itachi2">'
    }
    document.getElementById('view').innerHTML = imagem;
 }
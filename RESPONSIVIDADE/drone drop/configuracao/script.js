function aplicarConfiguracoes() {
    // Obter os valores do input
    let corDeFundo = document.getElementById('backgroundColor').value;
    let corDaFonte = document.getElementById('fontColor').value;
    let tipoDeFonte = document.getElementById('fontFamily').value;
    let main = document.querySelector('main');
    let language = document.getElementById('language').value;

    // Aplicar as configurações ao main e ao h1
    main.style.backgroundColor = corDeFundo;
    document.querySelector('h1').style.color = corDaFonte;
    document.body.style.fontFamily = tipoDeFonte;

    // Adicionar lógica para alterar a linguagem
    if (language === 'en') {
        // Defina as configurações específicas para o idioma inglês
        window.alert('Configurações aplicadas para inglês');
    } else if (language === 'pt') {
        // Defina as configurações específicas para o idioma português
        window.alert('Configurações aplicadas para português');
    } else {
        // Lógica para outros idiomas, se necessário
    }
}
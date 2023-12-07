function aplicarConfiguracoes() {
    // Obter os valores do input
    let corDeFundo = document.getElementById('backgroundColor').value;
    let corDaFonte = document.getElementById('fontColor').value;
    let tipoDeFonte = document.getElementById('fontFamily').value;
    let main = document.querySelector('main');

    // Aplicar as configurações ao main e ao h1
    main.style.backgroundColor = corDeFundo;
    document.querySelector('h1').style.color = corDaFonte;
    main.style.fontFamily = tipoDeFonte;
}

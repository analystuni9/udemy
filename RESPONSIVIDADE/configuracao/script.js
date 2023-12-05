function aplicarConfiguracoes() {
    // Obter os valores do input
    var corDeFundo = document.getElementById('backgroundColor').value;
    var corDaFonte = document.getElementById('fontColor').value;
    var tipoDeFonte = document.getElementById('fontFamily').value;

    // Aplicar as configurações ao body e ao h1
    document.body.style.backgroundColor = corDeFundo;
    document.querySelector('h1').style.color = corDaFonte;
    document.body.style.fontFamily = tipoDeFonte;
}

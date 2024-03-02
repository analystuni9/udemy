var nome = window.prompt('Qual é o seu nome?');
var tagP = document.querySelector("p");
var operacoes = [
    `Olá, <b>${nome}</b> seu nome tem ${nome.length} letras`,
    `Seu nome em maiúsculas é <b>${nome.toUpperCase()}</b>`,
    `Seu nome em minúscula é <b>${nome.toLowerCase()}</b>`
];

for (var i = 0; i < operacoes.length; i++) {
    tagP.innerHTML += `<p>${operacoes[i]}</p>`;
}

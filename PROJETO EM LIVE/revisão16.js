// Exercício 1: Variáveis Simples
let nome = "João"
let idade = 25
let cidade = "São Paulo"

// Exibindo as variáveis no console
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

// Exercício 2: Operações Matemáticas
let numero1 = 10
let numero2 = 5
let soma = numero1 + numero2;
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

// Exercício 3: Conversão de Tipos
let numeroString = "42";
let numeroInteiro = parseInt(numeroString, 10);
let resultado = numeroInteiro + 10;

// Exercício 4: Concatenação de Strings
let primeiroNome = "Maria";
let sobrenome = "Silva";
let mensagem = "Olá, " + primeiroNome + " " + sobrenome + "!";

// Exercício 5: Arrays
let frutas = ["maçã", "banana", "laranja"];
frutas[1] = "uva"
console.log(frutas)

// Exercício 6: Objetos
let pessoa = {
    nome:"Ana",
    idade: 30,
    cidade: "Rio de Janeiro"
};
pessoa.idade = 31
// Modifica a propriedade "idade"

// Exercício 7: Condicionais
let temperatura = 28;
if (temperatura > 30) {
    console.log("Está quente!");
} else if (temperatura < 20) {
    console.log("Está frio!");
} else {
    console.log("A temperatura está moderada.");
}
// Exercício 8: Loops
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// Exercício 9: funções
function somarNumeros (a, b) {
    return a + b;
}
let resultadoSoma = somarNumeros(7, 3);

// Exercício 10: Manipulação de Strings
function contarCaracteres(texto) {
    return texto.length;
}
let tamanhoTexto = contarCaracteres("Esta é uma frase de exemplo.");

// Exercício Bônus: Palíndromo
function isPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversed = palavra.split("").reverse().join("");
    return palavra === reversed;
}
let palavraTeste = "randar";
let ehPalindromo = isPalindromo(palavraTeste);

// Exibindo os resultados
console.log("Exercicio 1: Nome, Idade e Cidade")
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

console.log("Exercício 2: Operações Matemáticas");
console.log("Soma: " + soma);
console.log("Subtração " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão " + divisao)

console.log("Exercicio 3: Conversão de Tipos");
console.log("Resultado: " + resultado);

console.log("Exercício 4: Concatenação de Strings");
console.log(mensagem);

console.log("Exercício 5: Arrays");
console.log(frutas);

console.log("Exercício 6: Objetos");
console.log(pessoa);

console.log("Exercício 7: Condicionais");
console.log("Temperatura: " + temperatura);
console.log("Condição: ");
if (temperatura > 30) {
    console.log("Está frio!");
} else {
    console.log("A temperatura está moderada");
}
console.log("Exercício 8: Loops");
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("Exercicio 9: Funções");
console.log("Resultado da soma: " + resultadoSoma);

console.log("Exercício 10: Manipulação de Strings");
console.log("Tamanho do texto: " + tamanhoTexto);

console.log("Exercício Bônus: Palíndromo");
console.log("A palavra " + palavraTeste + "é um palíndromo? " + ehPalindromo);
// Variaveis são espaços na memoria nomes onde eu consigo armazenar valores

// <!-- var, let, const -->
// <!-- var -> ES5 - cross-browser -->
// <!-- let e const -> ES2015 -->

// Babel vai transformar uma codigo mais novo em mais antigo

// var eu posso declarar a mesma variavel varias vezes 
// Ex:
var test = 10;
var test = 11;
test = 12
console.log(test);

// let eu só posso declarar a variavel uma unica vez 
// porem eu consigo reatribuir outros valores
// Ex:
let test2 = 13;
test2 = 14;
console.log(test2);

// const só consigo declarar uma variavel uma unica vez e um unico valor
// Ex:
const test3 = 15
// test3 = 16
console.log(test3)


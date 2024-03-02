// EVERY(),SOME(),FOREACH(),FILTER() E MAP()
// Metodo some vou passar um parementro para minha função de callback e ela vai fazer uma verificação em cada um dos meus elementos se todos me retornar true ele vai me retornar true se pelo menos 1 for considerado false a função vai me retornar false
let arr = [1, 5, 10, "texto", true]
let sonumeros = arr.every(function(elemento){
    // console.log(elemento)
    return typeof elemento === "number"
})
console.log(sonumeros)
// Metodo some vou passar um parementro para minha função de callback e ela vai fazer uma verificação em cada um dos meus elementos se pelo menos um me retornar true a função vai me retornar true
// Eu vou usar every e some quando vou fazer uma verificação dos elementos de uma array
let arr2 = [1, 5, 10, "texto", true]
let sonumeros2 = arr2.some(function(elemento){
    // console.log(elemento)
    return typeof elemento === "number"
})
console.log(sonumeros2)
// O filter eu vou usar quando eu quero filtrar os elementos de uma array
// A função de callback vai me retornar uma nova array com os valores filtrados
// O filter tambem vai conter uma function e essa function contem 3 parametros elemento, indice e a propria array
// Observe o exemplo 3 a variavel sonumeros3 vai receber arr3 que vai filtrar somente os numeros ela não vai alterar a arr3 original esse valor deve ser armazenado em outra variavel
let arr3 = [1, 5, 10, "texto", true]
let sonumeros3 = arr3.filter(function(elemento, indice, array){
    // console.log(elemento)
    // console.log(indice)
    // console.log(array)
    return typeof elemento === "number"
})
console.log(sonumeros3)
// Quando eu quero iterar sobre elementos da minha array posso ultilzar loop while loop for loop forEach que é uma forma mais moderna e o valor de retorno sempre vai ser undefined
let arr4 = [1, 5, 10, "texto", true]
arr4.forEach(function(elemento, indice, array){
    // console.log(indice, elemento, array)
})
// O metodo map vai sim retornar uma nova array com os dados transformados
// Ela vai transformar minha array com base no valor de retorno da minha função de callback

let sonumeros4 = sonumeros3.map(function(elemento, indice, array){
    return elemento * elemento
    console.log(indice, elemento, array)
})
console.log(sonumeros3)
console.log(sonumeros4)
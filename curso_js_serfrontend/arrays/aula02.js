// INDEXOF(),LASTINDEXOF(),INCLUDES(),FIND(),FINDINDEX()
// O indexOf vai retornar o primeiro valor encontrado e vai mostrar o indice
let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))
// O indexOf vai retornar o ultimo valor encontrado e vai mostrar o indice
// Quando coloco um valor que não existe ele vai me mostrar o indice -1
let arr2 = [4, 5, 10, 20, 35, 4, 5]
console.log(arr2.lastIndexOf(5))
// Vai me retornar um boolean se valor for encontrado true se não encontrar false
let arr3 = [4, 5, 10, 20, 35, 4, 5]
console.log(arr3.includes(5))
// find vai sempre encontrar o primeiro elemento que o valor de retorno dessa função de callback for true e se não encontrar nada vai retornar undefined
console.log(arr3.find(function(elemento){ return elemento > 10}))
// findIndex vai sempre encontrar o primeiro elemento que o valor de retorno dessa função de callback for true vai me retornar o indice deste elemento se ele nao encontrar nada vai me retornar -1
console.log(arr3.findIndex(function(elemento){ return elemento > 10}))
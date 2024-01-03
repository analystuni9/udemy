// CONCAT(),JOIN(),TOSTRING()
let arr = [1, 2, 3]
let arr2 = [5, 6, 7]
// concat serve para juntar arrays
let arr3 = arr.concat(arr2, 8, 9, 10, ['texto', 'texto2', 'texto3'])
// Vai me retornar um array de uma string
console.log(arr.toString())
// Tabem vai me retornar um array de uma string porem eu posso passar um paramentro com separador
console.log(arr2.join("-"))
console.log(arr3) 
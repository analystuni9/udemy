// PUSH(),POP(),SHIFT(),UNSHIFT(),SLICE(),SPLICE()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Metodo push adicinei valores no final da minha array
arr.push(10, 11, 12, true, "texto")
console.log(arr)
// Metodo pop retornou o ultimo item para minha variavel e removeu o ultimo item da minha array original
let ultimoItem = arr.pop()
console.log(ultimoItem)
console.log(arr)
// Metodo shift retornou o primeiro item para minha variavel e removeu o primeiro item da minha array original
let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)
// unshift vai adicionar valores no inicio da minha array
let teste = arr.unshift(10, 11, 12)
console.log(teste)
console.log(arr)
// slice é quando eu quero recortar um pedaço da minha array
// No exemplo inicia no indice 2 ate o indice 6
let arr2 = arr.slice(2,6)
console.log(arr2)
// Metodo splice vai retornar os itens removidos e vai alterar minha array original
// o primeira valor de paremtro é o start e o segundo é o end e daqui para frente os valores que eu quero adicionar a onde foi removido
let arr3 = arr.splice(2)
console.log(arr)
console.log(arr3)
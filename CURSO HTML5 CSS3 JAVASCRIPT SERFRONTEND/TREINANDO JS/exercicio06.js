let n1 = 10
let n2 = "2"
console.log(n1 * n2)
// quando eu quis multiplica 10 pela string '2' motor de renderização do javascript é inteligente o suficiente ele consegue fazer conversão implicida e calcular
console.log(n1 * n2, typeof n1, typeof n2)

// o que acontece se eu quiser ao inves de mulplicar e sim fazer uma adição?
console.log(n1 + n2, typeof n1, typeof n2)
// já com o sinal de + ele não consegue fazer a conversão implicida por o sinal de + serve tanto para adição como para concatenação

// existe 3 formas principais para transformar strings em números
// parseFloat, parseInt, Number()
let n3 = "12"
n3 = parseInt(n3)
console.log(n3)
// conversão de string para número inteiro
let n4 = 10.99999
n4 = parseInt(n4)
console.log(n4)
// conversão de número com . flutuante para número inteiro
let n5 = '14abcdefg'
n5 = parseInt(n5)
console.log(n5)
let n6 = 'abcdefg14'
n6 = parseInt(n6)
console.log(n6)
let n7 = 'ab'
console.log(n1 * n7)

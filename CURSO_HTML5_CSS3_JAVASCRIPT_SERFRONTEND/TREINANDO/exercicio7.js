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

// conversão de números para string
n8 = 16
n8 = n8 + ""
console.log(n2, typeof n2)
n8 = n8.toString()
console.log(n8, typeof n8)
// toString consigo transformar para números decimais, hexadecimal, binario etc. Vejamos o ex
// decimais os número vão de 0 - 9
// hexadecimal de 0 - 16
let n9 = 15
n9 = n9.toString(16)
console.log(n9, typeof n9)

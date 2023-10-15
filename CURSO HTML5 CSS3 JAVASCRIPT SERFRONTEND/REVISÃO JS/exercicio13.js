// OPERADORES ARITIMETICOS
// + - * % **
let n1 = 10
let n2 = 5
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(n1 ** n2)

// OPERADORES DE ATRIBUIÇÃO
let n3 = 20
// n3 = n3 + 15
n3 += 15
console.log(n3)
n3 -= 15
console.log(n3)
n3 *= 15
console.log(n3)
n3 **= 15
console.log(n3)
n3 %= 15
console.log(n3)

// OPERADORES DE INCREMENTO E DECREMENTO
let i = 0 
// i += 1 
// ++ i
console.log(i--)
i++;
i++;
i++;
console.log(i)
// i-- pos descremento
// i++ pos incremento
// ++i pre decremento

// OPERADORES DE COMPARAÇÃO
// // igualdade de valor ==
// igualdade de valor e tipo ===
/* < menor */
// > maior
// <= menor ou igual
// >= maior ou igual
// != valores diferente
// !== valores e tipos diferentes

console.log(n1,n2,n3)
console.log(n1 == "10")
console.log(n1 === "10")
console.log(n1 === parseInt("10"))
console.log(n2 > 10)
console.log(n1 >= 10)
console.log(n1 >= 11)
console.log(n1 <= 11)
console.log(n1 != "10")
console.log(n1 !== "10")

// OPERADORES LOGICOS
// Para uma pessoa viajar para o exterior
// - precisa ser maior de 18 anos
// ou
// acompanhado com os pais
let idade = 21
let paispresentes = false
let comproubilhete = false
const podeviajar = idade >= 18 || paispresentes && comproubilhete;
console.log(`pode viajar ${podeviajar}`)
n1 = 6
n2 = 8
let media = (n1 + n2) / 2
console.log(`media: ${media}`)
console.log((3 * 2) ** 2)
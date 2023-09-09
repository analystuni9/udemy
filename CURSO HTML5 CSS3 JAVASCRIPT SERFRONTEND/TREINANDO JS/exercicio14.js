// OPERADORES LOGICOS
// AND(&&) OR(||) NOT(!)
// ExpA  ExpB  AND(&&)  OR(||)  ExpA  NOTA(!A)
// true  true  true     true    true  false
// true  false false    true    false true
// true  true  false    true
// false true  false    true
// false false false    false
// Quando eu quero verificar se as 2 expressões são verdadeira eu ultilizo o and
// se 1 das empressões me retornar false o and vai me retornar false
// já com o or se uma das expressoes me retornar true ele vai o bloco inteiro com true
// já a negação me tras o valor inverso se a expressão for verdadeira ela vai me retornar false e vice e versa
// Para uma pessoa viajar para o exterior
// - precisa ser maior de 18 anos
// ou
// acompanhado com os pais
let idade = 21
let paispresentes = false
let comproubilhete = true
const podeviajar = idade >= 18 || paispresentes && comproubilhete;
console.log(`pode viajar ${podeviajar}`)
n1 = 5
n2 = 8
let media = (n1 + n2) / 2
console.log(`media: ${media}`)
console.log((3 * 2) ** 2)

if(comproubilhete) {
    console.log('Não, comprou o bilhete')
} else {
    if (idade >= 18) {
        console.log('É maior de idade, pode viajar')
    } else {
        console.log('É maior de idade, pode viajar!')
    }
    console.log('Sim, comprou o bilhete')
}

console.log(`media ${media}`)

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Reprovado. Mas há como recuperar")
} else {
    console.log("Aprovado")
} 
console.log('Saiu do bloco if')
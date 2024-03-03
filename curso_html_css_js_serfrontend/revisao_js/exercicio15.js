// OPERADORES LOGICOS
// Para uma pessoa viajar para o exterior
// - precisa ser maior de 18 anos
// ou
// acompanhado com os pais
// let idade = 21
// let paispresentes = false
// let comproubilhete = true
// const podeviajar = idade >= 18 || paispresentes && comproubilhete;
// console.log(`pode viajar ${podeviajar}`)
// n1 = 5
// n2 = 8
// let media = (n1 + n2) / 2
// console.log(`media: ${media}`)
// console.log((3 * 2) ** 2)

// if(!comproubilhete) {
//     console.log('Não, comprou o bilhete')
// } else {
//     if (idade >= 18) {
//         console.log('É maior de idade, pode viajar')
//     } else {
//         console.log('É maior de idade, pode viajar!')
//     }
//     console.log('Sim, comprou o bilhete')
// }

// console.log(`media ${media}`)

// if (n1 === 0 || n2 === 0) {
//     console.log("Reprovado")
// } else if (media < 7) {
//     console.log("Reprovado. Mas há como recuperar")
// } else {
//     console.log("Aprovado")
// } 
// console.log('Saiu do bloco if')
let idade = 17;
let paispresentes = false;
let comproubilhete = true;
const podeviajar = (idade >= 18 || paispresentes) && comproubilhete
let msgmaioridade = (idade >= 18)? "É maior de idade" : "É menor de 18" 
console.log(`Pode viajar: ${podeviajar}`);
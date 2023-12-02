// teste ()
// function teste () {
//     console.log('teste')
// }
// const teste = function teste () {
//     console.log('teste')
// }
// teste ()
// let minhaVar = 'variavel'
// console.log(typeof minhaVar)
// function tradicional vai funcionar o hosting isso significa não importa a chamada da funcão se é antes ou depois ela vai funcionar
// o mesmo não acontece com a function expression que precisar ser chamada depois para funcionar se chamar ela antes vai me gerar um erro
// em relação o hosting com as variaveis se usar var e ser ultilizada antes vai me gerar um undefined ja com const ou let vai me gerar um erro
function minhaFunc () {
    if (true) {
        var x = "string"
    }
    console.log(x)
}
minhaFunc()
// SWITCH
let diasemana = 5
// if (diasemana == 0) {
//     console.log("hoje é domingo")
// } else if (diasemana == 1) {
//     console.log("hoje é segunda")
// } else if (diasemana == 2) {
//     console.log ("hoje é terça") 
// } else if (diasemana == 3) {
//     console.log ("hoje é quarta")
// } else if (diasemana == 4) {
//     console.log ("hoje é quinta")
// } else if (diasemana == 5) {
//     console.log ("hoje é sexta")
// } else {
//     console.log ("hoje é sábado")
// }
// let dia = ""
// switch (diasemana) {
//     case 0:
//         dia = "domingo" 
//         break 
//     case 1:
//         dia = "segunda"
//         break
//     case 2:
//         dia = "terça" 
//         break  
//     case 3:
//         dia = "quarta"
//         break
//     case 4:
//         dia = "quinta"
//         break
//     case 5:
//         dia = "sexta"
//         break
//     case 6:
//         dia = "sábado"
//         break
//     default:
//         dia = "Não atendeu nenhuma das condições"
// }
// console.log(`${dia}`)
let dia 
switch (diasemana) {
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda"
        break
    case 2:
        dia = "Terça"
        break
    case 3:
        dia = "Quarta"
        break
    case 4:
        dia = "Quinta"
        break
    case 5:
        dia = "Sexta"
        break
    case 6:
        dia = "Sábado"
        break
    default:
        dia = "Não atendeu nenhuma das condições"
        break
}
console.log(dia)
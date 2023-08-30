let diaSemana = 2
if (diaSemana === 0) {
    console.log('Hoje é domingo')
} else if (diaSemana === 1) {
    console.log('Hoje é segunda')
} else if (diaSemana === 2) {
    console.log('Hoje é terça')
} else if (diaSemana === 3) {
    console.log('Hoje é quarta') 
} else if (diaSemana === 4) {
    console.log('Hoje é quinta')
} else if (diaSemana === 5) {
    console.log('Hoje é sexta')
} else { 
    console.log('Hoja é sábado')
}
let dia = ""
switch (diaSemana) {
    case 0:
        dia = 'domingo'
        break
    case 1:
        dia = 'segunda'
        break
    case 2:
        dia = 'terça'
        break
    case 3:
        dia = 'quarta'
        break
    case 4:
        dia = 'quinta'
        break
    case 5:
        dia = 'sexta'
        break
    case 6:
        dia = 'sábado'
        break
        default:
             dia = "indefinido"
}
console.log(`Hoje é ${dia}`)
// curto circuito
// let n = 1
// n = n || 10
// console.log(n)
let isValid = false
if (isValid) {
    console.log('Na primeira expressão é valido')
} else { 
    console.log('Na primeira expressão é invalido')
}
isValid || console.log('Na segunda expressão é valido')
// obs: 0 é considerado falso em dado boleano
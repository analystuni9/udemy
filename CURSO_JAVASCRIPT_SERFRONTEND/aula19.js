let n = "global"
function mostrarN() {
    n = "local"
    console.log("valor de n no escopo local: " + n)
}
mostrarN()
console.log("valor de n no escopo global: " + n)

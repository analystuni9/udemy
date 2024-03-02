const array = [1, 2, 3, 4, 5]
array.reverse()
console.log(array)
let soma = array.reduce(function(acumulador, indiceAtual){
    return acumulador + indiceAtual
})
console.log(soma)
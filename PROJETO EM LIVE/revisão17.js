// const nomes = ["Daniel", "Maria", "Joao"]
// const idades = [40, 28, 35]
// console.log(nomes[0], idades[0])

// const pessoa = new Object ()
// console.log(pessoa)
// pessoa.nome = "Danilo"
// pessoa.idade = 30
// let prop = "nome"
// console.log(pessoa["nome"])
// console.log(pessoa["idade"])

// const pessoa = {
//     nome: 'Danilo', idade: 30, 
// }
// console.log(pessoa)


// interar arrays
// const nomes = ["João", "Maria", "Jose", "Helena"]
// for (let i = 0; i < nomes.length; i++) {
// console.log(`${i}: Nome é ${nomes[i]}`)
// }


// interar objetos
// const pessoa = {
//     nome: "Maria",
//     idade: 28,
//     email: "maria@exemple.com"
// }
// for (let prp in pessoa) {
//     console.log(prp)
//     console.log(pessoa[prp])
// }
// const produto = {
//     nome: "caneta",
//     qtd: 100,
//     adicionar: function (x) {
//         this.qtd += x
//         return console.log("Adicionado " + x )
//     },
//     remover: function (y) {
//         if (y > this.qtd) {
//             return console.log("Quantidade não disponivel")
//         }
//         this.qtd -= y
// }
// }
// produto.remover(3)
// produto.adicionar(5)
// console.log(produto)

const pessoas = [ {nome:"Danilo", idade: 30}, {nome:"Isac", idade: 13}]
// console.log(pessoas[1])
// for (k in pessoas) {
    // console.log(prp)
//     console.log(pessoas[k])
// }
for (i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}
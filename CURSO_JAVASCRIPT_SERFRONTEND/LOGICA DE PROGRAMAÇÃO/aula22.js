// const nomes = ["João", "Maria", "jose", "Helena"]
// for (i = 0; i < nomes.length; i++) {
//     console.log(`${i}: Nome é ${nomes[i]}`)
// }
const pessoa = {
    nome: "Maria",
    idade: 28,
    "email": "ele@server.com"
}
console.log(pessoa)
for (let prop in pessoa) {
    // console.log(prop)
    console.log(pessoa[prop])
}
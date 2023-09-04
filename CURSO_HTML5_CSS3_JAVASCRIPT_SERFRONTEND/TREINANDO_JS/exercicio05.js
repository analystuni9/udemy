// o que seria um tipo primitivos
// strings, number (int, floats), boolean;
// undefined, null, symbol (ES6)

let variavel = 'minha string'
let variavel2 = "minha string" 
let variavel3 = 'minha "string" com aspas duplas'
let variavel4 = "minha \"string\" com aspas duplas"
// As 2 variaveis são validas
var minhavar5 = `minha template literal`
// console.log(variavel4)

// templete literals 2 crases
// barra invertida escape
// observação nomes de variaveis eu não posso começar minha variavel com um número
// eu não posso ultilizar caracter especiais com exeção _ e $ eu posso começar ultizando esses caracteres
// se eu estiver usando aspas duplas dentro de aspas simples na minha variavel ou inverso isso é permitido
// concatenação de strings veja o exemplo abaixo
// quando eu quero verificar o tipo da variavel agente ultiliza o comando typeof


let idade = 40;
let idade2 = 30
let msg = "eu tenho " + idade + " anos"
let msg2 = `eu tenho ${idade2} anos`
console.log('Eu tenho ' + idade + ' anos')
console.log(msg)
console.log(msg2)
console.log('hello ' + ' world' )
console.log(typeof msg, typeof msg2, typeof idade, typeof idade2)

// no javascript eu posso ter tanto um numero inteiro como um numero flutuante
const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`)

// boolean agente só tem 2 opções ou é verdadeiro ou é falso
const isvalid = false
console.log(`isvalid: ${isvalid}`)

let vartest
console.log(vartest)
console.log(typeof vartest)
vartest = 10
console.log(typeof vartest)

// Operadores logicos
// Para uma pessoa viajar para o exterior:
// Precisa ser mair de 18 anos?
// ou 
// Acompanhado dos pais
// ter comprado o bilhete
let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 ||paisPresentes) && comprouBilhete;
console.log(`Pode viajar? ${podeViajar}`);

let n1 = 6
let n2 = 8
// Multiplicação e divisão tem preferencia na execução dos calculos
let media = (n1 + n2) / 2
console.log(`${media}`);
console.log((3 * 2) ** 2)
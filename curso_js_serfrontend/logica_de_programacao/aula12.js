// Operadores logicos
// Para uma pessoa viajar para o exterior:
// Precisa ser mair de 18 anos?
// ou 
// Acompanhado dos pais
// ter comprado o bilhete
let idade = 21;
let paisPresentes = true;
let comprouBilhete = false;
const podeViajar = idade >=18 || paisPresentes && comprouBilhete;
console.log(`Pode viajar? ${podeViajar}`);
let idade = 17;
let comprouBilhete = true;
if(!comprouBilhete){
    console.log("Sim. Ele Comprou o bilhete")
}
    else {
    console.log("Não. Ele não comprou o bilhete")
}
if (idade >= 18){
    console.log('Ele é maior de idade')
}
    else {
    console.log('Ele é menor de idade')
}
let n1 = 6
let n2 = 8
// Multiplicação e divisão tem preferencia na execução dos calculos
let media = (n1 + n2) / 2;
console.log(`${media}`);
console.log((3 * 2) ** 2);
if (n1 === 0 || n2 === 0) {
    console.log('Reprovado')
} else if(media < 7){
    console.log('Reprovado. Mas há como recuperar')
} else {
    console.log('Aprovado');
}
console.log('Saiu do bloco if')
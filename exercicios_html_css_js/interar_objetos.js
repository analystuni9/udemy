const objt = {Nome: "Danilo", Idade: 30, Altura: 1.75, Peso: 90}
for (let prop in objt){
    console.log(`${prop}:${objt[prop]}`)
}
const array = [1, 2, 3, 4, 5]
for (let i=0; i<array.length; i++){
    console.log(array[i])
}
for (let j=0; j<5; j++){
    console.log(objt[j])
}
for(n of array){
    console.log(n)
}
// let i = 0;
// while (i <= 10) {
//     console.log(i)
//     ++i
// }
// let j = 0
// for (j = 0; j <= 10; j++) {
//     console.log(j)
// }
// let ks = [1, 2, 3, 4, 5]
// ks.forEach(function(k){
//     console.log(k)
// })
function range (start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
const numbers = range(0, 10);
console.log(numbers)
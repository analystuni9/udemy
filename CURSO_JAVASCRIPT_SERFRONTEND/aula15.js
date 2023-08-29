// falsy values - 0, "", NaN, undefined, null, false
// truth - todos os demais

if ('false') {
    console.log('true')
} else { 
    console.log('false')
}
// resultado verdeideiro porque 'false' entre aspas é considerada uma string por isso não pode ser false
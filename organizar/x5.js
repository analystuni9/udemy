const produto = {
    nome:"caneta",
    quantidade:100,
    comprar:function(numero){
        if (numero > this.quantidade){
            return console.log("Quantidade não disponivel")
        }
        this.quantidade -= numero
    }
}
produto.comprar(5)
console.log(produto)
console.log(typeof produto)
console.log(typeof function(){})
function conferir () {
let user = document.getElementById("user")
let pass = document.getElementById("pass")
if(user.value === "admin@exemplo.com" && pass.value === "123"){
    alert("Login feito com sucesso.")
    window.open("exemplo.html")
} else {
    alert("Login invalido tente novamente.");
}

}

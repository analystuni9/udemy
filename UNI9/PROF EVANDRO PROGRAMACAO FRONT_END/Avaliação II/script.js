const head = document.head;
const style = document.createElement('style');
let h2 = document.querySelector('h2')
head.appendChild(style);
let exibir = document.getElementById('exibir');
function resolverTabuada () {
    let input = document.getElementById('numero').value
    let numDigit = parseInt(input);
    let resultado = '';
    if (isNaN(numDigit)) {
        alert('Por favor, insira um número válido.');
        return;
    }
    for (let i = 0; i <= 10; i++) {
        resultado += `${numDigit} x ${i} = ${numDigit * i}<br>`;
    }

    exibir.innerHTML = resultado;
    exibir.style.display = 'block'
    h2.style.display = 'block'
}
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

* {
    box-sizing: border-box;
}

/* Estilos vazios - serão preenchidos com JavaScript */
body {
    font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin: 50px;
    background-color: #f4f4f4;
}
video {
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: -1;
}
h1 {
    /* color: #2d7c2f; */
    font-size: 40px;
    margin: 20px 0;
    text-transform: uppercase;
    font-weight: 700;
    background: linear-gradient(45deg, rgb(9, 240, 9), rgb(135, 216, 5),rgb(2, 129, 2),rgb(9, 240, 9));
    background-size: 400% 100%;
    animation: animationtext 5s linear infinite alternate;
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent;
}
@keyframes animationtext {
    0% {
        background-position-x: 0%
    } 
    /* 50% {
        background-position-x: 50%
    } */
    100% {
        background-position-x:100%;
    }
}

h2 {
    font-size: 18px;
    text-align: left;
    color: #333;
    display: none;
    font-weight: 400;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

Fieldset {
    width: 500px;
    margin: 0 auto;
    border: none;
    /* border: 1px solid gray; */
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 10px;
    color: #333;
}

input[type='number'] {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    box-sizing: border-box;
    margin-bottom: 15px;
    margin-right: 5px;
    cursor: pointer
}

button {
    padding: 7px;
    font-size: 16px;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(8, 117, 8);

}

button:hover {
    padding: 7px;
    font-size: 16px;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    background-color:rgb(2, 63, 10);


}

#exibir {
    display: none;
    /* Inicialmente oculta a caixa de resultado */
    width: 500px;
    height: 300px;
    margin: 0 auto;
    font-size: 18px;
    margin-top: 20px;
    color: #333;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
    /* border: 1px solid gray; */
    overflow-y: auto;
}
        `;
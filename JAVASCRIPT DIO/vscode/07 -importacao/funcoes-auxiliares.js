const entradas = [10, 5,50,10,98,23,74,48,55,100,22];
let i = 0;

function gets() {
    const valor = entradas[i];
    i=i+1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print};
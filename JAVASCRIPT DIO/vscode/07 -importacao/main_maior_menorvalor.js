/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.
Exemplo:
    Entrada:
        4
        100
        150
        90
        200
    Saída:
        Maior número: 200
        Menor número: 90
*/
const {gets, print} = require('./funcoes-auxiliaresMM')

const numerosSorteado = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteado.push(numeroSorteado)  

}

let menorNumero = Infinity;
let maiorNumero = 0;

for(let i= 0; i < numerosSorteado.length; i++){
    const numeroSorteado = numerosSorteado[i]
     if (numeroSorteado < menorNumero){
        menorNumero = numeroSorteado
    } else if (numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado
    }
}

print(menorNumero)
print(maiorNumero)
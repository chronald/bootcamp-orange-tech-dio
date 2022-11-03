

/*faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 variaveis. Sendo elas:
- 1 Preço do combustivel
- 2 Gasto médio do carro por KM;
- 3 Distancia em KM da viagem;

imprima no console o valor que será gasto de combustivel para realizar está viagem.
*/

console.log ('Olá, Essa será a conta para calcular o valor gasto de combustivel em uma viagem.')
const precoCombustivel = 5.79;
const kmPorLitros = 15; 
const distanciaEmKm = 1580;
const resultado = ( distanciaEmKm / kmPorLitros ) * precoCombustivel;

console.log ('O valor do combustivel é: ', "R$", precoCombustivel);
console.log ('O gasto médio de combustivel por KM rodado é', kmPorLitros, "/L por km ");
console.log ('A distancia que será percorrido em KM é ', distanciaEmKm, "km");
console.log ("O valor que será gasto será ", "R$",resultado.toFixed(2));

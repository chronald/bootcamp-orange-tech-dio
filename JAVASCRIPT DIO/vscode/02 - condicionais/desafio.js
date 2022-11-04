/*faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 5 variaveis. Sendo elas:
- 1 Preço do etanol;
- 2 Preço da gasolina
- 3 O tipo de combustível que está no seu carro;
- 4 Gasto médio de combustível do carro por KM;
- 5 Distância em km da VIagem;

imprima no console o valor que será gasto de combustivel para realizar está viagem.
*/


const distanciaKM = 150;
const valorEtanol = 3.40;
const valorGasolina = 5.79;
const kmPorLitros = 10;
const CombustivelUsado = "Gasolina";

const litrosConsumidos = distanciaKM / kmPorLitros;
const valorGastoEtanol = litrosConsumidos * valorEtanol;
const valorGastoGasolina = litrosConsumidos * valorGasolina;


if (CombustivelUsado === "Etanol") {
    console.log(`Caso Você percorra ${distanciaKM} KMs, utilizando Etanol você gastará R$${valorGastoEtanol}`)

}else {
    console.log(`Caso você percorra ${distanciaKM} KMS, utilizando Gasolina, você gastará R$${valorGastoGasolina}`)
}
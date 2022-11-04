/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os código da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista débito, recebe 10% de desconto;
- A vista no dinheiro ou no PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;
const debitoAvista = precoEtiqueta - (precoEtiqueta * 0.1);
const dinheiroDesconto = precoEtiqueta - (precoEtiqueta * 0.15);
const duasVezes = precoEtiqueta;
const acimaDuas = precoEtiqueta +(precoEtiqueta * 0.15);
console.log(`O valor gasto foi R$${precoEtiqueta}`)

if(formaDePagamento === 1 ) {
    console.log(`A compra foi realizada no débito você ganhará 10% de desconto, você pagará R$${debitoAvista}`)

}else if (formaDePagamento === 2) {
    console.log(`A compra foi realizada no Dinheiro/PIX você ganhará 15% de desconto, você pagará R$${dinheiroDesconto}`)
}else if (formaDePagamento === 3) {
    console.log(`A compra foi realizada em duas vezes no crédito, você não terá desconto nem juros na compra.`)
}else {
    console.log(`A compra foi realizada em mais de 2x, terá um juros de 10% você pagará R$${acimaDuas}`)
}
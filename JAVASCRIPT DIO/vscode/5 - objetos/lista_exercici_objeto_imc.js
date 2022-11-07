/* 
2/ Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso/ (altura * altura));
Instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;


    constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    } // \/ Método.
    calcularIMC(){// utilizar () somente caso tenha algo que não esteja dentro da classe.
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc(){
       const imc =  this.calcularIMC();
       if (imc < 18.5){
        return('Abaixo do peso');
    }else if (imc >=18.5 && imc <25) {
        return('Peso normal');
    }else if (imc >=25 && imc <30 ) {
        return('Acima do peso'); 
    }else if (imc >=30 && imc <40) {
        return('Obeso');
    }else {
        return ('Obesidade grave');
    }
    }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(jose.classificarImc());

const christian = new Pessoa("Christian", 50, 1.60);
console.log(christian);
console.log(christian.classificarImc())


/*
const pessoa = {
    nome: 'Christian',
    idade: 20,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};
*/
/*pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}*/
/*
console.log(pessoa['nome']); //desta forma é possivel fazer de forma dinámica utilizar variavel['nome da variavel dentro do objeto' = 'nome']
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever(){ // Não precisa informar que é function dentro de uma classe.
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

/*const christian = new Pessoa('Christian', 20);
console.log(christian)*/

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que a(o) ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que a(o) ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const christian = new Pessoa('Christian', 20);
const isabela = new Pessoa('Isabela', 21);

compararPessoas(christian, isabela)
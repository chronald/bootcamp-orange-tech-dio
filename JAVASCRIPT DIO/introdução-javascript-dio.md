# Introdução ao JavaScript

### Variáveis e operadores	

-------------------

console.log(); = Para imprimir algo no terminal.

Para declarar variável utilizar

let nomedavariavel = 10; variável que pode mudar o valor da mesma. 

ou 

const nomedavariavel = 3.14 = não pode mudar o valor da mesma.

-----------------

utilizar "=" para armazenar o valor 

ex : 

let variavel **=** 10;

-------------------------

utilizar toFixed na variável para arredondar as casas decimais 

ex :

resultado.toFixed(quantas casas decimais você quer).

--------------

### OPERADORES DO JAVASCRIPT

Aritméticos : 

* += Adição 
* -= Subtração 
* *= Multiplicação
* /= Divisão 
* % = Resto da divisão
* ** = Exponenciação 

Precedência :

* ()
* **
* (* / %)
* (+ - )

Relacionais : 

* ( > Maior)
* (< Menor)
* (>= Maior ou igual)
* (<= Menor ou igual)
* ( == Igual)
* ( != Não igual)

Identidade:

Para saber se a variavel é idêntica(mesmo valor ou mesmo tipo)

* 5 == 5 >> True (Igual o mesmo numero )
* 5 == '5' >> True (Considera somente o numero e não ' ')
* 5 === '5' >> False (Considera o ' ' tornando string )
* 5 === 5 >> True 

Lógicos : 

* ! (Negação)(Tratado como operador onário)
  * True não é false e False não é true 

* && (Conjunção/E )
  * So é true se as 2 forem verdadeiras 
  * true && true = true
  * true && false = false
* || ( Disjunção/Ou) 
  * Precisa de apenas um true para ser verdadeiro
  * true || true = true 
  * true || false = true
  * false || false = false

-----------------

### Precedência 

Aritméticos:

* (() **>>** ** **> **/)

Relacionais : 

* ( > **>>** <  **>>** >=)

Lógicos 

* ( ! **>>** && **>>** ||)



--------------

### Estruturas condicionais 

------------

Uma estrutura condicional é usada para verificar se é verdadeiro ou falso (boolean)(true ou false)(0 ou 1)

------------

Para utilizar o operador SE utilizar

if () {

}

Para utilizar SENÃO utilizar

Else {

}

Para utilizar SENÃO SE utilizar

Else if () {

}

--------------

**para Variáveis booleanas utilizar o prefixo de is  para confirmar se é ou não é .**

**ex: isNumeroPar**

-------------

Caso queira usar formatação no JS utilizar crazy (`` + $ {})

-------------------

Para utilizar potencia utilizar 

Math.pow(variavel, 2, 10 etc)

------------

## Funções

Funções é um pequeno trecho de código que pode invocar a execução dele a qualquer momento que a gente quiser.

-----------------

Para declarar uma função utilizar 

function nomefunction(){

}

para executar uma função utilizar o nome da função criada.

o () é o parâmetro da função. da para passar utilizar parâmetros pré-definidos por ex

function soma(n1=0, n2=0)

as funções não estão devolvendo nada é chamada de procedimento, irá executar oque está dentro da função e fim.

para devolver o valor utilizar **return** (Só pode ter um retorno dentro da função)

-------------------------

utilizar sempre uma função principal (main)

function main(){

}

*Funções no JS é objeto.*

para reatribuir uma função utilizar



nomefunção = function(){

}

----------------------

para usar a função imediatamente invocada utilizar () em volta da função

ex: 

(function main(){

const valorUm = 15

const valorDois = 10

const resultado = peso + altura 

console.log(resultado);

})();

caso queira pode retirar o nome da função pois a mesma só funcionará dentro do (), é utilizado bastante na parte Web para isolar códigos/escopos ou utilizado para funções que será executado uma vez somente

**para calcular porcentagem utilizar 10/100** - Para não esquecer no futuro. 

**Utilizar F8 para aparecer o resultado automaticamente no node.js**

----------

## Objetos 

Objeto é uma coleção de valores, agrupa valores, funciona através de chave/valor

Como utilizar : 

const variavel = {

​	nome: , 

​	idade: ,

};



variavel.altura = 

delete variavel.nome;  (Para deletar )

console.log(variavel);

sempre utilizar uma , no final dentro do objeto conforme no exemplo acima 

---------------------

Função dentro de objeto é chamado de método.

Como utilizar função dentro do objeto.

**const pessoa = {**

​	**nome: "nome",**

​	**idade: 25,**

​	**descrever: function(){**

​			**console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}')**

**}**

**}**

como a função está dentro de um objeto utilizar this no console.

-----------

## Classe 

**Classe definição do que deveria ser o objeto e  instância é uma ocorrência do objeto.**

------------

**A classe em código:**

class Pessoa{

​	nome;

​	idade;

​	descrever (){ **// << Função porem não precisa informar pois está dentro de uma classe.**

​	console.log(´Meu nome é ${this.nome} e minha idade é ${this.idade}´)	

}

}

**************

**como instanciar uma classe:**

const variavel = new Pessoa();

variavel.nome = "Nome";

variavel.idade = idade;



variavel.descrever();

**

-----------

Constructor é oque acontece quando uma pessoa é instanciada.

**o mesmo é utilizado dentro da classe antes da function.**

constructor(nome, idade){

​	this.nome = "teste"

​	this.idade = 20;

}

---------------

**Como ficará um código utilizando classe/função/constructor.**

class Pessoa {

​	nome;

​	idade;



​	constructor(nome, idade){

​	this.nome = nome;

​	this.idade = idade;	

}

descrever (){

​	console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}')

}

}

const christian = new Pessoa ('Christian', 20);

christian.descrever();

----------------

## Arrays (Listas)

--------------

{} - Bloco de código/ objeto literal

[] - Lista 

agora em apenas 1 variável da para armazenar um conjunto de dados utilizando lista.

-----------------

**para  adicionar mais informações a lista utilizar:**

*variavel.push('')* **< sempre será adicionado no final da lista / bom para utilizar com a lista vazia.** 

*variavel[4] = "";* **< da forma ao lado você escolhe a posição em que a nova informação estará na lista podendo substituir algum informação da lista.**

---------------

**para remover informações na lista utilizar:**

*variavel.pop()* < **Exclui o ultimo da lista** 

*variavel.shift()* < **Exclui o primeiro da lista**

--------------------

Para verificar o tamanho da lista utilizar:

variavel.lenght <**Mostra a quantidade de coisas que tem na lista**

-----------------

## Estrutura de repetição 

Para usar repetição utilizar:

**for (let variavel = 0; variavel < 10;  variavel++) {**

**}**

------------

## Importação de arquivos

para exportar utilizar

module.exports = {função declarada, função declarada.}

------------

para importar utilizar 

const funcoes = require('./arquivoquevocêquerimportar.')

------------

para utilizar uma função importada utilizar 

console.log(funcoes.gets());

----------------

para realizar um object destructure segue o exemplo abaixo

ao invés de utilizar o formato a seguir, utilizar o segundo formato

const pessoa = {

​	nome: 'vitor'

}

const { nome do atributo } = variavel; ( é possível utilizar vários atributos.)

-----------------

é possivel fazer o destructure direto na importação utilizando as informações a seguir:



const {gets, print} = require('./funcoes-auxiliares');

---------------------------

para deixar o programa mais dinâmico :

No primeiro indicê, utilizar o total de entradas como exemplo:

const entradas = [**10**, 5,50,10,98,23,74,48,55,100,22];

na primeira x que chamar o gets será a quantidade de números informados no exercicio passado é a quantidade de alunos:

então criará uma variavel:

const **quantidadeDeAlunos **= gets();

e no for utilizar a variavel ao invés da quantidade, ficando assim:

 for (let i = 0; i < **quantidadeDeAlunos**; i++)

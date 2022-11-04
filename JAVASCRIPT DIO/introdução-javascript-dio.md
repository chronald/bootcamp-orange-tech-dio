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

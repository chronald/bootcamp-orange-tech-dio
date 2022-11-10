## Introdução ao HTML/CSS

HTML:

É uma linguagem de marcação de texto, parecido com o WORD.

Marcamos o texto dando significado para ele.

Titulo = **< H1> < /h1>**

Paragrafo = (**< p> < /p>**)

-----------

Para criar um arquivo html utilizar \/

**nomearquivo.html**

--------------

para deixar o arquivo "pré"-pronto utilizar \/

**html:5**

-------------

CSS: 

É a forma de estilizar os textos.

**< style> < /style>**

----------------

JAVASCRIPT:

É oque da comportamento para o html

**< script> < /script>**

**window(representa obrowser) = janela**

**document(documento corrente) **

**addEventListenner = chama funções**

----------

### Entendendo o  protocolo cliente servidor

cliente faz uma solicitação pro servidor, servidor atende oque esta sendo solicitado e devolve uma resposta para o cliente.

cliente = browser //  servidor = http 

---------------

### INCLUINDO NORMALIZE CSS NO PROJETO

Para padronizar o projeto para todos os site utilizar o link abaixo no head.

(< link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />)

----------

### INCLUINDO FONT PERSONALIZADA NO PROJETO

para incluir fonte utilizar o site:

https://fonts.google.com

apos escolhido a fonte copiar o link e aplicar no head no .html e colar o CSS rules to specify families no arquivo do css com

(* {

 font-family:

})

-----------

### Estilização Inicial

Aplicando a técnica mobile-first(primeiro o estilo de css mobile e para as outras telas ir incrementando o CSS.)

Técnica utilizada para escrever menos após finalizar o mobile.

------------

No inspecionar elemento, ao lado do Elements terá um icone de celular/ utilizar o mesmo para ver como ficaria no formato celular

no Dimension, utilizar pixel 5

----------------

no body utilizar 

< ol> < /ol> - para ter uma lista ordenada 

-------------

para dar uma distancia nas escritas do site criar uma class no section com o nome de content, e no global.css informar

.content{

​	padding: 1rem; //baseado no tamanho da fonte M.

 }

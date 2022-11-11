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

​	box-sizing: border-box; // considerar a borda um tamanho total.

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

.content h1 {

​	margin: 0;

}

---------------

#### Estilização na listagem de Pokemon	

Criar uma class="pokemons" no ol dentro do body.

no global css utilizar



ol.pokemons{

​	list-style: none;

​	padding: 0;

​	margin: 0;

}

--------------

para fazer um layout com um do lado do outro utilizaremos um grind style



dentro do ol.pokemons incrementar 



display: grid;

grid-template-columns: 1fr 1fr; 

-------------------

nos itens da lista  utilizar dentro de um novo ol.pokemons 

ol.pokemons li{

​	margin: .5rem:

​	padding: 1rem;

​	color: #fff

​	border-radius: 1rem;

​	background-color: 

}

--------------

#### Adicionando as imagens dos pokemons

Para adicionar imagens

Entrar na Lista de cada personagem informado e  usar código abaixo

<img src="linkdaimagem preferencialmente raw.githubusercontent.com" alt="Bulbasaur"

obs: sempre alterar o alt conforme a lista que você estiver.

---------------

Ajustando a imagem:

na lista utilizar

display: flex;

flex-direction: column; (rom) um na frente do outro (column) um embaixo do outro.

-----

Para imagens

dentro do css criar um ol.pokemons novo com as seguinte inclusões.



ol.pokemons li img {

​	

​	max-width: 100%; // para a imagem não vazar para fora da borda.

​	height: 100px;

}

-----------

#### Media query css

Conjunto de css que será aplicado conforme o tamanho da tela.

-----------

margin auto = maximo pra esquerda maximo pra direita (jeito simples de centralizar)

---------------

## Introdução a APIs

Api é um servidor que está servindo dados 

**Importantíssimo entender como o protocolo HTTP funciona**

------------

#### Como funciona as requisições.

o browser faz uma solicitação, é processada pelo servidor e há um retorno com a resposta.

---------------------------

### URL Path e Method

Para montar uma requisição http, há primeiro a URL:  (IP / path=caminho de identificação do recurso.

IP : (https://pokeapi.co)

local ( http://127.0.0.1:8080)

--------------

path = /api/v2/pokemon

-----------

Request method : (Sempre que for fazer uma requisição para o servidor terá um tipo)

-------------

GET | POST | PUT | DELETE | PATCH 

GET = Quando é feito um get no /pokemon, o servidor entende que quer buscar o recurso.

POST = Quando é feito um post no /pokemon, caso esteja seguindo alguns princípios, quer dizer que quer inserir um novo pokemon

PUT = Quando é feito um put no /pokemon, quer dizer que quer atualizar o pokemon

DELETE = Quando é feito um delete no /pokemon/1, quer dizer que quer deletar o pokemon 1

------------

Toda requisição para um recurso o método diz oque a gente quer fazer sobre esse recurso, principalmente nas APIS que segue o padrão de projeto rest.

---------------

Simplificando

a requisição é feita encima de um IP/DOMINIO e com o patch que irá identificar o recurso, e oque será feito sobre o recurso é dito pelo method.

-----------

### Path Params e Query String

Formas de passar dados:

no proprio patch.

https://pokeapi.com/api/v2/pokemon/1

------------

Query String = Descrição de busca, após o ? é a Query String, sempre será chave+valor, caso queira mais alguma informação utilizar &

*https://pokeapi.com/api/v2/pokemon?type=grass*&name=i

-----------

### Headers

Os Headers normalmente são metadados/configurações da nossa requisição, são coisas para  descrever a nossa requisição ou complementar a nossa requisição.

-------------------

Request Headers (Configuração da nossa API)

Exemplo : 

accept-language:

pt-Br; q=1

pt;q=0.9

en-US;q=0.8

en;q=0.7

gl;q=0.6

q = Prioridade 

Response Headers (Como está sendo configurada.)

------------

### Body e Status Code

Body = Corpo da nossa requisição.

e de acordo com o tipo, faz sentido ter o body.

(POST/PUT - FAZ SENTIDO)

(GET/DELETE - NÃO FAZ TANTO SENTIDO.)

Body pode ter na requisição e na resposta.

oque vai no body é de acordo com o content-type.

Request Body

{

 "name": "Teste"

}

a resposta do servidor terá um:

 **STATUS CODE** - Significa oque aconteceu com a nossa requisição. 

200 - ok

Response Headers  - **Como está sendo configurada**

Response Body - **Resposta em si** 

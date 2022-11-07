function escreverNome(nome){
    return ('Meu nome é:' + nome);
}


function verMaioridade(idade) {
    if (idade >=18 ){
        console.log(escreverNome('Christian ') + 'Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}
verMaioridade(20);
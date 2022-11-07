/* 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e iprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const notaUm = 5;
const NotaDois = 7;
const NotaTres = 9;

const MediaAluno = (notaUm + NotaDois + NotaTres) / 3;

if (MediaAluno < 5) {
    console.log('Reprovação');
}else if (MediaAluno >= 5 || MediaAluno <= 7) {
  console.log('Recuperação')  
}else {
    console.log('Passou de semestre')
}
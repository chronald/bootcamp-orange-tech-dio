
const numero = 0;



const NumeroDivisivilPor5 = (numero % 5) === 0    ;

console.log(NumeroDivisivilPor5);
// Se \/ No caso abaixo Se o numero for 0 aparecera Número é inválido
if (numero === 0) { 
    console.log('O número é inválido')
}else if (NumeroDivisivilPor5){ // SENÃO SE (Se o numero for outro além do zero irá verificar se o número é divisivel por 5, caso sim, retorna SIM)
    console.log('Sim')
} else{ // SENÃO (Se o numero não for divisível por 5 Irá retornar Não)
    console.log('Não')
}
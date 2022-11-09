/*
    1- cRIE UMA CLASSE PARA REPRESENTAR CARROS.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível nos de um valor
    gasto em reais para realizar este percurso. 
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calculoCombustivel(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
        
        }
    }
    
const fox = new Carro('Volkswagen', 'Preto', 1 / 12);
const bmwx5 = new Carro ('Bmw', 'Vermelho', 1 / 5);
console.log(fox.calculoCombustivel(70, 5).toFixed(2));
console.log(bmwx5.calculoCombustivel(70,5).toFixed(2));
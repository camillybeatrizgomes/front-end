class Carro {
    marca;
    cor;
    gastoMedioPorKM;
    calcularGastoDePercuso(distanciaPercorrida, precoCombustivel){
        return distanciaPercorrida * this.gastoMedioPorKM * precoCombustivel;
    }

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }
}

let carro1 = new Carro("Ferrari", "Vermelha", 20);
console.log(carro1.calcularGastoDePercuso(70, 5.0).toFixed(2));
let carro2 = new Carro("Mercedes", "Branca", 13);
console.log(carro2.calcularGastoDePercuso(83, 5.70).toFixed(2));
let precoCombustivel = 5.50;
let gastoCombustivelDoCarro = 12;
let distanciaDaViagem = 300;

let resultado = (distanciaDaViagem / gastoCombustivelDoCarro) * precoCombustivel;

console.log("O valor gasto na viagem é de R$ "+ resultado.toFixed(2));
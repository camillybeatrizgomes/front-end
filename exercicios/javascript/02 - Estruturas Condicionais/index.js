let precoEtanol = 3.75;
let precoGasolina = 5.70;
let tipoCombustivel = "Gasolina";
let gastoMedioDeCombustivelDoCarro = 12;
let distanciaDaViagem = 150;

if (tipoCombustivel === "Etanol"){
    let resultado = (distanciaDaViagem / gastoMedioDeCombustivelDoCarro) * precoEtanol;
    console.log("O valor gasto da viagem é de R$ " + resultado.toFixed(2));
} else {
    let resultado = (distanciaDaViagem / gastoMedioDeCombustivelDoCarro) * precoGasolina;
    console.log("O valor gasto da viagem é de R$ " + resultado.toFixed(2));
}0
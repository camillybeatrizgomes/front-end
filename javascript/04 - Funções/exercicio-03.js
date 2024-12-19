function calcularDesconto(preco, desconto){
    return preco - (preco * (desconto / 100));
}

function calcularJuros(preco, juros) {
    return preco + (preco * (juros / 100));
}

let formaDePagamento = 4;
let precoProduto = 100

if (formaDePagamento === 1){
    console.log(calcularDesconto(precoProduto, 10));
} else if (formaDePagamento === 2){
    console.log(calcularDesconto(precoProduto, 15));
} else if (formaDePagamento === 3){
    console.log(precoProduto);
} else {
    console.log(calcularJuros(100, 10));
}


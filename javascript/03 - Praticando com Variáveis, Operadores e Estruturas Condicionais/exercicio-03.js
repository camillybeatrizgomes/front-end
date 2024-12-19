let precoDoProduto = 13.99;
let formaDePagamento = "Pix";

if (formaDePagamento === 1) {
    let desconto = precoDoProduto - (precoDoProduto * 0.10);
    console.log("Preço do produto com 10% de desconto: " + desconto.toFixed(2));
} else if (formaDePagamento === 2) {
    let desconto = precoDoProduto - (precoDoProduto * 0.15);
    console.log("Preço do produto com 15% de desconto: " + desconto.toFixed(2));
} else if (formaDePagamento === 3) {
    let desconto = precoDoProduto
    console.log("Preço do produto sem desconto e sem juros: " + desconto.toFixed(2));
} else {
    let desconto = precoDoProduto + (precoDoProduto * 0.10);
    console.log("Preço do produto com 10% de juros: " + desconto.toFixed(2));
}
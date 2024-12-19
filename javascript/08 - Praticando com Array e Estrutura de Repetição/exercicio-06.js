let listaDeNotas = [2, 7, 3, 8, 10, 4];
let maiorNumero = listaDeNotas[0];

for (let i = 0; i < listaDeNotas.length; i++) {
    if (listaDeNotas[i] > maiorNumero){
        maiorNumero = listaDeNotas[i];
    }
}

console.log(maiorNumero);
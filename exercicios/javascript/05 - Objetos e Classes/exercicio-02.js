class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        let imc = this.calcularImc();
        if (imc < 18.5){
            return "Abaixo do Peso";
        } else if (imc > 18.5 && imc < 25) {
            return "Peso Normal";
        } else if (imc > 25 && imc < 30) {
            return "Acima do Peso";
        } else if (imc > 30 && imc < 40) {
            return "Obeso";
        } else {
            return "Obesidade Grave";
        }
    }
}

let pessoa = new Pessoa("José", 70, 1.75);
console.log(pessoa.calcularImc().toFixed(2));
console.log(pessoa.classificarImc());

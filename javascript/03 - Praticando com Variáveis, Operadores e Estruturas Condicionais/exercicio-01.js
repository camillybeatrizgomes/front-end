let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log("Reprovação");
} else if (media > 5 && media < 7){
    console.log("Recuperação");
} else {
    console.log("Aprovação");
}
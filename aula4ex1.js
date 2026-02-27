/* A escola adota uma recuperação para cada avaliação, 
que substitui a nota do aluno caso seja maior que 
sua nota anterior.
Dada as seguintes notas, calcule a média simples 
do aluno e diga se ele está aprovado ou reprovado, 
levando em consideração a substituição de notas. */

const av1 = 7.0;
const av2 = 5.0;
const recup1 = 4.0;
const recup2 = 10.0;
let nota1;
let nota2;
let media;

    if (recup1 >= av1){
        console.log("A nota da av1 é maior que a recup1")
        av1 = recup1
    }else {
        console.log("A nota da recup2 é maior que a av2")
        recup2 = av2
    }
    const soma = av1 + Number(recup2)
console.log("A soma é: " + soma)

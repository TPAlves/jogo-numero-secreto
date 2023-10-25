const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();


const elementoMenorValor = document.querySelector("[data-menor-valor]");
const elementoMaiorValor = document.querySelector("[data-maior-valor]");


elementoMenorValor.innerHTML = menorValor;

elementoMaiorValor.innerHTML = maiorValor;




// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * maiorValor + 1);
// }

function gerarNumeroAleatorio() {
    const intervalo = maiorValor - menorValor + 1;
    const probabilidade = Math.random() * intervalo;
    return Math.floor(probabilidade) + menorValor;
}



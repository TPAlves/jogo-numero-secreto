// function verificaValorValido(chute) {

//     //Removendo todos os espaços 
//     chute = chute.replace(/\s/g, '');
//     chute = chute.trim();

//     numero = parseInt(chute);

//     if (verificaValidadeNumero(numero)) {
//         elementoChute.innerHTML += "<div>Valor Inválido</div>";
//         return;
//     }

//     if (numeroForaDoIntervalo(numero)) {
//         elementoChute.innerHTML +=
//             `<div>Valor inválido: Diga um valor entre ${menorValor} e até ${maiorValor}</div>`;
//         return;
//     }

//     if (numero === numeroSecreto) {
//         document.body.innerHTML = `
//             <h2 class="msg-sucesso">🥳Parabéns🎉<br>
//             Você acertou!!</h2>
//             <h3 class="msg-sucesso">O número secreto era ${numeroSecreto}</h3>
//             <button id="btn-jogar-novamente" class="btn-novamente-reniciar">Jogar Novamente</button>
//             `

//     } else if (numero > numeroSecreto) {
//         elementoChute.innerHTML +=
//             `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div> `;
//     } else {
//         elementoChute.innerHTML +=
//             `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div> `;
//     }


// }

function verificaValorValido(chute) {

    //Removendo todos os espaços 
    chute = chute.replace(/\s/g, '');
    chute = chute.trim();

    numero = parseInt(chute);

    if (verificaValidadeNumero(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
        return;
    }

    if (numeroForaDoIntervalo(numero)) {
        elementoChute.innerHTML +=
            `<div>Valor inválido: Diga um valor entre ${menorValor} e até ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="msg-sucesso">🥳Parabéns🎉<br>
            Você acertou!!</h2>
            <h3 class="msg-sucesso">O número secreto era ${numeroSecreto}</h3>
            <button id="btn-jogar-novamente" class="btn-novamente-reniciar">Jogar Novamente</button>
            `;

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=
            `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div> `;
        probabilidade = probabilidade + (numeroSecreto - numero) / 100;
    } else {
        elementoChute.innerHTML +=
            `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div> `;
        probabilidade = probabilidade + (numero - numeroSecreto) / 100;
    }


}

function verificaValidadeNumero(numero) {
    return isNaN(numero);
}

function numeroForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor;
}



document.body.addEventListener("click", event => {
    if (event.target.id == "btn-jogar-novamente") {
        window.location.reload();
    }
});









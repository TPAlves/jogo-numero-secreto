const elementoChute = document.querySelector("[data-chute]");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

// function onSpeak(event) {
//     chute = event.results[0][0].transcript;
//     verificaGameOver(chute);
//     exibeMensagem(chute);
//     verificaValorValido(chute);
    
// }

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    verificaGameOver(chute);
    exibeMensagem(chute);
    verificaValorValido(chute);

    // Removendo todos os espaços 
    chute = chute.replace(/\s/g, '');
    chute = chute.trim();

    // Validando se é um número
    if (!isNaN(chute)) {
        chute = parseInt(chute);
    } else {
        chute = null;
    }
}

function exibeMensagem(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
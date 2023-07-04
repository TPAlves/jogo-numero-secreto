function verificaGameOver(chute) {
    chute = chute.toUpperCase().replace(/\s/g, '');
    if (chute === "GAMEOVER" || chute === "FIMDEJOGO") {
        document.body.innerHTML = `
        <h2 class="msg-end">Game Over<br>
        <button id="btn-jogar-novamente" class="btn-novamente-end">Jogar Novamente</button>
        `;
        document.body.style.background = "#1B6B93";
    }
    return;
}

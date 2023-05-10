function verifyIfTheGuessIsValid(guess) {
    const number = +guess;

    if (guessIsInvalid(number)) {
        guessElement.innerHTML += "<div>Valor inválido</div>";
        return;
    }

    if (guessIsBiggerOrLowerThanPermited(number)) {
        guessElement.innerHTML += `<div>Valor inválido: Fale um número entre ${lowerValue} e ${highestValue}</div>`;
        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id="play-again" class="btn-play">Jogar Novamente</button>
        `;
    } else if (number > secretNumber) {
        guessElement.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        guessElement.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

function guessIsInvalid(number) {
    return Number.isNaN(number);
}

function guessIsBiggerOrLowerThanPermited(number) {
    return number > highestValue || number < lowerValue;
}

document.body.addEventListener("click", (e) => {
    if (e.target.id == "play-again") {
        window.location.reload();
    }
});

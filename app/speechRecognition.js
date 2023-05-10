const guessElement = document.getElementById("guess");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-BR";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    showGuessOnScreen(guess);
    verifyIfTheGuessIsValid(guess);
}

function showGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}

recognition.addEventListener("end", () => {
    recognition.start();
});

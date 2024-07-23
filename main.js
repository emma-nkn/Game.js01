let randomNumber = Math.floor(Math.random() * 100) + 1; // Géner un nombre à deviner

console.log("randomNumber:", randomNumber);

const guessField = document.querySelector(".guessField"); // input du nombre

// const lastResult = document.querySelector(".lastResult");

const guessSubmit = document.querySelector(".guessSubmit"); // Le button à cliquer

const context = document.querySelector(".context-result");

function checkGuess() {
  const userGuess = Number(guessField.value); // Le nombre entré par l'utilisateur

  //Comparaison du nombre de l'utilisateur et le nombre random
  if (userGuess === randomNumber) {
    console.log("Trouvé");
  } else {
    console.log("Non trouvé");
  }
}

guessSubmit.addEventListener("click", checkGuess);

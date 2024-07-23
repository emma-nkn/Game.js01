let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // Géner un nombre à deviner

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1; // Variable qui compte le nombre de tentatives
let resetButton; // Variable pour stocker le button rejouer

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Nombres précedents: ";
  }
  guesses.textContent += userGuess + " "; // Rajouter le nombre taper par l'utilisateur

  if (userGuess === randomNumber) {
    lastResult.textContent = "Nombre trouvé"; //Affiche si l'utilasteur à trouver
    lastResult.style.backgroundColor = "green"; //Changer le background
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 2) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Nombre non trouvé!";
    lastResult.style.backgroundColor = "red"; //Changer le background
    if (userGuess < randomNumber) {
      // Comparer si le nombre est supérieur ou inférieur
      lowOrHi.textContent = "Nombre inférieur!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Nombre supérieur!";
    }
  }

  console.log("guessCount:", guessCount);
  // guessCount = guessCount + 1;
  guessCount++; // augmente de +1 à chaque qu'on clique sur le button
  guessField.value = ""; // Mettre  userGuess à vide
  guessField.focus(); // Donner la main à l'utilisateur de taper autre nombre
}

guessSubmit.addEventListener("click", checkGuess); // Cliquer sur le button submit

function setGameOver() {
  guessField.disabled = true; // empêche l'utilisateur d'insérer un nombre
  guessSubmit.disabled = true; // empêche l'utilisateur de cliquer sur le button
  resetButton = document.createElement("button"); // Créer un buttton
  resetButton.textContent = "Rejouer"; //Ajouter le texte du button
  document.body.appendChild(resetButton); //Ajouter le button au body du html
  resetButton.addEventListener("click", resetGame); // Cliquer sur le button rejouer
}

function resetGame() {
  guessCount = 1;

  // const resetParas = document.querySelectorAll(".resultParas p");
  // for (const resetPara of resetParas) {
  //   resetPara.textContent = "";
  // }

  resetButton.parentNode.removeChild(resetButton); // Effacer le button du body

  guessField.disabled = false; //permettre à l'utilisateur d'insérer un nombre
  guessSubmit.disabled = false; // permettre l'utilisateur de cliquer sur le button
  guessField.value = ""; // Remettre la valeur du nombre à vide
  guessField.focus(); // Donner la main à l'utilisateur de taper autre nombre

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1; // Génère un nombre à nouveau
  console.log(randomNumber);
}

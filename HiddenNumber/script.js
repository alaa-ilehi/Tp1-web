let targetNumber, attempts, maxAttempts;

function startGame() {
    const difficulty = document.getElementById("difficulty").value;

    if (difficulty === "easy") {
        targetNumber = Math.floor(Math.random() * 10) + 1;
        maxAttempts = 5;
    } else if (difficulty === "medium") {
        targetNumber = Math.floor(Math.random() * 50) + 1;
        maxAttempts = 7;
    } else {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        maxAttempts = 10;
    }

    attempts = maxAttempts;
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("game").style.display = "block";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess)) {
        alert("Veuillez entrer un nombre !");
        return;
    }

    attempts--;
    document.getElementById("attempts").innerText = attempts;

    if (userGuess === targetNumber) {
        alert("Bravo ! Vous avez trouvé le bon nombre !");
        restartGame();
    } else if (attempts === 0) {
        alert("Dommage ! Le nombre était " + targetNumber);
        restartGame();
    } else {
        alert(userGuess < targetNumber ? "Trop bas !" : "Trop haut !");
    }
}

function restartGame() {
    document.getElementById("game").style.display = "none";
    document.getElementById("userGuess").value = "";
}

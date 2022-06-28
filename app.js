const chooseScissors = document.querySelector(".scissors")
const choosePaper = document.querySelector(".paper")
const chooseRock = document.querySelector(".rock")
const displayWinner = document.querySelector(".winner")

chooseScissors.addEventListener("click", playGameScissors)
choosePaper.addEventListener("click", playGamePaper)
chooseRock.addEventListener("click", playGameRock)

// randomize computer choice

function compChoice() {
    let compChoice = Math.random() * 100
    compChoice = Math.round(compChoice)
    if (compChoice <= 33) return "scissors"
    else if (compChoice >= 34 && compChoice <= 66) return "paper"
    else if (compChoice >= 67) return "rock"
}

function playGameScissors() {
    let finalCompChoice = compChoice();
    if (finalCompChoice === "scissors") displayWinner.innerText = "It's a draw!"
    else if (finalCompChoice === "paper") displayWinner.innerText = "You won! The computer chose paper."
    else if (finalCompChoice === "rock") displayWinner.innerText = "You lost! The computer chose rock."
    else displayWinner.innerText = "Error"
}

function playGamePaper() {
    let finalCompChoice = compChoice();
    if (finalCompChoice === "scissors") displayWinner.innerText = "You lost! The computer chose scissors."
    else if (finalCompChoice === "paper") displayWinner.innerText = "It's a draw!"
    else if (finalCompChoice === "rock") displayWinner.innerText = "You won! The computer chose rock."
    else displayWinner.innerText = "Error"
}

function playGameRock() {
    let finalCompChoice = compChoice();
    if (finalCompChoice === "scissors") displayWinner.innerText = "You won! The computer chose scissors."
    else if (finalCompChoice === "paper") displayWinner.innerText = "You lost! The computer chose paper."
    else if (finalCompChoice === "rock") displayWinner.innerText = "It's a draw!"
    else displayWinner.innerText = "Error"
}
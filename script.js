let computerScore = 0
let playerScore = 0

let choices = ["rock", "scissors", "paper"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {
    const playerSelection = event.target.value

    if (!playerSelection) {
        return
    }

    const computerSelection = getComputerChoice()
    const playerSelectionIndex = choices.indexOf(playerSelection)
    const computerSelectionIndex = choices.indexOf(computerSelection)

    if (playerSelectionIndex === computerSelectionIndex) {
        log.innerHTML += `It's a tie! You both picked ${playerSelection}!<br>`
    // } else if ((computerSelectionIndex - playerSelectionIndex + 2) % 3 === 0) {
    } else if ((playerSelectionIndex + 1) % 3 === computerSelectionIndex) {
        playerScore++
        playerScoreEl.textContent = playerScore
        log.innerHTML += `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!<br>`
    } else {
        computerScore++
        computerScoreEl.textContent = computerScore
        log.innerHTML += `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!<br>`
    }

    if (playerScore === 5) {
        log.innerHTML += `You win the game!`
        btn.removeEventListener("click", playRound)
    } else if (computerScore === 5) {
        log.innerHTML += `The computer wins the game!`
        btn.removeEventListener("click", playRound)
    }
}

function capitalizeFirstLetter (anyString) {
    return anyString.charAt(0).toUpperCase() + anyString.slice(1)
}

const btn = document.querySelector(".player-selection")
btn.addEventListener("click", playRound)

const resetBtn = document.querySelector(".reset-game")
resetBtn.addEventListener("click", resetGame)

const log = document.querySelector(".log")

const playerScoreEl = document.querySelector(".player-score")
const computerScoreEl = document.querySelector(".computer-score")

function resetGame() {
    playerScore = 0
    computerScore = 0
    playerScoreEl.textContent = playerScore
    computerScoreEl.textContent = computerScore
    log.textContent = ""
    btn.addEventListener("click", playRound)
}
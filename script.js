let computerScore = 0
let playerScore = 0

let choices = ["rock", "scissors", "paper"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    const playerSelectionIndex = choices.indexOf(playerSelection.toLowerCase())
    const computerSelectionIndex = choices.indexOf(computerSelection)

    if (playerSelectionIndex === -1) {
        return "You need to pick rock, paper or scissors!"
    }
    
    if (playerSelectionIndex === computerSelectionIndex) {
        return `It's a tie! You both picked ${playerSelection}!`
    // } else if ((computerSelectionIndex - playerSelectionIndex + 2) % 3 === 0) {
    } else if ((playerSelectionIndex + 1) % 3 === computerSelectionIndex) {
        playerScore++
        return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`
    } else {
        computerScore++
        return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`
    }
}

function capitalizeFirstLetter (anyString) {
    return anyString.charAt(0).toUpperCase() + anyString.slice(1)
}

function playGame() {
    let playerSelection
    let computerSelection
    playerScore = 0
    computerScore = 0

    for (i = 1; i <= 5; i++) {
        playerSelection = prompt("Please pick between Rock, Paper and Scissors: ", " ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === computerScore) {
        console.log(`The game is a tie (${playerScore} - ${computerScore})`)
    } else if (playerScore > computerScore) {
        console.log(`You win the game (${playerScore} - ${computerScore})`)
    } else {
        console.log(`The computer wins the game (${computerScore} - ${playerScore})`)
    }
}

playGame()
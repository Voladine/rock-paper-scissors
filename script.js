const playerSelection = ""
const computerSelection = ""
let playerScore = 0
let computerScore = 0

// generate random computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    return options[random]
}

// win/lose conditionals for one round
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Rock, Paper, or Scissors?')
    computerSelection = getComputerChoice()

        if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper' ) {
            computerScore += 1
            console.log("You Lose! Paper beats Rock")
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors' ) {
            playerScore += 1
            console.log("You Win! Rock beats Scissors")
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock' ) {
            console.log("It's a Tie!")
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock' ) {
            playerScore += 1
            console.log("You Win! Paper beats Rock")
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors' ) {
            computerScore += 1
            console.log("You Lose! Scissors beats Paper")
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper' ) {
            console.log("It's a Tie!")
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock' ) {
            computerScore += 1
            console.log("You Lose! Rock beats Scissors")
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper' ) {
            playerScore += 1
            console.log("You Win! Scissors beats Paper")
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors' ) {
            console.log("It's a Tie!")
        }
        else {
            console.log("You must enter Rock, Paper, or Scissors to play the game.")
        }
}

// game of five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log(`You won ${playerScore} to ${computerScore}!`)
    }
    else if (playerScore < computerScore) {
        console.log(`You lost ${playerScore} to ${computerScore}!`)
    }
    else {
        console.log(`You tied ${playerScore} to ${computerScore}!`)
    }
}

game()
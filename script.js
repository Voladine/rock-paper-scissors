const computerSelection = ""
const rock = document.querySelector(".rockButton")
const paper = document.querySelector(".paperButton")
const scissors = document.querySelector(".scissorsButton")
const results = document.querySelector(".results")
const winner = document.querySelector(".winner")
let playerScore = 0
let computerScore = 0
let playerScoreText = document.querySelector(".playerScoreText")
let computerScoreText = document.querySelector(".computerScoreText")

// button event listeners
rock.addEventListener("click", () => playRound('rock', computerSelection))
paper.addEventListener("click", () => playRound('paper', computerSelection))
scissors.addEventListener("click", () => playRound('scissors', computerSelection))

// generate random computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    return options[random]
}

// win/lose conditionals for one round
function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice()
    winner.textContent = ""

        if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper' ) {
            computerScore += 1
            results.textContent = "You Lose! Paper beats Rock"
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors' ) {
            playerScore += 1
            results.textContent = "You Win! Rock beats Scissors"
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock' ) {
            results.textContent = "It's a Tie!"
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock' ) {
            playerScore += 1
            results.textContent = "You Win! Paper beats Rock"
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors' ) {
            computerScore += 1
            results.textContent = "You Lose! Scissors beats Paper"
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper' ) {
            results.textContent = "It's a Tie!"
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock' ) {
            computerScore += 1
            results.textContent = "You Lose! Rock beats Scissors"
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper' ) {
            playerScore += 1
            results.textContent = "You Win! Scissors beats Paper"
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors' ) {
            results.textContent = "It's a Tie!"
        }
        else {
            results.textContent = "You must enter Rock, Paper, or Scissors to play the game."
        }

        playerScoreText.textContent = playerScore
        computerScoreText.textContent = computerScore

        if (playerScore === 5) {
            winner.textContent = `You won ${playerScore} to ${computerScore}!`
            playerScore = 0
            computerScore = 0
            playerScoreText.textContent = playerScore
            computerScoreText.textContent = computerScore
        }
        if (computerScore === 5) {
            winner.textContent = `You lost ${playerScore} to ${computerScore}!`
            playerScore = 0
            computerScore = 0
            playerScoreText.textContent = playerScore
            computerScoreText.textContent = computerScore
        }
        
}
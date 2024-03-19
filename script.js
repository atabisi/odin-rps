const plays = ["rock", "paper", "scissors"]
let playerSelection = 'paper'
let roundWinner = ''
let playerScore = 0
let computerScore = 0
let isGameOver = false

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)]
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const restart = document.querySelector('#restart')
const match = document.querySelector('#match')

rock.addEventListener('click', function () {
    playerSelection = 'rock'
    playGame()
})
paper.addEventListener('click', function () {
    playerSelection = 'paper'
    playGame()
})
scissors.addEventListener('click', function () {
    playerSelection = 'scissors'
    playGame()
})

restart.addEventListener('click', function () {
    isGameOver = false;
    playerScore = 0
    computerScore = 0
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    while (match.firstChild) {
        match.firstChild.remove()
    }
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
        console.log(`It's a tie!`)
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundWinner = "computer"
            computerScore++
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        if (computerSelection === "scissors") {
            roundWinner = "player"
            playerScore++
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            roundWinner = "computer"
            computerScore++
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        if (computerSelection === "rock") {
            roundWinner = "player"
            playerScore++
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundWinner = "computer"
            computerScore++
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        if (computerSelection === "paper") {
            roundWinner = "player"
            playerScore++
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        }
    }
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
    const newLI = document.createElement('li');
    newLI.innerText = `Player ${playerScore} (${playerSelection}) - Computer ${computerScore} (${computerSelection})`;
    match.append(newLI);
    match.lastChild.classList.add('new-li');
    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;
    }
}

function playGame() {
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    if (playerScore === 5) {
        console.log("PLAYER WINS!!!")
        const newLI = document.createElement('li');
        newLI.innerText = "PLAYER WINS!!!";
        match.append(newLI);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        match.lastChild.classList.add('plwins');
    }
    if (computerScore === 5) {
        console.log("COMPUTER WINS!!!")
        const newLI = document.createElement('li');
        newLI.innerText = "COMPUTER WINS!!!";
        match.append(newLI);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        match.lastChild.classList.add('pcwins');
    }
}





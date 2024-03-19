const plays = ["rock", "paper", "scissors"]
let playerSelection = 'paper'
let roundWinner = ''
let playerScore = 0
let computerScore = 0
let isGameOver = false

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const restart = document.querySelector('#restart')
const match = document.querySelector('#match')
const p1img = document.querySelector('#p1img')
const cpuimg = document.querySelector('#cpuimg')
const p1score = document.querySelector('#p1score')
const cpuscore = document.querySelector('#cpuscore')
const p1wins = document.querySelector('#p1wins')
const cpuwins = document.querySelector('#cpuwins')
const mathis = document.querySelector('#mathis')

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)]
}

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

mathis.addEventListener('click', function () {
    match.classList.toggle('matchhistory')
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
    p1wins.innerText = " "
    cpuwins.innerText = " "
    p1score.innerText = playerScore
    cpuscore.innerText = computerScore
    p1img.src = `img/default.png`
    cpuimg.src = `img/default.png`
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundWinner = "computer"
            computerScore++
        }
        if (computerSelection === "scissors") {
            roundWinner = "player"
            playerScore++
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            roundWinner = "computer"
            computerScore++
        }
        if (computerSelection === "rock") {
            roundWinner = "player"
            playerScore++
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundWinner = "computer"
            computerScore++
        }
        if (computerSelection === "paper") {
            roundWinner = "player"
            playerScore++
        }
    }
    p1score.innerText = playerScore
    cpuscore.innerText = computerScore
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
    p1img.src = `img/${playerSelection}.png`
    cpuimg.src = `img/${computerSelection}.png`
    if (playerScore === 5) {
        p1wins.classList.add('plwins')
        p1wins.innerText = "You win!"
        // const newLI = document.createElement('li');
        // newLI.innerText = "PLAYER WINS!!!";
        // match.append(newLI);
        // match.lastChild.classList.add('plwins');
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if (computerScore === 5) {
        cpuwins.classList.add('pcwins')
        cpuwins.innerText = "Computer wins"
        // const newLI = document.createElement('li');
        // newLI.innerText = "COMPUTER WINS!!!";
        // match.append(newLI);
        // match.lastChild.classList.add('pcwins');
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}





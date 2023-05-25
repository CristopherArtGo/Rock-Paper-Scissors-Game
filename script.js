let computerScore = 0;
let playerScore = 0;
let computerNum = 0;
let playerSelection;
let computerSelection; 
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let roundResult = document.getElementById('roundResult');
let computerScoreDisplay = document.getElementById('computerScore');
let playerScoreDisplay = document.getElementById('playerScore');
let winner = document.getElementById('winner');
let retry;

function pickRock() {
    playerSelection = "Rock";
    playerChoice.textContent = `You have selected ${playerSelection}.`
    return console.log(playRound(playerSelection, computerSelection));
}

function pickPaper() {
    playerSelection = "Paper";
    playerChoice.textContent = `You have selected ${playerSelection}.`
    return console.log(playRound(playerSelection, computerSelection));
}

function pickScissors() {
    playerSelection = "Scissors";
    playerChoice.textContent = `You have selected ${playerSelection}.`
    return console.log(playRound(playerSelection, computerSelection));
}

function getComputerChoice() {
    computerNum = Math.floor(Math.random() * 3) + 1;
    console.log(computerNum);
    switch(computerNum) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
            break;
    }
    return computerSelection;
}

const rock = document.getElementById("rockButton");
rock.addEventListener('click', pickRock);

const paper = document.getElementById("paperButton");
paper.addEventListener('click', pickPaper);

const scissors = document.getElementById("scissorsButton");
scissors.addEventListener('click', pickScissors);

function playRound (player, computer) {
    if (computerScore > 4 || playerScore > 4)
    {
        return;
    }
    getComputerChoice();
    computerChoice.textContent = `Computer has selected ${computerSelection}.`
    let playerNum;
    switch(player) {
        case "Paper":
            playerNum = 2;
            break;
        case "Scissors":
            playerNum = 4;
            break;
        case "Rock":
            playerNum = 6;
    }

    if (playerSelection === computerSelection)
    {
        roundResult.textContent = `It's a tie, both selected ${computerSelection}`;
    }
    else if (playerNum/computerNum == 2)
    {
        playerScore++;
        roundResult.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
        playerScoreDisplay.textContent = `Player = ${playerScore}`;
        checkScore();
    }
    else {
        computerScore++;
        roundResult.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
        computerScoreDisplay.textContent = `Computer = ${computerScore}`;
        checkScore();
    }
}

function checkScore ()
{
    if (computerScore > playerScore && (computerScore > 4 || playerScore > 4))
    {
        winner.textContent = "You lose, Computer wins!";
        retry = document.createElement('button');
        retry.textContent = "Retry";
        winner.appendChild(retry);
        retry.addEventListener('click', reset);
        return;
    }
    else if (playerScore > computerScore && (computerScore > 4 || playerScore > 4))
    {
        winner.textContent = "You win!";
        retry = document.createElement('button');
        retry.textContent = "Retry";
        winner.appendChild(retry);
        retry.addEventListener('click', reset);
        return;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = `Computer = ${computerScore}`;
    playerScoreDisplay.textContent = `Player = ${playerScore}`;
    winner.removeChild(retry);
    winner.textContent = "";
    computerChoice.textContent = "";
    playerChoice.textContent = "";
    roundResult.textContent = "";
    return;
}


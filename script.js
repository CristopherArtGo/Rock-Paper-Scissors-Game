let computerScore = 0;
let playerScore = 0;
let computerNum = 0;
let playerSelection;
let computerSelection; 
do {
    //Asiking for player's input
    playerSelection = prompt("Please type your selection, rock-paper-scissors.");

    //Capitalizing the first letter only for uniformity of string values
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection[0].toUpperCase();
    playerSelection = firstLetter + playerSelection.slice(1);

    //Checking the validity of the player's choice
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")
    {
        console.log(`You have selected ${playerSelection}`);
        console.log(`Rock! Paper! Scissors! Shoot!`);

        //Assigning random number for the Computer to choose
        computerNum = Math.floor(Math.random() * 3) + 1;
        console.log(computerNum);
        
        //Assigning a choice based on the random number from 1-3
        function getComputerChoice() {
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
        getComputerChoice();
        
        console.log("Computer has selected " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));

        function playRound (player, computer) {
            let playerNum;
            switch(playerSelection) {
                case "Paper":
                    playerNum = 2;
                    break;
                case "Scissors":
                    playerNum = 4;
                    break;
                case "Rock":
                    playerNum = 6;
            }
        
            if (player === computer)
            {
                return `It's a tie, both selected ${computerSelection}`;
            }
            else if (playerNum/computerNum == 2)
            {
                playerScore++;
                return `You win, ${playerSelection} beats ${computerSelection}!`;
            }
            else {
                computerScore++;
                return `You lose, ${computerSelection} beats ${playerSelection}!`;
            }
        }
    }
    else {
        console.log("Invalid selection, please select rock, paper or scissors.")
    }
    console.log(`Player = ${playerScore} Computer = ${computerScore}`);
}
while (computerScore <= 4 && playerScore <= 4);
if (computerScore > playerScore)
{
    console.log("You lose, Computer wins!");
}
else {
    console.log("You win!");
}


/* Create function getComputerChoice
    -Function will randomly return 'Rock', 'Paper'
     or 'Scissors
*/

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

/* Create function that plays a single round of Rock
    Paper Scissors
   Function takes two parameters
    - playerSelection
    - computerSelection
   Function returns winner of the round
    - "You lose! Paper beats Rock"
    - "You win! Rock beats Scissors"
   Make selections case-insensitive */

function playRound(playerSelection, computerSelection){
    console.log("Your choice is: " + playerSelection);
    console.log("The computer's choice is: "+ computerSelection);
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    switch (playerChoice) {
        case "scissors":
            if (computerChoice === "scissors") {
                return("It's a tie!")
            } else if (computerChoice === "rock") {
                return("You lose! Rock beats Scissors.")
            } else if (computerChoice === "paper") {
                return("You win! Scissors beats Paper.")
            }
            break;
        case "rock":
            if (computerChoice === "rock") {
                return("It's a tie!")
            } else if (computerChoice === "paper") {
                return("You lose! Paper beats Rock.")
            } else if (computerChoice === "scissors") {
                return("You win! Rock beats Scissors.")
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                return("It's a tie!")
            } else if (computerChoice === "scissors") {
                return("You lose! Scissors beats Paper.")
            } else if (computerChoice === "rock") {
                return("You win! Paper beats Rock.")
            }
            break;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter your choice");
        let computerChoice = getComputerChoice();

        let roundResult = (playRound(playerChoice, computerChoice));
        console.log(roundResult)

        if (roundResult.startsWith("You win")) {
            playerWins ++;
        }
        else if (roundResult.startsWith("You lose")) {
            computerWins ++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You beat the computer: " + playerWins + " to " + computerWins);
    }
    else if (playerWins < computerWins) {
        console.log("You lost to the computer: " + playerWins + " to " + computerWins);
    }
    else {
        console.log("Its a tie:" + playerWins + " to " + computerWins);
    }
}

game();

/* store playround into result
if result startswith "You win" win ++
if result starts with You lose, computer win ++
if win > computer win p */
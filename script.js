/* Create function getComputerChoice
    -Function will randomly return 'Rock', 'Paper'
     or 'Scissors
*/

function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);

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
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase();
    
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

var playerChoice = prompt("Enter your choice");
var computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));

/* change console.log statements to return statements
    later, this is a breakpoint */
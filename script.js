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

function rockPaperScissors(playerSelection, computerSelection){
    console.log("Your choice is: " + playerSelection);
    console.log("The computer's choice is: "+ computerSelection);
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase();
    
    switch (playerChoice) {
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("It's a tie!")
            } else if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.")
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.")
            }
            break;
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's a tie!")
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.")
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.")
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("It's a tie!")
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper.")
            } else if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.")
            }
            break;
    }
}   

var playerChoice = prompt("Enter your choice");
var computerChoice = getComputerChoice();

rockPaperScissors(playerChoice, computerChoice);

/* change console.log statements to return statements
    later, this is a breakpoint */
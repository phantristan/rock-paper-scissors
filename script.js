/* Create function getComputerChoice
    -Function will randomly return 'Rock', 'Paper'
     or 'Scissors
*/

function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
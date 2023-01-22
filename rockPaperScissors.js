const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

if (playerTurn == "r"  || playerTurn == "Rock") {
    playerTurn = rock;
} else if (playerTurn == "p"  || playerTurn == "Paper") {
    playerTurn = paper;
} else if (playerTurn == "s"  || playerTurn == "Scissors") {
    playerTurn = scissors;
} else {
    console.log("Invalid Input. Try again...");
}

let computerRandomNumber = Math.floor(Math.random() *3 ) + 1;

switch (computerRandomNumber) {
    case 1:
        computerMove = Rock;
        break;
    case 2:
        omputerMove = Paper;
        break;
    case 1:
        computerMove = Scissors;
        break;
}

console.log(`The computer chooses ${computerTurn}`);

if((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
    console.log("You win!");
} else if () {
    console.log("You lose!"); 
} else {
    console.log("This game was a draw");
}

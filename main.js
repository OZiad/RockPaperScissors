let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 33)
        return "Rock";
    if (randomNum < 66)
        return "Scissors";
    else
        return "Paper";
}

let playerChoice = "roCK";
let winnerMsg = "You Win!";
let loserMsg = "You Lose!";

let startGame = (playerSelection, ComputerSelection) => {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == ComputerSelection)
        return "it's a tie!";
    else if (playerSelection == "Rock") {
        if (ComputerSelection == "Paper")
            return loserMsg;
        else
            return winnerMsg;
    }
    else if (playerSelection == "Paper") {
        if (ComputerSelection == "Scissors")
            return loserMsg;
        else
            return winnerMsg;
    }
    else if (playerSelection == "Scissors") {
        if (ComputerSelection == "Rock")
            return loserMsg;
        else
            return winnerMsg;
    }
}
let game = () => {
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Enter rock paper or scissors");
        console.log(choice);
        if (startGame(choice, getComputerChoice()) == winnerMsg)
            playerWins++;
    }
    if (playerWins >= 3)
        return "Player Wins!";
    else
        return "Computer Wins!"
}
console.log(game());
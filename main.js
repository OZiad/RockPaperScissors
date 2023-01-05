let winnerMsg = "You Win!";
let loserMsg = "You Lose!";
let tieMsg = "it's a tie!";
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.result');
const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click', () => (playRound('rock', getComputerChoice())));
paper.addEventListener('click', () => (playRound('paper', getComputerChoice())));
scissors.addEventListener('click', () => (playRound('scissors', getComputerChoice())));


const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 33)
        return "Rock";
    if (randomNum < 66)
        return "Scissors";
    else
        return "Paper";
}

const playRound = (playerSelection, ComputerSelection) => {
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == ComputerSelection) {
        result.textContent = tieMsg;
        return tieMsg;
    }
    else if (playerSelection == "Rock") {
        if (ComputerSelection == "Paper") {
            roundLose();
        } else {
            roundWin();
        }
    }
    else if (playerSelection == "Paper") {
        if (ComputerSelection == "Scissors") {
            roundLose();
        }
        else {
            roundWin();
        }
    }
    else if (playerSelection == "Scissors") {
        if (ComputerSelection == "Rock") {
            roundLose();
        }
        else {
        roundWin();
        }
    }
    if(playerScore == 5){
        disableButtons();
        result.textContent = "CONGRATS! YOU WON!" + `\nPlayer Score: ${playerScore}, Computer Score ${computerScore}`;
        
    }
    else if(computerScore == 5){
        disableButtons();
        result.textContent = "YOU LOST HAHA!" + `\nPlayer Score: ${playerScore}, Computer Score ${computerScore}`;
    }
}

function roundWin(){
    result.textContent = winnerMsg;
    playerScore++;
    return winnerMsg;
}

function roundLose(){
    result.textContent = loserMsg;
    computerScore++;
    return loserMsg;
}

function disableButtons(){
    buttons.forEach(button => button.disabled=true);
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => button.disabled=false);
}

// const game = (playerChoice) => {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5 && playerScore < 3 && computerScore < 3; i++) {
        
//         if (playRound(playerChoice, getComputerChoice()) == winnerMsg)
//             playerScore++;
//         else
//             computerScore++;
//     }
//     if (playerScore >= 3)
//         result.textContent = winnerMsg + ` Player Score: ${playerScore}. Computer Score: ${computerScore}`;
//     else
//         result.textContent = loserMsg + ` Player Score: ${playerScore}. Computer Score: ${computerScore}`;
// }
// console.log(game());
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randNumber];
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
   let player = playerSelection.toUpperCase();
   let computer = computerSelection.toUpperCase();
   switch (computer) {
    case "ROCK": {
        switch (player) {
            case "ROCK": return "Tie! Rock ties rock";
            case "PAPER": return "You Win! Paper beats rock";
            case "SCISSORS": return "You Lose! Scissor loses to rock";
        }
    }
    case "SCISSORS": {
        switch (player) {
            case "ROCK": return "You Win! Rock beats scissors";
            case "PAPER": return "You Lose! Paper loses to scissors";
            case "SCISSORS": return "Tie! Scissor ties scissors";
        }
    }
    case "PAPER": {
        switch (player) {
            case "ROCK": return "You Lose! Rock loses to paper";
            case "PAPER": return "Tie! Paper ties paper";
            case "SCISSORS": return "You Win! Scissor beats paper";
        }
    }

   }
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose rock, paper, or scissors");
        let roundResults = playRound(playerChoice, getComputerChoice());
        console.log(roundResults);
        if (roundResults.includes("Win")) {
            playerWins++;
        }
        else if (roundResults.includes("Lose")) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("Game Over! You win!");
    }
    else if (computerWins > playerWins) {
        console.log("Game Over! You lost.");
    }
    else {
        console.log("Game Over! Tie Game...");
    }
}

game();
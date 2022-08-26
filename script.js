const body = document.querySelector('body');

const prompt = document.createElement('div');
prompt.textContent = "Choose rock, paper, or scissors";
body.appendChild(prompt);


const rockButton = document.createElement('button');
rockButton.classList.add('rock');
rockButton.textContent = "Rock";
body.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.textContent = "Paper";
body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.textContent = "Scissors";
body.appendChild(scissorsButton);


let playerWins = 0;
let computerWins = 0;

const computerChose = document.createElement('div');
body.appendChild(computerChose);

const thisRound = document.createElement('div');
body.appendChild(thisRound);

const runningScore = document.createElement('div');
runningScore.textContent = ("Your wins: " + playerWins + ", Computer Wins: " + computerWins);
body.appendChild(runningScore);

const gameOver = document.createElement('div');
body.appendChild(gameOver);



let roundResults = "";


rockButton.addEventListener('click', function () {
    roundResults = playRound("rock", getComputerChoice());
    thisRound.textContent = roundResults;
    scoreTallyer(roundResults);
})  
paperButton.addEventListener('click', function () {
    roundResults = playRound("paper", getComputerChoice());
    thisRound.textContent = roundResults;
    scoreTallyer(roundResults);
})
scissorsButton.addEventListener('click', function () {
    roundResults = playRound("scissors", getComputerChoice());
    thisRound.textContent = roundResults; 
    scoreTallyer(roundResults);
})



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randNumber];
    computerChose.textContent = ("Computer Chose: " + computerChoice);
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

function scoreTallyer(roundResults) {
    if (roundResults.includes("Win")) {
        playerWins++;
    }
    else if (roundResults.includes("Lose")) {
        computerWins++;
    }
    
    runningScore.textContent = ("Your wins: " + playerWins + ", Computer Wins: " + computerWins);
    
    if (playerWins === 5) {
        gameOver.textContent = "Game Over! You win!";
    }
    else if (computerWins === 5) {
        gameOver.textContent = "Game Over! You lost!";
    }
}
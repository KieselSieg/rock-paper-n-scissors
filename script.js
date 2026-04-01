const run_score = document.querySelector("div");
const results = document.querySelector(".result");
const btns = document.querySelectorAll("button");
const whowon = document.querySelector(".whowon");

    
function getComputerChoice() {
    let x = Math.random();
    if (x <= (1/3)) {
            return "Rock";
        }  else if (x <= (2/3)){
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    btns.forEach(btn => {
        btn.addEventListener("click", () => playRound(btn.textContent.toLowerCase(), getComputerChoice()))
    });

    function test() {
    if (humanScore == 5) {
        whowon.textContent = `The Human has won the game by a score of ${humanScore}:${computerScore}`;
        return true
    }
        
    else if (computerScore == 5) {
        whowon.textContent = `The Computer has won the game by a score of ${computerScore}:${humanScore}`;
        return true
    }
}

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice.toLowerCase()) {
            results.textContent = 'Draw!';
            

        } else if (humanChoice == 'paper' && computerChoice == 'Rock') {
            results.textContent = 'Human wins! Paper beats Rock.';
            humanScore++;
            
        } else if ((humanChoice == 'paper' && computerChoice == 'Scissors')) {
            results.textContent = 'Human loses! Paper gets beaten Scissors.';
            computerScore++;

        } else if (humanChoice == 'scissors' && computerChoice == 'Rock') {
            results.textContent = 'Human loses! Scissors gets beaten by Rock.';
            computerScore++;
            
        } else if (humanChoice == 'scissors' && computerChoice == 'Paper') {
            results.textContent = 'Human wins! Scissors beats Paper.';
            humanScore++;

        } else if (humanChoice == 'rock' && computerChoice == 'Scissors') {
            results.textContent = 'Human wins! Rock beats Scissors.';
            humanScore++;
            
        } else if (humanChoice == 'rock' && computerChoice == 'Paper') {
            results.textContent = 'Human loses! Rock gets beaten by Paper.';
            computerScore++;
        }
        run_score.textContent = `--(Human) ${humanScore}:${computerScore} (Computer)--`;

        test()
    } 

}

playGame();
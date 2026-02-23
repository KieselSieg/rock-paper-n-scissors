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

function getHumanChoice () {
    y = prompt("Rock, paper or scissors, human? ")
    return y
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice.toLowerCase()) {
            console.log('Draw!');
            

        } else if (humanChoice == 'paper' && computerChoice == 'Rock') {
            console.log('Human wins! Paper beats Rock.');
            humanScore++;
            
        } else if ((humanChoice == 'paper' && computerChoice == 'Scissors')) {
            console.log('Human loses! Paper gets beaten Scissors.');
            computerScore++;

        } else if (humanChoice == 'scissors' && computerChoice == 'Rock') {
            console.log('Human loses! Scissors gets beaten by Rock.');
            computerScore++;
            
        } else if (humanChoice == 'scissors' && computerChoice == 'Paper') {
            console.log('Human wins! Scisssors beats Paper.');
            humanScore++;

        } else if (humanChoice == 'rock' && computerChoice == 'Scissors') {
            console.log('Human wins! Rock beats Scissors.');
            humanScore++;
            
        } else if (humanChoice == 'rock' && computerChoice == 'Paper') {
            console.log('Human loses! Rock gets beaten by Paper.');
            computerScore++;
        }
    } 

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`--Results: (Human) ${humanScore}:${computerScore} (Computer)--`)
}

playGame();
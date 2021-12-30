//function to return randomized computer choice
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3) + 1; //random number between 1, 2 and 3
    let computerPlay = undefined;

    if (randInt == 1) computerPlay = "rock";
    else if (randInt == 2) computerPlay = "paper";
    else if (randInt == 3) computerPlay = "scissors";
    return computerPlay;
}

//function to decide the outcome of each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == null || playerSelection == undefined) return "Exit"; //checking if player selection is null or undefined

    playerSelection = playerSelection.toLowerCase(); //conversion of all types of inputs to lowercase

    if (playerSelection == computerSelection) return "Round Draw!";

    else if (playerSelection == "rock" && computerSelection == "paper") return "You Lose! Paper defeats Rock!";

    else if (playerSelection == "rock" && computerSelection == "scissors") return "You Win! Rock defeats Scissors!";

    else if (playerSelection == "paper" && computerSelection == "rock") return "You Win! Paper defeats Rock!";

    else if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose! Scissors defeats Paper";

    else if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose! Rock defeat Scissors"

    else if (playerSelection == "scissors" && computerSelection == "paper") return "You Win! Scissors defeat Paper";

    else return "Please enter a valid move!";
}

//main function which loops each round five times
function game() {
    //initializing scores to zero
    let playerScore = 0; 
    let computerScore = 0;

    //initializing round number to 1
    let roundNumber = 1;

    //loop until round number is not equal to six
    while (roundNumber != 6) {
        //prompt for user input
        const playerSelection = window.prompt(`Round ${roundNumber}

Rock, Paper, Scissors?`);

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if (result.startsWith("You Win!")) playerScore++, roundNumber++;
        else if (result.startsWith("You Lose!")) computerScore++, roundNumber++;
        else if (result.startsWith("Round Draw!")) roundNumber++;
        else if (result == "Exit") break;
        else roundNumber = roundNumber;

        //displays scores after each round
        window.alert(`${result}

Your Score: ${playerScore} 
Computer Score: ${computerScore}`);
    }

    //displays result of match
    if (playerScore > computerScore) window.alert(`You won this match!

Score after all rounds:
Your Score: ${playerScore} 
Computer Score: ${computerScore}`)
        
        
    else if (computerScore > playerScore) window.alert(`You lost this match!

Score after all rounds:
Your Score: ${playerScore} 
Computer Score: ${computerScore}`)
        
        
    else window.alert(`Match Drawn!

Score after all rounds:
Your Score: ${playerScore} 
Computer Score: ${computerScore}`)
}

game();

function computerPlay() {
    const randInt = Math.floor(Math.random() * 3) + 1;
    let computerPlay = undefined;

    if (randInt == 1) computerPlay = "Rock";
    else if (randInt == 2) computerPlay = "Paper";
    else if (randInt == 3) computerPlay = "Scissors";
    return computerPlay;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock") return "Round Draw";

    else if (playerSelection == "rock" && computerSelection == "paper") return "You Lose! Paper defeats Rock!";

    else if (playerSelection == "rock" && computerSelection == "scissors") return "You Win! Rock defeats Scissors!";

    else if (playerSelection == "paper" && computerSelection == "paper") return "Round Draw";

    else if (playerSelection == "paper" && computerSelection == "rock") return "You Win! Paper defeats Rock!";

    else if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose! Scissors defeats Paper";

    else if (playerSelection == "scissors" && computerSelection == "scissors") return "Round Draw";

    else if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose! Rock defeat Scissors"

    else if (playerSelection == "scissors" && computerSelection == "paper") return "You Win! Scissors defeat Paper";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt(`Round ${i + 1}

Rock, Paper, Scissors?`);
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result.slice(0, 8) == "You Win!") playerScore++;
        else if (result.slice(0, 9) == "You Lose!") computerScore++;
        window.alert(computerSelection);
        window.alert(`${result}

Your Score: ${playerScore}
Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) window.alert("You Won this match!")
    else if (computerScore > playerScore) window.alert("You lost this match!")

    else window.alert("Match Drawn")
}

game();
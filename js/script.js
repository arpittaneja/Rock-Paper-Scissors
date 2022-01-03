//function to return randomized computer choice
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3); //random number between 1, 2 and 3

    let choiceArray = ["rock", "paper", "scissors"]; //array of all possible choices

    let computerPlay = choiceArray[randInt]; //generate randomized element from the array
    return computerPlay;
}

//function to calculate and return the outcome of each case
function playRound(playerSelection, computerSelection) {
    // if (playerSelection == null || playerSelection == undefined) return "Exit"; //checking if player selection is null or undefined

    // playerSelection = playerSelection.toLowerCase(); //conversion of all types of inputs to lowercase

    if (playerSelection == computerSelection) return "Round Draw!";
    else if (playerSelection == "rock" && computerSelection == "paper") return "You Lose! Paper defeats Rock!";
    else if (playerSelection == "rock" && computerSelection == "scissors") return "You Win! Rock defeats Scissors!";
    else if (playerSelection == "paper" && computerSelection == "rock") return "You Win! Paper defeats Rock!";
    else if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose! Scissors defeats Paper";
    else if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose! Rock defeat Scissors"
    else if (playerSelection == "scissors" && computerSelection == "paper") return "You Win! Scissors defeat Paper";
    else return "Please enter a valid move!";
}

//takes in value of playerSelection and updates the document accordingly
function updatePage(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    const resultPanel = document.querySelector(".result-panel");
    resultPanel.innerHTML = result;

    if (result.startsWith("You Win!")) {
        playerScore++;
        roundNumber++;

        const playerCounter = document.querySelector("div .player-score .player-score-box");
        playerCounter.innerHTML = playerScore;
        console.log(result);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        }

    else if (result.startsWith("You Lose!")) {
        computerScore++;
        roundNumber++;

        const computerCounter = document.querySelector("div .computer-score .computer-score-box");
        computerCounter.innerHTML = computerScore;
        console.log(result);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    else if (result.startsWith("Round Draw!")) {
        console.log(result);
        roundNumber++;
    }
}

//driver code
//initializing both scores to zero
let playerScore = 0;
let computerScore = 0;

//initializing round number to 1
let roundNumber = 1;

//selects an array of all buttons
const buttons = Array.from(document.querySelectorAll(".selection"));

//applies eventListener to all the buttons
buttons.forEach(button => button.addEventListener("click", function (button) {
    const playerSelection = button.target.id;
    updatePage(playerSelection);
}));

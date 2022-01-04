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

//takes in value of playerSelection and updates the whole page accordingly
function updatePage(playerSelection) {

    //increments round number per click
    roundNumber++;


    startText.style.fontSize = "45px";
    startText.textContent = `Round: ${roundNumber}`;

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    // console.log("Player Selection: " + playerSelection);
    // console.log("Computer Selection: " + computerSelection);

    //updates result to the resut element
    resultPanel.textContent = result;

    if (result.startsWith("You Win!")) {
        playerScore++;
        playerCounter.textContent = playerScore;
        // console.log(result);
        // console.log("Player Score: " + playerScore);
        // console.log("Computer Score: " + computerScore);
    }

    else if (result.startsWith("You Lose!")) {
        computerScore++;
        computerCounter.textContent = computerScore;
        // console.log(result);
        // console.log("Player Score: " + playerScore);
        // console.log("Computer Score: " + computerScore);
    }

    else if (result.startsWith("Round Draw!")) {
        console.log(result);
    }

    if (playerScore == 5 || computerScore == 5) {
        // console.log("stop");
        disableSelectionButtons();
        startText.style.display = "none";
        playAgain.style.display = "block";

        if (playerScore > computerScore) {
            resultPanel.textContent = "You Win This Match";
        }
        else {
            resultPanel.textContent = "You Lose This Match";
        }
    }
}

//disables all the selection buttons when any score reaches 5 
function disableSelectionButtons() {
    for (button of buttons) {
        button.disabled = true;
    }
}

//updates the page accordingly when play again button is pressed
function anotherGame() {
    //reinitializes both scores to zero
    playerScore = computerScore = 0;
    roundNumber = 1;
    playAgain.style.display = "none";
    startText.style.display = "block";
    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;
    startText.textContent = `Round: ${roundNumber}`;
    resultPanel.textContent = "";
    enableSelectionButtons();
}

//enables all selection buttons when new game is started
function enableSelectionButtons() {
    for (button of buttons) {
        button.disabled = false;
    }
}


//driver code
//initializing both scores to zero
let playerScore = 0;
let computerScore = 0;

//initializing round number to 0
let roundNumber = 0;

//selects an array of all buttons
const buttons = Array.from(document.querySelectorAll(".selection"));

//selects the element which displays the result
const resultPanel = document.querySelector(".result p");

//selects the element that displays both scores
const playerCounter = document.querySelector("div .player-score .player-score-number");
const computerCounter = document.querySelector("div .computer-score .computer-score-number");

//selects the element which displays start text and round number
const startText = document.querySelector(".start-text");

//applies eventListener to all the selection buttons
buttons.forEach(button => button.addEventListener("click", function (button) {
    const playerSelection = button.target.id;
    updatePage(playerSelection);
}));

//applies eventListener to start again button
const playAgain = document.querySelector('.again .play-again');
playAgain.addEventListener('click', anotherGame);



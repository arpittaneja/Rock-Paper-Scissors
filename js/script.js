//function to return randomized computer choice
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3);

    let choiceArray = ["rock", "paper", "scissors"];

    let computerPlay = choiceArray[randInt]; //generate randomized element from the array
    return computerPlay;
}

//function to calculate and return the outcome of each case
function playRound(playerSelection, computerSelection) {
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

    roundNumber++;

    startText.style.fontSize = "45px";
    startText.textContent = `Round: ${roundNumber}`;

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    //updates result to the resut element
    resultPanel.textContent = result;

    if (result.startsWith("You Win!")) {
        playerScore++;
        playerCounter.textContent = playerScore;

    }

    else if (result.startsWith("You Lose!")) {
        computerScore++;
        computerCounter.textContent = computerScore;

    }


    if (playerScore == 5 || computerScore == 5) {
        disableSelectionButtons();
        startText.style.display = "none";
        playAgain.style.display = "block";

        if (playerScore > computerScore) {
            resultPanel.textContent = "You Win This Match";
            const winAudio = document.querySelector(".win");
            winAudio.play();
        }
        else {
            resultPanel.textContent = "You Lose This Match";
            const loseAudio = document.querySelector(".lose");
            loseAudio.play();
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
let playerScore = 0;
let computerScore = 0;
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
    if (playerSelection == "rock") {
        const rockAudio = document.querySelector(".rock");
        rockAudio.play();
    }

    else if (playerSelection === "paper") {
        const paperAudio = document.querySelector(".paper");
        paperAudio.play();
    }
    else {
        const scissorsAudio = document.querySelector(".scissors");
        scissorsAudio.play();
    }
    updatePage(playerSelection);
}));

//applies eventListener to start again button
const playAgain = document.querySelector('.again .play-again');
playAgain.addEventListener('click', anotherGame);



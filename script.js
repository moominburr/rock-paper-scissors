// Variables
const displayH2 = document.querySelector(".displayString");
const runningTotalDisplay = document.querySelector(".running-total");
const btns = document.querySelectorAll(".btn");
const playerTotalP = document.querySelector("#player-total");
const computerTotalP = document.querySelector("#computer-total");
const popUp = document.querySelector(".popup");
const resetBtn = document.querySelector("#reset");
const rockIcon = document.querySelector(".hand-rock");
const paperIcon = document.querySelector(".hand-paper");
const scissorsIcon = document.querySelector(".hand-scissors");
let playerSelection;
let computerSelection;
let playerTotal = 0;
let computerTotal = 0;
let noWinner = true;
let play;
let resultString;
// Event listeners
btns.forEach((btn) => btn.addEventListener("click", updateGame));
playerTotalP.addEventListener("transitionend", removePink);
computerTotalP.addEventListener("transitionend", removePink);
rockIcon.addEventListener("transitionend", removePink);
paperIcon.addEventListener("transitionend", removePink);
scissorsIcon.addEventListener("transitionend", removePink);
//Functions

function updateGame(e) {
  playerSelection = e.target.attributes[0].value;
  computerSelection = computerPlay();
  playRound(computerSelection, playerSelection);
  displayH2.innerHTML = resultString;
  if (resultString.includes("Winner")) {
    playerTotal++;
    playerTotalP.classList.add("pink");
  } else if (resultString.includes("Loser")) {
    computerTotal++;
    computerTotalP.classList.add("pink");
  }
  playerTotalP.textContent = playerTotal;
  computerTotalP.textContent = computerTotal;
  if (playerTotal === 5 || computerTotal === 5) {
    const winnerString = document.querySelector(".winnerString");
    const winnerDetails = document.querySelector(".winnerDetails");
    if (playerTotal > computerTotal) {
      winnerString.textContent = "Winner!";
    } else {
      winnerString.textContent = "Loser!";
    }
    winnerDetails.textContent = `You won ${playerTotal} and the computer won ${computerTotal}.`;
    popUp.classList.add("active");
    resetBtn.addEventListener("click", () => resetGame());
  }
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    play = "rock";
  } else if (randomNumber === 2) {
    play = "paper";
  } else {
    play = "scissors";
  }
  return play;
}

function playRound(computerSelection, playerSelection) {
  let playerPlay = playerSelection.toLowerCase();
  let computerPlay = computerSelection.toLowerCase();
  if (computerPlay != playerPlay) {
    if (computerPlay === "rock" && playerPlay === "scissors") {
      resultString = `<span>Loser!</span> Rock beats scissors.`;
      rockIcon.classList.add("pink");
    } else if (computerPlay === "paper" && playerPlay === "rock") {
      resultString = `<span>Loser!</span> Paper beats rock.`;
      paperIcon.classList.add("pink");
    } else if (computerPlay === "scissors" && playerPlay === "paper") {
      resultString = `<span>Loser!</span> Scissors beat paper.`;
      scissorsIcon.classList.add("pink");
    } else if (computerPlay === "rock" && playerPlay === "paper") {
      resultString = `<span>Winner!</span> Paper beats rock.`;
      paperIcon.classList.add("pink");
    } else if (computerPlay === "paper" && playerPlay === "scissors") {
      resultString = `<span>Winner!</span> Scissors beat paper.`;
      scissorsIcon.classList.add("pink");
    } else {
      resultString = `<span>Winner!</span> Rock beats scissors!`;
      rockIcon.classList.add("pink");
    }
  } else {
    resultString = `It's a draw - ${computerPlay} and ${playerPlay}.`;
    if (computerPlay === "rock") {
      rockIcon.classList.add("pink");
    } else if (computerPlay === "paper") {
      paperIcon.classList.add("pink");
    } else {
      scissorsIcon.classList.add("pink");
    }
  }
  return resultString;
}
function resetGame() {
  popUp.classList.remove("active");
  playerTotal = 0;
  computerTotal = 0;
  playerTotalP.textContent = playerTotal;
  computerTotalP.textContent = computerTotal;
  displayH2.innerHTML = "";
}
function removePink(e) {
  e.target.classList.remove("pink");
}

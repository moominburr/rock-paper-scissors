let play;
let resultString;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    play = "Rock";
  } else if (randomNumber === 2) {
    play = "Paper";
  } else {
    play = "Scissors";
  }
  return play;
}

function playRound(computerSelection, playerSelection) {
  let playerPlay = playerSelection.toLowerCase();
  let computerPlay = computerSelection.toLowerCase();
  if (computerPlay != playerPlay) {
    if (computerPlay === "rock" && playerPlay === "scissors") {
      resultString = `You lose! Rock beats scissors.`;
    } else if (computerPlay === "paper" && playerPlay === "rock") {
      resultString = `You lose! Paper beats rock.`;
    } else if (computerPlay === "scissors" && playerPlay === "paper") {
      resultString = `You lose! Scissors beat paper.`;
    } else if (computerPlay === "rock" && playerPlay === "paper") {
      resultString = `You win! Paper beats rock.`;
    } else if (computerPlay === "paper" && playerPlay === "scissors") {
      resultString = `You win! Scissors beat paper.`;
    } else {
      resultString = `You win! Rock beats scissors!`;
    }
  } else {
    resultString = `It's a draw - ${computerPlay} and ${playerPlay}.`;
  }
  return resultString;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let i = 0;

  
    let playerSelection = prompt("Select rock, paper or scissors: ").toLowerCase();
    let isNotVaild = true;
    while (isNotVaild) {
      if (
        playerSelection != "rock" &&
        playerSelection != "paper" &&
        playerSelection != "scissors"
      ) {
        alert("Invalid choice, choose again.");
        playerSelection = prompt("Select rock, paper or scissors: ").toLowerCase();
        isNotVaild = true;
      } else {
        isNotVaild = false;
      }
    }
    let computerSelection = computerPlay();
    let round = playRound(computerSelection, playerSelection);
    console.log(round);
    if (round.includes("You win")) {
      playerScore++;
    } else if (round.includes("You lose")) {
      computerScore++;
    }

  let winner;
  if (playerScore < computerScore) {
    winner = "the computer";
  } else if (playerScore > computerScore) {
    winner = "you";
  }
  console.log(
    `You won ${playerScore} games, the computer won ${computerScore}. ${
      winner ? `The winner is ${winner}.` : ""
    }`
  );
}

//game();

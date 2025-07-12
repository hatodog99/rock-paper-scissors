function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice() {
  const userInput = prompt("Your move (Rock, Paper, Scissors): ").trim().toLowerCase();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

// scores
let humanScore = 0;
let computerScore = 0;

// a round of the game
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "Rock":
      if (computerChoice == "Paper") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
      } else if (computerChoice == "Scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
      } else {
        console.log("It's a draw!");
      }
      break;

    case "Paper":
      if (computerChoice == "Scissors") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
      } else if (computerChoice == "Rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
      } else {
        console.log("It's a draw!");
      }
      break;

    case "Scissors":
      if (computerChoice == "Rock") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
      } else if (computerChoice == "Paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
      } else {
        console.log("It's a draw!");
      }
      break;
  }

  // print scores
  console.log("Your score: " + humanScore);
  console.log("Computer's score: " + computerScore);
  console.log(" ");
}

// play a game consisting a certain amount of rounds
function playGame(amountOfRounds) {
  for (let i = 0; i < amountOfRounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}
// play the game,
playGame(5);

// then show result
if (humanScore > computerScore) {
  console.log("🏆 You won the game!");
} else if (humanScore < computerScore) {
  console.log("💻 The computer wins the game.");
} else {
  console.log("🤝 It's a draw overall.");
}

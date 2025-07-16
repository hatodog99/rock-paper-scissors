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
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    humanScore++;
  } else {
    console.log("You lose. " + humanChoice + " beats " + computerChoice + ".");
    computerScore++;
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

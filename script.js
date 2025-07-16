function main() {
  const rounds = 5;
  const scores = { human: 0, computer: 0 };

  // play the game,
  playGame(rounds, scores);

  // then show result
  if (scores.human > scores.computer) {
    console.log("🏆 You won the game!");
  } else if (scores.human < scores.computer) {
    console.log("💻 The computer wins the game.");
  } else {
    console.log("🤝 It's a draw overall.");
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice() {
  const userInput = prompt("Your move (Rock, Paper, Scissors): ").trim().toLowerCase();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

function playRound(humanChoice, computerChoice, scores) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    scores.human++;
  } else {
    console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
    scores.computer++;
  }

  // print scores
  console.log(`Your score: ${scores.human}`);
  console.log(`Computer's score: ${scores.computer}`);
  console.log(" ");
}

function playGame(rounds, scores) {
  for (let i = 0; i < rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice(), scores);
  }
}

main();

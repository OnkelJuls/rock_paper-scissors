function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  if (getRandomInt(3) == 0) {
    return "rock";
  } else if (getRandomInt(3) == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "What do you choose? (Rock, Paper or Scissors)"
  ).toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];
  if (validChoices.includes(choice)) {
    return choice;
  } else {
    console.log("Please enter a valid choice!");
  }
}

function playRound(humanChoice, computerChoice) {
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(humanChoice)) {
    console.log("Invalid choice, please enter 'rock', 'paper', or 'scissors'.");
    return;
  }

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}!`);
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You loose! ${computerChoice} beats ${humanChoice}!`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);

    if (roundResult === "human") {
      humanScore++;
    } else if (roundResult === "computer") {
      computerScore++;
    }

    console.log(
      `Scores after round ${i}: Human: ${humanScore}, Computer: ${computerScore}\n`
    );
  }

  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`
    );
  } else {
    console.log("The game is a tie!");
  }
}
playGame();

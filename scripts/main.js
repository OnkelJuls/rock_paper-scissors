function getComputerChoice(int) {
  let computerChoice = Math.floor(Math.random() * int);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice: \n Rock \n Paper \n Scissors"
  ).toLowerCase();
  const humanChoices = ["rock", "paper", "scissors"];
  if (humanChoices.includes(humanChoice)) {
    return humanChoice;
  } else {
    console.log("Please enter a valid Choice!");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`Computer won!`);
    return "computer";
  } else {
    console.log("human won!");
    return "human";
  }
}
let rounds = prompt("How many rounds dou you want to play?");
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= rounds; i++) {
    console.log(`Round: ${i} =>`);
    const roundResult = playRound(getComputerChoice(3), getHumanChoice());

    if (roundResult === "human") {
      humanScore++;
    } else if (roundResult === "computer") {
      computerScore++;
    }
    console.log(
      `Results after round ${i}:\nHuman: ${humanScore} Computer: ${computerScore}\n\n\n`
    );
  }

  if (humanScore > computerScore) {
    console.log(
      `Human won with ${humanScore} rounds! Computer got ${computerScore}.`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer won with ${computerScore} rounds! Human got ${humanScore}.`
    );
  } else {
    console.log(`Its a Tie!`);
  }
}
playGame();

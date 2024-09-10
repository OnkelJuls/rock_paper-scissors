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
    console.log("%cPlease enter a valid Choice!", "color:red;");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`%cIt's a tie!`, "color:blue;");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`%cComputer won!`, "color:red;");
    return "computer";
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    console.log("%cHuman won!", "color:green;");
    return "human";
  } else {
    return "invalid";
  }
}

let rounds = parseInt(
  prompt("How many rounds do you want to play?(at least 2)")
);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  if (Number.isInteger(rounds) && rounds > 1) {
    for (let i = 1; i <= rounds; i++) {
      console.log(`%cRound: ${i} =>`, "color:orange;");
      const roundResult = playRound(getComputerChoice(3), getHumanChoice());

      if (roundResult === "human") {
        humanScore++;
      } else if (roundResult === "invalid") {
        console.log(
          `%cRound ${i} is skipped due to an invalid input!`,
          "color:red;font-weight: bold;"
        );
      } else if (roundResult === "computer") {
        computerScore++;
      }
      console.log(
        `%cResults after round ${i}:\nHuman: ${humanScore} Computer: ${computerScore}\n\n\n`,
        "text-decoration: underline;"
      );
    }

    if (humanScore > computerScore) {
      console.log(
        `%cHuman won with ${humanScore} round(s)! Computer got ${computerScore}.`,
        "color:green;"
      );
    } else if (computerScore > humanScore) {
      console.log(
        `%cComputer won with ${computerScore} round(s)! Human got ${humanScore}.`,
        "color:red;"
      );
    } else {
      console.log(
        `%cIts a Tie! Both got ${humanScore} round(s)`,
        "color:blue;"
      );
    }
  } else {
    alert("Please reload and enter a number higher than 1");
  }
}
playGame();

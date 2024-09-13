let human = 0;
let computer = 0;
let round = 0;

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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const restart = document.querySelector("#restart");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const info = document.querySelector("#info");
const gameButtons = document.querySelectorAll(".gameButtons");

restart.addEventListener("click", () => {
  human = 0;
  computer = 0;
  round = 0;
  counter.textContent = `Round: ${round}`;
  humanScore.textContent = 0;
  computerScore.textContent = 0;
  showButtons();
  info.textContent = "";
  console.log("restarted the game");
});
function hideButtons() {
  gameButtons.forEach((button) => {
    button.style.display = "none"; // Directly set display to 'none'
  });
}
function showButtons() {
  gameButtons.forEach((button) => {
    button.style.display = "flex"; // Directly set display to 'none'
  });
}

rock.addEventListener("click", () => {
  playRound(getHumanChoice("rock"), getComputerChoice(3));
});

paper.addEventListener("click", () => {
  playRound(getHumanChoice("paper"), getComputerChoice(3));
});

scissors.addEventListener("click", () => {
  playRound(getHumanChoice("scissors"), getComputerChoice(3));
});

function getHumanChoice(humanChoice) {
  const humanChoices = ["rock", "paper", "scissors"];
  if (humanChoices.includes(humanChoice)) {
    return humanChoice;
  }
}

function score(win) {
  if (win === "computer") {
    computer += 1;
    info.textContent = "Computer won this round!";
  } else if (win === "human") {
    human += 1;
    info.textContent = "Human won this round!";
  } else {
    info.textContent = "This round was a tie!";
  }

  console.log(` human got: ${human}, computer got: ${computer}`);

  humanScore.textContent = `${human}`;
  computerScore.textContent = `${computer}`;
  roundCounter();
  wins();
}
function roundCounter() {
  round += 1;
  counter.textContent = `Round: ${round}`;
}
function wins() {
  if (human === 5) {
    console.log("human won");
    human = 0;
    computer = 0;
    hideButtons();
    info.textContent = `Human won in ${round} rounds! Restart the Game!`;
  } else if (computer === 5) {
    info.textContent = `Computer won in ${round} rounds! Restart the Game!`;
    console.log("computer won");
    computer = 0;
    human = 0;
    hideButtons();
  } else {
    return;
  }
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`%cIt's a tie!`, "color:blue;");
    score("tie");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`%cComputer won!`, "color:red;");
    score("computer");
    return "computer";
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    console.log("%cHuman won!", "color:green;");
    score("human");
    return "human";
  } else {
    return "invalid";
  }
}

// let rounds = parseInt(
//   prompt("How many rounds do you want to play?(at least 2)")
// );

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   if (Number.isInteger(rounds) && rounds > 1) {
//     for (let i = 1; i <= rounds; i++) {
//       console.log(`%cRound: ${i} =>`, "color:orange;");
//       const roundResult = playRound(getComputerChoice(3), getHumanChoice());

//       if (roundResult === "human") {
//         humanScore++;
//       } else if (roundResult === "invalid") {
//         console.log(
//           `%cRound ${i} is skipped due to an invalid input!`,
//           "color:red;font-weight: bold;"
//         );
//       } else if (roundResult === "computer") {
//         computerScore++;
//       }
//       console.log(
//         `%cResults after round ${i}:\nHuman: ${humanScore} Computer: ${computerScore}\n\n\n`,
//         "text-decoration: underline;"
//       );
//     }

//     if (humanScore > computerScore) {
//       console.log(
//         `%cHuman won with ${humanScore} round(s)! Computer got ${computerScore}.`,
//         "color:green;"
//       );
//     } else if (computerScore > humanScore) {
//       console.log(
//         `%cComputer won with ${computerScore} round(s)! Human got ${humanScore}.`,
//         "color:red;"
//       );
//     } else {
//       console.log(
//         `%cIts a Tie! Both got ${humanScore} round(s)`,
//         "color:blue;"
//       );
//     }
//   } else {
//     alert("Please reload and enter a number higher than 1");
//   }
// }
// playGame();

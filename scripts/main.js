console.log("Hello World!");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

function getHumanChoice(n) {
  if (n == 0) {
    console.log("You chose Rock!");
  } else if (n == 1) {
    console.log("You chose Paper!");
  } else if (n == 2) {
    console.log("You chose Scissors!");
  } else {
    console.log("enter a Valid option!");
  }
}
getHumanChoice(prompt("Chose your option! 0: Rock; 1: Paper; 2: Scissors"));

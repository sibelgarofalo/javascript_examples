const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Sorry, I can accept only Rock, Paper or Scissors. But you gave " + userInput);
  }
};

/*
let result = getUserChoice("ROCK");
console.log(result);

result = getUserChoice("knife");
console.log(result);
*/
const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomChoice];
};

/*
const result = getComputerChoice();
console.log(result);
*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tied';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won';
    }else{
      return 'user won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won';
    }else{
      return 'user won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won';
    }else{
      return 'user won';
    }
  }

};

var result = determineWinner('paper', 'paper');
console.log(result);
result = determineWinner('paper', 'rock');
console.log(result);
result = determineWinner('rock', 'scissors');
console.log(result);


const playGame = () => {
  const userChoice = getUserChoice ('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();




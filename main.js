let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let ComputerOptions = ["ROCK", "PAPER", "SCISSORS"];
  const ComputerChoice =
    ComputerOptions[Math.floor(Math.random() * ComputerOptions.length)];
  return ComputerChoice;
}

function getPlayerChoice() {
  let PlayerChoice = null;
  let ChoiceCheck = "Invalid";
  while (ChoiceCheck == "Invalid") {
    if (
      PlayerChoice == null ||
      PlayerChoice != "ROCK" ||
      PlayerChoice != "PAPER" ||
      PlayerChoice != "SCISSORS"
    ) {
      PlayerChoice = prompt("Choose ROCK, PAPER or SCISSORS");
      if (PlayerChoice == null) {
        console.error("Choice can't be empty");
        ChoiceCheck = "Invalid";
      } else if (
        PlayerChoice.toUpperCase() != "ROCK" &&
        PlayerChoice.toUpperCase() != "PAPER" &&
        PlayerChoice.toUpperCase() != "SCISSORS"
      ) {
        console.warn(
          "You chose " +
            PlayerChoice +
            " which is not a valid choice, please pick again."
        );
        ChoiceCheck = "Invalid";
      } else {
        ChoiceCheck = "Valid";
        return PlayerChoice;
      }
    }
  }
}

function playRound() {
  let PlayerSelection = getPlayerChoice().toUpperCase();
  let ComputerSelection = getComputerChoice();
  console.log("Player Selected: " + PlayerSelection);
  console.log("Computer Selected: " + ComputerSelection);
  if (PlayerSelection == ComputerSelection) {
    console.log("Draw, you both selected " + PlayerSelection);
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
  } else if (PlayerSelection == "PAPER" && ComputerSelection == "SCISSORS") {
    console.log("You lose, SCISSORS beats PAPER");
    computerScore = computerScore + 1;
  } else if (PlayerSelection == "PAPER" && ComputerSelection == "ROCK") {
    console.log("You Win! PAPER beats ROCK");
    playerScore = playerScore + 1;
  } else if (PlayerSelection == "SCISSORS" && ComputerSelection == "ROCK") {
    console.log("You lose, ROCK beats SCISSORS");
    computerScore = computerScore + 1;
  } else if (PlayerSelection == "SCISSORS" && ComputerSelection == "PAPER") {
    console.log("You Win! SCISSORS beats PAPER");
    playerScore = playerScore + 1;
  } else if (PlayerSelection == "ROCK" && ComputerSelection == "PAPER") {
    console.log("You lose, SCISSORS beats PAPER");
    computerScore = computerScore + 1;
  } else if (PlayerSelection == "ROCK" && ComputerSelection == "SCISSORS") {
    console.log("You Win! ROCK beats SCISSORS");
    playerScore = playerScore + 1;
  }
}

function game() {
  console.clear();
  playerScore = 0;
  computerScore = 0;
  let round = 0;
  for (let i = 0; i < 5; i++) {
    round = round + 1;
    console.log("Round: (" + round + "/5)");
    playRound();
    console.log("PLAYER " + playerScore + " - " + computerScore + " COMPUTER");
  }
  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else if (playerScore == computerScore) {
    console.log("Draw!");
  } else {
    console.log("Computer Wins!");
  }
  console.log("Click on Start Game to start a new round");
}
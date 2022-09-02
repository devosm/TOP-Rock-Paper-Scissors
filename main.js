function getComputerChoice() {
    let ComputerOptions = ["ROCK", "PAPER", "SCISSORS"]
    const ComputerChoice = ComputerOptions[Math.floor(Math.random()*ComputerOptions.length)]
    return ComputerChoice
}

function getPlayerChoice() {
    const PlayerChoice = "scissors";
    return PlayerChoice
}

const PlayerSelection = getPlayerChoice().toUpperCase()
const ComputerSelection = getComputerChoice()

function playRound() {
    console.log("Player Selected: " + PlayerSelection)
    console.log("Computer Selected: " + ComputerSelection)
    if (PlayerSelection == ComputerSelection) {
        console.log("Draw, you both selected " + PlayerSelection)
    } else if (PlayerSelection == "PAPER" && ComputerSelection == "SCISSORS") {
        console.log("You lose, SCISSORS beats PAPER")
    } else if (PlayerSelection == "PAPER" && ComputerSelection == "ROCK") {
        console.log("You Win! PAPER beats ROCK")
    } else if (PlayerSelection == "SCISSORS" && ComputerSelection == "ROCK") {
        console.log("You lose, ROCK beats SCISSORS")
    } else if (PlayerSelection == "SCISSORS" && ComputerSelection == "PAPER") {
        console.log("You Win! SCISSORS beats PAPER")
    } else if (PlayerSelection == "ROCK" && ComputerSelection == "PAPER") {
        console.log("You lose, SCISSORS beats PAPER")
    } else if (PlayerSelection == "ROCK" && ComputerSelection == "SCISSORS") {
        console.log("You Win! ROCK beats SCISSORS")
    }
}

playRound()
function getComputerChoice() {
    let ComputerOptions = ["ROCK", "PAPER", "SCISSORS"]
    const ComputerChoice = ComputerOptions[Math.floor(Math.random()*ComputerOptions.length)]
    return ComputerChoice
}

function getPlayerChoice() {
    const PlayerChoice = prompt("Select: Rock, Paper or Scissors");
    return PlayerChoice
}

function playRound() {
    let PlayerSelection = getPlayerChoice().toUpperCase()
    let ComputerSelection = getComputerChoice()
    console.log("Player Selected: " + PlayerSelection)
    console.log("Computer Selected: " + ComputerSelection)
    if (! ["ROCK", "PAPER", "SCISSORS"].includes(PlayerSelection)) {
        console.log("You selected: " + PlayerSelection + " , please select a valid option.")
        playRound()
    } else if (PlayerSelection == ComputerSelection) {
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

function game () {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

game()
function getComputerChoice() {
    let ComputerOptions = ["Rock", "Paper", "Scissors"]
    const ComputerChoice = ComputerOptions[Math.floor(Math.random()*ComputerOptions.length)]
    return ComputerChoice
}

function getPlayerChoice() {
    const PlayerChoice = "rock";
    return PlayerChoice
}

const PlayerSelection = getPlayerChoice()
const ComputerSelection = getComputerChoice()

function playRound() {
    console.log("Computer chooses: " + ComputerSelection + " and Player chooses: " + PlayerSelection)
}

playRound()
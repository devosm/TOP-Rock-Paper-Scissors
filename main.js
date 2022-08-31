let ComputerOptions = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let ComputerChoice = ComputerOptions[Math.floor(Math.random()*ComputerOptions.length)]
    console.log(ComputerChoice)
}

getComputerChoice()
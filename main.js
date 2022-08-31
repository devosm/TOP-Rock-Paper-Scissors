function getComputerChoice() {
    let ComputerOptions = ["Rock", "Paper", "Scissors"]
    let ComputerChoice = ComputerOptions[Math.floor(Math.random()*ComputerOptions.length)]
    console.log(ComputerChoice)
}

getComputerChoice()
function computerPlays() {
    let choice;
    let i = Math.floor(Math.random() * 3);
    if(i == 0){
        choice = "rock";
        return choice;
    }
    else if (i == 1){
        choice = "paper";
        return choice;
    }
    else if (i == 2){
        choice = "scissors";
        return choice;
    }
}

function playerPlays() {
    let choice = prompt("What is your choice?");
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("comp wins");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("player wins");
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("tie");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("player wins");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("comp wins");
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("tie");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("comp");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("player wins");
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("tie");
    }
}

const computerSelection = computerPlays();
const playerSelection = playerPlays();

console.log(computerSelection);
console.log(playerSelection);
playRound(playerSelection, computerSelection);


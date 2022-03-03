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
}

const computerSelection = computerPlays();
const playerSelection = playerPlays();

playRound(playerSelection, computerSelection);


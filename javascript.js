let playerScore = 0;
let computerScore = 0;


function computerPlays() {
    let choice;
    let i = Math.floor(Math.random() * 3); //used to create a random number of either 0, 1, or 2 then using that number to determine computers choice
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

function winningMessage()
{
    if (playerScore === 5)
    {
        return "woah, totes cool bro player won";
    }
    else if (computerScore === 5)
    {
        return "woah, totes cool bro comp won";
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("comp wins");
        return computerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("player wins");
        return playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("tie");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("player wins");
        return playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("comp wins");
        return computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("tie");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("comp");
        return computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("player wins");
        return playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("tie");
    }
}

function game() {
    while (playerScore <= 5 && computerScore <= 5)
    {
        let playerSelection = prompt("What is your choice?"); //prompt the user to input there choice
        let computerSelection = computerPlays();
        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);

    }
    console.log(winningMessage());

}






    /*
    for (let i = 0; i < 50; i++) 
    {
        if (playerScore <= 5 && computerScore <= 5) 
        {
            let playerSelection = prompt("What is your choice?"); //prompt the user to input there choice
            let computerSelection = computerPlays();
            playRound(playerSelection, computerSelection);
            console.log(playerScore);
            console.log(computerScore);
        }
        else if (playerScore == 5)
        {
            console.log("player wins   !");
        }
        else if (computerScore == 5)
        {
            console.log("comp wins   !");
        }

    
    }*/



game();


const playerSelection = "paper";
let compSelection = computerPlay();

function computerPlay() {
    switch (randomNumber(1,4)) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"
            break;
    }
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max-min) + 1);
}

function playGame(playerSelection, compSelection){
    if (playerSelection.toLowerCase() === compSelection) {
        return "Tie";
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (compSelection === "paper") {
            return "You Lose";
        }else{
            return "You Win";
        }
    }else if (playerSelection.toLowerCase() === "paper"){
        if (compSelection === "scissors") {
            return "You Lose";
        }else{
            return "You Win";
        }
    }else{
        if (compSelection === "rock"){
            return "You Lose";
        }else{
            return "You Win";
        }
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i <= 4; i++) {
        compSelection = (computerPlay());
        console.log(compSelection);
        
        

    }
}

console.log(game());
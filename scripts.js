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
        return 3;
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (compSelection === "paper") {
            return 0;
        }else{
            return 1;
        }
    }else if (playerSelection.toLowerCase() === "paper"){
        if (compSelection === "scissors") {
            return 0;
        }else{
            return 1;
        }
    }else{
        if (compSelection === "rock"){
            return 0;
        }else{
            return 1;
        }
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i <= 4;) {
        compSelection = (computerPlay());
        let roundResult = playGame(playerSelection, compSelection);
        if (roundResult === 1) {
            playerScore += 1;
            i++;
            if (playerScore === 3) {
                console.log("player Wins");
            }
        }else if(roundResult === 0){
            compScore += 1;
            i++;
            if (compScore === 3) {
                console.log("Computer Wins");
            }
        }
    }
}

game();

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getComputerChoice = ()=>{
    return getRndInteger(1,3);
}

const printChoice = (Choice, player)=> {
    if(Choice == 1) {
        console.log(player, " :Rock");
    }else if (Choice == 2){
        console.log(player, " :Paper");
    }else if(Choice == 3){
        console.log(player, " :Scissor");
    }else {
        console.log(player, " :invalid input");
    }
}
const printResult = (result)=>{
    if(result == 1){
        console.log("you win!");
    }else if(result == 0){
        console.log("you lose!");
    }else if(result == -1){
        console.log("draw!");
    }else {
        console.log("invalid input!");
    }
}
const youWin = (computerChoice, yourChoice) => {
    if(yourChoice == computerChoice) {
        return -1;
    } else if (yourChoice == 1) {
        if(computerChoice == 2) {
            return 0;
        }else {
            return 1;
        }

    }else if (yourChoice == 2) {
        if (computerChoice == 3) {
            return 0;
        }else {
            return 1;
        }
    }else if(yourChoice == 3){
        if (computerChoice == 1){
            return 0;
        }else{
            return 1;
        }
    }
    return -2;// invalid input
    console.log("invalid input");
}

const playGame = () => {
    const playerChoice = prompt("please enter your choice");
    const computerChoice = getComputerChoice();
    let result = youWin(computerChoice, playerChoice);
    printChoice(playerChoice);
    printChoice(computerChoice);
    printResult(result);
}

playGame();

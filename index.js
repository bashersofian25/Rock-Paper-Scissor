
const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissor = document.getElementById('scissor');
const roundResult = document.getElementById('result');
const grandResult = document.getElementById('grand-result');

const choices = ['Rock', 'Paper', 'Scissor'];

const gameStatus = {
    computerWins: 0,
    playerWins: 0
}


const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getComputerChoice = ()=>{
    return getRndInteger(0,2);
}

const resetGame = () => {
    gameStatus.computerWins = 0;
    gameStatus.computerWins = 0;
    roundResult.value = '';
    grandResult.value = 'In Progress'

}
const checkStatus = () => {
    if(gameStatus.computerWins >= 5) {
        resetGame();
        return 'Computer Wins';
    }else if(gameStatus.playerWins >= 5) {
        resetGame();
        return 'Player Wins';
    }else {
        return 'In Progress';
    }

}

const whoWins = (computerChoice, yourChoice) => {
    if(yourChoice == computerChoice) {
        return 'draw';
    } else if (yourChoice == 'Rock') {
        if(computerChoice == 'Paper') {
            gameStatus.computerWins++;
            return 'lost';
           
        }else {
            gameStatus.playerWins++;
            return 'won';
            
        }

    }else if (yourChoice == 'Paper') {
        if (computerChoice == 'Scissor') {
            gameStatus.computerWins++;
            return 'lost';
           
        }else {
            gameStatus.playerWins++;
            return 'won';
        }
    }else if(yourChoice == 'Scissor'){
        if (computerChoice == 'Rock'){
            gameStatus.computerWins++;
            return 'lost';
        }else{
            gameStatus.playerWins++;
            return 'won';
        }
    }
}

const playGame = (event) => {
    const playerChoice = event.target.innerText;
    const computerChoice = choices[getComputerChoice()];
    const result = whoWins(computerChoice, playerChoice);
    roundResult.innerText= `you ${result}`;
    grandResult.innerText= checkStatus();
}

Rock.addEventListener('click', (event) => {
    playGame(event);
});

Paper.addEventListener('click', (event) => {
    playGame(event);
});

Scissor.addEventListener('click', (event) => {
    playGame(event);
});


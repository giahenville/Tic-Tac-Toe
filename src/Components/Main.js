import '../App.css';

let playerSymbol;
let aiSymbol;
let aiMode = "easy"; // default value to "easy"

let gameBoardArr = [
    null, null, null,
    null, null, null,
    null, null, null
];
// generates a random index between 0-8 for ai choice
let availableIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// get ai to play on easy mode
const SetAiMode = (selectedMode) => {
    aiMode = selectedMode;
    
}

// takes in a symbol and saves it as the player's symbol for the current game
const HandlePlayerSymbol = (symbol) => {
    // only allows user to chose a symbol once per game
    if (!playerSymbol){
        playerSymbol = symbol;
    }
    if (playerSymbol === "X") {
        aiSymbol = "O";
    }else{
        aiSymbol = "X";
    }
}

// updates square display and gameBoardArr
/* FIX: DO NOT allow player to click the same square 
more than once! Right now the player can click 
the same square and the ai clicks a different square ********* */ 
// TODO: make sure x always goes first! ********
const HandleSquareClick = (index) => {
    const square = document.getElementById(`${index}`);
    // removes populated indexes from availableIndexes array
    availableIndexes.splice(availableIndexes.indexOf(index), 1);
    if(playerSymbol){
        square.innerText = playerSymbol; /* make sure this renders before 
                                            a winner is announced */
        gameBoardArr[index] = playerSymbol;
        HandleAiClick();
       
    }else{
        alert("Please choose a symbol.");
    }
    GetGameStatus(); // checks if there is a winner
};

const generateRandomIndex = () => {
    let index = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    if(availableIndexes.length){
        // removes populated indexes from availableIndexes array
        availableIndexes.splice(availableIndexes.indexOf(index), 1);
        return index;
    }
    // GetGameStatus(); 
};

// handles ai input based on mode 
const HandleAiClick = () => {
    /* TODO: remember to check GetGameStatus every time 
    because there could be a winner before the gameboardarr is empty ********** */
    switch (aiMode) {
        case "easy":
            let aiIndex = generateRandomIndex();
            const square = document.getElementById(`${aiIndex}`);
            if (gameBoardArr[aiIndex] === null) {
                gameBoardArr[aiIndex] = aiSymbol;
                square.innerText = aiSymbol;
            }
            break;
        // TODO: write cases for "hard" and "impossible" ***************
        case "hard":
            break;
        case "impossible":
            break;
    }
    GetGameStatus();
}

// checks who has won the game 
const GetGameStatus = () => {
/* needs to get this for every square click at 
    all times!!! Maybe move this to gameboard file ***************/

    // returns who the winner is
    const checkSymbol = (index) => {
        if (gameBoardArr[index] === playerSymbol) {
            return alert("Player Wins!");
        }else if (gameBoardArr[index] === aiSymbol){
            return alert("Ai wins!");
        }
    }

    const checkWinner = (index1, index2, index3) => {
        if (gameBoardArr[index1] === gameBoardArr[index2] && gameBoardArr[index2] === gameBoardArr[index3]){
            checkSymbol(index1);
            return true;
        };
        return false;
    }
    // checks winner for horizontal rows

    if (checkWinner(0, 1, 2)) return;
    if (checkWinner(3, 4, 5)) return;
    if (checkWinner(6, 7, 8)) return;
    // checks winner for vertical columns
    if (checkWinner(0, 3, 6)) return;
    if (checkWinner(1, 4, 7)) return;
    if (checkWinner(2, 5, 8)) return;
    // checks winner at diagonal
    if (checkWinner(0, 4, 8)) return;
    if (checkWinner(2, 4, 6)) return;

}

export{
    HandlePlayerSymbol,
    HandleSquareClick,
    SetAiMode
} ;
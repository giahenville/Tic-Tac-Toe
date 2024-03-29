import '../App.css';


let playerSymbol;
let aiSymbol;
let aiMode = "easy"; // default value to "easy"
let gameBoardArr = [
    null, null, null,
    null, null, null,
    null, null, null
];
const winningSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// generates a random index between 0-8 for ai choice
let availableIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// makes sure game cannot be played once a winner has been established
let winner = false; 
let draw = false;

// get ai to play on easy mode
const SetAiMode = (selectedMode) => {
    aiMode = selectedMode;
}

// takes in a symbol and saves it as the player's symbol for the current game. Sets aiSymbol
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

// makes sure "X" always goes first
const SetPlayOrder = () => {
    if (playerSymbol === "O") setTimeout(HandleAiClick, 500); 
}

// updates square display and gameBoardArr
const HandleSquareClick = (index) => {
    if (!winner){ // makes sure game cannot be played when there is already a winner
        const square = document.getElementById(`${index}`);
        if (square.innerText) return; /* does not allow the player to click the same 
                                        square twice and stops ai from clicking a square */
        
        // removes populated indexes from availableIndexes array
        availableIndexes.splice(availableIndexes.indexOf(index), 1);
        if(playerSymbol){
            square.innerText = playerSymbol; 
            gameBoardArr[index] = playerSymbol;
            setTimeout(HandleAiClick, 500); // stops ai from playing once player has won
        }else if (!playerSymbol){
            alert("Please choose a symbol.");
        }else {
            alert("Play again!");   
        }
        GetGameStatus(); // checks if there is a winner
    }
};

// used for generating index for ai 
const generateRandomIndex = () => {
    let index = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    if(availableIndexes.length){
        // removes populated indexes from availableIndexes array
        availableIndexes.splice(availableIndexes.indexOf(index), 1);
        return index;
    }
};

// handles ai input based on mode 
const HandleAiClick = () => {
    if (!winner){ // only runs when there isn't a winner
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
        checkDraw();
    }
}

// checks if there is a draw
const checkDraw = () => { 
    if (!winner){ // stops double alert when a player wins when the gameboardarr is full
        let gameBoardPopulation = 0;
        gameBoardArr.forEach(symbol => {
            if (symbol != null) {
                gameBoardPopulation++;
            }
        });
        if (gameBoardPopulation === 9) {
            draw = true;
            winner = true; // stops infinite loop of alerts NOT CURRENTLY USED
        }
        if (draw === true) {
            alert("Draw");
            return 
        }
    }
}

// checks who has won the game 
const GetGameStatus = () => {
    // returns who the winner is
    const checkSymbol = (index) => {
        if (gameBoardArr[index] === playerSymbol) {
            winner = true;
            console.log("Player Wins!");
            
        }else if (gameBoardArr[index] === aiSymbol){
            winner = true;
            console.log("Ai wins!");
        }
    }

    // checks if there is a winner
    const checkWinner = (index1, index2, index3) => {
        if (gameBoardArr[index1] === gameBoardArr[index2] && gameBoardArr[index2] === gameBoardArr[index3]){
            checkSymbol(index1);
            return true;
        };
        return false;
    }

    if (!winner){ // makes sure this only runs when there isn't a winner 
        // checks winner for horizontal rows
        if (checkWinner(0, 1, 2)) return;
        if (checkWinner(3, 4, 5)) return;
        if (checkWinner(6, 7, 8)) return;
        // checks winner for vertical columns
        if (checkWinner(0, 3, 6)) return;
        if (checkWinner(1, 4, 7)) return;
        if (checkWinner(2, 5, 8)) return;
        // checks winner at diagonals
        if (checkWinner(0, 4, 8)) return;
        if (checkWinner(2, 4, 6)) return;
    }
}


export{
    HandlePlayerSymbol,
    HandleSquareClick,
    SetAiMode,
    SetPlayOrder
} ;
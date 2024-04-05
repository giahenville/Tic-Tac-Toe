import "../App.css";
import {Minimax, SetSymbol} from "../Components/Minimax";
import XImage from '../Assets/close.png';
import OImage from '../Assets/letter-o.png';

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

// makes sure game cannot be played once a winner has been established
let winner = false; 
let draw = false;

// get ai to play on easy mode
const SetAiMode = (selectedMode) => {
    aiMode = selectedMode;
}

// takes in a symbol and saves it as the player's symbol for the current game. Sets aiSymbol
const HandlePlayerSymbol = (symbol, named) => {
    console.log(named);
    // only allows user to chose a symbol once per game
    if (!playerSymbol){
        playerSymbol = symbol;
        const btnName = document.querySelector(`.${named}`);
        btnName.classList.add("clicked");
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
// TODO: make sure player can only add symbols on their turn. wait for ai to play
const HandleSquareClick = (index) => {
    if (!winner){ // makes sure game cannot be played when there is already a winner
        const square = document.getElementById(`${index}`);
        if (square.innerText) return; /* does not allow the player to click the same 
                                        square twice and stops ai from clicking a square */
        
        // removes populated indexes from availableIndexes array
        availableIndexes.splice(availableIndexes.indexOf(index), 1);
        if(playerSymbol){
            if (playerSymbol === "X"){
                square.innerHTML = `<img src="${XImage}" alt="X Symbol" >`; 
            } else {
                square.innerHTML =  `<img src="${OImage}" alt="O Symbol">`;
            }
            
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
        }
        if (draw === true) {
            alert("Draw");
            return 
        }
    }
}


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
        let aiIndex = generateRandomIndex();
        
        switch (aiMode) {
            case "easy":
                // randomly selects an empty square
                const square1 = document.getElementById(`${aiIndex}`);
                if (gameBoardArr[aiIndex] === null) {
                    gameBoardArr[aiIndex] = aiSymbol;
                    if (aiSymbol === "X"){
                        square1.innerHTML = `<img src="${XImage}" alt="O Symbol">`; 
                    } else {
                        square1.innerHTML =  `<img src="${OImage}" alt="O Symbol" > `;
                    }
                }
                break;
            // TODO: write cases for "hard" and "impossible" ***************
            case "hard":
                // always try to fill in rows and colums of threes
                //TODO: Implement minimax algorithm
             
                // checkAvailableSets(winningSets); ///USE MINIMAX
                
                
                break;
            case "impossible":
                // Example usage:
                SetSymbol(aiSymbol, playerSymbol); // sends symbols to Minimax.js 
                let bestIndex = Minimax(gameBoardArr);
              
                console.log("Best move:", bestIndex);

                const square3 = document.getElementById(`${bestIndex}`);
                if (gameBoardArr[bestIndex] === null) {
                    gameBoardArr[bestIndex] = aiSymbol;
                    square3.innerText = aiSymbol;
                }
                
                break;
        }
        GetGameStatus();
        checkDraw();
    }
}

// checks who has won the game 
const GetGameStatus = () => {
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

    // checks if there is a winner (also used for minimax)
    const checkWinner = (arr) => {
        for (let i = 0; i < arr.length; i++){
          if (
            gameBoardArr[arr[i][0]] === gameBoardArr[arr[i][1]] &&
            gameBoardArr[arr[i][1]] === gameBoardArr[arr[i][2]] &&
            gameBoardArr[arr[i][0]] !== null
          ) {
            checkSymbol(arr[i][0]);
            return true;
          }
        }
        return false; 
    }

    if (!winner){ // makes sure this only runs when there isn't a winner 
        checkWinner(winningSets);
    }
}



export{
    HandlePlayerSymbol,
    HandleSquareClick,
    SetAiMode,
    SetPlayOrder
} ;
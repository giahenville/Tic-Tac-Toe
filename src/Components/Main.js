import '../App.css';
import { useState } from 'react';


let gameBoardObj;
let playerSymbol;
let aiSymbol;

let playerObj = {name : "Player", symbol : playerSymbol, winner : false};
let aiObj = {name : "Ai", symbol : aiSymbol, winner : false};
let gameBoardArr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// takes in a symbol and saves it as the player's symbol for the current game
const HandlePlayerSymbol = (symbol) => {
    // only allows user to chose a symbol once per game
    if (!playerSymbol){
        playerSymbol = symbol;
    }
    // error handling
    console.log("HandlePlayerSymbol Passed");
    console.log("Passed in symbol:", symbol);
    console.log("Player symbol: ", playerSymbol);
}

// updates square inner text and adds value to gameArr
const HandleSquareClick = (row, index) => {
    const square = document.querySelectorAll(".square")[row][index];
    // makes sure square is empty and updates inner text
    if (!square.innerText){
        square.innerText = playerSymbol;
        gameBoardArr[row][index] = playerSymbol; // updates gameboard array
    }
}


// checks who has won the game 
const getGameStatus = () => {
    // if all elements in a row are the same, there is a winner
    // if the player symbol is three in a row, player wins

}

// create the gameboard 
const GameBoard = function () {
    

    gameBoardObj = {playerObj, aiObj, HandleClick, getGameStatus};

    return gameBoardObj; // factory function returns an object
  
};

export{
    GameBoard, 
    HandlePlayerSymbol,
    HandleSquareClick
} ;
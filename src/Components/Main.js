import '../App.css';
import { useState } from 'react';


let gameBoardObj;
let playerSymbol;
let aiSymbol;

let playerObj = {name : "Player", symbol : playerSymbol, winner : false};
let aiObj = {name : "Ai", symbol : aiSymbol, winner : false};
let gameBoardArr = [
    null, null, null,
    null, null, null,
    null, null, null
];

// takes in a symbol and saves it as the player's symbol for the current game
const HandlePlayerSymbol = (symbol) => {
    // only allows user to chose a symbol once per game
    if (!playerSymbol){
        playerSymbol = symbol;
    }
    // error handling
    // console.log("HandlePlayerSymbol Passed");
    // console.log("Passed in symbol:", symbol);
    // console.log("Player symbol: ", playerSymbol);
}

// updates square display and gameBoardArr
const HandleSquareClick = (index) => {
    const squares = document.querySelectorAll(".square");
    console.log(squares);
    if(playerSymbol){
        squares[index].innerText = playerSymbol;
        gameBoardArr[index] = playerSymbol;
    }else{
        alert("Please choose a symbol.");
    }
    // error handling
    // console.log("HandleSquareClick Passed");
    // console.log(gameBoardArr);
};

// sets ai symbol
const getAiSymbol = () => {
    if(playerSymbol){
        if (playerSymbol === "X") {
            aiSymbol = "O";
        }else{
            aiSymbol = "X";
        }
    }
}

// get ai to play on easy mode
const aiModes = () => {

}



// checks who has won the game 
const getGameStatus = () => {
    // if all elements in a row are the same, there is a winner
    // if the player symbol is three in a row, player wins

}

// create the gameboard 
const GameBoard = function () {
    

    // gameBoardObj = {playerObj, aiObj, HandleSquareClick, getGameStatus};

    return gameBoardObj; // factory function returns an object
  
};

export{
    GameBoard, 
    HandlePlayerSymbol,
    HandleSquareClick
} ;
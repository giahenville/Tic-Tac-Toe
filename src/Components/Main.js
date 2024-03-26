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

// allows user to select player "x" or "o" using the x or o buttons!
const HandleClick = (row, index) => {
    const xBtn = document.querySelector(".x-btn");
    const oBtn = document.querySelector("o.btn");

    const [currentValue, setCurrentValue] = useState(null);
    const square = document.querySelectorAll(".square")[row][index];
    // makes sure square is empty and updates inner text
    if (!square.innerText){
        square.innerText = currentValue;
        gameBoardArr[row][index] = currentValue; // updates gameboard array
    }

    xBtn.addEventListener("click", () => {
        setCurrentValue("X");
        playerSymbol = "X";
        aiSymbol = "O";
    })
    oBtn.addEventListener("click", () => {
        setCurrentValue("O")
        playerSymbol = "O";
        aiSymbol = "X";
    })
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
    HandleClick,
} ;
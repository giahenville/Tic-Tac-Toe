import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import './Grid.css';


const gameBoardArr = ["", "", "","", "", "","", "", ""]; // stores date for game
const playersObj = {};



function App() {

  // allows user to select player "x" or "o"
  const [currentValue, setCurrentValue] = useState(null);
  const handleXClick = () => {
    setCurrentValue("X");
  }
  const handleOClick = () => {
    setCurrentValue("O")
  }

  // adds player's symbol to square that is clicked
  const updateSquare = (index) => {
    const square = document.querySelectorAll(".square")[index];
    // makes sure square is empty
    if (!square.innerText){
      square.innerText = currentValue;
    }
   
  }

  return (
  <div className='main-body flex justify-center items-center flex-col'>

    <h1>Tic-Tac-Toe in React</h1>
    <div className='main-container flex flex-col justify-center border-solid border-2 border-black '>
      <div className='header'>
        <p className='difficulty-level underline'>Mode</p>
        <span>
          <button className='X border-solid border-2 border-black' onClick={handleXClick}> X </button>
          <button className='O border-solid border-2 border-black'  onClick={handleOClick}> O </button>
        </span>
      </div>

      <div className='gameboard'>
        <div className='row1'>
          <button className='square' onClick={() => updateSquare(0)}></button>
          <button className='square' onClick={() => updateSquare(1)}></button>
          <button className='square' onClick={() => updateSquare(2)}></button>
        </div>
        <div className='row2'>
          <button className='square' onClick={() => updateSquare(3)}></button>
          <button className='square' onClick={() => updateSquare(4)}></button>
          <button className='square' onClick={() => updateSquare(5)}></button>
        </div>
        <div className='row3'>
          <button className='square' onClick={() => updateSquare(6)}></button>
          <button className='square' onClick={() => updateSquare(7)}></button>
          <button className='square' onClick={() => updateSquare(8)}></button>
        </div>
       </div>
        
      <button>Start / Restart</button>
      
    </div>

  </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { HandlePlayerSymbol, HandleSquareClick, SetAiMode } from './Components/Main';
import GameBoard from '../Components/Gameboard';


function App() {
  
  return (
    <div className='main-body flex justify-center items-center flex-col'>

      <h1>Tic-Tac-Toe in React</h1>
      <div className='main-container flex flex-col justify-center border-solid border-2 border-black '>
        <div className='header'>
          <form id = "mode" className='mode'>
            <select className='modeMenu' defaultValue= "easy" onChange={(event) => SetAiMode(event.target.value)}>
              <option value ="easy" >Easy</option>
              <option value="hard">Hard</option>
              <option value="impossible">Impossible</option>
            </select>
          </form>
          <span>
            <button className='X-btn border-solid border-2 border-black' onClick={ () => {
              HandlePlayerSymbol("X");
              }}> X </button>
            <button className='O-btn border-solid border-2 border-black'  onClick={ () => {
              HandlePlayerSymbol("O");
              }}> O </button>
          </span>
        </div>
            
        <GameBoard />
        
        <button>Start / Restart</button>
        
      </div>

    </div>
  );
}

export default App;


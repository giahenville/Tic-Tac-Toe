import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GameBoard, HandlePlayerSymbol, HandleSquareClick, SetAiMode } from './Components/Main';
// import {AiModes} from './Components/Header';


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

      <div className='gameboard flex-col'>
        <div className='row1 flex'>
          <button className='square' id="0" onClick={ () => { 
            HandleSquareClick(0); 
          }} ></button>
          <button className='square' id="1" onClick={ () => {
            HandleSquareClick(1); 
          }}  ></button>
          <button className='square' id="2" onClick={ () => {
            HandleSquareClick(2); 
          }} ></button>
        </div>
        <div className='row2 flex'>
          <button className='square' id="3" onClick={ () => {
            HandleSquareClick(3); 
          }} ></button>
          <button className='square' id="4" onClick={ () => {
            HandleSquareClick(4); 
          }} ></button>
          <button className='square' id="5" onClick={ () => {
            HandleSquareClick(5); 
          }} ></button>
        </div>
        <div className='row3 flex'>
          <button className='square' id="6" onClick={ () => {
            HandleSquareClick(6); 
          }} ></button>
          <button className='square' id="7" onClick={ () => {
            HandleSquareClick(7); 
          }} ></button>
          <button className='square' id="8" onClick={ () => {
            HandleSquareClick(8); 
          }} ></button>
        </div>
      </div>
        
      <button>Start / Restart</button>
      
    </div>

  </div>
  );
}

export default App;


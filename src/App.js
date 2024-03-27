import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GameBoard, HandlePlayerSymbol, HandleSquareClick, GetAiSymbol } from './Components/Main';



function App() {
  
  return (
  <div className='main-body flex justify-center items-center flex-col'>

    <h1>Tic-Tac-Toe in React</h1>
    <div className='main-container flex flex-col justify-center border-solid border-2 border-black '>
      <div className='header'>
        <p className='difficulty-level underline'>Mode</p>
        <span>
          <button className='X-btn border-solid border-2 border-black' onClick={ () => HandlePlayerSymbol("X")}> X </button>
          <button className='O-btn border-solid border-2 border-black'  onClick={ () => HandlePlayerSymbol("O")}> O </button>
        </span>
      </div>

      <div className='gameboard flex-col'>
        <div className='row1 flex'>
          <button className='square' onClick={ () => { 
            HandleSquareClick(0); 
            GetAiSymbol();
          }} ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(1); 
            GetAiSymbol();
          }}  ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(2); 
            GetAiSymbol();
          }} ></button>
        </div>
        <div className='row2 flex'>
          <button className='square' onClick={ () => {
            HandleSquareClick(3); 
            GetAiSymbol();
          }} ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(4); 
            GetAiSymbol();
          }} ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(5); 
            GetAiSymbol();
          }} ></button>
        </div>
        <div className='row3 flex'>
          <button className='square' onClick={ () => {
            HandleSquareClick(6); 
            GetAiSymbol();
          }} ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(7); 
            GetAiSymbol();
          }} ></button>
          <button className='square' onClick={ () => {
            HandleSquareClick(8); 
            GetAiSymbol();
          }} ></button>
        </div>
       </div>
        
      <button>Start / Restart</button>
      
    </div>

  </div>
  );
}

export default App;


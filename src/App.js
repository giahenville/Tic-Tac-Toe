import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const gameBoardArr = [];
const playersObj = {};


function App() {
  return (
  <>
    <div className='header'>
      <p className='difficulty-level underline'>Mode</p>
      <span>
        <button className='X border-solid border-2 border-black'> X </button>
        <button className='O border-solid border-2 border-black'> O </button>
      </span>
    </div>

    <div className='grid bg-green-100'>
      X X O 
      O O X 
      O O X
    </div>
    <footer>Start / Restart</footer>
    

    
  </>
 
  );
}

export default App;

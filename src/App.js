import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GameBoard, HandleClick } from './Components/Main';



function App() {


  /* 
  
  return (
    <>
      <Header /> // Header.js --> export default Header;
      <MainBody />
      <Footer />
    </>
  )
  
  */

  return (
  <div className='main-body flex justify-center items-center flex-col'>

    <h1>Tic-Tac-Toe in React</h1>
    <div className='main-container flex flex-col justify-center border-solid border-2 border-black '>
      <div className='header'>
        <p className='difficulty-level underline'>Mode</p>
        <span>
          <button className='X-btn border-solid border-2 border-black' onClick={HandleClick}> X </button>
          <button className='O-btn border-solid border-2 border-black'  onClick={HandleClick}> O </button>
        </span>
      </div>

      <div className='gameboard'>
        <div className='row1'>
          <button className='square' onClick={() => HandleClick(1, 0)}></button>
          <button className='square' onClick={() => HandleClick(1, 1)}></button>
          <button className='square' onClick={() => HandleClick(1, 2)}></button>
        </div>
        <div className='row2'>
          <button className='square' onClick={() => HandleClick(2, 3)}></button>
          <button className='square' onClick={() => HandleClick(2, 4)}></button>
          <button className='square' onClick={() => HandleClick(2, 5)}></button>
        </div>
        <div className='row3'>
          <button className='square' onClick={() => HandleClick(3, 6)}></button>
          <button className='square' onClick={() => HandleClick(3, 7)}></button>
          <button className='square' onClick={() => HandleClick(3, 8)}></button>
        </div>
       </div>
        
      <button>Start / Restart</button>
      
    </div>

  </div>
  );
}

export default App;


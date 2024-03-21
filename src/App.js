import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import './Grid.css';


const gameBoardArr = [];
const playersObj = {};



function App() {

  const [currentValue, setCurrentValue] = useState(null);
  const handleXClick = () => {
    setCurrentValue("X");
  }
  const handleOClick = () => {
    setCurrentValue("O")
  }

  return (
  <>
    <div className='header'>
      <p className='difficulty-level underline'>Mode</p>
      <span>
        <button className='X border-solid border-2 border-black' onClick={handleXClick}> X </button>
        <button className='O border-solid border-2 border-black'  onClick={handleOClick}> O </button>
      </span>
    </div>

    <div className='main-body grid grid-rows-3 grid-flow-col bg-green-100 w-5rem'>
      <div className='sq1 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq2 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq3 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq4 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq5 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq6 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq7 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq8 border-solid border-2 border-black'>{currentValue}</div>
      <div className='sq9 border-solid border-2 border-black'>{currentValue}</div>

    </div>

    <footer>
      <button>Start / Restart</button>
    </footer>
    

    
  </>
 
  );
}

export default App;

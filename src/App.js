import './App.css';
import { Selection} from './Components/Selection';
import { GameBoard } from './Components/GameBoard';


function App() {
  
  return (
    <div className='main-body flex justify-center items-center flex-col '>
      <h1>Tic-Tac-Toe in React</h1>
      <div className='main-container flex flex-col justify-center gap-4'>
        <Selection />
        <GameBoard />
        <button>Start / Restart</button>
      </div>
    </div>
  );
}

export default App;


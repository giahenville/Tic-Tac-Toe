import './App.css';
import { Selection} from './Components/Selection';
import { GameBoard } from './Components/GameBoard';


function App() {
  
  return (
    <div className='flex flex-col justify-center items-center text-xl'>
      <h1 className='text-5xl '>Tic-Tac-Toe in React</h1>
      <div className='main-container mt-10 flex flex-col justify-center gap-4'>
        <Selection />
        <GameBoard />
      </div>
    </div>
    
  );
}

export default App;


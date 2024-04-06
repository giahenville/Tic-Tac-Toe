import { HandlePlayerSymbol, SetAiMode, SetPlayOrder } from '../Components/Main';
import XImage from '../Assets/close.png';
import OImage from '../Assets/letter-o.png';

function Selection () {
    return (
        <div className='header'>
            <form id = "mode" className='mode'>
            <select className='modeMenu focus:outline-none' 
                    defaultValue= "easy" 
                    onChange={(event) => SetAiMode(event.target.value)}
            >
                <option value ="easy" >Easy</option>
                {/* <option value="hard">Hard</option>
                <option value="impossible">Impossible</option> */}
            </select>
            </form>
            <p className='flex justify-center m-5'>Choose your player:</p>
            <span className='flex justify-center gap-10'>
            <button className='X-btn hover-effect border-solid border-2 border-black rounded-md p-3 ' onClick={ () => {
                HandlePlayerSymbol("X", "X-btn");
                }}> <img src={XImage} alt='O symbol' className='w-6'></img> 
            </button>
            <button className='O-btn hover-effect border-solid border-2 border-black rounded-md p-2'  onClick={ () => {
                HandlePlayerSymbol("O", "O-btn");
                SetPlayOrder(); // gets ai to play first
                }}>  <img src={OImage} alt='O symbol' className='w-8'></img> 
            </button>
            </span>
        </div>
    )
}

export {
    Selection
}
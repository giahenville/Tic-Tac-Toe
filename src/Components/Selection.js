import { HandlePlayerSymbol, SetAiMode, SetPlayOrder } from '../Components/Main';
import XImage from '../Assets/close.png';
import OImage from '../Assets/letter-o.png';

function Selection () {
    return (
        <div className='header'>
            <form id = "mode" className='mode'>
            <select className='modeMenu' defaultValue= "easy" onChange={(event) => SetAiMode(event.target.value)}>
                <option value ="easy" >Easy</option>
                <option value="hard">Hard</option>
                <option value="impossible">Impossible</option>
            </select>
            </form>
            <span className='flex justify-center gap-2'>
            <button className='X-btn hover-effect' onClick={ () => {
                HandlePlayerSymbol("X");
                }}> <img src={XImage} alt='O symbol' className='w-6'></img> 
            </button>
            <button className='O-btn hover-effect'  onClick={ () => {
                HandlePlayerSymbol("O");
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
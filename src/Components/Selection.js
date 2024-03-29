import { HandlePlayerSymbol, SetAiMode, SetPlayOrder } from '../Components/Main';

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
            <button className='X-btn border-solid border-2 border-black w-14' onClick={ () => {
                HandlePlayerSymbol("X");
                }}> X </button>
            <button className='O-btn border-solid border-2 border-black w-14'  onClick={ () => {
                HandlePlayerSymbol("O");
                SetPlayOrder(); // gets ai to play first
                }}> O </button>
            </span>
        </div>
    )
}

export {
    Selection
}
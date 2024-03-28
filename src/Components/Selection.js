import { HandlePlayerSymbol, SetAiMode } from '../Components/Main';

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
            <span>
            <button className='X-btn border-solid border-2 border-black' onClick={ () => {
                HandlePlayerSymbol("X");
                }}> X </button>
            <button className='O-btn border-solid border-2 border-black'  onClick={ () => {
                HandlePlayerSymbol("O");
                }}> O </button>
            </span>
        </div>
    )
}

export {
    Selection
}
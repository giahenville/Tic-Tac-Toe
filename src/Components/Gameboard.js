import { HandleSquareClick } from './Main';

function GameBoard() {
    return (
        <div className='gameboard flex-col'>
            <div className='row1 flex'>
                <button className='square' id="0" onClick={ () => { 
                    HandleSquareClick(0); 
                }} ></button>
                <button className='square' id="1" onClick={ () => {
                    HandleSquareClick(1); 
                }}  ></button>
                <button className='square' id="2" onClick={ () => {
                    HandleSquareClick(2); 
                }} ></button>
            </div>
            <div className='row2 flex'>
                <button className='square' id="3" onClick={ () => {
                    HandleSquareClick(3); 
                }} ></button>
                <button className='square' id="4" onClick={ () => {
                    HandleSquareClick(4); 
                }} ></button>
                <button className='square' id="5" onClick={ () => {
                    HandleSquareClick(5); 
                }} ></button>
            </div>
            <div className='row3 flex'>
                <button className='square' id="6" onClick={ () => {
                    HandleSquareClick(6); 
                }} ></button>
                <button className='square' id="7" onClick={ () => {
                    HandleSquareClick(7); 
                }} ></button>
                <button className='square' id="8" onClick={ () => {
                    HandleSquareClick(8); 
                }} ></button>
            </div>
      </div>
    );
};


export {
    GameBoard
}
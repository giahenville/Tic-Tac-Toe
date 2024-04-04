let aiSymbol;
let playerSymbol;

// gets symbols from Main.js
const SetSymbol = (ai, player) => {
    aiSymbol = ai;
    playerSymbol = player;
}

function checkWinner(gameBoardCopy) {
    const winningSets = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const set of winningSets) {
        if (   gameBoardCopy[set[0]] === gameBoardCopy[set[1]]
            && gameBoardCopy[set[1]] === gameBoardCopy[set[2]]
            && gameBoardCopy[set[0]] !== null) {
            return true;
        }
    }
    return false;
}

function getUtilityScore(isMaximizer, numFreeSpaces) {
    let multiplier;

    if (numFreeSpaces === 0) {
        multiplier = 0;
    } else {
        if (isMaximizer)    multiplier = 1;
        else                multiplier = -1;
    }

    return multiplier * (1 + numFreeSpaces);
}

/*
function Minimax(board, isMaximizer = true, depth = 0) {
    // Base case, there is a winning state
    if (checkWinner(board)) {
        let freeSpaces = 0;
        for (const grid in board) {
            if (grid === null) freeSpaces++;
        }
        return getUtilityScore(isMaximizer, freeSpaces);
    }

    // Instantiate variables
    let boardCopy = board.slice();

    let bestScore = null; 
    let bestIndex = null;

    let worstScore = null; 
    let worstIndex = null;

    let symbol;

    // Update symbol to corresponding player
    if (isMaximizer)
        symbol = aiSymbol;
    else 
        symbol = playerSymbol;

    // Play every possible grid
    for (let index = 0; index < board.length; index++) {
        if (boardCopy[index] !== null) continue;

        boardCopy[index] = symbol;  // set the value
        const [bi, bs, wi, ws] = Minimax(boardCopy, !isMaximizer, depth + 1); // recursively go through every possible play

        if (depth > 0) {
            worstScore = Math.min(bestScore, score);
            worstIndex = min_index;
        } else {
            bestScore = Math.max(bestScore, score);
            bestIndex = index;
        }

        boardCopy[index] = null;    // reset the board state
    }

    if (depth === 0) return bestIndex;
    return [bestIndex, bestScore, worstIndex, worstScore];
}

*/

const isBoardFull = (board) => {
   let result = board.filter((el) => el !== null);
   if (result.length) return false;
   return true;
}


function Minimax(board, isMaximizer = true, depth = 0) {
    // Base cases
    if (depth > 0) {
        if (checkWinner(board) || isBoardFull(board)) {
            return getUtilityScore(isMaximizer);
        }
    }

    let bestScore = isMaximizer ? -Infinity : Infinity;
    let bestIndex = null;
    let worstScore = isMaximizer ? Infinity : -Infinity;
    let worstIndex = null;
    let boardCopy = board.slice(0);

    // Update symbol to corresponding player
    let symbol = isMaximizer ? aiSymbol : playerSymbol;

    // Play every possible grid
    for (let index = 0; index < board.length; index++) {
        if (boardCopy[index] !== null) continue;

        boardCopy[index] = symbol;
        const [bs, bi, ws, wi] = Minimax(boardCopy, !isMaximizer, depth + 1);
        console.log(bs);
        if (isMaximizer) {
            if (bs > bestScore) {
                bestScore = bs;
                bestIndex = bi;
            }
        } else {
            if (ws < worstScore) {
                worstScore = ws;
                worstIndex = wi;
            }
        }

        boardCopy[index] = null;    // reset the board state
    }

    if (depth === 0) {
        if (bestScore > worstScore) 
            return bestIndex;
        return worstIndex;
    } 

    return [bestScore, bestIndex, worstScore, worstIndex];
}



export {
    Minimax,
    SetSymbol
}
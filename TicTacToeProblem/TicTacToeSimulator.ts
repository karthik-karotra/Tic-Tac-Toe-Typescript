console.log('============================================');
console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
console.log('============================================');

let board: any[][] = [];
const ROWS = 3
const COLUMNS = 3
let letterAssigned;

let resetBoard = () => {
    for (let i: number = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j: number = 0; j < COLUMNS; j++) {
            board[i][j] = '.';
        }
    }
}

let assigningLetterToPlayer = () => {
    let random = Math.floor(Math.random() * 10) % 2;
    random === 1 ? letterAssigned = "X" : letterAssigned = "O";
}

resetBoard();
assigningLetterToPlayer();
console.log('Letter assigned is ' + letterAssigned);
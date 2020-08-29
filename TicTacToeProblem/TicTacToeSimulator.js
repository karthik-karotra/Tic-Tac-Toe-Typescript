console.log('============================================');
console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
console.log('============================================');
let board = [];
const ROWS = 3;
const COLUMNS = 3;
let letterAssigned;
let resetBoard = () => {
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            board[i][j] = '.';
        }
    }
};
let assigningLetterToPlayer = () => {
    let random = Math.floor(Math.random() * 10) % 2;
    /* if (random == 1) {
         letterAssigned = "X";
     }
     else {
         letterAssigned = "O";
     }*/
    random === 1 ? letterAssigned = "X" : letterAssigned = "O";
};
resetBoard();
assigningLetterToPlayer();
console.log('Letter assigned is ' + letterAssigned);
//# sourceMappingURL=TicTacToeSimulator.js.map
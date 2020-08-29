console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
let board = [];
const ROWS = 3;
const COLUMNS = 3;
let resetBoard = () => {
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            board[i][j] = '.';
        }
    }
};
resetBoard();
//# sourceMappingURL=TicTacToeSimulator.js.map
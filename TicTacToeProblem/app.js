console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
let board = [];
//var arr_names: number[] = new Array(4) 
const ROWS = 3;
const COLUMNS = 3;
let resetBoard = () => {
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            board[i][j] = i;
        }
    }
};
let displayTicTacToeBoard = () => {
    console.log('===============');
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            process.stdout.write('| ' + board[i][j] + ' |');
        }
        console.log();
        console.log('===============');
    }
};
resetBoard();
displayTicTacToeBoard();
//# sourceMappingURL=app.js.map
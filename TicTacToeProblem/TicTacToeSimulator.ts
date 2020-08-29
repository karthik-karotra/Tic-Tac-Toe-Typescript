console.log('============================================');
console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
console.log('============================================');

let board: any[][] = [];
const ROWS = 3
const COLUMNS = 3
let letterAssigned;
let count = 0;
const TOTAL_PLAYS = ROWS * COLUMNS;
var readlineSync = require('readline-sync');
let row;
let column;

let resetBoard = () => {
    for (let i: number = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j: number = 0; j < COLUMNS; j++) {
            board[i][j] = '.';
        }
    }
}

let checkingPlayerAndAssignedLetterToHim = () => {
    let random = Math.floor(Math.random() * 10) % 2;
    if (random == 1) {
        letterAssigned = "X";
        let player1 = letterAssigned
        console.log('Player to play first is player1 and letter assigned to him is ' + player1);
    }
    else {
        letterAssigned = "O";
        let player1 = letterAssigned
        console.log('Player to play first is player1 and letter assigned to him is ' + player1);
    }
}

let displayTicTacToeBoard = () => {
    console.log('===============');
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            process.stdout.write('| ' + board[i][j] + ' |');
        }
        console.log();
        console.log('===============');
    }
}

let changeOneDimentionalPositionToTwoDimentional = (position) => {
    row = Math.floor((position - 1) / COLUMNS)
    column = (position - 1) % COLUMNS
}

let setLetter = (row, column, letterAssigned) => {
    console.log(row);
    console.log(column);

    if (board[row][column] == '.') {
        board[row][column] = letterAssigned;
        count++;
    }
    else {
        console.log('You cant place there Its already occupied');
    }
}

function playGame() {
    while (count < TOTAL_PLAYS) {
        let position = readlineSync.question('Enter the position you want to place your letter (1-9)');
        if (position > 0 && position <= TOTAL_PLAYS) {
            changeOneDimentionalPositionToTwoDimentional(position);
            setLetter(row, column, letterAssigned);
            displayTicTacToeBoard();
        }
        else {
            console.log('Invalid Position');
        }
    }
}

resetBoard();
checkingPlayerAndAssignedLetterToHim();
displayTicTacToeBoard();
playGame();
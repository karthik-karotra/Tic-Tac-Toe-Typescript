"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
console.log('============================================');
console.log('Welcome To Tic Tac Toe Simulator!!!!!!');
console.log('============================================');
let board = [];
const ROWS = 3;
const COLUMNS = 3;
let letterAssigned;
let count = 0;
const TOTAL_PLAYS = ROWS * COLUMNS;
var readlineSync = require('readline-sync');
let row;
let column;
let player1;
let resetBoard = () => {
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            board[i][j] = '.';
        }
    }
};
let checkingPlayerAndAssignedLetterToHim = () => {
    let random = Math.floor(Math.random() * 10) % 2;
    if (random == 1) {
        letterAssigned = "X";
        player1 = letterAssigned;
        console.log('Player to play first is player1 and letter assigned to him is ' + player1);
    }
    else {
        letterAssigned = "O";
        player1 = letterAssigned;
        console.log('Player to play first is player1 and letter assigned to him is ' + player1);
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
let changeOneDimentionalPositionToTwoDimentional = (position) => {
    row = Math.floor((position - 1) / COLUMNS);
    column = (position - 1) % COLUMNS;
};
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
};
let checkWinner = () => {
    //sign = $1
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let row = 0; row < 3; row++) {
        let rowCount = 0;
        let columnCount = 0;
        for (let column = 0; column < 3; column++) {
            // row check
            if (board[row][column] == letterAssigned) {
                rowCount++;
            }
            //col check
            if (board[column][row] == letterAssigned) {
                columnCount++;
            }
            //rightDiagonal
            if (row == column && board[row][column] == letterAssigned) {
                rightDiagonal++;
            }
            //left Diagonal
            if ((row + column) == 2 && board[row][column] == letterAssigned) {
                leftDiagonal++;
            }
            if (rowCount == 3 || columnCount == 3 || rightDiagonal == 3 || leftDiagonal == 3) {
                console.log(player1 + ' Wins');
                process_1.exit();
            }
        }
    }
};
function playGame() {
    while (count < TOTAL_PLAYS) {
        let position = readlineSync.question('Enter the position you want to place your letter (1-9)');
        if (position > 0 && position <= TOTAL_PLAYS) {
            changeOneDimentionalPositionToTwoDimentional(position);
            setLetter(row, column, letterAssigned);
            displayTicTacToeBoard();
            checkWinner();
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
//# sourceMappingURL=TicTacToeSimulator.js.map
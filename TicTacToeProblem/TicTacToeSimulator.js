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
let flag = true;
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
        console.log('Player will play first and letter assigned to him is ' + letterAssigned);
        console.log('Letter assigned to computer is O');
        playerMove();
    }
    else {
        letterAssigned = "O";
        console.log('Computer will play first and letter assigned to him is ' + letterAssigned);
        console.log('Letter assigned to player is X');
        computerMove();
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
        playGame();
    }
};
let checkWin = () => {
    let leftDiagonalCount = 0;
    let rightDiagonalCount = 0;
    for (let row = 0; row < 3; row++) {
        let rowCount = 0;
        let columnCount = 0;
        for (let column = 0; column < 3; column++) {
            if (board[row][column] == letterAssigned) {
                rowCount++;
            }
            if (board[column][row] == letterAssigned) {
                columnCount++;
            }
            if (row == column && board[row][column] == letterAssigned) {
                rightDiagonalCount++;
            }
            if ((row + column) == 2 && board[row][column] == letterAssigned) {
                leftDiagonalCount++;
            }
            if (rowCount == 3 || columnCount == 3 || rightDiagonalCount == 3 || leftDiagonalCount == 3) {
                flag = false;
            }
        }
    }
    if (flag == false) {
        console.log(letterAssigned + ' Wins');
        process_1.exit();
    }
    else if (count == TOTAL_PLAYS) {
        displayTicTacToeBoard();
        console.log('Its a Tie');
        process_1.exit();
    }
};
let playerMove = () => {
    console.log("Player's Turn");
    displayTicTacToeBoard();
    playGame();
    letterAssigned = "O";
    computerMove();
};
let computerMove = () => {
    console.log("Computer's turn");
    displayTicTacToeBoard();
    playGame();
    letterAssigned = "X";
    playerMove();
};
let playGame = () => {
    while (count < TOTAL_PLAYS) {
        let position = readlineSync.question('Enter the position you want to place your letter (1-9)');
        if (position > 0 && position <= TOTAL_PLAYS) {
            changeOneDimentionalPositionToTwoDimentional(position);
            setLetter(row, column, letterAssigned);
            displayTicTacToeBoard();
            if (count > 4) {
                checkWin();
            }
        }
        else {
            console.log('Invalid Position');
        }
        break;
    }
};
resetBoard();
checkingPlayerAndAssignedLetterToHim();
//# sourceMappingURL=TicTacToeSimulator.js.map
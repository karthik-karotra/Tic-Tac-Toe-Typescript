import { exit } from "process";

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
let flag: boolean = true;
let switch1;
let madeMoveFlag;

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
    if (board[row][column] == '.') {
        board[row][column] = letterAssigned;
        displayTicTacToeBoard();
        count++;
    }
    else if (switch1 == 1) {
        console.log("You can't place there.It's already occupied");
        playersPlay();
    }
	else {
        computersPlay();
    }
}

let checkWin = (letterAssigned) => {
    let leftDiagonalCount = 0
    let rightDiagonalCount = 0
    for (let row = 0; row < 3; row++) {
        let rowCount = 0
        let columnCount = 0
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

}

let displayWinOrTie = (letterAssigned) => {
    if (flag == false) {
        console.log(letterAssigned + ' Wins');
        displayTicTacToeBoard();
        exit();
    }
    else if (count == TOTAL_PLAYS) {
        displayTicTacToeBoard();
        console.log('Its a Tie');
        exit();
    }
}

let playerMove = () => {
    console.log("Player's Turn");
    displayTicTacToeBoard();
    playersPlay();
    letterAssigned = "O";
    computerMove();
}

let computerMove = () => {
    console.log("Computer's turn");
    computersPlay();
    displayTicTacToeBoard();
    letterAssigned = "X";
    playerMove();
}

let playForWinCondition = (letterAssigned) => {
    let block = 0
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] == ".") {
                board[row][column] = letterAssigned
                checkWin(letterAssigned)
                if (flag == false && letterAssigned == "O")
                {
                    displayWinOrTie(letterAssigned);
                }
                else if (flag == false && letterAssigned == "X") {
                    board[row][column] = "O"
                    block = 1
                    count++;
                    flag = true;
                    break;
                }
                else {
                    board[row][column] = "."
                }
            }
        }
    }
    if (block == 1) {
        madeMoveFlag = 1;
    } else {
        madeMoveFlag = 0;
    }
}

let checkForCorners = () => {
    madeMoveFlag = 0
    for (let row = 0; row < 3; row += 2) {
        for (let column = 0; column < 3; column += 2)
        {
            if(board[row][column] == '.')
            {
                board[row][column] = letterAssigned
                displayTicTacToeBoard();
                count++
                checkWin(letterAssigned);
                displayWinOrTie(letterAssigned);
                playerMove();
                
            }
        }
    }
}

let playersPlay = () => {
    while (count < TOTAL_PLAYS) {
        letterAssigned = "X";
        switch1= 1
        let position = readlineSync.question('Enter the position you want to place your letter (1-9)');
        if (position > 0 && position <= TOTAL_PLAYS) {
            changeOneDimentionalPositionToTwoDimentional(position);
            setLetter(row, column, letterAssigned);
            displayTicTacToeBoard();
            if (count > 4) {
                checkWin(letterAssigned);
            } 
            displayWinOrTie(letterAssigned);
        }
        else {
            console.log('Invalid Position');
            playersPlay();
        }
        break;
    }
}

let computersPlay = () => {
    switch1= 0
    playForWinCondition(letterAssigned);
    playForWinCondition("X");
    if (madeMoveFlag == 0) {
        checkForCorners();
    }
    if (madeMoveFlag == 0) {
        let position = Math.floor(Math.random() * 9) + 1
        changeOneDimentionalPositionToTwoDimentional(position);
        setLetter(row, column, letterAssigned)
        checkWin(letterAssigned);
    }
}

resetBoard();
checkingPlayerAndAssignedLetterToHim();
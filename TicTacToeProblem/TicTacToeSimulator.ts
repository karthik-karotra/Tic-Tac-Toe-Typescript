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

resetBoard();
checkingPlayerAndAssignedLetterToHim();
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board;  //represents the state of the squares on the board STEP 1
let turn; //tracking whos turn it is
let winner; //represents if anyone has won 
let tie; //represents if the game ended in a tie 


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['X','','O','','','','','',''];
    turn = 'X';
    winner = false;
    tie = false;
}




const render = () => {
updateMessage();
updateBoard();
}


const updateBoard = () => {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            squareEls[idx].textContent = "X";
        } else if (cell === 'O') {
            squareEls[idx].textContent = 'O';
        } else {
            squareEls[idx].textContent = '';
        }
    });
};

const updateMessage = () => {
    if (!winner && !tie) {
      if (turn === 'X') {
        messageEl.textContent = "It's X's turn";
      } else {
        messageEl.textContent = "It's O's turn";
      }
    } else if (!winner && tie) {
        messageEl.textContent = "Tie game!"
    } else {
        if (turn === X) {
            messageEl.textContent = "X wins the game!"
        } else {
            messageEl.textContent = "O wins the game!"
        }
        }
    };



/*----------------------------- Event Listeners -----------------------------*/
init();
render();



/*---------------------------- Variables (state) ----------------------------*/
let board;  //represents the state of the squares on the board STEP 1
let turn; //tracking whos turn it is
let winner; //represents if anyone has won 
let tie; //represents if the game ended in a tie 


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const resetBtnEl = document.querySelector('#reset');
const messageEl = document.querySelector('#message');



/*-------------------------------- Functions --------------------------------*/


const render = () => {
updateMessage();
updateBoard();
};


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
        if (turn === 'X') {
            messageEl.textContent = "X wins the game!"
        } else {
            messageEl.textContent = "O wins the game!"
        }
        }
    };

    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
      ];

      
      

/*----------------------------- Event Listeners -----------------------------*/

const handleClick = (event) => {
    const sqrIdx = event.target.id;
    const squareIsFull = board[sqrIdx] !== '';
    if (squareIsFull || winner) {
      return;
    }
    placePiece(sqrIdx);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  };
  
  const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
  };
  
  init();
  
  /*----------------------------- Event Listeners -----------------------------*/
  
  squareEls.forEach((square) => {
    square.addEventListener('click', handleClick);
  });
  resetBtnEl.addEventListener('click', init);
  

const placePiece = (sqrIdx) => {
    board[sqrIdx] = turn;
}

const checkForWinner = () => {
    winningCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];  
        }
    });
};

const checkForTie = () => {
    if (!board.includes('') && !winner) {
        tie = true;
    }
};

const switchPlayerTurn = () => {
    if (winner === true) {
        return;
    } if (winner === false) {
        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X'
        }
    }}


init();
render();
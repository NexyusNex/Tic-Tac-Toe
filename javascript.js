var turn = true;
var gameEnd = false;

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  function UseMove(index) {
    if (board[index] == "" && gameEnd == false) {
      if (turn == true) {
        board[index] = "X";
        turn = false;
      } else {
        board[index] = "O";
        turn = true;
      }
      Display();
      checkBoard();
    }
  }

  return {
    board,
    UseMove: UseMove,
  };
})();

const Player = (player) => {
  const name = player;
};

function winner(element) {
  if (element == "O") {
    alert("the winner is player 2");
    gameEnd = true;
  }
  if (element == "X") {
    alert("the winner is player 1");
    gameEnd = true;
  }
}

function checkBoard() {
  if (
    gameBoard.board[0] == gameBoard.board[1] &&
    gameBoard.board[1] == gameBoard.board[2]
  ) {
    winner(gameBoard.board[0]);
  }
  if (
    gameBoard.board[3] == gameBoard.board[4] &&
    gameBoard.board[4] == gameBoard.board[5]
  ) {
    winner(gameBoard.board[3]);
  }
  if (
    gameBoard.board[6] == gameBoard.board[7] &&
    gameBoard.board[7] == gameBoard.board[8]
  ) {
    winner(gameBoard.board[6]);
  }
  if (
    gameBoard.board[0] == gameBoard.board[3] &&
    gameBoard.board[3] == gameBoard.board[6]
  ) {
    winner(gameBoard.board[0]);
  }
  if (
    gameBoard.board[1] == gameBoard.board[4] &&
    gameBoard.board[4] == gameBoard.board[7]
  ) {
    winner(gameBoard.board[1]);
  }
  if (
    gameBoard.board[2] == gameBoard.board[5] &&
    gameBoard.board[5] == gameBoard.board[8]
  ) {
    winner(gameBoard.board[2]);
  }
  if (
    gameBoard.board[0] == gameBoard.board[4] &&
    gameBoard.board[4] == gameBoard.board[8]
  ) {
    winner(gameBoard.board[0]);
  }
  if (
    gameBoard.board[2] == gameBoard.board[4] &&
    gameBoard.board[4] == gameBoard.board[6]
  ) {
    winner(gameBoard.board[2]);
  }
  for (let i = 0; i < 9; i++) {
    if (gameBoard.board[i] == "") {
      break;
    }
    if (i == 8) alert("it's a tie.");
    gameEnd = true;
  }
}

function Display() {
  const container = document.querySelector(".gameboard");
  container.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let slot = document.createElement("div");
    slot.classList.add("slot");
    slot.textContent = gameBoard.board[i];
    slot.setAttribute("data-index", i);

    slot.addEventListener("click", function (e) {
      let index = slot.getAttribute("data-index");
      gameBoard.UseMove(index);
    });

    container.appendChild(slot);
  }
}

Display();

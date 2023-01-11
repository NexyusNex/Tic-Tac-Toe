var turn = true;
var gameEnd = false;

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  function UseMove(index) {
    console.log("a", board[index], gameEnd);
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

  function resetBoard() {
    board.fill("", 0, 9);
    turn = true;
    gameEnd = false;
    const result = document.querySelector("#result");
    result.textContent = "";
    Display();
  }

  return {
    board,
    UseMove: UseMove,
    resetBoard: resetBoard,
  };
})();

const Player = (player) => {
  const name = player;
};

function winner(element) {
  if (element == "O") {
    const result = document.querySelector("#result");
    result.textContent = "O wins the round!";
    gameEnd = true;
  }
  if (element == "X") {
    const result = document.querySelector("#result");
    result.textContent = "X wins the round!";
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
  if (!gameBoard.board.includes("")) {
    const result = document.querySelector("#result");
    result.textContent = "It's a tie!";
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

const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  gameBoard.resetBoard();
});

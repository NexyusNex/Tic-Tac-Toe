var turn = true;
var gameEnd = true;

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

const Player = (name) => {
  return {
    name,
  };
};

const player1 = Player("X");
const player2 = Player("O");

function winner(element) {
  if (element == "O") {
    const result = document.querySelector("#result");
    result.textContent = player2.name + " wins the round!";
    gameEnd = true;
  }
  if (element == "X") {
    const result = document.querySelector("#result");
    result.textContent = player1.name + " wins the round!";
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
  if (turn == true) {
    const result = document.querySelector("#result");
    result.textContent = player1.name + "'s turn.";
  } else {
    const result = document.querySelector("#result");
    result.textContent = player2.name + "'s turn.";
  }

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

const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  gameBoard.resetBoard();
});

const start = document.querySelector("#start");

start.addEventListener("click", function () {
  if (gameEnd == true) {
    player1.name = prompt("Enter the name for player one.");
    player2.name = prompt("Enter the name for player two.");

    gameBoard.resetBoard();
    const div = document.querySelectorAll(".gameboard");
    div.forEach((board) => {
      board.style.backgroundColor = "white";
      board.style.border = "none";
    });
    Display();
  }
});

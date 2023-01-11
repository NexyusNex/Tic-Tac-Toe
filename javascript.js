var turn = true;

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  function UseMove(index) {
    if (board[index] == "") {
      if (turn == true) {
        board[index] = "X";
        turn = false;
      } else {
        board[index] = "O";
        turn = true;
      }
      Display();
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

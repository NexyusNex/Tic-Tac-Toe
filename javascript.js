const gameBoard = (() => {
  let board = ["x", "o", "o", "x", "o", "x", "o", "o", "x"];

  return {
    board,
  };
})();

const Player = (player) => {
  const name = player;
};

console.log(gameBoard.board);

function Display() {
  const container = document.querySelector(".gameboard");
  for (let i = 0; i < 9; i++) {
    let slot = document.createElement("div");
    slot.classList.add("slot");
    slot.textContent = gameBoard.board[i];
    container.appendChild(slot);
    console.log(gameBoard.board[i]);
  }
}

Display();

const gameBoard = ((board) => {
  let gameBoard = [];
})();

const Player = (player) => {
  const name = player;
};

const board = gameBoard([(x, o, o, x, o, x, o, o, x)]);

function Display() {
  for (let i = 0; i < 9; i++) {
    console.log(board.gameBoard[i]);
  }
}

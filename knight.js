// Build a knight factory and a gameboard factory

const knightFactory = (x, y) => {
  let position = [x, y];
  const getPosition = () => position;
  return { getPosition };
};

const gameBoardFactory = () => {
  // Create a gameboard that will store all chess squares with all possible knight moves.
  const gameBoard = new Map();

  // Build the game board and add knight moves to it
  buildGameBoard(gameBoard);
  addKnightMoves(gameBoard);

  const getGameBoard = () => gameBoard;

  return { getGameBoard };
};

// Create a function that build the gameboard squares
function buildGameBoard(board, size = 8) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board.set(`${[i, j]}`, []);
    }
  }
}

// Create a function that adds all possible knight moves to the game board
function addKnightMoves(board) {
  // Store in an array all possible knight moves.
  const moves = [
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
  ];
  for (let [square] of board) {
    squareArray = square.split(",");
    let posX = parseInt(squareArray[0]);
    let posY = parseInt(squareArray[1]);
    for (let move of moves) {
      let newPosX = posX + move[0];
      let newPosY = posY + move[1];
      if (0 <= newPosX && newPosX < 8 && 0 <= newPosY && newPosY < 8) {
        let newPosition = [newPosX, newPosY];
        board.get(square).push(newPosition);
      }
    }
  }
}

const board = gameBoardFactory();
console.log(board.getGameBoard());

// Make knightMoves that moves the knight from his started position to an end position in the shortest possible way.

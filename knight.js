// Build a gameboard factory

const gameBoardFactory = () => {
  // Create a gameboard that will store all chess squares with all possible knight moves.
  const gameBoard = new Map();

  // Build the game board and add knight moves to it
  buildGameBoard(gameBoard);
  addKnightMoves(gameBoard);

  // Get the board information
  const getGameBoard = () => gameBoard;

  // Return the shortest path a knight can take from the start to the end. Using BFS.
  const knightMoves = (start, end) => {
    // Create a queue, a visited set that stores all visited nodes and all the shortest paths from start to end.
    const visited = new Set();
    const queue = [];
    const paths = [];

    // Add start node to the queue.
    queue.push({ current: start, path: [start], distance: 0 });

    // Loop through the queue as long as it has elements inside.
    while (queue.length) {
      const { current, path, distance } = queue.shift();
      // Mark as visited the first item on the queue.
      visited.add(current);
      // Check if it's reached the end point.
      if (current === end) {
        paths.push({ path, distance });
      }
      // Get the all possible moves from the current node.
      const adjacentMoves = gameBoard.get(current);
      // Iterate through each possible move.
      for (let availableMove of adjacentMoves) {
        // If the move haven't been visited, add it to the queue.
        if (!visited.has(availableMove)) {
          queue.push({
            current: availableMove,
            path: [...path, availableMove],
            distance: distance + 1,
          });
        }
      }
    }

    // Print the results to the console.
    let count = 0;
    console.log(
      `=> You made it in ${paths[0]["distance"]} moves! Here's all possible paths:`
    );
    paths.forEach((path) => {
      count++;
      let currentPath = "START => ";
      path["path"].forEach((position) => {
        currentPath += `[${position}] - `;
      });
      console.log(`Path ${count}: ${currentPath} END`);
    });
  };

  return { getGameBoard, knightMoves };
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
        board.get(square).push(`${[newPosX, newPosY]}`);
      }
    }
  }
}

// Script

const board = gameBoardFactory();
board.knightMoves("0,0", "2,7"); // Return all the shortest path from start to end.
board.knightMoves("5,3", "4,7"); // Return all the shortest path from start to end.

# Knights Travails

This is a project from [TheOdinProject](https://www.theodinproject.com/lessons/javascript-knights-travails) curriculum.\
**Description:** This works as a chess board, where you select an initial and end position, and prints to the console all the shortest paths that will take to the destination.

### Tools Used:

This application was builded using javascript.

### Features:

- **buildGameBoard(gameboard, size):** let you add all possible positions ([x , y] combinations) on the board of certain size, by default the size is 8x8.
- **addKnightMoves(gameboard):** let you add all possible adjacent moves a knight can make in each position.
- **gameBoardFactory():** create a new gameboard with methods.

#### gameBoardFactory() Methods:

- **getGameBoard():** let you get the current state of the gameboard.
- **knightMoves(start, end):** print to the console the shortest paths from the start to the end. This uses BFS as the algorythm to search.

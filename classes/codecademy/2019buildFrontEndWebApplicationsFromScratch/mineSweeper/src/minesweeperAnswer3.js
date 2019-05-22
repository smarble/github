
/**generates game board of the specified size, and adds bombs to random squares on the game board. EX: generateGameBoard(5,9) would result in a 5 row x 9 column game board*/
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];

  /**For loop iterating through numberOfRows*/
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    /**Create an empty row array*/
    const row = [];
    /**For loop iterating through numberOfColumns*/
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      /**Push the empty spaces onto the row array*/
      row.push(' ');
    }
    /**push the row onto the board array*/
    board.push(row);
  }
  /**Return the board array*/
  return board;
};

/**generates bomb board of the specified size, and adds bombs to random squares on the game board. EX: generateBombBoard(5,9,14) would result in a 5x9 game board with 14 random bombs*/
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];

  /**For loop iterating through numberOfRows*/
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    /**Create an empty row array*/
    const row = [];
    /**For loop iterating through numberOfColumns*/
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      /**Push the empty spaces onto the row array*/
      row.push(null);
    }
    /**push the row onto the board array*/
    board.push(row);
  }


  // add bombs to the bomb board until our counter reaches the specified number of bombs
  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // This code has the potential to place bombs on top of bombs, this will be fixed with control flow.
      // Set randomRowIndex equal to a random number (not a decimal) between zero and the specified number of rows
     const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      // Set randomColumnIndex equal to a random number (not a decimal) between zero and the specified number of rows
     const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      // use the board variable and access the space at the generated randomRowIndex and randomColumnIndex. Set it equal to 'B'.
      //*This while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.*/
     board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  /**Return the board array*/
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
// bombBoard will sometimes have less bombs than specified due to the previously-mentioned missing code.
// Additionally, printing bombBoard will not look clean due to use of null instead of ' ' - this should just be for debugging, not presentation.
printBoard(bombBoard);
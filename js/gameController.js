import Player from "./player.js";
import board from "./board.js";
import gameView from "./gameView.js";

/**
 * The game controller contains the primary logic of the game and handles interactions
 * between game components.
 * @param {String} playerOneName Player 1's name
 * @param {String} playerTwoName Player 2's name
 * @returns The gameController API
 */
function gameController(playerOneName, playerTwoName) {
  // Set up the game components
  const playerOne = new Player(playerOneName, 'X');
  const playerTwo = new Player(playerTwoName, 'O');
  let activePlayer = playerOne;
  const view = gameView(
    document.querySelector('.game-container'),
    playerOne.getName(),
    playerTwo.getName()
  );

  /**
   * Starts the game
   */
  function startGame() {
    view.setup();
    const gameBoard = document.querySelector('.board');

    gameBoard.addEventListener('click', e => {
      const markPositionX = e.target.getAttribute('data-x');
      const markPositionY = e.target.getAttribute('data-y');
      const activePlayerMarker = activePlayer.getMarker();

      board.mark(markPositionX, markPositionY, activePlayerMarker);
      view.update(board.getBoard());

      if (!checkForWin()) {
        // Switch the active player
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
      } else {
        activePlayer.addScore();
        board.reset();
        view.update(board.getBoard());
        console.log(`${activePlayer.getName()} : ${activePlayer.getScore()}`);
      }
    });
  }

  /**
   * Checks every possible win condition of the board to see if a winning
   * marker has been placed.
   * @returns True or false if a win condition has been met
   */
  function checkForWin() {
    const gameBoard = board.getBoard();

    // Check the top row
    if (gameBoard[0][0] !== '' && gameBoard[0][1] === gameBoard[0][0] && gameBoard[0][2] === gameBoard[0][0]) {
      return true;
    }

    // Check the middle row
    if (gameBoard[1][0] !== '' && gameBoard[1][1] === gameBoard[1][0] && gameBoard[1][2] === gameBoard[1][0]) {
      return true;
    }

    // Check bottom row
    if (gameBoard[2][0] !== '' && gameBoard[2][1] === gameBoard[2][0] && gameBoard[2][2] === gameBoard[2][0]) {
      return true;
    }

    // Check left column
    if (gameBoard[0][0] !== '' && gameBoard[1][0] === gameBoard[0][0] && gameBoard[2][0] === gameBoard[0][0]) {
      return true;
    }

    // Check middle column
    if (gameBoard[0][1] !== '' && gameBoard[1][1] === gameBoard[0][1] && gameBoard[2][1] === gameBoard[0][1]) {
      return true;
    }

    // Check right column
    if (gameBoard[0][2] !== '' && gameBoard[1][2] === gameBoard[0][2] && gameBoard[2][2] === gameBoard[0][2]) {
      return true;
    }

    // Check diagonal - top left to bottom right
    if (gameBoard[0][0] !== '' && gameBoard[1][1] === gameBoard[0][0] && gameBoard[2][2] === gameBoard[0][0]) {
      return true;
    }

    // Check diagonal - bottom left to top right
    if (gameBoard[2][0] !== '' && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] === gameBoard[2][0]) {
      return true;
    }

    return false;
  }

  return {
  startGame
  }
}

export default gameController;
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
  const view = gameView(
    document.querySelector('.game-container'),
    playerOne.getName(),
    playerTwo.getName()
  );

  /**
   * Starts the game
   */
  function startGame() {
  
  }

  return {
  startGame
  }
}

export default gameController;
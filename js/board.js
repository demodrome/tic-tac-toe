/**
 * Handle interactions with the game board
 * @returns {Object} The game board API
 */
function board() {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  /**
   * Gets the game board
   * @returns The board
   */
  function getBoard() {
    return board;
  }

  return {
    getBoard
  }
}

export default board;
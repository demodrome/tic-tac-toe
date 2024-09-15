/**
 * Handle interactions with the game board
 * @returns {Object} The game board API
 */
const board = (function () {
  const board = [
    ['X', '', ''],
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

  /**
   * Place a mark on the board
   * @param {Number} x The x position of the marker
   * @param {Number} y The y position of the marker
   * @param {String} marker The marker to place
   */
  function mark(x, y, marker) {
    // Only mark if the position is empty and a marker is present
    if (board[x][y]) {
      throw new Error(`[${x},${y}] has already been marked.`);
    }

    if (!marker) {
      throw new Error('No marker found.');
    }
    
    board[x][y] = marker;
  }

  return {
    getBoard,
    mark
  }
})();

export default board;
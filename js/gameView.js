/**
 * Create and update the game userinterface
 * @param {HTMLElement} root The container to render the game view to
 * @param {String} playerOneName Player 1's name
 * @param {String} playerTwoName Player 2's name
 * @returns {Object} The gameView API
 */
function gameView(root, playerOneName, playerTwoName) {
  /**
   * Setup and render the initial view of the game to the document
   */
  function setup() {
    const container = document.createElement('div');
    container.classList.add('game');

    const playerOneArea = document.createElement('div');
    playerOneArea.classList.add('player');

    const playerOneNameText = document.createElement('div');
    playerOneNameText.classList.add('player__name');
    playerOneNameText.classList.add('player--active');
    playerOneNameText.textContent = playerOneName;
    playerOneArea.appendChild(playerOneNameText);

    const playerOneScoreText = document.createElement('div');
    playerOneScoreText.classList.add('player__score');
    playerOneScoreText.setAttribute('data-player-one-score', '');
    playerOneScoreText.textContent = '0';
    playerOneArea.appendChild(playerOneScoreText);

    const board = document.createElement('div');
    board.classList.add('board');

    // Create and append row
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('row');

      // Create and append tile
      for (let j = 0; j < 3; j++) {
        const tile = document.createElement('button');
        tile.classList.add('tile');
        tile.setAttribute('data-x', i);
        tile.setAttribute('data-y', j);
        tile.textContent = '';
        row.appendChild(tile);
      }

      board.appendChild(row);
    }

    const playerTwoArea = document.createElement('div');
    playerTwoArea.classList.add('player');

    const playerTwoNameText = document.createElement('div');
    playerTwoNameText.classList.add('player__name');
    playerTwoNameText.textContent = playerTwoName;
    playerTwoArea.appendChild(playerTwoNameText);

    const playerTwoScoreText = document.createElement('div');
    playerTwoScoreText.classList.add('player__score');
    playerTwoScoreText.setAttribute('data-player-two-score', '');
    playerTwoScoreText.textContent = '0';
    playerTwoArea.appendChild(playerTwoScoreText);

    container.append(playerOneArea, board, playerTwoArea);
    root.appendChild(container);
  }

  /**
   * Update the board interface
   * @param {Array} board The game board
   */
  function update(board, playerOneScore, playerTwoScore) {
    document.querySelector('[data-player-one-score]').textContent = playerOneScore;
    document.querySelector('[data-player-two-score]').textContent = playerTwoScore;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);
        tile.textContent = board[j][i];
      }
    }
  }

  return {
    setup,
    update
  }
}

export default gameView;
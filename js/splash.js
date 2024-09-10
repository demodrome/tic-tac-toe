/**
 * Create and render a splash screen for the game
 * @returns {Object} The splash screen API
 */
function splash() {
  // Build the interface
  const container = document.createElement('div');
  container.classList.add('splash');
  const playerOneInputGroup = document.createElement('div');
  playerOneInputGroup.classList.add('input-group');
  const playerOneInputLabel = document.createElement('label');
  playerOneInputLabel.classList.add('input-label');
  playerOneInputLabel.setAttribute('for', 'player-one-name');
  playerOneInputLabel.textContent = 'Player 1 name:';
  const playerOneInputField = document.createElement('input');
  playerOneInputField.classList.add('player-name');
  playerOneInputField.setAttribute('id', 'player-one-name');
  playerOneInputField.setAttribute('data-player-one-name', '');
  playerOneInputField.setAttribute('autofocus', 'true');
  const playerTwoInputGroup = document.createElement('div');
  playerTwoInputGroup.classList.add('input-group');
  const playerTwoInputLabel = document.createElement('label');
  playerTwoInputLabel.classList.add('input-label');
  playerTwoInputLabel.setAttribute('for', 'player-two-name');
  playerTwoInputLabel.textContent = 'Player 2 name:';
  const playerTwoInputField = document.createElement('input');
  playerTwoInputField.classList.add('player-name');
  playerTwoInputField.setAttribute('id', 'player-two-name');
  const startButton = document.createElement('button');
  startButton.classList.add('btn');
  startButton.setAttribute('data-play', '')
  startButton.textContent = 'Play!';

  // Append to container
  playerOneInputGroup.append(playerOneInputLabel, playerOneInputField);
  playerTwoInputGroup.append(playerTwoInputLabel, playerTwoInputField);
  container.append(playerOneInputGroup, playerTwoInputGroup, startButton);

  /**
   * Renders the splash screen to the document & returns the player's input fields and the start button. The input fields and start button are needed to collect player names needed when creating the game, and the starting the game from 'app.js'.
   * @param {HTMLElement} root The element to draw the splash screen to
   * @returns {Object} The player's input fields and the start button
   */
  function render(root) {
    root.appendChild(container);
    
    return {
      playerOneInputField,
      playerTwoInputField,
      startButton
    };
  }

  return {
    render
  }
}

export default splash;
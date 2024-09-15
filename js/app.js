import splash from "./splash.js";
import gameController from "./gameController.js";

const root = document.querySelector('[data-game-container]');
const splashScreen = splash().render(root);

splashScreen.startButton.addEventListener('click', () => {
  // Start the game
  const game = gameController(
    splashScreen.playerOneInputField.value,
    splashScreen.playerTwoInputField.value
  );
  
  // Wipe game container prior to rendering game view
  root.innerHTML = "";
  game.startGame();
});
import splash from "./splash.js";

const root = document.querySelector('[data-game-container]');
const splashScreen = splash().render(root);

splashScreen.startButton.addEventListener('click', () => {
  // Start the game here
});
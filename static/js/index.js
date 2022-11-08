// Importing game.js
import {Game} from "./game/game.js";

// Waiting for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    // Creating the game instance
    let game = new Game(1, 5, 100, 0.01, 0.5);

    // Starting the game
    game.start();
});
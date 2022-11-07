// Importing game.js
import {Game} from "./game/game.js";

// Waiting for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    // Creating the game instance
    let game = new Game(10, 1, 5, 100, 0.01, 0.5);
    console.log(game);
    window.requestAnimationFrame(game.start());
});
/**
 * Class for the game instance
 */

import {Balloon} from "./balloon.js";

let runningInstance;

export class Game {

    #min_speed;
    #max_speed;
    #amplitude;
    #frequency;
    #decision_threshold;
    #balloons;
    #score;
    #requestFrameId

    /**
     * Constructor for the game instance
     * @param min_speed - the minimum speed of the balloons
     * @param max_speed - the maximum speed of the balloons
     * @param amplitude - the multiplier for the cos (frequency * y) function
     * @param frequency - the multiplier for the y coordinate in the cos (frequency * y) function
     * @param decision_threshold - the threshold for which the balloon is considered to be popped in random mode
     */
    constructor(min_speed, max_speed, amplitude, frequency, decision_threshold) {
        this.#min_speed = min_speed;
        this.#max_speed = max_speed;
        this.#amplitude = amplitude;
        this.#frequency = frequency;
        this.#decision_threshold = decision_threshold;
        this.#balloons = [];
        this.#score = 0;
        runningInstance = this;
    }

    /**
     * Game start and looping function
     */
    start(chrono) {
        // Verifying if we can get the template balloon
        if ('content' in document.createElement('template')) {
            // Getting the template balloon
            const template = document.querySelector('[data-id="balloon"]');

            // Cloning the template balloon
            const newBalloon = template.content.cloneNode(true);

            // Instantiating a new balloon object
            const balloonObject = new Balloon(500, 600, 5, 'red');

            // Adding the balloon to the array
            runningInstance.addBalloon(balloonObject);

            // Adding the balloon to the DOM
            document.body.appendChild(newBalloon);

            // Getting the balloon element
            const allBalloons = document.querySelectorAll('div.balloon');
            let lastAddedBalloon = allBalloons[allBalloons.length - 1];

            // Setting the balloon id in the dataset
            lastAddedBalloon.dataset.id = String(runningInstance.balloons.indexOf(balloonObject));

            // Setting the balloon background color
            lastAddedBalloon.style.backgroundColor = balloonObject.color;

            // Setting the balloon position
            lastAddedBalloon.style.transform = `translate(${balloonObject.x}px, ${balloonObject.y}px)`;

            // Displaying the balloon speed
            document.querySelector(`[data-id="${String(runningInstance.balloons.indexOf(balloonObject))}"]`).innerHTML = `${balloonObject.speed}`;
        }
        // runningInstance.requestFrameId = requestAnimationFrame(runningInstance.start);
    }

    // Getters and setters

    /**
     * FrameId getter
     * @returns {number}
     */
    get requestFrameId() {
        return this.#requestFrameId;
    }

    /**
     * FrameId setter
     * @param requestFrameId - the frameId to set
     */
    set requestFrameId(requestFrameId) {
        this.#requestFrameId = requestFrameId;
    }

    /**
     * Method that add a balloon to the array
     * @param balloon - the balloon to add
     */
    addBalloon(balloon) {
        this.#balloons.push(balloon);
    }

    /**
     * Balloons array getter
     * @returns {Array} - the balloons array
     */
    get balloons() {
        return this.#balloons;
    }

}
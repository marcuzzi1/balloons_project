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

    start () {
        console.log(runningInstance.getRequestFrameId());
        runningInstance.setRequestFrameId(requestAnimationFrame(runningInstance.start));
    }

    getRequestFrameId () {
        return this.#requestFrameId;
    }

    setRequestFrameId (requestFrameId) {
        this.#requestFrameId = requestFrameId;
    }

}
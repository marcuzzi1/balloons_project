/**
 * Class for the game instance
 */
import {Balloon} from "./balloon.js";

export class Game {

    balloons_count;
    min_speed;
    max_speed;
    amplitude;
    frequency;
    decision_threshold;
    balloons;
    score;
    finished;

    /**
     * Constructor for the game instance
     * @param balloons_count - the number of balloons to be created
     * @param min_speed - the minimum speed of the balloons
     * @param max_speed - the maximum speed of the balloons
     * @param amplitude - the multiplier for the cos (frequency * y) function
     * @param frequency - the multiplier for the y coordinate in the cos (frequency * y) function
     * @param decision_threshold - the threshold for which the balloon is considered to be popped in random mode
     */
    constructor(balloons_count, min_speed, max_speed, amplitude, frequency, decision_threshold) {
        this.balloons_count = balloons_count;
        this.min_speed = min_speed;
        this.max_speed = max_speed;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.decision_threshold = decision_threshold;
        this.balloons = [];
        this.score = 0;
        this.finished = false;
    }

    start = function (instance = this) {
        if (instance instanceof Game) {
            if (instance.balloons.length < instance.balloons_count){
                instance.balloons.push(new Balloon(0,0,0, "red"));
                console.log(`Instantiated ${instance.balloons.length} balloons`);
                instance.finished = (instance.balloons.length === instance.balloons_count);
                console.log(instance.finished);
                if (instance.finished === false) {
                    console.log(`Calling another time`);
                    window.requestAnimationFrame(instance.start());
                }
            }
        }
    }

}
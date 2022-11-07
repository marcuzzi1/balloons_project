/**
 * Class definition for the balloon object
 */
export class Balloon {

    /**
     * Constructor for the balloon object
     * @param x - the x position of the balloon
     * @param y - the y position of the balloon
     * @param speed - the speed of the balloon
     * @param color - the color of the balloon
     */
    constructor(x, y, speed, color) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
    }

    /**
     * Methods that update the coordinates of the balloon
     * @param newCoords - the new coordinates of the balloon
     */
    changePosition(newCoords) {
        this.x = newCoords.x;
        this.y = newCoords.y;
    }
    
}
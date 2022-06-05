import {
    WIDTH,
    HEIGHT,
    CELLSIZE,
    SPEED,
    COLORS,
    Direction,
    MAX_LEVEL
} from './constants.js';
import Grid from './Grid.js';
import Worm from './Worm.js';

class Game {
    constructor() {
        console.log( 'inside Game::constructor' );

        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        this.canvas.style.width = `${WIDTH * CELLSIZE}px`;
        this.canvas.style.height = `${HEIGHT * CELLSIZE}px`;

        this.canvas.width = WIDTH * CELLSIZE;
        this.canvas.height = HEIGHT * CELLSIZE;

        this.configuration = {
            level: 0,
            speed: SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: WIDTH,
            nbCellsY: HEIGHT,
            cellSideLength: CELLSIZE,
            color: COLORS[0]
        };

        // as soon as the game starts, we begin moving
        this.nextMove = 0;

        this.score = 0;

        this.grid = new Grid( this );
        this.worm = new Worm( this );

        document.addEventListener( 'keydown', this.onKeyDown );
    }

    start() {
        this.nextMove = 0;
        this.running = true;
        
        // this -> undefined
        requestAnimationFrame( this.loop );
    }

    stop() {
        this.running = false;
    }

    loop = ( time ) => {
        if( this.running ) {
            requestAnimationFrame( this.loop );

            if( time > this.nextMove ) {
                this.nextMove = time + this.configuration.speed;

                this.worm.move();

                switch( this.checkState() ) {
                    case -1:
                        this.gameOver();
                        break;
                    case 1:
                        this.worm.grow();
                        this.score += 100;
                        this.grid.eat( this.worm.getHead() );
                        
                        // no more apples - level completed
                        if( this.grid.isDone() ) {
                            this.levelUp();
                        }

                        break;
                    default:
                        this.paint();
                    }
                }
        }
    }

    paint() {
        const ctx = this.canvas.getContext( '2d' );

        const {
            width,
            height,
            color
        } = this.configuration;

        // background for the canvas
        ctx.fillStyle = color;
        ctx.fillRect( 0, 0, width, height );

        this.grid.draw( ctx );
        this.worm.draw( ctx );
    }

    checkState() {
        const cell = this.worm.getHead();

        if( this.isOutside( cell ) || this.worm.isWorm( cell ) ) {
            return - 1; // game over
        }

        if( this.grid.isApple( cell ) ) {
            return 1; // an apple cell
        }

        return 0;
    }

    levelUp() {
        this.score += 1000;
        this.configuration.level++;

        if( this.configuration.level >= MAX_LEVEL ) {
            this.win();
        } else {
            this.configuration.speed -= 7;
            this.configuration.color = COLORS[this.configuration.level];
            this.grid.seed();
        }
    }

    isOutside( cell ) {
        const { nbCellsX, nbCellsY } = this.configuration;
        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    gameOver() {
        alert( `Game over. You scored ${this.score}` );
        this.stop();
    }

    win() {
        alert( 'Kudos! You completed the game. Wait for Part 2 od Snake!' );
        this.stop();
    }

    onKeyDown = ( event ) => {
        event.preventDefault();

        switch( event.key ) {
            case 'ArrowUp':
                this.worm.setDirection( Direction.UP );
                break;
            case 'ArrowDown':
                this.worm.setDirection( Direction.DOWN );
                break;
            case 'ArrowLeft':
                this.worm.setDirection( Direction.LEFT );
                break;
            case 'ArrowRight':
                this.worm.setDirection( Direction.RIGHT );
                break;
        }
    }
}

export default Game;
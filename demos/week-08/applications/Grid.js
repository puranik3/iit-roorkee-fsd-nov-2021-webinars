import Cell from './Cell.js';
import {
    APPLES
} from './constants.js';

class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
    }

    seed() {
        const {
            nbCellsX,
            nbCellsY,
            level,
        } = this.game.configuration;

        const nbApples = ( level + 1 ) * APPLES;

        for( let i = 0; i < nbApples; i++ ) {
            let x = Math.floor( Math.random() * nbCellsX ); // [0, 49]
            let y = Math.floor( Math.random() * nbCellsY ); // [0, 19]

            this.apples.push( new Cell( x, y ) );
        }

        console.log( this );
    }

    draw( ctx ) {
        const {
            width,
            height,
            cellSideLength
        } = this.game.configuration;

        ctx.fillStyle = 'black';
        ctx.lineWidth = 1;

        // vertical lines
        for( let x = 0; x <= width; x += cellSideLength ) {
            ctx.beginPath();
            ctx.moveTo( x, 0 );
            ctx.lineTo( x, height );
            ctx.stroke();
        }

        // horizontal lines
        for( let y = 0; y <= height; y += cellSideLength ) {
            ctx.beginPath();
            ctx.moveTo( 0, y );
            ctx.lineTo( width, y );
            ctx.stroke();
        }

        // apples
        ctx.fillStyle = 'red';
        this.apples.forEach(cell => {
            ctx.fillRect(
                cell.x * cellSideLength,
                cell.y * cellSideLength,
                cellSideLength,
                cellSideLength
            )
        });
    }

    // find out if there is an apple at the provided cell. If so, return that apple.
    isApple( cell ) {
        return this.apples.find(
            apple => cell.x === apple.x && cell.y === apple.y
        );
    }

    // update the list of apples, by removing the apple at the given cell
    eat( cell ) {
        this.apples = this.apples.filter(
            apple => apple.x !== cell.x || apple.y !== cell.y
        );
    }

    isDone() {
        return this.apples.length === 0;
    }
}

export default Grid;
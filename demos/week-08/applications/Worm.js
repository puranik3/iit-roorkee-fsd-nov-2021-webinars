import { Direction } from './constants.js';
import Cell from './Cell.js';

class Worm {
    static INITIAL_SIZE = 3; // number of tail cells
    static INITIAL_DIRECTION = Direction.RIGHT;
    static INITIAL_POSITION = {
        x: 1,
        y: 1
    };

    constructor( game ) {
        this.game = game;

        this.size = Worm.INITIAL_SIZE;
        this.direction = Worm.INITIAL_DIRECTION;

        this.head = new Cell( Worm.INITIAL_POSITION.x, Worm.INITIAL_POSITION.y );

        this.tail = [];
    }

    draw( ctx ) {
        const {
            cellSideLength
        } = this.game.configuration;

        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        const x = cellSideLength * this.head.x;
        const y = cellSideLength * this.head.y;

        ctx.fillStyle = '#111111';
        ctx.fillRect(
            x, y, cellSideLength, cellSideLength
        );

        // eyes
        switch (this.direction) {
            case Direction.UP:
                ctx.beginPath();
                ctx.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case Direction.DOWN:
                ctx.beginPath();
                ctx.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case Direction.RIGHT:
                ctx.beginPath();
                ctx.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case Direction.LEFT:
                ctx.beginPath();
                ctx.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
        }

        // tail
        ctx.fillStyle = '#333333';
        this.tail.forEach(
            cell => ctx.fillRect(
                cellSideLength * cell.x,
                cellSideLength * cell.y,
                cellSideLength,
                cellSideLength
            )
        );
    }

    setDirection( direction ) {
        const curDirection = this.direction;

        if( curDirection === Direction.UP && ( direction === Direction.UP || direction === Direction.DOWN ) ) {
            return;
        }
        
        if( curDirection === Direction.DOWN && ( direction === Direction.UP || direction === Direction.DOWN ) ) {
            return;
        }
        
        if( curDirection === Direction.RIGHT && ( direction === Direction.RIGHT || direction === Direction.LEFT ) ) {
            return;
        }
        
        if( curDirection === Direction.LEFT && ( direction === Direction.RIGHT || direction === Direction.LEFT ) ) {
            return;
        }

        this.direction = direction;
    }

    move() {
        // current head cell becomes a tail cell when the snakes moves a step
        // this.tail = [ n_cell, n-1_cell, ... , 1 ]
        this.tail.push( this.head );

        this.head = this.getNext();

        // fix the worm size
        if( this.tail.length > this.size ) {
            this.tail.shift(); // shift removes the first item in the array
        }
    }

    getNext() {
        const direction = this.direction;

        switch( direction ) {
            case Direction.UP:
                return new Cell( this.head.x, this.head.y - 1 );
            case Direction.DOWN:
                return new Cell( this.head.x, this.head.y + 1 );
            case Direction.RIGHT:
                return new Cell( this.head.x + 1, this.head.y );
            case Direction.LEFT:
                return new Cell( this.head.x - 1, this.head.y );
        }
    }

    getHead() {
        return this.head;
    }

    grow( size = 3 ) {
        this.size += size;
    }

    isWorm( cell ) {
        return this.tail.find( tail => cell.x === tail.x && cell.y === tail.y )
    }
}

export default Worm;
import State from './models/State';
import IScore from './models/IScore';
import IVelocity from './models/IVelocity';
import { random } from './helper';

const board = document.querySelector( '.board' ) as HTMLElement;
const ball = document.querySelector( '.ball' ) as HTMLElement;
const paddle_1 = document.querySelector( '.paddle_1' ) as HTMLElement;
const paddle_2 = document.querySelector( '.paddle_2' ) as HTMLElement;
const score_1 = document.querySelector( '.player_1_score' ) as HTMLElement;
const score_2 = document.querySelector( '.player_2_score' ) as HTMLElement;
const message = document.querySelector( '.message' ) as HTMLElement;

// console.log( board, ball, paddle_1 );

class Game {
    private scores : IScore = {
        player1: 0,
        player2: 0
    };

    private SPEED = 0.085; // decides how much the paddle moves in 1 step (as a fraction of the viewport height)

    private state = State.STOPPED;

    board_coord = board.getBoundingClientRect();
    ball_coord = ball.getBoundingClientRect();
    paddle_1_coord = paddle_1.getBoundingClientRect();
    paddle_2_coord = paddle_2.getBoundingClientRect();
    paddle_height = this.paddle_1_coord.height;
    ball_top = ball.style.top;
    ball_left = ball.style.left;

    constructor() {
        console.log( this.ball_coord );
    }

    start() {
        this.bindListeners();
    }

    reset() {
        this.state = State.STOPPED;

        // bring the ball to the center
        ball.style.top = '';
        ball.style.left = '';
        this.ball_coord = ball.getBoundingClientRect();

        message.innerHTML = "Press Enter to Start";
    }

    getVelocity() {
        return {
            dx: random( 3, 8 ) * ( random( 0, 1 ) ? -1 : 1 ),
            dy: random( 3, 8 ) * ( random( 0, 1 ) ? -1 : 1 )
        } as IVelocity;
    }

    bindListeners() {
        document.addEventListener( 'keydown', ( event : KeyboardEvent ) => { // "this" will be the Game object now
            if( event.key === 'Enter' ) {
                if( this.state === State.STOPPED ) {
                    this.state = State.STARTED;

                    message.innerHTML = 'Game on';
            
                    requestAnimationFrame(() => {
                        const velocity = this.getVelocity();
                        this.moveBall( velocity );
                    });
                }
            }

            console.log( event );

            if( this.state === State.STARTED ) {
                if( event.key === 'w' ) {
                    paddle_1.style.top = Math.max(
                        this.board_coord.top,
                        this.paddle_1_coord.top - window.innerHeight * this.SPEED
                    ) + 'px';
                    this.paddle_1_coord = paddle_1.getBoundingClientRect();
                }

                if( event.key === 's' ) {
                    paddle_1.style.top = Math.min(
                        this.board_coord.bottom - this.paddle_height,
                        this.paddle_1_coord.top + window.innerHeight * this.SPEED
                    ) + 'px';
                    this.paddle_1_coord = paddle_1.getBoundingClientRect();
                }

                if( event.key === 'ArrowUp' ) {
                    paddle_2.style.top = Math.max(
                        this.board_coord.top,
                        this.paddle_2_coord.top - window.innerHeight * this.SPEED
                    ) + 'px';
                    this.paddle_2_coord = paddle_2.getBoundingClientRect();
                }
                
                if( event.key === 'ArrowDown' ) {
                    paddle_2.style.top = Math.min(
                        this.board_coord.bottom - this.paddle_height,
                        this.paddle_2_coord.top + window.innerHeight * this.SPEED
                    ) + 'px';
                    this.paddle_2_coord = paddle_2.getBoundingClientRect();
                }
            }
        });
    }

    bounce( velocity : IVelocity ) {
        let newVelocity = this.getVelocity();

        let curXDirection = velocity.dx > 0 ? 1 : -1;
        let curYDirection = velocity.dy > 0 ? 1 : -1;

        newVelocity.dx = Math.abs( newVelocity.dx ) * -curXDirection;
        newVelocity.dy = Math.abs( newVelocity.dy ) * curYDirection;

        return newVelocity;
    }

    moveBall( velocity : IVelocity ) {
        // if the ball crossed the top / bottom edge of the board
        if( 
            this.ball_coord.top <= this.board_coord.top
            ||
            this.ball_coord.bottom >= this.board_coord.bottom
        ) {
            // change the direction
            velocity.dy = -velocity.dy;
        }

        // when the hits a paddle / misses the paddle
        if( 
            this.ball_coord.left <= this.paddle_1_coord.right && 
            this.ball_coord.top >= this.paddle_1_coord.top &&
            this.ball_coord.bottom <= this.paddle_1_coord.bottom
            ||
            this.ball_coord.right >= this.paddle_2_coord.left && 
            this.ball_coord.top >= this.paddle_2_coord.top &&
            this.ball_coord.bottom <= this.paddle_2_coord.bottom
        ) {
            velocity = this.bounce( velocity );
        }

        if( this.ball_coord.right >= this.board_coord.right ) {
            this.scores.player1++;
            score_1.innerHTML = '' + this.scores.player1;
            this.reset();
            return;
        }
        
        if( this.ball_coord.left <= this.board_coord.left ) {
            this.scores.player2++;
            score_2.innerHTML = '' + this.scores.player2;
            this.reset();
            return;
        }

        // new coordinates for the ball - move it to that poisiton
        ball.style.top = this.ball_coord.top + velocity.dy + 'px';
        ball.style.left = this.ball_coord.left + velocity.dx + 'px';

        this.ball_coord = ball.getBoundingClientRect();

        requestAnimationFrame(() => {
            this.moveBall( velocity );
        });
    }
}

const game = new Game();
game.start();
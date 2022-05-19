(function() {
    // DOM nodes
    const cells = document.querySelectorAll( '.cell' );
    const gameStatusEl = document.querySelector( '.game--status' );
    const gameRestartBtn = document.querySelector( '.game--restart' );

    // shared variables
    let gameActive = false;
    let currentPlayer, gameState;

    function resetGameState() {
        // variables reset
        currentPlayer = 'X';
        gameState = [
            '', '', '',
            '', '', '',
            '', '', ''
        ];

        // game status message is set to the starting player
        gameStatusEl.innerHTML = currentPlayerTurn();

        // cells are cleared
        cells.forEach(function( cell ) {
            cell.innerHTML = '';
        });
    }

    resetGameState();

    const winningStates = [
        [ 0, 1, 2 ], // row 1
        [ 3, 4, 5 ], // row 2
        [ 6, 7, 8 ], // row 3
        [ 0, 3, 6 ], // col 1
        [ 1, 4, 7 ], // col 2
        [ 2, 5, 8 ], // col 3
        [ 0, 4, 8 ], // major diagonal
        [ 2, 4, 6 ] // minor diagonal
    ];

    function currentPlayerTurn() {
        return `It's ${currentPlayer}'s turn`;
    }

    function handleRestartGame() {
        gameActive = true;
        resetGameState();
    }

    function handleCellClick( event ) {
        const cell = event.target;
        const idx = parseInt( cell.getAttribute( 'data-cell-index' ) );

        if( !gameActive || gameState[idx] !== '' ) {
            return;
        }

        handleCellPlayed( cell, idx );
        handleResultValidation();
    }

    function handleCellPlayed( cell, idx ) {
        gameState[idx] = currentPlayer;
        cell.innerHTML = currentPlayer;
    }

    function handleResultValidation() {
        let roundWon = false;

        // check how to use array some() instead of for loop
        for( let i = 0; i < winningStates.length; i++ ) {
            const winningState = winningStates[i];
            const a = gameState[winningState[0]];
            const b = gameState[winningState[1]];
            const c = gameState[winningState[2]];

            if( a === '' || b === '' || c === '' ) {
                continue;
            }

            if( a === b && b === c ) {
                roundWon = true;
                break;
            }
        }

        if( roundWon ) {
            gameStatusEl.innerHTML = `Player ${currentPlayer} has won!`;
            gameActive = false;
            return;
        }

        let roundDraw = !gameState.includes( '' );
        if( roundDraw ) {
            gameStatusEl.innerHTML = `Game ended in a draw`;
            gameActive = false;
            return;
        }

        handlePlayerChange();
    }

    function handlePlayerChange() {
        currentPlayer = ( currentPlayer === 'X' ? 'O' : 'X' );
        gameStatusEl.innerHTML = currentPlayerTurn();
    }

    gameRestartBtn.addEventListener( 'click', handleRestartGame );
    cells.forEach(
        function( cell ) {
            cell.addEventListener( 'click', handleCellClick );
        }
    );
})();
(function() {
    const btnStart = document.getElementById( 'btn-start' );
    const imgStart = document.getElementById( 'img-start' );
    const timeInput = document.getElementById( 'time' );
    const remainingTimeEl = document.getElementById( 'remaining-time' ); 
    const messageEl = document.getElementById( 'message' );

    let remainingTime, id;

    function startTimer() {
        remainingTime = parseInt( timeInput.value );

        // if id has a value the setInterval() has already been called - so do not call it again
        if( id === undefined ) {
            id = setInterval(function() {
                if( remainingTime === 0 ) {
                    clearInterval( id );
                    id = undefined;
                    remainingTimeEl.style.color = 'initial';
                    remainingTimeEl.style.fontSize = '1em';
                    return;
                }

                remainingTime--;
                remainingTimeEl.innerHTML = remainingTime;

                if( remainingTime < 10 ) {
                    remainingTimeEl.style.color = 'red';
                    remainingTimeEl.style.fontSize = '1.5em';
                }
            }, 1000);
        }
    };

    btnStart.addEventListener( 'click', startTimer );
    imgStart.addEventListener( 'click', startTimer );
})();
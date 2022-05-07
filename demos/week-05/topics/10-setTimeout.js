// Hey Node JS! Please execute f after 2 seconds
setTimeout(function() { // f
    console.log( 'Hurray! I finally ran!' );
    clearInterval( id );
}, 5000);

const id = setInterval(function() {
    console.log( 'stop me if you can' );
}, 1000);
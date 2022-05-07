// primitives (including strings) are immutable
const welcome = 'Hello, world';

const anotherWelcome = welcome.replace( 'world', 'universe' );

console.log( welcome );
console.log( anotherWelcome );

// explore substring

// split
const quote = 'With great power comes great responsibility';
const words = quote.split( ' ' ); // single space as delimiter
console.log( words );
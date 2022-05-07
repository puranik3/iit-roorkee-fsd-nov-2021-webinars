// function declaration syntax
function sum( x, y ) {
    return x + y;
}

console.log( sum( 12, 13 ) );

// function expression syntax (more general syntax)
const add = function( x, y ) {
    return x + y;
};

console.log( add( 12, 13 ) );
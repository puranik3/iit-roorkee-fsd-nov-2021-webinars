const sum1 = function( x, y ) {
    return x + y;
};

console.log( sum1( 12, 13 ) );

// arrow function (aka lambda)
const sum2 = ( x, y ) => {
    return x + y;
};

console.log( sum2( 12, 13 ) );

const sum3 = ( x, y ) => x + y;

console.log( sum3( 12, 13 ) );
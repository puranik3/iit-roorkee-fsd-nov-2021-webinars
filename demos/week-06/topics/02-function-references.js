function sum( x, y ) {
    return x + y;
}

const add = sum; // add and sum refer to the SAME function in memory

console.log( add( 12, 13 ) );
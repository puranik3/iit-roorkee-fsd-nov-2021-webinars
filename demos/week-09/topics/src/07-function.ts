// give the data types inline
function sum1( x : number, y : number ) : number {
    return x + y;
}

sum1( 12, 13 );

// give the type of the function separately
type BinaryFunction = ( x : number, y : number ) => number;

const sum2 : BinaryFunction = ( x, y ) => x + y; 

export {}
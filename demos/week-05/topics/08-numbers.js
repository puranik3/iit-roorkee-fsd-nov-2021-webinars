console.log( parseInt( '123.4567' ) );
console.log( parseFloat( '123.4567' ) );

const num = 123.4567;
console.log( num.toFixed( 2 ) );

console.log( 0 / 0 );
console.log( 12 * 'hello' );

// NaN is not comparable
console.log( NaN === NaN ); // false!

console.log( 12 * 'hello' === NaN ); // false
console.log( isNaN( 12 * 'hello' ) ); // true
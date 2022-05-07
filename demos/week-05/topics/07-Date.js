const today = new Date();
console.log( today.toLocaleTimeString() );

const independenceDay = new Date( 1947, 7, 15, 0, 0, 0, 0 );
console.log( independenceDay );

console.log( independenceDay.getDay() );
console.log( independenceDay.getFullYear() );

independenceDay.setDate( 20 );
console.log( independenceDay );
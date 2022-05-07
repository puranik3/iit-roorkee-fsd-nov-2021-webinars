const primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 'Twenty Three' ];

console.log( primes.length );

// push to the end
primes.push( 29, 31 );

console.log( primes );

let result;

// pop removes an item, and returns it
result = primes.pop();

console.log( result );
console.log( primes );

// shift, unshift - please explore

const fruits = [
    'Kiwi',
    'Grapes',
    'Apple',
    'Musk melon',
    'Jackfruit',
    'Pear'
];

fruits.sort();

console.log( fruits );

// slice
const someFruits = fruits.slice( 1, 4 );
console.log( someFruits );

// splice
const fruitsAgain = [
    'Kiwi',
    'Grapes',
    'Apple',
    'Musk melon',
    'Jackfruit',
    'Pear'
];

// add and remove at a particular location
// index, howManyToRemove, itemAdd1, itemAdd2, ...
fruitsAgain.splice( 3, 2, 'Strawberry', 'Pineapple' );

console.log( fruitsAgain );
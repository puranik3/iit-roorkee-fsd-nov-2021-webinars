// iterator methods
// they iterate through the items of the array
// they have similar set of arguments
// forEach, filter, find, map

const persons = [
    { name: 'John', age: 32, city: 'Bangalore' },
    { name: 'Jane', age: 28, city: 'Bangalore' },
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Delhi' }
];

// we want to process each item
// forEach can be used where you need to loop through (like for loop)
persons.forEach(
    function( item ) {
        console.log( `${item.name} is ${item.age} years old` );
    }
);

// who is age >= 40?
const results = persons.filter(
    function( item ) {
        return item.age >= 40;
    }
);

console.log( results );

// [ 'John', 'Jane', ... ] -> use map
const names = persons.map(
    function( item, idx ) {
        return item.name;
    }
);

console.log( names );
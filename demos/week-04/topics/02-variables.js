let x; // undefined

console.log( x );

// "implicit" types
x = 100;
console.log( x );
console.log( typeof x ); // 'number' (int/float)

x = "Hello, string";
console.log( x );
console.log( typeof x ); // 'string'

console.clear();
console.log( x.length ); // 13

x = true;
console.log( x );
console.log( typeof x ); // 'boolean'
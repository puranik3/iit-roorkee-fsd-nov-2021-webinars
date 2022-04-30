let global = 100;

if( true ) {
    let x = 1; // local variable (accessible in this block)
}

// console.log( x ); // error

function foo() {
    let y = 2;
}

// console.log( y ); // error
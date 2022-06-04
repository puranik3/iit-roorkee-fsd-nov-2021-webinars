function sum( x, y, callback ) {
    // non-blocking functions
    setTimeout(
        () => callback( x + y ),
        2000
    );

    // return undefined;
}

sum( 12, 13, result => console.log( result ) );
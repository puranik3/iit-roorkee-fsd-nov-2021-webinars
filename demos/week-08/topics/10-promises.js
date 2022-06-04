function sum( x, y ) {
    return new Promise(( resolve ) => {
        setTimeout( () => resolve( x + y ), 2000 );
    });
}

sum( 12, 13 )
    .then(result1 => {
        console.log( 'result1 = ', result1 );
        return sum( result1, 14 )
    })
    .then(result2 => {
        console.log( 'result2 = ', result2 );
        return sum( result2, 15 );
    })
    .then(result3 => {
        console.log( 'result3 = ', result3 );
    });
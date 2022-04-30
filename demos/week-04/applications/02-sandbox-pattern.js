let numRows = 10;

// top half of the watchglass (inverted triangle)
for( let i = 1, numSpaces = 0, numStars = numRows; i <= numRows; i++, numSpaces++, numStars-- ) {
    let line = '';

    for( let j = 1; j <= numSpaces; j++ ) {
        line += ' ';
    }

    // number of '* ' = 
    for( j = 1; j <= numStars; j++ ) {
        line += '* ';
    }

    console.log( line );
}

// EXERCISE: Please complete the lower part of the watchglass pattern (upright triangle)
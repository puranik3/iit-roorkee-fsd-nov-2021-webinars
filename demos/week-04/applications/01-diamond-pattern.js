let numRows = 5;

// 1 iteration for printing a line
for( let i = 1; i <= 5; i++ ) {
    let line = '';

    // add spaces for the line
    // num of spaces = numRows - i
    for( let j = 1; j <= numRows - i; j++ ) {
        line = line + ' ';
    }

    // add stars for the line
    // num of stars = 2 * i - 1
    for( let j = 1; j <= 2 * i - 1; j++ ) {
        line += '*'; // line = line + '*';
    }

    console.log( line );
}

// lower part of the diamond
for( let i = 4; i >= 1; i-- ) {
    let line = '';

    // add spaces for the line
    // num of spaces = numRows - i
    for( let j = 1; j <= numRows - i; j++ ) {
        line += ' ';
    }

    // add stars for the line
    // num of stars = 2 * i - 1
    for( let j = 1; j <= 2 * i - 1; j++ ) {
        line += '*';
    }

    console.log( line );
}

const generateList = ( min : number, max : number ) => (new Array(max - min + 1)).fill(min).map( ( num, idx ) => num + idx )

export {
    generateList
};
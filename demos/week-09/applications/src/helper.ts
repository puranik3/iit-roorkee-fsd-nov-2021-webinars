const random = ( min : number, max : number ) => min + Math.floor( Math.random() * Math.abs( max - min + 1 ) );

export {
    random
};
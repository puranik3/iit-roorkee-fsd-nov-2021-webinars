const outer = function() {
    console.log( 'outer this = ', this );

    // has its own context
    const innerOld = function() {
        console.log( 'innerOld this = ', this );
    };

    innerOld();
    
    // does not have its own context
    const innerNew = () => {
        console.log( 'innerOld this = ', this );
    };

    innerNew();
}

outer.call( { x: 100 } );
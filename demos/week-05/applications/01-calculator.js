(function() {
    const operand1 = document.getElementById( 'operand-1' );
    const operand2 = document.getElementById( 'operand-2' );
    const operator = document.getElementById( 'operator' );
    const goBtn = document.getElementById( 'btn-go' );
    const result1 = document.getElementById( 'result-1' );

    goBtn.addEventListener( 'click', function() {
        // value property of a DOM node holds the user input
        console.log( typeof operand1.value ); // 'string'

        const operand1Num = parseFloat( operand1.value );
        const operand2Num = parseFloat( operand2.value );

        let result;

        switch( operator.value ) {
            case '+':
                result = operand1Num + operand2Num;
                break;
            case '-':
                result = operand1Num - operand2Num;
                break;
            case '*':
                result = operand1Num * operand2Num;
                break;
            case '/':
                result = operand1Num / operand2Num;
                break;
            default:
                alert( 'Invalid choice of operator' );
        }

        result1.innerHTML = '<strong>' + result + '</strong>';
    });
})();

(function() {
    const expressionEl = document.getElementById( 'expression' );
    const goExpressionBtn = document.getElementById( 'btn-expression-go' );
    const result2 = document.getElementById( 'result-2' );

    goExpressionBtn.addEventListener( 'click', function() {
        const expression = expressionEl.value;

        try {
            const result = eval( expression );
            
            if( result === undefined || isNaN( result ) || result === Infinity ) {
                throw new Error( 'Unsupported operation' );
            }
            
            result2.innerHTML = '<strong>' + result + '</strong>';
        } catch( error ) {
            alert( error.message );
        }
    });
})();
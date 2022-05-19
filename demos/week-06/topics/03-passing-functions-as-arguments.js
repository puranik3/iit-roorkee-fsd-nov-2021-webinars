function printPerson( person, getTitle ) {
    const title = getTitle( person );
    console.log( `${title} ${person.name} is ${person.age} years old` );
}

const john = {
    name: 'John',
    age: 32,
    gender: 'm'
};

function getEnglishTitle( person ) {
    return person.gender === 'm' ? 'Mr.' : 'Ms.';
}

// person = john, getTitle = getEnglishTitle
printPerson( john, getEnglishTitle );

printPerson( { name: 'Jane', age: 28, gender: 'f' }, getEnglishTitle );

printPerson( john, function( person ) {
    return person.gender === 'm' ? 'Monsieur' : 'Mademoiselle';
});
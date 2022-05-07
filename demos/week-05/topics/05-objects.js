// Objects can be create without the need to define a class
// object literal syntax
const pushpa = {
    'name': 'Pushpa',
    year: 2022,
    'actors and actresses': [
        'Allu Arjun'
    ],
    boxOfficeCollection: {
        week1: 150,
        week2: 100
    },
    getTotalCollection: function() {
        return this.boxOfficeCollection.week1 + this.boxOfficeCollection.week2;
    }
};

let keyName = 'actors and actresses'

console.log( pushpa.name );
console.log( pushpa[keyName] );
console.log( pushpa['actors and actresses'] );

console.log( pushpa.getTotalCollection() );

// dynamic bag of properties
delete pushpa.year;

console.log( pushpa );

// normal data member added
pushpa.songs = [
    'Teri Jhalak'
];

console.log( pushpa );

// add a method
pushpa.addActorOrActress = function( member ) {
    this['actors and actresses'].push( member );
};

pushpa.addActorOrActress( 'Rashmika Mandanna' );

console.log( pushpa );

console.log( pushpa.boxOfficeCollection.week1 );
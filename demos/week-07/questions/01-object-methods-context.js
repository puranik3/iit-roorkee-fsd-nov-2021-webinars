var john = {
    name: 'john',
    getName: function() { // a new function
        console.log(this);
        return this.name;
    }
};

console.log(john.getName());
const getName = john.getName; // same function is referred to by both john.getName, and getName
getName();
console.log(getName === john.getName); // true

const mary = {
    name: 'Mary',
    age: 30,
    celebrateBirthday: function(){ // a new function
        this.age++;
    }
};

console.log( john.getName === mary.getName ); // false
const cb = mary.celebrateBirthday;

console.log( cb === mary.celebrateBirthday ); // true 

// common prototype
const personPrototype = {
    celebrateBirthday() {
        this.age++;
    }
};

// every object has a "prototype"
const john = {
    name: 'John',
    age: 32,
    __proto__: personPrototype
};

const jane = {
    name: 'Jane',
    age: 28,
    __proto__: personPrototype
};

// common prototype for general objects
// Object.prototype

console.log( john.__proto__ );
console.log( jane.__proto__ );
console.log( john.__proto__ === jane.__proto__ );
console.log( john.__proto__ === Object.prototype );

// any pototype method can be directly called
john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );
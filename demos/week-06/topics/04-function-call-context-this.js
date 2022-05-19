function sum() {
    console.log( this ); // global object (global in Node / window in browser)
}

sum();

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
    }
};

john.celebrateBirthday();
console.log( john );

// jane does not have her own celebrateBirthday, but she can "borrow" john's celebrateBirthday
const jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane ); // this -> jane
john.celebrateBirthday.call( jane ); // this -> jane
john.celebrateBirthday.call( jane ); // this -> jane
console.log( jane );

// bind helps us to permanently create a new function that will call the underlying function with a given context
const janeCb = john.celebrateBirthday.bind( jane );
janeCb();
janeCb();
janeCb();
console.log( jane );
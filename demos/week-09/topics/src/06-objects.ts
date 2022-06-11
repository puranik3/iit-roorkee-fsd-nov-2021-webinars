type Person = {
    name: string,
    readonly age?: number | null,
    spouse?: string // optional property
};

const john : Person = {
    name: 'John',
    age: 32
};

john.spouse = 'Jane';
// john.age = 33; // readonly

console.log( john );

export {}
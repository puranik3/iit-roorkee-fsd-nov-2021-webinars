// ... (rest / spread)
// copying object / arrays
// merging objects / arrays
const john = {
    name: 'John',
    age: 32
};

const johnOfficial = {
    name: 'Jonathan Doe',
    company: 'Example Consulting',
    role: 'Accountant'
};

const johnMasterDetails = {
    ...john,
    spouse: 'Jane',
    ...johnOfficial,
    children: [
        'Jack',
        'Jill'
    ]
};

console.log( johnMasterDetails );
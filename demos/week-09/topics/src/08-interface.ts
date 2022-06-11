interface IPerson {
    name: string,
    age: number, // can be made readonly if needed
    children: string[],
    spouse?: string,
    celebrateBirthday: () => void,
    addChild: ( name : string ) => boolean
}

// interface IPerson {
//     company: string
// }

// interface can be used as a type for an object
const john : IPerson = {
    name: 'John',
    age: 32,
    children: [],
    celebrateBirthday() {
        this.age++
    },
    addChild( name : string ) {
        if( this.children.includes( name ) ) {
            return false;
        }

        this.children.push( name );
        return true;
    }
}

class Person implements IPerson {
    // public name : string;
    // public age : number;
    children: string[] = [];

    constructor( public name : string, public age : number ) {
        // this.name = name;
        // this.age = age;
    }

    celebrateBirthday() {
        this.age++
    }

    addChild( name : string ) {
        if( this.children.includes( name ) ) {
            return false;
        }

        this.children.push( name );
        return true;
    }
}

export {}
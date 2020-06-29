/**
 * Without using types
 */

let thing: string | number | string[] | boolean;
let returnSomething1 = (something: string | number | string[] | boolean) => something;
console.log(returnSomething1('super cool'));


/**
 * When using types
 * Example 1: Basic version
 * Example 2: With type guards - typeof and instanceof
 */

 type Something = string | number | string[] | boolean;

// let returnSomething2 = (something: Something) => something;
// console.log(returnSomething2('another cool'));

let returnSomething2 = (something: Something) => {
    if(something instanceof Array) {
        let joinedThings = '';
        something.forEach(thing => {
            joinedThings += ` ${thing}`;
        });
        console.log('joinedThings = ' + joinedThings);
    } else {
        console.log('something = ' + something);
    }
};

// returnSomething2(false);
returnSomething2(['test', 'user']);
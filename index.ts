/**
 * what is type script and basics
 * @description Typescript is Javascript with static typing
 * Compiler knows the variable type when typing
 * TSC does not allow this and IDE start displaying the error
 * IDE will warns us when trying to pass incorrect parameter type to a function
 * TSC compiler infers the type
 */

let someString: string = 'abc';
// someString = 1234;

let coolFunction = (a: number, b: string) => a+b;
console.log(coolFunction(1, '2')); // this will work
// console.log(coolFunction(2, 2));   // but not this, IDE will start displaying the errors

let string1 = 'somevalue';
// string1 = [1,2,3];  // IDE and TSC will throw error


type Salutation = {greeting: string, name: string};

function greet({greeting, name}: Salutation): string {
    const numberOfTimes = 1_234_567_890;
    return `${greeting}, ${name} for ${numberOfTimes}!`;
}

console.log(greet({greeting: 'Hello', name: 'Durai'}));



interface Admin {
    id: string,
    role: string
}

interface User {
    id: string,
    email: string
}

/**
 *@param userRole : Admin or User 
 * we can use typescript 'in' operator to check if the property exists on the object
 * and to hint the tsc on the type of the object
 */

function redirectByUserRole(userRole: Admin | User) {
    if ('role' in userRole) {

        console.log('Admin: ' + userRole.role);
        // redirect logic for admin
    } else {
        console.log('User');
        // redirect logic for user
    }
}

redirectByUserRole({id: '1', role: 'SuperAdmin'});

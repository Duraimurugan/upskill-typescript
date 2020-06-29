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

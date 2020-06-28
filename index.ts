type Salutation = {greeting: string, name: string};

function greet({greeting, name}: Salutation): string {
    const numberOfTimes = 1_234_567_890;
    return `${greeting}, ${name} for ${numberOfTimes}!`;
}

console.log(greet({greeting: 'Hello', name: 'Durai'}));

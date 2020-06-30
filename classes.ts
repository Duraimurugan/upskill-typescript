/**
 * @description 
 * Typescript classes are functions
 * Functions are Object, so they can have properties
 * Class can have the methods
 * Adding access modifiers to the properties of the constructors makes the class know they are properties of a class
 * If access modifiers are not used, they would be treated as arguments
 * Constructor is run when the class member is initialized
 * private property cannot be accessed outside of the class
 * protected can be used to access in the derived class 
 */

class ComicBookCharacter {
    constructor(public alias: string,
        public health: number,
        public strength: number,
        public secretIdentity: string
    ) {  }
}

class SuperHero extends ComicBookCharacter {
    traits = ['empathy', 'moral code'];
}

class SuperVillain extends ComicBookCharacter {
    flaws = ['evil'];
}

let jubilee = new SuperHero('Jubilee', 23, 233, 'Lee');
let scarletWitch = new SuperVillain('Scarlet', 23, 233, 'Wanda');

console.log(jubilee);
console.log('/////');
console.log(scarletWitch);


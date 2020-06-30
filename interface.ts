/**
 * Interface will only describe the shape of the value
 * ? makes them a optional parameter
 */

interface ComicBookCharacter {
    secretIdentity?: string,
    alias: string,
    health: number
}

let superHero: ComicBookCharacter = {
    alias: 'Superman',
    health: 2
}

let superVillain: ComicBookCharacter = {
    secretIdentity: 'Jack',
    alias: 'Joker',
    health: 5
}
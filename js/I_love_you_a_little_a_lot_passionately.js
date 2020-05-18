// my try, it is a little bit of huge code :D 

function howMuchILoveYou(nbPetals) {
    if (nbPetals === 1) {
        return `I love you`;
    }
    if (nbPetals === 2) {
        return `a little`;
    }
    if (nbPetals === 3) {
        return `a lot`;
    }
    if (nbPetals === 4) {
        return `passionately`;
    }
    if (nbPetals === 5) {
        return `madly`;
    }
    if (nbPetals === 6) {
        return `not at all`
    }
    if (nbPetals % 6 === 1) {
        return `I love you`;
    }
    if (nbPetals % 6 === 2) {
        return `a little`;
    }
    if (nbPetals % 6 === 3) {
        return `a lot`;
    }
    if (nbPetals % 6 === 4) {
        return `passionately`;
    }
    if (nbPetals % 6 === 5) {
        return `madly`;
    }
    if (nbPetals % 6 === 0) {
        return `not at all`
    }
}

// the best practice from codeWars
/*
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}
*/
console.log(howMuchILoveYou(7),`==> "I love you"`);
console.log(howMuchILoveYou(3),`==> "a lot"`);
console.log(howMuchILoveYou(6),`==> "not at all"`);

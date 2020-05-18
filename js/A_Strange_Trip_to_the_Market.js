// my try

function isLockNessMonster(s) {
    return s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50");
}

// another way
/*
const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);
*/
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
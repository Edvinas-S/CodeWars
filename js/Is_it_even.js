// my try

function testEven(n) {
    if (n % 2 === 0) {
    return true;
    }
return false;    
}

// it seems i can write it much shorter, thanks for CodeWars
/*
function testEven(n) {
    return n%2===0;
}
*/
console.log(testEven(0), `==> true, testEven for 0`);
console.log(testEven(0.5), `==> false, testEven for 0.5`);
console.log(testEven(1), `==> false, testEven for 1`);
console.log(testEven(2), `==> true, testEven for 2`);
console.log(testEven(-4), `==> true, testEven for -4`);
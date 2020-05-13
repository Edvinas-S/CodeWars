// my try

function divide(weight){
    if (weight === 2) {
    return false;
    }
    if (weight % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// from codeWars
/*
function divide(weight){
    return weight > 2 && !(weight % 2);
}
*/
console.log(divide(4),`==> true`);
console.log(divide(2),`==> false`);
console.log(divide(5),`==> false`);
console.log(divide(88),`==> true`);
console.log(divide(100),`==> true`);
console.log(divide(67),`==> false`);
console.log(divide(90),`==> true`);
console.log(divide(10),`==> true`);
console.log(divide(99),`==> false`);
console.log(divide(32),`==> true`);
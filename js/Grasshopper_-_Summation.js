// my function

function summation(num) {
    let sum = 0;
    for (i=0; i<=num; i++) {
        sum += i;
    }
    return sum;
}

// but it can be writen in this way (from codeWars)
/*
function summation(num) {
    return num * (num + 1) / 2
}
*/
console.log(summation(1),`==> 1`);
console.log(summation(8),`==> 36`);
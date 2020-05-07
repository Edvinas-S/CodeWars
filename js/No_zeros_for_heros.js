// my code (with some help :))

function noBoringZeros(n) {
    if (n === 0) {
        return 0
    }
    while (n % 10 === 0) {
        n = n / 10;
    }
return n
}

//it can be writen like this
/*
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}
*/
console.log(noBoringZeros(99),`==> 99`);
console.log(noBoringZeros(1450),`==> 145`);
console.log(noBoringZeros(960000),`==> 96`);
console.log(noBoringZeros(1050),`==> 105`);
console.log(noBoringZeros(-1050),`==> -105`);
console.log(noBoringZeros(0),`==> 0`);
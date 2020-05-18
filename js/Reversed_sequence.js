// my try

function reverseSeq(n) {
    let arr_n = [];
    for (let i=n; i>=1; i--) {
        arr_n.push(i);
    }
    return arr_n
}

// the clever one
/*
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
}
*/
console.log(reverseSeq(5),`==> [5, 4, 3, 2, 1]`);
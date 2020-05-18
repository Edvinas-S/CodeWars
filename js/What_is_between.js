// my try

function between(a, b) {
    let arr = [];
    for (let i=a; i<=b; i++) {
        arr.push(i);
    }
    return arr
}

// cleverest from codeWars
/*
function between(q, q2) {
    let a = Array.from({length:(q2-q+1)},(_,i)=>i+q);
    return a;
}
*/
console.log(between(1, 4),`==> [1, 2, 3, 4]`);
console.log(between(-2, 2),`==> [-2, -1, 0, 1, 2]`);
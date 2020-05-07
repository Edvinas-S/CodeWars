// my try

function enough(cap, on, wait) {
    if (on + wait <= cap) {
        return 0;
    }
    return on + wait - cap;
}

// the clever one :)
/*
function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}
*/
console.log(enough(10, 5, 5),`==> 0`);
console.log(enough(100, 60, 50),`==> 10`);
console.log(enough(20, 5, 5),`==> 0`);
// my code

function digitize(n) {
    const new_arry = Array.from(String(n), Number).reverse();
    return new_arry;
}

// most common
/*
function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}
*/
console.log(digitize(35231),`==> [1,3,2,5,3]`);
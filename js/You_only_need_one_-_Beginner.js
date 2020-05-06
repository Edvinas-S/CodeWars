// 

function check(a, x) {
if (Array.isArray(a) !== true ) {
    return console.error(`Error, first must be a array`);
}
if (a.length === 0 ) {
    return console.error(`Error, must be not empty array`);
}
let result = false;
    for(i=0; i<a.length; i++){
    if (a[i] === x) {
    result  = true;
    }
  }
  return result;
}

// i like this one:
/*
function check(a,x){
    if (a.includes(x)) {
    return true;
    }
    return false;
}
*/
console.log(check([66, 101], 66),`==> true`);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45),`==> true`);
console.log(check(['t', 'e', 's', 't'], 'e'),`==> true`);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'),`==> false`);
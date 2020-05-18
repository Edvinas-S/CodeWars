// my try

function sumMix(x){
    let sum = 0;
    for (i=0; i<x.length; i++) {
            sum += parseInt(x[i]);
        }
    return sum
    }

// p.s. The join() method returns the array as a string.
// The eval() function evaluates or executes an argument.
// If the argument is an expression, eval() evaluates the expression. 
// If the argument is one or more JavaScript statements, eval() executes the statements.
/*
function sumMix(x){
    return eval( x.join("+") )
}
*/
console.log(sumMix([9, 3, '7', '3']),`==> 22`);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]),`==> 42`); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']),`==> 41`);
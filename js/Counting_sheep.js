// my code

function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for (i=0; i<=arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheep += +1;
        }
    }
    return sheep;
}

// thanks to codeWars 
// p.s. "use the Boolean() function to find out if an expression (or a variable) is true"
/*
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}
*/
var arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(arrayOfSheep) == 17, "There are 17 sheeps in total")
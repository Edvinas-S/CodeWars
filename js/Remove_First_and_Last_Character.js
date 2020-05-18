// my try

function removeChar(str){
    let new_str = ``;
    for (i=1; i<str.length-1; i++) {
        new_str += str[i];
    }
return new_str
}

// p.s. The slice() method returns the selected elements in an array, as a new array object.
// p.s. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// from codeWars:
/*
function removeChar(str) {
    return str.slice(1, -1);
}
*/
console.log(removeChar('eloquent'),`==> 'loquen'`);
console.log(removeChar('country'),`==> 'ountr'`);
console.log(removeChar('person'),`==> 'erso'`);
console.log(removeChar('place'),`==> 'lac'`);